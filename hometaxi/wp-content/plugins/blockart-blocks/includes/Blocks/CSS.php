<?php
/**
 * CSS class.
 *
 * @since 2.0.0
 * @package BlockArt
 */

namespace BlockArt\Blocks;

defined( 'ABSPATH' ) || exit;

/**
 * CSS class.
 *
 * Generate stylesheet from blocks of current post type or template.
 *
 * @since 2.0.0
 */
class CSS {

	const TABLET_BREAKPOINT = '62em';
	const MOBILE_BREAKPOINT = '48em';
	const DEVICES           = array(
		'desktop',
		'tablet',
		'mobile',
	);

	/**
	 * Holds current blocks.
	 *
	 * @var array $blocks
	 */
	private $blocks;

	/**
	 * Holds current post ID or current template type.
	 *
	 * @var false|int|mixed|string $id
	 */
	private $id;

	/**
	 * Holds fonts used in current page.
	 *
	 * @var array $fonts
	 */
	private $fonts = array();

	/**
	 * Holds CSS data.
	 *
	 * @var array $css
	 */
	private $css = array();

	/**
	 * Stylesheet for current page or template.
	 *
	 * @var string $stylesheet
	 */
	private $stylesheet = '';

	/**
	 * Unique filename for current page or template.
	 *
	 * @var string $filename
	 */
	private $filename = '';

	/**
	 * Is in preview mode.
	 *
	 * @var bool $is_previewing
	 */
	private $is_previewing;

	/**
	 * Holds block metadata.
	 *
	 * @var array $block_metadata
	 */
	private $block_metadata = array();


	/**
	 * Should update.
	 *
	 * Determines if the stylesheet should be updated.
	 *
	 * @var bool
	 */
	private $should_update;

	/**
	 * @var bool Has old markup for eg. Button.
	 */
	private $has_old_markup = false;

	/**
	 * Constructor.
	 *
	 * @param array $blocks Blocks array.
	 * @param string|int $id Post ID or template type.
	 * @param bool $should_update Should update.
	 */
	public function __construct( array $blocks, $id = '', bool $should_update = false ) {
		$this->blocks        = $blocks;
		$this->id            = empty( $id ) ? $this->make_id() : $id;
		$this->is_previewing = $this->set_is_previewing();
		$this->should_update = $should_update;

		if ( empty( $this->get_id() ) ) {
			return;
		}

		$this->check_for_old_markup();
		$this->maybe_generate();
	}

	/**
	 * Check for old markup.
	 *
	 * In older version of Button block the markup was different.
	 * Now button is a block and it has innerBlocks.
	 *
	 * @param array $blocks
	 *
	 * @return void
	 */
	private function check_for_old_markup( array $blocks = array() ) {
		$blocks = empty( $blocks ) ? $this->blocks : $blocks;
		foreach ( $blocks as $block ) {
			if ( 'blockart/button' === $block['blockName'] ) {
				if ( empty( $block['innerBlocks'] ) ) {
					$this->has_old_markup = true;
					break;
				}
			} else {
				if ( ! empty( $block['innerBlocks'] ) ) {
					$this->check_for_old_markup( $block['innerBlocks'] );
				}
			}
		}
	}

	/**
	 * Get id.
	 *
	 * @return false|int|mixed|string
	 */
	public function get_id() {
		return $this->id;
	}

	/**
	 * Is previewing.
	 *
	 * @return bool
	 */
	public function is_previewing(): bool {
		return $this->is_previewing;
	}

	/**
	 * Make id.
	 *
	 * If classic theme return current page or post ID.
	 * If block theme return id if singular page or template type.
	 *
	 * @return false|int
	 */
	private function make_id() {
		$id = false;

		if ( ! blockart()->is_block_theme ) {
			if ( is_singular() ) {
				$id = get_the_ID();
			}

			return $id;
		}

		if ( is_front_page() && is_home() ) {
			$id = 'home';
		} elseif ( is_front_page() && ! is_home() ) {
			$id = 'front_page';
		} elseif ( is_home() && ! is_front_page() ) {
			$id = 'blog';
		} elseif ( is_archive() ) {
			if ( is_category() ) {
				$id = 'category';
			} elseif ( is_tag() ) {
				$id = 'tag';
			} elseif ( is_author() ) {
				$id = 'author';
			} elseif ( is_date() ) {
				$id = 'date';
			} elseif ( is_post_type_archive() ) {
				$id = 'post_type_archive';
			} elseif ( is_tax() ) {
				$id = 'taxonomy';
			}
		} elseif ( is_search() ) {
			$id = 'search';
		} elseif ( is_404() ) {
			$id = '404';
		} elseif ( is_singular() ) {
			$id = get_the_ID();
		}

		return $id;
	}

