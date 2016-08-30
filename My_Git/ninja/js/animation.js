var  animTime, forBackgnd, mountins, FPS, FPSmilisec, framequantity
    ,flight_path, flight_path_length, last_point, ninjabbox, mountFog, sunRays
    //,particular4opacity0, particular4opacity025,
    ,instagramLogo
    ;

 // polyfill  for requestAnimationFrame
(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
            || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
                timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());


function initAnimation (obj) {
    animTime = typeof obj.animTime === 'undefined' ? 3000 : obj.animTime;
    FPS = typeof obj.FPS === 'undefined' ? 60 : obj.FPS;
    FPSmilisec = 1 / FPS * 1000;
    framequantity = FPS * animTime / 1000;
    particular4opacity0 = 1 / framequantity;
    particular4opacity025 = ( 1 - 0.25) / framequantity;
    svgtag = Snap(obj.svgtag);
    forBackgnd = Snap.select("#backgnd").attr({opacity : 0});
    mountFog = svgtag.rect(0, 0, 800, 800).attr({opacity : 0.75, fill : "darkblue"});
    mountins = Snap.select("#mountins").attr({opacity : 1}).append(mountFog);
    sunRays = Snap.select("#sunrays").attr({opacity : 0, 'transform' : 't 0, 50'});

    var image = forBackgnd.image("css/bkgnd0.jpg", -2,-1, 802,800 );
        //flight_path         = svgtag.path('M359,712c-37.779,16.943-119.567-21.598-134.165-71.924c-19.086-65.802,19.072-124.856,64.665-145.753s157.388-22.525,219.128,74.23s-20.242,229.959-114.73,240.688   c-88.678,10.069-230.255-62.044-230.25-163.305')
        flight_path         = svgtag.path('M399,912 l0, -400')
                                     .attr({ 'fill': 'none', 'stroke': 'none', 'stroke-width' : '1px'});
        flight_path_length  = Snap.path.getTotalLength(flight_path);
        last_point          = flight_path.getPointAtLength(flight_path_length);

    var ratio = window.devicePixelRatio || 1;
    //var w = screen.width,
    var w = window.innerWidth,
        h = window.innerHeight;
    console.log('Size of scree include ratio ',w,' x ',h, '  ratio = ', ratio);
    var virtualW = screen.width * ratio,
        virtualH = screen.height * ratio;
    var setW = (w > 800) ? 800 : w * 0.9,
        setH = (h > 1113) ? 1113 : h * 0.9;
    console.log('Setted size  ', setW,' ',setH);
    svgtag.attr({height : setH, width : setW});
    instagramLogo = svgtag.image("css/Instagram_logo_2016.svg", 305, 215, 200, 200).attr({'transform' : 't 0, 100', opacity : 0.0});
    Snap.select("#logoinstagram").append(instagramLogo);
    setTimeout(() => {
            //document.getElementById("startdutton").className = "flexchild ";
            document.getElementById("startdutton").classList.remove("visibility_hid");
        }, 500); //delay for initialisation finish
};//end of init function

function startMoving(){
    ninjaLevitation(animTime);
    //sunrise();
    var  particular4transl_50 = 50 / animTime;
    var  particular4transl_100 = 100 / animTime;
    var  particular4opacity_0 = 1 / animTime;
    var  particular4opacity_075 = 0.75 / animTime;
    animate(function(timePassed) {
        forBackgnd.attr({opacity : particular4opacity_0 * timePassed});
        instagramLogo.attr({opacity : particular4opacity_0 * timePassed, 'transform' : 't 0, '+(100 - particular4transl_100 * timePassed)});
        mountFog.attr({opacity : 0.75 - particular4opacity_075 * timePassed});
        sunRays.attr({opacity : particular4opacity_0 * timePassed, 'transform' : 't 0, '+(50 - particular4transl_50 * timePassed)});
    }, animTime);
}


function animate(draw, duration) {
    var start = performance.now();
    requestAnimationFrame(function animate(time) {
        var timePassed = time - start;
        if (timePassed > duration) timePassed = duration;
        draw(timePassed);
        if (timePassed < duration) {
            requestAnimationFrame(animate);
        }
    });
}

