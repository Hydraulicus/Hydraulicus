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
    drawObjects(hexagonSvg, hexcovers);
    bindingHandling();

    // tring();
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


function bindingHandling(){

  Snap.selectAll(".hexcover").forEach( function(element) 
      {
        // console.log(element);
        element
            .attr({cursor : "pointer"})
            .hover(hoveroversegment, hoveroutsegment)
            .click(segmentClick)
            ;
      })
}

// function tring(){
//   Snap.select("#pp-segment_0").click(function()
//     {
//       this.animate({"d" : "M468.02,540.73L312.82,272h309.86c0.01,4-0.87,6.78-2.65,9.86L474.52,533.89C472.9,536.68,470.66,539.06,468.02,540.73"}, 350, mina.backout
//       // this.animate({"d" : "M468 541l-48 -83c4,-10 -61,-123 -74,-146 -19,-36 28,-38 74,-36 41,2 103,-1 107,-4l96 0c0,4 -1,7 -3,10l-145 252c-2,3 -4,5 -7,7z"}, 150, mina.easinout
//           , function()
//                 {
//                         // this.animate({"d" : "M468 541l-48 -83c-12,-22 -89,-154 -104,-181 -3,-5 -3,-5 10,-5 41,1 180,0 201,0l96 0c0,4 -1,7 -3,10l-145 252c-2,3 -4,5 -7,7z"}, 750, mina.backout);
//                 }

//         );

//     })
// }
var segmentClick = function() {
  //animate to full hexagon
  var targetId=this.attr("id");
  console.log(targetId);
  var g = hexagonSvg.g();
  var clone = Snap.select("#"+targetId+"-segment").clone();
  g.add(clone);
  clone.animate({"d" : "M468 541c0,0 0,0 0,0 -3,2 -7,3 -10,3l-292 0c-3,0 -6,-1 -9,-2l0 0 0 0c-3,-2 -6,-5 -8,-8l-146 -252c-2,-3 -3,-7 -3,-10l0 0 1 0c0,-3 1,-7 3,-10l145 -252c2,-3 5,-6 8,-8l156 270 0 0 0 0 155 -269c3,2 5,4 7,7l145 252c2,3 3,7 3,10 0,4 -1,7 -3,10l-145 252c-2,3 -4,5 -7,7l0 0zm-155 -269l-156 -270c0,0 0,0 0,0 3,-1 6,-2 9,-2l292 0c3,0 7,1 10,3l-155 269z"}, 150, mina.easiinout);
  clone.click(cloneClick);
}

var cloneClick = function () {
  this.animate({"opacity" : 0}, rhythm, function(){this.remove();})
  
}

function hoveroversegment () { 
      var that = this,
          targetId=that.attr("id"),
          target = Snap.select("#"+targetId+"-segment");
      // console.log(target);
      target
      // .data("oldD", target.attr("d"))
            .stop()
            .animate({d : segmentcontours[targetId]}, rhythm*0.5, mina.easinout);
      
  };
 function hoveroutsegment() { 
      // var that = this,
      // targetId=that.attr("id"),
      // target = Snap.select("#"+targetId+"-segment"),
      // oldD = target.data("oldD");
      // console.log(oldD);
      // console.dir(Snap.selectAll(".segments"));
      // target.attr({d : initialsegmentcontours[targetId]});
      Snap.selectAll(".segments").forEach( function (element) { 
        // Snap.select("#"+targetId+"-segment");
        var targetId = element.attr("id");
        // console.log(targetId.split("-"));
        // element.stop().animate({d : initialsegmentcontours[targetId.split("-")[0]]}, rhythm*0.5, mina.easinout); 
        element.attr({d : initialsegmentcontours[targetId.split("-")[0]]}); 
      }) 
  };

function infinityAnimation(object_, D){
      console.log("infinityAnimation");
    var savedD = object_.attr("d");
    // console.log(savedD)
    object_.animate({"d" : D}, 1000, mina.easinout, function() 
      { 
            // object_.animate({"d" : "M468 541l-48 -83c2,-2 3,-3 4,-5l101 -174c1,-2 2,-4 2,-7l96 0c0,4 -1,7 -3,10l-145 252c-2,3 -4,5 -7,7z"}, 1000, mina.backin, function() 
            {
              infinityAnimation(object_, savedD); 
            }
            // );
      } );
}
