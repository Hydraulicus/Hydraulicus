

function initSplashPage(argument) {
	// animSvg = Snap("#splashpage").attr({ viewBox: "650 555 720 320", preserveAspectRatio : "xMidYMid meet"});
	animSvg = Snap("#splashpage").attr({ viewBox: "450 235 1020 620", preserveAspectRatio : "xMidYMid meet"});
	drawing();
	animation(0)
}

function animation(N) {
	// console.log('',N);
	if (( N > blocks.length-1) || (!flag)) return;
	Snap.select("#block"+N)
		.transform("s0.00001,0.00001")
		.removeClass("visibility_hid")
		.animate({transform : 's1 1'}, 370, mina.backout, function(){ ++N; animation(N) } );
}

function disappiaringAimation(N) {
	$(document).unbind('click', click4close);
	Snap.select("#block"+N)
		.animate({transform : 's0.001 0.001'}, 270, mina.backin, function()
			{ 
				--N; 
				if ( N < 0) 
					{ 
						animSvg.remove();
						$("#4splashpage").remove();
						return
					} 
					else 
						disappiaringAimation(N) 
			} );
}

function click4close() { 
	flag = false;
	disappiaringAimation(blocks.length-1);
}


// function onSVGLoaded( data ){ 
//     animSvg.append( data );
// }

function drawing()
{

	// Snap.load("/SVG"+externalSVG[0], onSVGLoaded ) ;
	// Snap.load(externalSVG[0], onSVGLoaded ) ;

	for (var i in blocks) {
		animSvg.add(Snap.parse(blocks[i]));
	}
}

var animSvg, flag = true;
// var externalSVG = ["http://www.w3.org/TR/SVG/images/struct/Use01.svg"];
// var externalSVG = ["splash_page-01.svg"];
var blocks = [
'<g id="block0" class="visibility_hid">  <rect fill="white" stroke="white" stroke-width="0.566929" x="414" y="416" width="689" height="320"/>  <g transform="matrix(0.979373 0 0 1 -477.468 136.266)">   <text x="960" y="540"  fill="#919191" font-weight="bold" font-size="29.9999px" font-family="Avenir Next W02">Use City Lit' + "'" + 's interactive map to discover</text>  </g>  <g transform="matrix(0.959581 0 0 1 -458.435 170.041)">   <text x="960" y="540"  fill="#919191" font-weight="bold" font-size="29.9999px" font-family="Avenir Next W02">languages and facts around the world</text>  </g>  <image x="453" y="279" width="610" height="511" xlink:href="svg/main_box.svg"/></g>'


,'<g id="block1"  class="visibility_hid"><rect fill="white" stroke="white" stroke-width="0.566929" x="610" y="320" width="349" height="65.9999"/>  <g transform="matrix(1.0598 0 0 1 -323.647 -166.969)">   <text x="960" y="540"  fill="#919191" font-weight="normal" font-size="15.9999px" font-family=""Avenir Next W02">to discover its languages</text>  </g> <image x="623" y="322" width="58" height="58" xlink:href="svg/splash_page-05.svg"/> <image   x="693" y="329" width="251" height="31.9998" xlink:href="svg/splash_page-01.svg"/></g>'




,'<g id="block2" class="visibility_hid">  <rect fill="white" stroke="white" stroke-width="0.566929" x="1134" y="258" width="350" height="65.9999"/> <g transform="matrix(1.00216 0 0 1 255.297 -225.851)">  <text x="960" y="540"  fill="#919191" font-weight="normal" font-size="16.9999px" font-family="Avenir Next W02">use the drop down menu above</text> </g><image x="1141" y="258" width="68" height="68" xlink:href="svg/splash_page-06.svg"/> <image x="1216" y="268" width="247" height="31.9998" xlink:href="svg/pirple.svg"/></g>'



,'<g id="block3" class="visibility_hid"><rect fill="white" stroke="white" stroke-width=0.5" x="845" y="760" width="453.999" height="66"/>  <path fill="#EF6C20" stroke="white" stroke-width=0.5" d="M880 779c0,2 -1,5 -3,6 -1,2 -1,3 1,4 -3,0 -3,0 -5,-1 -2,0 -4,0 -5,0 -7,0 -12,-4 -12,-9 0,-5 5,-9 12,-9 6,0 12,4 12,9z"/>  <polygon fill="#EF6C20" stroke="white" stroke-width="1" points="914,804 893,792 898,815 903,808 909,818 913,815 906,806 "/>  <g transform="matrix(1.0661 0 0 1 -100.94 273.37)">   <text x="960" y="540"  fill="#919191" font-weight="normal" font-size="16px" font-family="Avenir Next W02">about languages around the world - see below</text>  </g>  <image id="Discover_x0020_facts" x="923" y="770" width="196" height="24.9999" xlink:href="svg/red.svg"/> <image x="850" y="760" width="68" height="68" xlink:href="svg/splash_page-07.svg"/></g>'
]

window.onload = initSplashPage();
$(document).bind('click', click4close)