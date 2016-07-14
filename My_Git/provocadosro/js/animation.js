var rhythm = 300//ms
    ,hexagonSvg, bottomSvg, cloneFlag = false, group4clone, putclone, currentId, bottomWrapper
    ,pathestoicons = [] ,hextext = [] ,textTitles = [], nameS = []
    ,activeIconAttr = {fill : "rgba(200, 200, 200, 0.01)", opacity : 1, stroke : "gray", "stroke-width" : 2}
    ,passiveIconAttr = {fill : "#F1F1F1", opacity : 0.7, stroke : "#F1F1F1", "stroke-width" : 0}
    ; 



function initAnimation (obj) {
    hexagonSvg = Snap(obj.hexagon); 
    bottomSvg = Snap(obj.bottombar); 
    rhythm = obj.rhythm * 1000;
    bottomWrapper = bottomSvg.g().attr({ "id" : "wraper"});
    if (obj.hiddenBottomBar) bottomWrapper.transform("s0.01,0.01" );
    
    drawObjects(hexagonSvg, objects);
    drawObjects(bottomWrapper, bottomBar);

    insertIconsInBar(bottomWrapper, obj.hexagonSegmentsData);
    insertIconsInHex(hexagonSvg, obj.hexagonSegmentsData);
    drawObjects(hexagonSvg, hexcovers);
    bindingHandling();
    buildingCloneLayer();
    setTextTitlesInHexagon();
    
};//end of init function


function buildingCloneLayer(){
    group4clone = hexagonSvg.g().addClass("visibility_hid");
    putclone = group4clone.g().attr({"id" : "putclone" });
    intoClone.forEach( function (element) { group4clone.add(Snap.parse( element ));} ) 
}

function drawObjects(target_, objects_)
    {
      for (var j in objects_)
        { 
          target_.add(Snap.parse(objects_[j]));
          if  (j ==  objects_.length-1) {   }
        }
   }

setTextTitlesInHexagon = function (){
  Snap.selectAll(".titles").forEach( function(element) 
        { var target = element.attr("id").split("-")[0];
            // console.log(target);
            // console.log(element.node.textContent);
            element.node.textContent =  textTitles[target]
        } 
    )
}

function insertIconsInBar(target_, icons4insert)
{ var i=0;
  var arrayofIcoPlacess = Snap.selectAll(".bottomiconplace").forEach( function(element)
        {
              // console.log(i);
              // console.log(element.getBBox());
            var icoBox = element.getBBox();
            var  x = icoBox.x + ( icoBox.w - icoBox.r0 ) * 0.5,
                 y = icoBox.y + ( icoBox.h - icoBox.r0 ) * 0.5,
                 h = icoBox.r0;
            target_.image(icons4insert[i]["pathToIco"], x, y, h, h);
            target_.circle(icoBox.cx, icoBox.cy, icoBox.r1 * 1.2) // cover circle. need for bind events
                    .attr({fill : "#F1F1F1", opacity : 0.7, stroke : "black", "stroke-width" : 0, cursor : "pointer"})
                    .attr({"id" : "circle_" + icons4insert[i]["name"]})
                    .addClass("icoInBar")
                    .hover(hoverover, hoverout)
                    .click(clickOnBottomBarIcon)
                    ;
            pathestoicons[icons4insert[i]["name"]] = icons4insert[i]["pathToIco"];
            hextext[icons4insert[i]["name"]] = icons4insert[i]["text"];
            textTitles[icons4insert[i]["name"]] = icons4insert[i]["title"];
            // nameS[icons4insert[i]["name"]] = icons4insert[i]["name"];
             nameS.push( {"key" : icons4insert[i]["name"]} );
            i++;
        })
}

function insertIconsInHex(target_, icons4insert)
{ var i=0;
  var arrayofIcoPlacess = Snap.selectAll(".bottomiconplaceinhex").forEach( function(element)
        {
            var icoBox = element.getBBox();
            var  x = icoBox.x + ( icoBox.w - icoBox.r0 ) * 0.5,
                 y = icoBox.y + ( icoBox.h - icoBox.r0 ) * 0.5,
                 h = icoBox.r0;
            target_.image(icons4insert[i]["pathToIco"], x, y, h, h);
            target_.circle(icoBox.cx, icoBox.cy, icoBox.r1 * 1.2) // cover circle. need for bind events
                    .attr({fill : "#F1F1F1", opacity : 0.01, stroke : "black", "stroke-width" : 0, cursor : "pointer"})
                    // .hover(hoverover, hoverout)
                    ;
            i++;
        })
}

var hoverover = function() {  this.attr(activeIconAttr) };
var hoverout = function() { this.attr(passiveIconAttr) };
var clickOnBottomBarIcon = function () {
  var targetId=this.attr("id").split("_")[1];
  currentId = targetId;
  console.log("clickOnBottomBarIcon",targetId);
  if (!cloneFlag) {
       preparingViewMode (targetId);
    }
    else 
    {
      changeInfoIntoHexagonViewMode( targetId )
    }
};
  
function bindingHandling(){
  Snap.selectAll(".hexcover").forEach( function(element) 
      {
        element
            .attr({cursor : "pointer"})
            .mouseover(hoveroversegment)
            .mouseout(hoveroutsegment)
            .click(segmentClick);
      })
}

function unbindingHandling(){
  Snap.selectAll(".hexcover").forEach( function(element) 
      {
        element
            .attr({cursor : "pointer"})
            .unmouseover(hoveroversegment)
            .unmouseout(hoveroutsegment)
            .unclick(segmentClick);
      })
}

