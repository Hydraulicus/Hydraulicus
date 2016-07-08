var rhythm = 300, //ms, of knee shacking
    timeKneeShake=10,
      //for constant animation of Abbas
      fastSpeedK = 75, //msec
      normSpeedK = 150, //msec
      nfast = 1500 / fastSpeedK,
      nNorm = 1500 / normSpeedK,
      cycle = nNorm+ nfast + nNorm;

var brand = [], dashi = [], secondhands = [], secondEyes = [], laptop=[], bubbles_arr = [], path4bubble = []
         ,portoBlocks = [] //array for text blocks of services popup
         ,constPlay = true //developer mode flag - to play constant animation
         ,clickFlag = false
         ,drinkOrYawn = true //flag - to show  drink coffe or Yawn
         ,pulseShow=false
         ,timeKnee = 0
         ,timeTyping = 0
         ,steamGradient
         ,path4throwing
         ,kneeR, pants, mug, leftHand, righthand, GhaziFace, GhaziSmile, GhaziMoustache, fingersOnMug0, mugSteam, GhaziSviter, GhaziElbow, GhaziSpich, GhaziFaceSet, SecondFaceSet, myMatrix, myMatrix2, Secondsmile, SecondSpeech, biN, secondsweater, throwedPaper, Bin, plant, can, flowers,waterб ,cooler,Glass,Cooler,water_into_glass,waterInGlass,_sheet, _printer, _blue_light, _red_light, _yellow_light;
var  strawCup, mapaId, HQGroup, satellitesGroup, regionalsGroup, map4events, lampGroup, calendarPaper, servicesSet, shalfesSet, semitransparentCoversSet, phonePopupGroup;
var transitionNote = 't0,0s0.1';
var transitionNoteEnd = 't0,0s1';
var clocK = {cx : 1842, cy : 149};

function initAnimation (obj) {
    animSvg = Snap(obj.blck); 
    rhythm = obj.rhythm * 1000;

    animSvg.add(Snap.parse(floor));//add underwindow and floor
    animSvg.add(Snap.parse(windw));//add underwindow and floor
  

 carpet = animSvg.path(carpetD).attr({fill:'#A2C3BE'});/*carpet*/
 brand[0] = animSvg.path(brandNameD).transform("t0,-5").attr({fill:'#8FB4B4'});/*brandName*/
 brand[1] = animSvg.path(brandNameD).transform("t0,-5").attr({fill:'#ABC9C5'}).animate({ transform: 't0,0' }, rhythm*3, mina.easeInOutQuad);/*brandName*/

animSvg.add(Snap.parse(chears));//add chears
path4throwing = animSvg.path("M1626 692c-7,-17 -11,-34 -20,-49 -4,-7 -10,-13 -18,-15 -8,-1 -19,0 -24,7 -10,13 -14,31 -16,47 -4,51 0,120 0,170").attr({ fill: "none", stroke: "red", opacity: "0" });

GhaziElbow = animSvg.circle(595, 625, 21).attr({opacity:1, id : 'elbow'}).addClass('fil1');

      for (var j in Ghazi[0]) 
        { animSvg.add(Snap.parse(Ghazi[0][j]));//Add stady Ghazy
        }
 
     for (var j in second) 
        { animSvg.add(Snap.parse(second[j]));//Add stady Second personag
        }

kneeR = animSvg.select('#kneeR');
pants = animSvg.select('#pants');

GhaziFaceSet = animSvg.paper.g();
SecondFaceSet = animSvg.paper.g();

var faceGroup = Snap.selectAll('.Ghaziface').forEach(function(element, index) {GhaziFaceSet.add(element);  });
var faceGroup2 = Snap.selectAll('.secondface').forEach(function(element, index) {SecondFaceSet.add(element);  });

myMatrix = new Snap.Matrix();
myMatrix.scale(0.01, 0.01,  773, 415);
var orMatrix = new Snap.Matrix();
orMatrix.scale(1, 1,  773, 415);
myMatrix2 = new Snap.Matrix();
myMatrix2.scale(0.01, 0.01,  1150, 415);
var orMatrix2 = new Snap.Matrix();
orMatrix2.scale(1, 1,  1200, 415);



GhaziSviter = Snap.select('#ghazisviter');
righthand = Snap.select('#handr');

GhaziFace = animSvg.ellipse(715, 438, 46, 70) //ellipse for face hover effect
                   .attr({opacity : 0, cursor : "pointer"})
                   .hover(GhaziMouseOn, GhaziMouseOff)
                   .click(function() {GhaziSpich.animate({transform : orMatrix}, 1000,  mina.bounce).attr({visibility : 'visible'});  document.body.addEventListener('click', fnClose, true);});
GhaziMoustache = Snap.select('#moustache');
leftHand = animSvg.path(lHand).addClass('fil2');
GhaziSmile = animSvg.path('M723 473c1,0 2,1 1,2 -5,2 -12,2 -17,0 -1,-1 0,-2 1,-2 5,2 10,2 15,0z').addClass('fil2').transform('s0').attr({opacity:0});
GhaziFaceSet.add(GhaziSmile); 

steamGradient = animSvg.gradient("l(0, 0, 1, 1)#efefef-#fff-#efefef");
mugSteam = animSvg.path(steam[0]+steam[1]+steam[2]+steam[3]).attr({opacity : 1, fill : steamGradient});
mug = animSvg.path(mugD).attr({stroke:'#1FB1E9', 'stroke-width':1, fill : '#1FB1E9', 'fill-rule' : "evenodd"});
mugInsude = animSvg.ellipse(907, 593, 19, 2).attr({'stroke-width' : 0, fill:"#4B89B6"});
fingersOnMug0 = animSvg.path(GhaziFingers[0]).addClass('fil2').attr({'opacity':0});

Secondsmile = Snap.select('#secondsmile');
SecondFace = animSvg.ellipse(1215, 438, 46, 70) //ellipse for face hover effect
                   .attr({opacity : 0, cursor : "pointer"})
                   .hover(SecondMouseOn, SecondMouseOff)
                   .click(function() { SecondSpeech.animate({transform : orMatrix2}, 1000,  mina.bounce).attr({visibility : 'visible'});  document.body.addEventListener('click', fnClose, true);});

secondhands[0] = Snap.select('#lefthand');
secondhands[1] = Snap.select('#righthand');
secondEyes[0] = Snap.select('.eye0');
secondEyes[1] = Snap.select('.eye1');
if ( constPlay ) constantAnimation();//////////////////!!!!!!!!!!!!!!!!!!//////////////////////

throwHandGroup = animSvg.paper.g().transform('r120,1090,624').attr({'id' : 'raisedThrowHand'});

        for (var i in dashing)
          { 
            dashi[i] = new Drawing( dashing[i].teg, '', dashing[i].time, dashing[i].fill);
          };
          dashi[0].initDraw(); 
          dashi[0].callOnFinished = function() {dashi[1].initDraw(); }; 

shalfesSetDraw();
if ( constPlay ) sheetprinters();//////////////////!!!!!!!!!!!!!!!!!!//////////////////////
drawCalendar();
if ( constPlay ) dispenserAnimation();//////////////////!!!!!!!!!!!!!!!!!!//////////////////////
animSvg.add(Snap.parse(throwPaper));
animSvg.add(Snap.parse(bin));
Bin = Snap.select('#bin')
          .attr({cursor : 'pointer'})
          .click(binClick);
animSvg.add(Snap.parse(SecondCup));
strawCup = Snap.select('#strawcup');
secondFingers = animSvg.path(AbassFingers[0]).addClass('fil2').attr({'opacity':0});


animSvg.polygon(0,500, 558,500, 548,0, 0,0).attr({fill : 'white', mask : Snap.select('#cloud1')});
animSvg.polygon(0,500, 548,500, 548,0, 0,0).attr({fill : 'white', mask : Snap.select('#cloud2')});
animSvg.polygon(0,500, 548,500, 548,0, 0,0).attr({fill : 'white', mask : Snap.select('#cloud3')});

drawObjects();

             animSvg.add(Snap.parse(plant));
             plant    =   Snap.select('#plant')
                         .attr({cursor : 'pointer'});
             plantAct =   Snap.select('#plant')
                         .click(plantClick)
                         .mouseover(plantOver)
                         .mouseout(plantOut);

            animSvg.add(Snap.parse(can));  
            can      =    Snap.select('#can')
                          .attr({opacity : 0});
            for (var f in flowers){ animSvg.add(Snap.parse(flowers[f]));}
            animSvg.selectAll('.flowers').forEach(function(flower, index){flower.attr({'transform': 's0 0'});});


animSvg.add(Snap.parse(bigopenedfile));

drawerHandler();

servicesPopUpDraw();

animSvg.add(Snap.parse(mapa));//add MAP
bookmarks.draw();
animSvg.add(Snap.parse(bigOpenedFile));//file full size , initialized hidden 
circlesssss = animSvg.add(Snap.parse(circles)) ;//add circles around pins of marks

speeches();

secondsweater = Snap.select('#secondsweater'); 
// if ( constPlay ) 
SecondConstAnimation();//////////////////!!!!!!!!!!!!!!!!!!//////////////////////
throwedPaper = Snap.select('#throwpaper').attr({opacity:0});


satellitesGroup = Snap.selectAll('.satellite').forEach(function(element1, index) { element1.attr({'opacity' : 0}).transform(transitionNote); });
 regionalsGroup = Snap.selectAll('.regional').forEach(function(element2, index) { element2.attr({'opacity' : 0}).transform(transitionNote); });
 HQGroup = Snap.selectAll('.hq').forEach(function(element3, index) {  element3.attr({'opacity' : 0}).transform(transitionNote );  });//it is working prop
 

map4events = Snap.select('#mapa');
Snap.select('#clickablemap')
                  .attr({cursor : 'pointer', opacity :0.01})
                  .click(mapClick);

Snap.select('#hqpost').attr({cursor : 'pointer'}).click(function(){ showOfficesName('hq')});
Snap.select('#regionalpost').attr({cursor : 'pointer'}).click(function(){ showOfficesName('regionalpost')});
Snap.select('#satellitepost').attr({cursor : 'pointer'}).click(function(){ showOfficesName('satellitepost')});
Snap.select('#annotation').attr({cursor : 'default', 'opacity' : 0});
Snap.select('#closer').attr({cursor : 'default', 'opacity' : 0});

lampGroup = Snap.selectAll('.lamp').forEach(function(element, index) {  element.attr({'cursor' : 'pointer'}).click(lampTurnOnOff);  });

if ( constPlay ) clockAnimation();//////////////////!!!!!!!!!!!!!!!!!!//////////////////////

phonePopupDraw();
laptopEvents();
};//end of init function

