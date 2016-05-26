var rhythm = 300, //ms, of knee shacking
    timeKneeShake=12;

      var brand = [],dashi = []
         ,clickFlag = false
         ,drinkOrYawn = true //flag - to show  drink coffe or Yawn
         ,timeKnee = timeKneeShake
         ,kneeR, pants, mug, leftHand, righthand, GhaziFace, GhaziSmile, GhaziMoustache, fingersOnMug0, GhaziSviter, GhaziElbow, GhaziSpich, GhaziFaceSet, myMatrix, myMatrix2, Secondsmile, SecondSpeech;

      // var toMouth = new Snap.Matrix(),
      //     orToMouth = new Snap.Matrix();

function initAnimation (obj) {
    animSvg = Snap(obj.blck); 
    rhythm = obj.rhythm * 1000;

    animSvg.add(Snap.parse(floor));//add underwindow and floor
    animSvg.add(Snap.parse(windw));//add underwindow and floor
  

carpet = animSvg.path(carpetD).attr({fill:'#A2C3BE'});/*carpet*/
 brand[0] = animSvg.path(brandNameD).transform("t0,-5").attr({fill:'#8FB4B4'});/*brandName*/
 brand[1] = animSvg.path(brandNameD).transform("t0,-5").attr({fill:'#ABC9C5'}).animate({ transform: 't0,0' }, 300, mina.easeInOutQuad);/*brandName*/

animSvg.add(Snap.parse(chears));//add chears

GhaziElbow = animSvg.circle(595, 625, 21).attr({opacity:1, id : 'elbow'}).addClass('fil1');

      for (var j in Ghazi[0]) 
        { animSvg.add(Snap.parse(Ghazi[0][j]));//Add stady Ghazy
        }
 
     for (var j in second) 
        { animSvg.add(Snap.parse(second[j]));//Add stady Second personag
        }

kneeR = animSvg.select('#kneeR');
pants = animSvg.select('#pants');
// kneeAnimation();
constantAnimation();

// GhaziFace = Snap.selectAll('.Ghaziface').forEach(function(element, index) {
//     element.attr({cursor : "pointer"}).hover(GhaziMouseOn, GhaziMouseOff); 
// });
GhaziFaceSet = animSvg.paper.g();

var faceGroup = Snap.selectAll('.Ghaziface').forEach(function(element, index) {GhaziFaceSet.add(element);  });

myMatrix = new Snap.Matrix();
myMatrix.scale(0.01, 0.01,  773, 415);
var orMatrix = new Snap.Matrix();
orMatrix.scale(1, 1,  773, 415);
myMatrix2 = new Snap.Matrix();
myMatrix2.scale(0.01, 0.01,  1150, 415);
var orMatrix2 = new Snap.Matrix();
orMatrix2.scale(1, 1,  1200, 415);



GhaziSviter = Snap.select('#ghazisviter');
righthand = Snap.select('#handr');
var spich1 = animSvg.path(Ghazi[3].speechOut).attr({stroke:'#ccc', fill : '#ccc', 'stroke-width':1});
var spich2 = animSvg.path(Ghazi[3].speechIn).attr({stroke:'#ccc', fill : '#fff', 'stroke-width':1});
var spich3 = animSvg.path(secondSpeech.outer).attr({stroke:'#ccc', fill : '#ccc', 'stroke-width':1});
var spich4 = animSvg.path(secondSpeech.inner).attr({stroke:'#ccc', fill : '#fff', 'stroke-width':1});
var spichCross1 = animSvg.path(Ghazi[3].speechCross)
                        .attr({stroke :'#ccc', fill : '#fff', 'stroke-width' : 3})
                        .attr({cursor : 'pointer'})
                        .click(function() { GhaziSpich.animate({transform : myMatrix}, 750,  mina.backin);})
                        ;
var spichCross2 = animSvg.path(secondSpeech.cross)
                        .attr({stroke :'#ccc', fill : '#fff', 'stroke-width' : 3})
                        .attr({cursor : 'pointer'})
                        .click(function() { SecondSpeech.animate({transform : myMatrix2}, 750,  mina.backin);})
                        ; 


GhaziSpich = animSvg.paper.g(spich1, spich2, spichCross1).transform(myMatrix).attr({'id' : 'speech1'});
GhaziFace = animSvg.ellipse(715, 438, 46, 70) //ellipse for face hover effect
                   .attr({opacity:0,cursor : "pointer"})
                   .hover(GhaziMouseOn, GhaziMouseOff)
                   .click(function() {console.log('click - open bubble'); GhaziSpich.animate({transform : orMatrix}, 1000,  mina.bounce);  document.body.addEventListener('click', fnClose, true);});
GhaziMoustache = Snap.select('#moustache');
leftHand = animSvg.path(lHand).addClass('fil2');
GhaziSmile = animSvg.path('M723 473c1,0 2,1 1,2 -5,2 -12,2 -17,0 -1,-1 0,-2 1,-2 5,2 10,2 15,0z').addClass('fil2').transform('s0').attr({opacity:0});
GhaziFaceSet.add(GhaziSmile); 
mug = animSvg.path(mugD)
              .attr({stroke:'#1FB1E9', 'stroke-width':1, fill : '#1FB1E9', 'fill-rule' : "evenodd"});
mugInsude = animSvg.ellipse(907, 593, 19, 2).attr({'stroke-width' : 0, fill:"#4B89B6"});
fingersOnMug0 = animSvg.path(GhaziFingers[0]).addClass('fil2').attr({'opacity':0});
// typingAnimation();

Secondsmile = Snap.select('#secondsmile');
SecondSpeech = animSvg.paper.g(spich3, spich4, spichCross2).transform(myMatrix2).attr({'id' : 'speech2'});
SecondFace = animSvg.ellipse(1215, 438, 46, 70) //ellipse for face hover effect
                   .attr({opacity:0,cursor : "pointer"})
                   .hover(SecondMouseOn, SecondMouseOff)
                   .click(function() { SecondSpeech.animate({transform : orMatrix2}, 1000,  mina.bounce);  document.body.addEventListener('click', fnClose, true);})
                   ;


        for (var i in dashing)
          { 
            dashi[i] = new Drawing( dashing[i].teg, '', dashing[i].time, dashing[i].fill);
          };
          dashi[0].initDraw(); 
          dashi[0].callOnFinished = function() {dashi[1].initDraw(); }; 

          // dashi[1].callOnFinished = function() { dashi[2].initDraw();}; //draw chear
          dashi[1].callOnFinished = function() { drawObjects()}; 



};//end of init function

