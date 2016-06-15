var rhythm = 50 //ms,
,firsttiming = 200
,tubeColor = 'rgba(180,205,250,0.85)'
,darckTube = 'rgba(10, 10, 10,0.15)'
;
 
var tubes = []
  , animSvg
  , glow;



function initAnimation (obj) {
    animSvg = Snap(obj.blck); 
    rhythm = obj.rhythm * 1000;
    firsttiming = obj.firsttiming * 1000;

    glow = animSvg.filter(Snap.filter.shadow(0, 4, 4, '#99f'));
var deskpattern = animSvg.line(0, 10, 0, 0).attr({
        fill: "none",
        stroke: "#333",
        strokeWidth: 2
    }).pattern(0, 0, 10, 10);

drawObjects();
Snap.select('#signdesk').attr({fill : deskpattern})


};//end of init function

// function lightTube(idtubeN) {
//  if (idtubeN > (tubes.length-1)) {
//   return;
//  }
 
//  tubes[idtubeN].initDraw();
//  tubes[idtubeN].callOnFinished = function(){
  
//   // console.log(idtubeN,tubes.length);
//      Snap.select("#tube"+idtubeN)
//      .attr({stroke : 'rgba(190,215,250,0.85)', filter: glow})
//      .animate({ 'stroke-width' : 5 },rhythm, function(){idtubeN++; lightTube(idtubeN)})
//    }
// }


function blincing(obj, N, timing){
  // console.log(N,timing);
  if ( N == 0 ) return;
  // var that = this;
  N--;
  obj.animate({ 'stroke' : darckTube }, 20, function ()
       {
          obj.animate({ 'stroke' : tubeColor }, timing, function() 
            {
              blincing(obj, N, timing)
            }) 
       })


}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function newlightTube(idtubeN) {
 if (idtubeN > (tubesPath.length-1)) {
  // thinWhiteStroce(); 
  return }
 
  // console.log(idtubeN,tubesPath.length);
  var contour =  Snap.select("#tube"+idtubeN);
    contour.removeClass("neontubes")
     .attr({
            "fill" : 'rgba(250, 250, 255, 1)',
       "fill-rule" : "nonzero",
       'stroke-width' : 4.5,
       "stroke-linejoin" : "round",
       "stroke-linecap" : "round",
       "stroke-dashoffset": 0,
        stroke : darckTube, 
        filter : glow,
        opacity : 0.95
        });
     

     if ( getRandomInt(1,4) == 1 ) { blincing(contour, getRandomInt(2,10), getRandomInt(50,2000)); }
      else 
        {

          contour.animate({ 'stroke' : tubeColor }, rhythm*10); 
          // contour.attr({"fill" : '#ffffff'})
        }
     

            idtubeN++; newlightTube(idtubeN);
// 
}
 
// function thinWhiteStroce(){
//    for (var i in tubesPath)
//         {
//            animSvg.add(Snap.parse(tubesPath[i])); 
//            if ( i == tubesPath.length-1) { animSvg.selectAll('.neontubes').forEach(function(elem){elem.removeClass('neontubes').addClass('neontubesinside');}) } 
//         }

 

// }

function drawObjects()
    {
      for (var j in objects)
        { animSvg.add(Snap.parse(objects[j]))
        };

      for (var i in tubesPath)
        {
           animSvg.add(Snap.parse(tubesPath[i]));
           // tubes[i] = new lightning (tubesPath[i], '', 50);
           // console.log(i);
           // if ( i == tubesPath.length-1) lightTube(0);
           // if ( i == tubesPath.length-1) ;
        }
        setTimeout(function(){newlightTube(0)}, firsttiming)
       }



// function lightning( svgString, transformString, timeBetweenDraws ) {
//     this.fragment = Snap.parse( svgString );
//     this.pathArray = this.fragment.selectAll('path');
//     this.group = animSvg.g().transform( transformString ).drag();
//     this.timeBetweenDraws = timeBetweenDraws;
// };

// lightning.prototype.init = function( svgString, transformString ) {
//       this.group.clear();
//       this.currentPathIndex = 0;

// };

// lightning.prototype.endReached = function() {
//     if( this.currentPathIndex >= this.pathArray.length ) {
//         return true;
//     };
// };

// lightning.prototype.callOnFinished = function() {
// }

// lightning.prototype.initDraw = function() {
//     this.init();
//     this.draw();
// };

// lightning.prototype.quickDraw = function() {
//     this.init();
//     this.timeBetweenDraws = 0;
//     this.draw();
// };

// lightning.prototype.draw = function() {         // this is the main animation bit
//     if( this.endReached() ) {
//         if( this.callOnFinished ) {
//             this.callOnFinished();
//             return
//         };
//     };
//     var myPath = this.pathArray[ this.currentPathIndex ] ;

//     this.leng = myPath.getTotalLength();

//     this.group.append( myPath );

//      myPath.attr({
//        fill: '#fff',
//        "fill-rule" : "nonzero",
//        "stroke-linejoin" : "round",
//        "stroke-linecap" : "round",
//        "stroke-dasharray": this.leng + " " + this.leng,
//        "stroke-dashoffset": this.leng
//      });

//      this.currentPathIndex++;

//      myPath.animate({"stroke-dashoffset": 0}, this.timeBetweenDraws, mina.easeout, this.draw.bind( this ) );

// };


