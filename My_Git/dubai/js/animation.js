var pathTag, s, animTime = [];
function initAnimation (obj) {
    animTime = obj.AnimTime;
    console.log(animTime);
    embdingSvgFileByAJAX ( obj.svgWrap , obj.pathTosvgFile, performOfImage);
};//end of init function

function embdingSvgFileByAJAX (target_tag, filePathName, callBack) {
    var target_ = document.querySelector( target_tag );
    var ajax = new XMLHttpRequest();
    ajax.open("GET", filePathName, true);
    ajax.send();
    ajax.onload = function(e) {
        target_.innerHTML = ajax.responseText;
        pathTag = Snap.selectAll(target_tag + " .animationstages");
        pathTag.forEach( function(elelment) {
                elelment.attr({"opacity": 0})
            });
        setTimeout(function(){callBack()},500);
        };
}

function performOfImage () {
    var pathString = ['<path fill="none" stroke="#ED8800" stroke-width="10" stroke-miterlimit="10" d="M309.9,1028.2c0,0-3-7.4-6.7-16.5 c-3.7-9.1-8.7-29.1-11-44.5l-16.9-110.3c-2.4-15.4,5.2-36.6,16.7-47l37.9-34.3c11.6-10.5,33.7-17.7,49.2-16.1L528.9,775 c15.5,1.6,40.9,4.4,56.4,6.1l50,5.7c15.5,1.8,40.9,2.5,56.5,1.7l0.1,0c15.6-0.8,39.5-7.6,53.2-15.1l42.5-23.2 c13.7-7.5,36.7-18.4,51.1-24.3l40.5-16.4c14.4-5.9,38.3-6.5,53.1-1.4l56,19.3"/>',
    '<path fill="none" stroke="#DD0C29" stroke-width="10" stroke-miterlimit="10" d="M2318.9,1941.4l-75.6,11.9 c-12.3,1.9-26.4-5.9-31.2-17.3l-136.5-322.5c-4.9-11.5-11.6-30.7-15-42.7l-29.3-103.4c-3.4-12-7.8-31.9-9.8-44.2l-15-93.5 c-2-12.3-4.3-32.6-5.1-45l-10.5-154.5c-0.8-12.4-3.8-32.6-6.5-44.8l-21.6-96.6c-2.7-12.2-6-32.3-7.2-44.7l-9.8-97.4 c-1.2-12.4-10.1-29.1-19.6-37.2L1821,720.9c-9.5-8-27.5-13.3-39.8-11.7l-323.8,42.1c-12.4,1.6-32.7,3-45.2,3l-229.4,0.8 c-12.5,0-32.8-0.9-45.3-2l-91.4-8.6c-12.4-1.2-30.7-5.8-40.6-10.4c-9.9-4.5-18-8.3-18-8.3"/>',
        '<path fill="none" stroke="#009640" stroke-width="10" stroke-miterlimit="10" d="M3401.7,469.3l19.2,75.7 c3.8,15.1,19.6,25.5,35,23.1l69.1-10.9c15.4-2.4,30.1,8.2,32.8,23.5l21.3,124.7c2.6,15.4-1.1,39.3-8.3,53.1l-7.1,13.7 c-7.2,13.8-25.3,28.6-40.3,32.8l-61.7,17.3c-15,4.2-39.2,12.1-53.8,17.6l-88.7,33.3c-14.6,5.5-38.1,15.3-52.2,21.9l-11.1,5.2 c-14.1,6.6-36.6,10.9-49.8,9.7s-36.2-6.5-51-11.5l-53.6-18.3c-14.8-5-39.6-8.8-55.2-8.3l-49.1,1.6c-15.6,0.5-40.9,3.2-56.2,6 l-109.9,20c-15.3,2.8-40.4,7.7-55.6,10.9l-109.6,23c-15.3,3.2-40.5,5.8-56.1,5.7l-153.8-0.6c-15.6-0.1-41.1,0.1-56.7,0.3 l-87.7,1.2c-15.6,0.2-41.1-0.1-56.7-0.6l-145.5-5.1c-15.6-0.5-41,0.8-56.4,3l-68.6,9.9c-15.4,2.2-29.8-8.6-31.9-24l-8.6-61.8 c-2.1-15.4-13.3-36.7-24.7-47.3l-94.5-87.3c-11.4-10.6-33.5-17.6-48.9-15.6L1637.9,729c-15.5,2-40.9,4.3-56.4,5l-401.6,19 c-15.6,0.7-40.9-0.7-56.3-3.3l-135.4-22.5"/>'];
    s = Snap("#maps4anim");
    var p1 = new Drawing( pathString[0], "", animTime[0] );
    var p2 = new Drawing( pathString[1], "", animTime[1] );
    var p3 = new Drawing( pathString[2], "", animTime[2] );

    p1.initDraw();
    p1.callOnFinished = function() { p2.initDraw(); Snap.selectAll(".animationstage0").forEach( function (element) {element.attr({"opacity" : 1})}  ); };
    p2.callOnFinished = function() { p3.initDraw(); Snap.selectAll(".animationstage1").forEach( function (element) {element.attr({"opacity" : 1})}  ); };
    p3.callOnFinished = function() {
        Snap.selectAll(".animationstage2").forEach( function (element) {element.attr({"opacity" : 1})}  );
    };
}

function Drawing( svgString, transformString, timeBetweenDraws ) {
    this.fragment = Snap.parse( svgString );
    this.pathArray = this.fragment.selectAll('path');
    this.group = s.g().transform( transformString );
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

Drawing.prototype.quickDraw = function() {
    this.init();
    this.timeBetweenDraws = 0;
    this.draw();
};

Drawing.prototype.draw = function() {         // this is the main animation bit
    if( this.endReached() ) {
        if( this.callOnFinished ) {
            this.callOnFinished();
            return
        };
    };
    var myPath = this.pathArray[ this.currentPathIndex ] ;

    this.leng = myPath.getTotalLength();

    this.group.append( myPath );

    myPath.attr({
        fill: 'none',
        "stroke-dasharray": this.leng + " " + this.leng,
        "stroke-dashoffset": this.leng
    });

    this.currentPathIndex++;

    myPath.animate({"stroke-dashoffset": 0}, this.timeBetweenDraws, mina.easeout, this.draw.bind( this ) );

};



