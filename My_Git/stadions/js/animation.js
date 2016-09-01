var selectMask;

function initAnimation (obj) {
    var stadionSvg = Snap(obj.svgTag);
    selectMask = obj.selectMask;
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
    console.log(arrayOfRegions);
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
        tooltip.style.top = e.clientY + 10 + 'px';
        tooltip.style.left = e.clientX + 10 + 'px';
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
        element
            .insertAfter(last_el) // push element above of other elements
            .animate({ "transform" : "s 1.75,1.75" },200, mina.easeinout);

    tooltip.innerHTML = "Sector " + element.attr('id').match(/\d+/)[0];
    tooltip.style.display = 'block';
};

var returnsize = function (element) {
    //element.removeClass("clickedregion"); //remove class clickedregion - ramove blue border
    element.animate({ "transform" : "s 1,1" },200, mina.easeinout);
    tooltip.style.display = 'none';
};


