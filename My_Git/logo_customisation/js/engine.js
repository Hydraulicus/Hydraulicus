
let inputText1;
let inputText2;
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
let outLine1InnerColor;
let outLine2OuterColor;
let outLineSizeFactor;


const text1 = {
	id: "text-11",
	stroke: "",
	fill: "",
	outlineColor: "",//id = text1OutlineColor
	outlineSize: "",
	text: "",
	fontSize: "normal",
};
const text2 = {
	id: "text-2",
	stroke: "",
	fill: "",
	outlineColor: "",//id = text2OutlineColor
	outlineSize: "",
	text: "",
	fontSize: "normal",
};
const mascot = {
	id: "",
	stroke: "",
	fill: "",
	outlineColor: "",//id = mascotOutlineColor
	outlineSize: "",
	text: "",
	fontSize: "normal",
};

const mainOutline = {
	ids: ["text-12",],
	class: "mainOutline",
	fill: "",
	stroke: "",
	size: "normal",
};

outLine2OuterColor = "SkyBlue";
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

function choiceColor({value, targetId}) {
	outLine2OuterColor = value;
	// console.log(targetId);
	const target =  document.getElementById(targetId);
	target.setAttribute("fill", outLine2OuterColor);
}

function choiceOutLine1Color(newOutLineColor) {
	outLine1InnerColor = newOutLineColor;

	console.log(newOutLineColor);
	// SVGlogoContourClone.setAttribute("stroke", outLine1InnerColor);

	// targetTopTxt.setAttribute("stroke", outLine1InnerColor);
	targetBottomTxt.setAttribute("stroke", outLine1InnerColor);
	targetTopTxtOutLine.setAttribute("stroke", outLine1InnerColor);
}

function choiceOutLine2Color(newOutLineColor) {
	outLine2OuterColor = newOutLineColor;

	console.log(newOutLineColor);
	SVGlogoContourClone.setAttribute("stroke", outLine2OuterColor);

	targetTopTxt.setAttribute("stroke", outLine2OuterColor);
	targetTopTxtOutLine.setAttribute("fill", outLine2OuterColor);
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
	SVGlogoContourClone.setAttribute("stroke", outLine2OuterColor);
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



	targetTopTxt = document.getElementById('text-11');
	targetTopTxtOutLine = document.getElementById('text-12');
	targetBottomTxt = document.getElementById('text-2');

	startTopTextHeihgt = targetTopTxt.getAttribute("font-size").match(/\d+/)[0];
	startBottomTextHeihgt = targetBottomTxt.getAttribute("font-size").match(/\d+/)[0];

	SVGlogoContourPlace.appendChild(SVGlogoContour);
	SVGlogoContourClone = SVGlogoContourPlace.firstChild;
	SVGlogoContourClone.setAttribute("stroke", outLine1InnerColor);
	SVGlogoContourClone.setAttribute("stroke-width", `${outLineSizeFactor * startOutLineSize}px`);

	targetTopTxt.setAttribute("stroke", outLine2OuterColor);


	inputText1 = document.getElementById('inputtxt1');
	inputText1.onkeyup = function() {
		var txt = this.value;
		targetBottomTxt.textContent = txt;
	};

	inputText2 = document.getElementById('inputtxt2');
	inputText2.onkeyup = function() {
		var txt = this.value;
		targetTopTxt.textContent = txt;
		targetTopTxtOutLine.textContent = txt;
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