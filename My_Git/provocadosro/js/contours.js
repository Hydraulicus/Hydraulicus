

var objects = [
	'<g id=""></g>'
	,'<path id="SP-segment" fill="#768CC1" d="M622.68,272H312.82L467.95,3.21c2.67,1.67,4.94,3.95,6.57,6.78l145.51,252.1C621.79,265.13,622.67,269,622.68,272"/>'
	,'<path id="MR-segment" fill="#A5CBD9" d="M312.82,271.82L157.15,2.2c0.02-0.01,0.03,0.07,0.05,0.06c2.78-1.45,5.91-2.26,9.15-2.26h291.02c3.82,0,7.47,1.12,10.58,3.1L312.82,271.82z"/>'
	,'<path id="AR-segment" fill="#49979E" d="M312.82,272h-312c0-3,1-6.89,2.76-9.94L149.14,9.99c1.92-3.3,4.72-5.96,7.98-7.67L312.82,272z"/>'
	,'<path id="PS-segment" fill="#83378C" d="M157.13,541.57c-3.26-1.71-6.03-4.4-7.93-7.7L3.17,281.8C1.39,278.72,0,275.26,0,271.83L0,272l312.82,0L157.13,541.57z"/>'
	,'<path id="RS-segment" fill="#27438F" d="M457.37,544l-291.02,0c-3.25,0-6.4-0.95-9.19-2.41c-0.01-0.01-0.02-0.05-0.03-0.07	l155.69-269.68l155.2,268.81c-0.01,0.01-0.01,0.11-0.02,0.11C464.88,542.75,461.21,544,457.37,544"/>'
	,'<path id="PP-segment" fill="#9ACFE7" d="M468.02,540.73L312.82,272h309.86c0.01,4-0.87,6.78-2.65,9.86L474.52,533.89C472.9,536.68,470.66,539.06,468.02,540.73"/>'
	,'<path id="hexamaska" fill="white" d="M199.75,452.77L99.32,278.85c-2.43-4.23-2.43-9.46,0-13.67L199.75,91.24c2.43-4.23,6.96-6.83,11.82-6.83h200.85c4.87,0,9.39,2.59,11.82,6.83l100.43,173.93c2.43,4.21,2.43,9.44,0,13.68L424.25,452.77c-2.43,4.2-6.96,6.81-11.82,6.81H211.57C206.71,459.59,202.18,456.97,199.75,452.77"/>'


,'<g id="AR-icon">'
		,'<path class="bottomiconplaceinhex" fill="#49979E" d="M202.14,168.94c-20.79,0-37.64,16.85-37.64,37.61c0,20.79,16.85,37.64,37.64,37.64c20.77,0,37.62-16.85,37.62-37.64C239.76,185.79,222.91,168.94,202.14,168.94z"/>'



		// ,'<path fill="#49979E" d="M202.14,168.94c-20.79,0-37.64,16.85-37.64,37.61c0,20.79,16.85,37.64,37.64,37.64c20.77,0,37.62-16.85,37.62-37.64C239.76,185.79,222.91,168.94,202.14,168.94z M205.03,223.57c0,0.82-0.67,1.46-1.47,1.46h-15.05c-0.3,0-0.59-0.08-0.82-0.25l-4.38-3c-0.39-0.27-0.62-0.72-0.62-1.22l0-20.11c0-0.82,0.64-1.46,1.47-1.47l3.06,0c-0.18,0.93-0.31,1.93-0.32,2.93h-1.3v14.41h5.47v5.76h11.02l0-4.74c0.02,0,0.05,0,0.07,0c0.96,0,1.91-0.08,2.86-0.27V223.57zM220.74,220.77c-1.14,1.14-3.01,1.14-4.16,0l-6.74-6.74c-0.04-0.04-0.05-0.08-0.08-0.12c-2.2,1.43-4.81,2.26-7.59,2.26c-7.76,0-14.04-6.31-14.04-14.04c0-7.73,6.29-14.02,14.04-14.02c7.73,0,14.02,6.29,14.02,14.02c0,2.84-0.84,5.46-2.29,7.68c0.04,0.03,0.07,0.06,0.08,0.07l6.76,6.76C221.88,217.78,221.88,219.63,220.74,220.77z"/>'
		 // ,'<path fill="#49979E" d="M202.16,192.24c-5.47,0-9.91,4.43-9.91,9.88c0,5.45,4.44,9.9,9.91,9.9c5.45,0,9.88-4.45,9.88-9.9C212.05,196.67,207.62,192.24,202.16,192.24z M209.24,197.23l-4.27,5.75c-0.26,0.37-0.68,0.58-1.13,0.59c-0.45,0.01-0.88-0.18-1.17-0.52l-1.95-2.35l-2.02,4.92c-0.18,0.48-0.6,0.8-1.12,0.89c-0.49,0.07-1.01-0.1-1.33-0.5l-2.74-3.2c-0.02-0.23-0.03-0.44-0.03-0.68c0-1.05,0.18-2.06,0.53-3c0.21,0.08,0.37,0.22,0.52,0.38l2.39,2.79l2.04-4.96c0.18-0.47,0.61-0.82,1.13-0.88c0.49-0.09,1.02,0.11,1.35,0.5l2.3,2.8l3.16-4.27c0.1-0.14,0.22-0.25,0.36-0.33c0.79,0.57,1.45,1.26,2,2.04C209.26,197.19,209.25,197.21,209.24,197.23z"/>'
		// <path fill="#FFFFFF" d="M213.98,209.87c-0.01-0.01-0.05-0.04-0.08-0.07c1.45-2.22,2.29-4.84,2.29-7.68
		// 	c0-7.73-6.29-14.02-14.02-14.02c-7.76,0-14.04,6.29-14.04,14.02c0,7.74,6.29,14.04,14.04,14.04c2.79,0,5.4-0.83,7.59-2.26
		// 	c0.04,0.04,0.05,0.08,0.08,0.12l6.74,6.74c1.15,1.14,3.02,1.14,4.16,0c1.14-1.14,1.14-2.99,0-4.13L213.98,209.87z M202.16,212.02
		// 	c-5.47,0-9.91-4.45-9.91-9.9c0-5.45,4.44-9.88,9.91-9.88c5.45,0,9.88,4.43,9.89,9.88C212.05,207.58,207.61,212.02,202.16,212.02z"
		// 	/>
		// <path fill="#FFFFFF" d="M207.28,195.15c-0.14,0.08-0.26,0.19-0.36,0.33l-3.16,4.27l-2.3-2.8c-0.33-0.39-0.85-0.59-1.35-0.5
		// 	c-0.52,0.06-0.95,0.41-1.13,0.88l-2.04,4.96l-2.39-2.79c-0.15-0.16-0.31-0.3-0.52-0.38c-0.35,0.95-0.53,1.95-0.53,3
		// 	c0,0.24,0.01,0.45,0.03,0.68l2.74,3.2c0.32,0.4,0.84,0.57,1.33,0.5c0.52-0.1,0.94-0.41,1.12-0.89l2.02-4.92l1.95,2.35
		// 	c0.29,0.34,0.72,0.53,1.17,0.52c0.45-0.01,0.87-0.22,1.13-0.59l4.27-5.75c0.01-0.01,0.02-0.03,0.03-0.04
		// 	C208.73,196.4,208.06,195.71,207.28,195.15z"/>
		// <path fill="#FFFFFF" d="M202.1,217.37l0,4.74h-11.02v-5.76h-5.47v-14.41h1.3c0.02-1,0.14-2,0.32-2.93l-3.06,0
		// 	c-0.82,0-1.47,0.64-1.47,1.47l0,20.11c0,0.49,0.23,0.95,0.62,1.22l4.38,3c0.23,0.17,0.52,0.25,0.82,0.25h15.05
		// 	c0.8,0,1.47-0.64,1.47-1.46v-6.47c-0.95,0.19-1.9,0.27-2.86,0.27C202.14,217.37,202.12,217.37,202.1,217.37z"/>
	,'</g>'//end of id="AR-icon"

,'<g id="MR-icon">'// 2
		// ,'<path fill="#A5CBD9" d="M319.56,139.94c1.15,0,2.11-0.95,2.11-2.1c0-1.15-0.95-2.1-2.11-2.1c-1.15,0-2.1,0.95-2.1,2.11C317.47,139,318.41,139.94,319.56,139.94z"/>'
		// ,'<path fill="#A5CBD9" d="M303.24,134.52c1.16,0,2.09-0.96,2.09-2.12c0-1.16-0.93-2.09-2.09-2.09s-2.11,0.93-2.11,2.09C301.13,133.56,302.08,134.52,303.24,134.52z"/>'
		// ,'<path fill="#A5CBD9" d="M325.22,150.37c1.16,0,2.12-0.95,2.12-2.11c0-1.16-0.96-2.09-2.12-2.09s-2.09,0.93-2.09,2.09S324.06,150.37,325.22,150.37z"/>'
		// ,'<path fill="#A5CBD9" d="M310.64,145.87c1.16,0,2.11-0.96,2.11-2.12c0-1.16-0.96-2.09-2.11-2.09c-1.15,0-2.09,0.93-2.09,2.09C308.54,144.91,309.48,145.87,310.64,145.87z"/>'
		// ,'<path fill="#A5CBD9" d="M312,105.5c-20.79,0-37.64,16.85-37.64,37.64c0,20.77,16.85,37.62,37.64,37.62c20.79,0,37.64-16.85,37.64-37.62C349.64,122.35,332.79,105.5,312,105.5z M303.24,127.65c2.63,0,4.75,2.13,4.75,4.75c0,1.1-0.39,2.1-0.98,2.89l2.62,3.84c0.33-0.08,0.68-0.13,1.01-0.13c0.96,0,1.84,0.28,2.58,0.76l1.64-1.28c-0.04-0.21-0.06-0.43-0.06-0.65c0-2.61,2.15-4.75,4.76-4.75c2.62,0,4.75,2.14,4.75,4.75c0,1.02-0.32,2-0.88,2.76l1.54,2.93c0.08-0.01,0.18-0.02,0.25-0.02c2.63,0,4.75,2.13,4.75,4.75c0,2.63-2.13,4.75-4.75,4.75c-2.62,0-4.75-2.13-4.75-4.75c0-1.07,0.38-2.06,0.97-2.88l-1.47-2.81c-0.13,0.01-0.27,0.01-0.4,0.01c-0.93,0-1.8-0.29-2.54-0.74l-1.66,1.29	c0.02,0.19,0.03,0.41,0.03,0.6c0,2.63-2.13,4.75-4.75,4.75c-2.6,0-4.75-2.13-4.75-4.75c0-0.8,0.22-1.58,0.57-2.23l-3.01-4.38c-0.06,0-0.14,0.01-0.2,0.01c-2.62,0-4.75-2.13-4.75-4.75S300.62,127.65,303.24,127.65z M294.87,127.76	c0.91,0,1.64,0.72,1.64,1.62c0,0.91-0.73,1.64-1.64,1.64c-0.91,0-1.64-0.73-1.64-1.64C293.23,128.48,293.96,127.76,294.87,127.76z M294.87,133.09c0.91,0,1.64,0.72,1.64,1.63c0,0.91-0.73,1.64-1.64,1.64c-0.91,0-1.64-0.73-1.64-1.64	C293.23,133.81,293.96,133.09,294.87,133.09z M294.87,138.42c0.91,0,1.64,0.73,1.64,1.64c0,0.91-0.73,1.64-1.64,1.64c-0.91,0-1.64-0.73-1.64-1.64C293.23,139.15,293.96,138.42,294.87,138.42z M294.87,143.75c0.91,0,1.64,0.73,1.64,1.64	c0,0.91-0.73,1.64-1.64,1.64c-0.91,0-1.64-0.73-1.64-1.64C293.23,144.49,293.96,143.75,294.87,143.75z M294.87,149.09c0.91,0,1.64,0.73,1.64,1.64s-0.73,1.64-1.64,1.64c-0.91,0-1.64-0.73-1.64-1.64C293.23,149.83,293.96,149.09,294.87,149.09z M329.13,158.61h-34.26c-1.1,0-1.98-0.89-1.98-1.98c0-1.09,0.88-1.98,1.98-1.98h34.26c1.1,0,1.98,0.89,1.98,1.98C331.11,157.72,330.22,158.61,329.13,158.61z"/>'
		,'<path class="bottomiconplaceinhex" fill="#A5CBD9" d="M312,105.5c-20.79,0-37.64,16.85-37.64,37.64c0,20.77,16.85,37.62,37.64,37.62c20.79,0,37.64-16.85,37.64-37.62C349.64,122.35,332.79,105.5,312,105.5z"/>'



		// ,'<path fill="#FFFFFF" d="M329.13,154.65h-34.26c-1.1,0-1.98,0.89-1.98,1.98c0,1.09,0.89,1.98,1.98,1.98h34.26c1.1,0,1.98-0.89,1.98-1.98C331.11,155.54,330.22,154.65,329.13,154.65z"/>'
		// ,'<path fill="#FFFFFF" d="M303.24,137.16c0.06,0,0.14-0.01,0.2-0.01l3.01,4.38c-0.35,0.66-0.57,1.43-0.57,2.23c0,2.63,2.15,4.75,4.75,4.75c2.62,0,4.75-2.13,4.75-4.75c0-0.2-0.01-0.42-0.03-0.6l1.66-1.29c0.74,0.45,1.61,0.74,2.54,0.74c0.14,0,0.28,0,0.4-0.01l1.47,2.81c-0.59,0.81-0.97,1.81-0.97,2.88c0,2.63,2.13,4.75,4.75,4.75c2.63,0,4.75-2.13,4.75-4.75		c0-2.63-2.13-4.75-4.75-4.75c-0.08,0-0.18,0.01-0.25,0.02l-1.54-2.93c0.56-0.76,0.88-1.74,0.88-2.76c0-2.61-2.13-4.75-4.75-4.75c-2.61,0-4.76,2.14-4.76,4.75c0,0.22,0.02,0.43,0.06,0.65l-1.64,1.28c-0.74-0.48-1.63-0.76-2.58-0.76c-0.33,0-0.68,0.05-1.01,0.13l-2.62-3.84c0.59-0.79,0.98-1.79,0.98-2.89c0-2.63-2.13-4.75-4.75-4.75c-2.62,0-4.75,2.13-4.75,4.75S300.62,137.16,303.24,137.16zM325.22,146.17c1.16,0,2.12,0.93,2.12,2.09c0,1.16-0.96,2.11-2.12,2.11c-1.16,0-2.09-0.95-2.09-2.11S324.06,146.17,325.22,146.17z M319.56,135.74c1.15,0,2.11,0.95,2.11,2.1c0,1.15-0.95,2.1-2.11,2.1c-1.15,0-2.1-0.95-2.1-2.1C317.47,136.69,318.41,135.74,319.56,135.74z M310.64,141.66c1.16,0,2.11,0.93,2.11,2.09c0,1.16-0.96,2.12-2.11,2.12c-1.15,0-2.09-0.96-2.09-2.12C308.55,142.6,309.48,141.66,310.64,141.66z M303.24,130.32c1.16,0,2.09,0.93,2.09,2.09c0,1.16-0.93,2.12-2.09,2.12c-1.16,0-2.11-0.96-2.11-2.12C301.13,131.25,302.08,130.32,303.24,130.32z"/>'
		// ,'<path fill="#FFFFFF" d="M294.87,152.38c0.91,0,1.64-0.73,1.64-1.64s-0.73-1.64-1.64-1.64c-0.91,0-1.64,0.73-1.64,1.64C293.23,151.65,293.96,152.38,294.87,152.38z"/>'
	// 	<path fill="#FFFFFF" d="M294.87,147.04c0.91,0,1.64-0.73,1.64-1.64c0-0.91-0.73-1.64-1.64-1.64c-0.91,0-1.64,0.73-1.64,1.64
	// 		C293.23,146.31,293.96,147.04,294.87,147.04z"/>
	// 	<path fill="#FFFFFF" d="M294.87,141.7c0.91,0,1.64-0.73,1.64-1.64c0-0.91-0.73-1.64-1.64-1.64c-0.91,0-1.64,0.73-1.64,1.64
	// 		C293.23,140.96,293.96,141.7,294.87,141.7z"/>
	// 	<path fill="#FFFFFF" d="M294.87,136.36c0.91,0,1.64-0.73,1.64-1.64c0-0.91-0.73-1.63-1.64-1.63c-0.91,0-1.64,0.72-1.64,1.63
	// 		C293.23,135.63,293.96,136.36,294.87,136.36z"/>
	// 	<path fill="#FFFFFF" d="M294.87,131.02c0.91,0,1.64-0.73,1.64-1.64c0-0.9-0.73-1.62-1.64-1.62c-0.91,0-1.64,0.72-1.64,1.62
	// 		C293.23,130.29,293.96,131.02,294.87,131.02z"/>
,'</g>'//end of id="MR-icon"





,'<g id="SP-icon">' //3
		// ,'<path fill="#768CC1" d="M421.86,168.94c-20.77,0-37.63,16.85-37.63,37.62c0,20.79,16.86,37.64,37.63,37.64c20.79,0,37.64-16.85,37.64-37.64C459.5,185.79,442.65,168.94,421.86,168.94z M407.65,217.85c-2.14,0-3.89-1.75-3.89-3.89l0-18.43c0-2.14,1.75-3.89,3.89-3.89h26.28c2.14,0,3.89,1.75,3.89,3.89l0,16.15c-0.02,0-0.04,0-0.06,0c-0.07,0-0.11,0-0.17,0c-0.71-0.98-1.83-1.54-3.14-1.54c-0.11,0-0.22,0.01-0.35,0.01l0-14.62c0-0.09-0.07-0.18-0.15-0.18l-26.28,0c-0.09,0-0.18,0.09-0.18,0.18v18.43c0,0.09,0.09,0.18,0.18,0.18l12.18,0c0.02,0.19,0.05,0.36,0.08,0.47c0.17,1.16,0.38,2.25,0.63,3.24L407.65,217.85z M428.75,198.35l0,2.46h-2.46v-2.46L428.75,198.35z M421.48,200.81l0-2.46h2.46v2.46L421.48,200.81z M423.94,202.82l0,2.46l-2.46,0l0-2.46L423.94,202.82z M416.67,200.81l0-2.46h2.46l0,2.46H416.67zM419.12,202.82l0,2.46l-2.46,0v-2.46L419.12,202.82z M411.88,205.27l0-2.46l2.46,0l0,2.46L411.88,205.27z M414.34,207.28v2.46h-2.46v-2.46H414.34z M411.88,200.81l0-2.46l2.46,0l0,2.46L411.88,200.81z M439.07,222.01c-0.34,1.82-1.94,3.98-1.94,3.98L426.66,226c0,0-4.04-3.13-5.26-11.67c0,0-0.43-1.74,1.29-2.12c0.21-0.05,0.42-0.05,0.59-0.05c1.49,0,1.6,1.45,1.6,1.45l0.67,3.29l0-12.62c0,0,0-1.46,1.86-1.46c1.86,0,1.7,1.43,1.7,1.43l0,7.49c0.42-0.67,1.06-1,1.71-1c0.77,0,1.56,0.43,2.11,1.29c0.52-0.26,1.02-0.37,1.51-0.37c1.08,0,1.96,0.6,2.3,1.72c0.36-0.11,0.68-0.18,1.01-0.18c1.12,0,2.06,0.7,2.23,1.88C439.98,215.08,439.41,220.07,439.07,222.01z"/>'
		,'<path class="bottomiconplaceinhex" fill="#768CC1" d="M421.86,168.94c-20.77,0-37.63,16.85-37.63,37.62c0,20.79,16.86,37.64,37.63,37.64c20.79,0,37.64-16.85,37.64-37.64C459.5,185.79,442.65,168.94,421.86,168.94z"/>'




		// <path fill="#FFFFFF" d="M437.75,213.19c-0.33,0-0.66,0.07-1.01,0.18c-0.35-1.12-1.22-1.72-2.3-1.72c-0.49,0-0.99,0.11-1.51,0.37
		// 	c-0.55-0.86-1.34-1.29-2.11-1.29c-0.65,0-1.29,0.33-1.71,1l0-7.49c0,0,0.15-1.43-1.7-1.43c-1.85,0-1.86,1.46-1.86,1.46l0,12.62
		// 	l-0.67-3.29c0,0-0.11-1.45-1.6-1.45c-0.17,0-0.38,0-0.59,0.05c-1.72,0.38-1.29,2.12-1.29,2.12c1.23,8.54,5.26,11.67,5.26,11.67
		// 	l10.47-0.01c0,0,1.6-2.16,1.94-3.98c0.34-1.94,0.91-6.94,0.91-6.94C439.81,213.89,438.87,213.19,437.75,213.19z"/>
		// <path fill="#FFFFFF" d="M419.83,214.14l-12.18,0c-0.09,0-0.18-0.09-0.18-0.18v-18.43c0-0.09,0.09-0.18,0.18-0.18l26.28,0
		// 	c0.09,0,0.15,0.09,0.15,0.18l0,14.62c0.13-0.01,0.24-0.01,0.35-0.01c1.31,0,2.43,0.57,3.14,1.54c0.07,0,0.1,0,0.17,0
		// 	c0.02,0,0.04,0,0.06,0l0-16.15c0-2.14-1.75-3.89-3.89-3.89h-26.28c-2.14,0-3.89,1.75-3.89,3.89l0,18.43
		// 	c0,2.14,1.75,3.89,3.89,3.89l12.89,0c-0.25-0.98-0.46-2.07-0.63-3.24C419.88,214.5,419.85,214.33,419.83,214.14z"/>
		// <rect x="411.88" y="198.35" fill="#FFFFFF" width="2.46" height="2.46"/>
		// <rect x="416.67" y="198.35" fill="#FFFFFF" width="2.46" height="2.46"/>
		// <rect x="421.48" y="198.35" fill="#FFFFFF" width="2.46" height="2.46"/>
		// <rect x="426.29" y="198.35" fill="#FFFFFF" width="2.46" height="2.46"/>
		// <rect x="411.88" y="202.82" fill="#FFFFFF" width="2.46" height="2.46"/>
		// <rect x="416.67" y="202.82" fill="#FFFFFF" width="2.46" height="2.46"/>
		// <rect x="421.48" y="202.82" fill="#FFFFFF" width="2.46" height="2.46"/>
		// <rect x="411.88" y="207.28" fill="#FFFFFF" width="2.46" height="2.46"/>
	,'</g>'//end of id="SP-icon"


,'<g id="PP-icon">'//V 4
// ,		'<path fill="#9ACFE7" d="M421.86,295.78c-20.77,0-37.62,16.87-37.62,37.66s16.86,37.61,37.62,37.61	c20.79,0,37.64-16.82,37.64-37.62S442.65,295.78,421.86,295.78z M434.69,328.8c0,2.71,0,11.69,0,14.46c0,2.25-1.67,4.25-3.91,4.66c-0.06,0.01-0.14,0.01-0.2,0.02l-19.6,0c-0.26-0.03-0.54-0.1-0.82-0.21c-2-0.66-3.31-2.43-3.31-4.55c0-4.06,0-14.33,0-18.4c0-2.56,2.11-4.68,4.69-4.68c3.31,0,12.85,0,16.17,0h0.37c-0.47,0.45-0.88,0.9-1.3,1.32c-0.62,0.62-1.25,1.26-1.9,1.88c-0.09,0.11-0.26,0.13-0.4,0.13c-2.14,0.01-10.51,0.01-12.64,0.01c-0.37,0-0.73,0.06-1.06,0.28c-0.36,0.28-0.59,0.61-0.62,1.1c0,0.07,0,0.2,0,0.33c0,3.81,0,13.88,0,17.74c-0.01,0.97,0.65,1.79,1.75,1.78c3.84-0.04,13.89-0.04,17.71,0c1.14,0.01,1.74-0.79,1.73-1.74c-0.02-1.59,0-9.39,0-10.93c0-0.2,0.03-0.33,0.17-0.49c1.02-0.95,2.02-1.97,3.03-2.93c0.04-0.04,0.08-0.07,0.15-0.16V328.8z M435.38,325.46c-2.52,2.52-9.74,9.63-12.27,12.1c-0.18,0.2-0.42,0.32-0.64,0.4c-1.77,0.52-3.52,1.03-5.29,1.58c-0.11,0.03-0.25,0.03-0.31,0.02c-0.54,0-0.91-0.41-0.77-0.86c0.55-1.89,1.1-3.74,1.65-5.62c0.05-0.14,0.17-0.34,0.3-0.43c2.53-2.57,9.79-9.7,12.32-12.21c0.2-0.17,0.33-0.17,0.52,0c1.49,1.52,3.01,2.99,4.5,4.5C435.6,325.17,435.57,325.28,435.38,325.46z M438.82,321.71c-0.43,0.47-0.85,0.87-1.29,1.32c-0.14,0.13-0.23,0.12-0.35-0.03c-0.61-0.62-1.22-1.24-1.82-1.85c-0.85-0.85-1.71-1.7-2.57-2.54c-0.15-0.14-0.16-0.28,0-0.43c0.42-0.41,0.84-0.79,1.23-1.21c0.33-0.33,0.71-0.45,1.19-0.45c0.46-0.02,0.86,0.16,1.18,0.5c0.81,0.77,1.59,1.54,2.37,2.38C439.41,320.07,439.44,320.99,438.82,321.71z"/>'
,		'<path fill="#9ACFE7" class="bottomiconplaceinhex" d="M421.86,295.78c-20.77,0-37.62,16.87-37.62,37.66s16.86,37.61,37.62,37.61	c20.79,0,37.64-16.82,37.64-37.62S442.65,295.78,421.86,295.78z "/>'
		// <path fill="#FFFFFF" d="M431.51,331.51c-0.14,0.16-0.17,0.28-0.17,0.49c0,1.54-0.02,9.34,0,10.93c0.01,0.95-0.58,1.75-1.73,1.74
		// 	c-3.82-0.04-13.86-0.04-17.71,0c-1.1,0.01-1.76-0.8-1.75-1.78c0.01-3.87,0-13.93,0-17.74c0-0.13,0-0.26,0-0.33
		// 	c0.03-0.49,0.26-0.82,0.62-1.1c0.32-0.21,0.69-0.28,1.06-0.28c2.14,0,10.51,0,12.64-0.01c0.13,0,0.31-0.02,0.4-0.13
		// 	c0.65-0.62,1.28-1.27,1.9-1.88c0.42-0.41,0.83-0.87,1.3-1.32h-0.37c-3.31,0-12.86,0-16.17,0c-2.57,0-4.69,2.12-4.69,4.68
		// 	c0,4.07,0,14.33,0,18.4c0,2.12,1.31,3.88,3.31,4.55c0.28,0.1,0.55,0.18,0.82,0.21l19.6,0c0.06-0.01,0.14-0.01,0.2-0.02
		// 	c2.24-0.42,3.91-2.41,3.91-4.66c0-2.77,0-11.74,0-14.46v-0.37c-0.07,0.08-0.11,0.12-0.15,0.16
		// 	C433.53,329.55,432.53,330.56,431.51,331.51z"/>
		// <path fill="#FFFFFF" d="M430.89,320.44c-0.19-0.17-0.32-0.17-0.52,0c-2.53,2.51-9.79,9.64-12.32,12.21
		// 	c-0.12,0.1-0.24,0.29-0.3,0.43c-0.55,1.88-1.1,3.73-1.65,5.62c-0.14,0.45,0.23,0.86,0.77,0.86c0.06,0,0.2,0,0.31-0.02
		// 	c1.77-0.55,3.52-1.05,5.29-1.58c0.23-0.08,0.46-0.2,0.64-0.4c2.52-2.47,9.75-9.59,12.27-12.1c0.19-0.18,0.22-0.29,0.01-0.51
		// 	C433.9,323.44,432.38,321.97,430.89,320.44z"/>
		// <path fill="#FFFFFF" d="M436.39,317.02c-0.31-0.34-0.72-0.52-1.18-0.5c-0.48,0-0.86,0.12-1.19,0.45c-0.4,0.42-0.81,0.8-1.23,1.21
		// 	c-0.16,0.15-0.16,0.28,0,0.43c0.86,0.84,1.72,1.69,2.57,2.54c0.6,0.62,1.21,1.23,1.82,1.85c0.12,0.15,0.22,0.16,0.35,0.03
		// 	c0.44-0.45,0.87-0.85,1.29-1.32c0.62-0.72,0.59-1.64-0.07-2.3C437.97,318.56,437.2,317.79,436.39,317.02z"/>
,'</g>'//end of id="PP-icon"

,'<g id="RS-icon">'
		// ,'<path fill="#27438F" d="M312,359.21c-20.79,0-37.64,16.88-37.64,37.67c0,20.77,16.85,37.61,37.64,37.61c20.79,0,37.64-16.85,37.64-37.61C349.64,376.09,332.79,359.21,312,359.21z M327.57,401.53c-0.08,1.42-0.82,2.76-2.1,3.63c-3.51,2.46-7.27,4.44-11.15,5.86c-0.93,0.54-1.91,0.79-2.97,0.79c-1.02,0-2.15-0.24-3.31-0.77c-0.06-0.01-0.13-0.02-0.17-0.06c-1.44,0.94-3.64,0.87-4.33-1.31c-1.55,0.57-3.46-0.92-3.57-2.33c-1.78,0.75-3.61-0.91-3.74-2.42c-2.58,0.08-3.9-3.15-1.74-5.64l-4.89-5.24c-0.44-0.5-0.45-1.2-0.02-1.71l7.76-8.69c0.33-0.41,0.9-0.54,1.37-0.34l9.33,3.62l2.33-0.66c1.84-0.29,3.63-0.19,5.35,0.36l4.2,1.2l6.4-3.93c2.47,4.01,5.33,7.79,8.41,11.37l-7.26,5.18C327.55,400.8,327.59,401.19,327.57,401.53z"/>'
		,'<path class="bottomiconplaceinhex" fill="#27438F" d="M312,359.21c-20.79,0-37.64,16.88-37.64,37.67c0,20.77,16.85,37.61,37.64,37.61c20.79,0,37.64-16.85,37.64-37.61C349.64,376.09,332.79,359.21,312,359.21z"/>'



		// ,'<path fill="#27438F" d="M324.46,400.07c-3.88-3.42-7.17-5.94-9.83-7.6l-1.74-0.93l-3.05,0.72c-3.21,0.48-6.31-2.51-5.3-4.04l-5.92-2.31l-6.43,7.23l3.75,4.03c1.44-1.73,3.27-0.52,3.57,0.97c2.21-1.24,4.14,0.74,3.71,2.79c1.64-0.19,3.38,1.75,2.75,3.49c2.56,0.97,3.47,2.84,3.23,4.39c1.49,0.6,2.73,0.63,3.82,0.09l-4-3.78l1.28-1.35l4.63,4.34c0.92-0.37,1.85-0.81,2.77-1.23l-5.47-5.07l1.26-1.36l5.97,5.51c0.85-0.45,1.7-0.98,2.55-1.5l-6.73-5.77l1.23-1.41l7.1,6.13c0.14-0.12,0.3-0.19,0.45-0.32c0.63-0.45,1-1.03,1.03-1.67c0.03-0.52-0.19-1.04-0.59-1.38C324.47,400.07,324.47,400.07,324.46,400.07z"/>'
		// <path fill="#FFFFFF" d="M326.33,383.86l-6.4,3.93l-4.2-1.2c-1.72-0.55-3.51-0.64-5.35-0.36l-2.33,0.66l-9.33-3.62
		// 	c-0.47-0.2-1.04-0.07-1.37,0.34l-7.76,8.69c-0.43,0.51-0.42,1.21,0.02,1.71l4.89,5.24c-2.16,2.48-0.85,5.72,1.74,5.64
		// 	c0.13,1.51,1.96,3.18,3.74,2.42c0.11,1.41,2.02,2.9,3.57,2.33c0.69,2.18,2.89,2.25,4.33,1.31c0.04,0.04,0.12,0.05,0.17,0.06
		// 	c1.16,0.54,2.28,0.77,3.31,0.77c1.06,0,2.04-0.24,2.97-0.79c3.87-1.42,7.63-3.39,11.15-5.86c1.28-0.87,2.02-2.21,2.1-3.63
		// 	c0.02-0.34-0.02-0.73-0.09-1.11l7.26-5.18C331.66,391.65,328.8,387.87,326.33,383.86z M324.04,403.11
		// 	c-0.15,0.13-0.3,0.19-0.45,0.32l-7.1-6.13l-1.23,1.41l6.73,5.77c-0.85,0.52-1.7,1.05-2.55,1.5l-5.97-5.51l-1.26,1.36l5.47,5.07
		// 	c-0.92,0.42-1.85,0.86-2.77,1.23l-4.63-4.34l-1.28,1.35l4,3.78c-1.08,0.53-2.33,0.5-3.82-0.09c0.25-1.55-0.66-3.42-3.23-4.39
		// 	c0.63-1.74-1.11-3.68-2.75-3.49c0.43-2.05-1.5-4.03-3.71-2.79c-0.3-1.49-2.13-2.7-3.57-0.97l-3.75-4.03l6.43-7.23l5.92,2.31
		// 	c-1.01,1.53,2.1,4.52,5.3,4.04l3.05-0.72l1.74,0.93c2.66,1.65,5.94,4.18,9.83,7.6c0,0,0.01,0,0.02,0
		// 	c0.41,0.33,0.62,0.85,0.59,1.38C325.04,402.09,324.68,402.67,324.04,403.11z"/>
	,'</g>'//end of id="RS-icon"
,'<g id="PS-icon">'
		 ,'<path class="bottomiconplaceinhex" fill="#83378C" d="M202.14,295.78c-20.79,0-37.64,16.87-37.64,37.66s16.85,37.61,37.64,37.62c20.77,0,37.62-16.82,37.62-37.62C239.76,312.65,222.91,295.78,202.14,295.78z"/>'

		// ,'<path fill="#83378C" d="M201.41,335.25c-0.97,0-1.73,0.76-1.73,1.73c0,0.92,0.76,1.73,1.73,1.73c0.95,0,1.73-0.81,1.73-1.73C203.14,336.01,202.35,335.25,201.41,335.25z"/>'
	// 	,'<path fill="#83378C" d="M207.18,335.25c-0.97,0-1.73,0.76-1.73,1.73c0,0.92,0.76,1.73,1.73,1.73c0.94,0,1.73-0.81,1.73-1.73	C208.91,336.01,208.12,335.25,207.18,335.25z"/>'
		 // ,'<path fill="#83378C" d="M202.14,295.78c-20.79,0-37.64,16.87-37.64,37.66s16.85,37.61,37.64,37.62c20.77,0,37.62-16.82,37.62-37.62C239.76,312.65,222.91,295.78,202.14,295.78z M220.89,343.68c0,2.54-2.07,4.61-4.61,4.61l-16.59,0c-2.53,3.14-5.34,4.74-8.43,4.95c1.4-2.71,2.26-5.94,2.37-10.04v-0.28l-4.14,0c-3.36,0-6.09-2.76-6.09-6.1l0-13.2c0-3.35,2.73-6.1,6.09-6.1l18.15,0c3.36,0,6.09,2.75,6.09,6.1v2.27l2.55,0c2.53,0,4.61,2.07,4.61,4.61L220.89,343.68z"/>'
		 // ,'<path fill="#83378C" d="M207.64,320.55h-18.15c-1.72,0-3.1,1.38-3.1,3.08l0,13.2c0,1.7,1.38,3.08,3.1,3.08l4.15,0l0-9.4c0-2.54,2.05-4.61,4.61-4.61l12.49,0v-2.27C210.73,321.92,209.35,320.55,207.64,320.55z"/>'
		 // ,'<path fill="#83378C" d="M212.95,335.25c-0.97,0-1.73,0.76-1.73,1.73c0,0.92,0.76,1.73,1.73,1.73c0.95,0,1.73-0.81,1.73-1.73C214.68,336.01,213.89,335.25,212.95,335.25z"/>'
	// ,'<path fill="#FFFFFF" d="M216.28,325.89l-2.55,0v-2.27c0-3.35-2.73-6.1-6.09-6.1l-18.15,0c-3.36,0-6.09,2.75-6.09,6.1l0,13.2c0,3.34,2.73,6.1,6.09,6.1l4.14,0v0.28c-0.11,4.1-0.98,7.33-2.37,10.04c3.09-0.21,5.9-1.81,8.43-4.95l16.59,0c2.53,0,4.61-2.07,4.61-4.61l0-13.19C220.89,327.96,218.81,325.89,216.28,325.89z M201.41,338.71c-0.97,0-1.73-0.81-1.73-1.73c0-0.97,0.76-1.73,1.73-1.73c0.95,0,1.73,0.76,1.73,1.73C203.14,337.9,202.35,338.71,201.41,338.71z M207.18,338.71c-0.97,0-1.73-0.81-1.73-1.73c0-0.97,0.76-1.73,1.73-1.73c0.95,0,1.73,0.76,1.73,1.73C208.91,337.9,208.12,338.71,207.18,338.71z M210.73,325.89l-12.49,0c-2.56,0-4.61,2.07-4.61,4.61l0,9.4l-4.15,0c-1.72,0-3.1-1.38-3.1-3.08l0-13.2c0-1.7,1.38-3.08,3.1-3.08h18.15c1.71,0,3.09,1.38,3.09,3.08V325.89z M212.95,338.71c-0.97,0-1.73-0.81-1.73-1.73c0-0.97,0.76-1.73,1.73-1.73c0.95,0,1.73,0.76,1.73,1.73C214.68,337.9,213.89,338.71,212.95,338.71z"/>'
	,'</g>'//end of id="PS-icon"


,'<text id="MR-text" transform="matrix(1 0 0 1 212.311 45.562)" fill="#FFFFFF" font-family="Corbert-ExtraBold" font-size="19">MINIMALIZACE RIZIK</text>'
,'<text id="PP-text" transform="matrix(0.5 -0.866 0.866 0.5 465.6997 481.0806)" fill="#FFFFFF" font-family="Corbert-ExtraBold" font-size="19">POJISTNÝ PROGRAM</text>'
,'<text id="SP-text" transform="matrix(0.5 0.866 -0.866 0.5 459.1143 75.1631)" fill="#FFFFFF" font-family="Corbert-ExtraBold" font-size="19">SPRÁVA POJIŠTĚNÍ</text>'
,'<text id="RS-text" transform="matrix(1 0 0 1 244.52 509.4917)" fill="#FFFFFF" font-family="Corbert-ExtraBold" font-size="19">ŘEŠENÍ ŠKOD</text>'
,'<text id="PS-text" transform="matrix(0.5 0.866 -0.866 0.5 46.4648 283.4165)" fill="#FFFFFF" font-family="Corbert-ExtraBold" font-size="19">PORADENSTVÍ A SLUŽBY</text>'
,'<text id="AR-text" transform="matrix(0.5 -0.866 0.866 0.5 78.7793 222.6226)" fill="#FFFFFF" font-family="Corbert-ExtraBold" font-size="19">ANALÝZA RIZIK</text>'
]
,
bottomBar = [
	'<path fill="#F1F1F1" fill-rule="nonzero" d="M614 694l-597 0c-28,0 -50,-23 -50,-50l0 -4c0,-28 22,-50 50,-50l597 0c28,0 50,22 50,50l0 4c0,27 -22,50 -50,50z"/>'
// //1
,'<path id="0" class="bottomiconplace" fill="#47979E" fill-rule="nonzero" d="M56 642c0,20 -17,37 -37,37 -21,0 -38,-17 -38,-37 0,-21 17,-38 38,-38 20,0 37,17 37,38z"/>'
// ,'<path fill="white" fill-rule="nonzero" d="M37 652l-7 -7c0,0 0,0 0,0 2,-2 3,-5 3,-8 0,-7 -7,-14 -14,-14 -8,0 -14,7 -14,14 0,8 6,14 14,14 2,0 5,-1 7,-2 0,0 0,0 0,0l7 7c1,1 3,1 4,0 1,-1 1,-3 0,-4zm-18 -5l0 0c-6,0 -10,-4 -10,-10 0,-5 4,-9 10,-9 5,0 9,4 9,9 0,6 -4,10 -9,10zM24 630c0,0 -1,1 -1,1l-3 4 -2 -3c0,0 -1,0 -1,0 -1,0 -1,0 -2,1l-2 4 -2 -2c0,0 0,-1 0,-1 -1,1 -1,2 -1,3 0,1 0,1 0,1l3 3c0,1 1,1 1,1 1,0 1,-1 1,-1l2 -5 2 2c0,1 1,1 1,1 1,0 1,0 1,-1l5 -6c0,0 0,0 0,0 -1,0 -2,-1 -2,-2zM19 652l0 5 -11 0 0 -6 -6 0 0 -14 2 0c0,-1 0,-2 0,-3l-3 0c-1,0 -2,1 -2,2l0 20c0,0 1,1 1,1l4 3c1,0 1,0 1,0l15 0c1,0 1,-1 1,-1l0 -7c0,0 -1,0 -2,0 0,0 0,0 0,0z"/>'
// //2
,'<path id="1" class="bottomiconplace" fill="#A4CBDA" fill-rule="nonzero" d="M175 642c0,20 -17,37 -38,37 -20,0 -37,-17 -37,-37 0,-21 17,-38 37,-38 21,0 38,17 38,38z"/>'
// ,'<path fill="white" fill-rule="nonzero" d="M154 653l-34 0c-1,0 -2,1 -2,2 0,1 1,2 2,2l34 0c1,0 2,-1 2,-2 0,-1 -1,-2 -2,-2zM129 636c0,0 0,0 0,0l3 4c-1,1 -1,2 -1,2 0,3 2,5 5,5 3,0 5,-2 5,-5 0,0 0,0 0,0l1 -2c1,1 2,1 3,1 0,0 0,0 0,0l2 3c-1,1 -1,2 -1,3 0,2 2,4 4,4 3,0 5,-2 5,-4 0,-3 -2,-5 -5,-5 0,0 0,0 0,0l-1 -3c0,-1 1,-2 1,-3 0,-2 -3,-4 -5,-4 -3,0 -5,2 -5,4 0,1 0,1 0,1l-1 1c-1,0 -2,0 -3,0 0,0 -1,0 -1,0l-3 -4c1,-1 1,-2 1,-3 0,-3 -2,-5 -4,-5 -3,0 -5,2 -5,5 0,3 2,5 5,5zm21 9l0 0c2,0 3,1 3,2 0,1 -1,2 -3,2 -1,0 -2,-1 -2,-2 0,-1 1,-2 2,-2zm-5 -11l0 0c1,0 2,1 2,2 0,2 -1,3 -2,3 -1,0 -2,-1 -2,-3 0,-1 1,-2 2,-2zm-9 6l0 0c1,0 2,1 2,2 0,1 -1,2 -2,2 -1,0 -2,-1 -2,-2 0,-1 1,-2 2,-2zm-7 -11l0 0c1,0 2,1 2,2 0,1 -1,2 -2,2 -1,0 -2,-1 -2,-2 0,-1 1,-2 2,-2zM120 651c1,0 2,-1 2,-2 0,-1 -1,-1 -2,-1 -1,0 -1,0 -1,1 0,1 0,2 1,2zM120 646c1,0 2,-1 2,-2 0,-1 -1,-2 -2,-2 -1,0 -1,1 -1,2 0,1 0,2 1,2zM120 640c1,0 2,0 2,-1 0,-1 -1,-2 -2,-2 -1,0 -1,1 -1,2 0,1 0,1 1,1zM120 635c1,0 2,-1 2,-2 0,-1 -1,-1 -2,-1 -1,0 -1,0 -1,1 0,1 0,2 1,2zM120 630c1,0 2,-1 2,-2 0,-1 -1,-2 -2,-2 -1,0 -1,1 -1,2 0,1 0,2 1,2z"/>'
// //3
,'<path id="2" class="bottomiconplace" fill="#768BC0" fill-rule="nonzero" d="M293 642c0,20 -16,37 -37,37 -21,0 -37,-17 -37,-37 0,-21 16,-38 37,-38 21,0 37,17 37,38z"/>'
// ,'<path fill="white" fill-rule="nonzero" d="M272 648c-1,0 -1,0 -1,0 -1,-1 -1,-1 -3,-1 0,0 0,0 -1,0 -1,-1 -1,-1 -2,-1 -1,0 -1,0 -2,1l0 -8c0,0 0,-1 -1,-1 -2,0 -2,1 -2,1l0 13 -1 -3c0,0 0,-2 -2,-2 0,0 0,0 0,0 -2,1 -1,2 -1,2 1,9 5,12 5,12l10 0c0,0 2,-2 2,-4 0,-2 1,-7 1,-7 0,-1 -1,-2 -2,-2zM254 649l-12 0c0,0 0,0 0,0l0 -18c0,0 0,0 0,0l26 0c0,0 0,0 0,0l0 14c0,0 0,0 0,0 2,0 3,1 4,2 0,0 0,0 0,0 0,0 0,0 0,0l0 -16c0,-2 -2,-4 -4,-4l-26 0c-2,0 -4,2 -4,4l0 18c0,2 2,4 4,4l13 0c-1,-1 -1,-2 -1,-3 0,0 0,-1 0,-1z"/>'
// ,'<polygon fill="white" fill-rule="nonzero" points="249,634 246,634 246,636 249,636 "/>'
// ,'<polygon fill="white" fill-rule="nonzero" points="253,634 251,634 251,636 253,636 "/>'
// ,'<polygon fill="white" fill-rule="nonzero" points="258,634 256,634 256,636 258,636 "/>'
// ,'<polygon fill="white" fill-rule="nonzero" points="263,636 263,634 260,634 260,636 "/>'
// ,'<polygon fill="white" fill-rule="nonzero" points="249,638 246,638 246,640 249,640 "/>'
// ,'<polygon fill="white" fill-rule="nonzero" points="251,640 253,640 253,638 251,638 "/>'
// ,'<polygon fill="white" fill-rule="nonzero" points="256,640 258,640 258,638 256,638 "/>'
// ,'<polygon fill="white" fill-rule="nonzero" points="246,645 249,645 249,642 246,642 "/>'
// //4
,'<path id="3" class="bottomiconplace" fill="#99CFE7" fill-rule="nonzero" d="M412 642c0,20 -17,37 -37,37 -21,0 -38,-17 -38,-37 0,-21 17,-38 38,-38 20,0 37,17 37,38z"/>'
// ,'<path fill="white" fill-rule="nonzero" d="M384 640c0,0 0,0 0,0 0,2 0,10 0,11 0,1 0,2 -2,2 -3,0 -13,0 -17,0 -1,0 -2,-1 -2,-2 0,-4 0,-14 0,-18 0,0 0,0 0,0 0,0 0,-1 1,-1 0,0 0,0 1,0 2,0 10,0 12,0 0,0 1,0 1,0 0,-1 1,-2 2,-2 0,-1 0,-1 1,-1 0,0 0,0 0,0 -4,0 -13,0 -16,0 -3,0 -5,2 -5,4 0,4 0,14 0,18 0,2 1,4 3,5 0,0 1,0 1,0 4,0 15,0 19,0 0,0 1,0 1,0 2,0 3,-2 3,-5 0,-2 0,-11 0,-14 0,0 0,0 0,0 0,0 0,0 0,0 -1,1 -2,2 -3,3zM384 629c-1,0 -1,0 -1,0 -2,2 -10,9 -12,12 0,0 0,0 0,0 -1,2 -1,4 -2,6 0,0 0,1 1,1 0,0 0,0 0,0 2,-1 4,-1 5,-2 1,0 1,0 1,0 2,-3 10,-10 12,-12 0,0 0,0 0,-1 -1,-1 -3,-3 -4,-4zM391 628c0,-1 -1,-2 -2,-3 0,0 -1,0 -1,0 -1,0 -1,0 -1,0 -1,1 -1,1 -1,2 -1,0 -1,0 0,0 0,1 1,2 2,3 1,0 1,1 2,1 0,1 0,1 0,0 1,0 1,0 2,-1 0,-1 0,-2 -1,-2z"/>'
// //5
,'<path id="4" class="bottomiconplace" fill="#27428E" fill-rule="nonzero" d="M531 642c0,20 -17,37 -38,37 -20,0 -37,-17 -37,-37 0,-21 17,-38 37,-38 21,0 38,17 38,38z"/>'
// ,'<path fill="white" fill-rule="nonzero" d="M516 640c-3,-3 -6,-7 -8,-11l-7 4 -4 -1c-2,-1 -3,-1 -5,-1l-2 1 -10 -4c0,0 -1,0 -1,1l-8 8c0,1 0,1 0,2l5 5c-2,3 -1,6 2,6 0,1 2,3 4,2 0,1 2,3 3,2 1,3 3,3 4,2 0,0 0,0 1,0 1,0 2,1 3,1 1,0 2,-1 3,-1 4,-2 7,-4 11,-6 1,-1 2,-2 2,-4 0,0 0,0 0,-1l7 -5zm-11 8l0 0c0,0 0,0 0,0l-7 -6 -1 2 6 5c0,1 -1,1 -2,2l-6 -6 -1 2 5 5c-1,0 -2,1 -3,1l-4 -4 -2 1 4 4c-1,0 -2,0 -3,0 0,-2 -1,-4 -4,-5 1,-1 -1,-3 -2,-3 0,-2 -2,-4 -4,-3 0,-1 -2,-3 -3,-1l-4 -4 6 -7 6 2c-1,2 2,5 5,4l3 -1 2 1c3,2 6,5 10,8 0,0 0,0 0,0 0,0 0,1 0,1 0,1 0,1 -1,2z"/>'
// //6
,'<path id="5" class="bottomiconplace" fill="#81368A" fill-rule="nonzero" d="M649 642c0,20 -16,37 -37,37 -20,0 -37,-17 -37,-37 0,-21 17,-38 37,-38 21,0 37,17 37,38z"/>'
// ,'<path fill="white" fill-rule="nonzero" d="M626 634l-2 0 0 -2c0,-3 -3,-6 -6,-6l-18 0c-4,0 -6,3 -6,6l0 13c0,3 2,6 6,6l4 0 0 0c0,4 -1,8 -3,10 3,0 6,-1 9,-5l16 0c3,0 5,-2 5,-4l0 -13c0,-3 -2,-5 -5,-5zm-15 13l0 0c-1,0 -1,-1 -1,-2 0,-1 0,-2 1,-2 1,0 2,1 2,2 0,1 -1,2 -2,2zm6 0l0 0c-1,0 -2,-1 -2,-2 0,-1 1,-2 2,-2 1,0 2,1 2,2 0,1 -1,2 -2,2zm4 -13l0 0 -13 0c-2,0 -4,2 -4,5l0 9 -4 0c-2,0 -3,-1 -3,-3l0 -13c0,-2 1,-3 3,-3l18 0c1,0 3,1 3,3l0 2zm2 13l0 0c-1,0 -2,-1 -2,-2 0,-1 1,-2 2,-2 1,0 2,1 2,2 0,1 -1,2 -2,2z"/>'

// '<path fill="#47979E" fill-rule="nonzero" fill-opacity="0.5" d="M150 542l-147 -256c-4,-6 -4,-14 0,-20l147 -256c4,-6 11,-10 18,-10l295 0c7,0 14,4 17,10l148 256c4,6 4,14 0,20l-148 256c-3,6 -10,10 -17,10l-295 0c-7,0 -14,-4 -18,-10z"/>'







//   <path fill="none" fill-rule="nonzero" fill-opacity="0.250980" stroke="white" stroke-width="2.02954" stroke-opacity="0.250980" d="M386 103c0,35 -28,63 -63,63 -34,0 -62,-28 -62,-63 0,-34 28,-62 62,-62 35,0 63,28 63,62"/>
//   <path fill="white" fill-rule="nonzero" d="M354 120l-11 -11c0,0 0,0 0,0 2,-4 4,-8 4,-13 0,-13 -11,-24 -24,-24 -12,0 -23,11 -23,24 0,13 11,23 23,23 5,0 9,-1 13,-4 0,1 0,1 0,1l12 11c1,2 4,2 6,0 2,-2 2,-5 0,-7zm-31 -8l0 0c-9,0 -16,-7 -16,-16 0,-9 7,-17 16,-17 10,0 17,8 17,17 0,9 -7,16 -17,16z"/>
//   <path fill="white" fill-rule="nonzero" d="M332 84c0,0 0,1 -1,1l-5 7 -4 -5c0,0 -1,-1 -2,-1 -1,0 -2,1 -2,2l-3 8 -4 -5c0,0 -1,0 -1,0 -1,1 -1,3 -1,5 0,0 0,1 0,1l5 5c0,1 1,1 2,1 1,0 1,-1 2,-1l3 -9 3 4c1,1 2,1 2,1 1,0 2,0 2,-1l7 -9c0,0 0,0 0,0 -1,-2 -2,-3 -3,-4z"/>
//   <path fill="white" fill-rule="nonzero" d="M323 121l0 8 -18 0 0 -9 -9 0 0 -24 2 0c0,-2 0,-4 1,-5l-6 0c-1,0 -2,1 -2,2l0 34c0,0 0,1 1,2l7 5c1,0 1,0 2,0l25 0c1,0 2,-1 2,-2l0 -11c-1,0 -3,0 -5,0 0,0 0,0 0,0z"/>
//   <g transform="matrix(1 0 0 1 5.40098 -171.215)">
//    <text x="199" y="402"  fill="white" font-weight="normal" font-size="30.4411px" font-family="Arial">ANALГќZA RIZIK</text>
//   </g>
//   <text x="152" y="274"  fill="white" font-weight="normal" font-size="16.2352px" font-family="Arial">PЕ™i tvorbД› pojistnГ©ho programu zohledЕ€ujeme </text>
//   <text x="146" y="303"  fill="white" font-weight="normal" font-size="16.2352px" font-family="Arial">individuГЎlnГ­ potЕ™eby a poЕѕadavky klienta v ГєzkГ© </text>
//   <text x="148" y="333"  fill="white" font-weight="normal" font-size="16.2352px" font-family="Arial">nГЎvaznosti na skuteДЌnosti, kterГ© byly zjiЕЎtД›ny v </text>
//   <text x="143" y="362"  fill="white" font-weight="normal" font-size="16.2352px" font-family="Arial">analГЅze rizik. CГ­lem je kvalitnГ­ rozsah pojistnГ©ho </text>
//   <text x="139" y="392"  fill="white" font-weight="normal" font-size="16.2352px" font-family="Arial">krytГ­, sprГЎvnГ© nastavenГ­ limitЕЇ plnД›nГ­ a pojistnГЅch </text>
//   <text x="156" y="421"  fill="white" font-weight="normal" font-size="16.2352px" font-family="Arial">ДЌГЎstek, pЕ™Г­padnД› vyjednГЎnГ­ nadstandardnГ­ch </text>
//   <text x="146" y="450"  fill="white" font-weight="normal" font-size="16.2352px" font-family="Arial">ujednГЎnГ­ s pojiЕЎЕҐovnami. Trvale takГ© sledujeme </text>
//   <text x="159" y="480"  fill="white" font-weight="normal" font-size="16.2352px" font-family="Arial">zmД›ny na pojistnГ©m trhu a aplikujeme je do </text>
//   <text x="174" y="509"  fill="white" font-weight="normal" font-size="16.2352px" font-family="Arial">stГЎvajГ­cГ­ch pojistnГЅch programЕЇ klientЕЇ. </text>
//   <polyline fill="none" fill-rule="nonzero" stroke="white" stroke-width="2.02954" points="575,239 597,275 575,313 "/>
//   <polyline fill="none" fill-rule="nonzero" stroke="white" stroke-width="2.02954" points="51,313 30,277 51,239 "/>
//   <polygon fill="white" fill-rule="nonzero" points="452,28 444,21 449,16 456,24 464,16 468,21 461,28 468,36 464,41 456,33 449,41 444,36 "/>



]  