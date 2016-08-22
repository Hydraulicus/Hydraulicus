
function initial (obj) {
    var inputTopText = document.getElementsByTagName('input')[0];
    var inputBottomText = document.getElementsByTagName('input')[1];
    var targetTopTxt = document.getElementById('toptext');
    var targetBottomTxt = document.getElementById('bottomtext');
    inputTopText.onkeyup = function() {
        targetTopTxt.textContent = this.value;
    };
    inputBottomText.onkeyup = function() {
        targetBottomTxt.textContent = this.value;
    };
};//end of init function
