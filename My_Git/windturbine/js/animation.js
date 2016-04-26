

var turbine = [{d : "M2094 497c4,224 8,448 4,673l48 1 -27 -675c0,-5 -2,-8 -13,-7 -9,0 -12,2 -12,8z"} // pillon
              ,{d : "M2088 467c0,-25 37,-25 37,0l-2 63c-1,1 -1,3 -3,4l-1 -38c0,-5 -2,-8 -13,-7 -9,0 -12,2 -12,8 0,13 0,26 0,40 -3,-1 -6,-2 -6,-6l0 -64z"} // cockpit
]; // statik, dash draving

var bladesStart = [  {d : "M2116 452c-1,1 -5,2 -7,1 -4,0 -9,0 -9,-3 5,-1 5,-1 9,-1 4,1 3,1 7,3"} // blade 1
                    ,{d : "M2088 467c2,0 4,3 5,5 2,4 4,7 2,10 -4,-4 -4,-4 -6,-7 -1,-4 -1,-4 -1,-8"} // blade 2
                    ,{d : "M2116 483c-1,-2 0,-6 1,-8 2,-3 4,-7 7,-6 -1,5 -1,5 -3,8 -2,3 -2,3 -5,6"} // blade 3
                    ,{d : "M2088 466c0,-4 1,-7 3,-10 3,-3 5,-5 9,-6M2116 483c-5,2 -8,3 -11,2 -4,0 -7,-1 -10,-3M2116 452c4,3 4,3 6,6 2,4 3,7 2,11"} // cock
                    ] //rotateble
var bladesEnd = [  {d : "M2116 452c-1,1 -5,2 -7,1 -4,0 -9,0 -9,-3 20,-150 51,-305 54,-304 7,1 -37,300 -38,306"} // blade 1
                    ,{d : "M2088 467c2,0 4,3 5,5 2,4 4,7 2,10 -137,63 -284,120 -286,117 -3,-7 273,-130 279,-132"} // blade 2
                    ,{d : "M2116 483c-1,-2 0,-6 1,-8 2,-3 4,-7 7,-6 127,81 255,174 253,177 -4,7 -256,-160 -261,-163"} // blade 3
                    ,{d : "M2088 466c0,-4 1,-7 3,-10 3,-3 5,-5 9,-6M2116 483c-5,2 -8,3 -11,2 -4,0 -7,-1 -10,-3M2116 452c4,3 4,3 6,6 2,4 3,7 2,11"} // cock
                    ] //rotateble
var arc = [
    d3.svg.arc().innerRadius(iLook.R).outerRadius(iLook.R-iLook.w).startAngle(0),
    d3.svg.arc().innerRadius(iLook.R-iLook.w-iLook.w).outerRadius(iLook.R-iLook.w).startAngle(0),
    ];

var svg = init();
var infograph = infographInit();
var foreground = foregroundInit();

var txt = {x : width * 0.333},
  shift = (-1) * width * 0.0125;
putTxtBacgnd((width - txt.x)*0.5+shift, 0, width*0.333, height);//x y w h
// var infoTXT1 = infoTxtInit(txt.x+shift, width*0.333, 50, 100, 40, txtTop);
var infoTXT2 = infoTxtInit(txt.x+shift, width*0.333, height*0.2, 300, 32, txtFirst);//x, w, y, h, size, txt
var infoTXT4 = infoTxtInit(txt.x+shift, width*0.333, height*0.4, 200, 32, txtSec);
var infoTXT3 = infoTxtInit(txt.x+shift, width*0.333, height*0.575, 200, 32, txtThr);

var dashes = [ {'x' : 418, 'y' : 200, 'endX' : iLook.R*0.85, 'endY' : (-1)*iLook.R*0.05}
              ,{'x' : 418, 'y' : -10, 'endX' : iLook.R*0.05, 'endY' : (-1)*(iLook.R-iLook.w)*0.8}
                ];

