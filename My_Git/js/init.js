var zoom = detectZoom.zoom(); //Current zoom level
var device = detectZoom.device();//Current Device Pixel Aspect Ratio
var windowHeight = document.documentElement.clientHeight; //viewport height in px
var documentHeight = document.body.offsetHeight;
var inequality = 0; //difference
var element = document.getElementById("animpath");
var pathLength = element.getTotalLength();
var k=0.7; //considering bending of curve
var crutch4scrolling = 1; //was need for main curve correctly draw according  scroll . Precition var device insted it


(function($){
jQuery( document ).ready( function( $ ) {
    // Set the background-attachment for body to "fixed" so that
    // we can control it's scroll speed. You may have set this already
    // via the theme's 'customize' screen in WordPress. Just in case
    // it wasn't set correctly, we override it right here:
    $('body').css('background-attachment', 'fixed');

    // Attach a function to watch the window.scroll event, and
    // move the background image slower than the content scroll.
    $(window).scroll(function () {
        document.body.style.backgroundPosition = "50% " + (0 - (Math.max(document.documentElement.scrollTop, document.body.scrollTop) / 4)) + "px";
    });
});

function detectmob() {
 if ( navigator.userAgent.match(/Android/i)
   || navigator.userAgent.match(/webOS/i)
   || navigator.userAgent.match(/iPhone/i)
   || navigator.userAgent.match(/iPad/i)
   || navigator.userAgent.match(/iPod/i)
   || navigator.userAgent.match(/BlackBerry/i)
   || navigator.userAgent.match(/Windows Phone/i)
 ){
    return true;
  }
 else {
    return false;
  }
}


    var is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
    var is_explorer = (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0) ;
    var is_firefox = navigator.userAgent.indexOf('Firefox') > -1;
    var is_safari = navigator.userAgent.indexOf("Safari") > -1;
    var is_opera = navigator.userAgent.toLowerCase().indexOf("op") > -1;
    if ((is_chrome)&&(is_safari)) {is_safari=false;}
    if ((is_chrome)&&(is_opera)) {is_chrome=false;}



    // Detect browser and for Chrome and Safari scroll to do more smooth
    if (detectmob()) {console.log('Mobile detected!');}
     else
       if (is_firefox) {console.log('Firefox detected!');} // crutch4scrolling=1;
          else
            if (is_explorer) {console.log('MSIE detected!');}
              else {
                      if (is_safari) {console.log('Safari detected!');}
                      if (is_chrome) {console.log('Chrome detected!');}
                           // for smooth scroll - need jquery.mousewheel.min.js
                            $(document).bind( 'mousewheel', function (e) {
                            var nt = $(document.body).scrollTop()-(e.originalEvent.wheelDeltaY)*2.5 ;
                             e.preventDefault();
                                e.stopPropagation();
                            $(document.body).stop().animate( {
                            scrollTop : nt
                                 } , 1200, 'easeOutCubic');//, ''linear
                            } );
                            console.log('Smooth scroll.')
                       }
})(jQuery); // end of jQuery name space


var s = Snap("#curves");
var flag0=true;
var flag1=true;
var flag2=true;
var flag3=true;
var flag4=true;
var flag5=true;
var flag6=true;
var flag7=true;
var flag8=true;
 var groupfoto;

