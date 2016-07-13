var rhythm = 300//ms
,hexagonSvg, bottomSvg
; 


function initAnimation (obj) {
    hexagonSvg = Snap(obj.hexagon); 
    bottomSvg = Snap(obj.bottombar); 
    rhythm = obj.rhythm * 1000;

    drawObjects(hexagonSvg, objects);
    drawObjects(bottomSvg, bottomBar);


    insertIconsInBar(bottomSvg, obj.hexagonSegmentsData);
    insertIconsInHex(hexagonSvg, obj.hexagonSegmentsData);
// var s = Snap("#svgout");
// var g = s.g();

// var image = g.image("tux.svg", 0,0, 200,200 );


// var tux = Snap.load("Dreaming_tux.svg", function ( loadedFragment ) {
//                                                 g.append( loadedFragment );
//                                                 g.hover( hoverover, hoverout );
//                                                 g.text(300,100, 'hover over me');
//                                         } );
};//end of init function




function drawObjects(target_, objects_)
    { 
      for (var j in objects_)
        { 
          target_.add(Snap.parse(objects_[j]))
        }
   }

function insertIconsInBar(target_, icons4insert)
{ var i=0;
  var arrayofIcoPlacess = Snap.selectAll(".bottomiconplace").forEach( function(element)
        {
              // console.log(i);
              // console.log(element.getBBox());
            var icoBox = element.getBBox();
            var  x = icoBox.x + ( icoBox.w - icoBox.r0 ) * 0.5,
                 y = icoBox.y + ( icoBox.h - icoBox.r0 ) * 0.5,
                 h = icoBox.r0;
            target_.image(icons4insert[i]["pathToIco"], x, y, h, h);
            i++;
            target_.circle(icoBox.cx, icoBox.cy, icoBox.r1 * 1.2) // cover circle. need for bind events
                    .attr({fill : "#F1F1F1", opacity : 0.7, stroke : "black", "stroke-width" : 0, cursor : "pointer"})
                    .hover(hoverover, hoverout)
                    ;
        })
}

function insertIconsInHex(target_, icons4insert)
{ var i=0;
  var arrayofIcoPlacess = Snap.selectAll(".bottomiconplaceinhex").forEach( function(element)
        {
              // console.log(i);
              // console.log(element.getBBox());
            var icoBox = element.getBBox();
            var  x = icoBox.x + ( icoBox.w - icoBox.r0 ) * 0.5,
                 y = icoBox.y + ( icoBox.h - icoBox.r0 ) * 0.5,
                 h = icoBox.r0;
            target_.image(icons4insert[i]["pathToIco"], x, y, h, h);
            i++;
            target_.circle(icoBox.cx, icoBox.cy, icoBox.r1 * 1.2) // cover circle. need for bind events
                    .attr({fill : "#F1F1F1", opacity : 0.01, stroke : "black", "stroke-width" : 0, cursor : "pointer"})
                    // .hover(hoverover, hoverout)
                    ;
        })
}

var hoverover = function() { this.attr({fill : "rgba(200, 200, 200, 0.01)", opacity : 1, stroke : "black", "stroke-width" : 1}) };
var hoverout = function() { this.attr({fill : "#F1F1F1", opacity : 0.7, stroke : "#F1F1F1", "stroke-width" : 0}) };