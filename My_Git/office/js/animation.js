var rhythm = 3000, timeKnee=4;




mina.easeInOutQuad = function (n) {//easing calculate
  if ( ( n *= 2 ) < 1 ) return 0.5 * Math.pow( n, 2 );
  return -0.5 * ( ( --n ) * ( n - 2 ) - 1 );
};

  
function Drawing( svgString, transformString, timeBetweenDraws, fillColor ) {
    this.fragment = Snap.parse( svgString );
    this.pathArray = this.fragment.selectAll('path');
    this.fillColor = fillColor;
    this.group = animSvg.g().transform( transformString );
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

// Drawing.prototype.quickDraw = function() {
//     this.init();
//     this.timeBetweenDraws = 0;
//     this.draw();
// };

Drawing.prototype.draw = function() {         // this is the main animation bit
    if( this.endReached() ) {
        if( this.callOnFinished ) {
            var myPath = this.pathArray[ this.currentPathIndex-1 ] ;
            console.log(this.fillColor);
            myPath.attr({fill: this.fillColor}); //coloring after contour grawing
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
           kneeR, pants, mug, leftHand, GhaziFace, GhaziSmile, GhaziMoustache, fingersOnMug0;

function initAnimation (obj) {
    animSvg = Snap(obj.blck); 
    rhythm = obj.rhythm * 1000;

animSvg.add(Snap.parse(floor));//add underwindow and floor
animSvg.add(Snap.parse(windw));//add underwindow and floor
  

carpet = animSvg.path(carpetD).attr({fill:'#A2C3BE'});/*carpet*/
 brand[0] = animSvg.path(brandNameD).transform("t0,-5").attr({fill:'#8FB4B4'});/*brandName*/
 brand[1] = animSvg.path(brandNameD).transform("t0,-5").attr({fill:'#ABC9C5'}).animate({ transform: 't0,0' }, 300, mina.easeInOutQuad);/*brandName*/

animSvg.add(Snap.parse(chears));//add chears


      for (var j in Ghazi[0])
        {
          // var temp =  Snap.parse(Ghazi[0][j]);//Add stady Ghazy
          // console.log(temp);
          // temp.node.attr();
          // temp.addClass();
          animSvg.add(Snap.parse(Ghazi[0][j]));//Add stady Ghazy
        }
 
kneeR = animSvg.select('#kneeR');
pants = animSvg.select('#pants');
// kneeAnimation();



        for (var i in dashing)
          { 
            dashi[i] = new Drawing( dashing[i].teg, '', dashing[i].time, dashing[i].fill);
          };
          dashi[0].initDraw(); 
          dashi[0].callOnFinished = function() {dashi[1].initDraw(); }; 


          // dashi[1].callOnFinished = function() { dashi[2].initDraw();}; //draw chear
          dashi[1].callOnFinished = function() { drawObjects()}; 

// GhaziFace = Snap.selectAll('.Ghaziface').forEach(function(element, index) {
//     element.attr({cursor : "pointer"}).hover(GhaziMouseOn, GhaziMouseOff); 
// });

GhaziFace = animSvg.ellipse(715, 438, 46, 70).attr({opacity:0,cursor : "pointer"}).hover(GhaziMouseOn, GhaziMouseOff); //ellipse for face hover effect
GhaziMoustache = Snap.select('#moustache');
leftHand = animSvg.path(rHand).addClass('fil2');
GhaziSmile = animSvg.path('M723 473c1,0 2,1 1,2 -5,2 -12,2 -17,0 -1,-1 0,-2 1,-2 5,2 10,2 15,0z').addClass('fil2').transform('s0').attr({opacity:0});
mug = animSvg.path(mugD)
              .attr({stroke:'#1FB1E9', 'stroke-width':1, fill : '#1FB1E9', 'fill-rule' : "evenodd", cursor : "pointer"})
              .hover(mugMouseOn, mugMouseOff)
              .click(mugClick);
mugInsude = animSvg.ellipse(907, 593, 19, 2).attr({'stroke-width' : 0, fill:"#4B89B6"});
// fingersOnMug0 = animSvg.path('M884 604l8 0c3,0 5,2 5,5l0 0c0,2 -2,4 -5,4l-8 0c-3,0 -5,-2 -5,-4l0 0c0,-3 2,-5 5,-5zM931 633c3,0 5,2 5,4l0 0c0,2 -2,4 -5,4l-8 0c-2,0 -4,-2 -4,-4l0 0c0,-2 2,-4 4,-4 -2,0 -4,-2 -4,-5l0 0c0,-2 2,-4 4,-4 -2,0 -4,-2 -4,-4l0 0c0,-3 2,-5 4,-5 -2,0 -4,-2 -4,-4l0 0c0,-3 2,-5 4,-5l8 0c3,0 5,2 5,5l0 0c0,2 -2,4 -5,4 3,0 5,2 5,5l0 0c0,2 -2,4 -5,4 3,0 5,2 5,4l0 0c0,3 -2,5 -5,5z').addClass('fil2').attr({'opacity':0});
fingersOnMug0 = animSvg.path(GhaziFingers[0]).addClass('fil2').attr({'opacity':0});
};//end of initAnimation function.attr({'opacity':0});

function mugClick(){console.log('mugClick');
time = 1800;
  mugInsude.attr({'opacity':0});
  // leftHand.animate({d:'M776 598l-55 -79c-5,-8 -2,-19 6,-24 8,-5 19,-2 24,6l55 79c5,8 2,19 -6,24 -8,5 -19,2 -24,-6z'},time,mina.easeInOutQuad, function(){mug.animate({d:rHand},time,mina.easeInOutQuad)});
  // leftHand.animate({d:'M751 500l54 79c6,8 4,19 -4,24l0 0c-8,6 -19,4 -25,-4l-54 -79c-6,-8 -4,-19 4,-25l0 0c8,-5 19,-3 25,5z'},time,mina.easeInOutQuad, function(){mug.animate({d:rHand},time,mina.easeInOutQuad)});
  mug.animate({d:'M729 527c0,1 -7,2 -16,2 -9,0 -16,-1 -16,-2l-2 -13c0,-7 -1,-16 -3,-28 0,-1 0,-8 0,-8 0,-1 9,-2 21,-2 12,0 21,1 21,2 0,0 -5,49 -5,49zm-36 -37l2 20c-1,-6 -1,-10 -2,-20z'},time,mina.easeInOutQuad, function(){mug.animate({d:mugD},time,mina.easeInOutQuad,function(){mugInsude.attr({'opacity':1});})})
  fingersOnMug0.animate({d:GhaziFingers[1]},time,mina.easeInOutQuad, function(){fingersOnMug0.animate({d:GhaziFingers[0]},time,mina.easeInOutQuad,function(){})})
}
function kneeAnimationStart() //4 constant animation
    {//console.log('kneeAnimationStart',rhythm);
      {
        kneeR.animate({ d: 'M628 699l63 175c2,3 3,6 3,10 0,13 -11,23 -24,23 -10,0 -19,-7 -22,-15l-63 -176c-2,-3 -3,-6 -3,-10 0,-12 11,-23 24,-23 10,0 19,7 22,16z' }, rhythm, mina.easeInOutQuad);
        pants.animate({ d: 'M603 729l226 0 0 0c14,0 25,-11 25,-25 0,-13 -11,-25 -25,-25l0 0 -226 0c-14,0 -25,12 -25,25 0,14 11,25 25,25z' }, rhythm, mina.easeInOutQuad, kneeAnimation);
        timeKnee--;
      }

    }
function kneeAnimation() //4 constant animatiob
  {//console.log('kneeAnimation');
    if (timeKnee !== 0) 
      {
        kneeR.animate({ d: Ghazi[1].kneeR }, rhythm, mina.easeInOutQuad);
        pants.animate({ d: Ghazi[1].pants }, rhythm, mina.easeInOutQuad, kneeAnimationStart);
      }
      else 
      {setTimeout(function(){timeKnee = 5; console.log(timeKnee); kneeAnimation()},1000)}
  }

function mugMouseOn()
{
  // leftHand.stop().animate({d:'M904 642l-72 0c-10,0 -18,-8 -18,-17l0 0c0,-10 8,-18 18,-18l72 0c10,0 18,8 18,18l0 0c0,9 -8,17 -18,17z'},200,mina.easeinout, function(){fingersOnMug0.attr({opacity:1})});
  leftHand.stop().animate({d:'M904 642l-72 0c-10,0 -18,-8 -18,-17l0 0c0,-10 8,-18 18,-18l72 0c10,0 18,8 18,18l0 0c0,9 -8,17 -18,17z'},200,mina.easeinout, function(){fingersOnMug0.attr({opacity:1})});
}

function mugMouseOff()
{ 
  fingersOnMug0.attr({opacity:0});
  leftHand.stop().animate({d:rHand}, 100, mina.linear);
}

function GhaziMouseOn()
{   GhaziSmile.attr({opacity:1});
     GhaziSmile.animate({transform : 't0,-1s1'}, 300, mina.easeinout);
    GhaziMoustache.animate({d:'M691 470l0 4c6,0 9,0 14,-3 2,-2 9,-6 8,-10 -2,-1 -3,-3 -3,-6l0 0c-8,1 -18,6 -19,15zM741 469l0 4c-6,1 -9,0 -14,-2 -3,-2 -9,-6 -9,-10 3,-1 4,-3 4,-6l0 0c7,1 18,5 19,14z'},200,mina.easeinout);
}
function GhaziMouseOff()
{   
    GhaziSmile.animate({transform : 's0'}, 200, mina.linear, function(){GhaziSmile.attr({opacity:0})});
    GhaziMoustache.animate({d:Ghazi[0].moustache}, 200, mina.easeinout);
}

function drawObjects()
    {
      for (var j in objects)
        { var temp = Snap.parse(objects[j]);
          // console.log(temp);
          // temp.attr({'opacity' : 0.5});
          animSvg.add(temp)
        }
    }

