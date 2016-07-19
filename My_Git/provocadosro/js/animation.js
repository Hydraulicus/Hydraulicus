var rhythm = 300//ms
    ,blurFlag //whether to show animation fade in / fade out
    ,hexagonSvg, bottomSvg, cloneFlag = false, group4clone, putclone, currentId, bottomWrapper, clonedSegment, clone
    ,pathestoicons = [] ,hextext = [] ,textTitles = [], nameS = [], colors = []
    ,activeIconAttr = {fill : "rgba(200, 200, 200, 0.01)", opacity : 1,  "stroke-width" : 2}
    ,passiveIconAttr = {fill : "#F1F1F1", opacity : 0.7, "stroke-width" : 0}
    ; 

var  f, filterChild;// filter for fadein fadeout when sliding

function initAnimation (obj) {
    blurFlag = obj.blur;
    rhythm = obj.rhythm; 
    hexagonSvg = Snap(obj.hexagon); 
    bottomSvg = Snap(obj.bottombar); 
    rhythm = obj.rhythm * 1000;
    bottomWrapper = bottomSvg.g().attr({ "id" : "wraper"});
    bottomWrapper.transform("s0.001,0.001" ); //collapse bottom icon bar
    
    drawObjects(hexagonSvg, objects);
    drawObjects(bottomWrapper, bottomBar);

    insertIconsInBar(bottomWrapper, obj.hexagonSegmentsData);
    insertIconsInHex(hexagonSvg, obj.hexagonSegmentsData);
    drawObjects(hexagonSvg, hexcovers);
    bindingHandling();
    buildingCloneLayer();
    setTextTitlesInHexagon();
    colorSegments();
    bindEventstoArrow ();
};//end of init function


function buildingCloneLayer(){
    f = hexagonSvg.filter(Snap.filter.blur(0, 0)); filterChild = f.node.firstChild;
    group4clone = hexagonSvg.g().addClass("visibility_hid");
    clonedSegment = group4clone.g().attr({"id" : "clonedsegmentlayer" }); //layer for full stady hexagon for infoview mode
    putclone = group4clone.g().attr({"id" : "putclone", filter: f }); //layer for elements for infoview mode
    intoClone.forEach( function (element) { group4clone.add(Snap.parse( element ));} ) 
}

function drawObjects(target_, objects_)
    {
      for (var j in objects_)
        { 
          target_.add(Snap.parse(objects_[j]));
        }
   }

function colorSegments(){
  Snap.selectAll(".segments").forEach( function(element) 
        { var target = element.attr("id").split("-")[0];
            element.attr({fill : "red"});
            // console.log(target,colors[target]);
            element.attr({fill : colors[target]}); //color bottom icons according API
        } 
    )
}

setTextTitlesInHexagon = function (){
  Snap.selectAll(".titles").forEach( function(element) 
        { var target = element.attr("id").split("-")[0];
            element.node.textContent =  textTitles[target]
        } 
    )
}

function insertIconsInBar(target_, icons4insert)
{ var i=0;
  var arrayofIcoPlacess = Snap.selectAll(".bottomiconplace").forEach( function(element)
        {
            var icoBox = element.getBBox();
            var  x = icoBox.x + ( icoBox.w - icoBox.r0 ) * 0.5,
                 y = icoBox.y + ( icoBox.h - icoBox.r0 ) * 0.5,
                 h = icoBox.r0;
            target_.image(icons4insert[i]["pathToIco"], x, y, h, h);
            target_.circle(icoBox.cx, icoBox.cy, icoBox.r1 * 1.2) // cover circle. need for bind events
                    .attr({fill : "#F1F1F1", opacity : 0.7, stroke : icons4insert[i]["color"], "stroke-width" : 0, cursor : "pointer"})
                    .attr({"id" : "circle_" + icons4insert[i]["name"]})
                    .addClass("icoInBar")
                    .hover(hoverover, hoverout)
                    .click(clickOnBottomBarIcon)
                    ;
            pathestoicons[icons4insert[i]["name"]] = icons4insert[i]["pathToIco"];
            hextext[icons4insert[i]["name"]] = icons4insert[i]["text"];
            textTitles[icons4insert[i]["name"]] = icons4insert[i]["title"];
             nameS.push( {"key" : icons4insert[i]["name"]} );

            colors[icons4insert[i]["name"]] = icons4insert[i]["color"];
            element.attr({fill : icons4insert[i]["color"]}); //color bottom icons according API
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
            target_.circle(icoBox.cx, icoBox.cy, icoBox.r1 * 1.2) //  circle. need for show hover effect
                    .attr({id : "hexiconcircle_" + icons4insert[i]["name"], fill : "none", opacity : 0, stroke : icons4insert[i]["color"], "stroke-width" : 3, cursor : "pointer"})
                    ;
            element.attr({fill : icons4insert[i]["color"]}); //color icons in hexagon according API
            i++;
        })
}

var hoverover = function() {  this.attr(activeIconAttr) };
var hoverout = function() { this.attr(passiveIconAttr); Snap.select("#circle_"+currentId).attr(activeIconAttr); };

