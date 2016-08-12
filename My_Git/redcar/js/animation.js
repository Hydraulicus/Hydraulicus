var rhythm 
   ,carWheel = []
  ; 

function initAnimation (obj) {
    rhythm = obj.rhythm * 1000 || 300; //ms
    var carSvg = Snap(obj.svgTag); 
    drawObjects(carSvg, objects) 
};//end of init function

function drawObjects(target_, objects_, callback)
    { console.log("drawObjects");
      var arrLength = objects_.length-1;
      var gathered = objects_.reduce(function(sum, current, index) 
              {
                if (index == arrLength) { setTimeout( callback, 100); }
                return sum + current;
              }, 0);
      target_.add(Snap.parse(gathered));
   }

function startMoving () {
  console.log("startMoving");
  carWheel = Snap.selectAll(".wheels").forEach( function(element) 
    { 
      var carWheelCenter = element.getBBox();
      element.stop().animate({transform : "r360, "+carWheelCenter.cx +", "+ carWheelCenter.cy }, rhythm * 3, mina.easeInQuad, constantMoving )
    } );
  var redCar = Snap.select("#redcar");
  var carBox = redCar.getBBox();
  redCar.animate({transform : "r2, "+carBox.cx +", "+ carBox.cy }, rhythm, mina.easeinout, function () 
    {
      redCar.stop().animate({transform : "r0, "+carBox.cx +", "+ carBox.cy }, rhythm * 5, mina.easeinout )
    });
  Snap.select("#obects4shift").animate({transform : "t1500,0" }, rhythm * 2, mina.easeInQuad );
}


function constantMoving () {
  console.log("constantMoving");
   carWheel.forEach( function(element) 
      { 
        element.addClass("wheelRotation");
      } );

}

mina.easeInQuad = function (n) {
  return Math.pow( n, 2 );
};
mina.easeOutQuad = function(n) {
  return -1 * n * ( n - 2 );
};
mina.easeInOutQuad = function (n) {//easing calculate
  if ( ( n *= 2 ) < 1 ) return 0.5 * Math.pow( n, 2 );
  return -0.5 * ( ( --n ) * ( n - 2 ) - 1 );
};
