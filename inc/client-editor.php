<?php

/**
 * Client-specific scripts for WordPress block editor
 *
 * @package c9-music
 */

/* add client compiled files to gutenberg editor */
if (!function_exists('c9music_client_editor_style')) {
	function c9music_client_editor_style()
	{

		$c9_default_font = get_theme_mod('c9_default_font', 'yes');

		if ($c9_default_font != 'yes') {
			wp_enqueue_style('c9-font-default', 'https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,700;1,400;1,700&display=swap', array('c9-client-styles'));
		}


		wp_enqueue_style('c9-client-styles', get_template_directory_uri() . '/client/client-assets/dist/client.css');
		wp_enqueue_style('c9-client-editor-styles', get_template_directory_uri() . '/client/client-assets/dist/client-editor.min.css', 99999);
	}
	add_action('enqueue_block_editor_assets', 'c9music_client_editor_style', 99999999);
} //end if function exists
