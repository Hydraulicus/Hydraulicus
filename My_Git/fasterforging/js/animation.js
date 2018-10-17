function stopAnimation() {
	// [].forEach.call(document.getElementsByClassName("bricks"), function (el) {el.setAttribute("class","disappear");});

	[].forEach.call(document.getElementsByClassName("st0"), function (el) {el.setAttribute("class","st0");});
	[].forEach.call(document.getElementsByClassName("st1"), function (el) {el.setAttribute("class","st1");});

	const tempBricks = document.getElementById("tempBricks");
	tempBricks.parentNode.removeChild(tempBricks);

	document.getElementById("brick1").setAttribute("class","st0");
	document.getElementById("forgingBlock").setAttribute("class","forging-block-normal-size");
};
