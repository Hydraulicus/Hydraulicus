
var signature = [
   '<path class="fil1 str2" d="M212 103l5 1c-7,-3 -21,-5 -25,-2 -2,2 -2,5 1,7 11,7 35,6 34,-3 -1,-9 -11,-13 -17,-21 -1,-1 1,-3 5,-1 5,2 9,4 12,7"/>'
  ,'<path class="fil1 str2" d="M236 103c2,1 4,2 5,4 1,1 3,3 1,4 -2,0 -4,-1 -6,-3 0,0 0,-3 1,-3 4,-2 15,0 22,-1"/>'
  ,'<path class="fil1 str2" d="M266 100c9,-4 17,-17 2,-10 -6,3 -15,15 -5,18 10,4 22,-2 26,-3 0,-1 3,-3 3,-3 -2,3 -4,13 6,8 8,-4 9,-6 9,-6 5,18 20,-25 12,-6 -13,28 14,5 16,6 0,1 1,2 2,2 1,1 12,6 15,-3 6,0 9,12 3,8 -3,-2 -5,-8 0,-6 3,1 20,-1 20,-1 -1,12 0,4 6,0 2,-2 9,-9 10,5"/>'
  ,'<path class="fil1 str2" d="M402 100c-11,1 10,14 1,13 -1,0 -7,-2 -7,-2"/>'
  ,'<path class="fil1 str2" d="M341 93c0,0 1,-1 1,-1"/>'
  ,'<path class="fil1 str2" d="M302 98c23,-1 45,-3 69,-4 0,0 1,0 1,0"/>'
];
var brandName = [
                  '<path class="brand" d="M197 64l1 -29c3,-2 10,-10 14,-4 4,7 -8,15 -14,21"/>' //P
                  ,'<path class="brand" d="M214 41c0,7 0,13 0,20l11 -5"/>' //L
                  ,'<path class="brand" d="M230 41c0,6 0,7 0,13 1,6 9,6 12,0l0 -15"/>' //U
                  ,'<path class="brand" d="M248 59l0 -16c2,3 5,6 7,9l9 -9 0 16"/>' //M
                  ,'<path class="brand" d="M270 45c1,-2 4,-4 5,-4 3,-1 4,2 3,5 -2,2 -5,4 -8,6 M269 60, L270 40, M270 59c5,1 10,-3 12,-8 0,-2 -1,-5 -4,-5"/>' //b
                  ,'<path class="brand" d="M314 41c-5,4 -10,8 -15,12l17 11M302 31c0,11 -1,22 -1,32"/>' //part of K
                  ,'<path class="brand" d="M324 41c-3,2 -5,3 -8,5l0 13c5,-1 10,-3 14,-5M312 55c4,-2 8,-3 11,-5"/>' //E
                  ,'<path class="brand" d="M345 38l0 21c-5,-5 -9,-10 -14,-15l0 16"/>' //N
                  ,'<path class="brand" d="M351 44l0 16c4,-3 8,-6 11,-9 4,-3 3,-10 -3,-9l-8 4"/>' //D
                  ,'<path class="brand" d="M366 65c2,-8 4,-15 5,-22l8 17M362 59c5,-1 10,-2 15,-3"/>' // A
                  ,'<path class="brand" d="M384 43c0,6 0,13 0,19l8 -4"/>' //L
                  ,'<path class="brand" d="M398 43c0,6 0,13 0,19l8 -4"/>' //L
                ];