	/**
	 * Get stylesheet.
	 *
	 * @return string
	 */
	public function get_stylesheet(): string {
		return $this->stylesheet;
	}

	/**
	 * Get filename.
	 *
	 * @return string
	 */
	public function get_filename(): string {
		return $this->filename;
	}

	/**
	 * Get fonts.
	 *
	 * @return array
	 */
	public function get_fonts(): array {
		return $this->fonts;
	}

	/**
	 * Maybe generate CSS.
	 *
	 * If CSS is already saved, use it.
	 *
	 * @return void
	 */
	private function maybe_generate() {
		if ( empty( $this->blocks ) ) {
			return;
		}

		// If it is updating, don't use saved CSS.
		$saved = $this->should_update ? false : ( is_int( $this->id ) ?
			get_post_meta( $this->id, '_blockart_blocks_css', true ) :
			get_option( '_blockart_blocks_css', array() )[ $this->id ] ?? [] );

		// If not saved or is previewing, generate CSS.
		if ( empty( $saved ) || empty( $saved['stylesheet'] ) || $this->is_previewing() ) {
			// Get metadata for all Blockart blocks which have information about CSS properties.
			$this->block_metadata = array_filter(
				\WP_Block_Type_Registry::get_instance()->get_all_registered(),
				function( $key ) {
					return false !== strpos( $key, 'blockart' );
				},
				ARRAY_FILTER_USE_KEY
			);
			$this->generate();
			$this->make_stylesheet();
			$this->save_stylesheet();
			return;
		}

		$this->stylesheet = $saved['stylesheet'];
		$this->filename   = $saved['filename'] ?? '';
		$this->fonts      = $saved['fonts'] ?? array();
	}

	/**
	 * Generate CSS.
	 *
	 * @param mixed $blocks List of blocks or null.
	 * @param array $css CSS data.
	 * @return void
	 */
	private function generate( $blocks = null, array $css = array() ) {
		$blocks = $blocks ?? $this->blocks;

		if ( empty( $blocks ) ) {
			return;
		}

		foreach ( $blocks as $block ) {
			$blockart_block = $this->is_blockart_block( $block );
			if ( false !== $blockart_block ) {
				$name = $block['blockName'];
				if ( $this->has_old_markup ) {
					$name = 'blockart/button' === $name ? 'blockart/button-inner' : $name;
				}
				$metadata = $this->block_metadata[ $name ]->attributes ?? null;
				$attrs    = $block['attrs'];
				$id       = $blockart_block['id'];

				if ( $metadata ) {
					foreach ( $metadata as $key => $data ) {
						if ( ! isset( $data['style'] ) ) {
							continue;
						}

						$value = $attrs[ $key ] ?? null;

						if ( in_array( $data['type'], array( 'object', 'array' ), true ) ) {
							$value = $this->extend( $data['default'] ?? array(), (array) ( $value ?? array() ) );
						} else {
							$value = $value ?? ( $data['default'] ?? null );
						}

						$args = array(
							$key,
							$value,
							$id,
							$blockart_block['name'],
							$metadata,
							$attrs,
						);

						if ( empty( $value ) ) {
							continue;
						}

						switch ( true ) {
							case isset( $value['border'] ):
								$css = $this->extend(
									$css,
									$this->border( ...$args )
								);
								break;
							case isset( $value['background'] ):
								$css = $this->extend(
									$css,
									$this->background( ...$args )
								);
								break;
							case isset( $value['typography'] ):
								if ( isset( $value['family'] ) ) {
									$this->generate_fonts( $value );
								}
								$css = $this->extend(
									$css,
									$this->typography( ...$args )
								);
								break;
							case isset( $value['boxShadow'] ):
								$css = $this->extend(
									$css,
									$this->box_shadow( ...$args )
								);
								break;
							case isset( $value['dimension'] ):
								$css = $this->extend(
									$css,
									$this->dimension( ...$args )
								);
								break;
							default:
								$css = $this->extend(
									$css,
									$this->general( ...$args )
								);
						}
					}
				}
			}

			// If block has inner blocks, generate CSS for them.
			if ( ! empty( $block['innerBlocks'] ) ) {
				$this->generate( $block['innerBlocks'], $css );
			}

			// If block is reusable block, generate CSS for it.
			if ( 'core/block' === $block['blockName'] ) {
				if ( isset( $block['attrs']['ref'] ) && is_array( $block['attrs'] ) ) {
					$reusable = get_post( $block['attrs']['ref'] );
					if ( $reusable && 'wp_block' === $reusable->post_type ) {
						$reusable_blocks = parse_blocks( $reusable->post_content );
						$this->generate( $reusable_blocks, $css );
					}
				}
			}
		}

		$this->css = $this->extend( $this->css, $css );
	}