function laptopEvents(){
  Snap.select("#macbook").click(laptopPortfolioAnimation).attr({'cursor' : 'pointer'});
  Snap.select("#macbook2").click(laptopPortfolioAnimation).attr({'cursor' : 'pointer'});
}

function laptopPortfolioAnimation(){
    $("#4splashpage").removeClass("display_none");
    showMacbook();

    // $.ajax({
    //   type: "GET",
    //   // data: {},
    //   // url: "http://ableserver.hopto.org/sw-api/utility.php?task=getAllPortfolioData",
    //   url: "http://ableserver.hopto.org/sw-api/utility.php?task=getAllPortfolioData&callback=mycallback",
    //   // jsonpCallback: 'callback',
    //   dataType: 'jsonp',
    //   success: function(data){
    //     console.log( "Retriev data: ", data );
    //   },
    //   error: function (xhr, ajaxOptions, thrownError) {
    //   console.log(xhr.status);
    //   console.log(thrownError);
    // }
    // });

}

// callback = function callback() {}
// mycallback = function(data){
//   alert(data.foo);
// };

var bigMacBookSnap, bigArrow, MacBookTitle, currentPage, bigMac;

function showMacbook(){
  // console.log('showMacbook');
  currentPage = -1;//show title page
  bigMacBookSnap = Snap("#splashMacBook").attr({ viewBox: "0 0 1920 1080", preserveAspectRatio : "xMidYMid meet"});
  bigMacBookSnap.add(Snap.parse(bigSizeLaptop));
  // Snap.select("#bigcross").transform('s0.01,0.01').removeClass("visibility_hid").animate({transform : "s1,1"}, rhythm, mina.backout, function(){});
  var bigCross = Snap.select("#bigcross").attr({'cursor' : 'pointer'}).click(removebigMacBook);
   bigArrow = Snap.select("#bigarrow").attr({'cursor' : 'pointer'}).click(nextPageInMacBook);
  var macbookinterfaceLine = Snap.select("#macbookinterface");
  bigMac = Snap.select("#bigmacbook");
  bigMac.append(bigCross).append(bigArrow).append(macbookinterfaceLine);
  bigMac.transform('s0.01,0.01').removeClass("visibility_hid").animate({transform : "s1,1"}, rhythm, mina.backout, function(){});
  nextPageInMacBook(currentPage);
}  

function nextPageInMacBook(nPage){
  if ( typeof MacBookPage !== "undefined")  { MacBookPage.hide(); }
  ++currentPage;
  if (currentPage > getAllPortfolioData["results"]['items'].length-1) currentPage = 0;
  MacBookPage = new portfolioMacBookPage(currentPage);
   MacBookPage.show();
  // bigArrow.hover(MacBookPage.blurePage, MacBookPage.unblurePage);
}

function removebigMacBook(){
  console.log('removebigMacBook');
  bigMac.animate({transform : "s0.01,0.0"}, rhythm, mina.backin, function(){ $("#4splashpage").addClass("display_none"); bigMacBookSnap.clear();});
}

function portfolioMacBookPage (itemN){
  var text = [];
  var followPage;
  var f = bigMacBookSnap.filter(Snap.filter.blur(10, 10)), filterChild = f.node.firstChild;

  this.show  = function (){
      Snap.select("#topbox").attr({fill : "#" + getAllPortfolioData["results"]['items'][itemN]["backColor1"]});
      Snap.select("#rightbox").attr({fill : "#" + getAllPortfolioData["results"]['items'][itemN]["backColor2"]});
      Snap.select("#bottombox").attr({fill : "#" + getAllPortfolioData["results"]['items'][itemN]["backColor3"]});

        text[0] = bigMacBookSnap.image(getAllPortfolioData["results"]['items'][itemN]['image1URL'], 343, 363, 875, 539); 
        text[1] = bigMacBookSnap.multitext(805, 240, getAllPortfolioData["results"]['items'][itemN]['title'], 500, { "font-size": "3rem","fill":"#FFF8DC","font-family" : "Arial","text-anchor" : "middle" });
        text[2] = bigMacBookSnap.multitext(1250, 330, getAllPortfolioData["results"]['items'][itemN]['description'], 320, { "font-size": "1.2rem","fill":" #FFF8DC","font-family" : "Arial","text-anchor" : "start" });
      
      var titleShow = (getAllPortfolioData["results"]['items'][itemN]["showImageTitle"] == 1) ? true : false; //show whether titles

      if (titleShow) 
      {
        text[3] = bigMacBookSnap.multitext(495, 330, getAllPortfolioData["results"]['items'][itemN]['image1Title'], 500, { "font-size": "2rem","fill":"#FFF8DC","font-family" : "Arial","text-anchor" : "middle" }).attr({cursor : "pointer"}).click(function(){ showImage(1) });
        text[4] = bigMacBookSnap.multitext(785, 330, getAllPortfolioData["results"]['items'][itemN]['image2Title'], 500, { "font-size": "2rem","fill":"#FFF8DC","font-family" : "Arial","text-anchor" : "middle" }).attr({cursor : "pointer"}).click(function(){ showImage(2) });
        text[5] = bigMacBookSnap.multitext(1070, 330, getAllPortfolioData["results"]['items'][itemN]['image3Title'], 500, { "font-size": "2rem","fill":"#FFF8DC","font-family" : "Arial","text-anchor" : "middle" }).attr({cursor : "pointer"}).click(function(){ showImage(3) });
      }

       followPage = Snap.select('#bigmacbook');
        text.forEach(function(element) {element.attr({filter: f});});
        Snap.animate( 20, 0, function( value ) { filterChild.attributes[0].value = value + ',' + value;  }, rhythm );
       text.forEach( function(element) {followPage.add(element) });
  }

  showImage = function(TitleNumber) {
    text[0].remove();
    text[0] = bigMacBookSnap.image(getAllPortfolioData["results"]['items'][itemN]['image'+TitleNumber+'URL'], 343, 363, 875, 539); 
  }

  this.hide = function () {
      text.forEach(function(element) {element.remove();})
  }

  this.blurePage = function (){
    Snap.animate( 0, 20, function( value ) { filterChild.attributes[0].value = value + ',' + value;  }, rhythm );
  }   
  this.unblurePage = function (){
    Snap.animate( 20, 0, function( value ) { filterChild.attributes[0].value = value + ',' + value;  }, rhythm );
  } 
}

