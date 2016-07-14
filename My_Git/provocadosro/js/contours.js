var objects = [
	//full segments contours
	// '<path id="SP-segment" fill="#768CC1" d="M622.68,272H312.82L467.95,3.21c2.67,1.67,4.94,3.95,6.57,6.78l145.51,252.1C621.79,265.13,622.67,269,622.68,272"/>'
	// ,'<path id="MR-segment" fill="#A5CBD9" d="M312.82,271.82L157.15,2.2c0.02-0.01,0.03,0.07,0.05,0.06c2.78-1.45,5.91-2.26,9.15-2.26h291.02c3.82,0,7.47,1.12,10.58,3.1L312.82,271.82z"/>'
	// ,'<path id="AR-segment" fill="#49979E" d="M312.82,272h-312c0-3,1-6.89,2.76-9.94L149.14,9.99c1.92-3.3,4.72-5.96,7.98-7.67L312.82,272z"/>'
	// ,'<path id="PS-segment" fill="#83378C" d="M157.13,541.57c-3.26-1.71-6.03-4.4-7.93-7.7L3.17,281.8C1.39,278.72,0,275.26,0,271.83L0,272l312.82,0L157.13,541.57z"/>'
	// ,'<path id="RS-segment" fill="#27438F" d="M457.37,544l-291.02,0c-3.25,0-6.4-0.95-9.19-2.41c-0.01-0.01-0.02-0.05-0.03-0.07	l155.69-269.68l155.2,268.81c-0.01,0.01-0.01,0.11-0.02,0.11C464.88,542.75,461.21,544,457.37,544"/>'
	// ,'<path id="PP-segment" fill="#9ACFE7" d="M468.02,540.73L312.82,272h309.86c0.01,4-0.87,6.78-2.65,9.86L474.52,533.89C472.9,536.68,470.66,539.06,468.02,540.73"/>'

  '<path id="sp-segment" class="segments" fill="#768CC1" d="M623 272l-96 0c0,-2 -1,-5 -2,-7l-101 -174c-1,-2 -2,-3 -4,-4l48 -84c3,2 5,4 7,7l145 252c2,3 3,7 3,10z"/>'
  ,'<path id="mr-segment" class="segments" fill="#A5CBD9" d="M206 86l-49 -84c0,0 0,0 0,0 3,-1 6,-2 9,-2l292 0c3,0 7,1 10,3l-48 84c-2,-2 -5,-3 -7,-3l-201 0c-2,0 -5,1 -6,2z"/>'
  ,'<path id="ar-segment" class="segments" fill="#49979E" d="M98 272l-97 0c0,-3 1,-7 3,-10l145 -252c2,-3 5,-6 8,-8l48 84c-2,1 -4,3 -5,5l-101 174c-1,2 -1,5 -1,7z"/>'
  ,'<path id="ps-segment" class="segments" fill="#83378C" d="M157 542c-3,-2 -6,-5 -8,-8l-146 -252c-2,-3 -3,-7 -3,-10l0 0 98 0c0,3 0,5 1,7l101 174c1,2 3,4 5,5l-48 84 0 0 0 0z"/>'
  ,'<path id="rs-segment" class="segments" fill="#27438F" d="M458 544l-292 0c-3,0 -6,-1 -9,-2 0,0 0,0 0,0l48 -84c2,1 4,2 7,2l201 0c2,0 5,-1 7,-2l48 83c0,0 0,0 0,0 -3,2 -7,3 -10,3z"/>'
  ,'<path id="pp-segment" class="segments" fill="#9ACFE7" d="M468 541l-48 -83c2,-2 3,-3 4,-5l101 -174c1,-2 2,-4 2,-7l96 0c0,4 -1,7 -3,10l-145 252c-2,3 -4,5 -7,7z"/>'

,'<g id="AR-icon">'
		,'<path class="bottomiconplaceinhex" fill="#49979E" stroke="white" stroke-width="1" d="M202.14,168.94c-20.79,0-37.64,16.85-37.64,37.61c0,20.79,16.85,37.64,37.64,37.64c20.77,0,37.62-16.85,37.62-37.64C239.76,185.79,222.91,168.94,202.14,168.94z"/>'
	,'</g>'//end of id="AR-icon"

,'<g id="MR-icon">'// 2
		,'<path class="bottomiconplaceinhex" fill="#A5CBD9"  stroke="white" stroke-width="1" d="M312,105.5c-20.79,0-37.64,16.85-37.64,37.64c0,20.77,16.85,37.62,37.64,37.62c20.79,0,37.64-16.85,37.64-37.62C349.64,122.35,332.79,105.5,312,105.5z"/>'
,'</g>'//end of id="MR-icon"

,'<g id="SP-icon">' //3
		,'<path class="bottomiconplaceinhex" fill="#768CC1"  stroke="white" stroke-width="1" d="M421.86,168.94c-20.77,0-37.63,16.85-37.63,37.62c0,20.79,16.86,37.64,37.63,37.64c20.79,0,37.64-16.85,37.64-37.64C459.5,185.79,442.65,168.94,421.86,168.94z"/>'
	,'</g>'//end of id="SP-icon"

,'<g id="PP-icon">'//V 4
,		'<path fill="#9ACFE7" class="bottomiconplaceinhex"  stroke="white" stroke-width="1" d="M421.86,295.78c-20.77,0-37.62,16.87-37.62,37.66s16.86,37.61,37.62,37.61	c20.79,0,37.64-16.82,37.64-37.62S442.65,295.78,421.86,295.78z "/>'
,'</g>'//end of id="PP-icon"

,'<g id="RS-icon">'
		,'<path class="bottomiconplaceinhex" fill="#27438F"  stroke="white" stroke-width="1" d="M312,359.21c-20.79,0-37.64,16.88-37.64,37.67c0,20.77,16.85,37.61,37.64,37.61c20.79,0,37.64-16.85,37.64-37.61C349.64,376.09,332.79,359.21,312,359.21z"/>'
	,'</g>'//end of id="RS-icon"
,'<g id="PS-icon">'
		 ,'<path class="bottomiconplaceinhex" fill="#83378C"  stroke="white" stroke-width="1" d="M202.14,295.78c-20.79,0-37.64,16.87-37.64,37.66s16.85,37.61,37.64,37.62c20.77,0,37.62-16.82,37.62-37.62C239.76,312.65,222.91,295.78,202.14,295.78z"/>'
	,'</g>'//end of id="PS-icon"


,'<text id="mr-text" class="titles" transform="matrix(1 0 0 1 310 45.562)" fill="#FFFFFF" font-family="Corbert-ExtraBold" font-size="19" text-anchor="middle"></text>'//MINIMALIZACE RIZIK
// ,'<text id="mr-text" class="" transform="matrix(1 0 0 1 212.311 45.562)" fill="#F00" font-family="Corbert-ExtraBold" font-size="19">MINIMALIZACE RIZIK</text>'//

,'<text id="pp-text" class="titles" transform="matrix(0.5 -0.866 0.866 0.5 515.6997 393)" fill="#FFFFFF" font-family="Corbert-ExtraBold" font-size="19" text-anchor="middle"></text>'//POJISTNÝ PROGRAM
// ,'<text id="pp-text" class="" transform="matrix(0.5 -0.866 0.866 0.5 465.6997 481.0806)" fill="#F00" font-family="Corbert-ExtraBold" font-size="19">POJISTNÝ PROGRAM</text>'//

,'<text id="sp-text" class="titles" transform="matrix(0.5 0.866 -0.866 0.5 505.1143 154.1631)" fill="#FFFFFF" font-family="Corbert-ExtraBold" font-size="19" text-anchor="middle"></text>'//SPRÁVA POJIŠTĚNÍ
// ,'<text id="sp-text" class="" transform="matrix(0.5 0.866 -0.866 0.5 459.1143 75.1631)" fill="#F00" font-family="Corbert-ExtraBold" font-size="19">SPRÁVA POJIŠTĚNÍ</text>'//

,'<text id="rs-text" class="titles" transform="matrix(1 0 0 1 309 509.4917)" fill="#FFFFFF" font-family="Corbert-ExtraBold" font-size="19" text-anchor="middle"></text>'//ŘEŠENÍ ŠKOD
// ,'<text id="rs-text" class="" transform="matrix(1 0 0 1 244.52 509.4917)" fill="#F00" font-family="Corbert-ExtraBold" font-size="19">ŘEŠENÍ ŠKOD</text>'//

,'<text id="ps-text" class="titles" transform="matrix(0.5 0.866 -0.866 0.5 106.4648 388.4165)" fill="#FFFFFF" font-family="Corbert-ExtraBold" font-size="19" text-anchor="middle"></text>'//PORADENSTVÍ A SLUŽBY
// ,'<text id="ps-text" class="" transform="matrix(0.5 0.866 -0.866 0.5 46.4648 283.4165)" fill="#F00" font-family="Corbert-ExtraBold" font-size="19">PORADENSTVÍ A SLUŽBY</text>'//PORADENSTVÍ A SLUŽBY

,'<text id="ar-text" class="titles" transform="matrix(0.5 -0.866 0.866 0.5 115.7793 158.6226)" fill="#FFFFFF" font-family="Corbert-ExtraBold" font-size="19"  text-anchor="middle"></text>'//ANALÝZA RIZIK
// ,'<text id="ar-text" class="" transform="matrix(0.5 -0.866 0.866 0.5 78.7793 222.6226)" fill="red" font-family="Corbert-ExtraBold" font-size="19"  >ANALÝZA RIZIK</text>'//
]

