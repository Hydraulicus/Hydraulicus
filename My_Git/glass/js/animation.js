var startLim, pathTag, firstSatgeFlag = false, animTime = 1000, capitalletter, contour, process_animtion = false;
function initAnimation (obj) {
    startLim = obj.limits.topshift;
    animTime = obj.AnimTime;
    embdingSvgFileByAJAX ( obj.logoWrap , obj.pathTosvgFile, performOfImage);
};//end of init function

function embdingSvgFileByAJAX (target_tag, filePathName, callBack) {
    var target_ = document.querySelector( target_tag );
    var ajax = new XMLHttpRequest();
    ajax.open("GET", filePathName, true);
    ajax.send();
    ajax.onload = function(e) {
        target_.innerHTML = ajax.responseText;
        pathTag = Snap.selectAll(target_tag + " svg .smollletter");
        pathTag.forEach( function(elelment) {
                elelment
                    .attr({"stroke-dasharray" : Snap.path.getTotalLength(elelment)})
                    .attr({"strokeDashoffset" : 0})
                    .attr({"fill-opacity": 1})
            });
        capitalletter = Snap.select(".capitalletter");
        contour = Snap.select(".contour");
        contour.attr({ "stroke-dasharray" : Snap.path.getTotalLength(contour), strokeDashoffset: Snap.path.getTotalLength(contour), "opacity" : 0 });
        callBack();
        };
}

function performOfImage () {
    var el=window;
    if(el.addEventListener)
        el.addEventListener('scroll', onScrollEventHandler, false);
    else if (el.attachEvent)
        el.attachEvent('onscroll', onScrollEventHandler);
}

function onScrollEventHandler(ev)
{
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    document.getElementById('showScroll').innerHTML = 'scrolled: ' + scrolled + 'px';
    if ( ( scrolled >= startLim) && !firstSatgeFlag && !process_animtion ) { //disappear animation
        firstSatgeFlag = true;
        process_animtion = true;
        firstStage ();
    }
    if ( ( scrolled < startLim) && firstSatgeFlag && !process_animtion ) { //return animation
        firstSatgeFlag = false;
        process_animtion = true;
        returnAnimaton ()
    }
}

function firstStage () {
    var timeKvant =  animTime / pathTag.length;
    pathTag.forEach( function( element, n ) {
        var cur_elem = element;
        cur_elem.animate({"fill-opacity": 0}, animTime * 2, mina.easein);
        if ( n == pathTag.length-1 ) {
            setTimeout( function() { dissapire(cur_elem); letterMove(); }, (n + 1) * timeKvant);
            return
        }
        setTimeout( function() { dissapire(cur_elem) }, timeKvant * n);
    });

    function dissapire(elelm) {
        elelm.animate({strokeDashoffset: Snap.path.getTotalLength(elelm  )}, animTime*0.5, mina.easeinout);
    }

    function letterMove(){
        capitalletter.animate({"transform" : "t -88.5,0"}, animTime*0.5, mina.easeinout, function(){
            contour
                .attr({"opacity" : 1})
                .stop().animate({strokeDashoffset: 0}, animTime*0.5, mina.easeinout);
            process_animtion = false;
        });
    }
}

function returnAnimaton () {
    console.log("returnAnimaton");
    var timeKvant = animTime / pathTag.length;
    contour.stop().animate({strokeDashoffset: Snap.path.getTotalLength(contour)}, animTime*0.5, mina.easeinout, function () {
        contour.attr({"opacity" : 0});
        capitalletter.stop().animate({"transform" : "t 0,0"}, animTime*0.5, mina.easeinout, function(){
            pathTag.forEach( function(element, n) {
                setTimeout( function() {
                    element.animate({strokeDashoffset: 0}, animTime, function(){});
                }, timeKvant * ( pathTag.length - n ));
                element.stop().animate({"fill-opacity": 1}, animTime * 2, mina.easeout, function(){ process_animtion = false;});
            });
        });
    });
}

