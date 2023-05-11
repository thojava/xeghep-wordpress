<?php
/**
 * BlockArt Blocks.
 *
 * Manages all the blocks & block categories.
 * Manages the blocks that need to be prepared for CSS generation.
 *
 * @since 1.0.0
 * @package BlockArt
 */

namespace BlockArt\Blocks;

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

use BlockArt\Traits\Singleton;

/**
 * BlockArt Blocks.
 *
 * Manages all the blocks & block categories.
 * Manages the blocks that need to be prepared for CSS generation.
 *
 * @since 1.0.0
 */
class Blocks {

	use Singleton;

	const BLOCK_TYPES = array(
		'buttons',
		'button',
		'heading',
		'image',
		'section',
		'column',
		'spacing',
		'paragraph',
	);

	/**
	 * Blocks that need to be prepared for CSS generation.
	 *
	 * @var array[]
	 */
	private $blocks = array();

	/**
	 * Blocks used in widget areas that need to be prepared for CSS generation.
	 *
	 * @var array[]
	 */
	private $widget_blocks = array();

	/**
	 * Holds fonts used in current blocks.
	 *
	 * @var array
	 */
	private $fonts = array();

	/**
	 * Constructor.
	 */
	protected function __construct() {
		$this->init_hooks();
	}

	/**
	 * BlockArt/Blocks_Manager Constructor.
	 *
	 * @since 1.0.0
	 */
	private function init_hooks() {
		$block_categories_hook = version_compare( get_bloginfo( 'version' ), '5.8', '>=' ) ?
			'block_categories_all' :
			'block_categories';

		add_filter( $block_categories_hook, array( $this, 'block_categories' ), PHP_INT_MAX, 2 );
		add_action( 'init', array( $this, 'register_blocks' ) );
		add_action( 'wp_head', array( $this, 'prepare_blocks_for_css_generation' ), 0 );
		add_filter( 'pre_render_block', array( $this, 'prepare_blocks_for_css_generation' ), 10, 2 );
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_block_styles' ) );
		add_action( 'customize_save_after', array( $this, 'maybe_clear_cached_widget_block_styles' ) );
		add_action( 'rest_after_save_widget', array( $this, 'maybe_clear_cached_widget_block_styles' ) );
		add_action( 'after_switch_theme', array( $this, 'maybe_clear_cached_all_block_styles' ), 10, 2 );
		add_action( 'save_post', array( $this, 'maybe_clear_or_update_cached_block_styles' ), 10, 3 );
	}

	/**
	 * Add "BlockArt" category to the blocks listing in post edit screen.
	 *
	 * @param array $block_categories All registered block categories.
	 * @return array
	 * @since 1.0.0
	 */
	public function block_categories( array $block_categories ): array {
		return array_merge(
			array(
				array(
					'slug'  => 'blockart',
					'title' => esc_html__( 'BlockArt', 'blockart' ),
				),
			),
			$block_categories
		);
	}

	/**
	 * Register all the blocks.
	 *
	 * @since 1.0.0
	 */
	public function register_blocks() {
		$dist_dir = dirname( BLOCKART_PLUGIN_FILE ) . '/dist';
		foreach ( self::BLOCK_TYPES as $block ) {
			register_block_type_from_metadata( $dist_dir . '/' . $block );
		}
	}

	/**
	 * Prepare blocks.
	 *
	 * @return void|null
	 */
	public function prepare_blocks_for_css_generation() {
		// For block theme.
		if ( blockart()->is_block_theme && doing_filter( 'pre_render_block' ) ) {
			$args           = func_get_args();
			$block          = $args[1];
			$this->blocks[] = $block;
			return $args[0];
		}

		// For non-block theme.
		if (
			! blockart()->is_block_theme &&
			doing_action( 'wp_head' )
		) {
			$content = get_the_content();

			if ( has_blocks( get_the_ID() ) ) {
				$blocks       = parse_blocks( $content );
				$this->blocks = ! empty( $this->blocks ) ? array_merge( $this->blocks, $blocks ) : $blocks;
			}

			$this->widget_blocks = parse_blocks(
				array_reduce(
					get_option( 'widget_block', array() ),
					function( $acc, $curr ) {
						if ( ! empty( $curr['content'] ) ) {
							$acc .= $curr['content'];
						}
						return $acc;
					},
					''
				)
			);
		}
	}