hexcovers = [
	'<path id="sp" class="hexcover" fill-opacity="0.01" fill="#768CC1" d="M622.68,272H312.82L467.95,3.21c2.67,1.67,4.94,3.95,6.57,6.78l145.51,252.1C621.79,265.13,622.67,269,622.68,272"/>'
	,'<path id="mr" class="hexcover" fill-opacity="0.01" fill="#A5CBD9" d="M312.82,271.82L157.15,2.2c0.02-0.01,0.03,0.07,0.05,0.06c2.78-1.45,5.91-2.26,9.15-2.26h291.02c3.82,0,7.47,1.12,10.58,3.1L312.82,271.82z"/>'
	,'<path id="ar" class="hexcover" fill-opacity="0.01" fill="#49979E" d="M312.82,272h-312c0-3,1-6.89,2.76-9.94L149.14,9.99c1.92-3.3,4.72-5.96,7.98-7.67L312.82,272z"/>'
	,'<path id="ps" class="hexcover" fill-opacity="0.01" fill="#83378C" d="M157.13,541.57c-3.26-1.71-6.03-4.4-7.93-7.7L3.17,281.8C1.39,278.72,0,275.26,0,271.83L0,272l312.82,0L157.13,541.57z"/>'
	,'<path id="rs" class="hexcover" fill-opacity="0.01" fill="#27438F" d="M457.37,544l-291.02,0c-3.25,0-6.4-0.95-9.19-2.41c-0.01-0.01-0.02-0.05-0.03-0.07	l155.69-269.68l155.2,268.81c-0.01,0.01-0.01,0.11-0.02,0.11C464.88,542.75,461.21,544,457.37,544"/>'
	,'<path id="pp" class="hexcover" fill-opacity="0.01" fill="#9ACFE7" d="M468.02,540.73L312.82,272h309.86c0.01,4-0.87,6.78-2.65,9.86L474.52,533.89C472.9,536.68,470.66,539.06,468.02,540.73"/>'

// ,'  <path id="pp-segment_1" fill="#E31E24" fill-opacity="0.5" stroke="#E31E24" stroke-width="0.900002" d="M468 541l-48 -83c4,-10 -61,-123 -74,-146 -19,-36 28,-38 74,-36 41,2 103,-1 107,-4l96 0c0,4 -1,7 -3,10l-145 252c-2,3 -4,5 -7,7zm-45 -242c-21,1 -41,14 -41,35 0,20 21,34 42,34 21,0 39,-16 36,-34 -4,-21 -17,-36 -37,-35z"/>'
// ,'    <path id="pp-segment_0" fill="#9ACFE7" stroke="#9ACFE7" fill-opacity="0.5" stroke-width="1" d="M468 541l-48 -83c2,-2 3,-3 4,-5l101 -174c1,-2 2,-4 2,-7l96 0c0,4 -1,7 -3,10l-145 252c-2,3 -4,5 -7,7z"/>'
// ,'     <path id="AR-segment" fill="#2B2A29" fill-opacity="0.5" stroke="#2B2A29" stroke-width="0.900002" d="M313 272l-312 0c0,-3 1,-7 3,-10l145 -252c2,-3 5,-6 8,-8l156 270z"/>'
// ,'       <path id="PP-segment" fill="#E31E24" fill-opacity="0.5" stroke="#E31E24" stroke-width="0.900002" d="M468 541l-155 -269 310 0c0,4 -1,7 -3,10l-145 252c-2,3 -4,5 -7,7z"/>'
// ,'<g id="topcover"></g>'
]