var pendulum = [ 'M407 -677c0,-10 -46,-19 -118,-25l0 -84 0 0 0 -24c0,-10 -75,-18 -168,-18 -93,0 -168,8 -168,18l0 24 0 84c-72,6 -118,15 -118,25l0 165c0,-16 128,-30 286,-30 158,0 286,14 286,30l0 -165zm0 -135l0 -167c0,-10 -50,-19 -125,-25 -10,-42 -45,-77 -93,-94l0 -255c-36,-28 -92,-30 -137,0l0 255c-47,17 -82,52 -92,94 -76,6 -126,15 -126,25l0 169 1 0c0,-17 128,-30 286,-30 152,0 277,12 286,28zm-454 300l0 25 0 183c-273,171 -275,353 -233,503l401 1320 401 -1320c42,-150 40,-332 -233,-503l0 -183 0 -25c0,-9 -75,-18 -168,-18 -93,0 -168,9 -168,18z'// phase 0
                ,"M158 -37c0,-1 -8,-3 -20,-4l0 -14 0 0 0 -4c0,-1 -12,-3 -28,-3 -15,0 -28,2 -28,3l0 4 0 14c-12,1 -19,3 -19,4l0 28c0,-3 21,-5 47,-5 27,0 48,2 48,5l0 -28zm0 -22l0 -28c0,-1 -8,-3 -21,-4 -2,-7 -7,-13 -15,-16l0 -42c-6,-5 -16,-5 -23,0l0 42c-8,3 -14,9 -16,16 -12,1 -20,3 -20,4l0 28 0 0c0,-2 21,-5 47,-5 26,0 46,2 48,5zm-76 50l0 4 0 31c-45,28 -46,59 -39,84l67 220 67 -220c7,-25 7,-56 -39,-84l0 -31 0 -4c0,-2 -12,-3 -28,-3 -15,0 -28,1 -28,3z" // phase 1
                ,"M135 68c0,-1 -3,-1 -8,-2l0 -5 0 0 0 -2c0,-1 -5,-1 -11,-1 -6,0 -11,0 -11,1l0 2 0 5c-5,1 -8,1 -8,2l0 11c0,-1 8,-2 19,-2 10,0 19,1 19,2l0 -11zm0 -9l0 -11c0,-1 -4,-1 -9,-2 0,-2 -3,-5 -6,-6l0 -17c-2,-1 -6,-2 -9,0l0 17c-3,1 -5,4 -6,6 -5,1 -8,1 -8,2l0 11 0 0c0,-1 8,-2 19,-2 10,0 18,1 19,2zm-30 20l0 1 0 12c-18,12 -18,24 -16,34l27 87 26 -87c3,-10 3,-22 -15,-34l0 -12 0 -1c0,-1 -5,-1 -11,-1 -6,0 -11,0 -11,1z"//phase 2
                ,"M131 46c0,0 -2,0 -5,0l0 -4 0 0 0 -1c-1,0 -3,0 -7,0 -4,0 -7,0 -7,0l0 1 0 4c-4,0 -5,0 -6,0l0 8c2,0 6,0 13,0 7,0 11,0 12,0l0 -8zm0 -5l0 -8c-1,0 -2,0 -5,0 -1,-2 -2,-3 -4,-4l0 -11c-2,-2 -4,-2 -6,0l0 11c-2,1 -4,2 -4,4 -4,0 -5,0 -6,0l0 8 0 0c2,0 6,0 13,0 7,0 11,0 12,0zm-19 13l0 2 0 8c-12,7 -12,15 -11,21l18 58 17 -58c2,-6 2,-14 -10,-21l0 -8 0 -2c-1,0 -3,0 -7,0 -4,0 -7,0 -7,0z"//original size - phase 3
                ,"M133 43c0,0 -1,0 -3,0l0 -2 0 0 0 -1c-1,0 -2,0 -5,0 -2,0 -4,0 -4,0l0 1 0 2c-2,0 -3,0 -3,0l0 5c0,0 3,0 7,0 5,0 7,0 8,0l0 -5zm0 -3l0 -5c0,0 -1,0 -3,0 0,-1 -1,-2 -3,-3l0 -7c-1,0 -2,0 -3,0l0 7c-2,1 -3,2 -3,3 -2,0 -3,0 -3,0l0 5 0 0c0,0 3,0 7,0 5,0 7,0 8,0zm-12 8l0 1 0 5c-8,5 -8,10 -7,14l11 36 11 -36c2,-4 2,-9 -6,-14l0 -5 0 -1c-1,0 -2,0 -5,0 -2,0 -4,0 -4,0z"//phase 4
                ,"M133 39c0,0 0,0 -1,0l0 -1 0 0 0 -1c-1,0 -2,0 -3,0 -1,0 -2,0 -2,0l0 1 0 1c-1,0 -2,0 -2,0l0 2c1,0 2,0 4,0 2,0 4,0 4,0l0 -2zm0 -2l0 -2c0,0 0,0 -2,0 0,-1 0,-1 -1,-2l0 -3c0,-1 -1,-1 -2,0l0 3c0,1 -1,1 -1,2 -1,0 -2,0 -2,0l0 2 0 0c1,0 2,0 4,0 2,0 4,0 4,0zm-6 4l0 1 0 3c-4,2 -4,5 -4,7l6 19 6 -19c0,-2 0,-5 -3,-7l0 -3 0 -1c-1,0 -2,0 -3,0 -1,0 -2,0 -2,0z"//phase 5
];
var hatch = [  '<path class="fil1 str0" d="M92 149c13,-1 26,-5 38,-10 3,-1 6,-2 10,-3"/>'
              ,'<path class="fil1 str0" d="M98 134c2,1 11,4 20,9 11,5 17,4 24,9"/>'
]
var speedFactor = 1; //to do swing animation faster or slowly. Calculated in function initAnimation 

