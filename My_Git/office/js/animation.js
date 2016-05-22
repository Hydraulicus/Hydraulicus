var rhythm = 3000, timeKnee=4;




mina.easeInOutQuad = function (n) {//easing calculate
  if ( ( n *= 2 ) < 1 ) return 0.5 * Math.pow( n, 2 );
  return -0.5 * ( ( --n ) * ( n - 2 ) - 1 );
};

  
function Drawing( svgString, transformString, timeBetweenDraws ) {
    this.fragment = Snap.parse( svgString );
    this.pathArray = this.fragment.selectAll('path');
    this.group = animSvg.g().transform( transformString ).drag();
    this.timeBetweenDraws = timeBetweenDraws;
};

Drawing.prototype.init = function( svgString, transformString ) {
      this.group.clear();
      this.currentPathIndex = 0;

};

Drawing.prototype.endReached = function() {
    if( this.currentPathIndex >= this.pathArray.length ) {
        return true;
    };
};

Drawing.prototype.callOnFinished = function() {
}

Drawing.prototype.initDraw = function() {
    this.init();
    this.draw();
};

Drawing.prototype.quickDraw = function() {
    this.init();
    this.timeBetweenDraws = 0;
    this.draw();
};

Drawing.prototype.draw = function() {         // this is the main animation bit
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
       fill: 'transparent', "opacity" : 1,
       "stroke-dasharray": this.leng + " " + this.leng,
       "stroke-dashoffset": this.leng
     });
     this.currentPathIndex++;
     myPath.animate({"stroke-dashoffset": 0}, this.timeBetweenDraws, mina.easeout, this.draw.bind( this ) );

  };


 
      var brand = []
           ,dashi = [],
           kneeR, pants;

function initAnimation (obj) {
    animSvg = Snap(obj.blck); 
    rhythm = obj.rhythm * 1000;

animSvg.add(Snap.parse(floor));//add underwindow and floor
animSvg.add(Snap.parse(windw));//add underwindow and floor
  

carpet = animSvg.path(carpetD).attr({fill:'#A2C3BE'});/*carpet*/
 brand[0] = animSvg.path(brandNameD).transform("t0,-5").attr({fill:'#8FB4B4'});/*brandName*/
 brand[1] = animSvg.path(brandNameD).transform("t0,-5").attr({fill:'#ABC9C5'}).animate({ transform: 't0,0' }, 300, mina.easeInOutQuad);/*brandName*/

            
  // for (var i in Ghazi)
    // { 

      for (var j in Ghazi[0])
        {

          animSvg.add(Snap.parse(Ghazi[0][j]));//Add stady Ghazy
        }
    // }

kneeR = animSvg.select('#kneeR');
pants = animSvg.select('#pants');
kneeAnimation();



        for (var i in dashing)
          { 
            dashi[i] = new Drawing( dashing[i].teg, '', dashing[i].time );
          };
          dashi[0].initDraw(); 
          dashi[0].callOnFinished = function() {dashi[1].initDraw(); document.getElementById(dashing[0].id).setAttribute("fill",dashing[0].fill)
            // document.getElementById(dashing[0].id).className +=
            }; 
};//end of initAnimation function

function kneeAnimationStart(){//console.log('kneeAnimationStart',rhythm);

  {kneeR.animate({ d: 'M628 699l63 175c2,3 3,6 3,10 0,13 -11,23 -24,23 -10,0 -19,-7 -22,-15l-63 -176c-2,-3 -3,-6 -3,-10 0,-12 11,-23 24,-23 10,0 19,7 22,16z' }, rhythm, mina.easeInOutQuad);
  pants.animate({ d: 'M603 729l226 0 0 0c14,0 25,-11 25,-25 0,-13 -11,-25 -25,-25l0 0 -226 0c-14,0 -25,12 -25,25 0,14 11,25 25,25z' }, rhythm, mina.easeInOutQuad, kneeAnimation);
timeKnee--;}

}
function kneeAnimation(){//console.log('kneeAnimation');
if (timeKnee !== 0) 
  {
    kneeR.animate({ d: Ghazi[1].kneeR }, rhythm, mina.easeInOutQuad);
    pants.animate({ d: Ghazi[1].pants }, rhythm, mina.easeInOutQuad, kneeAnimationStart);
  }
  else 
  {setTimeout(function(){timeKnee = 5;console.log(timeKnee); kneeAnimation()},5000)}
}