//filled contours
,segmentcontours =  {
		 "sp" : "M622.68,272H312.82L467.95,3.21c2.67,1.67,4.94,3.95,6.57,6.78l145.51,252.1C621.79,265.13,622.67,269,622.68,272"
		,"mr" : "M312.82,271.82L157.15,2.2c0.02-0.01,0.03,0.07,0.05,0.06c2.78-1.45,5.91-2.26,9.15-2.26h291.02c3.82,0,7.47,1.12,10.58,3.1L312.82,271.82z"
		,"ar" : "M312.82,272h-312c0-3,1-6.89,2.76-9.94L149.14,9.99c1.92-3.3,4.72-5.96,7.98-7.67L312.82,272z"
		,"ps" : "M157.13,541.57c-3.26-1.71-6.03-4.4-7.93-7.7L3.17,281.8C1.39,278.72,0,275.26,0,271.83L0,272l312.82,0L157.13,541.57z"
		,"rs" : "M457.37,544l-291.02,0c-3.25,0-6.4-0.95-9.19-2.41c-0.01-0.01-0.02-0.05-0.03-0.07	l155.69-269.68l155.2,268.81c-0.01,0.01-0.01,0.11-0.02,0.11C464.88,542.75,461.21,544,457.37,544"
		,"pp" : "M468.02,540.73L312.82,272h309.86c0.01,4-0.87,6.78-2.65,9.86L474.52,533.89C472.9,536.68,470.66,539.06,468.02,540.73"
	}