// CSS3
var svgString0 = '<path class="fil1 str1" d="M416 397l27 -9 6 -76 -63 0 -3 2 7 -2 -6 6 12 -6 -12 11 17 -11 -17 16 22 -16 -21 22 26 -22 -26 28 31 -27 -30 33 30 -25m0 0l-29 34 29 -24 -29 30 29 -20 -28 29 28 -20 -28 28 28 -19 -27 28 27 -19 -20 22 20 -13 -13 16 13 -10 -8 11 8 -6 -4 8 4 -4"/>';
var svgString1 = '<path class="fil1 str1" d="M466 970l27 -8 6 -77 -63 0 -3 2 7 -2 -7 6 12 -6 -11 11 16 -11 -16 16 21 -16 -20 22 26 -22 -26 28 31 -27 -30 33 30 -25m0 0l-30 34 30 -24 -29 30 29 -20 -28 29 28 -20 -28 28 28 -19 -27 28 27 -19 -20 23 20 -14 -14 16 14 -10 -8 11 8 -5 -4 7 4 -4"/>';
var svgString3 = '<path class="fil1 str1" d="M376 2215l27 -9 6 -76 -63 0 -3 1 6 -1 -6 5 12 -5 -11 10 16 -10 -16 16 21 -16 -20 22 26 -22 -26 28 30 -27 -29 33 30 -25m0 0l-30 33 30 -23 -29 29 29 -20 -29 29 29 -19 -28 28 28 -19 -27 28 27 -19 -20 22 20 -13 -14 15 14 -9 -8 11 8 -6 -4 7 4 -3"/>';
//SVG
var svgString2 = '<path class="fil22 str1" d="M447 1547c1,-1 2,-1 3,-2 1,0 2,-1 3,-2 1,-1 2,-3 2,-4 1,-2 1,-3 1,-5 0,0 0,0 0,0 0,0 0,-1 0,-1 0,0 0,-1 0,-2 -1,-1 -1,-2 -1,-2 -1,-1 -1,-2 -2,-3 0,0 -1,-1 -1,-1 -1,-1 -2,-1 -2,-2 -1,0 -2,-1 -3,-1 0,0 -1,0 -2,-1 0,0 -1,0 -2,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 -1,0 -1,0 -1,0 -1,0 -1,0 0,0 -1,0 -1,-1 0,0 -1,0 -1,0 0,0 0,-1 0,-1 -1,0 -1,0 -1,-1 0,0 0,0 0,0 0,-1 0,-1 0,-1 0,0 0,0 0,0 0,-1 0,-1 0,-1 0,0 0,-1 0,-1 0,-1 0,-1 1,-2 0,0 1,0 1,-1 1,0 1,0 2,0 0,0 0,0 0,0 0,0 0,0 0,0 1,0 1,0 2,0 0,0 1,1 1,1 1,1 1,1 1,2 1,0 1,1 1,1 0,0 0,0 0,1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 1,0 1,0 2,0 1,0 1,0 2,0 0,0 1,0 2,0 0,0 1,-1 1,-1 0,0 0,0 0,0 1,0 1,0 1,0 0,0 0,0 0,0 0,0 0,0 0,0 -1,-2 -1,-3 -2,-5 -1,-1 -2,-2 -3,-3 -1,-1 -2,-2 -4,-3 -1,0 -3,-1 -5,-1 0,0 0,0 0,0 0,0 0,0 0,0 -2,0 -3,1 -5,1 -1,1 -2,2 -3,3 -1,1 -2,2 -2,4 -1,1 -1,3 -1,4 0,1 0,1 0,1 0,0 0,0 0,0 0,1 0,2 0,2 0,1 1,2 1,3 0,0 1,1 1,2 1,0 1,1 2,2 0,0 0,0 0,0 0,0 0,-1 0,-1 0,0 0,1 0,1 0,0 0,0 0,0 1,0 1,1 2,1 1,1 2,1 2,1 1,1 2,1 3,1 0,0 1,0 2,0 0,0 1,0 1,0 0,0 1,0 1,0 0,0 1,1 1,1 0,0 0,0 1,0 0,1 0,1 0,1 0,0 1,1 1,1 0,0 0,0 0,1 0,0 0,0 0,1 0,0 0,0 0,0 0,0 0,0 0,0 0,1 0,1 0,2 0,0 0,1 -1,1 0,1 -1,1 -1,1 -1,1 -1,1 -2,1 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 -1,0 -2,0 -1,-1 -1,-1 -2,-1 0,-1 0,-1 -1,-2 0,-1 0,-1 0,-2 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 -1,0 0,0 -1,0 -1,0 -1,0 -2,0 -2,0 -1,0 -1,0 -2,0 -1,0 -1,0 -2,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,2 0,4 1,5 1,2 2,3 3,5 1,0 2,1 3,2 2,0 3,1 4,1 -2,0 -5,0 -7,0 -3,0 -6,1 -8,1 -1,0 -2,0 -3,-1 -1,0 -1,0 -2,-1 0,0 -1,-1 -1,-1 0,-1 0,-2 0,-3 0,-4 -1,-7 -1,-11 0,-3 0,-7 0,-11 -1,-3 -1,-7 -1,-10 0,-4 0,-7 0,-10 0,0 0,-1 0,-1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,-1 0,-2 0,-3 1,-1 1,-2 2,-2 1,-1 2,-2 3,-2 1,-1 2,-1 3,-1 0,0 0,0 0,0 0,0 0,0 0,0 1,0 1,0 2,0 0,0 1,0 2,0 0,1 1,1 1,1 1,0 1,1 1,1 3,0 6,0 8,0 3,0 6,0 8,0 0,-1 -1,-1 -2,-2 -1,-1 -1,-1 -2,-2 -1,-1 -3,-2 -4,-3 -1,-1 -2,-3 -4,-4 0,0 -1,0 -1,0 -1,0 -1,0 -2,0 0,-1 -1,-1 -1,-1 -1,0 -1,-1 -2,-1 0,0 0,0 0,0 0,0 0,0 0,0 -1,-1 -2,-2 -2,-3 0,-1 -1,-2 -1,-3 0,-1 0,-2 1,-3 0,0 1,-1 1,-2 0,0 0,0 0,0 0,0 0,0 1,0 0,-1 1,-2 2,-2 1,-1 2,-1 3,-1 1,0 2,0 3,1 1,0 2,1 3,2 1,0 1,0 1,1 1,0 1,1 1,1 1,1 1,1 1,1 0,1 0,1 0,2 1,1 2,2 3,3 1,1 2,1 3,2 1,1 2,2 3,3 1,1 2,2 3,2 0,-1 0,-2 0,-3 0,-1 -1,-3 -1,-4 0,-1 0,-2 0,-4 0,-1 0,-2 0,-3 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-2 -1,0 -1,-1 -1,-1 0,-1 0,-1 0,-2 0,0 0,0 0,0 0,0 0,0 0,0 0,-1 0,-2 0,-3 1,-1 1,-2 2,-2 0,-1 1,-1 2,-2 1,0 1,0 2,0 1,0 1,0 1,0 0,0 0,0 0,0 1,0 2,0 3,0 1,1 2,1 3,2 1,0 2,1 2,2 1,1 1,2 1,3 0,1 0,1 0,2 0,0 0,1 0,1 0,1 -1,1 -1,1 0,1 0,1 -1,2 0,1 1,2 1,3 0,2 0,3 0,4 0,1 0,2 1,4 0,1 0,2 0,3 1,-1 3,-3 4,-5 2,-1 3,-3 5,-4 0,-1 0,-1 0,-1 0,0 0,0 0,0 0,-1 0,-1 0,-2 0,0 1,-1 1,-1 0,-1 0,-1 0,-1 0,-1 1,-1 1,-2 1,0 2,-1 3,-1 0,-1 1,-1 2,-1 1,0 2,0 3,1 1,0 2,0 3,1 0,0 0,0 0,0 0,0 0,0 0,0 1,1 2,2 2,3 1,1 1,2 1,3 0,1 0,2 0,3 0,0 -1,1 -1,2 0,0 0,0 0,0 0,0 0,0 0,0 -1,1 -1,1 -1,1 -1,1 -1,1 -2,1 0,0 -1,0 -1,0 0,1 -1,1 -1,1 -2,2 -4,3 -5,5 -2,2 -3,4 -5,5 3,0 5,0 8,0 2,0 5,0 7,0 1,0 1,-1 1,-1 1,0 1,0 2,-1 0,0 1,0 1,0 1,0 1,0 2,0 1,0 2,0 3,0 1,1 2,1 3,2 0,1 1,1 2,2 0,1 1,2 1,3 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,1 0,0 0,1 0,1 0,1 0,1 1,2 0,3 0,5 1,8 0,3 1,5 1,8 1,4 1,7 2,11 0,3 1,6 1,10 0,0 0,0 0,0 0,1 0,1 0,1 0,1 0,1 0,2 0,0 0,1 -1,1 0,1 0,1 -1,1 0,0 -1,1 -1,1 -1,0 -1,0 -1,0 0,0 0,0 0,0 -3,0 -5,0 -7,0 -3,0 -5,0 -8,0 2,0 3,0 4,-1 1,-1 1,-1 2,-2 1,-1 2,-3 2,-4 0,-1 1,-3 1,-4 0,0 0,-1 0,-1 0,0 0,0 -1,0 0,0 0,-1 0,-1 0,0 0,0 0,0 0,-2 0,-4 0,-6 -1,-2 -1,-4 -1,-5 0,0 0,-1 0,-1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 0,0 -1,0 -2,0 -1,0 -2,0 -3,0 -1,0 -2,1 -3,1 -1,0 -2,0 -3,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,1 0,1 0,2 0,1 0,1 0,2 0,0 0,1 0,1 0,1 0,2 1,2 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 1,0 1,0 0,0 1,0 1,0 1,0 1,0 1,0 1,0 1,0 1,0 1,1 1,2 1,2 0,1 0,2 0,3 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,1 0,1 0,2 0,0 -1,1 -1,1 0,1 -1,1 -1,1 0,1 -1,1 -1,1 -1,0 -1,0 -1,0 0,0 0,0 0,0 0,0 -1,0 -2,-1 0,0 -1,0 -1,0 -1,-1 -1,-1 -1,-2 -1,-1 -1,-1 -1,-2 0,-1 0,-3 -1,-4 0,-1 0,-3 0,-4 0,-2 0,-3 -1,-5 0,-1 0,-2 0,-4 0,0 0,0 0,0 0,0 0,0 0,0 0,-1 0,-1 0,-2 0,0 1,-1 1,-1 0,0 1,-1 1,-1 0,0 1,0 1,0 0,0 0,0 1,0 0,0 0,0 0,0 0,0 1,0 1,0 1,0 2,0 2,1 0,0 1,1 1,1 0,1 1,1 1,2 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 1,0 2,0 3,0 1,0 2,0 4,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,-2 -1,-3 -1,-5 -1,-1 -2,-3 -3,-4 -2,-1 -3,-1 -4,-2 -2,-1 -4,-1 -5,-1 0,0 -1,0 -1,0 0,0 0,0 0,0 -2,0 -3,1 -4,1 -1,1 -2,2 -3,3 -1,1 -2,2 -2,3 0,2 -1,3 -1,4 0,1 0,1 0,1 0,0 0,0 0,0 0,1 0,1 0,1 1,0 1,0 1,0 0,0 0,0 0,0 0,0 0,0 0,0 0,1 0,3 0,4 0,1 0,3 0,4 1,1 1,3 1,4 0,2 0,3 0,5 1,1 1,3 2,4 1,2 2,3 3,4 1,1 2,2 3,3 1,0 3,0 4,1 0,0 0,0 0,0 0,0 0,0 0,0 -3,0 -6,0 -9,0 -3,0 -6,0 -9,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,-1 0,-3 1,-6 1,-10 0,-3 1,-7 1,-10 0,-2 0,-4 0,-6 1,-2 1,-4 1,-6 0,-1 0,-3 0,-4 1,-1 1,-3 1,-4 0,0 0,0 0,0 0,0 0,0 -1,0 0,0 0,0 0,0 0,0 0,0 0,-1 -1,0 -2,0 -3,1 -1,0 -2,0 -3,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 -1,0 0,0 0,0 0,0 0,0 0,0 0,0 0,2 0,4 0,5 0,2 -1,4 -1,6 0,0 0,0 0,0 0,1 0,1 0,1 0,1 0,1 0,2 0,1 0,2 0,3 0,1 0,2 -1,3 0,0 0,1 0,2 0,-1 0,-1 -1,-2 0,-1 0,-2 0,-2 0,-1 -1,-2 -1,-3 0,-1 -1,-2 -1,-3 0,-1 0,-2 -1,-2 0,-1 0,-2 0,-3 -1,-1 -1,-2 -1,-3 -1,-2 -1,-3 -2,-4 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 -2,0 0,0 -1,0 -1,0 -1,0 -2,0 -2,0 -1,0 -1,0 -2,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,1 0,2 1,3 0,0 0,1 0,2 1,2 2,5 3,8 0,2 1,5 2,8 0,1 1,3 1,5 1,2 2,3 2,5 1,2 1,4 2,5 0,2 1,4 1,6 0,0 0,0 0,0 0,0 0,0 0,0 -3,0 -6,0 -9,0 -3,0 -6,1 -9,1z"/>';