	/**
	 * Make stylesheet from CSS data.
	 *
	 * @return void
	 */
	private function make_stylesheet() {
		if ( empty( $this->css ) ) {
			return;
		}

		$stylesheet = array(
			'desktop'      => '',
			'tablet'       => '',
			'mobile'       => '',
			'tablet_only'  => '',
			'desktop_only' => '',
		);
		$devices    = array_merge( self::DEVICES, array( 'desktop_only', 'tablet_only' ) );
		foreach ( $devices as $device ) {
			$temp = '';
			if ( ! isset( $this->css[ $device ] ) ) {
				continue;
			}
			// Try to merge selectors of different properties if values are the same.
			$css = $this->merge_selectors( $this->css[ $device ] );
			foreach ( $css as $selector => $styles ) {
				if ( empty( $styles ) ) {
					continue;
				}
				$temp2 = '';
				foreach ( $styles as $property => $value ) {
					if ( empty( $value ) ) {
						continue;
					}
					$temp2 .= $property . ':' . $value . ';';
				}
				if ( ! empty( $temp2 ) ) {
					$temp .= "$selector{" . $temp2 . '}';
				}
			}
			$stylesheet[ $device ] = $temp;
		}
		$tablet_breakpoint = get_option( '_blockart_tablet_breakpoint', self::TABLET_BREAKPOINT );
		$mobile_breakpoint = get_option( '_blockart_mobile_breakpoint', self::MOBILE_BREAKPOINT );
		$this->stylesheet  = $stylesheet['desktop'];
		if ( ! empty( $stylesheet['tablet'] ) ) {
			$this->stylesheet .= "@media (max-width: $tablet_breakpoint){{$stylesheet['tablet']}}";
		}
		if ( ! empty( $stylesheet['mobile'] ) ) {
			$this->stylesheet .= "@media (max-width: $mobile_breakpoint){{$stylesheet['mobile']}}";
		}
		if ( ! empty( $stylesheet['tablet_only'] ) ) {
			$this->stylesheet .= "@media (min-width: $mobile_breakpoint) and (max-width: $tablet_breakpoint){{$stylesheet['tablet_only']}}";
		}
		if ( ! empty( $stylesheet['desktop_only'] ) ) {
			$this->stylesheet .= "@media (min-width: $tablet_breakpoint){{$stylesheet['desktop_only']}}";
		}
	}

	/**
	 * Save stylesheet to file and database.
	 *
	 * @return void
	 */
	private function save_stylesheet() {
		// If in preview mode or stylesheet is empty, don't save.
		if ( $this->is_previewing || empty( $this->stylesheet ) ) {
			return;
		}

		$filesystem = blockart()->get_filesystem();

		if ( ! $filesystem ) {
			return;
		}

		// Make blockart upload directory if not exists.
		if ( ! $filesystem->is_dir( BLOCKART_UPLOAD_DIR ) ) {
			$filesystem->mkdir( BLOCKART_UPLOAD_DIR, FS_CHMOD_DIR );
		}

		$filename = "ba-style-$this->id-";
		$files    = $filesystem->dirlist( BLOCKART_UPLOAD_DIR );

		// Delete old stylesheet file.
		if ( ! empty( $files ) ) {
			foreach ( $files as $file ) {
				if ( strpos( $file['name'], $filename ) !== false ) {
					$filesystem->delete( BLOCKART_UPLOAD_DIR . '/' . $file['name'] );
				}
			}
		}

		// Add timestamp to filename to avoid browser cache.
		$filename            = $filename . time() . '.css';
		$minified_stylesheet = $this->minify( $this->stylesheet );
		$data                = array(
			'filename'   => $filename,
			'fonts'      => $this->fonts,
			'stylesheet' => $minified_stylesheet,
		);

		// If is string id, save to option, otherwise save to post meta.
		if ( is_string( $this->id ) ) {
			$saved              = get_option( '_blockart_blocks_css', array() );
			$saved[ $this->id ] = $data;
			update_option( '_blockart_blocks_css', $saved );
		} else {
			update_post_meta( $this->id, '_blockart_blocks_css', $data );
		}

		$filesystem->put_contents( BLOCKART_UPLOAD_DIR . "/$filename", $minified_stylesheet, FS_CHMOD_FILE );
		$this->filename = $filename;
	}

	/**
	 * Generate fonts array.
	 *
	 * @param array $setting_value Setting value of typography setting.
	 * @return void
	 */
	private function generate_fonts( array $setting_value ) {
		$weight = (string) ( $setting_value['weight'] ?? '400' );
		$family = $setting_value['family'];

		$this->fonts = $this->extend(
			$this->fonts,
			array(
				$family => array( $weight ),
			)
		);
	}

