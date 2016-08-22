
function initial (obj) {
    var inputTopText = document.getElementsByTagName('input')[0];
    var inputBottomText = document.getElementsByTagName('input')[1];
    var targetTopTxt = document.getElementById('toptext');
    var targetBottomTxt = document.getElementById('bottomtext');
    inputTopText.onkeyup = function() {
        var txt = this.value;
        var textFactor = (txt.length >= 6) ? 6/txt.length : 1;
        targetTopTxt.textContent = txt;
        //targetTopTxt.setAttribute("font-size", 85*textFactor+"px");
        document.getElementById('toptext').style.fontSize = 85*textFactor+"px";
    };
    inputBottomText.onkeyup = function() {
        var txt = this.value;
        var textFactor = (txt.length >= 12) ? 12/txt.length : 1;
        targetBottomTxt.textContent = txt;
        //document.getElementById('toptext4changesize').setAttribute("font-size", 38*textFactor+"px")
        document.getElementById('bottomtext').style.fontSize = 38*textFactor+"px";
    };
};//end of init function