//================ ==================== 
var racks = svg.selectAll('path .dash')
                .data(dashes)
                .enter()
                .append("path")
                .classed("dash", true)
                .attr({"id" : "rack1", "stroke" : "transparent", "stroke-width" : 1, opacity : 1})
                // .attr("transform", "translate("+cr.x+","+cr.y+")")
                .attr("d", function(d) { 
                    var L = (typeof( d.endX ) === 'undefined' )? ' ' : ' L' + d.endX + ',' + d.endY,
                        D = 'M'+d.x+','+(d.y)+L ; 
                    return D })
                ;


// ============ phase ONE ===================
// dashdrawing turbine 
var mill = svg.selectAll('path .cockpit')
                .data(turbine)
                .enter()
                .append("path")
                .classed("cockpit", true)
                .attr({"fill" : "rgba(255,255,240,0)", "stroke" : "transparent", "stroke-width" : 2})
                .attr("opacity", 1)//appiaring
                .attr("d", function(d) { return d.d})
                .each(function(d, i) { var del = (i == 1) ? phases.one*0.5 : 0; d3.select(this).call(transition, del, phases.one*0.5)})
                ;

// ============ phase TWO ===================
// drawing blades
var Blades = svg.selectAll('path .blades')
                .data(bladesStart)
                .enter()
                .append("path")
                .classed("blades", true)
                .attr({"fill" : "rgba(255,255,240,1)", "stroke" : "black", "stroke-width" : 1, opacity : 0})
                .transition() 
                .delay(phases.one)
                .duration(phases.two)
                .attr("d", function(d) { return d.d})//drawing smoll blades
                .attr("opacity", 1)//appiaring
                .each(function(){ 
                  if (typeof(infoTXT1) !== "undefined") infoTXT1.transition().delay(phases.one*0.25).duration(phases.one+phases.two).attr("opacity",1)//show top and bottom textes
                  if (typeof(infoTXT2) !== "undefined") infoTXT2.transition().delay(phases.one*0.25).duration(phases.one+phases.two).attr("opacity",1)//show top and bottom textes
                  })
// ============ phase THREE ===================
// ============ growing blades ==============
                .transition() 
                .delay(phases.one+phases.two)
                .duration(phases.three)
                .attr("d", function(d,i) {return bladesEnd[i].d })
// ============ phase FOUR ===================
// ============ second text fade in  =========
                .each(function(){ infoTXT4.transition().duration(phases.three).attr("opacity",1) })//show  text
// ============ first rotating blades ==============
                .transition() 
                .delay(phases.one+phases.two+phases.three)
                .duration(phases.four)
                // .ease("cubic-in")
                .ease("linear")
                .attrTween("transform", tween)//add 360degr rotation
                .each("end", innerDonat(phases.one+phases.two+phases.three+phases.four*0.3, 350))//draw infographic 
// ============ phase FIVE ===================
// =============== therd text fade in  ===========
                .each(function(){ infoTXT3.transition().delay(phases.one+phases.two+phases.three+phases.four*0.5).duration(1500).attr("opacity",1) })//show  text
// ============ second rotating blades ==============
                .transition() 
                .delay(phases.one+phases.two+phases.three+phases.four)
                .duration(phases.five)
                // .ease("cubic-out")
                .ease("linear")
                .attrTween("transform", tween)//add rotation
                // .attr("opacity",0.2)
                .each("end", outerDonat(phases.one+phases.two+phases.three+phases.four-100, 1000))//draw infographic 
// ============ phase SIX ===================
// ============ disappaire ==============
                .each("end",function(){ mill.transition().duration(phases.six).attr("opacity", 0).remove();
                // .each(function(){ mill.transition().delay(phases.one+phases.two+phases.three+phases.four+phases.five-500).duration(phases.six).attr("opacity", 0).remove();
                  d3.select("image").transition().duration(phases.six).attr("opacity", 1);
              })
                .transition() 
                .delay(phases.one+phases.two+phases.three+phases.four+phases.five)
                .duration(phases.six)
                .ease("cubic-in-out")
                .attr("opacity", 0)//
                .remove();
                ;
//============================================
//============ INFOGRAPHIC DRAWING ===========

          d3.selectAll(".background")
            .transition()
            .delay(phases.one+phases.two+phases.three)
            .duration(phases.three+phases.four)
            .attr({"opacity" : 0.5});
//============================================