//Portret
var path5 = s.path("M306 2845c1,-4 1,-2 1,0 -2,5 -4,12 -8,15 -1,0 -5,3 -5,2 1,-1 3,-3 4,-5 1,-1 2,-2 3,-3 2,-2 4,-6 5,-9l0 0zm-33 48c0,0 0,0 0,0l7 -1c50,-11 100,-21 150,-31l0 0c2,0 13,-2 13,-3 1,-1 0,-5 -1,-6 -1,-6 0,-5 -5,-7 -7,-5 -7,-3 -14,-5 -6,-1 -9,-4 -16,-3 -2,0 1,1 0,2 -1,0 -1,0 -2,0 -1,0 -1,1 -3,0 -1,0 0,1 -1,1 -2,-1 -3,-3 -4,1 -1,4 1,4 0,6 0,1 -2,4 -3,3 -2,-1 -6,-9 -7,-5 -1,0 -1,0 -2,-1 -2,-4 -2,-4 -6,-7 -1,-1 -3,-3 -3,-4 0,-1 0,-1 -1,-1 -5,-3 -5,-1 -2,3 2,2 5,4 3,6 -2,3 -1,3 -2,6 0,3 -2,-7 -2,-7 -1,-3 -3,-6 -3,-9 -1,-3 -2,-8 -2,-10 0,0 1,-1 1,-1 1,0 1,0 2,0 3,-1 5,-1 8,-2 1,-1 1,0 1,-1l8 -2c1,0 3,-1 3,-2 2,0 3,-3 2,-6 0,-2 -2,-3 -2,-6 0,-3 2,-6 2,-9 -1,-3 1,-3 -1,-4 -2,-2 0,-2 0,-4 0,-1 0,-1 0,-2 -1,-1 -1,-2 -1,-4 -1,-1 -1,-1 -1,-2 2,-1 3,0 6,-1 1,-1 2,-1 3,-3 1,-3 -1,-5 -2,-7 0,-1 -2,-4 -3,-4 0,0 0,0 0,0 0,0 0,0 0,0l-6 -7c0,-1 -1,-1 -1,-2 -1,0 0,0 -1,0 0,-1 -1,-2 -1,-2 0,-1 0,-1 -1,-1 0,0 0,-1 0,-1 0,0 1,-1 1,-1 0,0 0,0 0,0 -2,-4 2,-5 1,-7 0,-3 -2,-5 -3,-8 0,-2 2,1 5,-1 7,-6 4,-9 2,-12 0,-1 -1,-2 -1,-4 0,0 0,-1 0,-2 -1,-2 -1,-2 -3,-4 -1,-1 1,1 0,-1 -1,-2 -1,-2 -2,-3 0,-2 -1,-1 -1,-2 -1,-1 -5,-2 -7,-3 -2,-1 -3,-3 -6,-3 -2,0 -3,-1 -1,-2 1,0 -1,0 -1,0 -3,-1 -5,-2 -8,-2 -2,-1 -7,-3 -9,-3 -2,1 1,-1 -3,-1 -3,-1 -2,2 -5,1 -1,0 -1,1 -2,0 0,-1 0,0 -1,0 -1,-1 -4,0 -6,0 0,-1 -1,-1 -2,0 -1,1 -1,-1 -2,0 -1,0 -1,0 -3,0 -1,0 -7,1 -8,1 -1,1 -1,0 -4,1 -3,1 -5,-1 -8,0 -2,0 -2,0 -4,1 -2,1 -4,1 -6,2 -2,1 -4,1 -5,2 -1,0 -1,0 0,-1 0,0 0,-1 0,-1 -2,1 -1,1 -3,2 -2,0 -3,2 -5,3 -1,0 -3,3 -4,3 -1,1 -2,2 -3,4 0,0 -1,2 -1,2 -1,1 -2,2 -3,4 0,0 0,1 -1,1 -5,15 0,2 -3,14 0,0 0,2 0,3 1,2 0,5 0,8 -1,1 -1,3 -2,5 -1,1 -1,0 -1,1 0,2 -1,4 -1,6 -1,3 -1,3 -1,5 0,2 0,4 0,6 1,4 2,7 2,10 0,2 1,4 1,5 0,4 1,6 1,9 -1,2 -1,2 -1,4 0,1 -1,2 -1,4 0,0 0,3 1,3 0,1 -1,2 2,4 1,1 1,0 2,2 0,1 1,1 1,1 0,0 0,2 1,2 0,1 0,2 0,3 1,0 1,0 2,1 0,1 0,1 0,1 1,-1 1,-1 2,1 1,2 2,4 4,7 2,2 4,4 6,6 1,1 2,2 1,4 -1,3 0,1 1,2 1,0 1,1 1,2 -2,1 0,2 1,0 1,0 2,-1 3,-1 2,-3 1,0 2,0 1,0 2,0 2,0 2,0 0,1 3,-1 1,0 1,-1 3,0 0,0 0,0 0,0 2,1 1,3 1,4 0,2 -1,9 -2,11l0 0c-2,3 -3,8 -6,10 -3,2 -6,4 -8,5 -2,2 -3,1 -5,0 -1,-1 -2,-2 -4,-1 -2,1 -2,3 -2,5 -1,3 1,1 -2,4 -2,2 -3,4 -5,6 -1,1 -1,2 0,3 0,3 1,6 1,9 1,2 1,4 2,6zm111 -164c-1,0 -2,2 -2,-2 0,-1 0,-1 0,-2 1,2 1,3 1,0 0,-5 1,-3 1,0 0,2 0,2 1,4 1,1 -1,2 -1,1 0,0 0,-1 0,-1zm6 -7c0,1 -3,4 -2,1 1,0 1,-1 2,-1z ").attr({ fill: '#CFCDC6', opacity: '0.0'});
var path6 = s.path("M324 2702c0,-2 1,-2 -1,0 -1,2 -5,6 -6,7 0,-2 2,-3 3,-5 -1,0 -1,1 -2,0 -1,-1 -1,0 -2,1 0,0 -6,4 -4,2 0,-1 2,-3 0,-2 -3,2 -8,10 -10,10 0,-1 1,-3 1,-5 1,-1 2,-1 2,-2 1,-1 -2,1 -2,1 -4,2 -5,8 -5,13 0,3 0,5 0,8 -1,3 -1,-2 -1,-3 -1,-2 -1,-3 -1,-5 -1,-4 2,-9 1,-10 0,-2 -5,3 -5,4 -1,1 -2,2 -3,2 -2,1 -3,7 -3,9 0,3 0,6 0,7 0,5 4,6 1,8 0,0 0,0 -1,-1 -3,-10 -2,-14 2,-23 2,-5 -1,0 -2,-1 0,-1 3,-4 4,-5 2,-2 4,-4 6,-6 5,-6 -2,0 -3,1 -1,0 1,-2 0,-1 -1,0 -3,2 -3,3 1,0 1,0 0,1 -4,2 -4,2 -7,6 -2,1 -6,6 -6,8 0,2 2,-2 2,-2 0,1 -3,5 -3,8 1,0 1,0 1,1 0,2 0,7 -1,9 0,1 -1,2 -1,0 0,0 0,-3 -1,-2 -1,2 -2,12 -1,13 0,2 1,0 1,4 -1,5 1,5 2,0 1,0 3,-4 2,-5 0,0 1,-4 1,-1 0,4 -3,10 -5,13 -3,4 -1,4 2,1 2,-3 4,-5 5,-9 0,-1 0,-1 1,-1 1,3 -3,7 -5,9 -1,1 -3,4 -3,5 -1,1 -1,2 -1,3 1,1 0,3 0,5 0,2 -1,4 -1,6 0,3 0,4 1,7 0,3 1,6 2,8 1,3 1,5 -1,1 -1,-2 -1,-1 -2,-4 -1,-4 -1,0 -1,1 0,1 1,8 -1,3 -1,-2 -1,0 -1,1 0,3 2,5 3,7 2,1 -1,-4 -1,-5 1,0 3,6 4,7 1,1 3,4 3,4 0,0 -1,0 -1,0 -1,0 -1,0 0,1 2,4 5,9 9,12 2,2 3,4 4,7 1,2 -1,3 3,0 2,-2 2,0 5,0 3,0 5,-3 7,-2 2,2 3,0 3,-2 0,-4 -2,-5 1,-9l1 -1c1,0 1,-1 2,-1 2,-2 1,-2 2,-4 1,-1 0,-2 1,-3 0,0 0,1 0,0 0,-1 1,-1 1,-3 0,0 0,-4 0,-4 -2,-1 0,-2 0,-3 0,0 -1,0 -1,-1 0,-1 -1,-1 -1,-3 0,-2 -2,-6 -2,-8 1,-2 5,-2 7,-3 2,-1 4,-2 4,-4 0,-2 -3,0 -4,1 -2,0 -8,-1 -4,-3 2,-1 -1,1 3,-1 1,0 4,-2 5,0 1,2 0,1 1,-1 1,-2 4,-4 3,0 -1,1 -2,3 -2,5 2,0 4,-8 6,-6 1,2 1,1 2,0 2,-3 2,1 3,-1 1,-2 1,0 1,-3 0,-2 1,0 1,-1 0,0 -2,-13 -2,-15 0,-1 2,-6 3,-7 2,-2 5,-4 8,-7 2,-2 2,-2 5,-4 3,-2 3,-3 4,-6 1,-3 2,-3 2,-7 0,-2 -3,-10 -4,-12 -1,-3 -2,2 -2,2 -1,-2 0,-6 0,-9 0,-1 0,0 -1,1 -1,2 -2,3 -3,6 -2,5 0,-3 0,-4 0,-3 -2,-2 -2,-3 0,-1 2,-1 2,-2 0,-1 -1,0 -1,0 -1,0 -3,4 -2,1 0,-1 0,-2 1,-3 -3,0 -3,4 -5,3 0,0 -1,0 -1,1 0,1 -1,5 -2,4 0,0 -1,-1 -1,-1 0,-1 1,-2 1,-3 0,-3 -2,-4 -2,-1 0,2 0,2 -2,3 -3,1 -1,-2 -2,-2 0,-1 -2,5 -4,5 0,0 0,0 0,-1 1,-2 3,-5 4,-8 0,0 1,-3 1,-3 -1,1 -1,2 -3,3 -1,1 -1,2 -2,3 -1,1 -3,4 -4,3 -1,-1 0,-1 -1,-1 -1,-1 0,-2 1,-4l0 0z").attr({ fill: '#8C816D', opacity: '0.0'});
var path7 = s.path("M324 2702c0,-2 1,-2 -1,0 -1,2 -5,6 -6,7 0,-2 2,-3 3,-5 -1,0 -1,1 -2,0 -1,-1 -1,0 -2,1 0,0 -6,4 -4,2 0,-1 2,-3 0,-2 -3,2 -8,10 -10,10 0,-1 1,-3 1,-5 1,-1 2,-1 2,-2 1,-1 -2,1 -2,1 -4,2 -5,8 -5,13 0,3 0,5 0,8 -1,3 -1,-2 -1,-3 -1,-2 -1,-3 -1,-5 -1,-4 2,-9 1,-10 0,-2 -5,3 -5,4 -1,1 -2,2 -3,2 -2,1 -3,7 -3,9 0,3 0,6 0,7 0,5 4,6 1,8 0,0 0,0 -1,-1 -3,-10 -2,-14 2,-23 2,-5 -1,0 -2,-1 0,-1 3,-4 4,-5 2,-2 4,-4 6,-6 5,-6 -2,0 -3,1 -1,0 1,-2 0,-1 -1,0 -3,2 -3,3 1,0 1,0 0,1 -4,2 -4,2 -7,6 -2,1 -6,6 -6,8 0,2 2,-2 2,-2 0,1 -3,5 -3,8 1,0 1,0 1,1 0,2 0,7 -1,9 0,1 -1,2 -1,0 0,0 0,-3 -1,-2 -1,2 -2,12 -1,13 0,2 1,0 1,4 -1,5 1,5 2,0 1,0 3,-4 2,-5 0,0 1,-4 1,-1 0,4 -3,10 -5,13 -3,4 -1,4 2,1 2,-3 4,-5 5,-9 0,-1 0,-1 1,-1 1,3 -3,7 -5,9 -1,1 -3,4 -3,5 -1,1 -1,2 -1,3 1,1 0,3 0,5 0,2 -1,4 -1,6 0,3 0,4 1,7 0,3 1,6 2,8 1,3 1,5 -1,1 -1,-2 -1,-1 -2,-4 -1,-4 -1,0 -1,1 0,1 1,8 -1,3 -1,-2 -1,0 -1,1 0,3 2,5 3,7 2,1 -1,-4 -1,-5 1,0 3,6 4,7 1,1 3,4 3,4 0,0 -1,0 -1,0 -1,0 -1,0 0,1 2,4 5,9 9,12 2,2 3,4 4,7 1,2 -1,3 3,0 2,-2 2,0 5,0 3,0 5,-3 7,-2 2,2 3,0 3,-2 0,-4 -2,-5 1,-9l1 -1c1,0 1,-1 2,-1 2,-2 1,-2 2,-4 1,-1 0,-2 1,-3 0,0 0,1 0,0 0,-1 1,-1 1,-3 0,0 0,-4 0,-4 -2,-1 0,-2 0,-3 0,0 -1,0 -1,-1 0,-1 -1,-1 -1,-3 0,-2 -2,-6 -2,-8 1,-2 5,-2 7,-3 2,-1 4,-2 4,-4 0,-2 -3,0 -4,1 -2,0 -8,-1 -4,-3 2,-1 -1,1 3,-1 1,0 4,-2 5,0 1,2 0,1 1,-1 1,-2 4,-4 3,0 -1,1 -2,3 -2,5 2,0 4,-8 6,-6 1,2 1,1 2,0 2,-3 2,1 3,-1 1,-2 1,0 1,-3 0,-2 1,0 1,-1 0,0 -2,-13 -2,-15 0,-1 2,-6 3,-7 2,-2 5,-4 8,-7 2,-2 2,-2 5,-4 3,-2 3,-3 4,-6 1,-3 2,-3 2,-7 0,-2 -3,-10 -4,-12 -1,-3 -2,2 -2,2 -1,-2 0,-6 0,-9 0,-1 0,0 -1,1 -1,2 -2,3 -3,6 -2,5 0,-3 0,-4 0,-3 -2,-2 -2,-3 0,-1 2,-1 2,-2 0,-1 -1,0 -1,0 -1,0 -3,4 -2,1 0,-1 0,-2 1,-3 -3,0 -3,4 -5,3 0,0 -1,0 -1,1 0,1 -1,5 -2,4 0,0 -1,-1 -1,-1 0,-1 1,-2 1,-3 0,-3 -2,-4 -2,-1 0,2 0,2 -2,3 -3,1 -1,-2 -2,-2 0,-1 -2,5 -4,5 0,0 0,0 0,-1 1,-2 3,-5 4,-8 0,0 1,-3 1,-3 -1,1 -1,2 -3,3 -1,1 -1,2 -2,3 -1,1 -3,4 -4,3 -1,-1 0,-1 -1,-1 -1,-1 0,-2 1,-4l0 0z").attr({ fill: '#8C816D', opacity: '0.0'});
var path8 = s.path("M358 2820c0,1 2,1 2,1 -1,3 2,1 3,1 4,-1 6,-2 10,-3 3,-1 16,-3 17,-5 1,-2 -1,-1 -2,-2 -1,-1 -2,-1 -3,0 0,1 -3,2 -4,1 0,-1 0,-1 0,-1 -1,-1 -1,-1 -2,-1 -2,0 -3,-1 -5,-1 -1,1 -1,1 -2,1 0,-1 2,-2 1,-2 0,0 0,0 -2,0 0,0 -4,0 -2,2 0,0 -2,0 -3,0 -1,0 -2,0 -3,-1 -1,0 -3,0 -3,-1 -1,-1 -2,-3 -5,-2 -3,1 -3,-2 -4,-1 -2,0 -2,-2 -5,-1 -1,0 -5,-1 -6,-1 -1,2 6,4 8,5 0,1 11,3 11,4 -1,1 11,-1 3,3 -2,1 -4,2 -4,4z").attr({ fill: '#8C816D', opacity: '0.0'});
var path9 = s.path("M359 2700c1,4 7,7 10,10 2,2 6,6 7,9 1,1 5,9 6,8 0,0 -3,-2 -1,-3 0,0 -1,-1 -1,-1 -1,-2 -1,-4 -1,-6 0,-1 1,-1 1,0 1,1 2,3 2,3 1,0 0,-3 0,-4 0,-1 0,-1 0,-1 1,1 1,1 1,0 -1,-2 -2,-6 -4,-6 -2,0 -2,3 -2,4 1,0 2,1 1,1 -1,0 0,0 -1,1 -1,2 -1,0 -2,-1 0,-3 -1,-10 -3,-11 -2,0 0,3 -2,1 -3,-4 -5,-1 -8,-3 1,0 3,1 4,0 0,-1 -2,0 -2,-1 0,-2 -1,0 -2,-1 -1,-2 -1,0 -2,0 0,0 -1,0 -1,1z").attr({ fill: '#8C816D', opacity: '0.0'});
var path10 = s.path("M392 2774c1,-1 -3,-3 -3,-3 -4,-1 -7,1 -8,1 -1,0 -2,-3 -3,-2 -1,0 -1,0 -1,1 1,2 3,4 6,4 3,0 2,1 2,1 1,0 2,0 3,0 1,-1 1,-1 3,-2 0,0 0,0 1,0z").attr({ fill: '#8C816D', opacity: '0.0'});
var path11 = s.path("M378 2786c1,-1 4,-2 5,-2 0,-1 -1,0 -2,0l-1 0c0,0 -2,0 -2,0 -2,2 -2,1 -3,2 0,0 -1,1 -1,2 0,0 3,0 5,1 0,0 0,0 2,0 1,-2 0,0 1,-1 -1,0 -1,0 -1,0 -1,0 -2,0 -3,-1 0,0 1,0 2,0l4 -1c2,0 3,1 5,0 0,0 0,0 0,0 -1,0 -2,-1 -2,-1 0,0 0,0 -1,0l0 1c-1,-1 -4,-1 -4,0 -1,0 0,0 -1,0 0,0 0,0 -1,0 -1,0 -1,0 -2,0z").attr({ fill: '#8C816D', opacity: '0.0'});
var path12 = s.path("M374 2744c1,0 1,0 1,-1 -4,2 -2,0 -4,1 0,0 -3,1 -3,1l-4 2c0,0 0,1 -1,0 0,2 -1,1 -1,2 0,0 0,0 1,-1 1,-1 1,0 2,0 0,-1 -1,0 0,-1 1,0 3,1 3,1 -1,-1 0,0 -1,-1 1,0 1,-1 1,-1 1,0 2,1 1,1 1,1 1,1 2,1 0,-1 -1,0 -1,-2 2,0 1,1 1,2 1,1 2,1 2,0 0,-1 -1,-1 -1,-2 1,0 1,0 2,-1 0,-1 0,0 0,-1z").attr({ fill: '#8C816D', opacity: '0.0'});
var path13 = s.path("M375 2741c0,-1 0,-2 -1,-3 -1,0 -1,-1 -2,0 -1,2 1,1 1,1 0,0 -1,1 -2,1 -1,-1 -1,-1 -3,0 0,0 0,0 1,0 1,0 1,1 2,1 0,0 1,0 1,0 1,0 1,0 2,0 0,0 0,0 1,0z").attr({ fill: '#8C816D', opacity: '0.0'});
var path14 = s.path("M441 2845l0 -1c0,0 -1,-1 -2,-2 -1,-1 -3,-3 -5,-3 -3,0 -9,-3 -12,-4 -2,0 -2,0 -4,0 0,0 -3,-1 -3,-1 -4,1 -16,-3 -19,-3 -2,0 -4,-3 -8,-2 -2,0 -3,0 -5,1 -1,0 -1,1 0,1 2,2 1,1 2,1 0,0 0,1 1,1 2,1 6,2 8,2 1,0 1,0 2,0 2,0 4,0 6,1 0,0 1,-1 1,0 1,0 6,0 7,0 2,0 2,0 4,0 2,0 3,1 5,1 1,0 1,0 1,0 1,1 2,1 3,1 1,0 1,0 2,0 1,1 2,1 3,2 1,0 1,0 2,0 1,0 2,0 3,1 3,1 2,0 3,1 1,1 5,3 5,3z").attr({ fill: '#CFCDC6', opacity: '0.0'});
var path15 = s.path("M269 2873l0 0c1,-1 2,-2 3,-3 1,-1 1,0 1,-1 0,0 0,0 0,0 0,-1 1,-1 1,-1l2 -2c0,-1 0,-1 0,-2 1,-1 1,0 1,-2l0 -2c1,-2 4,-2 6,-2 3,1 3,0 5,0 0,0 3,-2 4,-3l2 -2c1,0 1,0 1,-1 0,0 0,0 0,0 0,0 0,0 0,0 1,0 0,0 1,0l3 -4c0,0 1,-1 1,-1 0,-1 0,-1 0,-1 1,0 1,-1 1,-1l0 -1c-1,1 -1,1 -1,1 -1,3 -4,5 -6,7 -1,1 -5,5 -7,6 -2,0 -5,0 -8,0 0,0 0,0 -1,0 -1,1 -2,2 -2,4 0,4 -2,4 -3,6 0,1 -3,4 -4,5 0,0 0,0 0,0z").attr({ fill: '#CFCDC6', opacity: '0.0'});
var path16 = s.path("M281 2859l2 1c1,1 1,2 3,0 0,0 0,0 1,-1l-1 0c0,0 -1,0 -1,0l-4 0z").attr({ fill: '#CFCDC6', opacity: '0.0'});
groupfoto = s.group(path5, path6, path7, path8, path9, path10, path11, path12, path13, path14,  path15, path16);
// Zababurin
  var svgString4 = '<path class="fil1 str6" d="M404 2760c-1,-2 -3,-6 -2,-8 1,-2 2,-2 5,2 2,2 0,5 -1,4 -2,-1 -5,-5 -5,-7 -1,-4 0,-9 3,-9 1,0 2,0 4,1 2,1 4,3 6,6 2,3 4,7 6,13 1,-2 2,-3 3,-3 1,-1 3,0 4,1 3,1 5,3 7,5 4,4 9,9 10,15 2,12 -7,6 -10,3 -4,-6 -6,-10 -7,-20 0,-4 0,-11 0,-12 -1,-1 -2,-2 -2,-1 -2,2 -1,3 0,4 1,2 7,7 10,6 8,-3 -7,-18 -9,-19 -3,-3 -5,-2 -4,3 0,3 1,5 3,7 1,2 2,3 3,4 1,1 2,2 3,2 1,1 3,2 4,2 1,-1 2,-1 2,-2 0,-1 0,-2 -1,-4 -1,-2 -9,-13 -11,-15 1,1 9,11 10,12 0,1 3,3 3,0 1,-3 -1,-5 -5,-11 -3,-6 -13,-19 -15,-23 -3,-3 -5,-5 -6,-5 0,0 -1,0 -1,0 0,1 2,3 2,4 3,2 5,5 8,7 2,3 9,10 11,12 1,1 2,2 3,3 1,1 1,1 2,1 1,1 2,1 2,1 1,0 1,-1 1,-2 1,-1 0,-2 0,-3 -1,-4 -5,-9 -7,-12 -1,-1 -3,-2 -4,-2 0,-1 -2,-1 -2,0 -1,1 0,2 1,4 2,3 5,5 7,5 1,1 3,1 3,-1 0,-3 -2,-8 -4,-11 0,-1 -2,-4 -3,-3 -1,2 0,3 1,4 1,2 7,7 10,5 8,-2 -7,-18 -9,-18 -5,-1 -5,5 -2,10 1,2 2,3 3,4 1,1 2,2 3,2 2,1 3,2 5,2 1,-1 1,-1 2,-2 0,-1 -1,-2 -1,-4 -1,-2 -8,-11 -10,-13 1,1 8,9 9,10 0,0 2,3 3,0 1,-3 -2,-5 -5,-11 -4,-6 -13,-20 -16,-23 0,0 -6,-7 -6,-5 0,1 2,3 2,3 3,3 5,6 8,8 2,3 8,9 11,12 1,1 2,2 3,3 0,1 1,1 2,1 1,1 1,1 2,1 1,0 1,-1 1,-2 0,-1 0,-2 0,-3 -2,-4 -3,-6 -5,-8 -2,-3 -5,-6 -6,-3 0,4 5,8 6,8 1,1 3,1 3,-2 1,-1 -1,-7 -2,-8 0,-1 -2,-7 -3,-8 1,2 6,9 7,10 0,1 2,2 2,1 0,-1 0,-3 -1,-6 -1,-3 -3,-8 -5,-13 2,3 4,7 6,9 0,0 2,2 2,1 0,-1 0,-2 0,-4 -2,-7 -2,-7 -5,-15 0,-1 -1,-3 -1,-2 -1,0 -1,1 0,2 0,0 1,-1 1,-2 1,-1 0,-4 1,-4 0,0 0,1 1,2 0,0 0,0 0,0 2,2 3,4 4,6 1,1 2,2 2,1 0,-1 0,-5 -1,-10 -1,-4 -2,-14 -3,-10l0 0c0,1 1,2 1,3 1,1 3,5 4,6 0,1 1,2 1,1 1,-2 0,-9 -1,-11 -1,-5 -3,-8 -2,-11 1,3 3,8 5,11 -1,-5 -3,-12 -3,-14 0,-3 0,-4 0,-5 0,-1 1,0 1,1 1,2 2,4 3,6 0,0 1,1 1,0 0,0 -1,-7 -1,-8"/>';

  //monograms
  var svgString5 = '<path id="monogram1" class="fil1 str6" d="M71 1943c5,25 13,48 16,73 4,26 7,47 4,79 -2,32 -10,70 -17,111 -7,41 -22,98 -24,136 -3,38 2,71 8,90 7,19 8,20 12,30 0,0 7,13 13,33 6,21 6,26 5,42 -2,17 -3,30 -18,72 -14,42 -37,102 -37,140 0,37 7,55 25,76 17,20 32,21 39,20 7,-1 14,-2 20,-15 6,-13 7,-34 2,-47 -6,-12 -20,-26 -31,-19 -11,6 -10,27 -6,36 3,9 16,16 21,3"/>';
  var svgString6 = '<path id="monogram2" class="fil1 str6" d="M227 281c4,-9 13,-4 16,3 2,6 3,22 -5,26 -8,5 -18,-5 -22,-14 -4,-9 -4,-25 1,-34 4,-10 10,-11 15,-11 5,-1 15,0 28,15 13,15 18,28 18,55 0,28 -17,72 -27,103 -10,30 -12,40 -13,52 -1,12 -1,16 4,31 4,15 9,24 9,24 3,7 4,8 9,22 5,14 8,38 6,66 -2,28 -12,69 -17,99 -6,31 -12,59 -13,82 -2,23 0,39 3,57 2,19 8,36 12,54"/>';
  var svgString7 = '<path id="monogram3" class="fil1 str0" d="M452 3000c-1,-2 -1,-4 2,-5 1,0 2,1 2,2 0,1 0,2 -1,2 0,1 4,1 13,-7 -3,-1 -8,-3 -10,-4 -17,11 -49,14 -50,-5 -1,-15 27,-20 54,-8 2,-1 4,-2 6,-4 -4,-3 -6,-10 0,-10 5,-1 8,4 3,9 2,2 5,3 9,4 6,-3 14,-5 20,-4 6,1 11,5 12,12 1,5 -2,9 -3,10 11,3 14,2 14,1 0,0 -1,0 -2,-2 0,-1 1,-2 2,-2 2,-1 4,1 4,3 0,7 -14,3 -20,2 -12,10 -32,2 -37,-1 -4,4 -16,13 -18,7zm18 -30l0 0c4,-4 1,-7 -1,-7 -3,-1 -6,4 1,7zm1 9l0 0c2,-1 5,-3 7,-4 -2,-1 -6,-2 -8,-3 -2,2 -4,3 -6,4 3,1 5,2 7,3zm-26 3l0 0c-6,-4 -17,-5 -17,1 0,5 13,1 17,-1zm11 5l0 0c-2,-1 -6,-2 -7,-3 -9,3 -23,6 -24,-2 0,-7 17,-5 24,-1 2,-1 7,-3 11,-5 -19,-8 -51,-9 -49,8 1,15 27,13 45,3zm3 -1l0 0c3,-2 7,-4 10,-6 -3,-1 -5,-2 -7,-2 -2,1 -7,3 -10,5 2,0 5,2 7,3zm21 -1l0 0c-3,-1 -5,-3 -9,-4 -1,1 -7,4 -10,6 3,1 7,3 9,4 2,-2 6,-4 10,-6zm3 -1l0 0c3,-1 8,-3 11,-4 -3,-1 -9,-3 -13,-4 -3,2 -5,2 -8,4 3,1 8,3 10,4zm21 9l0 0c-9,-2 -13,-4 -20,-7 -1,0 -9,4 -11,6 8,5 25,7 31,1zm2 -1l0 0c5,-5 5,-12 1,-16 -5,-6 -12,-6 -24,-1 4,2 13,4 19,6 -4,1 -11,2 -16,4 5,2 15,5 20,7z"/>';



