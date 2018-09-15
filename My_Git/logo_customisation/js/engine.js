
let inputBottomText;
let inputTopText;
let targetTopTxt;
let targetTopTxtOutLine;
let targetBottomTxt;
let startTopTextHeihgt;
let startBottomTextHeihgt;
let startOutLineSize;
let SVGlogoPlace;
let SVGlogoContour;
let SVGlogoContourPlace;
let SVGlogoContourClone;
let outLineColor;
let outLineSizeFactor;

outLineColor = "SkyBlue";
startOutLineSize = 20;
outLineSizeFactor = 1;

function choiceOutLineSize(newOutLineSizeFactor) {
	const outLineSize = newOutLineSizeFactor * startOutLineSize;
	outLineSizeFactor = newOutLineSizeFactor;
	targetTopTxt.setAttribute("stroke-width", `${outLineSize}px`);
	SVGlogoContourClone.setAttribute("stroke-width", `${outLineSize}px`);

}

function choiceFontSize(newFontSizeFactor) {
	const textBottom = newFontSizeFactor * startBottomTextHeihgt;
	const textHeight = newFontSizeFactor * startTopTextHeihgt;
	targetBottomTxt.setAttribute("font-size", `${textBottom}px`);
	targetTopTxt.setAttribute("font-size", `${textHeight}px`);
	targetTopTxtOutLine.setAttribute("font-size", `${textHeight}px`);
}

function choiceOutLineColor(newOutLineColor) {
	outLineColor = newOutLineColor;
	SVGlogoContourClone.setAttribute("stroke", outLineColor);

	targetTopTxt.setAttribute("stroke", outLineColor);
}

async function choiceLogo(newLogo) {
	const SVGlogo = await loadSVG({
		path: "logos/fullSize/",
		name: `${newLogo}.svg`,
	});
	SVGlogoPlace.innerHTML = SVGlogo;
	SVGlogoContourPlace = document.getElementById("SVG_LOGO_CONTOURE_PLACE");

	SVGlogoContourPlace.removeChild(SVGlogoContourPlace.firstChild);
	SVGlogoContour = document.getElementById("SVG_LOGO_CONTOURE").cloneNode(true);
	SVGlogoContourPlace.appendChild(SVGlogoContour);
	SVGlogoContourClone = SVGlogoContourPlace.firstChild;
	SVGlogoContourClone.setAttribute("stroke", outLineColor);
	SVGlogoContourClone.setAttribute("stroke-width", `${outLineSizeFactor * startOutLineSize}px`);
}

async function initialisation ({patternName, logoName}) {// async function loadSVG () {
	const svgwapper = document.getElementById("svgwapper");
	const pattern = await loadSVG({
		path: "patterns/",
		name: `${patternName}.svg`,
	});
	svgwapper.innerHTML=pattern;

	SVGlogoPlace = document.getElementById("SVG_LOGO_PLACE");
	const SVGlogo = await loadSVG({
		path: "logos/fullSize/",
		name: `${logoName}.svg`,
	});
	SVGlogoPlace.innerHTML = SVGlogo;

	SVGlogoContour = document.getElementById("SVG_LOGO_CONTOURE").cloneNode(true);
	SVGlogoContourPlace = document.getElementById("SVG_LOGO_CONTOURE_PLACE");

	inputBottomText = document.getElementsByTagName('input')[0];
	inputTopText = document.getElementsByTagName('input')[1];
	targetTopTxt = document.getElementById('text-11');
	targetTopTxtOutLine = document.getElementById('text-12');
	targetBottomTxt = document.getElementById('text-2');

	startTopTextHeihgt = targetTopTxt.getAttribute("font-size").match(/\d+/)[0];
	startBottomTextHeihgt = targetBottomTxt.getAttribute("font-size").match(/\d+/)[0];

	SVGlogoContourPlace.appendChild(SVGlogoContour);
	SVGlogoContourClone = SVGlogoContourPlace.firstChild;
	SVGlogoContourClone.setAttribute("stroke", outLineColor);
	SVGlogoContourClone.setAttribute("stroke-width", `${outLineSizeFactor * startOutLineSize}px`);

	targetTopTxt.setAttribute("stroke", outLineColor);

	inputTopText.onkeyup = function() {
		var txt = this.value;
		targetTopTxt.textContent = txt;
		targetTopTxtOutLine.textContent = txt;
	};

	inputBottomText.onkeyup = function() {
		var txt = this.value;
		targetBottomTxt.textContent = txt;
	};
}

async function loadSVG ({path, name,}) {
	return fetch(`${path}${name}`)
		.then(response => response.text())
		.catch(console.error.bind(console));
}

function choiceFont(newFont) {
	const patternTexts = document.getElementsByClassName("patternText");
	[].forEach.call(patternTexts, el => {
		el.setAttribute("font-family", newFont);
	})
}