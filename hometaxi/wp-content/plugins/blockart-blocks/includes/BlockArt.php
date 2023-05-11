<?php
/**
 * BlockArt plugin main class.
 *
 * @since 1.0.0
 * @package BlockArt
 */

namespace BlockArt;

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

use BlockArt\RestApi\RestApi;
use BlockArt\Traits\Singleton;
use BlockArt\Blocks\Blocks;

/**
 * BlockArt setup.
 *
 * Include and initialize necessary files and classes for the plugin.
 *
 * @since   1.0.0
 */
final class BlockArt {

	use Singleton;

	/**
	 * Check if current theme is a block theme.
	 *
	 * @var bool $is_block_theme
	 */
	public $is_block_theme = false;

	/**
	 * Plugin Constructor.
	 *
	 * @since 1.0.0
	 * @return void
	 */
	protected function __construct() {
		Activation::init();
		Deactivation::init();
		Update::init();
		RestApi::init();
		Admin::init();
		Review::init();
		Blocks::init();
		ScriptStyle::init();
		$this->init_hooks();
	}

	/**
	 * Initialize hooks.
	 *
	 * @since 1.0.0
	 */
	private function init_hooks() {
		add_action( 'init', array( $this, 'after_wp_init' ), 0 );
	}

	/**
	 * Initialize BlockArt when WordPress initializes.
	 *
	 * @since 1.0.0
	 * @return void
	 */
	public function after_wp_init() {
		/**
		 * BlockArt before init.
		 *
		 * @since 1.0.0
		 */
		do_action( 'blockart_before_init' );
		$this->update_plugin_version();
		$this->load_text_domain();
		$this->register_settings();
		$this->is_block_theme = function_exists( 'wp_is_block_theme' ) && wp_is_block_theme();
		/**
		 * BlockArt init.
		 *
		 * Fires after BlockArt has loaded.
		 *
		 * @since 1.0.0
		 */
		do_action( 'blockart_init' );
	}

	/**
	 * Update the plugin version.
	 *
	 * @since 1.0.0
	 * @return void
	 */
	private function update_plugin_version() {
		$blockart_version = get_option( '_blockart_version', '' );
		do_action( 'blockart_version_update', BLOCKART_VERSION, $blockart_version );
		update_option( '_blockart_version', BLOCKART_VERSION );
	}

	/**
	 * Load plugin text domain.
	 */
	private function load_text_domain() {
		load_plugin_textdomain( 'blockart', false, plugin_basename( BLOCKART_PLUGIN_DIR ) . '/languages' );
	}

	/**
	 * Register settings.
	 *
	 * @since 1.0.0
	 */
	private function register_settings() {
		register_setting(
			'_blockart_settings',
			'_blockart_dynamic_css_print_method',
			array(
				'type'              => 'string',
				'show_in_rest'      => true,
				'default'           => 'internal-css',
				'sanitize_callback' => 'sanitize_text_field',
			)
		);
		register_setting(
			'_blockart_settings',
			'_blockart_admin_footer_text_rated',
			array(
				'type'              => 'boolean',
				'show_in_rest'      => true,
				'default'           => false,
				'sanitize_callback' => 'rest_sanitize_boolean',
			)
		);
	}

	/**
	 * Get the direct filesystem object.
	 *
	 * @return \WP_Filesystem_Direct|null
	 */
	public function get_filesystem() {
		global $wp_filesystem; /** @var \WP_Filesystem_Direct $wp_filesystem */

		if ( ! $wp_filesystem || 'direct' !== $wp_filesystem->method ) {
			require_once ABSPATH . '/wp-admin/includes/file.php';
			$credentials = request_filesystem_credentials( '', 'direct' );
			WP_Filesystem( $credentials );
		}

		return $wp_filesystem;
	}
}