	/**
	 * Parse border CSS.
	 *
	 * @param ...$args
	 * @return array|array[]
	 */
	private function border( ...$args ): array {
		list( $key, $value, $id, $block_name, $metadata, $attrs ) = $args;
		$css    = array(
			'desktop' => array(),
			'tablet'  => array(),
			'mobile'  => array(),
		);
		$styles = $metadata[ $key ]['style'];

		if ( empty( $value ) ) {
			return $css;
		}

		foreach ( $styles as $style ) {
			if ( ! $this->check_condition( $style, $attrs, $block_name ) ) {
				break;
			}
			if ( ! isset( $style['selector'] ) ) {
				continue;
			}
			$selector = str_replace( '{{WRAPPER}}', ".blockart-$block_name-$id", $style['selector'] );
			if ( isset( $value['type'] ) && 'none' !== $value['type'] ) {
				if ( ! isset( $css['desktop'][ $selector ] ) ) {
					$css['desktop'][ $selector ] = array();
				}

				$css['desktop'][ $selector ]['border-style'] = $value['type'];

				if ( isset( $value['color'] ) ) {
					$css['desktop'][ $selector ]['border-color'] = $value['color'];
				}

				if ( isset( $value['size'] ) ) {
					foreach ( self::DEVICES as $device ) {
						if (
							isset( $value['size'][ $device ]['top'] ) ||
							isset( $value['size'][ $device ]['right'] ) ||
							isset( $value['size'][ $device ]['bottom'] ) ||
							isset( $value['size'][ $device ]['left'] )
						) {
							if ( ! isset( $css[ $device ][ $selector ] ) ) {
								$css[ $device ][ $selector ] = array();
							}
							$unit     = $value['size'][ $device ]['unit'] ?? 'px';
							$top      = $value['size'][ $device ]['top'] ?? 0;
							$right    = $value['size'][ $device ]['right'] ?? 0;
							$bottom   = $value['size'][ $device ]['bottom'] ?? 0;
							$left     = $value['size'][ $device ]['left'] ?? 0;
							$is_equal = $top === $right && $right === $bottom && $bottom === $left;
							$css[ $device ][ $selector ]['border-width'] = $is_equal ? "$top$unit" : "$top$unit $right$unit $bottom$unit $left$unit";
						}
					}
				}
			}

			if ( isset( $value['radius'] ) ) {
				foreach ( self::DEVICES as $device ) {
					if (
						isset( $value['radius'][ $device ]['top'] ) ||
						isset( $value['radius'][ $device ]['right'] ) ||
						isset( $value['radius'][ $device ]['bottom'] ) ||
						isset( $value['radius'][ $device ]['left'] )
					) {
						if ( ! isset( $css[ $device ][ $selector ] ) ) {
							$css[ $device ][ $selector ] = array();
						}
						$unit     = $value['radius'][ $device ]['unit'] ?? 'px';
						$top      = $value['radius'][ $device ]['top'] ?? 0;
						$right    = $value['radius'][ $device ]['right'] ?? 0;
						$bottom   = $value['radius'][ $device ]['bottom'] ?? 0;
						$left     = $value['radius'][ $device ]['left'] ?? 0;
						$is_equal = $top === $right && $right === $bottom && $bottom === $left;
						$css[ $device ][ $selector ]['border-radius'] = $is_equal ? "$top$unit" : "$top$unit $right$unit $bottom$unit $left$unit";
					}
				}
			}
		}

		return $css;
	}

	/**
	 * Parse dimension CSS.
	 *
	 * @param ...$args
	 * @return array|array[]
	 */
	private function dimension( ...$args ): array {
		list( $key, $value, $id, $block_name, $metadata, $attrs ) = $args;
		$css    = array(
			'desktop' => array(),
			'tablet'  => array(),
			'mobile'  => array(),
		);
		$styles = $metadata[ $key ]['style'];
		foreach ( $styles as $style ) {
			if ( ! $this->check_condition( $style, $attrs, $block_name ) ) {
				break;
			}
			if ( ! isset( $style['selector'] ) ) {
				continue;
			}
			$selector = str_replace( '{{WRAPPER}}', ".blockart-$block_name-$id", $style['selector'] );
			if (
				$value &&
				is_array( $value )
			) {
				if ( count( array_intersect_key( $value, array_flip( self::DEVICES ) ) ) ) {
					foreach ( self::DEVICES as $device ) {
						if (
							isset( $value[ $device ]['top'] ) ||
							isset( $value[ $device ]['right'] ) ||
							isset( $value[ $device ]['bottom'] ) ||
							isset( $value[ $device ]['left'] )
						) {
							$unit   = $value[ $device ]['unit'] ?? 'px';
							$top    = $value[ $device ]['top'] ?? 0;
							$right  = $value[ $device ]['right'] ?? 0;
							$bottom = $value[ $device ]['bottom'] ?? 0;
							$left   = $value[ $device ]['left'] ?? 0;

							$is_equal            = $top === $right && $right === $bottom && $bottom === $left;
							$is_top_bottom_equal = $top === $bottom;
							$is_left_right_equal = $left === $right;

							$val = "$top$unit $right$unit $bottom$unit $left$unit";

							if ( $is_equal ) {
								$val = "$top$unit";
							} elseif ( $is_top_bottom_equal && $is_left_right_equal ) {
								$val = "$top$unit $left$unit";
							}

							$css[ $device ] = $this->extend(
								$css[ $device ],
								$this->parse_css_string(
									str_replace( '{{VALUE}}', $val, $selector )
								)
							);
						}
					}
				} else {
					$unit   = $value['unit'] ?? 'px';
					$top    = $value['top'] ?? 0;
					$right  = $value['right'] ?? 0;
					$bottom = $value['bottom'] ?? 0;
					$left   = $value['left'] ?? 0;

					$is_equal            = $top === $right && $right === $bottom && $bottom === $left;
					$is_top_bottom_equal = $top === $bottom;
					$is_left_right_equal = $left === $right;

					$val = "$top$unit $right$unit $bottom$unit $left$unit";

					if ( $is_equal ) {
						$val = "$top$unit";
					} elseif ( $is_top_bottom_equal && $is_left_right_equal ) {
						$val = "$top$unit $left$unit";
					}

					$css['desktop'] = $this->extend(
						$css['desktop'],
						$this->parse_css_string(
							str_replace( '{{VALUE}}', $val, $selector )
						)
					);
				}
			}
		}
		return $css;
	}

