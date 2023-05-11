<?php
/**
 * Update class.
 *
 * @package BlockArt
 */

namespace BlockArt;

defined( 'ABSPATH' ) || exit;

use BlockArt\Traits\Singleton;

/**
 * Update class.
 */
class Update {

	use Singleton;

	/**
	 * {@inheritDoc}
	 */
	protected function __construct() {
		add_action( 'blockart_version_update', array( $this, 'on_update' ), 10, 2 );
	}

	/**
	 * On update.
	 *
	 * @param string $new_version Current version.
	 * @param string $old_version Saved previous version.
	 *
	 * @return void
	 */
	public function on_update( string $new_version, string $old_version ) {
		if ( version_compare( $old_version, '2.0.0', '<' ) ) {
			$this->update_to_2_0_0();
		}
		if ( version_compare( $old_version, '2.0.0.1', '<' ) ) {
			$this->update_to_2_0_0_1();
		}
	}

	/**
	 * Update to version 2.0.0.
	 *
	 * @return void
	 */
	private function update_to_2_0_0() {
		global $wpdb;

		// Delete old meta keys.
		$wpdb->query( "DELETE FROM $wpdb->postmeta WHERE meta_key = '_blockart_css' OR meta_key = '_blockart_active'" );

		// Delete old options.
		delete_option( '_blockart_widget_css' );
	}

	/**
	 * Update to version 2.0.0.1.
	 *
	 * @return void
	 */
	private function update_to_2_0_0_1() {
		global $wpdb;
		$wpdb->query( "DELETE FROM $wpdb->postmeta WHERE meta_key = '_blockart_blocks_css'" );
		delete_option( '_blockart_blocks_css' );
	}
}
