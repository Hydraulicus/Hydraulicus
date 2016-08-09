function initAnimation (obj) {
    var stadionSvg = Snap(obj.svgTag); 
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
  var arrayofDot = Snap.selectAll("path[id^='dot']");//select all path tag which have id which start from "dot"
  // console.log('try perform', arrayofDot);

  arrayofDot.forEach( function (element, j) 
              {
                  element .addClass("reddot reddotpassive reddotarea")
                          .hover(hoverover, hoverout)
                          .click(clickOnRedDot)//if this handler binded touchstart and touchend is reduntand  
                          .touchstart(touchstartRedDot)
                          .touchend(touchendRedDot);
              } );
}

//Handlers
var hoverover = function() { this.toggleClass("reddotpassive").toggleClass("reddotactive") };
var hoverout = function() { this.toggleClass("reddotpassive").toggleClass("reddotactive") };
var clickOnRedDot = function() { console.log("press on ", this.attr('id') ) }
var touchstartRedDot = function() { console.log("touch start ", this.attr('id') ) }
var touchendRedDot = function() { console.log("touch end ", this.attr('id') ) }