//=========== supsidiary function ===================

function infoTxtInit(x, w, y, h, size, txt) {
   var padding = 1.1; //10%
return svg.selectAll("text:not(.roboto)")
   .data(txt).enter().append("text")
  // .attr("transform", "translate("+width*0.5+","+(y*1.0125+25)+") ")
  .attr("transform", "translate("+(x + w * 0.5)+","+(y*1.0125+25)+") ")
  .classed("infoTXT", true)
  .classed("roboto", true)
  .attr({"fill" : "black", "opacity" : 0, "font-size" : size+"px"})
  .attr("opacity", "0")
  .attr("text-anchor", "middle")
  .attr('x', 0)
  .attr('y',  function(d, i){ return 30 + i * 90; })
  .text(function(d){ return d; }) 
  .call(wrap, w / padding)
}

function putTxtBacgnd(x, y, w, h) {
      var rect = svg.append('rect')
                    .attr('width', w)
                    .attr('height', h)
                    .attr('x', x)
                    .attr('y', y)
                    .style('fill', 'url(#txtBckgnd)')
                    .attr('stroke', 'transparent');
}

// from http://bl.ocks.org/mbostock/7555321
function wrap(text, width) {
  text.each(function() {
    var text = d3.select(this),
    words = text.text().split(/\s+/).reverse(),
    word,
    line = [],
    lineNumber = 0,
    lineHeight = 1.5, // ems
    y = text.attr("y"),
    dy = parseFloat(text.attr("dy")) || 0,
    tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
    while (word = words.pop()) {
      line.push(word);
      tspan.text(line.join(" "));
      if (tspan.node().getComputedTextLength() > width) {
        line.pop();
        tspan.text(line.join(" "));
        line = [word];
        tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", (++lineNumber * lineHeight + dy) + "em").text(word);
      }
    }
  });
}

function outerDonat(del, dur){
  var EndAngle = json[0].vol * 0.01 * tau;
    foreground[0].transition()
        .delay(del)
        .duration(dur)
        .ease("linear")
        .call(arcTween, EndAngle, 0); 
   EndAngle = json[1].vol * 0.01 * tau;
}

function innerDonat(del, dur){
var  EndAngle = json[1].vol * 0.01 * tau;
      foreground[1].transition()
      .delay(del)
      .duration(dur)
      .call(arcTween, EndAngle, 1)
      .each("end", function(d){
            gradient.select("stop")
                    .transition()
                    .delay(1000)
                    .duration(3100)
                    .ease("cubic ")
                    .attr("stop-color", iLook.color)
                    .each("end", callBack);
                    ;});
}

    function callBack(path){
                    svg.selectAll(".partition, .dash")
                    .transition()
                    .duration(phases.six)
                    .attr("transform", "translate("+newPlace.x+","+newPlace.y+")"+"scale("+newPlace.scale+")")
                      .each("end", function(d) { racks.call(transition, 10, phases.one*0.5)})
                    ;
};

//============================================


 function infographInit(){
  var background=[];
  for (var i in json) {
         background[i] = svg.append("path")
            .attr("transform", "translate("+cr.x+","+cr.y+")")
            .datum({endAngle: tau})
            .style("fill", "#efefef")
            .attr({"stroke" : "#555", "stroke-width" : 1, "opacity" : 0.1})
            .classed("partition", true)
            .classed("background", true)
            .attr("d", arc[i]);
  }
            return background
}
function foregroundInit(){
return [
    svg.append("path")
    .datum({endAngle: 0})
    .style("fill", 'url(#gradient)')
    .attr({"stroke" : "#555", "stroke-width" : 0})
    .attr("transform", "translate("+cr.x+","+cr.y+")")
    .classed("partition", true)
    .classed("foreground", true)
    .attr("d", arc[0])
    ,
    svg.append("path")
    .datum({endAngle: 0})
    .style("fill", 'url(#gradient)')
    .attr("transform", "translate("+cr.x+","+cr.y+")")
    .attr({"stroke" : "#000", "stroke-width" : 0, opacity : 0.65})
    .classed("partition", true)
    .classed("foreground", true)
    .attr("d", arc[1]) 
    ]
}
//============================================
// Define the infograph gradient
var gradient = svg.append("svg:defs")
    .append("svg:linearGradient")
    .attr("id", "gradient")
    .attr("x1", "0%")
    .attr("y1", "0%")
    .attr("x2", "100%")
    .attr("y2", "100%")
    .attr("spreadMethod", "pad");

