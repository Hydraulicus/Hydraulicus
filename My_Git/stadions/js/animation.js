var selectMask,
    enlarging = true//true o false. Whether enlaging of selected regions. Dont enlaging for mobile
    ;

function initAnimation (obj) {
    var stadionSvg = Snap(obj.svgTag);
    selectMask = obj.selectMask;

    if ( typeof( obj.enlarging ) === 'undefined' ) {
            enlarging = !detectmob(); // = true if no mobile,  = false if mobile detected
        }
        else {
            if ( obj.enlarging === "detect"  ) {
                    enlarging = !detectmob(); // = true if no mobile,  = false if mobile detected
                }
                else
                    if ( obj.enlarging === "no"  ) { enlarging = false };
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
    //console.log(arrayOfRegions);
    arrayOfRegions.forEach( function (element, j)
              {
                  element .addClass("regions regionpassive ")
                          .hover(hoverover, hoverout)
                          .mousemove(mousemoveHandler)
                          .click(clickOnObject)//if this handler binded touchstart and touchend is reduntand
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
    returnsize(this)
};

var mousemoveHandler = function (e) {
    //console.log(e);
    //    tooltip.style.top = e.clientY + 10 + 'px';
    //    tooltip.style.left = e.clientX + 10 + 'px';
        tooltip.style.top = e.clientY + 'px';
        tooltip.style.left = e.clientX + 'px';

        //var rect = e.getBoundingClientRect();
        //xCoordinate = e.touches[0].clientX - rect.left;
        //yCoordinate = e.touches[0].clientY - rect.top;


};

var touchstartObject = function() { console.log("touch start ", this.attr('id') ); enlargement(this); };

var touchendObject = function() { console.log("touch end ", this.attr('id') ); returnsize(this) };

var clickOnObject = function() {
    console.log("press on ", this.attr('id') );  //toggle class clickedregion - toggle blue border
    this.toggleClass("clickedregion");
};

var enlargement = function (element) {
    var arrayOfRegions = Snap.selectAll(selectMask);
    var last_el = arrayOfRegions[arrayOfRegions.length-1];
    if ( enlarging ) {
            element
                .insertAfter(last_el) // push element above of other elements
                .animate({ "transform" : "s 1.75,1.75" },200, mina.easeinout);
        };

    tooltip.innerHTML = "Sector " + element.attr('id').match(/\d+/)[0];
    tooltip.style.display = 'block';
};

var returnsize = function (element) {
    //element.removeClass("clickedregion"); //remove class clickedregion - ramove blue border
    if ( enlarging ) {
            element.animate({ "transform" : "s 1,1" },200, mina.easeinout);
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

        var output = 'Detecting browsers : ';
        output += isFirefox ? 'is Firefox ' : ' ';
        output += isChrome ? 'is Chrome ' : ' ';
        output += isSafari ? 'is Safari ' : ' ';
        output += isOpera ? 'is Opera ' : ' ';
        output += isIE ? 'is IE ' : ' ';
        output += isEdge ? 'is Edge ' : ' ';
        output += isBlink ? 'is Blink ' : ' ';
        console.log(output);

        return false;
    }
}

