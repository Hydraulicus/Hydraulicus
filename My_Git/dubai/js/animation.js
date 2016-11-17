var pathTag, s, animTime = [];
function initAnimation (obj) {
    animTime = obj.AnimTime;
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
    // id="track2" class="animationstages animationstage2"
    s = Snap("#maps4anim");
    var p1 = new Drawing( "#track1", "", animTime[0] );
    var p2 = new Drawing( "#track2", "", animTime[1] );
    var p3 = new Drawing( "#track3", "", animTime[2] );

    p1.initDraw();
    setTimeout(function(){ Snap.selectAll(".animationstage1_5").forEach( function (element) {element.attr({"opacity" : 1}) })}, animTime[0] *0.75 );

    updateFig(1, {endvol : 17, x : 269, y : 1108, color : "#111"}, animTime[0]);


    p1.callOnFinished = function() { p2.initDraw();
        Snap.selectAll(".animationstage1").forEach( function (element) {element.attr({"opacity" : 1})}  );
        updateFig(2, {endvol : 21, x : 2146, y : 1937, color : "white"}, animTime[1]);
        setTimeout(function(){ Snap.selectAll(".animationstage2_5").forEach( function (element) {element.attr({"opacity" : 1}) })}, animTime[1] *0.9 );
    };
    p2.callOnFinished = function() { p3.initDraw();
        Snap.selectAll(".animationstage2").forEach( function (element) {element.attr({"opacity" : 1})}  );
        setTimeout(function(){ Snap.selectAll(".animationstage3_5").forEach( function (element) {element.attr({"opacity" : 1}) })}, animTime[2] *0.7 );
        updateFig(3, {endvol : 37, x : 3394, y : 651, color : "white"}, animTime[2]);
    };
    p3.callOnFinished = function() {
        Snap.selectAll(".animationstage3").forEach( function (element) {element.attr({"opacity" : 1})}  );
        setTimeout(function(){
                var target = Snap.select("#pin");
                //target.transform("s0.01 t0,120").attr({opacity: 1});
                target.animate({transform: "s1.25 t0,-25"}, 500, mina.easeout(), function(){
                    target.animate({transform: "s1 t0,0"}, 500, mina.elastic);
                });
            }, animTime[2] + 200 );
    };
}

function updateFig(target, textVol, timing){
    var targetblock=Snap.select("#place_time"+target);
console.log(target);
    var fragment = Snap.parse('<text id="changabletext'+target+'" font-family="arial" font-size="36" font-weight="400" letter-spacing="-2" fill="'+textVol.color+'"><tspan x="'+textVol.x+'" y="'+textVol.y+'" >0</tspan></text>');
    targetblock.append(fragment);

    var changabletext = document.querySelector("#changabletext"+target+" tspan");
    Snap.animate(0, textVol.endvol, function (value) {
        changabletext.textContent = Math.round(value);
    }, timing);
}

function Drawing( svgString, transformString, timeBetweenDraws ) {
    //this.fragment = Snap.parse( svgString );
    this.fragment = s.select( svgString );
    this.pathArray = [this.fragment];
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

    //this.group.append( myPath );

    myPath.attr({
        fill: 'none',
        opacity: 1,
        "stroke-dasharray": this.leng + " " + this.leng,
        "stroke-dashoffset": this.leng
    });

    this.currentPathIndex++;

    myPath.animate({"stroke-dashoffset": 0}, this.timeBetweenDraws, mina.easeout, this.draw.bind( this ) );

};



