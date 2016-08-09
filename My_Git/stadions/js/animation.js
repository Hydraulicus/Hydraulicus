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
  var arrayOfRegions = Snap.selectAll("path[id^='Stroke']");//select regions - all path tag which have id which start from "Stroke" 
  console.log('try perform', arrayOfRegions);

  arrayOfRegions.forEach( function (element, j) 
              {
                  element .addClass("regions regionpassive ")
                          .hover(hoverover, hoverout)
                          .click(clickOnObject)//if this handler binded touchstart and touchend is reduntand  
                          .touchstart(touchstartObject)
                          .touchend(touchendObject);
              } );
}

//Handlers
var hoverover = function() { this.toggleClass("regionpassive").toggleClass("regionactive") };
var hoverout = function() { this.toggleClass("regionpassive").toggleClass("regionactive") };
var clickOnObject = function() { console.log("press on ", this.attr('id') ) }
var touchstartObject = function() { console.log("touch start ", this.attr('id') ) }
var touchendObject = function() { console.log("touch end ", this.attr('id') ) }

