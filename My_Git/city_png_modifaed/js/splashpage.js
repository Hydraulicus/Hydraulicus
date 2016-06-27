

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


function drawing()
{
	for (var i in blocks) {
		animSvg.add(Snap.parse(blocks[i]));
	}
}

var animSvg, flag = true;
var blocks = [
'<g id="block0" class="visibility_hid">  <rect fill="white" stroke="white" stroke-width="0.566929" x="414" y="416" width="689" height="320"/>  <g transform="matrix(0.979373 0 0 1 -477.468 136.266)">   <text x="960" y="540"  fill="black" font-weight="bold" font-size="29.9999px" font-family="Avenir Next W02">Use City Lit' + "'" + 's interactive map to discover</text>  </g>  <g transform="matrix(0.959581 0 0 1 -458.435 170.041)">   <text x="960" y="540"  fill="black" font-weight="bold" font-size="29.9999px" font-family="Avenir Next W02">languages and facts around the world</text>  </g>  <path fill="#5A9013" stroke="#5A9013" stroke-width="0.216" d="M868 494c0,-21 -12,-33 -29,-33 -18,0 -32,13 -32,32 0,20 14,32 32,32 12,0 21,-5 27,-13l-14 -9c-2,4 -6,7 -13,7 -7,0 -13,-5 -14,-12l43 0c0,-1 0,-3 0,-4zm-323 -15c0,-33 -24,-43 -48,-43l-31 0 0 87 32 0c23,0 47,-14 47,-44zm-21 0c0,19 -14,25 -28,25l-10 0 0 -50 10 0c14,0 28,5 28,25zm97 -10c-6,-5 -13,-8 -21,-8 -11,0 -25,7 -25,21 0,11 11,15 18,17 8,2 13,3 13,6 0,4 -5,5 -8,5 -6,0 -11,-2 -15,-6l-10 11c6,6 16,10 25,10 11,0 25,-6 25,-21 0,-11 -11,-15 -19,-17 -7,-1 -13,-3 -13,-6 0,-4 6,-6 9,-6 5,0 8,2 11,5l10 -11zm122 24c0,-20 -15,-32 -33,-32 -17,0 -32,12 -32,32 0,19 15,32 32,32 18,0 33,-13 33,-32zm-19 0c0,7 -5,15 -14,15 -9,0 -14,-8 -14,-15 0,-8 5,-16 14,-16 9,0 14,8 14,16zm101 -7c1,-6 6,-11 14,-11 7,0 11,5 11,11l-25 0z"/>  <path fill="#B5C824" stroke="#B5C824" stroke-width="0.216" d="M570 445c0,-6 -5,-11 -11,-11 -5,0 -10,5 -10,11 0,6 5,10 10,10 6,0 11,-4 11,-10zm345 16c-1,0 -3,0 -5,0 -7,0 -13,4 -17,10l0 0 0 -8 -20 0 0 60 21 0 0 -31c0,-5 4,-14 15,-14 1,0 3,0 5,1l1 -18zm-106 2l-20 0 -13 39 0 0 -14 -39 -21 0 24 60 20 0 24 -60zm-131 6c-4,-4 -13,-8 -21,-8 -18,0 -32,14 -32,33 0,19 14,31 33,31 8,0 15,-4 20,-9l-11 -12c-2,2 -5,5 -9,5 -8,0 -14,-7 -14,-15 0,-8 5,-17 13,-17 4,0 8,2 10,5l11 -13zm-110 54l0 -59 -18 0 0 59 18 0z"/>  <path fill="#DB2128" stroke="#DB2128" stroke-width="0.216" d="M1056 618c0,-6 -5,-11 -11,-11 -6,0 -11,5 -11,11 0,7 5,12 11,12 6,0 11,-5 11,-12l0 0zm-231 -19c0,-20 -15,-32 -33,-32 -18,0 -33,12 -33,32 0,19 15,32 33,32 18,0 33,-13 33,-32zm-19 0c0,7 -5,15 -14,15 -9,0 -14,-8 -14,-15 0,-8 5,-15 14,-15 9,0 14,7 14,15zm90 30l0 -91 -18 0 0 91 18 0zm100 -11c0,-6 -5,-11 -11,-11 -6,0 -11,5 -11,11 0,7 5,12 11,12 6,0 11,-5 11,-12l0 0z"/>  <path fill="#EF6C20" stroke="#EF6C20" stroke-width="0.216" d="M1027 618c0,-6 -5,-11 -11,-11 -7,0 -12,5 -12,11 0,7 6,12 12,12 6,0 11,-5 11,-12l0 0zm-265 -51l-20 0 -11 40 0 0 -12 -40 -19 0 -10 40 0 0 -12 -40 -20 0 22 62 19 0 11 -37 0 0 11 37 19 0 22 -62zm110 1c-1,0 -3,-1 -4,-1 -7,0 -18,5 -20,11l-1 0 0 -11 -17 0 0 62 18 0 0 -31c0,-11 9,-13 19,-13 1,0 2,0 4,0l1 -17zm94 61l0 -91 -19 0 0 37 0 0c-3,-3 -9,-8 -18,-8 -17,0 -28,15 -28,32 0,16 11,32 28,32 8,0 16,-4 19,-10l1 0 0 8 17 0zm-18 -30c0,8 -6,15 -14,15 -9,0 -14,-7 -14,-15 0,-8 5,-15 14,-15 8,0 14,7 14,15z"/>  <path fill="#74369E" d="M631 600c0,-21 -13,-33 -30,-33 -18,0 -32,13 -32,32 0,20 15,32 33,32 12,0 21,-5 26,-13l-13 -9c-3,4 -7,7 -13,7 -7,0 -14,-5 -14,-12l42 0c1,-1 1,-3 1,-4zm-127 -17l0 -15 -15 0 0 -15 -20 0 0 15 -10 0 0 15 10 0 0 26c0,13 6,21 22,21 5,0 10,-1 13,-2l-1 -14c-1,1 -4,1 -6,1 -6,0 -8,-3 -8,-9l0 -23 15 0zm84 9c0,-6 6,-11 13,-11 8,0 12,5 12,11l-25 0z"/>  <path fill="#C54FA2" stroke="#C54FA2" stroke-width="0.216" d="M564 629l0 -37c0,-12 -6,-25 -21,-25 -8,0 -14,5 -17,10l0 0 0 -39 -19 0 0 91 19 0 0 -32c0,-7 4,-13 10,-13 7,0 9,6 9,12l0 33 19 0z"/></g>'


,'<g id="block1"  class="visibility_hid"><rect fill="white" stroke="white" stroke-width="0.566929" x="610" y="320" width="349" height="65.9999"/> <path fill="#B5C824" stroke="#B5C824" stroke-width="0.566929" d="M648 360c1,-1 4,-4 4,-5 1,0 -4,-4 -4,-6 0,-1 -2,1 -2,-4 -7,0 -5,-3 -7,-3 -1,-3 -4,-3 3,-3 3,0 8,2 4,-2 -2,-1 1,0 3,0 5,0 2,-1 4,-1 1,-1 2,0 3,-2 0,-2 3,-4 6,-1 0,0 2,1 2,1 0,0 7,4 10,4 3,-1 -2,6 -3,8 -2,5 -7,13 -8,13 -4,0 -3,0 -3,3 -4,0 -6,1 -9,-2 0,0 -5,0 -3,0z"/>  <path fill="#5A9013" stroke="#5A9013" stroke-width="0.566929" d="M625 355l1 16 19 0 0 -16 -20 0zm-1 -6l23 0 0 3 3 3 -3 4 0 14 -23 0 0 -24z"/>  <line fill="none" stroke="#5A9013" stroke-width="1.99984" x1="627" y1="358" x2="643" y2= "358" />  <line fill="none" stroke="#5A9013" stroke-width="1.99984" x1="627" y1="363" x2="643" y2= "363" />  <line fill="none" stroke="#5A9013" stroke-width="1.99984" x1="627" y1="368" x2="643" y2= "368" />  <polygon fill="#5A9013" stroke="white" stroke-width="0.566929" points="682,356 663,344 667,365 671,360 677,368 680,366 675,357 "/>  <g transform="matrix(1.0598 0 0 1 -323.647 -166.969)">   <text x="960" y="540"  fill="black" font-weight="normal" font-size="15.9999px" font-family=""Avenir Next W02">to discover its languages</text>  </g> <image id="Rectangle_x0020_2"  x="693" y="329" width="251" height="31.9998" xlink:href="png/green_text.png"/></g>'//ready!




,'<g id="block2" class="visibility_hid">  <rect fill="white" stroke="white" stroke-width="0.566929" x="1134" y="258" width="350" height="65.9999"/>  <path fill="#74369E" stroke="#74369E" stroke-width="0.566929" d="M1197 294l6 8 3 -3 -6 -8 6 -3 -19 -12 5 23 5 -5zm-41 -14l20 0 0 3 -20 0 0 -3z"/>  <polyline fill="none" stroke="black" stroke-width="0.566929" points="1179,281 1184,277 1179,272 "/>  <path fill="#C54FA2" stroke="#C54FA2" stroke-width="0.566929" d="M1179 270l0 2 5 5 -5 4 0 6 -27 0 0 -17 27 0zm2 30l2 -1c-2,3 -2,2 -2,1zm-23 -8c1,-1 -1,-3 -1,-3 -1,0 -2,4 1,3zm5 4l-1 -2c0,0 -2,3 1,2zm-17 0l-1 0 4 0c2,4 1,6 6,7 1,4 1,6 0,11l4 -4c1,-3 2,-4 1,-6 -3,0 -2,-2 -4,-2l-1 1c-1,-1 -1,-1 -1,-2 -1,0 -1,-1 -1,-2 1,0 3,-2 4,0 0,1 1,-2 1,-3 0,-1 0,-2 -1,-3 -1,0 0,1 0,1 -1,1 -1,1 -1,1 0,-1 0,-1 0,-2 0,-1 -2,-3 -2,-4l-4 0 0 3 -5 0c-1,1 -1,2 0,4l1 1 0 -1zm24 10c0,0 0,1 0,2 0,0 1,-1 1,-2l-1 0zm14 5l2 -2c-4,2 -3,2 -2,2zm-30 -16l1 1c0,0 -1,-1 -1,-1zm-1 -5c0,0 1,1 1,1l-3 0c0,0 1,-1 2,-1zm12 3l1 1 -2 1c-3,3 -1,2 -1,3 0,2 -1,2 -1,5 0,1 1,1 4,1l0 5 1 1c0,0 3,-4 3,-4l1 -5c4,3 2,4 6,0 1,2 1,3 1,8 3,0 2,0 4,1 1,-3 0,-4 0,-5 0,0 -1,-1 -3,0l0 -2 -1 0 1 -1c2,-5 4,-2 2,-7 0,0 2,0 2,0 1,3 1,2 1,0 2,-1 3,-2 2,-2 -10,-5 -10,-4 -13,-2l-1 -1c0,-1 1,0 -1,-1 -3,1 -5,2 -6,4zm4 6l-6 0c0,0 5,-3 6,0zm-15 -22l24 0 0 8 -24 0 0 -8z"/> <g transform="matrix(1.00216 0 0 1 255.297 -225.851)">  <text x="960" y="540"  fill="black" font-weight="normal" font-size="16.9999px" font-family="Avenir Next W02">use the drop down menu above</text> </g> <image x="1216" y="268" width="247" height="31.9998" xlink:href="png/purple_text.png"/></g>'//ready!

,'<g id="block3" class="visibility_hid"><rect fill="white" stroke="white" stroke-width=0.5" x="845" y="760" width="453.999" height="66"/><circle fill="none" stroke="#DB2128" stroke-width="1" cx="885" cy="795" r="14"/><path fill="#DB2128" stroke="#DB2128" stroke-width=0.5" d="M882 807c-1,-1 3,-3 4,-3 1,0 3,-2 0,-2 0,-1 -5,-3 -6,-3 -1,-2 -3,1 -3,-3 0,0 -3,-2 0,-3 1,0 1,1 1,2 1,0 1,1 1,-1 0,-1 4,-3 4,-3 0,-2 0,-1 0,-2 0,-1 1,-3 2,-1 1,2 1,0 1,-1 0,0 3,-1 1,-2 -2,-1 -1,-1 -3,-1 -2,0 -3,0 -3,-1 -1,0 -3,1 -4,1 0,1 -4,6 -5,7 -1,3 3,4 3,5 0,1 1,0 1,2 1,1 1,0 1,1 0,1 0,0 0,2 -1,1 3,2 3,4 1,1 1,3 2,2 0,0 0,0 0,0zm8 -23c0,0 0,4 0,4 0,1 1,-1 1,-1 1,0 1,-2 1,1 0,2 -2,2 -1,4 0,0 0,2 2,1 0,-1 0,-3 1,-2 1,0 2,-3 2,-1 1,1 -1,4 -4,3 0,0 -2,2 -1,3 0,1 -1,4 2,4 5,0 2,-2 4,-1 0,1 2,4 2,-1 0,-2 0,-5 -1,-6 0,0 -2,-4 -2,-5 -1,-1 -5,-4 -6,-4 0,1 1,0 0,1z"/>  <path fill="#EF6C20" stroke="white" stroke-width=0.5" d="M880 779c0,2 -1,5 -3,6 -1,2 -1,3 1,4 -3,0 -3,0 -5,-1 -2,0 -4,0 -5,0 -7,0 -12,-4 -12,-9 0,-5 5,-9 12,-9 6,0 12,4 12,9z"/>  <polygon fill="#EF6C20" stroke="white" stroke-width="1" points="914,804 893,792 898,815 903,808 909,818 913,815 906,806 "/>  <g transform="matrix(1.0661 0 0 1 -100.94 273.37)">   <text x="960" y="540"  fill="#919191" font-weight="normal" font-size="16px" font-family="Avenir Next W02">about languages around the world - see below</text>  </g>  <image id="Discover_x0020_facts" x="923" y="770" width="196" height="24.9999" xlink:href="png/red_text.png"/></g>'
]

window.onload = initSplashPage();
$(document).bind('click', click4close)