function constantAnimation()
  { 
    if (timeKnee !== 0) 
      {
        kneeR.animate({ d : Ghazi[1].kneeR }, rhythm, mina.easeInOutQuad);
        pants.animate({ d : Ghazi[1].pants }, rhythm, mina.easeInOutQuad, kneeAnimationStart);
      }
      else 
      { if (drinkOrYawn) {handToMouth(); drinkOrYawn = false} else {mugClick(); drinkOrYawn = true}; 
        setTimeout(function(){timeKnee = timeKneeShake; constantAnimation()}, rhythm*5)
      }
  
  }


function mugClick(){
   var time = 800;
   leftHand.stop().attr({d:lHand});//Stop animation
   GhaziFaceSet.stop().transform('t0,0');//Stop animation
    animSvg.selectAll('path circle').forEach(function(element, index) {element.stop()  });//Stop all animation
    leftHand.stop().animate({d : Ghazi[1].lHand},200,mina.easeinout, function(){fingersOnMug0.attr({opacity:1}); setTimeout(function(){ mugDrink(time, function(){mugMouseOff()}) }, time*0.33)});
}

function mugDrink(time, callback){
  clickFlag = true;
  mugInsude.attr({'opacity':0});
  var stopTime = time*0.375;
  var frames = [Ghazi[1].lHand
  ,'M846 601c-17,17 -2,2 -19,19 -7,7 -18,7 -24,0l0 0c-7,-7 -7,-18 0,-25 17,-17 1,-2 18,-19 7,-7 18,-7 25,0l0 0c7,7 7,18 0,25z'
  ,'M818 552c0,25 0,19 0,44 0,9 -8,17 -18,17l0 0c-9,0 -17,-8 -17,-17 0,-25 0,-19 0,-44 0,-9 8,-17 17,-17l0 0c10,0 18,8 18,17z'
  ,'M750 500c14,20 43,58 57,77 6,8 4,19 -4,25l0 0c-8,5 -19,3 -25,-4 -13,-20 -43,-58 -56,-78 -6,-8 -4,-19 4,-24l0 0c8,-6 19,-4 24,4z'
  ],
  mugd = 'M729 527c0,1 -7,2 -16,2 -9,0 -16,-1 -16,-2l-2 -13c0,-7 -1,-16 -3,-28 0,-1 0,-8 0,-8 0,-1 9,-2 21,-2 12,0 21,1 21,2 0,0 -5,49 -5,49zm-36 -37l2 20c-1,-6 -1,-10 -2,-20z';
  
  leftHand.stop().animate({d:frames[1]}, time*0.235, mina.linear, 
    function(){ leftHand.stop().animate({d:frames[2]},time*0.15,mina.linear 
      , function(){ leftHand.stop().animate({d:frames[3]}, time*0.65, mina.easeOutQuad  
         ,function(){setTimeout(
        //back stroke
                       function(){ leftHand.stop().animate({d:frames[2]}, time*0.35, mina.easeInQuad
                        , function(){ leftHand.stop().animate({d:frames[1]}, time*0.2, mina.linear
                           , function(){ leftHand.stop().animate({d:frames[0]}, time*0.48, mina.easeOutQuad, callback);})})
                    }, stopTime)
        })
      })
     }
    );

  mug.animate({d:mugd},time,mina.easeOutQuad, 
    function(){
      setTimeout(function()
                  { mug.animate({d:mugD},time,mina.linear, 
                        function(){mugInsude.attr({'opacity':1});}
                        )
                  }, stopTime
                )
              }
              );
  GhaziSviter.stop().animate({d:Ghazi[3].sviter},time,mina.easeOutQuad);
  fingersOnMug0.animate({d:GhaziFingers[1]},time,mina.easeOutQuad,
        function(){
          setTimeout( 
              function(){fingersOnMug0.animate({d:GhaziFingers[0]}, time, mina.linear); GhaziSviter.stop().animate({d:Ghazi[2].sviter}, time, mina.easeout)}
                    , stopTime
                    )
                  }
                )
}