// ********************************************************************************************

    function infoAboutObj(elem) {
      coords = elem.getBoundingClientRect();
      console.log('coords.top='+coords.top+';  coords.bottom='+coords.bottom);
    }

var coords;
var DX=0, KX=0;
function showVisible() {
        infoAboutObj(document.getElementById("animpath"));
        device = detectZoom.device(); //redetect  Pixel Aspect Ratio
        var scrolled = window.pageYOffset || document.documentElement.scrollTop; console.log('scrolled='+scrolled);

       var vartop=parseFloat(Math.abs(coords.top),10);//console.log(' vartop='+vartop);
       var varbottom=parseInt(Math.abs(coords.bottom),10);//console.log(' varbottom='+varbottom);

        //DX - размер в px учитывающий сдвиг начала #animpath относительно начала страници и уменьшающийся по мере приближения к концу  #animpath
        //KX - эмпирический к-т учитывающий неравномерность #animpath

        KX=pathLength/Math.abs(coords.bottom-coords.top);console.log(' KX='+KX);

        //PK поправочное слогаемое - усиливающий coords.top в начале и coords.bottom в конце h*(t*b)/((b-t)*(b-t))

        var varpow=Math.pow(coords.top-coords.bottom,2); //console.log(' varpow='+varpow);
        PK=Height_of_mainsvg*vartop*varbottom/varpow;  console.log(' PK='+PK);


        inequality = KX*(coords.bottom)-PK-windowHeight*0.5;

       element.style.strokeDashoffset = inequality; //- It is work!
       console.log("strokeDashoffset="+element.style.strokeDashoffset);

         	 if ((inequality < 3900) && flag0) {flag0=false;   // Draw CSS3
			   var path3 = s.polyline("398,360 399,375 416,381 433,375 435,352 412,352 435,352 437,328 395,327 ").attr({ stroke: '#CFCDC6', strokeWidth: '4', fill: 'none', opacity: '0.0'});
         	   myDrawing0.initDraw();
         	   myDrawing0.callOnFinished = function() {path3.animate({ opacity: '1' },1200, mina.linear) };
         	   return;}

         	 if ((inequality < 3000) && flag1) {flag1=false;   // Draw JS
			   var path4 = s.polyline("448,933 449,948 466,954 483,948 485,925 447,925 451,901 481,901 484,913 ").attr({ stroke: '#CFCDC6', strokeWidth: '4', fill: 'none', opacity: '0.0'});
         	   myDrawing1.initDraw();
         	   myDrawing1.callOnFinished = function() {path4.animate({ opacity: '1' },1200, mina.linear) };
         	   return;}

			 if ((inequality < 2100) && flag2) {flag2=false; myDrawing2.initDraw(); return;}// Draw SVG


			 if ((inequality < 1010) && flag3) {flag3=false;   // Draw HTML5
			   var path5 = s.polyline("396,2145 355,2145 357,2170 394,2170 393,2193 376,2198 359,2193 358,2178 ").attr({ stroke: '#CFCDC6', strokeWidth: '4', fill: 'none', opacity: '0.0'});
         	   myDrawing3.initDraw();
         	   myDrawing3.callOnFinished = function() {path5.animate({ opacity: '1' },1200, mina.linear) };
         	   return;}

			 if ((inequality < 110) && flag4) {flag4=false;   // Draw FOTO
				console.log("Foto?");
					for (var ii = 12 - 1; ii >= 0; ii--) {
							console.log(' '+ii);
							  groupfoto[ii].animate({ opacity: '1'},4000, mina.easeinout);
					 };
         	   return;}

			 if ((inequality < 10) && flag5) {flag5=false; myDrawing4.initDraw(); return;}// Draw Zababurin

       if ((scrolled>2000) && flag6) {flag6=false; console.log('scrolled='+scrolled); myDrawing5.initDraw(); }

       if ((inequality < 4200) && flag7) {flag7=false; console.log('Draw 1 , scrolled='+scrolled); myDrawing6.initDraw(); }

       if ((scrolled>2600) && flag8) {flag8=false; console.log('scrolled='+scrolled); myDrawing7.initDraw(); }

    }

          element.style.strokeDasharray = pathLength;
          element.style.strokeDashoffset = pathLength;
          console.log("pathLength="+pathLength);

 /*** Check element Is it visible    */
    function isVisible(elem) {
      var coords = elem.getBoundingClientRect();
      var topVisible = coords.top > 0 && coords.top < shift;
      var bottomVisible = coords.bottom < shift && coords.bottom > 0;
      return topVisible || bottomVisible;
    }


