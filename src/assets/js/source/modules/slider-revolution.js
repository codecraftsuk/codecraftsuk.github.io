/**
 * Slider Revolution Scripts.
 */

;
(function($, window, document, undefined) {

    'use strict';

    $(document).ready(function() {

        /**
         * Save DOM selectors.
         */
        var $site_container = $('body');
        var $site_container_rtl = $('body.rtl');
        var $slider_revolution = $site_container.find('#rev_slider_1');
        var sliderLayout = 'fullscreen';

        // update slider layout auto when boxed
        if ($site_container.hasClass('boxed-layout')) {
            sliderLayout = 'auto';
        }

        // we have slider revolution selector?
        if ($slider_revolution.length) {

            /**
             * Initialize the slider based on the Slider's ID.
             */
            $slider_revolution.show().revolution({

                // stop slider autoplay
                // stopLoop: 'on',
                // stopAfterLoops: 0,
                // stopAtSlide: 1,

                // options are 'auto', 'fullwidth' or 'fullscreen'
                sliderLayout: sliderLayout, // fullscreen

                // OFFSET SLIDER BY THE HEIGHT OF AN ELEMENT
                fullScreenOffsetContainer: "#header-wrap",

                // Disable Force Full-Width
                fullScreenAlignForce: 'off',

                /* RESPECT ASPECT RATIO */
                autoHeight: 'on',

                /* MIN-HEIGHT */
                minHeight: '500',

                // basic navigation arrows and bullets */
                navigation: {

                    keyboardNavigation: 'on',
                    keyboard_direction: 'horizontal',
                    onHoverStop: 'on',

                    arrows: {
                        enable: false,
                        style: "uranus",
                        hide_onleave: false,

                        left: {
                            h_offset: 50,
                            v_offset: 0
                        },

                        right: {
                            h_offset: 50,
                            v_offset: 0
                        }
                    },

                    bullets: {
                        enable: true,
                        style: "hermes",
                        hide_onleave: false,
                        h_align: "center",
                        v_align: "bottom",
                        h_offset: 0,
                        v_offset: 50,
                        space: 17

                    },

                },

                // PRELOADER OPTION "2"
                spinner: 'spinner2',

                // Stop Slider out of Viewport
                viewPort: {
                    enable: true,
                    outof: 'wait',
                    visible_area: '80%',
                    presize: true
                },

                parallax: {
                    type: 'mouse+scroll',
                    origo: 'slidercenter',
                    speed: 400,
                    levels: [5, 10, 15, 20, 25, 30, 35, 40,
                        45, 46, 47, 48, 49, 50, 51, 55
                    ],
                    disable_onmobile: 'on'
                },

            });

        } // end check slider revolution selector


    });

})(jQuery, window, document);