import React from "react";
import "../../assets/css/vendor.min.css?v=1557443877074";
import "../../assets/css/styles.min.css?v=1557443877074";
import "../../assets/css/custom.css?v=1557443877074";
import "../../assets/css/styles.css";

const Home = React.createClass({
  render: function() {
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Jozoor" />
        <meta name="description" content="CodeCrafts" />
        <meta name="keywords" content="creative, niche, responsive, html5, css3, multipurpose, all in one, html, template" />
        <title>CodeCrafts | Build Your Own Future</title>
        <link rel="stylesheet" href="assets/css/vendor.min.css?v=1557443877074" />
        <link rel="stylesheet" href="assets/css/styles.min.css?v=1557443877074" />
        <link rel="stylesheet" href="assets/css/custom.css?v=1557443877074" />
        <link rel="stylesheet" href="assets/css/styles.css" />
        <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600&v=1557443721825" rel="stylesheet" />
        {/* cdn icon fonts
			<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.9/css/all.css?v=1557443721825" crossorigin="anonymous">
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.css?v=1557443721825">
			<link href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css?v=1557443721825" rel="stylesheet">
		*/}
        <link rel="apple-touch-icon" sizes="57x57" href="./assets/images/favicons/apple-touch-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="./assets/images/favicons/apple-touch-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="./assets/images/favicons/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="./assets/images/favicons/apple-touch-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="./assets/images/favicons/apple-touch-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="./assets/images/favicons/apple-touch-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="./assets/images/favicons/apple-touch-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="./assets/images/favicons/apple-touch-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="./assets/images/favicons/apple-touch-icon-180x180.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Joo Template" />
        <link rel="icon" type="image/png" sizes="32x32" href="./assets/images/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="./assets/images/favicons/favicon-16x16.png" />
        <link rel="shortcut icon" href="./assets/images/favicons/favicon.ico" /> 
        <div className="pageloader is-active" />
        <div id="site-wrap" className="site">
          <div id="header-wrap" className="is-clearfix">
            <header id="header" className="site-header">
              <div id="header-inner" className="site-header-inner container">
                <div className="level">
                  <div className="level-left">
                    <div id="header-logo" className="site-logo ">
                      <div id="logo-inner" className="site-logo-inner">
                        <a href="./index.html">
                          {/* <span class="logo-text">CodeCrafts</span> */}
                          <img id="logo-img" className="logo-svg" src="./assets/images/logo/codecrafts-logo.svg" />
                        </a>
                      </div>
                      {/* #logo-inner */}
                    </div>
                    {/* #header-logo */}
                  </div>
                  {/* .level-left */}
                  <div className="level-left">
                    <div className="nav-wrap">
                      <nav className="main-navigation left">
                        <ul className="menu">
                          {/* <div id="nav-wrap">
    <nav id="site-navigation" class="main-navigation left">
        <ul id="main-header-menu" class="menu"> */}
                          <li className="mega-menu niche-templates active">
                            <a href="./index.html">home</a>
                          </li>
                          <li>
                            <a href="./features/index.html">features</a>
                            <ul>
                              <li>
                                <a href="javascript:void(0);">header
                                  <span className="tag menu-mark is-secondary">wow</span>
                                </a>
                                <ul>
                                  <li>
                                    <a href="./features/header/logo-center.html">logo center
                                      <span className="tag menu-mark is-secondary">old</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="./features/header/logo-left.html">logo left
                                      <span className="tag menu-mark is-success">new</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="./features/header/logo-right.html">logo right
                                      <span className="tag menu-mark is-danger">hot</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="./features/header/logo-center-menu-center.html">logo &amp; menu center</a>
                                  </li>
                                  <li>
                                    <a href="./features/header/logo-top.html">logo top
                                      <span className="tag menu-mark is-warning">hot</span>
                                    </a>
                                    <ul>
                                      <li>
                                        <a href="./features/header/logo-top-menu-with-icons.html">&amp; menu with icons</a>
                                      </li>
                                      <li>
                                        <a href="./features/header/logo-top-with-icons.html">&amp; logo with icons</a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <a href="./features/header/menu-with-buttons.html">menu with buttons</a>
                                    <ul>
                                      <li>
                                        <a href="./features/header/menu-center-with-buttons.html">&amp; menu center</a>
                                      </li>
                                      <li>
                                        <a href="./features/header/menu-left-with-buttons.html">&amp; menu left</a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <a href="./features/header/menu-with-icons.html">menu with icons</a>
                                    <ul>
                                      <li>
                                        <a href="./features/header/menu-with-icons-2.html">menu with icons 2</a>
                                      </li>
                                      <li>
                                        <a href="./features/header/menu-with-icons-2-search-default.html">search default style</a>
                                      </li>
                                      <li>
                                        <a href="./features/header/menu-center-with-icons.html">&amp; menu center</a>
                                      </li>
                                      <li>
                                        <a href="./features/header/menu-left-with-icons.html">&amp; menu left</a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <a href="./features/header/menu-with-language-switcher.html">language switcher</a>
                                    <ul>
                                      <li>
                                        <a href="./features/header/menu-with-language-switcher-click.html">switcher on click</a>
                                      </li>
                                      <li>
                                        <a href="./features/header/menu-with-language-switcher-2.html">language switcher 2</a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <a href="./features/header/menu-top.html">menu top</a>
                                    <ul>
                                      <li>
                                        <a href="./features/header/menu-top-logo-with-icons.html">&amp; logo with icons</a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">styles</a>
                                    <ul>
                                      <li>
                                        <a href="./features/header/styles/full-width.html">full width</a>
                                        <ul>
                                          <li>
                                            <a href="./features/header/styles/full-width-transparent.html">transparent</a>
                                          </li>
                                          <li>
                                            <a href="./features/header/styles/full-width-transparent-border.html">transparent border</a>
                                          </li>
                                          <li>
                                            <a href="./features/header/styles/full-width-background-primary.html">background primary</a>
                                          </li>
                                          <li>
                                            <a href="./features/header/styles/full-width-background-dark.html">background dark</a>
                                          </li>
                                        </ul>
                                      </li>
                                      <li>
                                        <a href="./features/header/styles/transparent.html">transparent</a>
                                        <ul>
                                          <li>
                                            <a href="./features/header/styles/transparent-overlay.html">transparent overlay</a>
                                          </li>
                                        </ul>
                                      </li>
                                      <li>
                                        <a href="./features/header/styles/background-primary-color.html">background color</a>
                                        <ul>
                                          <li>
                                            <a href="./features/header/styles/background-primary-color.html">primary color</a>
                                          </li>
                                          <li>
                                            <a href="./features/header/styles/background-dark-color.html">dark color</a>
                                          </li>
                                        </ul>
                                      </li>
                                      <li>
                                        <a href="./features/header/styles/center-overlay.html">center overlay</a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">menu</a>
                                        <ul>
                                          <li>
                                            <a href="./features/header/styles/menu-dropdown-icon.html">dropdown icon</a>
                                          </li>
                                          <li>
                                            <a href="./features/header/styles/menu-icons.html">with icons</a>
                                          </li>
                                          <li>
                                            <a href="./features/header/styles/menu-border-bottom.html">with border</a>
                                            <ul>
                                              <li>
                                                <a href="./features/header/styles/menu-border-bottom.html">border bottom</a>
                                              </li>
                                              <li>
                                                <a href="./features/header/styles/menu-border-top.html">border top</a>
                                              </li>
                                            </ul>
                                          </li>
                                          <li>
                                            <a href="./features/header/styles/menu-background-primary.html">with background</a>
                                            <ul>
                                              <li>
                                                <a href="./features/header/styles/menu-background-primary.html">primary color</a>
                                              </li>
                                              <li>
                                                <a href="./features/header/styles/menu-background-dark.html">dark color</a>
                                              </li>
                                            </ul>
                                          </li>
                                          <li>
                                            <a href="./features/header/styles/menu-separator-dots.html">with separator</a>
                                            <ul>
                                              <li>
                                                <a href="./features/header/styles/menu-separator-dots.html">with dots</a>
                                              </li>
                                              <li>
                                                <a href="./features/header/styles/menu-separator-line.html">with line</a>
                                              </li>
                                            </ul>
                                          </li>
                                        </ul>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">dropdown menu</a>
                                        <ul>
                                          <li>
                                            <a href="./features/header/styles/dropdown-menu-mark.html">with mark</a>
                                          </li>
                                          <li>
                                            <a href="./features/header/styles/dropdown-menu-primary.html">background primary</a>
                                          </li>
                                          <li>
                                            <a href="./features/header/styles/dropdown-menu-dark.html">background dark</a>
                                          </li>
                                        </ul>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="javascript:void(0);">side navigation</a>
                                <ul>
                                  <li>
                                    <a href="./features/side-navigation/side-left.html">side left</a>
                                  </li>
                                  <li>
                                    <a href="./features/side-navigation/side-right.html">side right</a>
                                  </li>
                                  <li>
                                    <a href="./features/side-navigation/side-mini-left.html">side mini left</a>
                                  </li>
                                  <li>
                                    <a href="./features/side-navigation/side-mini-right.html">side mini right</a>
                                  </li>
                                  <li>
                                    <a href="./features/side-navigation/side-mini-with-icons.html">side mini with icons</a>
                                  </li>
                                  <li>
                                    <a href="./features/side-navigation/side-mini-logo-center.html">side mini logo center</a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">styles</a>
                                    <ul>
                                      <li>
                                        <a href="javascript:void(0);">content align</a>
                                        <ul>
                                          <li>
                                            <a href="./features/side-navigation/styles/content-align-center.html">center</a>
                                          </li>
                                          <li>
                                            <a href="./features/side-navigation/styles/content-align-right.html">right</a>
                                          </li>
                                        </ul>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">background color</a>
                                        <ul>
                                          <li>
                                            <a href="./features/side-navigation/styles/background-color-primary.html">primary color</a>
                                          </li>
                                          <li>
                                            <a href="./features/side-navigation/styles/background-color-dark.html">dark color</a>
                                          </li>
                                        </ul>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">logo background</a>
                                        <ul>
                                          <li>
                                            <a href="./features/side-navigation/styles/logo-background-color-primary.html">primary color</a>
                                          </li>
                                          <li>
                                            <a href="./features/side-navigation/styles/logo-background-color-dark.html">dark color</a>
                                          </li>
                                        </ul>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">menu</a>
                                        <ul>
                                          <li>
                                            <a href="./features/side-navigation/styles/menu-icons.html">with icons</a>
                                          </li>
                                          <li>
                                            <a href="./features/side-navigation/styles/menu-background-primary.html">with background</a>
                                            <ul>
                                              <li>
                                                <a href="./features/side-navigation/styles/menu-background-primary.html">primary color</a>
                                              </li>
                                              <li>
                                                <a href="./features/side-navigation/styles/menu-background-dark.html">dark color</a>
                                              </li>
                                            </ul>
                                          </li>
                                        </ul>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">mini styles</a>
                                    <ul>
                                      <li>
                                        <a href="javascript:void(0);">background color</a>
                                        <ul>
                                          <li>
                                            <a href="./features/side-navigation/styles/mini-background-color-primary.html">primary color</a>
                                          </li>
                                          <li>
                                            <a href="./features/side-navigation/styles/mini-background-color-dark.html">dark color</a>
                                          </li>
                                        </ul>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">logo background</a>
                                        <ul>
                                          <li>
                                            <a href="./features/side-navigation/styles/mini-logo-background-color-primary.html">primary color</a>
                                          </li>
                                          <li>
                                            <a href="./features/side-navigation/styles/mini-logo-background-color-dark.html">dark color</a>
                                          </li>
                                        </ul>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="javascript:void(0);">hamburger menu</a>
                                <ul>
                                  <li>
                                    <a href="./features/hamburger-menu/slide-up.html">slide up</a>
                                    <ul>
                                      <li>
                                        <a href="./features/hamburger-menu/slide-up-icon-left.html">&amp; icon left</a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <a href="./features/hamburger-menu/slide-down.html">slide down</a>
                                    <ul>
                                      <li>
                                        <a href="./features/hamburger-menu/slide-down-icon-left.html">&amp; icon left</a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <a href="./features/hamburger-menu/slide-right.html">slide right</a>
                                    <ul>
                                      <li>
                                        <a href="./features/hamburger-menu/slide-right-push.html">push off-canvas</a>
                                      </li>
                                      <li>
                                        <a href="./features/hamburger-menu/slide-right-overlay-full-width.html">overlay full-width</a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <a href="./features/hamburger-menu/slide-left.html">slide left</a>
                                    <ul>
                                      <li>
                                        <a href="./features/hamburger-menu/slide-left-push.html">push off-canvas</a>
                                      </li>
                                      <li>
                                        <a href="./features/hamburger-menu/slide-left-overlay-full-width.html">overlay full-width</a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">styles</a>
                                    <ul>
                                      <li>
                                        <a href="./features/hamburger-menu/styles/transparent.html">transparent</a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">icon color</a>
                                        <ul>
                                          <li>
                                            <a href="./features/hamburger-menu/styles/icon-primary-color.html">primary</a>
                                          </li>
                                          <li>
                                            <a href="./features/hamburger-menu/styles/icon-dark-color.html">dark</a>
                                          </li>
                                          <li>
                                            <a href="./features/hamburger-menu/styles/icon-white-color.html">white</a>
                                          </li>
                                        </ul>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">icon background</a>
                                        <ul>
                                          <li>
                                            <a href="./features/hamburger-menu/styles/icon-background-primary-color.html">primary color</a>
                                          </li>
                                          <li>
                                            <a href="./features/hamburger-menu/styles/icon-background-dark-color.html">dark color</a>
                                          </li>
                                        </ul>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="./features/sticky-navigation/show-on-scroll.html">sticky navigation</a>
                                <ul>
                                  <li>
                                    <a href="./features/sticky-navigation/show-on-scroll.html">show on scroll</a>
                                  </li>
                                  <li>
                                    <a href="./features/sticky-navigation/hide-on-scroll.html">hide on scroll</a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="./features/one-page-navigation.html">one-page navigation</a>
                              </li>
                              <li>
                                <a href="./features/top-bar/default.html">top bar
                                  <span className="tag menu-mark is-primary">new</span>
                                </a>
                                <ul>
                                  <li>
                                    <a href="./features/top-bar/default.html">default</a>
                                  </li>
                                  <li>
                                    <a href="./features/top-bar/language-switcher.html">language switcher</a>
                                  </li>
                                  <li>
                                    <a href="./features/top-bar/menu.html">with menu</a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">styles</a>
                                    <ul>
                                      <li>
                                        <a href="./features/top-bar/styles/background-primary-color.html">background color</a>
                                        <ul>
                                          <li>
                                            <a href="./features/top-bar/styles/background-primary-color.html">primary color</a>
                                          </li>
                                          <li>
                                            <a href="./features/top-bar/styles/background-dark-color.html">dark color</a>
                                          </li>
                                        </ul>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="javascript:void(0);">sliders &amp; intro</a>
                                <ul>
                                  <li>
                                    <a href="./features/sliders-intro/slider-revolution.html">revolution slider</a>
                                  </li>
                                  <li>
                                    <a href="./features/sliders-intro/slider-flex.html">flex slider</a>
                                  </li>
                                  <li>
                                    <a href="./features/sliders-intro/slider-owl.html">owl slider</a>
                                  </li>
                                  <li>
                                    <a href="./features/sliders-intro/intro-image.html">image intro</a>
                                  </li>
                                  <li>
                                    <a href="./features/sliders-intro/intro-parallax.html">parallax intro</a>
                                  </li>
                                  <li>
                                    <a href="./features/sliders-intro/intro-gallery.html">gallery intro</a>
                                  </li>
                                  <li>
                                    <a href="./features/sliders-intro/intro-video.html">video intro</a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="javascript:void(0);">footer</a>
                                <ul>
                                  <li>
                                    <a href="./features/footer/default.html#footer">default</a>
                                  </li>
                                  <li>
                                    <a href="./features/footer/widgets.html#footer">widgets</a>
                                    <ul>
                                      <li>
                                        <a href="./features/footer/widgets.html#footer">widgets 1</a>
                                      </li>
                                      <li>
                                        <a href="./features/footer/widgets-2.html#footer">widgets 2</a>
                                      </li>
                                      <li>
                                        <a href="./features/footer/widgets-3.html#footer">widgets 3</a>
                                      </li>
                                      <li>
                                        <a href="./features/footer/widgets-4.html#footer">widgets 4</a>
                                      </li>
                                      <li>
                                        <a href="./features/footer/widgets-5.html#footer">widgets 5</a>
                                      </li>
                                      <li>
                                        <a href="./features/footer/widgets-6.html#footer">widgets 6</a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">footer top</a>
                                    <ul>
                                      <li>
                                        <a href="./features/footer/top/instagram-feed.html#footer-top">instagram feed</a>
                                      </li>
                                      <li>
                                        <a href="./features/footer/top/call-to-action.html#footer-top">call to action</a>
                                      </li>
                                      <li>
                                        <a href="./features/footer/top/google-map.html#footer-top">google map</a>
                                      </li>
                                      <li>
                                        <a href="./features/footer/top/clients.html#footer-top">clients</a>
                                      </li>
                                      <li>
                                        <a href="./features/footer/top/subscribe.html#footer-top">subscribe</a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">footer bottom</a>
                                    <ul>
                                      <li>
                                        <a href="./features/footer/bottom/default.html#footer-bottom">default</a>
                                      </li>
                                      <li>
                                        <a href="./features/footer/bottom/with-icons.html#footer-bottom">with icons</a>
                                      </li>
                                      <li>
                                        <a href="./features/footer/bottom/with-icons-center.html#footer-bottom">center icons</a>
                                      </li>
                                      <li>
                                        <a href="./features/footer/bottom/with-menu.html#footer-bottom">with menu</a>
                                      </li>
                                      <li>
                                        <a href="./features/footer/bottom/with-menu-icons.html#footer-bottom">menu &amp; icons</a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">styles</a>
                                    <ul>
                                      <li>
                                        <a href="./features/footer/styles/background-primary-color.html#footer">background color</a>
                                        <ul>
                                          <li>
                                            <a href="./features/footer/styles/background-primary-color.html#footer">primary color</a>
                                          </li>
                                          <li>
                                            <a href="./features/footer/styles/background-dark-color.html#footer">dark color</a>
                                          </li>
                                        </ul>
                                      </li>
                                      <li>
                                        <a href="./features/footer/styles/footer-reveal.html">footer reveal</a>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="javascript:void(0);">page title</a>
                                <ul>
                                  <li>
                                    <a href="./features/page-title/center-alignment.html">center alignment</a>
                                    <ul>
                                      <li>
                                        <a href="./features/page-title/center-alignment-breadcrumb.html">with breadcrumb</a>
                                      </li>
                                      <li>
                                        <a href="./features/page-title/center-alignment-icons.html">with icons</a>
                                      </li>
                                      <li>
                                        <a href="./features/page-title/center-alignment-buttons.html">with buttons</a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <a href="./features/page-title/left-alignment.html">left alignment</a>
                                    <ul>
                                      <li>
                                        <a href="./features/page-title/left-alignment-icons.html">with icons</a>
                                      </li>
                                      <li>
                                        <a href="./features/page-title/left-alignment-buttons.html">with buttons</a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <a href="./features/page-title/right-alignment.html">right alignment</a>
                                    <ul>
                                      <li>
                                        <a href="./features/page-title/right-alignment-icons.html">with icons</a>
                                      </li>
                                      <li>
                                        <a href="./features/page-title/right-alignment-buttons.html">with buttons</a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">styles</a>
                                    <ul>
                                      <li>
                                        <a href="javascript:void(0);">background color</a>
                                        <ul>
                                          <li>
                                            <a href="./features/page-title/styles/background-primary-color.html">primary color</a>
                                          </li>
                                          <li>
                                            <a href="./features/page-title/styles/background-primary-color-gradient.html">primary gradient</a>
                                          </li>
                                          <li>
                                            <a href="./features/page-title/styles/background-dark-color.html">dark color</a>
                                          </li>
                                          <li>
                                            <a href="./features/page-title/styles/background-dark-color-gradient.html">dark gradient</a>
                                          </li>
                                        </ul>
                                      </li>
                                      <li>
                                        <a href="./features/page-title/styles/background-image.html">background image</a>
                                      </li>
                                      <li>
                                        <a href="./features/page-title/styles/background-parallax.html">background parallax</a>
                                      </li>
                                      <li>
                                        <a href="./features/page-title/styles/background-ken-burns.html">background ken burns</a>
                                      </li>
                                      <li>
                                        <a href="./features/page-title/styles/background-video.html">background video</a>
                                        <ul>
                                          <li>
                                            <a href="./features/page-title/styles/background-video-muted.html">muted video</a>
                                          </li>
                                        </ul>
                                      </li>
                                      <li>
                                        <a href="./features/page-title/styles/transparent-header.html">transparent header</a>
                                      </li>
                                      <li>
                                        <a href="./features/page-title/styles/mini-height.html">mini height</a>
                                      </li>
                                      <li>
                                        <a href="./features/page-title/styles/full-width.html">full width</a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">breadcrumb styles</a>
                                    <ul>
                                      <li>
                                        <a href="./features/page-title/breadcrumb-styles/default-separator.html">default separator</a>
                                      </li>
                                      <li>
                                        <a href="./features/page-title/breadcrumb-styles/bullet-separator.html">bullet separator</a>
                                      </li>
                                      <li>
                                        <a href="./features/page-title/breadcrumb-styles/arrow-separator.html">arrow separator</a>
                                      </li>
                                      <li>
                                        <a href="./features/page-title/breadcrumb-styles/dot-separator.html">dot separator</a>
                                      </li>
                                      <li>
                                        <a href="./features/page-title/breadcrumb-styles/succeeds-separator.html">succeeds separator</a>
                                      </li>
                                      <li>
                                        <a href="./features/page-title/breadcrumb-styles/with-icons.html">with icons</a>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="javascript:void(0);">columns</a>
                                <ul>
                                  <li>
                                    <a href="./features/columns/basics.html">basics</a>
                                  </li>
                                  <li>
                                    <a href="./features/columns/sizes.html">sizes</a>
                                  </li>
                                  <li>
                                    <a href="./features/columns/responsiveness.html">responsiveness</a>
                                  </li>
                                  <li>
                                    <a href="./features/columns/nesting.html">nesting</a>
                                  </li>
                                  <li>
                                    <a href="./features/columns/gap.html">gap</a>
                                  </li>
                                  <li>
                                    <a href="./features/columns/options.html">options</a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="javascript:void(0);">layout</a>
                                <ul>
                                  <li>
                                    <a href="./features/layout/boxed.html">boxed</a>
                                  </li>
                                  <li>
                                    <a href="./features/layout/container.html">container</a>
                                  </li>
                                  <li>
                                    <a href="./features/layout/level.html">level</a>
                                  </li>
                                  <li>
                                    <a href="./features/layout/media-object.html">media object</a>
                                  </li>
                                  <li>
                                    <a href="./features/layout/hero.html">hero</a>
                                  </li>
                                  <li>
                                    <a href="./features/layout/section.html">section</a>
                                  </li>
                                  <li>
                                    <a href="./features/layout/tiles.html">tiles</a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="javascript:void(0);">form</a>
                                <ul>
                                  <li>
                                    <a href="./features/form/general.html">general</a>
                                  </li>
                                  <li>
                                    <a href="./features/form/input.html">input</a>
                                  </li>
                                  <li>
                                    <a href="./features/form/tagsinput.html">tags input</a>
                                  </li>
                                  <li>
                                    <a href="./features/form/textarea.html">textarea</a>
                                  </li>
                                  <li>
                                    <a href="./features/form/select.html">select</a>
                                  </li>
                                  <li>
                                    <a href="./features/form/checkbox.html">checkbox</a>
                                  </li>
                                  <li>
                                    <a href="./features/form/radio.html">radio</a>
                                  </li>
                                  <li>
                                    <a href="./features/form/switch.html">switch</a>
                                  </li>
                                  <li>
                                    <a href="./features/form/slider.html">slider</a>
                                  </li>
                                  <li>
                                    <a href="./features/form/file.html">file</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="./pages/index.html">pages</a>
                            <ul>
                              <li>
                                <a href="./pages/about.html">about</a>
                                <ul>
                                  <li>
                                    <a href="./pages/about-2.html">about 2</a>
                                  </li>
                                  <li>
                                    <a href="./pages/about-3.html">about 3</a>
                                  </li>
                                  <li>
                                    <a href="./pages/about-4.html">about 4</a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="./pages/services.html">services</a>
                                <ul>
                                  <li>
                                    <a href="./pages/services-2.html">services 2</a>
                                  </li>
                                  <li>
                                    <a href="./pages/services-3.html">services 3</a>
                                  </li>
                                  <li>
                                    <a href="./pages/services-4.html">services 4</a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="./pages/contact.html">contact</a>
                                <ul>
                                  <li>
                                    <a href="./pages/contact-2.html">contact 2</a>
                                  </li>
                                  <li>
                                    <a href="./pages/contact-3.html">contact 3</a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="./pages/team.html">team</a>
                                <ul>
                                  <li>
                                    <a href="./pages/team-2.html">team 2</a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="./pages/gallery.html">gallery</a>
                                <ul>
                                  <li>
                                    <a href="./pages/gallery-masonry.html">masonry</a>
                                  </li>
                                  <li>
                                    <a href="./pages/gallery-justified.html">masonry justified</a>
                                  </li>
                                  <li>
                                    <a href="./pages/gallery-fullwidth.html">fullwidth</a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="./pages/shop.html">shop</a>
                                <ul>
                                  <li>
                                    <a href="./pages/shop-product.html">single product</a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="javascript:void(0);">user account</a>
                                <ul>
                                  <li>
                                    <a href="./pages/user-login.html">Login &amp; Register</a>
                                  </li>
                                  <li>
                                    <a href="./pages/user-profile.html">my profile</a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="javascript:void(0);">more pages</a>
                                <ul>
                                  <li>
                                    <a href="./pages/clients.html">clients</a>
                                  </li>
                                  <li>
                                    <a href="./pages/pricing.html">pricing</a>
                                  </li>
                                  <li>
                                    <a href="./pages/testimonials.html">testimonials</a>
                                  </li>
                                  <li>
                                    <a href="./pages/sitemap.html">sitemap</a>
                                  </li>
                                  <li>
                                    <a href="./pages/faqs.html">faqs</a>
                                  </li>
                                  <li>
                                    <a href="./pages/careers.html">careers</a>
                                  </li>
                                  <li>
                                    <a href="./pages/404.html">404</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="./portfolio/index.html">portfolio</a>
                            <ul>
                              <li>
                                <a href="javascript:void(0);">grid</a>
                                <ul>
                                  <li>
                                    <a href="./portfolio/grid/columns-2.html">2 columns</a>
                                  </li>
                                  <li>
                                    <a href="./portfolio/grid/columns-3.html">3 columns</a>
                                  </li>
                                  <li>
                                    <a href="./portfolio/grid/columns-4.html">4 columns</a>
                                  </li>
                                  <li>
                                    <a href="./portfolio/grid/columns-5.html">5 columns</a>
                                  </li>
                                  <li>
                                    <a href="./portfolio/grid/columns-6.html">6 columns</a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="javascript:void(0);">masonry</a>
                                <ul>
                                  <li>
                                    <a href="./portfolio/masonry/columns-2.html">2 columns</a>
                                  </li>
                                  <li>
                                    <a href="./portfolio/masonry/columns-3.html">3 columns</a>
                                  </li>
                                  <li>
                                    <a href="./portfolio/masonry/columns-4.html">4 columns</a>
                                  </li>
                                  <li>
                                    <a href="./portfolio/masonry/columns-5.html">5 columns</a>
                                  </li>
                                  <li>
                                    <a href="./portfolio/masonry/columns-6.html">6 columns</a>
                                  </li>
                                  <li>
                                    <a href="./portfolio/masonry/justified-layout.html">justified layout</a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="javascript:void(0);">styles</a>
                                <ul>
                                  <li>
                                    <a href="./portfolio/styles/style-1.html">style 1</a>
                                  </li>
                                  <li>
                                    <a href="./portfolio/styles/style-2.html">style 2</a>
                                  </li>
                                  <li>
                                    <a href="./portfolio/styles/style-3.html">style 3</a>
                                  </li>
                                  <li>
                                    <a href="./portfolio/styles/style-4.html">style 4</a>
                                  </li>
                                  <li>
                                    <a href="./portfolio/styles/style-5.html">style 5</a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="javascript:void(0);">options</a>
                                <ul>
                                  <li>
                                    <a href="./portfolio/options/columns-no-gap.html">columns no gap</a>
                                  </li>
                                  <li>
                                    <a href="./portfolio/options/fullwidth-slider.html">fullwidth slider</a>
                                  </li>
                                  <li>
                                    <a href="./portfolio/options/fullwidth-scrollbar-slider.html">scrollbar slider</a>
                                  </li>
                                  <li>
                                    <a href="./portfolio/options/carousel-slider.html">carousel slider</a>
                                  </li>
                                  <li>
                                    <a href="./portfolio/options/infinite-scroll.html">infinite scroll</a>
                                  </li>
                                  <li>
                                    <a href="./portfolio/options/load-more.html">load more</a>
                                  </li>
                                  <li>
                                    <a href="./portfolio/options/pagination.html">pagination</a>
                                  </li>
                                  <li>
                                    <a href="./portfolio/options/hash-filter.html#filter=.branding">hash filter</a>
                                  </li>
                                  <li>
                                    <a href="./portfolio/options/filter-styles.html">filter styles</a>
                                  </li>
                                  <li>
                                    <a href="./portfolio/options/without-filter.html">without filter</a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="javascript:void(0);">layouts</a>
                                <ul>
                                  <li>
                                    <a href="./portfolio/layouts/default.html">default</a>
                                  </li>
                                  <li>
                                    <a href="./portfolio/layouts/right-sidebar.html">right sidebar</a>
                                  </li>
                                  <li>
                                    <a href="./portfolio/layouts/left-sidebar.html">left sidebar</a>
                                  </li>
                                  <li>
                                    <a href="./portfolio/layouts/fullwidth.html">fullwidth</a>
                                  </li>
                                  <li>
                                    <a href="./portfolio/layouts/parallax.html">parallax</a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="./portfolio/single.html">single project</a>
                                <ul>
                                  <li>
                                    <a href="./portfolio/single/2.html">single 2</a>
                                  </li>
                                  <li>
                                    <a href="./portfolio/single/3.html">single 3</a>
                                  </li>
                                  <li>
                                    <a href="./portfolio/single/4.html">single 4</a>
                                  </li>
                                  <li>
                                    <a href="./portfolio/single/5.html">single 5</a>
                                  </li>
                                  <li>
                                    <a href="./portfolio/single/6.html">single 6</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="./blog/index.html">blog</a>
                            <ul>
                              <li>
                                <a href="javascript:void(0);">default</a>
                                <ul>
                                  <li>
                                    <a href="./blog/default/right-sidebar.html">right sidebar</a>
                                  </li>
                                  <li>
                                    <a href="./blog/default/left-sidebar.html">left sidebar</a>
                                  </li>
                                  <li>
                                    <a href="./blog/default/fullwidth.html">fullwidth</a>
                                  </li>
                                  <li>
                                    <a href="./blog/default/style-1.html">style 1</a>
                                  </li>
                                  <li>
                                    <a href="./blog/default/style-2.html">style 2</a>
                                  </li>
                                  <li>
                                    <a href="./blog/default/style-3.html">style 3</a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="./blog/grid.html">grid</a>
                              </li>
                              <li>
                                <a href="./blog/card.html">card</a>
                              </li>
                              <li>
                                <a href="./blog/simple.html">simple</a>
                              </li>
                              <li>
                                <a href="./blog/list.html">list</a>
                              </li>
                              <li>
                                <a href="./blog/masonry.html">masonry</a>
                              </li>
                              <li>
                                <a href="./blog/timeline.html">timeline</a>
                              </li>
                              <li>
                                <a href="./blog/fullwidth.html">fullwidth</a>
                              </li>
                              <li>
                                <a href="./blog/post-types.html">post types</a>
                              </li>
                              <li>
                                <a href="./blog/single.html">single post</a>
                                <ul>
                                  <li>
                                    <a href="./blog/single/right-sidebar.html">right sidebar</a>
                                  </li>
                                  <li>
                                    <a href="./blog/single/left-sidebar.html">left sidebar</a>
                                  </li>
                                  <li>
                                    <a href="./blog/single/fullwidth.html">fullwidth</a>
                                  </li>
                                  <li>
                                    <a href="./blog/single/custom-layout.html">custom layout</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li className="mega-menu">
                            <a href="./elements/index.html">elements</a>
                            <ul>
                              <li>
                                <a href="./elements/index.html">elements</a>
                                <ul>
                                  <li>
                                    <a href="./elements/latest-news.html">latest news</a>
                                  </li>
                                  <li>
                                    <a href="./elements/accordions.html">accordions</a>
                                  </li>
                                  <li>
                                    <a href="./elements/breadcrumbs.html">breadcrumbs</a>
                                  </li>
                                  <li>
                                    <a href="./elements/counters.html">counters</a>
                                  </li>
                                  <li>
                                    <a href="./elements/subscribe.html">subscribe</a>
                                  </li>
                                  <li>
                                    <a href="./elements/pageloader.html">page-loader</a>
                                  </li>
                                  <li>
                                    <a href="./elements/notification.html">notification</a>
                                  </li>
                                  <li>
                                    <a href="./elements/modal.html">modal</a>
                                  </li>
                                  <li>
                                    <a href="./elements/backgrounds-types.html">backgrounds types</a>
                                  </li>
                                  <li>
                                    <a href="./elements/carousel-slider.html">carousel slider</a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="./elements/index.html">elements</a>
                                <ul>
                                  <li>
                                    <a href="./elements/team.html">team</a>
                                  </li>
                                  <li>
                                    <a href="./elements/tabs.html">tabs</a>
                                  </li>
                                  <li>
                                    <a href="./elements/pagination.html">pagination</a>
                                  </li>
                                  <li>
                                    <a href="./elements/pricing-tables.html">pricing tables</a>
                                  </li>
                                  <li>
                                    <a href="./elements/testimonials.html">testimonials</a>
                                  </li>
                                  <li>
                                    <a href="./elements/progress-bars.html">progress bars</a>
                                  </li>
                                  <li>
                                    <a href="./elements/card.html">card</a>
                                  </li>
                                  <li>
                                    <a href="./elements/tables.html">tables</a>
                                  </li>
                                  <li>
                                    <a href="./elements/google-map.html">google map</a>
                                  </li>
                                  <li>
                                    <a href="./elements/animations.html">animations</a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="./elements/index.html">elements</a>
                                <ul>
                                  <li>
                                    <a href="./elements/recent-work.html">recent work</a>
                                  </li>
                                  <li>
                                    <a href="./elements/lists.html">lists</a>
                                  </li>
                                  <li>
                                    <a href="./elements/dividers.html">dividers</a>
                                  </li>
                                  <li>
                                    <a href="./elements/heading.html">heading</a>
                                  </li>
                                  <li>
                                    <a href="./elements/clients.html">clients</a>
                                  </li>
                                  <li>
                                    <a href="./elements/calendar.html">calendar</a>
                                  </li>
                                  <li>
                                    <a href="./elements/dropdown.html">dropdown</a>
                                  </li>
                                  <li>
                                    <a href="./elements/code-highlight.html">code highlight</a>
                                  </li>
                                  <li>
                                    <a href="./elements/ratings.html">ratings</a>
                                  </li>
                                  <li>
                                    <a href="./elements/notify-bars-alerts.html">notify bars &amp; alerts</a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="./elements/index.html">elements</a>
                                <ul>
                                  <li>
                                    <a href="./elements/lightboxes.html">lightboxes</a>
                                  </li>
                                  <li>
                                    <a href="./elements/icons.html">icons</a>
                                  </li>
                                  <li>
                                    <a href="./elements/tags.html">tags</a>
                                  </li>
                                  <li>
                                    <a href="./elements/icon-boxes.html">icon boxes</a>
                                  </li>
                                  <li>
                                    <a href="./elements/blockquotes.html">blockquotes</a>
                                  </li>
                                  <li>
                                    <a href="./elements/timeline.html">timeline</a>
                                  </li>
                                  <li>
                                    <a href="./elements/menu.html">navigation menu</a>
                                  </li>
                                  <li>
                                    <a href="./elements/quickview.html">quickview</a>
                                  </li>
                                  <li>
                                    <a href="./elements/image-hover.html">image hover</a>
                                  </li>
                                  <li>
                                    <a href="./elements/animated-typing.html">animated typing</a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="./elements/index.html">elements</a>
                                <ul>
                                  <li>
                                    <a href="./elements/instagram.html">instagram</a>
                                  </li>
                                  <li>
                                    <a href="./elements/buttons.html">buttons</a>
                                  </li>
                                  <li>
                                    <a href="./elements/badges.html">badges</a>
                                  </li>
                                  <li>
                                    <a href="./elements/call-to-action.html">call to action</a>
                                  </li>
                                  <li>
                                    <a href="./elements/typography.html">typography</a>
                                  </li>
                                  <li>
                                    <a href="./elements/box.html">box</a>
                                  </li>
                                  <li>
                                    <a href="./elements/message.html">message</a>
                                  </li>
                                  <li>
                                    <a href="./elements/steps.html">steps</a>
                                  </li>
                                  <li>
                                    <a href="./elements/countdown.html">countdown</a>
                                  </li>
                                  <li>
                                    <a href="./elements/charts.html">charts</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </nav>
                      {/* #site-navigation */}
                    </div>
                    {/* #nav-wrap */}
                  </div>
                  {/* .level-left */}
                  <div className="level-right">
                    <ul className="header-menu-icons ">
                      <li>
                        <a href="javascript:void(0);">
                          <span className="icon">
                            <span className="badge" data-badge={2}>
                              <i className="icon-basket-loaded" />
                            </span>
                          </span>
                        </a>
                        <ul className="dropdown-shopping-cart style-2">
                          <li className="header">shopping cart</li>
                          <li>
                            <a href="javascript:void(0);">
                              <img alt="CodeCrafts" src="./assets/images/blog/1.png" />
                              <strong>UI Designs</strong>
                              <span className="product-amount">x2</span>
                              <br />
                              <span className="product-price">$11.99</span>
                              <span className="product-price-total">$23.98</span>
                            </a>
                            <span className="product-remove">
                              <i className="icon-close" />
                            </span>
                          </li>
                          <li>
                            <a href="javascript:void(0);">
                              <img alt="CodeCrafts" src="./assets/images/blog/2.png" />
                              <strong>Mockups</strong>
                              <span className="product-amount">x3</span>
                              <br />
                              <span className="product-price">$11.99</span>
                              <span className="product-price-total">$23.98</span>
                            </a>
                            <span className="product-remove">
                              <i className="icon-close" />
                            </span>
                          </li>
                          <li className="footer"> totla: $420.00
                            <br />
                            <a href="#" className="button is-small is-primary is-outlined is-rounded">view cart</a>
                            <a href="#" className="button is-small is-rounded">checkout</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-search-form search-style-2">
                        <a href="javascript:void(0);">
                          <span className="icon">
                            <i className="icon-magnifier" />
                          </span>
                        </a>
                        <ul>
                          <li className="header widget-form">
                            <form>
                              <div className="field">
                                <div className="control is-expanded">
                                  <input className="input" type="text" placeholder="Search..." />
                                  <button type="submit" className="button">
                                    <span className="icon">
                                      <i className="icon-magnifier" />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </form>
                          </li>
                        </ul>
                      </li>
                      <li className="show-quickview">
                        <a href="javascript:void(0);" data-show="quickview" data-target="quickviewInfo">
                          <span className="icon">
                            <i className="ion-ios-menu" />
                          </span>
                        </a>
                      </li>
                    </ul>
                    {/* .header-menu-icons */}
                    <div className="modal search-form-overlay">
                      <div className="modal-background" />
                      <div className="modal-content">
                        <form className="widget-form">
                          <div className="field">
                            <div className="control is-expanded">
                              <input className="input" type="text" placeholder="Search..." />
                              <button type="submit" className="button">
                                <span className="icon">
                                  <i className="icon-magnifier" />
                                </span>
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                      <button className="modal-close is-large" aria-label="close" />
                    </div>
                    {/* .modal.search-form-overlay */}
                    <div id="quickviewInfo" className="quickview">
                      <div className="quickview-header">
                        <p className="title" />
                        <span className="delete" data-dismiss="quickview" />
                      </div>
                      <div className="quickview-body">
                        <div className="quickview-block">
                          <div className="footer">
                            <div className="columns is-variable is-multiline">
                              <div className="column is-12">
                                <div className="widget widget-html">
                                  <div className="textwidget">
                                    <div id="footer-logo-menu" className="site-logo ">
                                      <a href="./index.html">
                                        <span className="logo-text">CodeCrafts</span>
                                      </a>
                                    </div>
                                    {/* #footer-logo */}
                                    <br />
                                    <p>The main component of a healthy environment for self esteem is that it needs be nurturing. </p>
                                    <div className="footer-social-links ">
                                      <ul>
                                        <li>
                                          <a href="#" target="_blank">
                                            <span className="icon">
                                              <i className="fab fa-facebook-f" />
                                            </span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#" target="_blank">
                                            <span className="icon">
                                              <i className="fab fa-twitter" />
                                            </span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#" target="_blank">
                                            <span className="icon">
                                              <i className="fab fa-instagram" />
                                            </span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#" target="_blank">
                                            <span className="icon">
                                              <i className="fab fa-pinterest-p" />
                                            </span>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  {/* .textwidget */}
                                </div>
                              </div>
                              {/* .column */}
                              <div className="column is-12">
                                <div className="widget widget-html">
                                  <div className="textwidget">
                                    <a href="./pages/about.html">
                                      <img alt="CodeCrafts" src="./assets/images/services/1.png" /> </a>
                                  </div>
                                  {/* .textwidget */}
                                </div>
                              </div>
                              {/* .column */}
                              <div className="column is-12">
                                <div className="widget widget-form">
                                  <h3 className="widget-title ">subscribe</h3>
                                  <p>The main component of a healthy environment.</p>
                                  <br />
                                  <form>
                                    <div className="field">
                                      <div className="control is-expanded">
                                        <input className="input" type="text" placeholder="your@email.com" />
                                        <button type="submit" className="button is-radiusless">
                                          <span className="icon">
                                            <i className="icon-envelope" />
                                          </span>
                                        </button>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                              {/* .column */}
                            </div>
                            {/* .columns */}
                          </div>
                          {/* .footer */}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* .level-right */}
                </div>
                {/* .level */}
              </div>
              {/* #header-inner */}
            </header>
            {/* #header */}
          </div>
          {/* #header-wrap */}
          <div id="header-bottom-wrap" className="is-clearfix">
            <div id="header-bottom" className="site-header-bottom">
              <div id="header-bottom-inner" className="site-header-bottom-inner ">
                <section className="hero slider is-clearfix ">
                  <h2 className="display-none">slider</h2>
                  <div className="rev_slider_wrapper fullscreen-container ">
                    <div id="rev_slider_1" className="rev_slider tp-overflow-hidden fullscreenbanner" data-version="5.4.7" style={{display: 'none'}}>
                      <ul>
                        <li data-transition="crossfade">
                          <img alt="CodeCrafts" className="rev-slidebg" src="./assets/images/slider/1.png" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-kenburns="off" data-duration={30000} data-ease="Linear.easeNone" data-scalestart={100} data-scaleend={115} data-rotatestart={0} data-rotateend={0} data-offsetstart="0 0" data-offsetend="0 0" data-bgparallax={15} />
                          <div className="tp-caption tp-resizeme large_text" data-frames="[{&quot;delay&quot;:800,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:800,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-x="center" data-hoffset="['0','0','0','0']" data-y="center" data-voffset="['-45','-45','0','0']" data-width="['auto']" data-textalign="['center','center','center','center']" data-height="['auto']"> Best Complete Design </div>
                          <div className="tp-caption tp-resizeme small_text" data-frames="[{&quot;delay&quot;:800,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:800,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-x="center" data-hoffset="['0','0','0','0']" data-y="center" data-voffset="['45','45','0','0']" data-width="['auto']" data-textalign="['center','center','center','center']" data-height="['auto']"> Lorem Ipsum has been the industry standard </div>
                          <a className="tp-caption tp-resizeme button is-outlined is-white is-rounded" href="#" data-frames="[{&quot;delay&quot;:1600,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:[100%];s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:800,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-x="center" data-hoffset="['-90','-90','0','0']" data-y="center" data-voffset="['125','125','0','0']" data-type="button"> Contact Us </a>
                          <a className="tp-caption tp-resizeme button is-primary is-rounded" href="#" data-frames="[{&quot;delay&quot;:1600,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:[100%];s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:800,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-x="center" data-hoffset="['90','90','0','0']" data-y="center" data-voffset="['125','125','0','0']" data-type="button"> Read More </a>
                        </li>
                        {/* slide */}
                        <li data-transition="crossfade">
                          <img alt="CodeCrafts" className="rev-slidebg" src="./assets/images/slider/2.png" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-kenburns="off" data-duration={30000} data-ease="Linear.easeNone" data-scalestart={100} data-scaleend={115} data-rotatestart={0} data-rotateend={0} data-offsetstart="0 0" data-offsetend="0 0" data-bgparallax={15} />
                          <div className="tp-caption tp-resizeme large_text" data-frames="[{&quot;delay&quot;:800,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:800,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-x="center" data-hoffset="['0','0','0','0']" data-y="center" data-voffset="['-45','-45','0','0']" data-width="['auto']" data-textalign="['center','center','center','center']" data-height="['auto']"> Best Complete Design </div>
                          <div className="tp-caption tp-resizeme small_text" data-frames="[{&quot;delay&quot;:800,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:800,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-x="center" data-hoffset="['0','0','0','0']" data-y="center" data-voffset="['45','45','0','0']" data-width="['auto']" data-textalign="['center','center','center','center']" data-height="['auto']"> Lorem Ipsum has been the industry standard </div>
                          <a className="tp-caption tp-resizeme button is-outlined is-white is-rounded" href="#" data-frames="[{&quot;delay&quot;:1600,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:[100%];s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:800,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-x="center" data-hoffset="['-90','-90','0','0']" data-y="center" data-voffset="['125','125','0','0']" data-type="button"> Contact Us </a>
                          <a className="tp-caption tp-resizeme button is-primary is-rounded" href="#" data-frames="[{&quot;delay&quot;:1600,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:[100%];s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:800,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-x="center" data-hoffset="['90','90','0','0']" data-y="center" data-voffset="['125','125','0','0']" data-type="button"> Read More </a>
                        </li>
                        {/* slide */}
                        <li data-transition="crossfade">
                          <img alt="CodeCrafts" className="rev-slidebg" src="./assets/images/slider/3.png" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-kenburns="off" data-duration={30000} data-ease="Linear.easeNone" data-scalestart={100} data-scaleend={115} data-rotatestart={0} data-rotateend={0} data-offsetstart="0 0" data-offsetend="0 0" data-bgparallax={15} />
                          <div className="tp-caption tp-resizeme large_text" data-frames="[{&quot;delay&quot;:800,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:800,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-x="center" data-hoffset="['0','0','0','0']" data-y="center" data-voffset="['-45','-45','0','0']" data-width="['auto']" data-textalign="['center','center','center','center']" data-height="['auto']"> Best Complete Design </div>
                          <div className="tp-caption tp-resizeme small_text" data-frames="[{&quot;delay&quot;:800,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:800,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-x="center" data-hoffset="['0','0','0','0']" data-y="center" data-voffset="['45','45','0','0']" data-width="['auto']" data-textalign="['center','center','center','center']" data-height="['auto']"> Lorem Ipsum has been the industry standard </div>
                          <a className="tp-caption tp-resizeme button is-outlined is-white is-rounded" href="#" data-frames="[{&quot;delay&quot;:1600,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:[100%];s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:800,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-x="center" data-hoffset="['-90','-90','0','0']" data-y="center" data-voffset="['125','125','0','0']" data-type="button"> Contact Us </a>
                          <a className="tp-caption tp-resizeme button is-primary is-rounded" href="#" data-frames="[{&quot;delay&quot;:1600,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:[100%];s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:800,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-x="center" data-hoffset="['90','90','0','0']" data-y="center" data-voffset="['125','125','0','0']" data-type="button"> Read More </a>
                        </li>
                        {/* slide */}
                      </ul>
                    </div>
                    {/* .rev_slider */}
                  </div>
                  {/* .rev_slider_wrapper */}
                </section>
                {/* .slider */}
              </div>
              {/* #header-bottom-inner */}
            </div>
            {/* #header-bottom */}
          </div>
          {/* #header-bottom-wrap */}
          {/* import content layouts and modules */}
          <div id="content-main-wrap" className="is-clearfix">
            <div id="content-area" className="site-content-area">
              <div id="content-area-inner" className="site-content-area-inner">
                {/* import content layouts and modules */}
                {/* start adding page content */}
                <section id="services" className="section padding-bottom-none is-clearfix">
                  <div className="container">
                    <h1 className="heading-title style-1">creative services</h1>
                    <p className="heading-title-bottom has-text-centered">Lorem ipsum dolor sit amet, consectetur adipiscing elit Nulla chronocrator
                      <br /> accumsan, metus ultrices eleifend gravi.</p>
                    <br />
                    <br />
                    <div className="columns is-variable is-8 is-multiline boxes-style-1">
                      <div className="column is-4" data-aos="fade">
                        <div className="box-item ">
                          <a href="./features/index.html">
                            <span className="icon">
                              <i className="ion-ios-briefcase-outline" />
                            </span>
                          </a>
                          <h3>
                            <a href="./features/index.html">Prototyping</a>
                          </h3>
                          <p>Climatology chronocrator puppysnatch leacher unrived tomentum insignia harmoniousness rule.</p>
                          <a href="./features/index.html" className="button">More</a>
                        </div>
                        {/* .box-item */}
                      </div>
                      <div className="column is-4" data-aos="fade">
                        <div className="box-item ">
                          <a href="./features/index.html">
                            <span className="icon">
                              <i className="ion-ios-bulb-outline" />
                            </span>
                          </a>
                          <h3>
                            <a href="./features/index.html">Branding</a>
                          </h3>
                          <p>Climatology chronocrator puppysnatch leacher unrived tomentum insignia harmoniousness rule.</p>
                          <a href="./features/index.html" className="button">More</a>
                        </div>
                        {/* .box-item */}
                      </div>
                      <div className="column is-4" data-aos="fade">
                        <div className="box-item ">
                          <a href="./features/index.html">
                            <span className="icon">
                              <i className="ion-ios-browsers-outline" />
                            </span>
                          </a>
                          <h3>
                            <a href="./features/index.html">Development</a>
                          </h3>
                          <p>Climatology chronocrator puppysnatch leacher unrived tomentum insignia harmoniousness rule.</p>
                          <a href="./features/index.html" className="button">More</a>
                        </div>
                        {/* .box-item */}
                      </div>
                    </div>
                    {/* .columns */}
                    <br />
                    <br />
                    <br /> </div>
                  {/* .container */}
                  <div className="has-text-centered">
                    <img alt="CodeCrafts" src="./assets/images/global/3.png" data-aos="fade-up" className="is-block" style={{margin: '0 auto'}} /> </div>
                </section>
                <section className="hero fun-facts has-text-centered is-clearfix">
                  <div className="hero-body">
                    <div className="container">
                      <h2 className="display-none">funfacts</h2>
                      <nav className="level counterup with-icons">
                        <div className="level-item has-text-centered">
                          <div>
                            <span className="icon ">
                              <i className="ion-ios-sync-outline" />
                            </span>
                            <p className="title counter">70</p>
                            <p className="heading">awards won</p>
                          </div>
                        </div>
                        <div className="level-item has-text-centered">
                          <div>
                            <span className="icon ">
                              <i className="ion-ios-aperture-outline" />
                            </span>
                            <p className="title counter">48</p>
                            <p className="heading">satisfied clients</p>
                          </div>
                        </div>
                        <div className="level-item has-text-centered">
                          <div>
                            <span className="icon ">
                              <i className="ion-ios-share-outline" />
                            </span>
                            <p className="title counter">56</p>
                            <p className="heading">startup growth</p>
                          </div>
                        </div>
                        <div className="level-item has-text-centered">
                          <div>
                            <span className="icon ">
                              <i className="ion-ios-time-outline" />
                            </span>
                            <p className="title counter">28</p>
                            <p className="heading">average prices</p>
                          </div>
                        </div>
                      </nav>
                      {/* .counterup */}
                    </div>
                  </div>
                </section>
                <section className="section watch-video is-clearfix">
                  <div className="container">
                    <br />
                    <br />
                    <div className="columns is-variable is-8 is-multiline">
                      <div className="column is-6-desktop is-12-tablet" data-aos="fade">
                        <br />
                        <h1 className="heading-title style-1 has-text-left">We helping business delivered.</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravi, nulla nunc varius lectus, nec rutrum justo nibh eu lectus metus ultrices.</p>
                        <br />
                        <div className="works-button">
                          <a href="./pages/about.html" className="button is-primary is-rounded">read more</a>
                        </div>
                        {/* .works-button */}
                      </div>
                      <div className="column is-6-desktop is-12-tablet has-text-centered" data-aos="fade-up">
                        <div className="works-latest">
                          <div className="works-latest-item">
                            <img alt="CodeCrafts" src="./assets/images/global/introduction.png" />
                            <div className="works-latest-item-icon style-2">
                              <a href="https://www.youtube.com/watch?v=N3qo_13jWAc" className="mfp-lightbox mfp-iframe">
                                <span className="icon ripple-effect">
                                  <i className="ion-ios-play" />
                                </span>
                              </a>
                            </div>
                            {/* .works-latest-icon */}
                          </div>
                          {/* .works-latest-item */}
                        </div>
                      </div>
                    </div>
                    <br /> </div>
                </section>
                {/* stories section */}
                <section id="works" className="section hero stories has-background-primary-light padding-bottom-none is-clearfix">
                  <div className="container">
                    <div className="columns is-variable is-multiline">
                      <div className="column is-6-desktop is-12-tablet">
                        <h1 className="heading-title style-1 has-text-left">Recent Work</h1>
                      </div>
                      <div className="column is-6-desktop is-12-tablet">
                        <div className="works isotope has-text-right">
                          <ul className="isotope-filter style-2 margin-bottom-none">
                            <li data-filter="*" className="active">all</li>
                            <li data-filter=".branding">branding</li>
                            <li data-filter=".prototype">prototype</li>
                            <li data-filter=".development">development</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <br /> </div>
                  {/* .container */}
                  <div className="works isotope masonry image-hover effect-1 margin-bottom-none">
                    <div className="columns is-variable is-0 is-gapless is-multiline">
                      <div className="column is-3 branding" data-aos="fade">
                        <div className="work-item">
                          <figure>
                            <img alt="CodeCrafts" src="./assets/images/portfolio/1.png" />
                            <figcaption>
                              <div>
                                <h3>Caminando</h3>
                                <h5>Creative</h5>
                              </div>
                              <a href="./portfolio/single.html">View more</a>
                            </figcaption>
                          </figure>
                        </div>
                        {/* .work-item */}
                      </div>
                      <div className="column is-3 prototype" data-aos="fade">
                        <div className="work-item">
                          <figure>
                            <img alt="CodeCrafts" src="./assets/images/portfolio/2.png" />
                            <figcaption>
                              <div>
                                <h3>Calligraphy</h3>
                                <h5>Branding</h5>
                              </div>
                              <a href="./portfolio/single.html">View more</a>
                            </figcaption>
                          </figure>
                        </div>
                        {/* .work-item */}
                      </div>
                      <div className="column is-3 development" data-aos="fade">
                        <div className="work-item">
                          <figure>
                            <img alt="CodeCrafts" src="./assets/images/portfolio/3.png" />
                            <figcaption>
                              <div>
                                <h3>Abstract</h3>
                                <h5>Vector</h5>
                              </div>
                              <a href="./portfolio/single.html">View more</a>
                            </figcaption>
                          </figure>
                        </div>
                        {/* .work-item */}
                      </div>
                      <div className="column is-3 branding" data-aos="fade">
                        <div className="work-item">
                          <figure>
                            <img alt="CodeCrafts" src="./assets/images/portfolio/4.png" />
                            <figcaption>
                              <div>
                                <h3>lifestyle</h3>
                                <h5>healthy</h5>
                              </div>
                              <a href="./portfolio/single.html">View more</a>
                            </figcaption>
                          </figure>
                        </div>
                        {/* .work-item */}
                      </div>
                      <div className="column is-3 prototype" data-aos="fade">
                        <div className="work-item">
                          <figure>
                            <img alt="CodeCrafts" src="./assets/images/portfolio/5.png" />
                            <figcaption>
                              <div>
                                <h3>Caminando</h3>
                                <h5>Creative</h5>
                              </div>
                              <a href="./portfolio/single.html">View more</a>
                            </figcaption>
                          </figure>
                        </div>
                        {/* .work-item */}
                      </div>
                      <div className="column is-3 development" data-aos="fade">
                        <div className="work-item">
                          <figure>
                            <img alt="CodeCrafts" src="./assets/images/portfolio/6.png" />
                            <figcaption>
                              <div>
                                <h3>Calligraphy</h3>
                                <h5>Branding</h5>
                              </div>
                              <a href="./portfolio/single.html">View more</a>
                            </figcaption>
                          </figure>
                        </div>
                        {/* .work-item */}
                      </div>
                      <div className="column is-3 branding" data-aos="fade">
                        <div className="work-item">
                          <figure>
                            <img alt="CodeCrafts" src="./assets/images/portfolio/6-1.png" />
                            <figcaption>
                              <div>
                                <h3>Abstract</h3>
                                <h5>Vector</h5>
                              </div>
                              <a href="./portfolio/single.html">View more</a>
                            </figcaption>
                          </figure>
                        </div>
                        {/* .work-item */}
                      </div>
                      <div className="column is-3 prototype" data-aos="fade">
                        <div className="work-item">
                          <figure>
                            <img alt="CodeCrafts" src="./assets/images/portfolio/6-2.png" />
                            <figcaption>
                              <div>
                                <h3>lifestyle</h3>
                                <h5>healthy</h5>
                              </div>
                              <a href="./portfolio/single.html">View more</a>
                            </figcaption>
                          </figure>
                        </div>
                        {/* .work-item */}
                      </div>
                    </div>
                    {/* .columns */}
                  </div>
                  {/* .works */}
                </section>
                <section id="team" className="section  is-clearfix">
                  <div className="container">
                    <h1 className="heading-title style-1">team members</h1>
                    <p className="heading-title-bottom has-text-centered">Lorem ipsum dolor sit amet, consectetur adipiscing elit Nulla chronocrator
                      <br /> accumsan, metus ultrices eleifend gravi.</p>
                    <br />
                    <br />
                    <div className="team style-1">
                      <div className="columns is-variable is-4 is-multiline">
                        <div className="column is-4" data-aos="fade">
                          <div className="team-member">
                            <figure className="team-member-img">
                              <a href="./pages/team.html">
                                <img alt="CodeCrafts" src="./assets/images/team/1.png" /> </a>
                            </figure>
                            <div className="team-member-meta">
                              <div className="team-info">
                                <h3>
                                  <a href="./pages/team.html">Ahmed saad</a>
                                </h3>
                                <h5>
                                  <a href="./pages/team.html">desginer</a>
                                </h5>
                              </div>
                              <ul className="team-social-links">
                                <li>
                                  <a href="#" target="_blank">
                                    <span className="icon">
                                      <i className="fab fa-facebook-f" />
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#" target="_blank">
                                    <span className="icon">
                                      <i className="fab fa-twitter" />
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#" target="_blank">
                                    <span className="icon">
                                      <i className="fab fa-instagram" />
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          {/* .team-member */}
                        </div>
                        <div className="column is-4" data-aos="fade">
                          <div className="team-member">
                            <figure className="team-member-img">
                              <a href="./pages/team.html">
                                <img alt="CodeCrafts" src="./assets/images/team/2.png" /> </a>
                            </figure>
                            <div className="team-member-meta">
                              <div className="team-info">
                                <h3>
                                  <a href="./pages/team.html">Olivia Allison</a>
                                </h3>
                                <h5>
                                  <a href="./pages/team.html">developer</a>
                                </h5>
                              </div>
                              <ul className="team-social-links">
                                <li>
                                  <a href="#" target="_blank">
                                    <span className="icon">
                                      <i className="fab fa-facebook-f" />
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#" target="_blank">
                                    <span className="icon">
                                      <i className="fab fa-twitter" />
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#" target="_blank">
                                    <span className="icon">
                                      <i className="fab fa-instagram" />
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          {/* .team-member */}
                        </div>
                        <div className="column is-4" data-aos="fade">
                          <div className="team-member">
                            <figure className="team-member-img">
                              <a href="./pages/team.html">
                                <img alt="CodeCrafts" src="./assets/images/team/3.png" /> </a>
                            </figure>
                            <div className="team-member-meta">
                              <div className="team-info">
                                <h3>
                                  <a href="./pages/team.html">Mohamed saad</a>
                                </h3>
                                <h5>
                                  <a href="./pages/team.html">designer</a>
                                </h5>
                              </div>
                              <ul className="team-social-links">
                                <li>
                                  <a href="#" target="_blank">
                                    <span className="icon">
                                      <i className="fab fa-facebook-f" />
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#" target="_blank">
                                    <span className="icon">
                                      <i className="fab fa-twitter" />
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#" target="_blank">
                                    <span className="icon">
                                      <i className="fab fa-instagram" />
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          {/* .team-member */}
                        </div>
                      </div>
                      {/* /.columns */}
                    </div>
                    {/* /.team */}
                    <br />
                    <br />
                    <br />
                    <div className="has-text-centered">
                      <a className="button" href="./pages/team.html">meet the team</a>
                    </div>
                  </div>
                </section>
                <section id="clients" className="section has-background-secondary-2 testimonials-list is-clearfix">
                  <div className="container">
                    <h1 className="heading-title style-3 has-text-white">testimonials</h1>
                    <div className="testimonials-quote has-text-centered">
                      <span className="icon">
                        <i className="fas fa-quote-right" />
                      </span>
                    </div>
                    <div className="testimonials style-4 owl-carousel dots carousel-items-  ">
                      <div className="testimonials-item">
                        <p>Any time we start something new it is exciting and we are very motivated and committed. As time goes by</p>
                        <div>
                          <img alt="CodeCrafts" src="./assets/images/testimonials/1.png" /> </div>
                        <h3>Mohamed Ahmed
                          <br />
                          <span>london</span>
                        </h3>
                      </div>
                      <div className="testimonials-item">
                        <p>Any time we start something new it is exciting and we are very motivated and committed. As time goes by</p>
                        <div>
                          <img alt="CodeCrafts" src="./assets/images/testimonials/2.png" /> </div>
                        <h3>Mohamed Ahmed
                          <br />
                          <span>london</span>
                        </h3>
                      </div>
                      <div className="testimonials-item">
                        <p>Any time we start something new it is exciting and we are very motivated and committed. As time goes by</p>
                        <div>
                          <img alt="CodeCrafts" src="./assets/images/testimonials/3.png" /> </div>
                        <h3>Mohamed Ahmed
                          <br />
                          <span>london</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="section call-to-action style-1 has-background-primary is-clearfix">
                  <div className="container">
                    <div className="level">
                      <div>
                        <h1 className="title has-text-white">Let's make something great together.</h1>
                      </div>
                      <div className="level-right">
                        <a href="./pages/contact.html" className="button is-white">Start a Project</a>
                      </div>
                      {/* .level-right */}
                    </div>
                    {/* .level */}
                  </div>
                </section>
                <section className="section watch-video is-clearfix">
                  <div className="container">
                    <br />
                    <br />
                    <div className="columns is-variable is-8 is-multiline">
                      <div className="column is-6-desktop is-12-tablet has-text-centered" data-aos="fade-up">
                        <div className="works-latest">
                          <div className="works-latest-item">
                            <img alt="CodeCrafts" src="./assets/images/global/introduction-2.png" /> </div>
                          {/* .works-latest-item */}
                        </div>
                      </div>
                      <div className="column is-6-desktop is-12-tablet" data-aos="fade">
                        <br />
                        <h1 className="heading-title style-1 has-text-left">We helping business delivered.</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravi, nulla nunc varius lectus, nec rutrum justo nibh eu lectus metus ultrices.</p>
                        <br />
                        <div className="works-button">
                          <a href="./pages/about.html" className="button is-primary is-rounded is-outlined">read more</a>
                        </div>
                        {/* .works-button */}
                      </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="columns is-variable is-6 is-multiline boxes-style-3">
                      <div className="column is-4" data-aos="fade">
                        <div className="box-item media">
                          <div className="media-left">
                            <a href="./features/index.html">
                              <span className="icon">
                                <i className="ion-ios-briefcase-outline" />
                              </span>
                            </a>
                          </div>
                          <div className="media-content">
                            <h3>
                              <a href="./features/index.html">Prototyping</a>
                            </h3>
                            <p>Climatology chronocrator puppysnatch leacher unrived tomentum insignia harmoniousness rule.</p>
                            <a href="./features/index.html" className="button">More</a>
                          </div>
                        </div>
                        {/* .box-item */}
                      </div>
                      <div className="column is-4" data-aos="fade">
                        <div className="box-item media">
                          <div className="media-left">
                            <a href="./features/index.html">
                              <span className="icon">
                                <i className="ion-ios-bulb-outline" />
                              </span>
                            </a>
                          </div>
                          <div className="media-content">
                            <h3>
                              <a href="./features/index.html">Branding</a>
                            </h3>
                            <p>Climatology chronocrator puppysnatch leacher unrived tomentum insignia harmoniousness rule.</p>
                            <a href="./features/index.html" className="button">More</a>
                          </div>
                        </div>
                        {/* .box-item */}
                      </div>
                      <div className="column is-4" data-aos="fade">
                        <div className="box-item media">
                          <div className="media-left">
                            <a href="./features/index.html">
                              <span className="icon">
                                <i className="ion-ios-browsers-outline" />
                              </span>
                            </a>
                          </div>
                          <div className="media-content">
                            <h3>
                              <a href="./features/index.html">Development</a>
                            </h3>
                            <p>Climatology chronocrator puppysnatch leacher unrived tomentum insignia harmoniousness rule.</p>
                            <a href="./features/index.html" className="button">More</a>
                          </div>
                        </div>
                        {/* .box-item */}
                      </div>
                    </div>
                    {/* .columns */}
                  </div>
                </section>
                <section id="news" className="section has-background-primary-light is-clearfix">
                  <div className="container">
                    <h1 className="heading-title style-1 has-text-left">Latest News</h1>
                    <div className="blog-list style-2 owl-carousel navs carousel-items-3">
                      <article className="blog-post">
                        <figure className="post-image">
                          <a href="./blog/single.html">
                            <img alt="CodeCrafts" src="./assets/images/blog/1.png" /> </a>
                        </figure>
                        <div className="entry-header">
                          <h2 className="entry-title">
                            <a href="./blog/single.html">self motivation how to keep</a>
                          </h2>
                          <div className="post-meta">
                            <ul>
                              <li>
                                <a href="#">
                                  <span>Coding</span>
                                </a>
                              </li>
                              <li>
                                <span>April 5, 2018</span>
                              </li>
                            </ul>
                          </div>
                          {/* .post-meta */}
                        </div>
                        {/* .entry-header */}
                        <div className="entry-content">
                          <p>The main component of a healthy for self esteem is that it needs be nurturing. It should provide warmth..</p>
                        </div>
                        {/* .entry-content */}
                      </article>
                      {/* .blog-post */}
                      <article className="blog-post">
                        <figure className="post-image">
                          <a href="./blog/single.html">
                            <img alt="CodeCrafts" src="./assets/images/blog/2.png" /> </a>
                        </figure>
                        <div className="entry-header">
                          <h2 className="entry-title">
                            <a href="./blog/single.html">self motivation how to keep</a>
                          </h2>
                          <div className="post-meta">
                            <ul>
                              <li>
                                <a href="#">
                                  <span>Design</span>
                                </a>
                              </li>
                              <li>
                                <span>April 5, 2018</span>
                              </li>
                            </ul>
                          </div>
                          {/* .post-meta */}
                        </div>
                        {/* .entry-header */}
                        <div className="entry-content">
                          <p>The main component of a healthy for self esteem is that it needs be nurturing. It should provide warmth..</p>
                        </div>
                        {/* .entry-content */}
                      </article>
                      {/* .blog-post */}
                      <article className="blog-post">
                        <figure className="post-image">
                          <a href="./blog/single.html">
                            <img alt="CodeCrafts" src="./assets/images/blog/3.png" /> </a>
                        </figure>
                        <div className="entry-header">
                          <h2 className="entry-title">
                            <a href="./blog/single.html">self motivation how to keep</a>
                          </h2>
                          <div className="post-meta">
                            <ul>
                              <li>
                                <a href="#">
                                  <span>Branding</span>
                                </a>
                              </li>
                              <li>
                                <span>April 5, 2018</span>
                              </li>
                            </ul>
                          </div>
                          {/* .post-meta */}
                        </div>
                        {/* .entry-header */}
                        <div className="entry-content">
                          <p>The main component of a healthy for self esteem is that it needs be nurturing. It should provide warmth..</p>
                        </div>
                        {/* .entry-content */}
                      </article>
                      {/* .blog-post */}
                      <article className="blog-post">
                        <figure className="post-image">
                          <a href="./blog/single.html">
                            <img alt="CodeCrafts" src="./assets/images/blog/1.png" /> </a>
                        </figure>
                        <div className="entry-header">
                          <h2 className="entry-title">
                            <a href="./blog/single.html">self motivation how to keep</a>
                          </h2>
                          <div className="post-meta">
                            <ul>
                              <li>
                                <a href="#">
                                  <span>Coding</span>
                                </a>
                              </li>
                              <li>
                                <span>April 5, 2018</span>
                              </li>
                            </ul>
                          </div>
                          {/* .post-meta */}
                        </div>
                        {/* .entry-header */}
                        <div className="entry-content">
                          <p>The main component of a healthy for self esteem is that it needs be nurturing. It should provide warmth..</p>
                        </div>
                        {/* .entry-content */}
                      </article>
                      {/* .blog-post */}
                      <article className="blog-post">
                        <figure className="post-image">
                          <a href="./blog/single.html">
                            <img alt="CodeCrafts" src="./assets/images/blog/2.png" /> </a>
                        </figure>
                        <div className="entry-header">
                          <h2 className="entry-title">
                            <a href="./blog/single.html">self motivation how to keep</a>
                          </h2>
                          <div className="post-meta">
                            <ul>
                              <li>
                                <a href="#">
                                  <span>Design</span>
                                </a>
                              </li>
                              <li>
                                <span>April 5, 2018</span>
                              </li>
                            </ul>
                          </div>
                          {/* .post-meta */}
                        </div>
                        {/* .entry-header */}
                        <div className="entry-content">
                          <p>The main component of a healthy for self esteem is that it needs be nurturing. It should provide warmth..</p>
                        </div>
                        {/* .entry-content */}
                      </article>
                      {/* .blog-post */}
                      <article className="blog-post">
                        <figure className="post-image">
                          <a href="./blog/single.html">
                            <img alt="CodeCrafts" src="./assets/images/blog/3.png" /> </a>
                        </figure>
                        <div className="entry-header">
                          <h2 className="entry-title">
                            <a href="./blog/single.html">self motivation how to keep</a>
                          </h2>
                          <div className="post-meta">
                            <ul>
                              <li>
                                <a href="#">
                                  <span>Branding</span>
                                </a>
                              </li>
                              <li>
                                <span>April 5, 2018</span>
                              </li>
                            </ul>
                          </div>
                          {/* .post-meta */}
                        </div>
                        {/* .entry-header */}
                        <div className="entry-content">
                          <p>The main component of a healthy for self esteem is that it needs be nurturing. It should provide warmth..</p>
                        </div>
                        {/* .entry-content */}
                      </article>
                      {/* .blog-post */}
                    </div>
                  </div>
                </section>
              </div>
              {/* #content-area-inner */}
            </div>
            {/* #content-area */}
          </div>
          {/* #content-main-wrap */}
          <div id="footer-top-wrap" className="is-clearfix">
            <div id="footer-top" className="site-footer-top">
              <div id="footer-top-inner" className="site-footer-top-inner ">
                <section className="hero clients-section is-clearfix">
                  <div className="container">
                    <h2 className="display-none">clients</h2>
                    <nav className="clients-list level  owl-carousel no-dots carousel-items-4">
                      <div className="client-item has-text-centered level-item">
                        <a href="#" target="_blank">
                          <img alt="CodeCrafts" src="./assets/images/clients/1.png" /> </a>
                      </div>
                      <div className="client-item has-text-centered level-item">
                        <a href="#" target="_blank">
                          <img alt="CodeCrafts" src="./assets/images/clients/2.png" /> </a>
                      </div>
                      <div className="client-item has-text-centered level-item">
                        <a href="#" target="_blank">
                          <img alt="CodeCrafts" src="./assets/images/clients/3.png" /> </a>
                      </div>
                      <div className="client-item has-text-centered level-item">
                        <a href="#" target="_blank">
                          <img alt="CodeCrafts" src="./assets/images/clients/4.png" /> </a>
                      </div>
                      <div className="client-item has-text-centered level-item">
                        <a href="#" target="_blank">
                          <img alt="CodeCrafts" src="./assets/images/clients/5.png" /> </a>
                      </div>
                      <div className="client-item has-text-centered level-item">
                        <a href="#" target="_blank">
                          <img alt="CodeCrafts" src="./assets/images/clients/6.png" /> </a>
                      </div>
                      <div className="client-item has-text-centered level-item">
                        <a href="#" target="_blank">
                          <img alt="CodeCrafts" src="./assets/images/clients/1.png" /> </a>
                      </div>
                      <div className="client-item has-text-centered level-item">
                        <a href="#" target="_blank">
                          <img alt="CodeCrafts" src="./assets/images/clients/2.png" /> </a>
                      </div>
                      <div className="client-item has-text-centered level-item">
                        <a href="#" target="_blank">
                          <img alt="CodeCrafts" src="./assets/images/clients/3.png" /> </a>
                      </div>
                      <div className="client-item has-text-centered level-item">
                        <a href="#" target="_blank">
                          <img alt="CodeCrafts" src="./assets/images/clients/4.png" /> </a>
                      </div>
                      <div className="client-item has-text-centered level-item">
                        <a href="#" target="_blank">
                          <img alt="CodeCrafts" src="./assets/images/clients/5.png" /> </a>
                      </div>
                      <div className="client-item has-text-centered level-item">
                        <a href="#" target="_blank">
                          <img alt="CodeCrafts" src="./assets/images/clients/6.png" /> </a>
                      </div>
                    </nav>
                  </div>
                </section>
              </div>
              {/* #footer-top-inner */}
            </div>
            {/* #footer-top */}
          </div>
          {/* #footer-top-wrap */}
          <section className="section site-footer-top follow-us-section is-clearfix">
            <div className="container has-text-centered">
              <h1 className="heading-title style-3 has-text-white">follow us now</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Nulla chronocrator.</p>
              <br />
              <br />
              <div className="has-text-centered">
                <div className="global-social-links">
                  <ul>
                    <li>
                      <a href="#">
                        <span className="icon">
                          <i className="fab fa-facebook-f" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/codecrafts_">
                        <span className="icon">
                          <i className="fab fa-twitter" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="https://instagram.com/codecrafts_">
                        <span className="icon">
                          <i className="fab fa-instagram" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="email:codecraftsenquiry@gmail.com">
                        <span className="icon">
                          <i className="fab fa-google" />
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <div id="footer-wrap" className="is-clearfix">
            <footer id="footer" className="site-footer">
              <div id="footer-inner" className="site-footer-inner container">
                <div className="columns is-variable is-5 is-multiline">
                  <div className="column is-4">
                    <div className="widget widget-html">
                      <div className="textwidget">
                        <div id="footer-logo" className="site-logo ">
                          <a href="./index.html">
                            <span className="logo-text">CodeCrafts</span>
                          </a>
                        </div>
                        {/* #footer-logo */}
                        <br />
                        <p>The main component of a healthy environment for self esteem is that it needs be nurturing. It should provide unconditional warmth.</p>
                        <div className="footer-social-links ">
                          <ul>
                            <li>
                              <a href="#" target="_blank">
                                <span className="icon">
                                  <i className="fab fa-facebook-f" />
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#" target="_blank">
                                <span className="icon">
                                  <i className="fab fa-twitter" />
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#" target="_blank">
                                <span className="icon">
                                  <i className="fab fa-instagram" />
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* .textwidget */}
                    </div>
                  </div>
                  {/* .column */}
                  <div className="column">
                    <div className="widget widget-links">
                      <h3 className="widget-title ">Projects</h3>
                      <ul>
                        <li>
                          <a href="./index.html">Caminando design</a>
                        </li>
                        <li>
                          <a href="./index.html">Animation Work</a>
                        </li>
                        <li>
                          <a href="./index.html">WordPress Theme</a>
                        </li>
                        <li>
                          <a href="./index.html">Html Template</a>
                        </li>
                      </ul>
                    </div>
                    {/* .widget */}
                  </div>
                  {/* .column */}
                  <div className="column">
                    <div className="widget widget-tags">
                      <h3 className="widget-title ">Tags Cloud</h3>
                      <div className="tagcloud">
                        <a href="#">Branding</a>
                        <a href="#">Design</a>
                        <a href="#">Coding</a>
                        <a href="#">Prototype</a>
                        <a href="#">Webdesign</a>
                      </div>
                      {/* .tagcloud */}
                    </div>
                  </div>
                  {/* .column */}
                  <div className="column is-3">
                    {/* instagram widget */}
                    <div className="widget widget-instafeed">
                      <h3 className="widget-title ">Instagram</h3>
                      <div id="instafeed-footer" className="instafeed">
                        {/* instagram feed will be loaded here */}
                      </div>
                    </div>
                    {/* .widget */}
                  </div>
                  {/* .column */}
                </div>
                {/* .columns */}
              </div>
              {/* #footer-inner */}
            </footer>
            {/* #footer */}
          </div>
          {/* #footer-wrap */}
          <div id="footer-bottom-wrap" className="is-clearfix">
            <div id="footer-bottom" className="site-footer-bottom">
              <div id="footer-bottom-inner" className="site-footer-bottom-inner ">
                <section className="section footer-bottom-content">
                  <div className="container">
                    <h2 className="display-none">footer</h2>
                    <div className="level">
                      <div className="level-left">
                        <span className="footer-copyright">
                          <a href="/">CodeCrafts</a> ©
                          <span className="current-year" />. All Rights Reserved. </span>
                      </div>
                      {/* .level-left */}
                      <div className="level-right">
                        <div className="nav-wrap">
                          <nav className="main-navigation right">
                            <ul className="menu">
                              {/* <div id="nav-wrap">
    <nav id="site-navigation" class="main-navigation right">
        <ul id="main-header-menu" class="menu"> */}
                              <li>
                                <a href="./pages/about.html">about</a>
                              </li>
                              <li>
                                <a href="./pages/services.html">services</a>
                              </li>
                              <li>
                                <a href="./pages/pricing.html">pricing</a>
                              </li>
                              <li>
                                <a href="./pages/contact.html">contact</a>
                              </li>
                            </ul>
                          </nav>
                          {/* #site-navigation */}
                        </div>
                        {/* #nav-wrap */}
                      </div>
                      {/* .level-right */}
                    </div>
                    {/* .level */}
                  </div>
                </section>
                {/* .footer-bottom-content */}
              </div>
              {/* #footer-bottom-inner */}
            </div>
            {/* #footer-bottom */}
          </div>
          {/* #footer-bottom-wrap */}
          {/* show floating buttons */}
          <div className="floating_buttons is-animate">
            <a href="https://instagram.com/codecrafts_" target="_blank" className="float" data-tooltip="LIVE CHAT">
              <span className="icon">
                <i className="icon-paper-plane" />
              </span>
            </a>
          </div>
        </div>
        {/* #site-wrap */}
      </div>
    );
  }
});

export default Home;