	/**
	 * Parse background CSS.
	 *
	 * @param ...$args
	 * @return array|array[]
	 */
	private function background( ...$args ): array {
		list( $key, $value, $id, $block_name, $metadata, $attrs ) = $args;
		$css    = array(
			'desktop' => array(),
			'tablet'  => array(),
			'mobile'  => array(),
		);
		$styles = $metadata[ $key ]['style'];

		foreach ( $styles as $style ) {
			if ( ! $this->check_condition( $style, $attrs, $block_name ) ) {
				break;
			}
			if ( ! isset( $style['selector'] ) ) {
				continue;
			}
			$selector = str_replace( '{{WRAPPER}}', ".blockart-$block_name-$id", $style['selector'] );
			if ( ! isset( $css['desktop'][ $selector ] ) ) {
				$css['desktop'][ $selector ] = array();
			}
			if ( isset( $value['color'] ) ) {
				$css['desktop'][ $selector ]['background-color'] = $value['color'];
			}
			$url = $value['image']['image']['url'] ?? ( $value['image']['image']['local'] ?? ( $value['image']['image']['external'] ) ?? '' );
			if ( ! empty( $url ) ) {
				$css['desktop'][ $selector ]['background-image'] = "url($url)";
				if ( isset( $value['image']['attachment'] ) && 'default' !== $value['image']['attachment'] ) {
					$css['desktop'][ $selector ]['background-attachment'] = $value['image']['attachment'];
				}
				foreach ( self::DEVICES as $device ) {
					if ( ! isset( $css[ $device ][ $selector ] ) ) {
						$css[ $device ][ $selector ] = array();
					}
					if ( isset( $value['image']['position'][ $device ] ) && 'default' !== $value['image']['position'][ $device ] ) {
						$css[ $device ][ $selector ]['background-position'] = $value['image']['position'][ $device ];
					}
					if ( isset( $value['image']['repeat'][ $device ] ) && 'default' !== $value['image']['repeat'][ $device ] ) {
						$css[ $device ][ $selector ]['background-repeat'] = $value['image']['repeat'][ $device ];
					}
					if ( isset( $value['image']['size'][ $device ] ) && 'default' !== $value['image']['size'][ $device ] ) {
						if ( 'custom' !== $value['image']['size'][ $device ] ) {
							$css[ $device ][ $selector ]['background-size'] = $value['image']['size'][ $device ];
						} else {
							$key = 'customSize' . ucfirst( $device );
							if ( isset( $value['image'][ $key ] ) ) {
								$val = $value['image'][ $key ]['value'] . ( $value['image'][ $key ]['unit'] ?? 'px' );
								$css[ $device ][ $selector ]['background-size'] = "$val auto";
							}
						}
					}
				}
			}
		}

		return $css;
	}