function sunrise() {

    console.log("animTime = ",animTime);

    //mountins.animate({opacity : 1}, animTime);

    //for (var i = 0; i < FPS; i++ )
    //    {
    //        console.log(i);
    //    }
    myAnimate();
}

function myAnimate(i) {
    i = typeof i === 'undefined' ? 0 : i;
    console.log(i);
    if ( i == framequantity ) return;
    forBackgnd.attr({opacity : particular4opacity0 * i});
    mountins.attr({opacity : particular4opacity025 * i});
    setTimeout(() => myAnimate(++i), FPSmilisec );
}


function ninjaLevitation() {
    var ninja = Snap.select("#layer_4").removeClass("visibility_hid");

    ninjabbox       = ninja.getBBox();

    //console.log(animTime);
    //ninja.attr({"transform" : "t 359,212"});
    //ninja.clone().transform('translate(' + 100 + ',' + 100 + ') , '+ninjabbox.cx+', '+ninjabbox.cy+')');
    //

    Snap.animate(0, flight_path_length, function( step ) {
        moveToPoint = Snap.path.getPointAtLength( flight_path, step );
        x = moveToPoint.x - ninjabbox.x - (ninjabbox.width/2) ;
        y = moveToPoint.y - ninjabbox.y - (ninjabbox.height/2) ;
        //cwntermark.attr({"transform" :  't' + x + ',' + y });
        ninja.transform('translate(' + x + ',' + y + ') ');
    },animTime, mina.easeinout ,() => {
        //console.log(last_point);
        ninja_move_up();

    });

    function ninja_move_up(){
        //console.log("ninja_move_up");
        //ninja.animate({'transform': 'translate(' + (last_point.x - ninjabbox.x - (ninjabbox.width/2)) + ',' + (last_point.y - (ninjabbox.height / 2) - 10) + ')'},1300, mina.easeinout, function(){
        //ninja.animate({'transform': 'translate(0, ' + ninjabbox.y - (ninjabbox.height/2) - 50 + ')'},1300, mina.easeinout, function(){
        ninja.animate({'transform': 'translate(0, ' + (0) + ')'},1300, mina.easeinout, function(){
            ninja_move_down();
        });
    }
    function ninja_move_down(){
        //console.log("ninja_move_down");
        //ninja.animate({'transform': 'translate(' + (last_point.x - ninjabbox.x - (ninjabbox.width/2)) + ',' + (last_point.y - (ninjabbox.height / 2)) + ')'},1100, mina.easeinout, function(){
        ninja.animate({'transform': 'translate(0 , ' + (  -10) + ')'},1100, mina.easeinout, function(){
            ninja_move_up();
        });
    }




    //ninja.addClass("visibility_hid");
    //el.drawAtPath( xpath, 2750, {scale : 1.1, callback:function(){el.animate({opacity:0},   rhythm * 0.3,   function(){el.remove(); bubbleStart();} )  }}    );
}//end of ninjaLevitation


//function drawObjects(target_, objects_)
//{
//    return new Promise( function (resolve, reject) {
//        objects_.forEach( function (element, j, arr)
//        {
//            target_.add(Snap.parse(objects_[j]));
//            if (j == arr.length-1) { resolve(); }
//        } );
//    });
//}
//
//function setRedDot(target_)
//{
//    return new Promise( function (resolve, reject) {
//        var arrayofDotPlacess = Snap.selectAll(".needdot");
//        arrayofDotPlacess.forEach( function(element, j, arr)
//        {
//            var dotBox = element.getBBox();
//            target_.circle(dotBox.cx, dotBox.cy, 3)
//                .attr({"id" : "dot" + element.attr("id")})
//                .addClass("reddot reddotpassive reddotarea")
//                // .addClass("visibility_hid") //hide dots
//            ;
//            if (j == arrayofDotPlacess.length-1) { resolve(); }
//        })
//    });
//}
//
//function bindEvents4RedDots() {
//    console.log("bindEvents4RedDots");
//    Snap.selectAll(".reddot").forEach( function(element, i)
//        {
//            element
//                .hover(hoverover, hoverout)
//                .click(clickOnRedDot)//if this handler binded touchstart and touchend is reduntand
//                .touchstart(touchstartRedDot)
//                .touchend(touchendRedDot);
//        }
//    )
//}