// var MacBookPage = new portfolioMacBookPage(0);
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
function phonePopupDraw(){
    Snap.select('#phoneCover').click(phoneClick).attr({cursor : "pointer"});
   phonePopupGroup = animSvg.paper.g().attr({'id' : 'services'}).addClass("visibility_hid").transform('t0 150,s0.01');
   for (var j in phonePopUp) {    
                  phonePopupGroup.add(Snap.parse(phonePopUp[j]));     
   }
}

function phoneClick(){
  phonePopupGroup.removeClass('visibility_hid').animate({transform : "t0 50,s1 1"}, rhythm, mina.backout);
  Snap.select('#phonepopupcross').click(phoneClose).attr({cursor : "pointer"});
}

function phoneClose(){
   // console.log('phoneClick');
  phonePopupGroup.animate({transform : "t0 200,s0.01"}, rhythm, mina.backin, function(){this.addClass('visibility_hid')});
}



function shalfesSetDraw(){
    shalfesSet = animSvg.paper.g()
          .attr({'id' : 'services', 'cursor' : 'pointer'})
          .click(shalfesSetClick);
        for (var j in shelfs) { shalfesSet.add(Snap.parse(shelfs[j])) };  
}

function servicesPopUpDraw() {
var servicePattern = animSvg
 .path("M10-5-10,15M15,0,0,15M0-5-20,15").attr({
        fill: "none",
        stroke: "#ddd"
    }).pattern(0, 0, 10, 10);

var serviceBackground = animSvg.polyline(221,137, 1699,137, 1699,995, 221,995).attr({fill : "#fff"});
var serviceBackgroundPatterned = animSvg.polyline(221,137, 1699,137, 1699,995, 221,995).attr({fill : servicePattern});


    servicesSet = animSvg.paper.g().attr({'id' : 'services'}).addClass("visibility_hid").transform('t600 -350,s0.01');
    servicesSet.add(serviceBackground).add(serviceBackgroundPatterned);

      for (var j in servicesPopUp) { 
          if( Object.prototype.toString.call( servicesPopUp[j] ) === '[object Array]' ) {//text with background are array
              portoBlocks.push(animSvg.paper.g());//create group for thisblock and add it to array
              var tempString = '';
              servicesPopUp[j].forEach(function(element, index){ tempString += element; })// 
              portoBlocks[portoBlocks.length-1].add(Snap.parse(tempString)).attr({'id' : portoBlocks.length-1});
              var tempcoord = portoBlocks[portoBlocks.length-1].getBBox();
              var bobo = animSvg.multitext(tempcoord.x+35, tempcoord.y+35, textblocks[portoBlocks.length-1], tempcoord.w-35,  { "font-size": "20px", "font-family":'Arial'  });
              portoBlocks[portoBlocks.length-1].add(bobo);
              portoBlocks[portoBlocks.length-1].transform('s1 0.005 '+tempcoord.x+' '+tempcoord.y).addClass("visibility_hid")
          }

          else { 
                  var unit_= Snap.parse(servicesPopUp[j]);
                  servicesSet.add(unit_);
                }
        }//end for

    semitransparentCoversSet = animSvg.paper.g().attr({'id' : ''}).addClass("visibility_hid");

        for (var j in semitransparentCovers) { 
                  semitransparentCoversSet.add(Snap.parse(semitransparentCovers[j]));
          if (j == semitransparentCovers.length-1) { Snap.selectAll(".blocks").forEach(function(element){element.mouseover(mouseOnGrayTitle).mouseout(mouseOutGrayTitle);}) }
        }//end for

};

function mouseOnGrayTitle (){
  var that = parseInt( this.attr('id').split('_')[1] );
  var tempcoord = portoBlocks[that].getBBox();
  // console.log(that,tempcoord);
  portoBlocks[that].stop().removeClass("visibility_hid").animate( {transform : 's1 1 '+tempcoord.x+' '+tempcoord.y}, rhythm*0.3, mina.easeinout)
}

function mouseOutGrayTitle (){
  var that = parseInt( this.attr('id').split('_')[1] );
  var tempcoord = portoBlocks[that].getBBox();
  // portoBlocks[portoBlocks.length-1].stop().animate( {transform : 's1 0.001 '+tempcoord.x+' '+tempcoord.y}, rhythm, mina.backin )
  portoBlocks[that].stop().animate( {transform : 's1 0.001 '+tempcoord.x+' '+tempcoord.y}, rhythm*0.3, mina.easeinout ).addClass("visibility_hid")
}


function shalfesSetClick(){
  console.log('shalfesSetClick');
  Snap.select('#mapa').animate({opacity : 0},rhythm*0.75, function(){this.addClass('visibility_hid');  });
  Snap.select("#servicesCross").click(servicesPopUpClose).attr({'cursor' : 'pointer'});
  servicesSet.removeClass("visibility_hid").stop().animate({transform : transitionNoteEnd},  rhythm*1.5,  mina.backout);
  semitransparentCoversSet.removeClass("visibility_hid")//.stop().animate({transform : transitionNoteEnd},  rhythm*1.5,  mina.backout);

}

function servicesPopUpClose() {
  Snap.select("#servicesCross").unclick(servicesPopUpClose);
  semitransparentCoversSet.addClass("visibility_hid");
  servicesSet.stop().animate({transform : 't600 -500,s0.01'}, rhythm*1.5,  mina.backin, function(){servicesSet.addClass("visibility_hid"); Snap.select('#mapa').removeClass('visibility_hid').animate({opacity : 1},rhythm*0.5);});
}
  
function shifter(val) {
  var startshift = 77.5;
  return [val+startshift, clocK.cx, clocK.cy].join(' ');
}

function clockAnimation(){
var date = new Date();
var hoursAngle = 360 * date.getHours() / 12 + date.getMinutes() / 2;
var minuteAngle = 360 * date.getMinutes() / 60;
var secAngle = 360 * date.getSeconds() / 60;

var hourhand = Snap.select("#hourhand").transform('r'+shifter(hoursAngle)).animate({transform : shifter(hoursAngle+360*12)},43200*12*1000);
var minutehand = Snap.select("#minutehand").transform('r'+shifter(minuteAngle)).animate({transform : 'r'+shifter(minuteAngle+360*60)},3600*60*1000);
var secondhand = animSvg.line(clocK.cx, clocK.cy, clocK.cx-50, clocK.cy).attr({'stroke-width' : 1, 'stroke' : 'red'}).transform('r'+shifter(secAngle)).animate({transform : 'r'+shifter(minuteAngle+360*3600)},60*1000*3600);
}

function dispenserAnimation(){
             animSvg.add(Snap.parse(cooler));
            Cooler = Snap.select('#cooler')
                         .attr({cursor : 'pointer'})
                         .click(coolerClick)
                         .mouseover(coolerOver)
                         .mouseout(coolerOut);

            animSvg.add(Snap.parse(glass));  
            Glass = Snap.select('#glass')    
                         .attr({cursor : 'pointer',opacity : 0})      
                         .click(coolerClick)
                         .mouseover(coolerOver)
                         .mouseout(coolerOut);


            bubble = animSvg.add(Snap.parse(bubbles));
            Snap.select('.bubble').attr({opacity:0});

            for (var n_path in path4bubbles){
                     path4bubble[n_path] = animSvg.path(path4bubbles[n_path]).addClass('fil3');
            }  

            setTimeout(function(){bubbleStart()}, rhythm*randomInteger(20, 60));
            setTimeout(function(){bubbleStart()}, rhythm*randomInteger(0, 20));
            setTimeout(function(){bubbleStart()}, rhythm*randomInteger(60, 170));
            
            
            animSvg.add(Snap.parse(bottle));  
            var Bottle = Snap.select('#bottle')
                             .attr({opacity:0.8});
}