	/**
	 * Parse box shadow CSS.
	 *
	 * @param ...$args
	 * @return array|array[]
	 */
	private function box_shadow( ...$args ): array {
		list( $key, $value, $id, $block_name, $metadata, $attrs ) = $args;
		$css    = array(
			'desktop' => array(),
			'tablet'  => array(),
			'mobile'  => array(),
		);
		$styles = $metadata[ $key ]['style'];

		if ( isset( $value['enable'] ) && $value['enable'] ) {
			foreach ( $styles as $style ) {
				if ( ! $this->check_condition( $style, $attrs, $block_name ) ) {
					break;
				}
				if ( ! isset( $style['selector'] ) ) {
					continue;
				}
				$selector = str_replace( '{{WRAPPER}}', ".blockart-$block_name-$id", $style['selector'] );
				$temp     = 'inset' === ( $value['position'] ?? 'outline' ) ? 'inset ' : '';
				$temp    .= ( $value['horizontalX'] ?? '0' ) . 'px ';
				$temp    .= ( $value['verticalY'] ?? '0' ) . 'px ';
				$temp    .= ( $value['blur'] ?? '0' ) . 'px ';
				$temp    .= ( $value['spread'] ?? '0' ) . 'px ';
				$temp    .= ( $value['color'] ?? 'rgba(0,0,0, 0.5)' );

				if ( ! isset( $css['desktop'][ $selector ] ) ) {
					$css['desktop'][ $selector ] = array();
				}
				$css['desktop'][ $selector ]['box-shadow'] = $temp;
			}
		}

		return $css;
	}

	/**
	 * Parse typography CSS.
	 *
	 * @param ...$args
	 * @return array|array[]
	 */
	private function typography( ...$args ): array {
		$css = array(
			'desktop' => array(),
			'tablet'  => array(),
			'mobile'  => array(),
		);
		list( $key, $value, $id, $block_name, $metadata, $attrs ) = $args;
		$styles = $metadata[ $key ]['style'];

		foreach ( $styles as $style ) {
			if ( ! $this->check_condition( $style, $attrs, $block_name ) ) {
				break;
			}
			if ( ! isset( $style['selector'] ) ) {
				continue;
			}
			$selector = str_replace( '{{WRAPPER}}', ".blockart-$block_name-$id", $style['selector'] );

			if ( ! isset( $css['desktop'][ $selector ] ) ) {
				$css['desktop'][ $selector ] = array();
			}
			if ( isset( $value['family'] ) && 'Default' !== $value['family'] ) {
				$css['desktop'][ $selector ]['font-family'] = $value['family'];
			}
			if ( isset( $value['weight'] ) ) {
				$css['desktop'][ $selector ]['font-weight'] = $value['weight'];
			}
			if ( isset( $value['transform'] ) && 'default' !== $value['transform'] ) {
				$css['desktop'][ $selector ]['text-transform'] = $value['transform'];
			}
			if ( isset( $value['decoration'] ) && 'default' !== $value['decoration'] ) {
				$css['desktop'][ $selector ]['text-decoration'] = $value['decoration'];
			}
			foreach ( self::DEVICES as $device ) {
				if ( ! isset( $css[ $device ][ $selector ] ) ) {
					$css[ $device ][ $selector ] = array();
				}
				if ( isset( $value['size'][ $device ]['value'] ) ) {
					$css[ $device ][ $selector ]['font-size'] = $value['size'][ $device ]['value'] . ( $value['size'][ $device ]['unit'] ?? 'px' );
				}
				if ( isset( $value['lineHeight'][ $device ]['value'] ) ) {
					$css[ $device ][ $selector ]['line-height'] = $value['lineHeight'][ $device ]['value'] . ( $value['lineHeight'][ $device ]['unit'] ?? 'px' );
				}
				if ( isset( $value['letterSpacing'][ $device ]['value'] ) ) {
					$css[ $device ][ $selector ]['letter-spacing'] = $value['letterSpacing'][ $device ]['value'] . ( $value['letterSpacing'][ $device ]['unit'] ?? 'px' );
				}
			}
		}

		return $css;
	}