var clickOnBottomBarIcon = function () {
  var targetId=this.attr("id").split("_")[1];
  currentId = targetId;
  if (!cloneFlag) {
       preparingViewMode (targetId);
    }
    else 
    {
      changeInfoIntoHexagonViewMode( targetId );
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
    clone = Snap.select("#"+targetId+"-segment").clone();
    clonedSegment.add(clone);
    clone
      .stop()
      .attr({"id" : "clonedsegment"})
      .animate({"d" : "M468 541c0,0 0,0 0,0 -3,2 -7,3 -10,3l-292 0c-3,0 -6,-1 -9,-2l0 0 0 0c-3,-2 -6,-5 -8,-8l-146 -252c-2,-3 -3,-7 -3,-10l0 0 1 0c0,-3 1,-7 3,-10l145 -252c2,-3 5,-6 8,-8l156 270 0 0 0 0 155 -269c3,2 5,4 7,7l145 252c2,3 3,7 3,10 0,4 -1,7 -3,10l-145 252c-2,3 -4,5 -7,7l0 0zm-155 -269l-156 -270c0,0 0,0 0,0 3,-1 6,-2 9,-2l292 0c3,0 7,1 10,3l-155 269z"}, rhythm, mina.easiinout
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
}

function bindEventstoArrow () {
     Snap.select("#closecross").attr({"cursor" : "pointer"}).click( cloneClick );
     Snap.select("#arrowright").attr({"cursor" : "pointer"}).click( function() { changeInfoIntoHexagonViewMode( nextElement(nameS, currentId) ) });
     Snap.select("#arrowleft").attr({"cursor" : "pointer"}).click( function() { changeInfoIntoHexagonViewMode( prevElement(nameS, currentId) ) } );  
}

var segmentClick = function() {
    var targetId=this.attr("id");
     preparingViewMode (targetId)
}

function preparingViewMode (targetId) {
     cloneFlag = true;
     drawHexagonViewMode(targetId);
     bottomWrapper.stop().animate({"transform" : "s1,1"}, rhythm, mina.easeinout);
}

var cloneClick = function (callback) {//close view mode of hexagon
  bottomWrapper.stop().animate({"transform" : "s0.001,0.001"}, rhythm, mina.easeinout);
  group4clone.stop().animate({"opacity" : 0}, rhythm, function()
      {
         cloneFlag = false; 
         group4clone.addClass("visibility_hid"); 
         putclone.clear(); 
         clonedSegment.clear(); 
         collapseAllSegment (); 
         bindingHandling() 
       }
     );
  Snap.selectAll(".icoInBar").forEach( function (element) { element.attr(passiveIconAttr); } ) ;
}

var changeInfoIntoHexagonViewMode = function(par){  
  
   if ( blurFlag )
       {
           Snap.animate( 0, 20, function( value ) { filterChild.attributes[0].value = value + ',' + value;  }, rhythm, function()
              { 
                  putclone.clear(); 
                  autoOpeningInformationMode (par); 
              }
            );
        }
        else
        {
                  putclone.clear(); 
                  autoOpeningInformationMode (par);          
        };
} 

var autoOpeningInformationMode = function (targetId) {
    currentId = targetId;
    if ( blurFlag ) {
          Snap.animate( 20, 0, function( value ) { filterChild.attributes[0].value = value + ',' + value;  }, rhythm);
          clone.animate({"fill" : colors[targetId]}, rhythm);
        }
        else 
        {
         clone.attr({"fill" : colors[targetId]}); 
        };
    var icoBox = Snap.select("#topiconplace").getBBox();
    var  x = icoBox.x + ( icoBox.w - icoBox.r0 ) * 0.5,
         y = icoBox.y + ( icoBox.h - icoBox.r0 ) * 0.5,
         h = icoBox.r0;
    putclone.image( pathestoicons[targetId], x, y, h, h);
    putclone.add(Snap.parse('<text x="320" y="250" fill="white" stroke="white" stroke-width="0.2" font-weight="medium" font-size="30px" font-family="Corbert-Medium" text-anchor="middle">' + textTitles[targetId] + '</text>'));
    putclone.multitext(320, 280, hextext[targetId], 355, { "font-size" : "14px", "text-anchor" : "middle", "fill" : "white", "stroke" : "white", "stroke-width" : "0.2", "font-weight" : "normal", "font-family" : "Corbert",  });
    Snap.selectAll(".icoInBar").forEach( function (element) {  if (element.attr("id").split("_")[1] == currentId)  { element.attr(activeIconAttr) } else { element.attr(passiveIconAttr);}  } ) ;
  }


function hoveroversegment () { 
      var that = this,
          targetId=that.attr("id"),
          target = Snap.select("#"+targetId+"-segment");
      Snap.select("#hexiconcircle_"+targetId).attr({ opacity : 0.5 }); 
      Snap.select("#circle_"+targetId).attr(activeIconAttr);
  };

 function hoveroutsegment() { 
      if ( cloneFlag ) {  return };
      var that = this,
      targetId=that.attr("id"),
      target = Snap.select("#"+targetId+"-segment");
      Snap.select("#hexiconcircle_"+targetId).attr({opacity : 0}); 
      Snap.select("#circle_"+targetId).attr(passiveIconAttr);
  };

function collapseAllSegment ()
    {
     Snap.selectAll(".segments").forEach( function (element) { 

         var targetId = element.attr("id").split("-")[0];
         Snap.select("#hexiconcircle_"+targetId).attr({ opacity : 0 });

        if (targetId == "s2") //it need becous mr have bug in contour animation
            { 
              element.stop().attr({d : initialsegmentcontours[targetId]}); 
              return
            }
        // element.stop().attr({d : initialsegmentcontours[targetId.split("-")[0]]}); 
        element.stop().animate({d : initialsegmentcontours[targetId]}, rhythm, mina.easinout); 
      })  
    }


var nextElement = function(db, key) {
  for (var i = 0; i < db.length-1; i++) {
    if (db[i].key === key) {  return db[i + 1].key;  }
  }
  return db[0].key;
};

var prevElement = function(db, key) {
  for (var i = db.length-1; i > 0; i--) {
    if (db[i].key === key) { return db[i - 1].key;  }
  }
  return db[db.length-1].key;
};

// =================================  auto text wraper  ====================================
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
           dy: "1.75em",
           x: x
        });
        return t;
     };
  });