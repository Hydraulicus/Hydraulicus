var selectMask,
    touchFlag = false,
    enlarging = true,//true o false. Whether enlaging of selected regions
    tooltips = true,//true o false. Whether show tooltips
    MSbrowser,
    offsetXY = 10, //offset for tooltipe
    isMobile = detectmob() //Whether mobile device
    ;

function initAnimation (obj) {
    var stadionSvg = Snap(obj.svgTag);
    selectMask = obj.selectMask;

    if ( typeof( obj.enlarging ) === 'undefined' ) {
            enlarging = !isMobile; // = true if no mobile,  = false if mobile detected
        }
        else {
            if ( obj.enlarging === "detect"  ) {
                    enlarging = !isMobile;
                }
                else
                    if ( obj.enlarging === "no"  ) { enlarging = false };
        }
    if ( typeof( obj.tooltips ) === 'undefined' ) {
            enlarging = !isMobile; // = true if no mobile,  = false if mobile detected
        }
        else {
            if ( obj.enlarging === "detect"  ) {
                tooltips = !isMobile;
                }
                else
                    if ( obj.tooltips === "no"  ) { tooltips = false };
        }


    embdingSvgFile (stadionSvg, obj.pathTosvgFile, performOfImage);
};//end of init function

function embdingSvgFile (target_, filePathName, callBack)
  { 
    var stadium = Snap.load(filePathName, function ( loadedFragment ) {
                                                target_.append( loadedFragment );
                                                callBack();
                                        } );
  }

function performOfImage () {
    var arrayOfRegions = Snap.selectAll(selectMask);
    arrayOfRegions.forEach( function (element, j)
              {
                  element .addClass("regions regionpassive ")
                          .mouseover(hoverover)
                          .mouseout(hoverout)
                          .mousemove(mousemoveHandler)
                          .click (clickOnObject)
                          .touchstart(touchstartObject)
                          .touchend(touchendObject);
              } );
}

// add tooltips
var tooltip = document.querySelector('.seats_tooltip');

//Handlers
var hoverover = function() {
    this.toggleClass("regionpassive").toggleClass("regionactive");
    enlargement(this);
};
var hoverout = function() {
    this.toggleClass("regionpassive").toggleClass("regionactive");
    returnsize(this);
};

var mousemoveHandler = function (event) {
    if ( touchFlag ) return;
    if ( ! tooltips ) return;//dont show tooltips
    var e = event || window.event;
    tooltip.style.top = e.clientY + document.body.scrollTop + document.documentElement.scrollTop + offsetXY + 'px';
    tooltip.style.left = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft + offsetXY + 'px';
};

var touchstartObject = function(e) {
    touchFlag = true;
    console.log("touch start ", this.attr('id') );

    if ( ! tooltips ) return; //dont show tooltips
    tooltip.style.display = 'block';
    tooltip.innerHTML = "Sector " + this.attr('id').match(/\d+/)[0];
    var top =   parseInt( e.touches[0].pageY );
    var left =  parseInt( e.touches[0].pageX );
    tooltip.style.top = top + 'px';
    tooltip.style.left = left + 'px';
};

var touchendObject = function() {
        console.log("touch end ", this.attr('id') );
    };

var clickOnObject = function(event) {
    console.log("press on ", this.attr('id') );  //toggle class clickedregion - toggle blue border
    this.toggleClass("clickedregion");
    event.stopPropagation();
    event.preventDefault();
    // this fires once on all devices
};

var enlargement = function (element) {
    var arrayOfRegions = Snap.selectAll(selectMask);
    var last_el = arrayOfRegions[arrayOfRegions.length-1];
    if ( enlarging && !MSbrowser) {
            element
                .insertAfter(last_el) // push element above of other elements
                .animate({ "transform" : "s 1.75,1.75" },200, mina.easeinout);
        };
    if ( ! tooltips ) return; //dont show tooltips
    tooltip.innerHTML = "Sector " + element.attr('id').match(/\d+/)[0];
    tooltip.style.display = 'block';
};

var returnsize = function (element) {
    //element.removeClass("clickedregion"); //remove class clickedregion - ramove blue border
    element.removeClass("regionactive");
        if ( enlarging ) {
            element.stop().animate({ "transform" : "s 1,1" },200, mina.easeinout);
        };
    tooltip.style.display = 'none';
};



function detectmob() {
    if ( navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
    ){
        console.log('Mobile detected!');
        return true;
    }
    else {

// Opera 8.0+
        var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
// Firefox 1.0+
        var isFirefox = typeof InstallTrigger !== 'undefined';
// At least Safari 3+: "[object HTMLElementConstructor]"
        var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
// Internet Explorer 6-11
        var isIE = /*@cc_on!@*/false || !!document.documentMode;
// Edge 20+
        var isEdge = !isIE && !!window.StyleMedia;
// Chrome 1+
        var isChrome = !!window.chrome && !!window.chrome.webstore;
// Blink engine detection
        var isBlink = (isChrome || isOpera) && !!window.CSS;

        MSbrowser = ( isIE || isEdge) ? true : false;

        var output = 'Detecting browsers : ';
        output += isFirefox ? 'is Firefox ' : '';
        output += isChrome ? 'is Chrome ' : '';
        output += isSafari ? 'is Safari ' : '';
        output += isOpera ? 'is Opera ' : '';
        output += isIE ? 'is IE ' : '';
        output += isEdge ? 'is Edge ' : '';
        output += isBlink ? 'is Blink ' : '';
        console.log(output);

        return false;
    }
}