function sheetprinters(){
  animSvg.add(Snap.parse(rectangle_under_printer)); 
            animSvg.add(Snap.parse(sheet)); 
            animSvg.add(Snap.parse(printer)); 
            animSvg.add(Snap.parse(blue_light)); 
            animSvg.add(Snap.parse(red_light)); 
            animSvg.add(Snap.parse(yellow_light)); 

            _sheet         = Snap.select('#sheet').click(printerClick);

            _printer       = Snap.select('#printer')
                                           .attr({cursor : 'pointer'})      
                                           .click(printerClick);

            _blue_light    = Snap.select('#blue_light').attr({opacity : 0});

            _red_light     = Snap.select('#red_light').attr({opacity:0.8});

            _yellow_light  = Snap.select('#yellow_light').attr({opacity:0.8});

             blueStart();
}

function printerClick(){
            if (!_printer.hasClass('active')){

                        _printer.addClass('active');
                        _sheet.animate({transform: "t0,80"}, rhythm*10, mina.easyinout , function(){setTimeout(function(){sheetDisapear()},rhythm*30);});
            }

}

function sheetDisapear(){

             _sheet.animate({opacity : 0} , rhythm*6 , mina.easyinout , function(){  _sheet.attr({transform: ""}); _sheet.animate({opacity : 1}, rhythm*2, function(){ _printer.removeClass('active');}); })

            
}
function blueStart(){

              _blue_light.animate({opacity : 1} , rhythm*2 , mina.easyinout , function(){ blueOff(); })

}
 function blueOff(){

             _blue_light.animate({opacity : 0} , rhythm*2 , mina.easyinout , function(){ blueStart(); })
 }

function drawCalendar(){
  animSvg.add(Snap.parse(wallcalendar));
  calendarPaper = Snap.select("#calendarpaper").attr({'cursor' : 'pointer'}).click(flipCalendar);
}

function flipCalendar(){

  // calendarDigBl.clone().addClass('cloned').animate({transform: 'skewX(25) translate(-75 170) scale(1 -0.05)'}, rhythm*13, mina.easeout, function(){console.log(this.attr('class')); this.remove()});
  calendarPaper.clone().addClass('cloned').animate({transform: 'skewX(25) translate(-75 170) scale(1 -0.05)'}, rhythm, mina.easeout
      ,function(){
        Snap.selectAll(".cloned .datesblocks").forEach(function(element, index) {  element.addClass("visibility_hid");   }) ; //horizontal position
        this.animate({transform: 'skewX(0) translate(0 325)  scale(1 -1)'}, rhythm, mina.easein, function(){//hight position
              this.animate({transform: ' translate(0 165) scale(1 -0.01) '}, rhythm, mina.easeout, function(){ this.remove() }) //back stroke
          })
       }
  );
}

function drawerHandler()
{
   Snap.selectAll('.drawer').forEach(function(element, index) {  element.attr({'cursor' : 'pointer'}).click(drawerClick).hover(drawerMouseOn, drawerMouseOff);  });
   Snap.selectAll('.files').forEach(function(element, index) {  element.attr({transform : 's1,0.5'}); });
}

var operadedFile, operadedFilePrevAttr = {}, thisDrawer, gettegId, clickDrawerEvent = false;

function fileTitle (){
  var text = [];
  this.show  = function (){
      titlePage = true;
      text[0] = animSvg.multitext(955, 420, getallcabinetdata["results"]['cabinetTitle'], 500,{ "font-size": "5rem","fill":"gold","font-family" : "Arial","text-anchor" : "middle" });
      text[1] = animSvg.multitext(740, 720, getallcabinetdata["results"]['cabinetDescription'] , 500,{ "font-size": "1.5rem","fill":"gold","font-family" : "Arial","text-anchor" : "start" });
      text.forEach(function(element) {element.transform("t-500,100 s0.1,0.1").animate({transform : "t0,0 s1,1"}, rhythm*3, mina.backout);})
  }
  this.hide = function () {
      text.forEach(function(element) {element.animate({transform : "t-500,100 s0.1,0.1"}, rhythm*3, mina.backin, function(){this.remove()});})
  }
  
  this.shiftAwayPage = function (){
    // console.log('title shiftAwayPage');
    Snap.select('#text_title')
        .clone()
        .add(text)
        .animate({transform : 't-345,0 s0.01,1'}, rhythm*3, mina.easeinout, function(){ titlePage = false; this.remove()});
  } 
}


function portfolioPage (itemN){
  // var itemN = this.itemN;
  var text = [];
  var followPage;

  this.show  = function (){
      // console.log(itemN);
      text[0] = animSvg.multitext(955, 210, getallcabinetdata["results"]['items'][itemN]['title'], 500,{ "font-size": "3rem","fill":"gold","font-family" : "Arial","text-anchor" : "middle" });
      text[1] = animSvg.multitext(955, 280, getallcabinetdata["results"]['items'][itemN]['subtitle'], 500,{ "font-size": "2rem","fill":"gold","font-family" : "Arial","text-anchor" : "middle" });
      text[2] = animSvg.multitext(730, 730, getallcabinetdata["results"]['items'][itemN]['description'], 520,{ "font-size": "1.2rem","fill":"gold","font-family" : "Arial","text-anchor" : "start" });
      text[3] = animSvg.image(getallcabinetdata["results"]['items'][itemN]['image_url'], 688, 320, 552, 345);
      // text[4] = animSvg.multitext(880, 950, getallcabinetdata["results"]['items'][itemN]['add_date'], 500,{ "font-size": "1rem","fill":"gold","font-family" : "Arial","text-anchor" : "start" });
      text[5] = Snap.parse('  <polygon fill="#FFCC00" stroke="#FFCC00" stroke-width="0.566929" points="683,374 683,315 742,315 "/><polygon fill="#FFCC00" stroke="#FFCC00" stroke-width="0.566929" points="684,612 684,670 742,670 "/><polygon fill="#FFCC00" stroke="#FFCC00" stroke-width="0.566929" points="1245,374 1245,315 1186,315 "/><polygon fill="#FFCC00" stroke="#FFCC00" stroke-width="0.566929" points="1245,612 1245,670 1186,670 "/>');
       followPage = Snap.select('#text_title').clone();
       followPage.add(text[0]).add(text[1]).add(text[2]).add(text[3]).add(text[5]);
       // text.forEach(function(element){ followPage.add(elem); }) ;
  }
  this.hide = function () {
      text.forEach(function(element) {element.animate({transform : "t-500,100 s0.1,0.1"}, rhythm*3, mina.backin, function(){this.remove()});})
  }
  
  this.shiftAwayPage = function (){
    followPage.stop().animate({transform : 't-345,0 s0.01,1'}, rhythm, mina.easeinout, function(){this.remove()});
  } 
}


var titleText = new fileTitle();
var bookmarks = new fileTabs();
var titlePage = false;


var bookmarkGroup ;