// Define the  infograph gradient colors
gradient.append("svg:stop")
    .attr("offset", "0%")
    .attr("stop-color", "#def")
    .attr("stop-opacity", 1);

gradient.append("svg:stop")
    .attr("offset", "90%")
    .attr("stop-color", iLook.color)
    .attr("stop-opacity", 1);


// Define the TEXT backgrnd gradient
var txtBckgnd = svg.append("svg:defs")
    .append("svg:linearGradient")
    .attr("id", "txtBckgnd")
    .attr("x1", "100%")
    .attr("y1", "0%")
    .attr("x2", "100%")
    .attr("y2", "100%")
    .attr("spreadMethod", "pad");

txtBckgnd.append("svg:stop")
    .attr("offset", "0%")
    .attr("stop-color", "white")
    .attr("stop-opacity", 0);

txtBckgnd.append("svg:stop")
    .attr("offset", "30%")
    .attr("stop-color", "white")
    .attr("stop-opacity", 0.5);

txtBckgnd.append("svg:stop")
    .attr("offset", "50%")
    .attr("stop-color", "white")
    .attr("stop-opacity", 0.4);

txtBckgnd.append("svg:stop")
    .attr("offset", "90%")
    .attr("stop-color", "white")
    .attr("stop-opacity", 0);


//============================================




  function tween(d, i, a) {return d3.interpolateString("rotate(0, "+cr.x+","+cr.y+")", "rotate(360, "+cr.x+","+cr.y+")");};


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
   .classed("image", true)
   .attr('height', 1280)
   .classed("photo", true)
   .attr("xlink:href","windmill2_ImgID1.jpg")
   .attr({"opacity" : 0});
   return svg
}

function arcTween(transition, newAngle, i) {

  // The function passed to attrTween is invoked for each selected element when
  // the transition starts, and for each element returns the interpolator to use
  // over the course of transition. This function is thus responsible for
  // determining the starting angle of the transition (which is pulled from the
  // element's bound datum, d.endAngle), and the ending angle (simply the
  // newAngle argument to the enclosing function).
  transition.attrTween("d", function(d) {

    // To interpolate between the two angles, we use the default d3.interpolate.
    // (Internally, this maps to d3.interpolateNumber, since both of the
    // arguments to d3.interpolate are numbers.) The returned function takes a
    // single argument t and returns a number between the starting angle and the
    // ending angle. When t = 0, it returns d.endAngle; when t = 1, it returns
    // newAngle; and for 0 < t < 1 it returns an angle in-between.
    var interpolate = d3.interpolate(d.endAngle, newAngle);

    // The return value of the attrTween is also a function: the function that
    // we want to run for each tick of the transition. Because we used
    // attrTween("d"), the return value of this last function will be set to the
    // "d" attribute at every tick. (It's also possible to use transition.tween
    // to run arbitrary code for every tick, say if you want to set multiple
    // attributes from a single function.) The argument t ranges from 0, at the
    // start of the transition, to 1, at the end.
    return function(t) {

      // Calculate the current arc angle based on the transition time, t. Since
      // the t for the transition and the t for the interpolate both range from
      // 0 to 1, we can pass t directly to the interpolator.
      //
      // Note that the interpolated angle is written into the element's bound
      // data object! This is important: it means that if the transition were
      // interrupted, the data bound to the element would still be consistent
      // with its appearance. Whenever we start a new arc transition, the
      // correct starting angle can be inferred from the data.
      d.endAngle = interpolate(t);

      // Lastly, compute the arc path given the updated data! In effect, this
      // transition uses data-space interpolation: the data is interpolated
      // (that is, the end angle) rather than the path string itself.
      // Interpolating the angles in polar coordinates, rather than the raw path
      // string, produces valid intermediate arcs during the transition.
      return arc[i](d);
    };
  });
}