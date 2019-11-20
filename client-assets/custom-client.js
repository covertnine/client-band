jQuery(document).ready(function() {
  (function($) {
    // // add any css classes you don't want to be smoothState-d here
    // var notSmooth =
    //   '.nav-search, btn-nav-search, .search-close, .mega-menu-item-has-children .mega-menu-link, .wp-block-gallery a[href$=".jpg"], .wp-block-gallery a[href$=".jpeg"], .wp-block-gallery a[href$=".png"], .wp-block-gallery a[href$=".gif, "], .cortex-popup';
    // var options = {
    //     prefetch: true,
    //     cacheLength: 2,
    //     blacklist: notSmooth,
    //     onStart: {
    //       duration: 250, // Duration of our animation
    //       render: function($container) {
    //         // Add your CSS animation reversing class
    //         $container.addClass("is-exiting");
    //         // Restart your animation
    //         smoothState.restartCSSAnimations();
    //       }
    //     },
    //     onReady: {
    //       duration: 0,
    //       render: function($container, $newContent) {
    //         // Remove your CSS animation reversing class
    //         $container.removeClass("is-exiting");
    //         // Inject the new content
    //         $container.html($newContent);
    //       }
    //     }
    //   },
    //   smoothState = $("#page")
    //     .smoothState(options)
    //     .data("smoothState");
    // document
    //   .querySelectorAll(".navbar-nav > .nav-item > .nav-link")
    //   .forEach(btn => {
    //     btn.addEventListener("click", () => {
    //       gsap.to(window, {
    //         duration: 3,
    //         scrollTo: { href, offsetY: 70 }
    //       });
    //     });
    //   });

    $("body").on(
      "click",
      ".navbar-nav > .nav-item > .nav-link[href^='/#'], .scroll-me a[href^='/#']",
      function(event) {
        event.preventDefault();

        //what link was clicked
        var sectionLink = $(event.target).attr("href");
        var anchorID = sectionLink.substr(1);

        // scroll to that part of the page
        gsap.to(window, {
          duration: 2,
          scrollTo: { y: anchorID, offsetY: 55 },
          ease: Power2.easeOut
        });

        $(".navbar-collapse").toggleClass("show");
      }
    );
  })(jQuery);
});

// add scenes for home scrolling nav links if user is on homepage
if (jQuery("body.home").length) {
  // init controller
  var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      duration: "100%",
      triggerHook: 0.5
    }
  });

  //set up array of links in nav linking to on-page anchors
  var navLinks = [];

  jQuery(
    ".navbar-nav > .nav-item .nav-link[href^='/#'], .scroll-me a[href^='/#']"
  ).each(function() {
    // get all link IDs and put them in array from header and direct clicked scroll links
    navLinks.push(jQuery(this).attr("href"));
  });

  //loop through those links and add a scene for each that links up properly
  var setSceneNum = navLinks.length;

  for (var i = 0; i < setSceneNum; i++) {
    var anchorID = navLinks[i].substr(1);
    var classLabel = navLinks[i].substr(2);

    new ScrollMagic.Scene({
      triggerElement: anchorID
    })
      .setClassToggle(".c9-" + classLabel, "nav-highlight") // add class toggle
      .addTo(controller);
  }
}