function fileTabs(){
  var bookmark = [], temp = [], covers = [], pages;

this.draw = function(){
    bookmarkGroup = animSvg.paper.g().transform('t-40,0').attr({'id' : 'bookmarkgroup'}).addClass('visibility_hid');
     temp[0] = ''//closer cross here;
     temp[1] = '<text id="text_1" class="tab1 bookmarks" x="914" y="540" fill="white" stroke="black" stroke-width="0.2" font-weight="bold" font-size="18.8px" font-family="Arial" text-anchor="middle" transform="matrix(2.64845E-014 -1 0.999999 2.64845E-014 790.152 1206)">' + getallcabinetdata["results"]['items'][0]['tab_text'] + '</text>';
     temp[2] = '<text id="text_2" class="tab2 bookmarks" x="923" y="540" fill="white" stroke="black" stroke-width="0.2" font-weight="bold" font-size="18.8px" font-family="Arial" text-anchor="middle" transform="matrix(2.64845E-014 -1 0.999999 2.64845E-014 790.152 1365)">' + getallcabinetdata["results"]['items'][1]['tab_text'] + '</text>';
     temp[3] = '<text id="text_3" class="tab3 bookmarks" x="923" y="540" fill="white" stroke="black" stroke-width="0.2" font-weight="bold" font-size="18.8px" font-family="Arial" text-anchor="middle" transform="matrix(2.64845E-014 -1 0.999999 2.64845E-014 790.152 1524)">' + getallcabinetdata["results"]['items'][2]['tab_text'] + '</text>';
     temp[4] = '<text id="text_4" class="tab4 bookmarks" x="923" y="540" fill="white" stroke="black" stroke-width="0.2" font-weight="bold" font-size="18.8px" font-family="Arial" text-anchor="middle" transform="matrix(2.64845E-014 -1 0.999999 2.64845E-014 790.152 1683)">' + getallcabinetdata["results"]['items'][3]['tab_text'] + '</text>';
     temp[5] = '<text id="text_5" class="tab5 bookmarks" x="923" y="540" fill="white" stroke="black" stroke-width="0.2" font-weight="bold" font-size="18.8px" font-family="Arial" text-anchor="middle" transform="matrix(2.64845E-014 -1 0.999999 2.64845E-014 790.152 1842)">' + getallcabinetdata["results"]['items'][4]['tab_text'] + '</text>';
    for (var j in tabs)
        { 
          bookmark[j]= {'tab' : Snap.parse(tabs[j]), 'text' :  Snap.parse(temp[j]), 'cover' : Snap.parse(tabcovers[j])};
          bookmarkGroup
          .add(bookmark[j].tab)
          .add(bookmark[j].text)
          .add(bookmark[j].cover)
          ;
        }
        Snap.selectAll('.tabcover').forEach(function(element) { element.attr({cursor : 'pointer'}).hover(hoverIn, hoverOut).click(clickTab) })
}

  clickTab = function(event){
    var targetElement = event.target || event.srcElement,
    indexEl = targetElement.id.split('_');

    Snap.selectAll('.activetab')[0].removeClass('activetab').animate({fill : "#666666"}, rhythm * 0.5, mina.backin); 
    Snap.select('#tabtext_'+indexEl[1])
        .addClass('activetab')
        .animate({transform : "s1.2,1.2"}, rhythm * 0.5, mina.backin, function(){this.animate({transform : "s1,1"}, rhythm * 0.5, mina.backout)});
    if ( indexEl[1] === '0' ) //cross pressed
        {  
          if (typeof pages !== "undefined") { pages.shiftAwayPage();  }
          fileClose(); 
          return 
        } 

    if ( titlePage ) { titleText.shiftAwayPage();  } 
      else 
        if (typeof pages !== "undefined")  { pages.shiftAwayPage();   }
     titlePage = false; 
    // console.log('start new page',(parseInt(indexEl[1])-1));
     pages = new portfolioPage(parseInt(indexEl[1])-1);
     pages.show();
  }


  hoverIn = function(event){ 
    // console.log('hover In',element) ;
    var targetElement = event.target || event.srcElement,
    indexEl = targetElement.id.split('_');
    Snap.select('#tabtext_'+indexEl[1]).animate({fill : "#3F3F3F"}, rhythm * 0.5, mina.backin);
  }
  hoverOut = function(event){ 
    var targetElement = event.target || event.srcElement,
    indexEl = targetElement.id.split('_');
    element = Snap.select('#tabtext_'+indexEl[1]); 
   if ( ! element.hasClass('activetab') ) { element.animate({fill : "#666666"}, rhythm * 0.5, mina.backin); }
 }

  this.show = function(){
    bookmarkGroup.removeClass('visibility_hid')
    .animate({'transform' : 't0,0'}, rhythm, mina.backout)
  }
  this.hide = function(){
    bookmarkGroup.stop().animate({'transform' : 't-40,0 '},rhythm,mina.backin, function(){bookmarkGroup.addClass('visibility_hid'); });
  }

};

function drawerClick(element){
   if  (clickDrawerEvent) return;
   clickDrawerEvent = true;
   titleText.show();

   var shiftout = 't0,18';
   gettegId = this.attr("id");
   thisDrawer = this;
   this.stop()
       .unhover(drawerMouseOn, drawerMouseOff)
       .animate({'transform' : shiftout}, rhythm, mina.easeinout);

   var innerfileD='M616 104c219,0 438,0 657,0 17,0 30,14 30,31l0 847c0,17 -13,30 -30,30 -219,0 -438,0 -657,0l0 -908z';
   var outerfileD='M616 104c-123,-54 -266,-80 -424,-72 -16,1 -30,14 -30,31l0 847c0,16 14,31 30,30 146,-4 291,24 424,72l0 -908z';
 
   operadedFile = Snap.selectAll('.'+gettegId); 
   operadedFilePrevAttr.d = operadedFile[0].attr('d'); 
   operadedFilePrevAttr.parenT = operadedFile[0].parent(); 
   Snap.select('#mapa').animate({opacity : 0},rhythm);
       
   operadedFile[0].animate({"d" : innerfileD}, rhythm*3, mina.backout, function(){
        // Snap.select("#fileclosecross").click(fileClose).attr({cursor : "pointer"});

        Snap.selectAll('.filesfromdrawers').forEach(function(element, index) 
              {
                  element.removeClass('visibility_hid'); 
              });
        Snap.select("#semytransparentfirstpage").animate({"d" : outerfileD, "opacity" : 0.5}, rhythm*5, mina.easeinout, function(){bookmarks.show();})
       })
}

//close file
function fileClose () {
  // console.log('Click - close file');
  bookmarks.hide();

  Snap.select("#fileclosecross").unclick(fileClose);
  document.body.removeEventListener('click', fileClose, true); 
  Snap.select("#semytransparentfirstpage").animate({"d" : "M616 104c219,0 438,0 657,0 17,0 30,14 30,31l0 847c0,17 -13,30 -30,30 -219,0 -438,0 -657,0l0 -908z", "opacity" : 0.85}, rhythm*2, mina.easeinout
          ,function(){
              titleText.hide();
              Snap.selectAll('.filesfromdrawers').forEach(function(element, index) { element.addClass('visibility_hid'); });
              operadedFile.animate({"d" :operadedFilePrevAttr.d }, rhythm*3, mina.backin, function(){ thisDrawer.hover(drawerMouseOn, drawerMouseOff).animate({'transform' : 't0,0'}, rhythm, mina.easeinout);  Snap.selectAll('.'+gettegId).forEach(function(element, index) 
                {  element.stop().attr({transform : 's1,0.5'}); 
                   clickDrawerEvent = false;
                   Snap.select('#mapa').animate({opacity : 1},rhythm);
                 });    
            }); 
          }
    );
}

function drawerMouseOn(element){
   var shiftout='t0,18';
   var gettegid=this.attr("id");
   this.stop().animate({'transform' : shiftout}, rhythm, mina.easeinout);
   Snap.selectAll('.'+gettegid).forEach(function(element, index) {  element.stop().animate({transform : 's1,1'},rhythm);});    
}

function drawerMouseOff(element){
   var shiftout='t0,0';
   var gettegid=this.attr("id");
   this.stop().animate({'transform' : shiftout}, rhythm, mina.easeinout );
   Snap.selectAll('.'+gettegid).forEach(function(element, index) { element.stop().attr({transform : 's1,0.5'});   });    
}

function plantClick(){
            if(!can.hasClass('active')) {
                    can.addClass('active').attr({opacity : 1});
                    can.animate({'transform': 'r-15 30 1020'},rhythm*3,mina.easyinout,function(){
                                     for (var w in water){ waterDraw( water[w])};
                    });
       }             
}

function waterDraw(xpath){

           var innerCircle = animSvg.path(xpath).attr({
                     fill            : "none",
                     stroke          : '#15B7E4',
                     strokeWidth     : 1,
                     strokeDasharray : "5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 ",
                     strokeDashoffset: 500,
                     opacity         : 1,
                     class           : 'waters'
           });

          Snap.animate(0,rhythm*0.3, function( value ){innerCircle.attr({ 'strokeDashoffset': value })},rhythm*5, function(){canPutInPlace();});
}