mina.easeInOutQuad = function (n) {//easing calculate
  if ( ( n *= 2 ) < 1 ) return 0.5 * Math.pow( n, 2 );
  return -0.5 * ( ( --n ) * ( n - 2 ) - 1 );
};

var phases = [ {d : pendulum[0], t : 1500, bezier : mina.easeInOutQuad    } // phase 0
              ,{d : pendulum[5], t : 1000, bezier : mina.easeInOutQuad    } //phase 5
              ,{d : pendulum[1], t : 1000, bezier : mina.easeInOutQuad    } //phase 8
              ,{d : pendulum[4], t : 800, bezier : mina.easeInOutQuad    } //phase 10
              ,{d : pendulum[3], t : 0, bezier : mina.easeInOutQuad    } //original size - phase 11
];//mina.easeInOutCirc - almost perfect

var timings = {whole : 0,
              logo : 1000, //timings for logo drawings
        brandDelay : 1200, // delay before brand  drawings
        spellbrand : 150, //timings for drawing of each letters of brand name
         signature : [300, 200, 800, 140, 80, 80] //timings for signature drawings
        };
phases.forEach(function(item, i, arr) { timings.whole += item.t }); // calculating whole time of animation  
  
console.log( timings.whole);
var animSvg, //point to SVG tag
    pndln;//point to pendulum object
 
      var brand = [], 
          cross = [],
           sign = [];

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
var n = 0; //phase

function swing_(){ 
   n++;
   if (n <= phases.length-1)  {
      // console.log("time", n, phases[n-1].t, phases[n-1].bezier);
      pndln.animate({d : phases[n].d}, phases[n-1].t, phases[n-1].bezier, function(){ swing_() });
   }
    return
}


function initAnimation (obj) {

  speedFactor = obj.time / (timings.whole * 0.001);    
  phases.forEach(function(item, i, arr) { phases[i].t*=speedFactor;  });//tuning animation speed
  
    animSvg = Snap(obj.blck);  
     // var logo = new Drawing( svgString1, '', timings.logo ); logo.initDraw(); 
var c = animSvg.circle(119, 77, 1000)
                .attr({fill : "#006BAD", opacity : 1})
                .animate({r:60, opacity : 1}, timings.whole*0.85, mina.easein, function(){underline.animate({x : 22, width : 390}, obj.wrtng*1000 , mina.easeinout)});
var underline = animSvg.rect(22, 75, 0, 4, 2, 2)
                .attr({fill : "#006BAD"});

    pndln  = animSvg.path( phases[0].d ).attr({fill: 'white', "stroke-width" : 0,  stroke : "#006BAD"});
    swing_(); 


        for (var i in signature)
          { sign[i] = new Drawing( signature[i], '', timings.signature[i] );//svgString, transformString, timeBetweenDraws
          }

        for (var i in brandName)
          { brand[i] = new Drawing( brandName[i], '', timings.spellbrand );
          }

        for (var j in hatch)
          { cross[j] = new Drawing( hatch[j], '', 225 );
          }

        setTimeout(function() {brand[0].initDraw(); }, timings.whole*0.85) ;
            brand[0].callOnFinished = function() {brand[1].initDraw(); }; 
            brand[1].callOnFinished = function() {brand[2].initDraw(); }; 
            brand[2].callOnFinished = function() {brand[3].initDraw(); }; 
            brand[3].callOnFinished = function() {brand[4].initDraw(); }; 
            brand[4].callOnFinished = function() {brand[5].initDraw(); }; 
            brand[5].callOnFinished = function() {brand[6].initDraw(); }; 
            brand[6].callOnFinished = function() {brand[7].initDraw(); }; 
            brand[7].callOnFinished = function() {brand[8].initDraw(); }; 
            brand[8].callOnFinished = function() {brand[9].initDraw(); }; 
            brand[9].callOnFinished = function() {brand[10].initDraw(); }; 
            brand[10].callOnFinished = function() {brand[11].initDraw(); }; 

            brand[11].callOnFinished = function() { cross[0].initDraw();}; 
            cross[0].callOnFinished = function() {cross[1].initDraw(); }; 
            cross[1].callOnFinished = function() {sign[0].initDraw(); }; 
//draw signature
            sign[0].callOnFinished = function() { sign[1].initDraw() };
            sign[1].callOnFinished = function() { sign[2].initDraw() };
            sign[2].callOnFinished = function() { sign[3].initDraw() };
            sign[3].callOnFinished = function() { sign[4].initDraw() };
            sign[4].callOnFinished = function() { sign[5].initDraw() };


           

 
};


