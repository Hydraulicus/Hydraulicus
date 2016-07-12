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


Drawing.prototype.draw = function() {         // this is the main animation bit
    if( this.endReached() ) {
        if( this.callOnFinished ) {
            var myPath = this.pathArray[ this.currentPathIndex-1 ] ;
            
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


//Animate along a path
(function() {
        Snap.plugin( function( Snap, Element, Paper, global ) {

		Element.prototype.drawAtPath = function( path, timer, options) {
// option.scale > 0  - changing scale
// option.scale = 1 -  scale remain stady
// option.scale don't defined -      scale = ( (len-val) / len ); scale = ( scale > 0.5 ) ? scale : 0.5;
// 
			var myObject = this, bbox = this.getBBox(1);
			var point, movePoint = {}, len = path.getTotalLength(), from = 0, to = len, drawpath = 0, easing = mina.linear, callback;
			var startingTransform = ''; 

			if( options ) {
				easing = options.easing || easing; 
				if( options.reverse  ) { from = len; to = 0; };
				if( options.drawpath ) {
					drawpath = 1;
					path.attr({    
						fill: "none",
                                                strokeDasharray: len + " " + len,
                                                strokeDashoffset: this.len
	                                });

				};
				if( options.startingTransform ) {
					startingTransform = options.startingTransform;
				};
        // if ( options.scale ) {
        

        //   console.log( options.scale);
        // }

				callback = options.callback || function() {};
			};

			Snap.animate(from, to , function( val ) {
        var scalefactor = 1
        var scale = ( (len-val) / len ); scale = ( scale > 0.5 ) ? scale : 0.5; //
        if ( options.scale ) {
          scalefactor = options.scale;
         scale = (1 - ( (len-val) / len )) * scalefactor;
        }

		        point = path.getPointAtLength( val );
    				movePoint.x = point.x - bbox.cx; movePoint.y = point.y - bbox.cy;
    				myObject.transform( startingTransform + 't' + movePoint.x + ',' + movePoint.y + 'r' + point.alpha+'s'+scale);

				if( drawpath ) {
					path.attr({ "stroke-dashoffset": len - val });
				};
  			}, timer, easing, callback ); 
		};
	});

})();


// toFront() / .toBack() 
//https://github.com/adobe-webplatform/Snap.svg/issues/121
Snap.plugin(function (Snap, Element, Paper, glob) {
    var elproto = Element.prototype;
    elproto.toFront = function () {
        this.prependTo(this.paper);
    };
    elproto.toBack = function () {
        this.appendTo(this.paper);
    };
})


// =================================  auto text wraper  ====================================
// http://stackoverflow.com/questions/27517482/how-to-auto-text-wrap-text-in-snap-svg
  Snap.plugin(function (Snap, Element, Paper, glob) {
     Paper.prototype.multitext = function (x, y, txt, max_width, attributes) {

        var svg = Snap();
        var abc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var temp = svg.text(0, 0, abc);
        temp.attr(attributes);
        var letter_width = temp.getBBox().width / abc.length;
        svg.remove();

        var words = txt.split(" ");
        var width_so_far = 0, current_line=0, lines=[''];
        for (var i = 0; i < words.length; i++) {

           var l = words[i].length;
           if (width_so_far + (l * letter_width) > max_width) {
              lines.push('');
              current_line++;
              width_so_far = 0;
           }
           width_so_far += l * letter_width;
           lines[current_line] += words[i] + " ";
        }

        var t = this.text(x,y,lines).attr(attributes);
        t.selectAll("tspan:nth-child(n+2)").attr({
           dy: "1.2em",
           x: x
        });
        return t;
     };
  });

    Snap.plugin(function (Snap, Element, Paper, glob) {
     Paper.prototype.multiList = function (x, y, txt, max_width, attributes) {

        var svg = Snap();
        var abc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var temp = svg.text(0, 0, abc);
        temp.attr(attributes);
        var letter_width = temp.getBBox().width / abc.length;
        svg.remove();

        var words = txt.split("__");
        var width_so_far = 0, current_line=0, lines=[''];
        for (var i = 0; i < words.length; i++) {

           var l = words[i].length;
           // if (width_so_far + (l * letter_width) > max_width) 
           {
              lines.push('');
              current_line++;
              width_so_far = 0;
           }
           width_so_far += l * letter_width;
           lines[current_line] += words[i] + " ";
        }

        var t = this.text(x,y,lines).attr(attributes);
        t.selectAll("tspan:nth-child(n+2)").attr({
           dy: "2em",
           x: x
        });
        return t;
     };
  });