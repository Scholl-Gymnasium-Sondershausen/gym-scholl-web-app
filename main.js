(window.webpackJsonp = window.webpackJsonp || []).push( [[0], {
  41: function( e, a, t ) {
    e.exports = t( 68 )
  }, 68: function( e, a, t ) {
    "use strict";
    t.r( a );
    var l = t( 0 ), n = t.n( l ), m = t( 37 ), c = t.n( m ), s = t( 1 ), i = t( 14 ), r = t( 2 ), o = t( 3 ), u = t( 5 ), d = t( 4 ), g = t( 6 ), p = t( 9 ), E = t.n( p );
    var b = function() {
      return E()( "body" ).on( "click", ".scroll_top", function() {
        return E()( "html, body" ).animate( {scrollTop: 0}, 800 ), !1
      } ), n.a.createElement( l.Fragment, null, n.a.createElement( "footer", {
        id: "footer-area",
        className: "footer-area p-top-40 p-bottom-40 border-top"
      }, n.a.createElement( "div", {className: "container"}, n.a.createElement( "div", {className: "row align-items-center"}, n.a.createElement( "div", {className: "col-lg-6 col-md-6 col-sm-12 column"}, n.a.createElement( "div", {className: "social_logo"}, n.a.createElement( "p", {className: "pb-2"}, n.a.createElement( s.b, {to: "#"}, n.a.createElement( "img", {
        src: "./assets/img/footer-logo.png",
        alt: "img",
        className: "img-fluid"
      } ) ) ), n.a.createElement( "p", {className: "copyright mr-auto mt-2"}, "\xa9 2019. All Rights Reserved. Created by ", n.a.createElement( s.b, {
        to: "http://aazztech.com/",
        target: "_blank"
      }, "AazzTech" ) ) ) ), n.a.createElement( "div", {className: "col-lg-6 col-md-6 col-sm-12 column"}, n.a.createElement( "div", null, n.a.createElement( "ul", {className: "list-inline m-0"}, n.a.createElement( "li", {className: "list-inline-item"}, n.a.createElement( s.b, {to: "#"}, n.a.createElement( "i", {className: "fab fa-facebook-f"} ) ) ), n.a.createElement( "li", {className: "list-inline-item"}, n.a.createElement( s.b, {to: "#"}, n.a.createElement( "i", {className: "fab fa-behance"} ) ) ), n.a.createElement( "li", {className: "list-inline-item"}, n.a.createElement( s.b, {to: "#"}, n.a.createElement( "i", {className: "fas fa-globe"} ) ) ) ) ) ) ) ) ), n.a.createElement( "footer", null, n.a.createElement( "div", {className: "row"}, n.a.createElement( "div", {className: "container"}, n.a.createElement( "div", {className: "col-lg-12"}, n.a.createElement( "div", {className: "scroll_top rounded-circle"}, n.a.createElement( "span", {className: ""}, n.a.createElement( "i", {className: "fas fa-angle-up"} ) ) ) ) ) ) ) )
    }, N = t( 24 );
    var v = function() {
      return n.a.createElement( l.Fragment, null, n.a.createElement( N.Preloader, null, n.a.createElement( N.Placeholder, null, n.a.createElement( "div", {className: "pre-loader"}, n.a.createElement( "div", {className: "d-flex justify-content-center"}, n.a.createElement( "div", {className: "spinner"} ) ) ) ) ) )
    };
    var f = function( e ) {
      return n.a.createElement( l.Fragment, null, n.a.createElement( v, null ), e.children, n.a.createElement( b, null ) )
    }, h = function( e ) {
      function a() {
        var e, t;
        Object( r.a )( this, a );
        for ( var l = arguments.length, n = new Array( l ), m = 0; m < l; m++ ) n[m] = arguments[m];
        return (t = Object( u.a )( this, (e = Object( d.a )( a )).call.apply( e, [this].concat( n ) ) )).state = {redirect: !1}, t.setRedirect = function( e ) {
          var a = window.location.href.split( "/" ).pop(), l = window.location.href.split( a )[0], n = l + "blog", m = l + "blog2", c = l + "blog3";
          window.location.href !== n && window.location.href !== m && window.location.href !== c || t.setState( {redirect: !0} )
        }, t
      }

      return Object( g.a )( a, e ), Object( o.a )( a, [{
        key: "render", value: function() {
          return E()( document ).ready( function() {
            E()( 'ul.header-menu li a[href^="#"]' ).bind( "click", function( e ) {
              var a = window.location.href.split( "/" ).pop(), t = window.location.href.split( a )[0], l = t + "blog", n = t + "blog3";
              if ( t + "blog2" !== window.location.href && l !== window.location.href && n !== window.location.href ) {
                e.preventDefault(), e.stopPropagation();
                var m = E()( this );
                if ( E()( window ).width() > 991 ) var c = "78"; else c = "56";
                E()( "html, body" ).stop().animate( {scrollTop: E()( m.attr( "href" ) ).offset().top - c + "px"}, 800 )
              }
            } ), E()( window ).width() > 767 ? E()( "ul.header-menu.navbar-nav li" ).hover( function() {
              E()( this ).children( "ul.sub-menu" ).stop( !0, !1, !0 ).slideToggle( 300 )
            } ) : E()( "ul.header-menu.navbar-nav>li>a>i" ).click( function( e ) {
              return E()( this ).parent( "ul.header-menu.navbar-nav li a" ).parent( "ul.header-menu.navbar-nav li" ).children( "ul.sub-menu" ).stop( !0, !1, !0 ).slideToggle( 300 ), !1
            } )
          } ), n.a.createElement( l.Fragment, null, this.state.redirect && n.a.createElement( i.a, {to: "/"} ), n.a.createElement( "header", {
            id: "header-area",
            className: "header-area"
          }, n.a.createElement( "div", {className: "header-overlay"}, n.a.createElement( "div", {className: "container"}, n.a.createElement( "div", {className: "row"}, n.a.createElement( "div", {className: "col-md-12"}, n.a.createElement( "nav", {className: "mmn navbar navbar-expand-md navbar-dark sticky-top"}, n.a.createElement( "div", {className: "logo"}, n.a.createElement( s.b, {to: "/"}, n.a.createElement( "img", {
            src: "./assets/img/menu-logo.png",
            alt: "logo"
          } ) ) ), n.a.createElement( "button", {
            className: "navbar-toggler second-button",
            type: "button",
            "data-toggle": "collapse",
            "data-target": "#mmn1",
            "aria-controls": "mmn1",
            "aria-expanded": "false",
            "aria-label": "Toggle navigation"
          }, n.a.createElement( "div", {className: "animated-icon2"}, n.a.createElement( "span", null ), n.a.createElement( "span", null ), n.a.createElement( "span", null ), n.a.createElement( "span", null ) ) ), n.a.createElement( "div", {
            className: "collapse navbar-collapse",
            id: "mmn1"
          }, n.a.createElement( "ul", {className: "header-menu navbar-nav text-capitalize"}, n.a.createElement( "li", null, n.a.createElement( "a", {
            onClick: this.setRedirect,
            href: "#banner-area",
            className: "nav-link"
          }, "home" ) ), n.a.createElement( "li", null, n.a.createElement( "a", {onClick: this.setRedirect, href: "#about", className: "nav-link"}, "about" ) ), n.a.createElement( "li", null, n.a.createElement( "a", {
            onClick: this.setRedirect,
            href: "#services",
            className: "nav-link"
          }, "services" ) ), n.a.createElement( "li", null, n.a.createElement( "a", {onClick: this.setRedirect, href: "#team", className: "nav-link"}, "team" ) ), n.a.createElement( "li", null, n.a.createElement( "a", {
            onClick: this.setRedirect,
            href: "#portfolio",
            className: "nav-link"
          }, "portfolio" ) ), n.a.createElement( "li", null, n.a.createElement( s.b, {
            className: "nav-link",
            style: {cursor: "pointer"},
            to: "/"
          }, "blog ", n.a.createElement( "i", {className: "fa fa-angle-down"} ) ), n.a.createElement( "ul", {className: "sub-menu"}, n.a.createElement( "li", null, n.a.createElement( s.b, {
            to: "/blog",
            className: "nav-link"
          }, "blog grid one" ) ), n.a.createElement( "li", null, n.a.createElement( s.b, {to: "/blog2", className: "nav-link"}, "blog grid two" ) ), n.a.createElement( "li", null, n.a.createElement( s.b, {
            to: "/blog3",
            className: "nav-link"
          }, "blog grid single" ) ) ) ), n.a.createElement( "li", null, n.a.createElement( "a", {
            onClick: this.setRedirect,
            href: "#testimonial",
            className: "nav-link"
          }, "testimonial" ) ), n.a.createElement( "li", null, n.a.createElement( "a", {onClick: this.setRedirect, href: "#contact", className: "nav-link"}, "contact" ) ) ) ) ) ) ) ) ) ) )
        }
      }] ), a
    }( l.Component ), y = function( e ) {
      e.preventDefault()
    };
    var k = function( e ) {
      return n.a.createElement( l.Fragment, null, n.a.createElement( "div", {className: "col-md-4"}, n.a.createElement( "div", {className: "chover shadow-lg card text-center border-0 wow fadeInUp slow "}, n.a.createElement( "div", {className: "icon m-top-40"}, n.a.createElement( "img", {
        src: e.img,
        className: "img-fluid rounded-circle",
        alt: "img"
      } ) ), n.a.createElement( "div", {className: "card-body"}, n.a.createElement( s.b, {to: "/", onClick: y}, n.a.createElement( "h5", {className: "card-title"}, e.title ) ), n.a.createElement( "p", {className: "card-text"}, e.content ) ) ) ) )
    }, w = t( 8 ), j = function( e ) {
      e.preventDefault()
    }, C = function( e ) {
      function a() {
        return Object( r.a )( this, a ), Object( u.a )( this, Object( d.a )( a ).apply( this, arguments ) )
      }

      return Object( g.a )( a, e ), Object( o.a )( a, [{
        key: "render", value: function() {
          return n.a.createElement( l.Fragment, null, n.a.createElement( "section", {
            id: "about",
            className: "about-area  p-top-110 p-bottom-120"
          }, n.a.createElement( "div", {className: "container"}, n.a.createElement( "div", {className: "row"}, w[0].about.map( function( e, a ) {
            return n.a.createElement( k, {key: a, img: e.imgSrc, title: e.title, content: e.content} )
          } ) ) ) ), n.a.createElement( "section", {
            id: "brand",
            className: "brand-area"
          }, n.a.createElement( "div", {className: "container"}, n.a.createElement( "div", {className: "row align-items-center"}, n.a.createElement( "div", {className: "col-lg-6 col-sm-12"}, n.a.createElement( "img", {
            src: "./assets/img/About.png",
            alt: "img",
            className: "img-fluid wow fadeInUp"
          } ) ), n.a.createElement( "div", {className: "col-lg-5 offset-lg-1 col-sm-12"}, n.a.createElement( "div", {className: ""}, n.a.createElement( "div", {className: "card border-0 wow fadeInUp\r slow\r "}, n.a.createElement( "div", {className: "card-body bg-transparent p-0"}, n.a.createElement( s.b, {
            to: "/",
            onClick: j
          }, n.a.createElement( "h2", {className: "card-title m-0"}, n.a.createElement( "span", null, "Branding" ), " & ", n.a.createElement( "span", null, "Experience" ), " design agency" ) ), n.a.createElement( "p", {className: "card-text  p-top-40 p-bottom-30"}, "Nemo enim ipsam voluptatem quia voluptas aspernat blandit tempus porttitor maxime consequuntur quia magni dolores eosqu ratio ne voluptatem sequi nesci Kenim ipsam voluptatem quiavo luptas was aspernatu blandit tempus porttitor maxime." ), n.a.createElement( s.b, {
            to: "/",
            onClick: j,
            className: "btn btn-primary btn-lg  gradient"
          }, "read more" ) ) ) ) ) ) ) ), n.a.createElement( "div", {
            id: "popup_video",
            className: "p-top-120"
          }, n.a.createElement( "div", {className: "container"}, n.a.createElement( "div", {className: "row"}, n.a.createElement( "div", {className: "col-lg-12"}, n.a.createElement( "div", {className: "atbdb_content_module_contents"}, n.a.createElement( "div", {className: "video-wrapper"}, n.a.createElement( "figure", null, n.a.createElement( "img", {
            src: "./assets/img/video.jpg",
            alt: ""
          } ), n.a.createElement( "figcaption", null, n.a.createElement( s.b, {
            to: "https://www.youtube.com/watch?v=0C4fX_x_Vsg",
            className: "video-iframe play-btn popup-youtube"
          }, n.a.createElement( "span", {className: "fas fa-play"} ) ) ) ) ) ) ) ) ) ) )
        }
      }] ), a
    }( l.Component ), x = function( e ) {
      e.preventDefault()
    };
    var O = function( e ) {
      return n.a.createElement( l.Fragment, null, n.a.createElement( "div", {className: "col-md-4 col-sm-6"}, n.a.createElement( "div", {className: ""}, n.a.createElement( "div", {className: "chover shadow-lg card text-center border-0 wow fadeInUp slow"}, n.a.createElement( "img", {
        src: e.img,
        className: "w-100",
        alt: "img"
      } ), n.a.createElement( "div", {className: "card-body"}, n.a.createElement( s.b, {to: "/", onClick: x}, n.a.createElement( "h5", {className: "card-title"}, e.title ) ), n.a.createElement( "p", {className: "card-text"}, e.content ) ) ) ) ) )
    }, S = function( e ) {
      function a() {
        return Object( r.a )( this, a ), Object( u.a )( this, Object( d.a )( a ).apply( this, arguments ) )
      }

      return Object( g.a )( a, e ), Object( o.a )( a, [{
        key: "render", value: function() {
          return n.a.createElement( l.Fragment, null, n.a.createElement( "section", {
            id: "services",
            className: "services p-bottom-120 p-top-120"
          }, n.a.createElement( "div", {className: "container"}, n.a.createElement( "h2", {className: "card-title text-center p-bottom-50 mb-0"}, "We build creative products" ), n.a.createElement( "div", {className: "row"}, w[0].service.map( function( e, a ) {
            return n.a.createElement( O, {key: a, img: e.imgSrc, title: e.title, content: e.content} )
          } ) ) ) ) )
        }
      }] ), a
    }( l.Component ), _ = function( e ) {
      e.preventDefault()
    };
    var q = function( e ) {
      return n.a.createElement( l.Fragment, null, n.a.createElement( "div", {className: "col-lg-4 col-md-4 col-sm-6"}, n.a.createElement( "div", {className: "card bg-transparent wow fadeInUp text-center border-0 slow"}, n.a.createElement( s.b, {
        onClick: _,
        to: "#"
      }, n.a.createElement( "img", {src: e.img, className: "img-fluid rounded-circle shadow", alt: "img"} ) ), n.a.createElement( "div", {className: "card-body bg-transparent"}, n.a.createElement( s.b, {
        onClick: _,
        to: "#"
      }, n.a.createElement( "h5", {className: "card-title  mb-md-0"}, e.name ) ), n.a.createElement( "p", {className: "card-text"}, e.designation ) ) ) ) )
    }, I = function( e ) {
      function a() {
        return Object( r.a )( this, a ), Object( u.a )( this, Object( d.a )( a ).apply( this, arguments ) )
      }

      return Object( g.a )( a, e ), Object( o.a )( a, [{
        key: "render", value: function() {
          return n.a.createElement( l.Fragment, null, n.a.createElement( "section", {
            id: "team",
            className: "team p-top-120 p-bottom-120"
          }, n.a.createElement( "div", {className: "container"}, n.a.createElement( "h2", {className: "card-title text-center text-white p-bottom-60 mb-0"}, "Trust the professionals" ), n.a.createElement( "div", {className: "row d-flex justify-content-center"}, w[0].team.map( function( e, a ) {
            return n.a.createElement( q, {key: a, img: e.imgSrc, name: e.name, designation: e.designation} )
          } ) ) ) ) )
        }
      }] ), a
    }( l.Component );
    var F = function( e ) {
      return n.a.createElement( l.Fragment, null, n.a.createElement( "li", {className: "col-lg-6 col-sm-6"}, n.a.createElement( "div", {className: "position-relative"}, n.a.createElement( s.b, {
        to: e.img,
        className: "img-overlay"
      }, n.a.createElement( "img", {src: e.img, className: "img-fluid rounded", alt: "img"} ) ) ) ) )
    }, U = function( e ) {
      e.preventDefault()
    }, A = function( e ) {
      function a() {
        return Object( r.a )( this, a ), Object( u.a )( this, Object( d.a )( a ).apply( this, arguments ) )
      }

      return Object( g.a )( a, e ), Object( o.a )( a, [{
        key: "render", value: function() {
          return n.a.createElement( l.Fragment, null, n.a.createElement( "section", {
            id: "portfolio",
            className: "light_box"
          }, n.a.createElement( "div", {className: "container"}, n.a.createElement( "h2", {className: "card-title text-center text-dark p-bottom-50 mb-0"}, "Our branding works" ), n.a.createElement( "div", {className: ""}, n.a.createElement( "div", {className: "row"}, n.a.createElement( "div", {className: "col-md-12"}, n.a.createElement( "div", {className: "row"}, n.a.createElement( "div", {className: "col-lg-6"}, n.a.createElement( "div", {className: "position-relative wow fadeInLeft zoom-gallery slow"}, n.a.createElement( s.b, {to: "./assets/img/portfolio1.jpg"}, n.a.createElement( "img", {
            src: "./assets/img/portfolio1.jpg",
            className: "w-100 rounded",
            alt: "img"
          } ), n.a.createElement( "span", {className: "mbr-gallery-title text-white"}, "Branding Solution" ) ) ) ), n.a.createElement( "div", {className: "col-lg-6"}, n.a.createElement( "ul", {className: "row p-0 wow fadeInRight zoom-gallery m-bottom-50 slow"}, w[0].portfolio.map( function( e, a ) {
            return n.a.createElement( F, {key: a, img: e.imgSrc, title: e.title} )
          } ) ) ) ) ) ), n.a.createElement( "div", {className: "text-center"}, n.a.createElement( s.b, {to: "/", onClick: U, className: "btn btn-primary btn-lg  gradient"}, "view all projects" ) ) ) ) ) )
        }
      }] ), a
    }( l.Component ), R = t( 20 ), D = t.n( R ), P = (t( 35 ), t( 36 ), function( e ) {
      function a() {
        return Object( r.a )( this, a ), Object( u.a )( this, Object( d.a )( a ).apply( this, arguments ) )
      }

      return Object( g.a )( a, e ), Object( o.a )( a, [{
        key: "render", value: function() {
          return n.a.createElement( l.Fragment, null, n.a.createElement( "section", {className: "portfolio p-top-90 p-bottom-90"}, n.a.createElement( "div", {className: "container"}, n.a.createElement( "div", {className: "row"}, n.a.createElement( "div", {className: "col-lg-12"}, n.a.createElement( "div", {className: "row justify-content-md-center middle"}, n.a.createElement( "div", {className: "col-lg-5 col-md-12"}, n.a.createElement( "div", {className: "card border-0 px-0 wow fadeInLeft slow"}, n.a.createElement( "div", {className: "card-body bg-transparent px-0"}, n.a.createElement( s.b, {to: "#"}, n.a.createElement( "h2", {className: "card-title text-dark p-bottom-40 mb-0"}, "Trusted partners" ) ), n.a.createElement( "p", {className: "card-text"}, "Nemo enim ipsam voluptatem quia voluptas aspernat blandit tempus porttitor maxime." ) ) ) ), n.a.createElement( "div", {className: "col-lg-7 col-md-12"}, n.a.createElement( "div", {className: "customers-testimonials"}, n.a.createElement( D.a, {
            className: "owl-carousel owl-caresoul2 owl-theme",
            loop: !0,
            margin: 10,
            items: 1,
            animateIn: "slideInDown",
            animateOut: "slideOutDown"
          }, n.a.createElement( "div", {className: "item"}, n.a.createElement( "div", {className: "partner-logos"}, n.a.createElement( "ul", null, n.a.createElement( "li", null, n.a.createElement( "img", {
            src: "./assets/img/logo1.png",
            alt: "img",
            className: "img-fluid"
          } ) ), n.a.createElement( "li", null, n.a.createElement( "img", {
            src: "./assets/img/logo2.png",
            alt: "img",
            className: "img-fluid "
          } ) ) ), n.a.createElement( "ul", null, n.a.createElement( "li", null, n.a.createElement( "img", {
            src: "./assets/img/logo3.png",
            alt: "img",
            className: "img-fluid "
          } ) ), n.a.createElement( "li", null, n.a.createElement( "img", {src: "./assets/img/logo4.png", alt: "img", className: "img-fluid "} ) ), n.a.createElement( "li", null, n.a.createElement( "img", {
            src: "./assets/img/logo5.png",
            alt: "img",
            className: "img-fluid "
          } ) ) ) ) ), n.a.createElement( "div", {className: "item"}, n.a.createElement( "div", {className: "partner-logos"}, n.a.createElement( "ul", null, n.a.createElement( "li", null, n.a.createElement( "img", {
            src: "./assets/img/logo1.png",
            alt: "img",
            className: "img-fluid"
          } ) ), n.a.createElement( "li", null, n.a.createElement( "img", {
            src: "./assets/img/logo2.png",
            alt: "img",
            className: "img-fluid "
          } ) ) ), n.a.createElement( "ul", null, n.a.createElement( "li", null, n.a.createElement( "img", {
            src: "./assets/img/logo3.png",
            alt: "img",
            className: "img-fluid "
          } ) ), n.a.createElement( "li", null, n.a.createElement( "img", {src: "./assets/img/logo4.png", alt: "img", className: "img-fluid "} ) ), n.a.createElement( "li", null, n.a.createElement( "img", {
            src: "./assets/img/logo5.png",
            alt: "img",
            className: "img-fluid "
          } ) ) ) ) ), n.a.createElement( "div", {className: "item"}, n.a.createElement( "div", {className: "partner-logos"}, n.a.createElement( "ul", null, n.a.createElement( "li", null, n.a.createElement( "img", {
            src: "./assets/img/logo1.png",
            alt: "img",
            className: "img-fluid"
          } ) ), n.a.createElement( "li", null, n.a.createElement( "img", {
            src: "./assets/img/logo2.png",
            alt: "img",
            className: "img-fluid "
          } ) ) ), n.a.createElement( "ul", null, n.a.createElement( "li", null, n.a.createElement( "img", {
            src: "./assets/img/logo3.png",
            alt: "img",
            className: "img-fluid "
          } ) ), n.a.createElement( "li", null, n.a.createElement( "img", {src: "./assets/img/logo4.png", alt: "img", className: "img-fluid "} ) ), n.a.createElement( "li", null, n.a.createElement( "img", {
            src: "./assets/img/logo5.png",
            alt: "img",
            className: "img-fluid "
          } ) ) ) ) ), n.a.createElement( "div", {className: "item"}, n.a.createElement( "div", {className: "partner-logos"}, n.a.createElement( "ul", null, n.a.createElement( "li", null, n.a.createElement( "img", {
            src: "./assets/img/logo1.png",
            alt: "img",
            className: "img-fluid"
          } ) ), n.a.createElement( "li", null, n.a.createElement( "img", {
            src: "./assets/img/logo2.png",
            alt: "img",
            className: "img-fluid "
          } ) ) ), n.a.createElement( "ul", null, n.a.createElement( "li", null, n.a.createElement( "img", {
            src: "./assets/img/logo3.png",
            alt: "img",
            className: "img-fluid "
          } ) ), n.a.createElement( "li", null, n.a.createElement( "img", {src: "./assets/img/logo4.png", alt: "img", className: "img-fluid "} ) ), n.a.createElement( "li", null, n.a.createElement( "img", {
            src: "./assets/img/logo5.png",
            alt: "img",
            className: "img-fluid "
          } ) ) ) ) ) ) ) ) ) ) ) ) ), n.a.createElement( "div", {className: "single-article"}, n.a.createElement( "hr", null ) ) )
        }
      }] ), a
    }( l.Component )), T = function( e ) {
      e.preventDefault()
    };
    var L = function( e ) {
      return n.a.createElement( l.Fragment, null, n.a.createElement( "div", {className: "item"}, n.a.createElement( "div", {className: ""}, n.a.createElement( "div", {className: "card text-center border-0"}, n.a.createElement( "div", {className: "d-flex justify-content-md-center"}, n.a.createElement( s.b, {
        to: "/",
        onClick: T
      }, n.a.createElement( "img", {src: e.img, className: "img-fluid rounded-circle", alt: "img"} ) ) ), n.a.createElement( "div", {className: "card-body"}, n.a.createElement( s.b, {
        to: "/",
        onClick: T
      }, n.a.createElement( "h5", {className: "card-title mb-md-0"}, e.name, " -  ", n.a.createElement( "span", null, e.designation ) ) ), n.a.createElement( "p", {className: "card-text m-top-30"}, e.comment ) ) ) ) ) )
    }, B = function( e ) {
      function a() {
        return Object( r.a )( this, a ), Object( u.a )( this, Object( d.a )( a ).apply( this, arguments ) )
      }

      return Object( g.a )( a, e ), Object( o.a )( a, [{
        key: "render", value: function() {
          return n.a.createElement( l.Fragment, null, n.a.createElement( "section", {
            id: "testimonial",
            className: "testimonial p-top-120 p-bottom-120"
          }, n.a.createElement( "div", {className: "container"}, n.a.createElement( "div", {className: "row"}, n.a.createElement( "div", {className: "col-lg-12"}, n.a.createElement( "div", {className: "customers-testimonials"}, n.a.createElement( D.a, {
            className: "owl-theme owl-carousel1 owl-carousel",
            loop: !0,
            margin: 10,
            items: 1
          }, w[0].testimonial.map( function( e, a ) {
            return n.a.createElement( L, {key: a, img: e.imgSrc, name: e.name, designation: e.designation, comment: e.comment} )
          } ) ) ) ) ) ) ) )
        }
      }] ), a
    }( l.Component ), z = t( 40 ), X = function( e ) {
      function a( e ) {
        var t;
        return Object( r.a )( this, a ), (t = Object( u.a )( this, Object( d.a )( a ).call( this, e ) )).changeValide = function( e ) {
          t.setState( Object( z.a )( {}, e.target.id, e.target.value ) )
        }, t.onSubmit = function( e ) {
          e.preventDefault(), document.getElementById( "contactForm" ).reset(), alert( "Name: " + t.state.validationCustom01 + " Email: " + t.state.validationCustom02 )
        }, t.state = {validationCustom01: "", validationCustom02: ""}, t
      }

      return Object( g.a )( a, e ), Object( o.a )( a, [{
        key: "render", value: function() {
          return n.a.createElement( "div", null, n.a.createElement( "section", {
            id: "contact",
            className: "contact p-top-150 p-bottom-100"
          }, n.a.createElement( "div", {className: "container"}, n.a.createElement( "h2", {className: "card-title text-center text-white m-bottom-25"}, "Ready to get started?" ), n.a.createElement( "p", {className: "text-center text-white m-bottom-20"}, "Nemo enim psam voluptatem quia voluptas aspernatur blandit tempus." ), n.a.createElement( "div", {className: "contact_overlay position-absolute"}, n.a.createElement( "img", {
            src: "./assets/img/heade-bottom-shape.png",
            alt: "img",
            className: "img-fluid"
          } ) ), " ", n.a.createElement( "div", {className: "row d-flex justify-content-center"}, n.a.createElement( "div", {className: "col-md-10"}, n.a.createElement( "form", {
            className: "needs-validation text-center",
            id: "contactForm",
            onSubmit: this.onSubmit
          }, n.a.createElement( "div", {className: "form-row "}, n.a.createElement( "div", {className: "col-lg-6"}, n.a.createElement( "label", {htmlFor: "validationCustom01"} ), n.a.createElement( "input", {
            type: "text",
            className: "form-control rounded-sm border-0",
            id: "validationCustom01",
            placeholder: "Your name",
            value: this.state.validationCustom01,
            required: !0,
            onChange: this.changeValide
          } ), n.a.createElement( "div", {className: "valid-feedback"}, "Looks good!" ) ), n.a.createElement( "div", {className: "col-lg-6"}, n.a.createElement( "label", {htmlFor: "validationCustom02"} ), n.a.createElement( "input", {
            type: "email",
            className: "form-control rounded-sm border-0",
            id: "validationCustom02",
            placeholder: "Your email",
            value: this.state.validationCustom02,
            required: !0,
            onChange: this.changeValide
          } ), n.a.createElement( "div", {className: "valid-feedback"}, "Looks good!" ) ) ), n.a.createElement( "button", {
            className: "btn-success btn-lg wow zoomIn rounded-sm slow mt-5 border-0",
            type: "submit"
          }, "let's talk" ) ) ), " " ), " " ), " " ) )
        }
      }] ), a
    }( l.Component ), J = function() {
      return n.a.createElement( l.Fragment, null, n.a.createElement( "section", {id: "banner-area", className: "banner-area"}, n.a.createElement( "div", {className: "banner-overlay"}, n.a.createElement( "img", {
        src: "./assets/img/banner_tl.png",
        alt: "img",
        className: "img-fluid"
      } ), n.a.createElement( "img", {
        src: "./assets/img/heade_b_l.png",
        alt: "img",
        className: "img-fluid"
      } ) ), n.a.createElement( "div", {className: "container d-flex h-100 align-items-center"}, n.a.createElement( "div", {className: " header-content wow zoomIn slow"}, n.a.createElement( "h4", {className: "text-white"}, "Hello we are" ), n.a.createElement( "h3", {className: "text-white m-top-20 m-bottom-35"}, "Creative Studio" ), n.a.createElement( "p", {className: "text-white m-bottom-40"}, "Lunch Your Website In Hours" ), n.a.createElement( s.b, {
        to: "#",
        className: "btn btn-primary btn-lg  gradient"
      }, "get started " ) ) ) ) )
    }, M = function() {
      return n.a.createElement( l.Fragment, null, n.a.createElement( "section", {className: "blog-grid-one blog-page intro-area d-flex align-items-center", id: "home"}, n.a.createElement( "img", {
        src: "./assets/img/hero-gardient.png",
        className: "img-fluid one",
        alt: "img"
      } ), n.a.createElement( "div", {className: "container"}, n.a.createElement( "div", {className: "row d-flex align-items-center"}, n.a.createElement( "div", {className: "col-md-12"}, n.a.createElement( "div", {className: "breadcrumb_wrapper d-flex flex-column align-items-center"}, n.a.createElement( "h4", {className: "page_title m-top-130 m-bottom-20"}, "Blog Grid One" ), n.a.createElement( "nav", {"aria-label": "breadcrumb"}, n.a.createElement( "ol", {className: "breadcrumb"}, n.a.createElement( "li", {className: "breadcrumb-item"}, n.a.createElement( s.b, {to: "/"}, "Home" ) ), n.a.createElement( "li", {
        className: "breadcrumb-item active",
        "aria-current": "page"
      }, "Blog Grid One" ) ) ) ) ) ) ) ) )
    }, W = function( e ) {
      function a() {
        return Object( r.a )( this, a ), Object( u.a )( this, Object( d.a )( a ).apply( this, arguments ) )
      }

      return Object( g.a )( a, e ), Object( o.a )( a, [{
        key: "render", value: function() {
          return n.a.createElement( l.Fragment, null, n.a.createElement( f, null, n.a.createElement( h, null ), n.a.createElement( J, null ), n.a.createElement( C, null ), n.a.createElement( S, null ), n.a.createElement( I, null ), n.a.createElement( A, null ), n.a.createElement( P, null ), n.a.createElement( B, null ), n.a.createElement( X, null ) ) )
        }
      }] ), a
    }( l.Component ), Y = function( e ) {
      e.preventDefault()
    };
    var H = function( e ) {
      return n.a.createElement( l.Fragment, null, n.a.createElement( "div", {className: "col-lg-4 col-md-6 col-sm-6"}, n.a.createElement( "div", {className: "card blog m-bottom-30 shadow-lg border-0"}, n.a.createElement( s.b, {
        to: "/",
        onClick: Y,
        title: "The Cleaner",
        className: "hoverZoomLink"
      }, n.a.createElement( "img", {
        src: e.img,
        className: "img-fluid",
        alt: "img"
      } ) ), n.a.createElement( "div", {className: "card-body"}, n.a.createElement( "div", {className: "list-inline"}, n.a.createElement( "p", null, e.date ), n.a.createElement( "div", {className: "badge badge-success list-inline-item"}, e.catagory ) ), n.a.createElement( s.b, {
        to: "/",
        onClick: Y
      }, n.a.createElement( "h5", {className: "card-title m-top-10"}, " ", e.title ) ), n.a.createElement( "p", {className: "b_excerpt"}, e.content ) ) ) ) )
    }, V = function( e ) {
      e.preventDefault()
    }, G = function( e ) {
      function a() {
        return Object( r.a )( this, a ), Object( u.a )( this, Object( d.a )( a ).apply( this, arguments ) )
      }

      return Object( g.a )( a, e ), Object( o.a )( a, [{
        key: "render", value: function() {
          return n.a.createElement( l.Fragment, null, n.a.createElement( "section", {className: "blog-grid-one-content p-top-120 p-bottom-120"}, n.a.createElement( "div", {className: "container"}, n.a.createElement( "div", {className: "row"}, n.a.createElement( "div", {className: "card-style-one"}, n.a.createElement( "div", {className: "container"}, n.a.createElement( "div", {className: "row"}, w[0].blog.map( function( e, a ) {
            return n.a.createElement( H, {key: a, img: e.imgSrc, title: e.title, content: e.content, category: e.category, date: e.date} )
          } ) ) ) ) ), n.a.createElement( "div", {className: "d-flex justify-content-center"}, n.a.createElement( "div", {className: "pagination-area m-top-50"}, n.a.createElement( "nav", {"aria-label": "Page navigation"}, n.a.createElement( "ul", {className: "pagination justify-content-center"}, n.a.createElement( "li", {className: "page-item"}, n.a.createElement( s.b, {
            className: "page-link",
            to: "/",
            onClick: V
          }, "Previous" ) ), n.a.createElement( "li", {className: "page-item"}, n.a.createElement( s.b, {
            className: "page-link",
            to: "/",
            onClick: V
          }, "1" ) ), n.a.createElement( "li", {className: "page-item"}, n.a.createElement( s.b, {
            className: "page-link",
            to: "/",
            onClick: V
          }, "2" ) ), n.a.createElement( "li", {className: "page-item active"}, n.a.createElement( s.b, {
            className: "page-link",
            to: "/",
            onClick: V
          }, " 3 ", n.a.createElement( "span", {className: "sr-only"}, "(current)" ) ) ), n.a.createElement( "li", {className: "page-item"}, n.a.createElement( s.b, {
            className: "page-link",
            to: "/",
            onClick: V
          }, "4" ) ), n.a.createElement( "li", {className: "page-item"}, n.a.createElement( s.b, {
            className: "page-link",
            to: "/",
            onClick: V
          }, "5" ) ), n.a.createElement( "li", {className: "page-item"}, n.a.createElement( s.b, {className: "page-link", to: "/blog3", onClick: V}, "Next" ) ) ) ) ) ) ) ) )
        }
      }] ), a
    }( l.Component ), Z = function( e ) {
      function a() {
        return Object( r.a )( this, a ), Object( u.a )( this, Object( d.a )( a ).apply( this, arguments ) )
      }

      return Object( g.a )( a, e ), Object( o.a )( a, [{
        key: "render", value: function() {
          return n.a.createElement( l.Fragment, null, n.a.createElement( f, null, n.a.createElement( h, null ), n.a.createElement( M, null ), n.a.createElement( G, null ) ) )
        }
      }] ), a
    }( l.Component ), K = function( e ) {
      e.preventDefault()
    };
    var $ = function( e ) {
      return n.a.createElement( l.Fragment, null, n.a.createElement( "div", {className: "col-lg-8 offset-lg-2"}, n.a.createElement( "div", {className: "card blog m-bottom-30 shadow-lg border-0"}, n.a.createElement( s.b, {
        to: "/",
        onClick: K,
        title: "The Cleaner",
        className: "hoverZoomLink"
      }, n.a.createElement( "img", {
        src: e.img,
        className: "img-fluid",
        alt: "img"
      } ) ), n.a.createElement( "div", {className: "card-body"}, n.a.createElement( "div", {className: "list-inline"}, n.a.createElement( "p", {className: "list-inline-item"}, e.date ), n.a.createElement( "span", {className: "badge badge-success list-inline-item"}, e.category ) ), n.a.createElement( s.b, {
        to: "/",
        onClick: K
      }, n.a.createElement( "h5", {className: "card-title blog-title m-top-15"}, e.title ) ), n.a.createElement( "p", {className: "b_excerpt"}, e.content ) ) ) ) )
    }, Q = function( e ) {
      e.preventDefault()
    }, ee = function( e ) {
      function a() {
        return Object( r.a )( this, a ), Object( u.a )( this, Object( d.a )( a ).apply( this, arguments ) )
      }

      return Object( g.a )( a, e ), Object( o.a )( a, [{
        key: "render", value: function() {
          return n.a.createElement( l.Fragment, null, n.a.createElement( "section", {className: "blog-grid-one-content p-top-120 p-bottom-120"}, n.a.createElement( "div", {className: "container"}, n.a.createElement( "div", {className: "row"}, n.a.createElement( "div", {className: "card-style-one"}, n.a.createElement( "div", {className: "container"}, n.a.createElement( "div", {className: "row"}, w[0].blog.map( function( e, a ) {
            return n.a.createElement( $, {key: a, img: e.imgSrc, title: e.title, content: e.content, category: e.category, date: e.date} )
          } ) ) ) ) ), n.a.createElement( "div", {className: "d-flex justify-content-center"}, n.a.createElement( "div", {className: "pagination-area m-top-50"}, n.a.createElement( "nav", {"aria-label": "Page navigation"}, n.a.createElement( "ul", {className: "pagination justify-content-center"}, n.a.createElement( "li", {className: "page-item"}, n.a.createElement( s.b, {
            className: "page-link",
            to: "/",
            onClick: Q
          }, "Previous" ) ), n.a.createElement( "li", {className: "page-item"}, n.a.createElement( s.b, {
            className: "page-link",
            to: "/",
            onClick: Q
          }, "1" ) ), n.a.createElement( "li", {className: "page-item"}, n.a.createElement( s.b, {
            className: "page-link",
            to: "/",
            onClick: Q
          }, "2" ) ), n.a.createElement( "li", {className: "page-item active"}, n.a.createElement( s.b, {
            className: "page-link",
            to: "/",
            onClick: Q
          }, "3 ", n.a.createElement( "span", {className: "sr-only"}, "(current)" ) ) ), n.a.createElement( "li", {className: "page-item"}, n.a.createElement( s.b, {
            className: "page-link",
            to: "/",
            onClick: Q
          }, "4" ) ), n.a.createElement( "li", {className: "page-item"}, n.a.createElement( s.b, {
            className: "page-link",
            to: "/",
            onClick: Q
          }, "5" ) ), n.a.createElement( "li", {className: "page-item"}, n.a.createElement( s.b, {className: "page-link", to: "/blog2", onClick: Q}, "Next" ) ) ) ) ) ) ) ) )
        }
      }] ), a
    }( l.Component ), ae = function( e ) {
      function a() {
        return Object( r.a )( this, a ), Object( u.a )( this, Object( d.a )( a ).apply( this, arguments ) )
      }

      return Object( g.a )( a, e ), Object( o.a )( a, [{
        key: "render", value: function() {
          return n.a.createElement( l.Fragment, null, n.a.createElement( f, null, n.a.createElement( h, null ), n.a.createElement( M, null ), n.a.createElement( ee, null ) ) )
        }
      }] ), a
    }( l.Component );
    var te = function( e ) {
      return n.a.createElement( l.Fragment, null, n.a.createElement( "div", {className: "col-lg-10 offset-lg-1"}, n.a.createElement( "div", {className: "card blog m-bottom-15 shadow-lg border-0"}, n.a.createElement( "img", {
        src: e.img,
        className: "img-fluid",
        alt: "img"
      } ), n.a.createElement( "div", {className: "card-body"}, n.a.createElement( "h3", {className: "card-title blog-title m-top-5"}, e.title ), n.a.createElement( "p", {className: "b_excerpt"}, e.content ) ) ) ) )
    }, le = function( e ) {
      e.preventDefault()
    }, ne = function( e ) {
      function a() {
        return Object( r.a )( this, a ), Object( u.a )( this, Object( d.a )( a ).apply( this, arguments ) )
      }

      return Object( g.a )( a, e ), Object( o.a )( a, [{
        key: "render", value: function() {
          return n.a.createElement( l.Fragment, null, n.a.createElement( "section", {className: "blog-grid-one-content p-top-130 p-bottom-130"}, n.a.createElement( "div", {className: "container"}, n.a.createElement( "div", {className: "row"}, n.a.createElement( "div", {className: "card-style-one"}, n.a.createElement( "div", {className: "container"}, n.a.createElement( "div", {className: "row"}, w[0].blog.map( function( e, a ) {
            return a < 1 ? n.a.createElement( te, {key: a, img: e.imgSrc, title: e.title, content: e.content, category: e.category, date: e.date} ) : ""
          } ), n.a.createElement( "div", {className: "col-lg-10 offset-lg-1 m-top-15"}, n.a.createElement( "blockquote", {className: "blockquote blockquote4"}, n.a.createElement( "p", null, "My focus areas are on global standardization and harmonization of business processes lorem dolor is reorganization of marketing and customer." ), n.a.createElement( "div", {className: "quote-author"}, n.a.createElement( "p", null, n.a.createElement( "span", null, "Jeff Collins," ), " Founder of Urkis." ) ) ), n.a.createElement( "div", {className: "m-top-50 m-bottom-20"}, n.a.createElement( "h4", {className: "display-4 m-bottom-15"}, "Financial Analysis Overview" ), n.a.createElement( "p", null, "Investig ationes demons trave runt lectores legere liusry quod was legunt saepius claritas Investig tones. Pharetra dui, nec tincidunt ante mauris eu diam. Phasellus verra nisl vitae cursus aei uismod supen dise saepius claritas investig. Investiga tiones demonstr averun d lectores legere melius." ) ), n.a.createElement( "ul", {className: "bullet--list pl-0"}, n.a.createElement( "li", {className: "bullet_list"}, n.a.createElement( "i", {className: "far fa-circle m-right-15"} ), "Build next-generation web applications with a focus on the client" ), n.a.createElement( "li", {className: "bullet_list"}, n.a.createElement( "i", {className: "far fa-circle m-right-15"} ), "Redesign UI\u2019s, implement new UI\u2019s, and pick up Java as necessary." ), n.a.createElement( "li", {className: "bullet_list"}, n.a.createElement( "i", {className: "far fa-circle m-right-15"} ), "Explore and design dynamic compelling consumer experiences." ), n.a.createElement( "li", {className: "bullet_list"}, n.a.createElement( "i", {className: "far fa-circle m-right-15"} ), "Design and build scalable framework for web applications." ) ), n.a.createElement( "h5", {className: "m-bottom-10"}, "Elementum Tortorvel Pretium" ), n.a.createElement( "p", null, "Investig ationes demons trave runt lectores legere liusry quod was legunt saepius claritas Investig tones. Pharetra dui, nec tincidunt ante mauris eu diam hasellus verra cursus." ), n.a.createElement( "div", {className: "row m-top-20 m-bottom-45"}, n.a.createElement( "div", {className: "col-lg-5"}, n.a.createElement( "img", {
            src: "./assets/img/blog.jpg",
            className: "img-fluid",
            alt: "img"
          } ) ), n.a.createElement( "div", {className: "col-lg-7 m-top-15"}, n.a.createElement( "p", null, "Investig ationes demons trave runt lectores legere liusry quod was legunt saepius claritas Investig tones haretra dui, nec tincidunt ante mauris eu diam. Phasellus verra nisl vitae cursus aei uismod supen dise saepius claritas legere melius tones haretra." ) ) ), n.a.createElement( "h5", {className: "m-bottom-10"}, "Financial Analysis Overview" ), n.a.createElement( "p", null, "Investig ationes demons trave runt lectores legere liusry quod was legunt saepius claritas Investig tones. Phasellus verrade monstr averun dlectores legere melius verrade monstr averun dlectores." ), n.a.createElement( "ol", {className: "number-list number--list1 m-top-15 m-bottom-30"}, n.a.createElement( "li", {className: "numbers-decimal"}, n.a.createElement( "span", null, "Professional delivers solutions" ) ), n.a.createElement( "li", {className: "numbers-decimal"}, n.a.createElement( "span", null, "Business human capital research" ) ), n.a.createElement( "li", {className: "numbers-decimal"}, n.a.createElement( "span", null, "Services complex problems bringing" ) ), n.a.createElement( "li", {className: "numbers-decimal"}, n.a.createElement( "span", null, "Strategy works with senior executives" ) ) ), n.a.createElement( "img", {
            src: "./assets/img/blog-single.jpg",
            className: "img-fluid",
            alt: "img"
          } ), n.a.createElement( "p", {className: "m-top-30"}, "Investig ationes demons trave runt lectores legere liusry quod was legunt saepius claritas Investig tones. Pharetra dui, nec tincidunt ante mauris eu diam. Phasellus verra nisl vitae cursus aei uismod supen dise saepius claritas investig. Investiga tiones." ), "                   ", n.a.createElement( "div", {className: "post-bottom d-flex justify-content-between"}, n.a.createElement( "div", {className: "tags"}, n.a.createElement( "ul", {className: "d-flex pl-0"}, n.a.createElement( "li", null, n.a.createElement( s.b, {
            to: "/",
            onClick: le
          }, "UI/UX Design" ) ), n.a.createElement( "li", null, n.a.createElement( s.b, {to: "/", onClick: le}, "Creative" ) ), n.a.createElement( "li", null, n.a.createElement( s.b, {
            to: "/",
            onClick: le
          }, "Entrepreneurs" ) ) ) ), n.a.createElement( "div", {className: "social-share"}, n.a.createElement( "span", {className: "m-right-15"}, "Share Post: " ), n.a.createElement( "div", {className: "social social-2"}, n.a.createElement( "ul", {className: "d-flex justify-content-end m-bottom-0 pl-0"}, n.a.createElement( "li", null, n.a.createElement( s.b, {
            to: "/",
            onClick: le,
            className: "facebook"
          }, n.a.createElement( "i", {className: "fab fa-facebook-square"} ) ) ), n.a.createElement( "li", null, n.a.createElement( s.b, {
            to: "/",
            onClick: le,
            className: "facebook"
          }, n.a.createElement( "i", {className: "fab fa-behance"} ) ) ), n.a.createElement( "li", null, n.a.createElement( s.b, {
            to: "/",
            onClick: le,
            className: "facebook"
          }, n.a.createElement( "i", {className: "fab fa-dribbble"} ) ) ) ) ) ) ), n.a.createElement( "div", {className: "post-author cardify border"}, n.a.createElement( "div", {className: "author-thumb"}, n.a.createElement( "img", {
            src: "./assets/img/auth1.png",
            alt: "img",
            className: "rounded-circle"
          } ) ), n.a.createElement( "div", {className: "author-info"}, n.a.createElement( "h5", null, "About ", n.a.createElement( "span", null, "Aazztech" ) ), n.a.createElement( "p", null, "Business and Finance Sequitur mutatin onem consuetudium. Investiga tiones demonstr aver unt lectores legere me lius quod kqua legunt saepius. Claritas est etiam pro cessus averus." ), n.a.createElement( "div", {className: "d-flex justify-content-start m-top-15"}, n.a.createElement( "div", {className: "social social-2"}, n.a.createElement( "ul", {className: "d-flex justify-content-end m-bottom-0 pl-0"}, n.a.createElement( "li", null, n.a.createElement( s.b, {
            to: "/",
            onClick: le,
            className: "facebook"
          }, n.a.createElement( "i", {className: "fab fa-facebook-square"} ) ) ), n.a.createElement( "li", null, n.a.createElement( s.b, {
            to: "/",
            onClick: le,
            className: "facebook"
          }, n.a.createElement( "i", {className: "fab fa-behance"} ) ) ), n.a.createElement( "li", null, n.a.createElement( s.b, {
            to: "/",
            onClick: le,
            className: "facebook"
          }, n.a.createElement( "i", {className: "fab fa-dribbble"} ) ) ) ) ) ) ) ), n.a.createElement( "div", {className: "post-pagination"}, n.a.createElement( "div", {className: "prev-post"}, n.a.createElement( "span", null, "Previous Post:" ), n.a.createElement( s.b, {
            to: "/",
            onClick: le,
            className: "title"
          }, "Understand the UX Rules" ), n.a.createElement( "p", null, n.a.createElement( "span", null, "April 20, 2019" ) ) ), n.a.createElement( "div", {className: "next-post"}, n.a.createElement( "span", null, "Next Post:" ), n.a.createElement( s.b, {
            to: "/",
            onClick: le,
            className: "title"
          }, "Announcing a Free Plan for Small Teams" ), n.a.createElement( "p", null, n.a.createElement( "span", null, "April 20, 2019" ) ) ) ), n.a.createElement( "div", {className: "related-post m-top-60"}, n.a.createElement( "div", {className: "related-post--title text-center"}, n.a.createElement( "h3", {className: "m-bottom-25 display-3"}, "Related Post" ) ), n.a.createElement( "div", {className: "row"}, n.a.createElement( "div", {className: "col-lg-4 col-sm-6 m-top-15 m-bottom-15"}, n.a.createElement( "div", {className: "single-post"}, n.a.createElement( "img", {
            src: "./assets/img/blog1.jpg",
            className: "img-fluid",
            alt: "img"
          } ), n.a.createElement( "h6", null, n.a.createElement( s.b, {
            to: "/",
            onClick: le
          }, "Understand the UX Rules" ) ), n.a.createElement( "p", null, "April 20, 2019" ) ) ), n.a.createElement( "div", {className: "col-lg-4 col-sm-6 m-top-15 m-bottom-15"}, n.a.createElement( "div", {className: "single-post"}, n.a.createElement( "img", {
            src: "./assets/img/blog2.jpg",
            className: "img-fluid",
            alt: "img"
          } ), n.a.createElement( "h6", null, n.a.createElement( s.b, {
            to: "/",
            onClick: le
          }, "Understand the UX Rules" ) ), n.a.createElement( "p", null, "April 20, 2019" ) ) ), n.a.createElement( "div", {className: "col-lg-4 col-sm-6 m-top-15 m-bottom-15"}, n.a.createElement( "div", {className: "single-post"}, n.a.createElement( "img", {
            src: "./assets/img/blog3.jpg",
            className: "img-fluid",
            alt: "img"
          } ), n.a.createElement( "h6", null, n.a.createElement( s.b, {
            to: "/",
            onClick: le
          }, "Understand the UX Rules" ) ), n.a.createElement( "p", null, "April 20, 2019" ) ) ) ) ), n.a.createElement( "div", {className: "comments-area m-top-60"}, n.a.createElement( "div", {className: "comment-title"}, n.a.createElement( "h4", {className: "p-bottom-15 display-3"}, "5 Comments" ) ), n.a.createElement( "div", {className: "comment-lists"}, n.a.createElement( "ul", {className: "media-list pl-0"}, n.a.createElement( "li", {className: "depth-1"}, n.a.createElement( "div", {className: "media"}, n.a.createElement( "div", null, n.a.createElement( s.b, {
            to: "/",
            onClick: le,
            className: "cmnt_avatar"
          }, n.a.createElement( "img", {
            src: "./assets/img/auth2.png",
            alt: "img",
            className: "media-object rounded-circle"
          } ) ) ), n.a.createElement( "div", {className: "media-body"}, n.a.createElement( "div", {className: "media_top"}, n.a.createElement( "div", {className: "heading_left"}, n.a.createElement( s.b, {
            to: "/",
            onClick: le
          }, n.a.createElement( "h6", {className: "media-heading"}, "John Doe" ) ), n.a.createElement( "p", null, "April 29, 2019" ) ), n.a.createElement( s.b, {
            to: "/",
            onClick: le,
            className: "reply"
          }, n.a.createElement( "i", {className: "fas fa-reply"} ), " Reply" ) ), n.a.createElement( "p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do they eiusmod tempor unt ut labore et dolore magna aliquat enim ad minim." ) ) ), n.a.createElement( "ul", {className: "children pl-0"}, n.a.createElement( "li", {className: "depth-2"}, n.a.createElement( "div", {className: "media"}, n.a.createElement( "div", null, n.a.createElement( s.b, {
            to: "/",
            onClick: le,
            className: "cmnt_avatar"
          }, n.a.createElement( "img", {
            src: "./assets/img/auth3.png",
            className: "media-object rounded-circle",
            alt: "Sample"
          } ) ) ), n.a.createElement( "div", {className: "media-body"}, n.a.createElement( "div", {className: "media_top"}, n.a.createElement( "div", {className: "heading_left"}, n.a.createElement( s.b, {
            to: "/",
            onClick: le
          }, n.a.createElement( "h6", {className: "media-heading"}, "John Doe" ) ), n.a.createElement( "p", null, "April 29, 2019" ) ), n.a.createElement( s.b, {
            to: "/",
            onClick: le,
            className: "reply"
          }, n.a.createElement( "i", {className: "fas fa-reply"} ), " Reply" ) ), n.a.createElement( "p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do they eiusmod tempor unt ut labore et dolore magna aliquat enim ad minim." ) ) ) ) ) ), n.a.createElement( "li", {className: "depth-1"}, n.a.createElement( "div", {className: "media"}, n.a.createElement( "div", null, n.a.createElement( s.b, {
            to: "/",
            onClick: le,
            className: "cmnt_avatar"
          }, n.a.createElement( "img", {
            src: "./assets/img/auth4.png",
            alt: "img",
            className: "media-object rounded-circle"
          } ) ) ), n.a.createElement( "div", {className: "media-body"}, n.a.createElement( "div", {className: "media_top"}, n.a.createElement( "div", {className: "heading_left"}, n.a.createElement( s.b, {
            to: "/",
            onClick: le
          }, n.a.createElement( "h6", {className: "media-heading"}, "Aazztech" ) ), n.a.createElement( "p", null, "April 29, 2019" ) ), n.a.createElement( s.b, {
            to: "/",
            onClick: le,
            className: "reply"
          }, n.a.createElement( "i", {className: "fas fa-reply"} ), " Reply" ) ), n.a.createElement( "p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do they eiusmod tempor unt ut labore et dolore magna aliquat enim ad minim." ) ) ) ) ) ), n.a.createElement( "div", {className: "d-flex justify-content-center m-top-45"}, n.a.createElement( s.b, {
            to: "/",
            onClick: le,
            className: "btn-lg text-white btn-secondary gradient",
            href: "#"
          }, n.a.createElement( "i", {className: "fas fa-sync-alt"} ), " Load More" ) ), n.a.createElement( "div", {className: "comment-form m-top-70 border text-left"}, n.a.createElement( "div", {className: "blog-comment-title"}, n.a.createElement( "h5", null, "Leave a Reply" ), n.a.createElement( "p", null, "Your email address will not be published. Required fields are marked *" ) ), n.a.createElement( "div", {className: "comment_form_wrapper m-top-40"}, n.a.createElement( "form", {action: "#"}, n.a.createElement( "div", {className: "row"}, n.a.createElement( "div", {className: "col-md-6"}, n.a.createElement( "input", {
            type: "text",
            placeholder: "Name*",
            className: "form-control m-bottom-30",
            required: !0
          } ) ), n.a.createElement( "div", {className: "col-md-6"}, n.a.createElement( "input", {
            type: "email",
            placeholder: "Email*",
            className: "form-control m-bottom-30",
            required: !0
          } ) ), n.a.createElement( "div", {className: "col-md-12"}, n.a.createElement( "textarea", {
            placeholder: "Your Text",
            className: "form-control m-bottom-30"
          } ), n.a.createElement( "button", {className: "btn-primary btn-sm rounded-sm text-capitalize border-0"}, "Post Comment" ) ) ) ) ) ) ) ) ) ) ) ) ) ) )
        }
      }] ), a
    }( l.Component ), me = function( e ) {
      function a() {
        return Object( r.a )( this, a ), Object( u.a )( this, Object( d.a )( a ).apply( this, arguments ) )
      }

      return Object( g.a )( a, e ), Object( o.a )( a, [{
        key: "render", value: function() {
          return n.a.createElement( l.Fragment, null, n.a.createElement( f, null, n.a.createElement( h, null ), n.a.createElement( M, null ), n.a.createElement( ne, null ) ) )
        }
      }] ), a
    }( l.Component );
    var ce = function() {
      return n.a.createElement( s.a, {basename: "/demos/themes/html/glitz"}, n.a.createElement( i.d, null, n.a.createElement( i.b, {exact: !0, path: "/", component: W} ), n.a.createElement( i.b, {
        path: "/blog",
        component: Z
      } ), n.a.createElement( i.b, {path: "/blog2", component: ae} ), n.a.createElement( i.b, {path: "/blog3", component: me} ) ) )
    };
    Boolean( "localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match( /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/ ) );
    c.a.render( n.a.createElement( ce, null ), document.getElementById( "root" ) ), "serviceWorker" in navigator && navigator.serviceWorker.ready.then( function( e ) {
      e.unregister()
    } )
  }, 8: function( e ) {
    e.exports = [{
      about: [{imgSrc: "./assets/img/tree_colum_icon.png", title: "fully responsive", content: "Nemo enim ipsam voluptatem quia voluptas aspernatur blandit tempus porttitor maxime"}, {
        imgSrc: "./assets/img/tree_colum_icon.png",
        title: "Pixel Perfect",
        content: "Nemo enim ipsam voluptatem quia voluptas aspernatur blandit tempus porttitor maxime"
      }, {imgSrc: "./assets/img/tree_colum_icon.png", title: "no skilled needed", content: "Nemo enim ipsam voluptatem quia voluptas aspernatur blandit tempus porttitor maxime"}],
      service: [{imgSrc: "./assets/img/service1.jpg", title: "UI/UX Solution", content: "Nemo enim ipsam voluptatem quia voluptas aspernatur blandit tempus porttitor maxime"}, {
        imgSrc: "./assets/img/service2.jpg",
        title: "Branding Solution",
        content: "Nemo enim ipsam voluptatem quia voluptas aspernatur blandit tempus porttitor maxime"
      }, {imgSrc: "./assets/img/service3.jpg", title: "Illustration Solution", content: "Nemo enim ipsam voluptatem quia voluptas aspernatur blandit tempus porttitor maxime"}],
      team: [{imgSrc: "./assets/img/team1.jpg", name: "George Smith", designation: "React Specialist"}, {imgSrc: "./assets/img/team2.jpg", name: "Roberto Willis", designation: "UI Designer"}, {
        imgSrc: "./assets/img/team3.jpg",
        name: "Maria Carlson",
        designation: "Support Hero"
      }],
      testimonial: [{
        imgSrc: "./assets/img/t_logo.png",
        name: "Adolfo Todd",
        designation: "React Specialist",
        comment: "Nemo enim ipsam voluptatem quia voluptas aspernatur blandit tempus porttitor maxime kenim ipsam voluptatem quia voluptas aspernatur blandit tempus porttitor maxime eiusmod tempor incididunt labore dolore magna minim veniam nostrud"
      }, {
        imgSrc: "./assets/img/t_logo.png",
        name: "Adolfo Todd",
        designation: "React Specialist",
        comment: "Nemo enim ipsam voluptatem quia voluptas aspernatur blandit tempus porttitor maxime kenim ipsam voluptatem quia voluptas aspernatur blandit tempus porttitor maxime eiusmod tempor incididunt labore dolore magna minim veniam nostrud"
      }, {
        imgSrc: "./assets/img/t_logo.png",
        name: "Adolfo Todd",
        designation: "React Specialist",
        comment: "Nemo enim ipsam voluptatem quia voluptas aspernatur blandit tempus porttitor maxime kenim ipsam voluptatem quia voluptas aspernatur blandit tempus porttitor maxime eiusmod tempor incididunt labore dolore magna minim veniam nostrud"
      }],
      portfolio: [{imgSrc: "./assets/img/portfolio2.jpg", title: "Adolfo Todd"}, {imgSrc: "./assets/img/portfolio3.jpg", title: "Adolfo Todd"}, {imgSrc: "./assets/img/portfolio4.jpg", title: "Adolfo Todd"}, {
        imgSrc: "./assets/img/portfolio5.jpg",
        title: "Adolfo Todd"
      }],
      blog: [{
        imgSrc: "./assets/img/blog1.jpg",
        title: "Understanding the core UI/UX Rules",
        date: "May 15, 2018",
        category: "UI/UX Design",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis debitis."
      }, {
        imgSrc: "./assets/img/blog2.jpg",
        title: "Commercial work Design Solution for Everybody",
        date: "December 7, 2018",
        category: "Creative",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis debitis."
      }, {
        imgSrc: "./assets/img/blog3.jpg",
        title: "Announcing a Free Plan for Small Teams",
        date: "April 20, 2018",
        category: "Entrepreneurs",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis debitis."
      }, {
        imgSrc: "./assets/img/blog1.jpg",
        title: "Understanding the core UI/UX Rules",
        date: "May 15, 2018",
        category: "UI/UX Design",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis debitis."
      }, {
        imgSrc: "./assets/img/blog2.jpg",
        title: "Commercial work Design Solution for Everybody",
        date: "December 7, 2018",
        category: "Creative",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis debitis."
      }, {
        imgSrc: "./assets/img/blog3.jpg",
        title: "Announcing a Free Plan for Small Teams",
        date: "April 20, 2018",
        category: "Entrepreneurs",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis debitis."
      }, {
        imgSrc: "./assets/img/blog1.jpg",
        title: "Understanding the core UI/UX Rules",
        date: "May 15, 2018",
        category: "UI/UX Design",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis debitis."
      }, {
        imgSrc: "./assets/img/blog2.jpg",
        title: "Commercial work Design Solution for Everybody",
        date: "December 7, 2018",
        category: "Creative",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis debitis."
      }, {imgSrc: "./assets/img/blog3.jpg", title: "Announcing a Free Plan for Small Teams", date: "April 20, 2018", category: "Entrepreneurs", content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis debitis."}]
    }]
  }
}, [[41, 1, 2]]] );