	/**
	 * Parse general CSS.
	 *
	 * @param ...$args
	 * @return array|array[]
	 */
	private function general( ...$args ): array {
		$css = array(
			'desktop'      => array(),
			'tablet'       => array(),
			'mobile'       => array(),
			'tablet_only'  => array(),
			'desktop_only' => array(),
		);
		list( $key, $value, $id, $block_name, $metadata, $attrs ) = $args;
		$styles = $metadata[ $key ]['style'] ?? null;

		if ( ! $styles ) {
			return $css;
		}

		foreach ( $styles as $style ) {
			if ( ! $this->check_condition( $style, $attrs, $block_name ) ) {
				break;
			}
			if ( ! isset( $style['selector'] ) ) {
				continue;
			}
			$selector = str_replace( '{{WRAPPER}}', ".blockart-$block_name-$id", $style['selector'] );

			if (
				in_array(
					$key,
					array(
						'hideOnDesktop',
						'hideOnTablet',
						'hideOnMobile',
						'colReverseOnTablet',
						'colReverseOnMobile',
					),
					true
				) &&
				strpos( $selector, '@media' ) !== false
			) {
				if ( ! isset( $value ) || ! $value ) {
					continue;
				}
				preg_match( '/@media\s*\((.*?)\)\s*\{(.*)}/s', $selector, $matches );
				if ( ! isset( $matches[1] ) || ! isset( $matches[2] ) ) {
					continue;
				}

				preg_match_all( '!\d+!', $matches[1], $breakpoints );
				if ( empty( $breakpoints[0] ) ) {
					continue;
				}
				$se = $matches[2];

				if ( count( $breakpoints[0] ) > 1 ) {
					$css['tablet_only'] = $this->extend( $css['tablet_only'], $this->parse_css_string( $se ) );
				} else {
					$breakpoint = (int) $breakpoints[0][0];
					if ( 62 === $breakpoint ) {
						if ( false !== strpos( $matches[1], 'min-width' ) ) {
							$css['desktop_only'] = $this->extend( $css['desktop_only'], $this->parse_css_string( $se ) );
						} else {
							$css['tablet'] = $this->extend( $css['tablet'], $this->parse_css_string( $se ) );
						}
					} elseif ( 48 === $breakpoint ) {
						$css['mobile'] = $this->extend( $css['mobile'], $this->parse_css_string( $se ) );
					}
				}
			} else {
				if ( is_array( $value ) ) {
					foreach ( self::DEVICES as $device ) {
						if ( isset( $value[ $device ] ) ) {
							if ( is_array( $value[ $device ] ) ) {
								if ( isset( $value[ $device ]['value'] ) ) {
									$unit           = $value[ $device ]['unit'] ?? 'px';
									$temp           = str_replace( '{{VALUE}}', "{$value[ $device ]['value']}$unit", $selector );
									$css[ $device ] = $this->extend( $css[ $device ], $this->parse_css_string( $temp ) );
								}
							} else {
								$css[ $device ] = $this->extend(
									$css[ $device ],
									$this->parse_css_string( str_replace( '{{VALUE}}', $value[ $device ], $selector ) )
								);
							}
						}
					}
				} elseif ( $value ) {
					$css['desktop'] = $this->extend(
						$css['desktop'],
						$this->parse_css_string( str_replace( '{{VALUE}}', $value, $selector ) )
					);
				}
			}
		}

		return $css;
	}

	/**
	 * Check if current block is blockart block.
	 *
	 * @param array $block Check if current block is blockart block.
	 * @return array|false
	 */
	private function is_blockart_block( array $block = array() ) {
		if ( empty( $block ) ) {
			return false;
		}

		$name = $block['blockName'] ?? '';
		$name = explode( '/', $name );

		if ( 'blockart' === $name[0] && isset( $block['attrs']['clientId'] ) ) {
			$block_name = $name[1];
			if ( ! $this->has_old_markup ) {
				$block_name = 'button-inner' === $name[1] ? 'button' : ( 'button' === $name[1] ? 'buttons' : $name[1] );
			}
			return array(
				'name' => $block_name,
				'id'   => $block['attrs']['clientId'],
			);
		}

		return false;
	}

	/**
	 * Parse CSS string to array.
	 *
	 * For eg. .selector { property: value; } will be parsed to array( '.selector' => array( 'property' => 'value' ) )
	 *
	 * @param string $css_string CSS string.
	 * @return array
	 */
	private function parse_css_string( string $css_string ): array {
		$css   = array();
		$rules = explode( '}', $css_string );

		foreach ( $rules as $rule ) {
			$parts = explode( '{', $rule );
			if ( count( $parts ) < 2 ) {
				continue;
			}
			$selector   = trim( $parts[0] );
			$properties = array();
			$pairs      = explode( ';', trim( $parts[1] ) );
			foreach ( $pairs as $pair ) {
				if ( false === strpos( $pair, ':' ) ) {
					continue;
				}
				$prop_val            = explode( ':', $pair );
				$prop                = trim( $prop_val[0] );
				$val                 = trim( $prop_val[1] );
				$properties[ $prop ] = $val;
			}
			$css[ $selector ] = $properties;
		}
		return $css;
	}

	/**
	 * Merge array recursively.
	 *
	 * @param array $array1 Array to merge into.
	 * @param array $array2 Array to merge.
	 *
	 * @return array
	 */
	public function extend( array $array1, array $array2 ): array {
		$merged = $array1;
		foreach ( $array2 as $key => $value ) {
			if ( is_array( $value ) && isset( $merged[ $key ] ) && is_array( $merged[ $key ] ) ) {
				$merged[ $key ] = $this->extend( $merged[ $key ], $value );
			} else {
				$merged[ $key ] = $value;
			}
		}
		return $merged;
	}

