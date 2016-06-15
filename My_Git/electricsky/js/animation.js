var rhythm = 500 //ms, 
;
 
var tubes = []
  , animSvg
  , glow;



function initAnimation (obj) {
    animSvg = Snap(obj.blck); 
    rhythm = obj.rhythm * 1000;
    glow = animSvg.filter(Snap.filter.shadow(0, 4, 3, '#99f'));
var deskpattern = animSvg.line(0, 10, 0, 0).attr({
        fill: "none",
        stroke: "#333",
        strokeWidth: 2
    }).pattern(0, 0, 10, 10);

drawObjects();
Snap.select('#signdesk').attr({fill : deskpattern})


};//end of init function

function lightTube(idtubeN) {
 if (idtubeN > (tubes.length-1)) {
  return;
 }
 
 tubes[idtubeN].initDraw();
 tubes[idtubeN].callOnFinished = function(){
  
  // console.log(idtubeN,tubes.length);
     Snap.select("#tube"+idtubeN)
     .attr({stroke : 'rgba(190,215,250,0.85)', filter: glow})
     // .attr({stroke : 'rgba(50,50,75,0.85)'})
     .animate({ 'stroke-width' : 4 },50, function(){idtubeN++; lightTube(idtubeN)})
   }
}

function drawObjects()
    {
      for (var j in objects)
        { animSvg.add(Snap.parse(objects[j]))
        };

      for (var i in tubesPath)
        {
           // animSvg.add(Snap.parse(tubesPath[j]));
           tubes[i] = new lightning (tubesPath[i], '', 50);
           // console.log(i);
           if ( i == tubesPath.length-1) lightTube(0);
        }
        
       }



function lightning( svgString, transformString, timeBetweenDraws ) {
    this.fragment = Snap.parse( svgString );
    this.pathArray = this.fragment.selectAll('path');
    this.group = animSvg.g().transform( transformString ).drag();
    this.timeBetweenDraws = timeBetweenDraws;
};

lightning.prototype.init = function( svgString, transformString ) {
      this.group.clear();
      this.currentPathIndex = 0;

};

lightning.prototype.endReached = function() {
    if( this.currentPathIndex >= this.pathArray.length ) {
        return true;
    };
};

lightning.prototype.callOnFinished = function() {
}

lightning.prototype.initDraw = function() {
    this.init();
    this.draw();
};

lightning.prototype.quickDraw = function() {
    this.init();
    this.timeBetweenDraws = 0;
    this.draw();
};

lightning.prototype.draw = function() {         // this is the main animation bit
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
       fill: '#fff',
       "fill-rule" : "nonzero",
       "stroke-linejoin" : "round",
       "stroke-linecap" : "round",
       "stroke-dasharray": this.leng + " " + this.leng,
       "stroke-dashoffset": this.leng
     });

     this.currentPathIndex++;

     myPath.animate({"stroke-dashoffset": 0}, this.timeBetweenDraws, mina.easeout, this.draw.bind( this ) );

};


