<?php
/**
 * BlockArt Rest API.
 *
 * @package BlockArt
 */

namespace BlockArt\RestApi;

defined( 'ABSPATH' ) || exit;

use BlockArt\RestApi\Controllers\ImageImportController;
use BlockArt\RestApi\Controllers\LibraryDataController;
use BlockArt\RestApi\Controllers\RegenCSSController;
use BlockArt\Traits\Singleton;

/**
 * BlockArt Rest API.
 */
class RestApi {

	use Singleton;

	/**
	 * Constructor.
	 */
	protected function __construct() {
		$this->init_hooks();
	}

	/**
	 * Init hooks.
	 *
	 * @return void
	 */
	private function init_hooks() {
		add_action( 'rest_api_init', array( $this, 'register_rest_routes' ) );
	}

	/**
	 * Register rest routes.
	 *
	 * @return void
	 */
	public function register_rest_routes() {
		$controllers = array(
			LibraryDataController::class,
			ImageImportController::class,
			RegenCSSController::class,
		);

		foreach ( $controllers as $controller ) {
			$controller = new $controller();
			$controller->register_routes();
		}
	}
}