	/**
	 * Check current control condition.
	 *
	 * Generate conditional CSS for blockart blocks.
	 *
	 * @param array $data Block data.
	 * @param array $settings Control settings.
	 * @param string $block_name Block name.
	 *
	 * @return bool
	 */
	private function check_condition( array $data, array $settings, string $block_name ): bool {
		$depends    = true;
		$block_name = 'button' === $block_name ? 'button-inner' : ( 'buttons' === $block_name ? 'button' : $block_name );

		if ( isset( $data['condition'] ) && is_array( $data['condition'] ) ) {
			foreach ( $data['condition'] as $condition ) {
				$previous                      = $depends;
				$settings[ $condition['key'] ] = $settings[ $condition['key'] ] ?? $this->block_metadata[ "blockart/$block_name" ]->attributes[ $condition['key'] ]['default'] ?? null;
				if ( '==' === $condition['relation'] || '===' === $condition['relation'] ) {
					if ( is_scalar( $condition['value'] ) ) {
						$depends = $settings[ $condition['key'] ] === $condition['value'];
					} else {
						$depends = in_array( $settings[ $condition['key'] ], $condition['value'], true );
					}
				} elseif ( '!=' === $condition['relation'] || '!==' === $condition['relation'] ) {
					if ( is_scalar( $condition['value'] ) ) {
						$depends = $settings[ $condition['key'] ] !== $condition['value'];
					} else {
						$selected = false;
						foreach ( $condition['value'] as $value ) {
							if ( $settings[ $condition['key'] ] !== $value ) {
								$selected = true;
							}
						}
						if ( $selected ) {
							$depends = true;
						}
					}
				}
				if ( false === $previous ) {
					$depends = false;
				}
			}
		}

		return $depends;
	}

	/**
	 * Merge keys with comma with same values.
	 *
	 * @param array $array Array to merge.
	 *
	 * @return array
	 */
	private function merge_selectors( array $array ): array {
		$result = array();
		foreach ( $array as $key => $value ) {
			$found = false;
			if ( empty( $value ) || ! is_array( $value ) ) {
				continue;
			}
			if ( ! empty( $result ) ) {
				foreach ( $result as $k => $v ) {
					if (
						empty( array_diff_assoc( $v, $value ) ) &&
						empty( array_diff_assoc( $value, $v ) )
					) {
						$found               = true;
						$result[ "$key,$k" ] = $value;
						unset( $result[ $k ] );
						break;
					}
				}
			}
			if ( ! $found ) {
				$result[ $key ] = $value;
			}
		}
		return $result;
	}

	/**
	 * Set is previewing.
	 *
	 * @return bool
	 */
	private function set_is_previewing(): bool {
		return isset( $_GET['preview'] ); // phpcs:ignore WordPress.Security.NonceVerification.Recommended
	}

	/**
	 * Minify CSS.
	 *
	 * Remove whitespace and unnecessary semicolons.
	 *
	 * @param string $css CSS to minify.
	 * @return string
	 */
	private function minify( string $css ): string {
		return preg_replace(
			[
				'#("(?:[^"\\\]++|\\\.)*+"|\'(?:[^\'\\\\]++|\\\.)*+\')|/\*(?!!)(?>.*?\*/)|^\s*|\s*$#s',
				'#("(?:[^"\\\]++|\\\.)*+"|\'(?:[^\'\\\\]++|\\\.)*+\'|/\*(?>.*?\*/))|\s*+;\s*+(})\s*+|\s*+([*$~^|]?+=|[{};,>~]|\s(?![\d.])|!important\b)\s*+|([[(:])\s++|\s++([])])|\s++(:)\s*+(?!(?>[^{}"\']++|"(?:[^"\\\]++|\\\.)*+"|\'(?:[^\'\\\\]++|\\\.)*+\')*+{)|^\s++|\s++\z|(\s)\s+#si',
				'#(?<=[\s:])(0)(cm|em|ex|in|mm|pc|pt|px|vh|vw|%)#i',
				'#:(0\s+0|0\s+0\s+0\s+0)(?=[;}]|!important)#i',
				'#(background-position):0(?=[;}])#i',
				'#(?<=[\s:,\-])0+\.(\d+)#',
				'#(/\*(?>.*?\*/))|(?<!content:)([\'"])([a-z_][a-z\d\-_]*?)\2(?=[\s{}\];,])#si',
				'#(/\*(?>.*?\*/))|(\burl\()([\'"])(\S+?)\3(\))#si',
				'#(?<=[\s:,\-]\#)([a-f0-6]+)\1([a-f0-6]+)\2([a-f0-6]+)\3#i',
				'#(?<=[{;])(border|outline):none(?=[;}!])#',
				'#(/\*(?>.*?\*/))|(^|[{}])[^\s{}]+\{}#s',
			],
			[
				'$1',
				'$1$2$3$4$5$6$7',
				'$1',
				':0',
				'$1:0 0',
				'.$1',
				'$1$3',
				'$1$2$4$5',
				'$1$2$3',
				'$1:0',
				'$1$2',
			],
			$css
		);
	}
}
