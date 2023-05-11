<?php
/**
 * Register and enqueue scripts for plugin.
 *
 * @since 1.0.0
 * @package BlockArt
 */

namespace BlockArt;

defined( 'ABSPATH' ) || exit;

use BlockArt\Traits\Singleton;

/**
 * Register and enqueue scripts for plugin.
 *
 * @since 1.0.0
 */
class ScriptStyle {

	use Singleton;

	/**
	 * Constructor.
	 */
	protected function __construct() {
		$this->init_hooks();
	}

	/**
	 * Initialize hooks.
	 *
	 * @since 1.0.0
	 */
	private function init_hooks() {
		add_action( 'init', array( $this, 'register_scripts' ) );
	}

	/**
	 * Register scripts and styles for plugin.
	 *
	 * @since 1.0.0
	 */
	public function register_scripts() {
		global $pagenow;

		$admin_asset  = $this->get_asset_file( 'admin' );
		$blocks_asset = $this->get_asset_file( 'blocks' );
		$suffix       = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '.min';

		// Admin assets.
		wp_register_style(
			'blockart-admin',
			plugins_url( 'dist/admin.css', BLOCKART_PLUGIN_FILE ),
			array( 'wp-components' ),
			$admin_asset['version']
		);
		wp_register_script(
			'blockart-admin',
			plugins_url( "/dist/admin$suffix.js", BLOCKART_PLUGIN_FILE ),
			$admin_asset['dependencies'],
			$admin_asset['version'],
			true
		);
		wp_localize_script(
			'blockart-admin',
			'_BLOCKART_ADMIN_',
			array(
				'cssPrintMethod' => get_option( '_blockart_dynamic_css_print_method' ),
				'version'        => BLOCKART_VERSION,
				'adminURL'       => admin_url(),
				'nonce'          => wp_create_nonce( 'blockart-admin-nonce' ),
			)
		);

		// Block assets.
		wp_register_style(
			'blockart-blocks',
			plugins_url( 'dist/style-blocks.css', BLOCKART_PLUGIN_FILE ),
			is_admin() ? array( 'wp-editor' ) : null,
			$blocks_asset['version']
		);
		wp_register_style(
			'blockart-blocks-editor',
			plugins_url( 'dist/blocks.css', BLOCKART_PLUGIN_FILE ),
			array( 'wp-edit-blocks' ),
			$blocks_asset['version']
		);
		wp_register_script(
			'blockart-blocks',
			plugins_url( "/dist/blocks$suffix.js", BLOCKART_PLUGIN_FILE ),
			$blocks_asset['dependencies'],
			$blocks_asset['version'],
			true
		);
		wp_set_script_translations( 'blockart-blocks', 'blockart', BLOCKART_LANGUAGES );
		wp_localize_script(
			'blockart-blocks',
			'_BLOCKART_',
			array(
				'isNotPostEditor' => 'widgets.php' === $pagenow || 'customize.php' === $pagenow,
				'isWP59OrAbove'   => is_wp_version_compatible( '5.9' ),
				'nonce'           => wp_create_nonce( '_blockart_nonce' ),
				'ajaxUrl'         => admin_url( 'admin-ajax.php' ),
				'mediaItems'      => array_map(
					function( $item ) {
						$item                  = (array) $item;
						$item['media_details'] = wp_get_attachment_metadata( $item['ID'] );
						$item['alt_text']      = get_post_meta( $item['ID'], '_wp_attachment_image_alt', true );
						$item['mime_type']     = $item['post_mime_type'];
						$item['source_url']    = wp_get_attachment_url( $item['ID'] );
						return $item;
					},
					get_posts(
						array(
							'post_type'      => 'attachment',
							'post_status'    => 'inherit',
							'posts_per_page' => -1,
							'orderby'        => 'title',
							'order'          => 'ASC',
						)
					)
				),
			)
		);
	}

	/**
	 * Get asset file
	 *
	 * @param string $prefix Filename prefix.
	 * @return array|mixed
	 */
	private function get_asset_file( string $prefix ) {
		$asset_file = dirname( BLOCKART_PLUGIN_FILE ) . "/dist/$prefix.asset.php";

		return file_exists( $asset_file )
			? include $asset_file
			: array(
				'dependencies' => array(),
				'version'      => BLOCKART_VERSION,
			);
	}
}
