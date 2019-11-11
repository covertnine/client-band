<div id="wrapper-navbar" class="header-navbar" itemscope itemtype="http://schema.org/WebSite">

				<a class="skip-link screen-reader-text sr-only" href="#content"><?php esc_html_e( 'Skip to content', 'c9' ); ?></a>

				<nav class="navbar navbar-expand-lg navbar-light">

					<div class="container">
						<?php

							// get custom logo, if not set, use customizer logo, if that's not set, show text of site title
							$c9_logo      = get_option( 'cortex_branding', '' );
							$c9_site_name = get_bloginfo( 'name' );

							if ( ! empty( $c9_logo['logo'] ) ) {
							?>
							<a href="<?php echo get_home_url(); ?>" title="<?php echo $c9_site_name . __( ' Homepage', 'c9' ); ?>" class="navbar-brand custom-logo-link c9-custom-logo">
								<img src="<?php echo $c9_logo['logo']; ?>" class="c9-home-logo img-fluid" alt="<?php echo $c9_site_name . __( ' Logo', 'c9' ); ?>" />
							</a>
						<?php
							} else {
							the_custom_logo();
							}
							?>

						<div class="navbar-small-buttons">
							<div class="nav-toggle">
								<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
									<i class="fa fa-bars"></i>
								</button>
							</div>
							<!--.nav-toggle-->
						</div><!-- .navbar-small-buttons-->

						<!-- The WordPress Menu goes here -->
						<?php
						wp_nav_menu(
								array(
									'theme_location'  => 'primary',
									'container_class' => 'collapse navbar-collapse justify-content-center navbar-expand-lg',
									'container_id'    => 'navbarNavDropdown',
									'menu_class'      => 'navbar-nav nav nav-fill justify-content-between',
									'fallback_cb'     => '',
									'menu_id'         => 'main-menu',
									'depth'           => 2,
									'walker'          => new c9_WP_Bootstrap_Navwalker(),
								)
							);
							?>
					</div><!-- .container -->

				</nav><!-- .site-navigation -->
			</div><!-- .header-navbar-->