function Drawing( svgString, transformString, timeBetweenDraws ) {
    this.fragment = Snap.parse( svgString );
    this.pathArray = this.fragment.selectAll('path');
    this.group = s.g().transform( transformString ).drag();
    this.timeBetweenDraws = timeBetweenDraws;
};

Drawing.prototype.init = function( svgString, transformString ) {
      this.group.clear();
      this.currentPathIndex = 0;

};

Drawing.prototype.endReached = function() {
    if( this.currentPathIndex >= this.pathArray.length ) {
        return true;
    };
};

Drawing.prototype.callOnFinished = function() {
}

Drawing.prototype.initDraw = function() {
    this.init();
    this.draw();
};

Drawing.prototype.quickDraw = function() {
    this.init();
    this.timeBetweenDraws = 0;
    this.draw();
};

Drawing.prototype.draw = function() {         // this is the main animation bit
    if( this.endReached() ) {
        if( this.callOnFinished ) {
            this.callOnFinished();
            return
        };
    };
    var myPath = this.pathArray[ this.currentPathIndex ] ;

    this.leng = myPath.getTotalLength();

    this.group.append( myPath );

     myPath.attr({
       fill: 'none',
       "stroke-dasharray": this.leng + " " + this.leng,
       "stroke-dashoffset": this.leng
     });

     this.currentPathIndex++;
     myPath.animate({"stroke-dashoffset": 0}, this.timeBetweenDraws, mina.easeout, this.draw.bind( this ) );
};

var myDrawing0 = new Drawing( svgString0, '', 2000 );
var myDrawing1 = new Drawing( svgString1, '', 2000 );
var myDrawing2 = new Drawing( svgString2, '', 3000 );
var myDrawing3 = new Drawing( svgString3, '', 3000 );
var myDrawing4 = new Drawing( svgString4, '', 4000 );
var myDrawing5 = new Drawing( svgString5, '', 5000 );
var myDrawing6 = new Drawing( svgString6, '', 5000 );
var myDrawing7 = new Drawing( svgString7, '', 5550 );

// var mainsvg = document.getElementById("curves");
var mainsvg = document.getElementsByTagName('svg')[1]; // eqv document.getElementById("curves")
var Height_of_mainsvg = mainsvg.clientHeight || (mainsvg.parentNode.clientHeight-672); //FF include padding, so we should substr it?

window.onload = function () {
  window.scrollTo(0, 0);
  console.log('-=start=-');
  console.log('Height of mainsvg: '+Height_of_mainsvg);
  console.log('Height of screen: '+windowHeight);
  console.log('Current zoom level: '+zoom+'    Device Pixel Aspect Ratio:'+device);
 }
window.onscroll = showVisible;