function canPutInPlace(){
            
               animSvg.selectAll('.waters').forEach(function(water, index){
                                 water.animate({opacity:0},rhythm);
                    });

               can.animate({'transform': 'r-0 30 1020'},rhythm*3,mina.easyinout,function(){canDisapear();});//flowersGrowUp();
}
function flowersGrowUp(){
              animSvg.selectAll('.flowers').forEach(function(flower, index){
                      
                                 flower.animate({'transform': 's1 1'},rhythm*10,mina.easyinout, function(){setTimeout( function(){flowerDissapear()}, rhythm*10 );});
               });
}

function canDisapear(){

            can.removeClass('active');
            can.animate({opacity:0},rhythm*2,function(){setTimeout( function(){flowersGrowUp();}, rhythm*5 );});//flowerDissapear();
}

function flowerDissapear(){
             animSvg.selectAll('.flowers').forEach(function(flower, index){
                                flower.animate({'transform': 's0 0'},rhythm*10,mina.easyinout);
              });
}

function plantOver(){

               can.animate({opacity:1},rhythm);     
}

function plantOut(){
               if(!can.hasClass('active')){
                            can.animate({opacity:0},rhythm);

               }
}


function lampTurnOnOff(){
  Snap.select('#lamp').toggleClass('fil10on');
  Snap.select('#ghazisviter').toggleClass('fil1on');
}

function stopEvent(ev) {
  ev.stopPropagation();
  ev.preventDefault();
}


function showOfficesName(par){
// pulseShow = false; 
Snap.selectAll('.circles').forEach(function(element, index) {element.stop().attr({r : 1, 'stroke' : 'none'});});//stop ALL cirkle animations

 HQGroup.forEach(function(element1, index) { element1.attr({'opacity' : 0}).transform( transitionNote); });
regionalsGroup.forEach(function(element2, index) { element2.attr({'opacity' : 0}).transform( transitionNote); });
satellitesGroup.forEach(function(element3, index) { element3.attr({'opacity' : 0}).transform( transitionNote); });

 switch (par) {
   case 'hq' : { //pulseShow = true;
                   HQGroup.forEach(function(elem, index) { elem.stop().attr({'opacity' : 1}).animate({transform : transitionNoteEnd}, 300,  mina.bounce); });
                  if (pulseShow) Snap.selectAll('.californiacircle').forEach(function(element, index) {element.attr({'stroke' : 'red'});  circlePulse(element);});
               }
   break

   case ('regionalpost'):
   case ('officespost' ): { //pulseShow = true; 
                            regionalsGroup.forEach(function(element, index) { element.stop().attr({'opacity' : 1}).animate({transform : transitionNoteEnd}, 300,  mina.bounce); });
                            if (pulseShow) Snap.selectAll('.regionalcircle').forEach(function(element, index) { element.attr({'stroke' : 'red'});  circlePulse(element);});
                          }
   break

   case ('satellitepost') :
   case ('locationspost') : { 
                                // pulseShow = true; 
                                satellitesGroup.forEach(function(element, index) { element.stop().attr({'opacity' : 1}).animate({transform : transitionNoteEnd}, 300,  mina.bounce); });
                               if (pulseShow)  Snap.selectAll('.satellitepostcircle').forEach(function(element, index) { element.attr({'stroke' : 'red'});  circlePulse(element);});
                              } 
   break

 }
}

function circlePulse(el)
{ 
    // console.log(pulseShow,el.attr('class'));
    if (!pulseShow) return
    setTimeout(function(){el.attr({r : 1, opacity : 1, 'stroke-width' : 1}).animate({r : 25, opacity : 0, 'stroke-width' : 5}, 900, mina.easeinout, function(){el.attr({'stroke' : 'red'}); el.attr({'stroke' : 'red'});circlePulse(el)});}, 200);
}

function drawRect( el ) {
  el.drawAtPath( path4throwing, 750, {callback: function(){el.animate({opacity:0},5000,function(){el.remove()})}} );
};


function binClick(){
var newEl = throwedPaper.clone().attr({ opacity: 1 });
drawRect( newEl ); //Animate along a path
}

function gradientAnim () {
    steamGradient.attr({ x1: 0, y1: 1, x2: 0, y2: 2 });
    steamGradient.animate({ x1: 100, y1: 0, x2: 100, y2: 0 }, 5000, mina.linear, function(){ steamGradient.attr({ x1: 0, y1: 1, x2: 0, y2: 2 }); steamGradient.animate({ x1: 100, y1: 0, x2: 100, y2: 0 }, 5000, mina.linear)});
};

function throwHandDrawing(){
  throwHandGroup.clear();
  // throwHandGroup = animSvg.paper.g().transform('r120,1090,624').attr({'id' : 'raisedThrowHand'});
      console.log(throwHandGroup);
    for (var i in throwHand) {
      throwHandGroup.add(Snap.parse(throwHand[i])).addClass('throwHandGroup');//.attr({stroke:'black','stroke-width':5});
    }

    throwPaper = Snap.select("#throwpaper");
    // console.log(throwHandGroup);
  }

function SecondConstAnimation()
{ var time = normSpeedK;
  if ((timeTyping > nNorm) && (timeTyping < (nNorm + nfast))){time = fastSpeedK;};
  if (timeTyping == nNorm) {secondFaceDown(rhythm, 3000)};
  if (timeTyping == cycle) 
      {
        timeTyping = (-1)*nNorm;
        strawDrinking();
        return
      };
  secondhands[0].animate({transform : 'r0.5,1200,625'}, time, mina.backin, function(){secondhands[0].animate({transform : 'r-0.5,1200,625'}, time, mina.backout)});
  secondhands[1].animate({transform : 'r0.5,850,625 '}, time, mina.bounce, function()
    {secondhands[1].animate({transform : 'r-0.5,850,625 '}, time, mina.bounce, function(){timeTyping++; SecondConstAnimation()})});
}

var Nframe;
function frameChanging(part, arr, timings) {
  if (Nframe > arr.length-1) { return }
    else  
     {  Nframe++;
      // console.log(Nframe);
        part.animate({d : arr[Nframe-1]}, timings[Nframe-1], mina.linear, function(){(frameChanging(part, arr, timings)) })   
    }
}

function  strawDrinking(){
  var stoptime = rhythm,
  kRithm = 1,
  strokeRise = [ handD[1], handD[2], handD[3], handD[4] ],
  timingRise = [ 10 * kRithm, 220* kRithm, 280* kRithm, 300* kRithm ],//msec

  strokeBack = [ handD[3], handD[2], handD[1] ],
  timingBack = [ 630* kRithm, 280* kRithm, 260* kRithm ],//msec


  //with mina.easeinout
  // strokeRise = [ handD[1], handD[2], handD[3], handD[4] ],
  // timingRise = [100 * kRithm, 200* kRithm, 180* kRithm, 300* kRithm ],//msec
  // strokeBack = [ handD[3], handD[2], handD[1] ],
  // timingBack = [630* kRithm, 180* kRithm, 220* kRithm],//msec
  //=============


  stroke = timingRise.reduce(function(sum, current) {// calculating whole time of animation  
  return sum + current;
}, 0);

console.clear();
secondhands[1].animate({d : handD[1]}, kRithm* rhythm * 0.5, mina.linear,// character take cup
  function()
   {  Nframe=0;
      frameChanging(secondhands[1], strokeRise, timingRise);
      secondFingers.animate({ d : AbassFingers[1]}, kRithm * 1000, mina.linear).attr({'opacity' : 1});
      secondsweater.animate({ d : secondSweater[1]}, kRithm * 1000);
      strawCup.animate({transform : 't178,-68'}, kRithm * 1000, mina.linear, function()
          {
            setTimeout(function(){
              //return stroke
              Nframe=0; frameChanging(secondhands[1], strokeBack, timingBack);
              strawCup.animate({transform : 't0,0'}, kRithm * 1200, mina.linear);
              secondsweater.animate({ d : secondSweater[0]}, kRithm * 1000*2, mina.linear);
              secondFingers.animate({ d : AbassFingers[0]}, kRithm * 1200, mina.linear, function()
                { secondFingers.attr({'opacity':0}); secondhands[1].animate({d  : handD[0]}, kRithm * rhythm * 0.5, mina.linear, function(){ SecondConstAnimation()}) });
             }, stoptime) 
          });
     }

  // function() //with mina.easeinout
  //  {  Nframe=0;
  //     frameChanging(secondhands[1], strokeRise, timingRise);
  //     secondFingers.animate({ d : AbassFingers[1]}, 1000, mina.easeinout).attr({'opacity':1});
  //     secondsweater.animate({ d : secondSweater[1]}, 1000);
  //     strawCup.animate({transform : 't178,-68'}, 1000, mina.easeinout, function()
  //         {
  //           setTimeout(function(){
  //             //return stroke
  //             Nframe=0; frameChanging(secondhands[1], strokeBack, timingBack);
  //             strawCup.animate({transform : 't0,0'},1200, mina.easeinout);
  //             secondsweater.animate({ d : secondSweater[0]}, 1000*2, mina.easeinout);
  //             secondFingers.animate({ d : AbassFingers[0]},1200, mina.easeinout, function(){ secondFingers.attr({'opacity':0}); secondhands[1].animate({d  : handD[0]}, rhythm*0.5, mina.linear, function(){ SecondConstAnimation()}) });
  //            }, stoptime) 
  //         });
  //    } 
          );    
 Nframe=0;
}