//initial contours
,initialsegmentcontours =  {
		 "sp" : "M623 272l-96 0c0,-2 -1,-5 -2,-7l-101 -174c-1,-2 -2,-3 -4,-4l48 -84c3,2 5,4 7,7l145 252c2,3 3,7 3,10z"
		,"mr" : "M206 86l-49 -84c0,0 0,0 0,0 3,-1 6,-2 9,-2l292 0c3,0 7,1 10,3l-48 84c-2,-2 -5,-3 -7,-3l-201 0c-2,0 -5,1 -6,2z"
		,"ar" : "M98 272l-97 0c0,-3 1,-7 3,-10l145 -252c2,-3 5,-6 8,-8l48 84c-2,1 -4,3 -5,5l-101 174c-1,2 -1,5 -1,7z"
		,"ps" : "M157 542c-3,-2 -6,-5 -8,-8l-146 -252c-2,-3 -3,-7 -3,-10l0 0 98 0c0,3 0,5 1,7l101 174c1,2 3,4 5,5l-48 84 0 0 0 0z"
		,"rs" : "M458 544l-292 0c-3,0 -6,-1 -9,-2 0,0 0,0 0,0l48 -84c2,1 4,2 7,2l201 0c2,0 5,-1 7,-2l48 83c0,0 0,0 0,0 -3,2 -7,3 -10,3z"
		,"pp" : "M468 541l-48 -83c2,-2 3,-3 4,-5l101 -174c1,-2 2,-4 2,-7l96 0c0,4 -1,7 -3,10l-145 252c-2,3 -4,5 -7,7z"
	}


  // '<path id="sp-segment" fill="#768CC1" d="M623 272l-96 0c0,-2 -1,-5 -2,-7l-101 -174c-1,-2 -2,-3 -4,-4l48 -84c3,2 5,4 7,7l145 252c2,3 3,7 3,10z"/>'
  // ,'<path id="mr-segment" fill="#A5CBD9" d="M206 86l-49 -84c0,0 0,0 0,0 3,-1 6,-2 9,-2l292 0c3,0 7,1 10,3l-48 84c-2,-2 -5,-3 -7,-3l-201 0c-2,0 -5,1 -6,2z"/>'
  // ,'<path id="ar-segment" fill="#49979E" d="M98 272l-97 0c0,-3 1,-7 3,-10l145 -252c2,-3 5,-6 8,-8l48 84c-2,1 -4,3 -5,5l-101 174c-1,2 -1,5 -1,7z"/>'
  // ,'<path id="ps-segment" fill="#83378C" d="M157 542c-3,-2 -6,-5 -8,-8l-146 -252c-2,-3 -3,-7 -3,-10l0 0 98 0c0,3 0,5 1,7l101 174c1,2 3,4 5,5l-48 84 0 0 0 0z"/>'
  // ,'<path id="rs-segment" fill="#27438F" d="M458 544l-292 0c-3,0 -6,-1 -9,-2 0,0 0,0 0,0l48 -84c2,1 4,2 7,2l201 0c2,0 5,-1 7,-2l48 83c0,0 0,0 0,0 -3,2 -7,3 -10,3z"/>'
  // ,'<path id="pp-segment" fill="#9ACFE7" d="M468 541l-48 -83c2,-2 3,-3 4,-5l101 -174c1,-2 2,-4 2,-7l96 0c0,4 -1,7 -3,10l-145 252c-2,3 -4,5 -7,7z"/>'

  ,bottomBar = [
	'<path fill="#F1F1F1" fill-rule="nonzero" d="M614 694l-597 0c-28,0 -50,-23 -50,-50l0 -4c0,-28 22,-50 50,-50l597 0c28,0 50,22 50,50l0 4c0,27 -22,50 -50,50z"/>'
	,'<path id="0" class="bottomiconplace" fill="#47979E" fill-rule="nonzero" d="M56 642c0,20 -17,37 -37,37 -21,0 -38,-17 -38,-37 0,-21 17,-38 38,-38 20,0 37,17 37,38z"/>'
	,'<path id="1" class="bottomiconplace" fill="#A4CBDA" fill-rule="nonzero" d="M175 642c0,20 -17,37 -38,37 -20,0 -37,-17 -37,-37 0,-21 17,-38 37,-38 21,0 38,17 38,38z"/>'
	,'<path id="2" class="bottomiconplace" fill="#768BC0" fill-rule="nonzero" d="M293 642c0,20 -16,37 -37,37 -21,0 -37,-17 -37,-37 0,-21 16,-38 37,-38 21,0 37,17 37,38z"/>'
	,'<path id="3" class="bottomiconplace" fill="#99CFE7" fill-rule="nonzero" d="M412 642c0,20 -17,37 -37,37 -21,0 -38,-17 -38,-37 0,-21 17,-38 38,-38 20,0 37,17 37,38z"/>'
	,'<path id="4" class="bottomiconplace" fill="#27428E" fill-rule="nonzero" d="M531 642c0,20 -17,37 -38,37 -20,0 -37,-17 -37,-37 0,-21 17,-38 37,-38 21,0 38,17 38,38z"/>'
	,'<path id="5" class="bottomiconplace" fill="#81368A" fill-rule="nonzero" d="M649 642c0,20 -16,37 -37,37 -20,0 -37,-17 -37,-37 0,-21 17,-38 37,-38 21,0 37,17 37,38z"/>'
]  

,intoClone = [
  '<path fill="none" id="topiconplace"  fill-rule="nonzero" fill-opacity="0.25" stroke="white" stroke-width="3" stroke-opacity="0.25" d="M381 102c0,34 -27,62 -62,62 -34,0 -62,-28 -62,-62 0,-34 28,-62 62,-62 35,0 62,28 62,62"/>'
  ,'<polyline fill="rgba(255,255,255, 0.1)" id="arrowright" fill-rule="nonzero" stroke="white" stroke-width="3" points="568,236 590,272 568,309 "/>'
  ,'<polyline fill="rgba(255,255,255, 0.1)" id="arrowleft" fill-rule="nonzero" stroke="white" stroke-width="3" points="51,309 29,273 51,236 "/>'
  ,'<polygon id="closecross" fill="white" fill-rule="nonzero" stroke-width="10" stroke="rgba(255,255,255, 0.1)" points="446,28 439,20 443,16 451,24 458,16 463,21 455,28 463,36 458,40 451,32 443,40 439,36 "/>'
]