function handToMouth(){
  if (clickFlag) console.log(clickFlag);
    var stopTime = 3000, moveTime = rhythm*3;
    fingersOnMug0.attr({opacity:0}); 
    leftHand.animate({d : Ghazi[1].handToMouth}, moveTime, mina.backout, function(){setTimeout(function(){leftHand.animate({d : lHand}, moveTime, mina.easeInOutQuad)}, stopTime)}); 
    GhaziFaceSet.animate({transform : 't0,14'}, moveTime, mina.backout, function(){setTimeout(function(){GhaziFaceSet.animate({transform : 't0,0'}, moveTime*0.75, mina.easeInOutQuad)}, stopTime)}); 
}

function kneeAnimationStart() //4 constant animation
    {
        kneeR.animate({ d: 'M628 699l63 175c2,3 3,6 3,10 0,13 -11,23 -24,23 -10,0 -19,-7 -22,-15l-63 -176c-2,-3 -3,-6 -3,-10 0,-12 11,-23 24,-23 10,0 19,7 22,16z' }, rhythm, mina.easeInOutQuad);
        pants.animate({ d: 'M603 729l226 0 0 0c14,0 25,-11 25,-25 0,-13 -11,-25 -25,-25l0 0 -226 0c-14,0 -25,12 -25,25 0,14 11,25 25,25z' }, rhythm, mina.easeInOutQuad, function(){constantAnimation();});
        timeKnee--;
    }


function typingAnimation()
{ var time = rhythm*1.5;
  if (clickFlag) return;
  righthand.animate({transform : 'r1,755,625 '}, time, mina.easeinout, function(){righthand.animate({transform : 't0,0'}, time, mina.easeinout)});
  GhaziElbow.animate({transform : 't0,-4'}, time, mina.easeinout, function(){GhaziElbow.animate({transform : 't0,0'}, time, mina.easeinout, typingAnimation)});
}

function mugMouseOn()
{
  if (clickFlag) return 
  else 
  leftHand.stop().animate({d : Ghazi[1].lHand},200,mina.easeinout, function(){fingersOnMug0.attr({opacity:1})});
}

function mugMouseOff()
{  clickFlag = false; 
  GhaziFaceSet.stop().transform('t0,0');//Stop animation
    {
        fingersOnMug0.attr({opacity:0});
        leftHand.stop().animate({d : lHand}, 100, mina.linear);
    }
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

function SecondMouseOn()  {  Secondsmile.animate({d : 'M1224 474c1,-1 2,1 1,2 -7,5 -17,5 -24,0 -1,-1 0,-2 1,-2 7,5 16,5 22,0z'}, 300, mina.backout); }
function SecondMouseOff() {  Secondsmile.animate({d : 'M1207 477l13 0c0,0 1,1 1,2 0,0 -1,1 -1,1l-13 0c-1,0 -2,-1 -2,-1 0,-1 1,-2 2,-2z'}, 300, mina.backin);}

//close cpeech bubble when a user clicks outside of them
function fnClose () {
  console.log('Click - close bubble');
  GhaziSpich.animate({transform : myMatrix}, 750,  mina.backin); 
  SecondSpeech.animate({transform : myMatrix2}, 750,  mina.backin); 
  document.body.removeEventListener('click', fnClose, true);
}

// window.addEventListener('mouseup', function(event){ console.log('close event');
//   var box = document.getElementById('speech');
//   if (event.target != box && event.target.parentNode != box){
//         box.style.display = 'none';
//     }
// });



function drawObjects()
    {
      for (var j in objects)
        { 
          animSvg.add(Snap.parse(objects[j]))
        }
    }