function constantAnimation()
  { 
    if (timeKnee !== 0) 
      {
        kneeR.animate({ d : Ghazi[1].kneeR }, rhythm, mina.easeInOutQuad);
        pants.animate({ d : Ghazi[1].pants }, rhythm, mina.easeInOutQuad, kneeAnimationStart);
      }
      else 
      { if (drinkOrYawn) {handToMouth(); drinkOrYawn = false; gradientAnim ()} else {mugClick(); drinkOrYawn = true}; 
        setTimeout(function(){timeKnee = timeKneeShake; constantAnimation()}, rhythm*5)
      }
    }

function mugClick(){
   var time = 800;
   leftHand.stop().attr({d:lHand});//Stop animation
   GhaziFaceSet.stop().transform('t0,0');//Stop animation
   
    animSvg.selectAll('path circle').forEach(function(element, index) {element.stop()  });//Stop all animation
    leftHand.stop().animate({d : Ghazi[1].lHand},200,mina.easeinout, function(){fingersOnMug0.attr({opacity:1}); setTimeout(function(){ mugDrink(time, function(){mugMouseOff()}) }, time*0.33)});
}

function mugDrink(time, callback){
  clickFlag = true;
  var stopTime = time*0.375;
  var frames = [Ghazi[1].lHand
  ,'M846 601c-17,17 -2,2 -19,19 -7,7 -18,7 -24,0l0 0c-7,-7 -7,-18 0,-25 17,-17 1,-2 18,-19 7,-7 18,-7 25,0l0 0c7,7 7,18 0,25z'
  ,'M818 552c0,25 0,19 0,44 0,9 -8,17 -18,17l0 0c-9,0 -17,-8 -17,-17 0,-25 0,-19 0,-44 0,-9 8,-17 17,-17l0 0c10,0 18,8 18,17z'
  ,'M750 500c14,20 43,58 57,77 6,8 4,19 -4,25l0 0c-8,5 -19,3 -25,-4 -13,-20 -43,-58 -56,-78 -6,-8 -4,-19 4,-24l0 0c8,-6 19,-4 24,4z'
  ],
  mugd = 'M729 527c0,1 -7,2 -16,2 -9,0 -16,-1 -16,-2l-2 -13c0,-7 -1,-16 -3,-28 0,-1 0,-8 0,-8 0,-1 9,-2 21,-2 12,0 21,1 21,2 0,0 -5,49 -5,49zm-36 -37l2 20c-1,-6 -1,-10 -2,-20z';
  mugInsude.attr({'opacity':0});
  leftHand.stop().animate({d:frames[1]}, time*0.235, mina.linear, 
    function(){ leftHand.stop().animate({d:frames[2]},time*0.15,mina.linear 
      , function(){ leftHand.stop().animate({d:frames[3]}, time*0.65, mina.easeOutQuad  
         ,function(){setTimeout(
        //back stroke
                       function(){ leftHand.stop().animate({d:frames[2]}, time*0.35, mina.easeInQuad
                        , function(){ leftHand.stop().animate({d:frames[1]}, time*0.2, mina.linear
                           , function(){ leftHand.stop().animate({d:frames[0]}, time*0.48, mina.easeOutQuad, callback);})})
                    }, stopTime)
        })
      })
     }
    );

  mug.animate({d:mugd},time,mina.easeOutQuad, 
    function(){
      setTimeout(function()
                  { mug.animate({d:mugD},time,mina.linear, 
                        function(){mugInsude.attr({'opacity':1});}
                        )
                  }, stopTime
                )
              }
              );
  GhaziSviter.stop().animate({d:Ghazi[3].sviter},time,mina.easeOutQuad);
  fingersOnMug0.animate({d:GhaziFingers[1]},time,mina.easeOutQuad,
        function(){
          setTimeout( 
              function(){fingersOnMug0.animate({d:GhaziFingers[0]}, time, mina.linear); GhaziSviter.stop().animate({d:Ghazi[2].sviter}, time, mina.easeout)}
                    , stopTime
                    )
                  }
                )
}



function handToMouth(){
  if (clickFlag) console.log(clickFlag);
    var stopTime = 3000, moveTime = rhythm*3;
    fingersOnMug0.attr({opacity:0}); 
    leftHand.animate({d : Ghazi[1].handToMouth}, moveTime, mina.backout, function(){setTimeout(function(){leftHand.animate({d : lHand}, moveTime, mina.easeInOutQuad)}, stopTime)}); 
    GhaziFaceSet.animate({transform : 't0,14'}, moveTime, mina.backout, function(){setTimeout(function(){GhaziFaceSet.animate({transform : 't0,0'}, moveTime*0.75, mina.easeInOutQuad)}, stopTime)}); 
}

function kneeAnimationStart() //4 constant animation
    {
        kneeR.animate({ d: 'M628 699l63 175c2,3 3,6 3,10 0,13 -11,23 -24,23 -10,0 -19,-7 -22,-15l-63 -176c-2,-3 -3,-6 -3,-10 0,-12 11,-23 24,-23 10,0 19,7 22,16z' }, rhythm, mina.easeInOutQuad);
        pants.animate({ d: 'M603 729l226 0 0 0c14,0 25,-11 25,-25 0,-13 -11,-25 -25,-25l0 0 -226 0c-14,0 -25,12 -25,25 0,14 11,25 25,25z' }, rhythm, mina.easeInOutQuad, function(){constantAnimation();});
        timeKnee--;
    }

function secondFaceDown(timing, stopTime) {
  // console.log(stopTime);
  SecondFaceSet.animate({transform : 't0,14'}, timing, mina.backout, function(){setTimeout(function(){SecondFaceSet.animate({transform : 't0,0'}, timing*0.75, mina.easeInOutQuad)}, stopTime)}); 
  secondEyes[0].animate({transform : 't2,0s1.5'}, timing, mina.backout, function(){setTimeout(function(){secondEyes[0].animate({transform : 't0,0s1'}, timing*0.75, mina.easeInOutQuad)}, stopTime)}); 
  secondEyes[1].animate({transform : 't-2,0s1.5'}, timing, mina.backout, function(){setTimeout(function(){secondEyes[1].animate({transform : 't0,0s1'}, timing*0.75, mina.easeInOutQuad)}, stopTime)}); 
}


function mugMouseOn()
{
  if (clickFlag) return 
  else 
  leftHand.stop().animate({d : Ghazi[1].lHand},200,mina.easeinout, function(){fingersOnMug0.attr({opacity:1})});
}

function mugMouseOff()
{  clickFlag = false; 
  GhaziFaceSet.stop().transform('t0,0');//Stop animation
    {
        fingersOnMug0.attr({opacity:0});
        leftHand.stop().animate({d : lHand}, 100, mina.linear);
    }
}