function drawHexagonViewMode (targetId) {    //animate to full hexagon
    unbindingHandling();
    currentId = targetId;
    group4clone.removeClass("visibility_hid").animate({"opacity" : 1}, rhythm);
    var clone = Snap.select("#"+targetId+"-segment").clone();
    putclone.add(clone);
    clone
      .stop()
      .animate({"d" : "M468 541c0,0 0,0 0,0 -3,2 -7,3 -10,3l-292 0c-3,0 -6,-1 -9,-2l0 0 0 0c-3,-2 -6,-5 -8,-8l-146 -252c-2,-3 -3,-7 -3,-10l0 0 1 0c0,-3 1,-7 3,-10l145 -252c2,-3 5,-6 8,-8l156 270 0 0 0 0 155 -269c3,2 5,4 7,7l145 252c2,3 3,7 3,10 0,4 -1,7 -3,10l-145 252c-2,3 -4,5 -7,7l0 0zm-155 -269l-156 -270c0,0 0,0 0,0 3,-1 6,-2 9,-2l292 0c3,0 7,1 10,3l-155 269z"}, 150, mina.easiinout
          , function ()
            {
               var icoBox = Snap.select("#topiconplace").getBBox();
                  var  x = icoBox.x + ( icoBox.w - icoBox.r0 ) * 0.5,
                       y = icoBox.y + ( icoBox.h - icoBox.r0 ) * 0.5,
                       h = icoBox.r0;
                  putclone.image( pathestoicons[targetId], x, y, h, h);
                  putclone.add(Snap.parse('<text x="320" y="250" fill="white" stroke="white" stroke-width="0.2" font-weight="medium" font-size="30px" font-family="Corbert-Medium" text-anchor="middle">' + textTitles[targetId] + '</text>'));
                  putclone.multitext(320, 280, hextext[targetId], 355, { "font-size" : "14px", "text-anchor" : "middle", "fill" : "white", "stroke" : "white", "stroke-width" : "0.2", "font-weight" : "normal", "font-family" : "Corbert",  });
            }
          ) ;

      Snap.select("#circle_"+currentId).attr(activeIconAttr);      //set active icon in bottom bar
      // Snap.select("#circle_"+currentId).node.animation({activeIconAttr},1000);      //set active icon in bottom bar
      
}

var segmentClick = function() {
    // currentId = targetId;
    var targetId=this.attr("id");
     preparingViewMode (targetId)
}

function preparingViewMode (targetId) {
     cloneFlag = true;
     drawHexagonViewMode(targetId);
     bottomWrapper.animate({"transform" : "s1,1"}, rhythm*3, mina.elastic);
     Snap.select("#closecross").attr({"cursor" : "pointer"}).click( cloneClick );
     Snap.select("#arrowright").attr({"cursor" : "pointer"}).click( function() { changeInfoIntoHexagonViewMode( nextElement(nameS, currentId) ) });
     Snap.select("#arrowleft").attr({"cursor" : "pointer"}).click( function() { changeInfoIntoHexagonViewMode( prevElement(nameS, currentId) ) } );
}

var cloneClick = function (callback) {//close view mode of hexagon
  bottomWrapper.animate({"transform" : "s0.001,0.001"}, rhythm*2, mina.backin);
  group4clone.animate({"opacity" : 0}, rhythm, function(){ cloneFlag = false; group4clone.addClass("visibility_hid"); putclone.clear(); collapseAllSegment (); bindingHandling() });
  Snap.selectAll(".icoInBar").forEach( function (element) { element.attr(passiveIconAttr); } ) ;
}

changeInfoIntoHexagonViewMode = function(par){ 
   // console.log(currentId,par);
   group4clone.animate({"opacity" : 0}, rhythm, function(){  group4clone.addClass("visibility_hid"); putclone.clear(); collapseAllSegment (); drawHexagonViewMode (par) });
  Snap.selectAll(".icoInBar").forEach( function (element) { element.attr(passiveIconAttr); } ) ;
} 

autoOpeningInformationMode = function () {
  console.log("autoOpeningInformationMode");
}


function hoveroversegment () { 
      var that = this,
          targetId=that.attr("id"),
          target = Snap.select("#"+targetId+"-segment");
      // console.log( targetId );
            // Snap.select("#mr-segment").attr({d : segmentcontours["mr"]}); 
      target.stop().animate({d : segmentcontours[targetId]}, rhythm*2, mina.easinout);
      Snap.select("#circle_"+targetId).attr(activeIconAttr);
  };

 function hoveroutsegment() { 
      // console.clear();
  // console.log(cloneFlag);
      if ( cloneFlag ) {  return };
      var that = this,
      targetId=that.attr("id"),
      target = Snap.select("#"+targetId+"-segment");
      // oldD = target.data("oldD");
      // console.log("hoveroutsegment",target);
      // console.dir(Snap.selectAll(".segments"));
      // target.attr({d : initialsegmentcontours[targetId]});
      Snap.select("#circle_"+targetId).attr(passiveIconAttr);
      // console.log( Snap.select("#mr"));
      // Snap.select("#mr").attr({d : initialsegmentcontours["mr"]}); 
      collapseAllSegment ();
  };

function collapseAllSegment ()
    {
     Snap.selectAll(".segments").forEach( function (element) { 

        var targetId = element.attr("id");
        if (targetId.split("-")[0] == "mr") //it need becous mr have bug in contour animation
            { 
              element.stop().attr({d : initialsegmentcontours[targetId.split("-")[0]]}); 
              return
            }
        element.stop().animate({d : initialsegmentcontours[targetId.split("-")[0]]}, rhythm, mina.easinout); 
      })  
    }

