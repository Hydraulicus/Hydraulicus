
  	  var animSvg = Snap("#animation");


var svgString1 = '<path id="s3" fill="transparent" stroke="#006BAD" stroke-width="0" d="M0 0, L432 0, 432 153, 0 153 M136 72c2,5 2,9 1,13l-16 51c32,-1 58,-27 58,-59 0,-1 0,-1 0,-2 -1,-1 0,-1 0,-2l233 0 0 -2 -234 0c-2,-30 -26,-52 -56,-53l0 10c2,1 4,3 4,4 3,1 6,1 6,2l0 7 -6 0 0 5c4,0 6,0 6,1l0 7 -6 0 0 9c5,3 8,6 10,9zm-75 -1l-41 0 0 2 41 0c0,1 0,2 0,4 0,35 24,57 56,59l-16 -51c-1,-4 -1,-8 1,-13 2,-3 5,-6 10,-9l0 -9 -5 0 0 -7c0,-1 2,-1 5,-1l0 -5 -6 0 0 -7c0,-1 3,-1 6,-2 0,-1 2,-3 4,-4l0 -10c-29,1 -53,24 -55,53z"/>';
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
                ]
var c = animSvg.circle(119, 77, 10)
                .attr({fill : "#006BAD", opacity : 0.1})
                .animate({r:500, opacity : 1}, 4000, mina.easeout);


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
       fill: 'white', "opacity" : 1,
       "stroke-dasharray": this.leng + " " + this.leng,
       "stroke-dashoffset": this.leng
     });

     this.currentPathIndex++;

     myPath.animate({"stroke-dashoffset": 0}, this.timeBetweenDraws, mina.easeout, this.draw.bind( this ) );

};





      var logo = new Drawing( svgString1, '', 10 ); logo.initDraw();
      var brand = []; 
      var sign = [];

        sign[0] = new Drawing( signature[0], '', 500 ); //svgString, transformString, timeBetweenDraws
        sign[1] = new Drawing( signature[1], '', 300 ); 
        sign[2] = new Drawing( signature[2], '', 1200 ); 
        sign[3] = new Drawing( signature[3], '', 200 ); 
        sign[4] = new Drawing( signature[4], '', 200 ); 
        sign[5] = new Drawing( signature[5], '', 100 ); 



        for (var i in brandName)
          { brand[i] = new Drawing( brandName[i], '', 140 );
        // console.log(i);
          }

        setTimeout(function() {brand[0].initDraw()}, 1200) ;
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

//draw signature
            brand[11].callOnFinished = function() {sign[0].initDraw(); }; 
            sign[0].callOnFinished = function() { sign[1].initDraw() };
            sign[1].callOnFinished = function() { sign[2].initDraw() };
            sign[2].callOnFinished = function() { sign[3].initDraw() };
            sign[3].callOnFinished = function() { sign[4].initDraw() };
            sign[4].callOnFinished = function() { sign[5].initDraw() };

   // for (var i = 1; i <= brand.length; i++) {
   //  console.log(i);
   //        brand[i-1].callOnFinished = function() {var n = i; brand[n].initDraw(); }; 
   //      }     

