 var json = [{"name":"WSSC Wind Use", "vol":22},
				{"name":"US Wind Generation", "vol":4.7}],//data fot infographic
	 iLook = {R : 315, w : 105 //R - out radius in px, w - width
			 ,color : '#6D9EEB' //color of outer data circle
			};

//=================================================================================            
var width = 836,
    height = 1258,
    tau = 2 * Math.PI
    cr = {x:width*0.5, y:550},//center of rotation
    newPlace = {x : 225, y : 245, scale : 0.4}; //where infographic move before animation

var phases = {'one' : 7000
            , 'two' : 1000
            };

var textes = [   {'text' : json[0].name, 'x' : iLook.R*0.725, 'y' : (-1)*iLook.R*1.4}
                ,{'text' : '('+json[0].vol+'%)', 'x' : iLook.R*0.725, 'y' : (-1)*iLook.R*1.4 + 50, 'endX' : iLook.R*0.5, 'endY' : (-1)*iLook.R*0.75}
                ,{'text' : json[1].name, 'x' : (-1)*iLook.R*0.75, 'y' : (-1)*iLook.R*1.4}
                ,{'text' : '('+json[1].vol+'%)', 'x' : (-1)*iLook.R*0.75, 'y' : (-1)*iLook.R*1.4 + 50, 'endX' : iLook.R*0.05, 'endY' : (-1)*(iLook.R-iLook.w)*0.8}
                ];

var startTurbine = [ {d : "M"+(cr.x+10)+", "+(cr.y+11)+" c-3,-9 4,-15 9,-14 2,1 3,3 2,5l-1 4c0,1 0,2 -1,3 -2,2 -3,4 -6,4l-3 -2z"}
                ,{d : "M"+(cr.x+7)+", "+(cr.y-14)+"c-6,7 -15,5 -16,-1 0,-4 3,-5 5,-5l2 0c1,0 2,0 4,0 2,0 4,1 6,3l-1 3z"}
                ,{d : "M"+(cr.x-14)+", "+(cr.y)+"c10,2 12,11 8,15 -4,2 -6,0 -7,-2l-1 -1c-1,-2 -1,-2 -2,-4 -1,-2 -2,-4 -1,-6l3 -2z"}
                ,{d : "M"+(cr.x+8)+", "+(cr.y-17)+"c6,2 10,8 10,15l0 -1c-5,-1 -12,5 -8,14l2 2c-3,2 -7,4 -11,4 -3,0 -5,-1 -7,-2l0 0c4,-4 2,-13 -8,-15l-2 2c0,-1 0,-2 0,-3 0,-6 3,-11 7,-14l0 0c1,6 10,8 16,1l1 -3z"}
                ];
var turbine = [  {d : "M"+(cr.x+10)+", "+(cr.y+11)+" c-4,-9 3,-15 8,-14 33,20 112,64 143,86l111 73c2,1 0,4 -2,3 -109,-60 -220,-105 -239,-132l-21 -16z"}
                ,{d : "M"+(cr.x+ 7)+", "+(cr.y-14)+"c-6,7 -15,5 -16,-1 1,-38 -1,-129 2,-166l8 -133c1,-2 4,-2 4,0 3,125 20,243 5,273l-3 27z"}
                ,{d : "M"+(cr.x-14)+", "+(cr.y)+"c10,2 12,11 8,15 -34,19 -111,65 -145,81l-119 59c-2,1 -4,-2 -2,-3 107,-65 201,-138 234,-141l24 -11z"}
                ,{d : "M"+(cr.x+ 8)+", "+(cr.y-17)+"c6,2 10,8 10,15l0 -1c-5,-1 -12,5 -8,14l2 2c-3,2 -7,4 -11,4 -3,0 -5,-1 -7,-2l0 0c4,-4 2,-13 -8,-15l-2 2c0,-1 0,-2 0,-3 0,-6 3,-11 7,-14l0 0c1,6 10,8 16,1l1 -3z"}
                ];
var cockpit = [  {d : "M"+(cr.x+1)+" "+(cr.y+20)+"c-4,0 -11,0 -14,-2 -4,-12 -7,-21 -6,-33 1,-4 4,-5 20,-5m0 40c5,0 12,0 15,-2 4,-12 6,-21 5,-33 0,-4 -4,-5 -20,-5"}
                // ,{d : "M"+(cr.x+1)+" "+(cr.y+630)+"c8,0 15,0 22,0l-11 -610 -11 0M419 1036c-7,0 -14,0 -22,0l12 -611"}
                ,{d : "M"+(cr.x+1)+" "+(cr.y+630)+"c8,0 15,0 22,0l-11 -610 -11 0M"+(cr.x+1)+" "+(cr.y+630)+"c-7,0 -14,0 -22,0l6 -305 6 -305 10 0"}

            ]

var arc = [
    d3.svg.arc().innerRadius(iLook.R).outerRadius(iLook.R-iLook.w).startAngle(0),
    d3.svg.arc().innerRadius(iLook.R-iLook.w-iLook.w).outerRadius(iLook.R-iLook.w).startAngle(0),
    ];


var svg = d3.select("#animation").append("svg")
    .attr("width", width)
    .attr("height", height)
     .attr("class", "graph-svg-component")
    // .style("border","2px solid '#555'")
    // .style("background","linear-gradient(to top, #bbb, white);")
    .append("g")
    // .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")

svg.append("svg:image")
   .attr('x',0)
   .attr('y',0)
   .attr('width', width)
   .attr('height', height)
   .classed("photo", true)
   .attr("xlink:href","windmill+infographic.png")
   .attr({"opacity" : 0});


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



