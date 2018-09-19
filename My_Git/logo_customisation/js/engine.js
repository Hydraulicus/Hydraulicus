
let inputText1;
let inputText2;
let targetTopTxt;
let targetTopTxtOutLine;
let targetBottomTxt;
let targetBottomTxtOutLine;
let startTopTextHeihgt;
let startBottomTextHeihgt;
let startOutLineSize;
let SVGlogoPlace;
let SVGlogoContour;
let SVGlogoContourPlace;
let SVGlogoContour1;
let SVGlogoContourClone;
let outLine1InnerColor;
let outLine2OuterColor;
let outLineSizeFactor;


const text1 = {
	id: "text-11",
	stroke: "",
	fill: "",
	outLineColor: "",//id = text1OutlineColor
	outLine1Size: 6,
	outLine2Size: 20,
	outLine1SizeFactor: 1,
	outLine2SizeFactor: 1,
	text: "",
	fontSize: "normal",
};
const text2 = {
	id: "text-2",
	stroke: "",
	fill: "",
	outLineColor: "",//id = text2OutlineColor
	outLine1Size: 10,
	outLine2Size: 20,
	outLine1SizeFactor: 1,
	outLine2SizeFactor: 1,
	text: "",
	fontSize: "normal",
};
const mascot = {
	id: "",
	stroke: "",
	fill: "",
	outLineColor: "",//id = mascotOutlineColor
	outLine1Size: 10,
	outLine2Size: 20,
	outLine1SizeFactor: 1,
	outLine2SizeFactor: 1,
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
const pattern = {
	id: "PATTERN",
	backgroundColor: "223344",
};

const choicePatternBackgroundColor = color => {
	const target =  document.getElementById(pattern.id);
	pattern.backgroundColor = color;
	// console.log(color, target);
	target.setAttribute('style', `background-color:${pattern.backgroundColor}`);
};

outLine1OuterColor = "SkyBlue";
outLine2OuterColor = "#ffffff";
startOutLineSize = 20;
outLineSizeFactor = 1;

function choiceOutLine1Size(newOutLineSizeFactor) {
	// console.log("choiceOutLine1Size =", newOutLineSizeFactor);
	// const outLineSize = newOutLineSizeFactor * startOutLineSize;
	text1.outLine1SizeFactor = newOutLineSizeFactor;
	text2.outLine1SizeFactor = newOutLineSizeFactor;
	mascot.outLine1SizeFactor = newOutLineSizeFactor;
	targetBottomTxt.setAttribute("stroke-width", `${newOutLineSizeFactor * text1.outLine1Size}px`);
	targetTopTxtOutLine.setAttribute("stroke-width", `${newOutLineSizeFactor * text2.outLine1Size}px`);
	SVGlogoContour1.setAttribute("stroke-width", `${2.5 * newOutLineSizeFactor * mascot.outLine1Size}px`);
}

function choiceOutLine2Size(newOutLineSizeFactor) {
	// console.log("choiceOutLine2Size =", newOutLineSizeFactor);
	// const outLineSize = newOutLineSizeFactor * startOutLineSize;
	text1.outLine2SizeFactor = newOutLineSizeFactor;
	text2.outLine2SizeFactor = newOutLineSizeFactor;
	mascot.outLine2SizeFactor = newOutLineSizeFactor;
	targetBottomTxtOutLine.setAttribute("stroke-width", `${newOutLineSizeFactor * text1.outLine2Size}px`);
	targetTopTxt.setAttribute("stroke-width", `${newOutLineSizeFactor * text1.outLine2Size}px`);
	SVGlogoContourClone.setAttribute("stroke-width", `${2.5 * newOutLineSizeFactor * mascot.outLine2Size}px`);
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
	targetBottomTxt.setAttribute("stroke", outLine1InnerColor);
	targetTopTxtOutLine.setAttribute("stroke", outLine1InnerColor);
	SVGlogoContour1.setAttribute("stroke", outLine1InnerColor);
}

function choiceOutLine2Color(newOutLineColor) {
	outLine2OuterColor = newOutLineColor;
	SVGlogoContourClone.setAttribute("stroke", outLine2OuterColor);
	targetTopTxt.setAttribute("stroke", outLine2OuterColor);
	targetBottomTxtOutLine.setAttribute("stroke", outLine2OuterColor);
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
	SVGlogoContourClone.setAttribute("stroke-width", `${2.5 * outLineSizeFactor * startOutLineSize}px`);
	SVGlogoContour1.setAttribute("stroke", outLine1OuterColor);
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

	SVGlogoContour1 = document.getElementById("SVG_LOGO_CONTOURE1");

	SVGlogoContour = document.getElementById("SVG_LOGO_CONTOURE").cloneNode(true);
	SVGlogoContourPlace = document.getElementById("SVG_LOGO_CONTOURE_PLACE");



	targetTopTxt = document.getElementById('text-11');
	targetTopTxtOutLine = document.getElementById('text-12');
	targetBottomTxtOutLine = document.getElementById('text-21');
	targetBottomTxt = document.getElementById('text-22');

	startTopTextHeihgt = targetTopTxt.getAttribute("font-size").match(/\d+/)[0];
	startBottomTextHeihgt = targetBottomTxt.getAttribute("font-size").match(/\d+/)[0];

	SVGlogoContourPlace.appendChild(SVGlogoContour);
	SVGlogoContourClone = SVGlogoContourPlace.firstChild;
	SVGlogoContourClone.setAttribute("stroke", outLine2OuterColor);
	// SVGlogoContourClone.setAttribute("stroke", "blue");
	SVGlogoContourClone.setAttribute("stroke-width", `${2.5*outLineSizeFactor * startOutLineSize}px`);

	targetTopTxt.setAttribute("stroke", outLine2OuterColor);
	targetBottomTxtOutLine.setAttribute("stroke", outLine2OuterColor);


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

function choiceFont({newFont, className}) {
	const patternTexts = document.getElementsByClassName(className);
	// console.log(className, patternTexts);
	[].forEach.call(patternTexts, el => {
		el.setAttribute("font-family", newFont);
	})
}