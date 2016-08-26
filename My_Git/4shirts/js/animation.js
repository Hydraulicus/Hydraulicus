
function initial () {
    var inputTopText = document.getElementsByTagName('input')[0];
    var inputBottomText = document.getElementsByTagName('input')[1];
    var targetTopTxt = document.getElementById('text-1');
    var targetBottomTxt = document.getElementById('text-2');
    var startTopTextHeihgt = targetTopTxt.getAttribute("font-size").match(/\d+/)[0];
    var startBottomTextHeihgt = targetBottomTxt.getAttribute("font-size").match(/\d+/)[0];

    var parentElem = document.getElementById('layout'); // SVG tag
    var startOffsetOfviewboxSVG = parseInt( parentElem.getAttribute('viewBox').split(" ")[1] ); // 2-nd parameter of a viewbox of SVG tag . Need for autoscaling by changing the viewbox
    var startHeightOfviewboxSVG = parseInt( parentElem.getAttribute('viewBox').split(" ")[3] ); // 4 parameter of a viewbox of SVG tag . Need for autoscaling by changing the viewbox
    // initial viewBox = "0 " + startOffsetOfviewboxSVG + " 453.5 " + startHeightOfviewboxSVG.
    var currentHeightOfviewboxSVG = startHeightOfviewboxSVG;

    inputTopText.onkeyup = function() {
        var txt = this.value;
        var text_max = targetTopTxt.getAttribute("data-text-max");
        var textFactor = (txt.length >= text_max) ? text_max / txt.length : 1;
        targetTopTxt.textContent = txt;
        var textHeight = 85*textFactor;
        targetTopTxt.setAttribute("font-size", textHeight + "px");
        //document.getElementById('text-1').setAttribute("font-size", 85*textFactor+"px");
        var dy = textHeight - startTopTextHeihgt;
        currentHeightOfviewboxSVG = startHeightOfviewboxSVG + 0.5* dy;
        var viewBoxVol = '0 ' + ( startOffsetOfviewboxSVG - 0.5*dy ) + ' 453.5 ' + currentHeightOfviewboxSVG;
        parentElem.setAttribute('viewBox', viewBoxVol);
    };

    inputBottomText.onkeyup = function() {
        var txt = this.value;
        var text_max = targetBottomTxt.getAttribute("data-text-max");
        var textFactor = (txt.length >= text_max) ? text_max/txt.length : 1;
        targetBottomTxt.textContent = txt;
        var textHeight = 38*textFactor;
        targetBottomTxt.setAttribute("font-size", textHeight + "px")
        //document.getElementById('text-2').style.fontSize = 38*textFactor+"px";

        //"dominant-baseline" is not supported by Internet Explorer 9, 10, 11, and Edge according to this Microsoft documentation. Only option is to manually position vertically using dy.
        var dy = textHeight - startBottomTextHeihgt;
        // This would cause to align it similarly to CSS 'vertical-align: top'
        targetBottomTxt.setAttribute('dy', dy);
        // autoscalling of viewBox

        var offsetOfviewboxSVG = parseInt( parentElem.getAttribute('viewBox').split(" ")[1] );
        //var deltaHeightOfviewboxSVG = startHeightOfviewboxSVG - parseInt( parentElem.getAttribute('viewBox').split(" ")[3] );
        parentElem.setAttribute('viewBox', '0 ' + offsetOfviewboxSVG + ' 453.5 ' + (currentHeightOfviewboxSVG + dy));
    };

};//end of init function