// Add the background arc, from 0 to 100% .
for (var i in json) {
        var background = svg.append("path")
            .attr("transform", "translate("+cr.x+","+cr.y+")")
            .datum({endAngle: tau})
            .style("fill", "#efefef")
            .attr({"stroke" : "#555", "stroke-width" : 1, "opacity" : 0.1})
            .classed("partition", true)
            .attr("d", arc[i])
            .transition()
            .duration(phases.one)
            .attr({"opacity" : 1});
}



var foreground = [
    svg.append("path")
    .datum({endAngle: 0})
    .style("fill", 'url(#gradient)')
    .attr({"stroke" : "#555", "stroke-width" : 0})
    .attr("transform", "translate("+cr.x+","+cr.y+")")
    .classed("partition", true)
    .classed("4centr", true)
    .attr("d", arc[0])
    ,

    svg.append("path")
    .datum({endAngle: 0})
    .style("fill", 'url(#gradient)')
    .attr("transform", "translate("+cr.x+","+cr.y+")")
    .attr({"stroke" : "#000", "stroke-width" : 0, opacity : 0.65})
    .classed("partition", true)
    .classed("4centr", true)
    .attr("d", arc[1]) 
                // .call(function(d,i){ 
                // var c = arc[0].centroid(d);  console.log(c);})
    ];


// for (var i in json) {
//    console.log(i,json[i].vol);};

// Add the windturbine 
    function tween(d, i, a) { 
        return d3.interpolateString("rotate(0, "+cr.x+","+cr.y+")", "rotate(645, "+cr.x+","+cr.y+")");};
for (var i in turbine) {
        var background = svg.append("path")
            .attr({"stroke" : "#000", "stroke-width" : 1, "fill" : "#eed", "opacity" : 1})
            .classed("turbine", true)
            .attr("d", startTurbine[i].d)
            .transition()
            .ease("cubic-out")
            .duration(phases.one)
            .attrTween("transform", tween)
            .attr("d", turbine[i].d)
            .each("end", function(d, i){});
}
   


var EndAngle = json[0].vol * 0.01 * tau;
  foreground[0].transition()
      .delay(2500)
      .duration(900)
      .ease("linear")
      // .transition().attr("stroke-width", 2)
      .call(arcTween, EndAngle, 0); 
 EndAngle = json[1].vol * 0.01 * tau;
    foreground[1].transition()
      .delay(1500)
      .duration(500)
      .call(arcTween, EndAngle, 1)
      .each("end", function(d){

            gradient.select("stop")
                    .transition()
                    .delay(1000)
                    .duration(1100)
                    .ease("cubic ")
                    .attr("stop-color", iLook.color)
                    // .each("end", function(){svg.selectAll(".partition").transition().duration(400).attr("stroke-width", 2);})
                    .each("end", callBack);
                    
                    ;});


    function callBack(path){
                    svg.selectAll(".partition, .roboto, .dash")
                    .transition()
                    // .delay(1000)
                    .duration(400)
                    .attr("stroke-width", 2)
                    .attr("transform", "translate("+newPlace.x+","+newPlace.y+")"+"scale("+newPlace.scale+")")
                     .attr({"font-size" : "42px"})
                    ;



};

var texts = svg.selectAll('text')
                .data(textes)
                .enter()
                .append("text");

var textLabels = texts
                .attr("x", function(d) { return d.x; })
                .attr("y", function(d) { return d.y; })
                .classed("roboto", true)
                .attr("text-anchor", "middle")
                .attr({"fill" : "black", "opacity" : 0, "font-size" : "5px"})
                .attr("transform", "translate("+cr.x+","+cr.y+")")
                .text(function(d) { return d.text; })
                .transition()
                .duration(2000)
                .attr({"opacity" : 1, "font-size" : "20px"})
                ;

// var t = textLabels  
//         .forEach(function(d, i) { console.log(d ); textes[i].bbox=d[i].getBBox(); console.log(textes[i].bbox)});

//=========== cockpit ===================

var racks = svg.selectAll('path .cockpitColor')
                .data(cockpit)
                .enter()
                .append("path")
                .classed("cockpitColor", true)
                .attr({"fill" : "#ffe", "stroke" : "transparent", "stroke-width" : 0, opacity : 0})
                .attr("d", function(d) { return d.d});

var racks = svg.selectAll('path .cockpit')
                .data(cockpit)
                .enter()
                .append("path")
                .classed("cockpit", true)
                .attr({"id" : "cockpit", "fill" : "transparent", "stroke" : "black", "stroke-width" : 2, opacity : 1})
                .attr("d", function(d) { return d.d});




var paths = svg.selectAll(".cockpitColor")
    .call(transition)
                .transition()
                .delay(2000)
                .duration(1000)
                  .attr({  "opacity" : 1})
    .each('end', function(d){
        // console.log('End cockpit',d); 
        svg.select(".photo")
        .transition()
        .duration(1500)
        .attr({  "opacity" : 1})

    })    
    ;
var paths = svg.selectAll(".cockpit")
    .call(transition);
//=====================================
//================ ==================== 
var racks = svg.selectAll('path .dash')
// .selectAll('path:not(.partition)')
                .data(textes)
                .enter()
                .append("path")
                .classed("dash", true)
                .attr({"id" : "rack1", "stroke" : "black", "stroke-width" : 1, opacity : 1})
                .attr("transform", "translate("+cr.x+","+cr.y+")")
                .attr("d", function(d) { 
                    var L = (typeof( d.endX ) === 'undefined' )? ' ' : ' L' + d.endX + ',' + d.endY,
                        D = 'M'+d.x+','+(d.y+10)+L ; 
                    return D })
                ;
// // svg.select('text').each(function() {  console.log(this.getBBox());});

//=============dash
var paths = svg.selectAll(".dash")
    .call(transition);

  function transition(path) {
    path.transition()
        .duration(4500)
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