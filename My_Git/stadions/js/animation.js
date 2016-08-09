

function initAnimation (obj) {
    var stadionSvg = Snap(obj.svgTag); 
// stadionSvg.load(obj.pathTosvgFile, function ( loadedFragment ) {
//                                                 g.append( loadedFragment );
//                                                 g.hover( hoverover, hoverout );
//                                                 g.text(300,100, 'hover over me');
//                                         } );

     embdingSvgFile (stadionSvg, obj.pathTosvgFile, performOfImage);
  // {
  //   Promise.all([//promise ES-2015. Dont work in IE. Uncomment line 20 in index.html
  //        drawObjects(stadionSvg, objects) //draw sectors
  //       ,drawObjects(stadionSvg, textMarks) //draw text blocks
  //       // ,drawObjects(stadionSvg, manualRedDots) //manualy draw red dots from array "manualRedDots"
  //     ])
  //       .then(function results () {
  //         console.log('start automatically drawings of red dots');
  //         setRedDot(stadionSvg);//automatically  draw red dots on text block which contain class "needdot"
  //     })
  //       .then(function results () {//runing after all are drawn
  //         console.log('handlers binding');
  //         bindEvents4RedDots();
  //     });
};//end of init function

function embdingSvgFile (target_, filePathName, callBack)
  { 
    var tux = Snap.load(filePathName, function ( loadedFragment ) {
                                                target_.append( loadedFragment );
                                                // call(callBack);
                                                callBack();
                                                // g.hover( hoverover, hoverout );
                                                // g.text(300,100, 'hover over me');
                                        } );
  }

function performOfImage () {
  // var arrayofDot = Snap.selectAll("#dot434B");
  var arrayofDot = Snap.selectAll("path[id^='dot']");
  
  // [id^='someId'] will match all ids starting with someId.
  // document.querySelectorAll("div[id$='foo']")


  console.log('try perform', arrayofDot);

  arrayofDot.forEach( function (element, j, arr) 
              {
                  element .addClass("reddot reddotpassive reddotarea")
                          .hover(hoverover, hoverout)
                          .click(clickOnRedDot)//if this handler binded touchstart and touchend is reduntand  
                          .touchstart(touchstartRedDot)
                          .touchend(touchendRedDot);
              } );
}

function drawObjects(target_, objects_)
    { 
      return new Promise( function (resolve, reject) {
            objects_.forEach( function (element, j, arr) 
              {
                  target_.add(Snap.parse(objects_[j]));
                  if (j == arr.length-1) { resolve(); }
              } );
      }); 
   }

function setRedDot(target_)
  { 
    return new Promise( function (resolve, reject) {
      var arrayofDotPlacess = Snap.selectAll(".needdot");
        arrayofDotPlacess.forEach( function(element, j, arr)
            { 
                var dotBox = element.getBBox();
                target_.circle(dotBox.cx, dotBox.cy, 3) 
                        .attr({"id" : "dot" + element.attr("id")})
                        .addClass("reddot reddotpassive reddotarea")
                        // .addClass("visibility_hid") //hide dots 
                        ;
                 if (j == arrayofDotPlacess.length-1) { resolve(); }
            })
      });
  }

function bindEvents4RedDots() {
  console.log("bindEvents4RedDots");
  Snap.selectAll(".reddot").forEach( function(element, i) 
      {
        element
          .hover(hoverover, hoverout)
          .click(clickOnRedDot)//if this handler binded touchstart and touchend is reduntand  
          .touchstart(touchstartRedDot)
          .touchend(touchendRedDot);
      }
    )
}
//Handlers
var hoverover = function() { this.toggleClass("reddotpassive").toggleClass("reddotactive") };
var hoverout = function() { this.toggleClass("reddotpassive").toggleClass("reddotactive") };
var clickOnRedDot = function() { console.log("press on ", this.attr('id') ) }
var touchstartRedDot = function() { console.log("touch start ", this.attr('id') ) }
var touchendRedDot = function() { console.log("touch end ", this.attr('id') ) }

