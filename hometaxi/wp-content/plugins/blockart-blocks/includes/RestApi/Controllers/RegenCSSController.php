<?php
/**
 * RegenCSS controller.
 *
 * @package BlockArt
 */

namespace BlockArt\RestApi\Controllers;

defined( 'ABSPATH' ) || exit;

use BlockArt\Blocks\CSS;

/**
 * RegenCSS controller.
 */
class RegenCSSController extends \WP_REST_Controller {

	/**
	 * The namespace of this controller's route.
	 *
	 * @var string The namespace of this controller's route.
	 */
	protected $namespace = 'blockart/v1';

	/**
	 * The base of this controller's route.
	 *
	 * @var string The base of this controller's route.
	 */
	protected $rest_base = 'regen-css';

	/**
	 * {@inheritDoc}
	 * @return void
	 */
	public function register_routes() {
		register_rest_route(
			$this->namespace,
			'/' . $this->rest_base,
			array(
				array(
					'methods'             => \WP_REST_Server::CREATABLE,
					'callback'            => array( $this, 'regen_css' ),
					'permission_callback' => array( $this, 'regen_css_permissions_check' ),
					'args'                => array(
						'id' => array(
							'sanitize_callback' => 'absint',
							'required'          => true,
						),
					),
				),
			)
		);
	}

	/**
	 * Check if a given request has access to get items.
	 *
	 * @return true|\WP_Error
	 */
	public function regen_css_permissions_check() {
		if ( ! current_user_can( 'manage_options' ) ) {
			return new \WP_Error(
				'rest_forbidden',
				esc_html__( 'You are not allowed to access this resource.', 'blockart-blocks' ),
				array( 'status' => rest_authorization_required_code() )
			);
		}
		return true;
	}

	/**
	 * Regenerate CSS for a post.
	 *
	 * @param \WP_REST_Request $request Full data about the request.
	 *
	 * @return \WP_REST_Response
	 */
	public function regen_css( \WP_REST_Request $request ): \WP_REST_Response {
		$id = $request->get_param( 'id' );

		// If ID is 0, delete the CSS saved in the options table.
		if ( 0 === $id ) {
			delete_option( '_blockart_blocks_css' );
			return new \WP_REST_Response( array( 'success' => true ), 200 );
		}

		// If is block theme delete the CSS saved in the post meta.
		// If not block theme, parse the blocks and regenerate the CSS.
		if ( blockart()->is_block_theme ) {
			delete_post_meta( $id, '_blockart_blocks_css' );
		} else {
			$content = get_post_field( 'post_content', $id );
			if ( ! empty( $content ) ) {
				$blocks = parse_blocks( $content );
				new CSS( $blocks, $id, true );
			}
		}

		return new \WP_REST_Response( array( 'success' => true ), 200 );
	}
}