function GhaziMouseOn()
{   GhaziSmile.attr({opacity:1});
    GhaziSmile.animate({transform : 't0,-1s1'}, 300, mina.easeinout);
    GhaziMoustache.animate({d:'M691 470l0 4c6,0 9,0 14,-3 2,-2 9,-6 8,-10 -2,-1 -3,-3 -3,-6l0 0c-8,1 -18,6 -19,15zM741 469l0 4c-6,1 -9,0 -14,-2 -3,-2 -9,-6 -9,-10 3,-1 4,-3 4,-6l0 0c7,1 18,5 19,14z'},200,mina.easeinout);
}
function GhaziMouseOff()
{   
    GhaziSmile.animate({transform : 's0'}, 200, mina.linear, function(){GhaziSmile.attr({opacity:0})});
    GhaziMoustache.animate({d:Ghazi[0].moustache}, 200, mina.easeinout);
}

function SecondMouseOn()  {  Secondsmile.animate({d : 'M1224 474c1,-1 2,1 1,2 -7,5 -17,5 -24,0 -1,-1 0,-2 1,-2 7,5 16,5 22,0z'}, 300, mina.backout); }
function SecondMouseOff() {  Secondsmile.animate({d : 'M1207 477l13 0c0,0 1,1 1,2 0,0 -1,1 -1,1l-13 0c-1,0 -2,-1 -2,-1 0,-1 1,-2 2,-2z'}, 300, mina.backin);}

//close cpeech bubble when a user clicks outside of them
function fnClose () {
  console.log('Click - close bubble');
  GhaziSpich.animate({transform : myMatrix}, 750,  mina.backin, function(){ GhaziSpich.attr({visibility : 'hidden'}); }); 
  SecondSpeech.animate({transform : myMatrix2}, 750,  mina.backin, function(){ SecondSpeech.attr({visibility : 'hidden'}); }); 
  document.body.removeEventListener('click', fnClose, true); 
}

function mapClose (ev) {
console.log('mapClose');
  map4events.animate({transform : 't0,-1s1'}, 550,  mina.backout).attr({cursor : 'pointer'}).click(mapClick); 
  Snap.select('#closer').attr({cursor : 'default', 'opacity' : 0}).unclick(mapClose);   
  // document.body.removeEventListener('click', mapClose, true); 
  HQGroup.forEach(function(element1, index) { element1.attr({'opacity' : 0}).transform( transitionNote); });
regionalsGroup.forEach(function(element2, index) { element2.attr({'opacity' : 0}).transform( transitionNote); });
satellitesGroup.forEach(function(element3, index) { element3.attr({'opacity' : 0}).transform( transitionNote); });
Snap.select('#annotation').attr({'opacity' : 0});
pulseShow = false; 
Snap.selectAll('.circles').forEach(function(element, index) {element.stop().attr({r : 1, 'stroke' : 'none'});});//stop ALL circles animations

}

function mapClick(ev){
  pulseShow = true;
  // document.body.addEventListener('click', mapClose, true);
  map4events.stop().animate({transform : 't0,320s4.65'}, 750,  mina.bounce).attr({cursor : 'default'}).unclick(mapClick); //
  Snap.select('#closer').stop().animate({transform : 't-20,-75s4.65'}, 750,  mina.bounce).attr({cursor : 'pointer', 'opacity' : 1}).click(mapClose);  
  Snap.select('#annotation').attr({'opacity' : 1});
  console.log('Click on map',pulseShow);

}

function speeches(){
  var spich1 = animSvg.path(Ghazi[3].speechOut).attr({stroke:'#ccc', fill : '#ccc', 'stroke-width':1});
  var spich2 = animSvg.path(Ghazi[3].speechIn).attr({stroke:'#ccc', fill : '#fff', 'stroke-width':1});
  var spich3 = animSvg.path(secondSpeech.outer).attr({stroke:'#ccc', fill : '#ccc', 'stroke-width':1});
  var spich4 = animSvg.path(secondSpeech.inner).attr({stroke:'#ccc', fill : '#fff', 'stroke-width':1});
  var spichCross1 = animSvg.path(Ghazi[3].speechCross)
                          .attr({stroke :'#ccc', fill : '#fff', 'stroke-width' : 3})
                          .attr({cursor : 'pointer'})
                          .click(function() { GhaziSpich.animate({transform : myMatrix}, 750,  mina.backin);})
                          ;
  var spichCross2 = animSvg.path(secondSpeech.cross)
                          .attr({stroke :'#ccc', fill : '#fff', 'stroke-width' : 3})
                          .attr({cursor : 'pointer'})
                          .click(function() { SecondSpeech.animate({transform : myMatrix2}, 750,  mina.backin);})
                          ; 
  GhaziSpich = animSvg.paper.g(spich1, spich2, spichCross1).transform(myMatrix).attr({'id' : 'speech1'}).attr({'visibility' : 'hidden'});
  SecondSpeech = animSvg.paper.g(spich3, spich4, spichCross2).transform(myMatrix2).attr({'id' : 'speech2'}).attr({'visibility' : 'hidden'});
}

function bubbleStart(){
             

             n_path  = randomInteger(0, path4bubble.length-1);
             n_path  = Math.abs(n_path);
            

             var bubble_el = Snap.select('.bubble');
             var bubble_opacity = randomInteger(5, 10) * 0.1;
             var bubble_scale = randomInteger(0.1, 10);
             
             var bubble_new =  bubble_el.clone().attr({ opacity: bubble_opacity , scale : bubble_scale});

            
             var path_el = path4bubble[n_path];
             bubblesUp( bubble_new,  path_el );


}
       

function coolerClick(){
             if(!Glass.hasClass('active')){
                             Glass.attr({opacity:.80});
                             animSvg.select('#water_top').attr({opacity:.80});
                             Glass.addClass('active');
          
                             water_into_glass = animSvg.paper.line(1766,600,1766,600).attr({"stroke-width" : 4, stroke : '#BBFFFF'}).animate({'y2':675}, rhythm*1, mina.easeinout, function(){ filling(); })  ;  
               }              


}

function filling(){

            var theglassMasked    = animSvg.polyline(glass_mask).attr({opacity :.75, "stroke-width" : 2, stroke : '#55FFFF', fill : "#55FFFF"}); 
            theglassMasked.attr({cursor : 'pointer'})      
                          .click(coolerClick)
                          .mouseover(coolerOver)
                          .mouseout(coolerOut);

            waterInGlass = animSvg.path(water_in_glass).attr({ fill : "#BBFFFF" });

            theglassMasked.attr({ mask:  waterInGlass});
            animSvg.select('#glass_bottom').animate({fill : '#42d1d1'},rhythm*3);
            waterInGlass.animate({transform : 't420,-36'},rhythm*10,mina.easeinout,function(){ water_off(); });              

}
function water_off(){
            animSvg.select('#water_top').animate({fill : '#42d1d1', opacity: .4}, rhythm);
            water_into_glass.addClass('visibility_hid');
            setTimeout( function(){ glassDisapear(); }, rhythm*10 );

}
function glassDisapear(){
            Glass.animate({opacity : 0} , rhythm*10 ,mina.easyinout);
            waterInGlass.animate({opacity : 0} , rhythm*10 , mina.easyinout , function(){ start_position(); });
            animSvg.select('#water_top').animate({fill : '#FAFAFA'}, rhythm*10);
            animSvg.select('#glass_bottom').animate({fill : '#FAFAFA'}, rhythm*10);

}
function start_position(){
            waterInGlass.attr({transform : 't0,0'});
            Glass.removeClass('active');
}
function coolerOver(){
            Glass.animate({opacity:.8},rhythm);
            animSvg.select('#water_top').animate({opacity:.8},rhythm);
}
function coolerOut(){
            if(!Glass.hasClass('active')){
                               Glass.animate({opacity:0},rhythm);
              }                 
}

function bubblesUp( el, xpath ) {

            el.drawAtPath( xpath, 2750, {scale : 1.1, callback:function(){el.animate({opacity:0},   rhythm * 0.3,   function(){el.remove(); bubbleStart();} )  }}    );
};

function randomInteger(min, max) {
            var rand = min - 0.5 + Math.random() * (max - min + 1)
            rand = Math.round(rand);
            return rand;
  }


function drawObjects()
    {
      for (var j in objects)
        { 
          animSvg.add(Snap.parse(objects[j]))
        }
   }

