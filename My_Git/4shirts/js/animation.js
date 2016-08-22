var targetBottomTxt = [document.getElementById('bottomtext0'), document.getElementById('bottomtext1')];
var bottomtext1symboltag = document.getElementById('bottomtext1symboltag');

function initial (obj) {
    console.log("Init");
    var inputTopText = document.getElementsByTagName('input')[0];
    var inputBottomText = document.getElementsByTagName('input')[1];
    var targetTopTxt = [document.getElementById('toptext0'), document.getElementById('toptext1')];
    //var totalsize = {};
    var totalsize = targetBottomTxt[1].getBBox();
    bottomtext1symboltag.setAttribute("viewBox", " 0 0 " + totalsize.width  + " " + totalsize.height);

    inputTopText.onkeyup = function() {
        var textvol = this.value;
        targetTopTxt.forEach( function (element) {
            //console.log(element, textvol);
            element.textContent = textvol; });
    };

    inputBottomText.onkeyup = function() {
        var textvol = this.value;
        scaling(targetBottomTxt, textvol);
    };

    scaling(targetBottomTxt, inputBottomText.value);
    //scaling(targetBottomTxt, "FOOTBALL");
//


};//end of init function

function scaling(target, par) {
    target[0].textContent = par;
    target[1].textContent = par;
    //target.forEach( function (element) {
    //        element.textContent = par; });

    var totalsize = {};
    totalsize = target[1].getBBox();
    //console.log(target[1]);
    //console.log(target[1].clientWidth);
    //console.log(totalsize);
    //console.log("viewBox", " 0 0 " + totalsize.width  + " " + totalsize.height);
    var viewBoxVar = ( par == "FOOTBALL" ) ? " 0 0 167.484375 40.390625" : " 0 0 " + totalsize.width  + " " + totalsize.height;
    bottomtext1symboltag.setAttribute("viewBox", viewBoxVar);
}

//var tetxbbox = targetBottomTxt[0].getBBox();
//console.log(tetxbbox);