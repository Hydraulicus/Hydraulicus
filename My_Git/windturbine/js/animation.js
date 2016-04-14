 var json = [{"name":"WSSC Wind Use", "vol":22},
				{"name":"US Wind Generation", "vol":4.7}],//data fot infographic
	 iLook = {R : 180, w : 60 //R - out radius in px, w - width
			 ,color : '#6D9EEB' //color of outer data circle
			};

//=================================================================================            
var textes = [   {'text' : json[0].name, 'x' : 100, 'y' : -255}
                ,{'text' : '('+json[0].vol+')', 'x':100, 'y' : -230, 'endX' : 50, 'endY' : -150}
                ,{'text' : json[1].name, 'x':-120, 'y' : -255}
                ,{'text' : '('+json[1].vol+')', 'x':-120, 'y' : -230, 'endX' : 15, 'endY' : -90}
                ];

var width = 800,
    height = width,
    radius = Math.min(width, height) / 2;
    tau = 2 * Math.PI; 


var arc = [
    d3.svg.arc().innerRadius(iLook.R).outerRadius(iLook.R-iLook.w).startAngle(0),
    d3.svg.arc().innerRadius(iLook.R-iLook.w-iLook.w).outerRadius(iLook.R-iLook.w).startAngle(0),
    ];


var svg = d3.select("#animation").append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")

// Define the gradient
var gradient = svg.append("svg:defs")
    .append("svg:linearGradient")
    .attr("id", "gradient")
    .attr("x1", "0%")
    .attr("y1", "0%")
    .attr("x2", "100%")
    .attr("y2", "100%")
    .attr("spreadMethod", "pad");

// Define the gradient colors
gradient.append("svg:stop")
    .attr("offset", "0%")
    .attr("stop-color", "#cccccf")
    .attr("stop-opacity", 1);

gradient.append("svg:stop")
    .attr("offset", "90%")
    .attr("stop-color", iLook.color)
    .attr("stop-opacity", 1);



// Add the background arc, from 0 to 100% .
for (var i in json) {
        var background = svg.append("path")
            .datum({endAngle: tau})
            .style("fill", "#efefef")
            .attr({"stroke" : "#888", "stroke-width" : 1})
            .classed("partition", true)
            .attr("d", arc[i]);
}


var foreground = [
    svg.append("path")
    .datum({endAngle: 0})
    .style("fill", 'url(#gradient)')
    .attr({"stroke" : "#888", "stroke-width" : 1})
    .classed("partition", true)
    .attr("d", arc[0]),

    svg.append("path")
    .datum({endAngle: 0})
    .style("fill", 'url(#gradient)')
    .attr({"stroke" : "#888", "stroke-width" : 1, opacity : 0.65})
    .classed("partition", true)
    .attr("d", arc[1]),
    ];

for (var i in json) {
   console.log(i,json[i].vol);};

// Every so often, start a transition to a new random angle. Use transition.call
// (identical to selection.call) so that we can encapsulate the logic for
// tweening the arc in a separate function below.
setTimeout(function() {
var EndAngle = json[0].vol * 0.01 * tau;
  foreground[0].transition()
      .duration(750)
      .call(arcTween, EndAngle, 0);

 EndAngle = json[1].vol * 0.01 * tau;
    foreground[1].transition()
      .duration(750)
      .call(arcTween, EndAngle, 1)
      .each("end", function(){  gradient.select("stop")
        .transition()
        // .delay(1000)
        .duration(500)
         .ease("cubic ")
        .attr("stop-color", iLook.color);})
}, 500);

// var text = svg.selectAll("text")
//     .data(json);

//     text.enter().append("text")
//     .attr("text-anchor", "middle")
//     .style("font-size", function(d) { return 16 + "px"; })


var texts = svg.selectAll('text')
                .data(textes)
                .enter()
                .append("text");

var textLabels = texts
                .attr("x", function(d) { return d.x; })
                .attr("y", function(d) { return d.y; })
                .classed("roboto", true)
                .attr("text-anchor", "middle")
                .attr("fill", "black")
                .text(function(d) { return d.text; });
// debugger;
var racks = svg.selectAll('path:not(.partition)')
                .data(textes)
                .enter()
                .append("path");

var  racksAttr = racks
                .classed("dash", true)
                .attr({"id" : "rack1", "stroke" : "black", "stroke-width" : 1, opacity : 1})
                .attr("d", function(d) { var L = (typeof( d.endX ) === 'undefined' )? ' ' : ' L' + d.endX + ',' + d.endY; return 'M'+d.x+','+(d.y+10)+L })
                ;

//  svg.append('text') 
//     .text(json[1].name) 
//     .attr('x', -100) 
//     .attr('y', -250)
//     .style("fill","black"); 

// // svg.select('text').each(function() {  console.log(this.getBBox());});




//=============dash
var paths = svg.selectAll(".dash")
    .call(transition);

  function transition(path) {
    path.transition()
        .duration(1500)
        .attrTween("stroke-dasharray", tweenDash)
        //.each("end", function() { d3.select(this).call(transition); }); // infinite loop
  }
  
  function tweenDash() {
    var l = this.getTotalLength(),
        i = d3.interpolateString("0," + l, l + "," + l); // interpolation of stroke-dasharray attr
    return function(t) {
      return i(t);
    };
  }

//=============

// svg.transition()
//       .duration(1050)
//       .attr("transform", "translate(" + width / 4 + "," + height / 4 + ")");


// Creates a tween on the specified transition's "d" attribute, transitioning
// any selected arcs from their current angle to the specified new angle.
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