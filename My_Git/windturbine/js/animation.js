 var json = [{"name":"WSSC Wind Use", "vol":22},
				{"name":"US Wind Generation", "vol":4.7}],//data fot infographic
	 iLook = {R : 315, w : 105 //R - out radius in px, w - width
			 ,color : '#6D9EEB' //color of outer data circle
			};

//=================================================================================            
var width = 2550,
    height = 1207,
    tau = 2 * Math.PI
    // cr = {x:2000, y:550},//center of rotation
    // newPlace = {x : 225, y : 245, scale : 0.4}; //where infographic move before animation

var phases = {'one' : 2500 //dashdrawing turbine + reveal text1   
            , 'two' : 1500 //dashdrawing blades
            , 'three' : 2000 //blades growing
            , 'four' : 3000 //rotation. appiar inner donat and text2
            , 'five' : 3000 //rotation. appiar outer donat and text3
            , 'six' : 3000 //infograph move, draft disappiar, photo appiar
            };

var textes = [   {'text' : json[0].name, 'x' : iLook.R*0.725, 'y' : (-1)*iLook.R*1.4}
                ,{'text' : '('+json[0].vol+'%)', 'x' : iLook.R*0.725, 'y' : (-1)*iLook.R*1.4 + 50, 'endX' : iLook.R*0.5, 'endY' : (-1)*iLook.R*0.75}
                ,{'text' : json[1].name, 'x' : (-1)*iLook.R*0.75, 'y' : (-1)*iLook.R*1.4}
                ,{'text' : '('+json[1].vol+'%)', 'x' : (-1)*iLook.R*0.75, 'y' : (-1)*iLook.R*1.4 + 50, 'endX' : iLook.R*0.05, 'endY' : (-1)*(iLook.R-iLook.w)*0.8}
                ];
var turbine = [{d : "M2094 497c4,224 8,448 4,673l48 1 -27 -675c0,-5 -2,-8 -13,-7 -9,0 -12,2 -12,8z"} // pillon
              ,{d : "M2088 467c0,-25 37,-25 37,0l-2 63c-1,1 -1,3 -3,4l-1 -38c0,-5 -2,-8 -13,-7 -9,0 -12,2 -12,8 0,13 0,26 0,40 -3,-1 -6,-2 -6,-6l0 -64z"} // cockpit
]; // statik, dash draving

var blades = [ {d : ""} // blade 1
              ,{d : ""} // blade 2
              ,{d : ""} // blade 3
              ,{d : ""} // cock
              ] //rotateble
var svg = init();

// ============ phase ONE ===================
// dashdrawing turbine 
var mill = svg.selectAll('path .cockpit')
                .data(turbine)
                .enter()
                .append("path")
                .classed("cockpit", true)
                .attr({"fill" : "rgba(255,255,240,0)", "stroke" : "transparent", "stroke-width" : 2, opacity : 1})
                .attr("d", function(d) { return d.d})
                .each(function(d, i) { var del = (i == 1) ? phases.one*0.5 : 0; d3.select(this).call(transition, del, phases.one*0.5)});
 
// dashdrawing turbine 
var Blades = svg.selectAll('path .blades')
                .data(blades)
                .enter()
                .append("path")
                .classed("blades", true)
                .attr({"fill" : "rgba(255,255,240,0)", "stroke" : "transparent", "stroke-width" : 2, opacity : 1})
                .attr("d", function(d) { return d.d})
                .each(function(d, i) { var del = phases.one*0.25*i; d3.select(this).call(transition, del, phases.one*0.25)});

//===========================================
  function transition(path, del, dur) {//function which drawout counturs and fill it
    path.transition()
        .duration(dur)
        .delay(del)
        .attr({"stroke" : "black" })
        .attrTween("stroke-dasharray", tweenDash)
        .each("end", function(d, i){
          d3.select(this)
            .transition()
            .duration(1500)
            .styleTween("fill", function() { return d3.interpolate("rgba(255,255,240,0)", "rgba(255,255,240,1)"); })
            .attr("stroke-width" , 1)
        })
  }
  
  function tweenDash() {
    var l = this.getTotalLength(),
        i = d3.interpolateString("0," + l, l + "," + l); // interpolation of stroke-dasharray attr
    return function(t) {
      return i(t);
    };
  }

function init(){
  var svg = d3.select("#animation").append("svg")
    // .attr("width", width)
    // .attr("height", height)
    .attr("viewBox", "0 0 "+width+" " +height)//zoom all
    .attr("preserveAspectRatio", "xMinYMin meet")//to do responsive
    .attr("class", "graph-svg-component")
    .append("g");

svg.append("svg:image")
   .attr('x',0)
   .attr('y',-37)
   .attr('width', width)
   .attr('height', 1280)
   .classed("photo", true)
   .attr("xlink:href","windmill2_ImgID1.jpg")
   .attr({"opacity" : 0.5});
   return svg
}