	/**
	 * Enqueue generated CSS for blocks.
	 *
	 * @return void
	 */
	public function enqueue_block_styles() {
		if ( ! empty( $this->blocks ) ) {
			$this->maybe_enqueue_or_add_inline_style( new CSS( $this->blocks ) );
		}

		if ( ! empty( $this->widget_blocks ) && ! blockart()->is_block_theme ) {
			$this->maybe_enqueue_or_add_inline_style( new CSS( $this->widget_blocks, 'widget' ) );
		}

		$this->maybe_enqueue_fonts();
	}

	/**
	 * Enqueue blocks style for frontend.
	 *
	 * @param CSS $css CSS instance.
	 * @param bool $version Version.
	 * @return void
	 */
	public function maybe_enqueue_or_add_inline_style( CSS $css, bool $version = false ) {
		$stylesheet = $css->get_stylesheet();

		if ( empty( $stylesheet ) ) {
			return;
		}

		// If it is previewing, always use internal CSS.
		$css_print_method = $css->is_previewing() ? 'internal-css' : get_option( '_blockart_dynamic_css_print_method', 'internal-css' );
		$filename         = $css->get_filename();
		$this->fonts      = $css->extend( $this->fonts, $css->get_fonts() );

		// If file doesn't exist, use internal CSS.
		if (
			'external-css-file' === $css_print_method &&
			! file_exists( BLOCKART_UPLOAD_DIR . "/$filename" )
		) {
			$css_print_method = 'internal-css';
		}

		if ( 'external-css-file' === $css_print_method ) {
			$id = $css->get_id();
			wp_enqueue_style( "blockart-blocks-css-$id", BLOCKART_UPLOAD_DIR_URL . "/$filename", array( 'blockart-blocks' ), $version );
			return;
		}

		wp_add_inline_style( 'blockart-blocks', $stylesheet );
	}

	/**
	 * Maybe enqueue Google fonts.
	 *
	 * @return void
	 */
	private function maybe_enqueue_fonts() {
		if ( empty( $this->fonts ) ) {
			return;
		}
		$google_fonts = '';

		// Parse fonts array to URL format.
		foreach ( $this->fonts as $family => $variants ) {
			$google_fonts .= str_replace( ' ', '+', trim( $family ) ) . ':' . join( ',', $variants ) . '|';
		}

		if ( empty( $google_fonts ) ) {
			return;
		}

		wp_enqueue_style(
			'blockart-google-fonts',
			add_query_arg(
				array(
					'family'  => $google_fonts,
					'display' => 'swap',
				),
				'//fonts.googleapis.com/css'
			),
			array(),
			BLOCKART_VERSION
		);
	}


	/**
	 * Clear cached widget styles when widget is updated.
	 *
	 * @return void
	 */
	public function maybe_clear_cached_widget_block_styles() {
		$cached = get_option( '_blockart_blocks_css', array() );
		unset( $cached['widget'] );
		update_option( '_blockart_blocks_css', $cached );
	}

	/**
	 * Clear cached styles when theme is switched.
	 *
	 * If is block theme then clear all cached styles stored in options table.
	 * As block theme fully depends on blocks.
	 *
	 * @param $name string Theme name.
	 * @param \WP_Theme $theme Theme object.
	 * @return void
	 */
	public function maybe_clear_cached_all_block_styles( string $name, \WP_Theme $theme ) {
		if ( $theme->is_block_theme() ) {
			delete_option( '_blockart_blocks_css' );
		}
	}

	/**
	 * Clear or update cached styles.
	 *
	 * @param int $id Post ID.
	 * @param \WP_Post $post Post object.
	 * @return void
	 */
	public function maybe_clear_or_update_cached_block_styles( $id, \WP_Post $post, bool $update ) {
		// Bail if post is not published.
		// Fixes double CSS generation when post is published.
		if ( ! $update ) {
			return;
		}

		// Don't make style for reusable blocks.
		if ( 'wp_block' === $post->post_type ) {
			return;
		}

		// Clear cached styles when template part or template is updated.
		if ( 'wp_template_part' === $post->post_type || 'wp_template' === $post->post_type ) {
			delete_option( '_blockart_blocks_css' );
			return;
		}

		// If is block theme, clear cached styles when post is updated.
		// Do not make style for block theme while doing rest request.
		if ( blockart()->is_block_theme ) {
			delete_post_meta( $id, '_blockart_blocks_css' );
			return;
		}

		// Bail if post content doesn't have blocks.
		if ( ! has_blocks( $post->post_content ) ) {
			return;
		}

		// Update cached styles when post is updated for non-block theme.
		new CSS( parse_blocks( $post->post_content ), $id, true );
	}
}
