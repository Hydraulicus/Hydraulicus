var 
getallcabinetdata = //data for cabinet 	popup
{"code":200,"status":"ok","results":{"cabinetTitle":"News","cabinetDescription":"We will add a description here for the main opening screen","items":[{"id":"6","tab_text":"Jobs","title":"Squirrel Jobs","subtitle":"Web App","description":"will add details here blah blah blah will add details here blah blah blah will add details here blah blah blah","image_url":"http://www.graphicsfuel.com/wp-content/uploads/2016/01/harcover-book-mockup.jpg","add_date":"2016-06-14 11:16:39"},{"id":"5","tab_text":"DA","title":"Digital Anarchy","subtitle":"E-Commerce Platform","description":"will add details here blah blah blah will add details here blah blah blah will add details here blah blah blah","image_url":"http://www.graphicsfuel.com/wp-content/uploads/2016/01/standing-business-cards-mockup.jpg","add_date":"2016-06-14 11:16:27"},{"id":"4","tab_text":"Inflo","title":"Inflo.IO","subtitle":"Design Services","description":"will add details here blah blah blah will add details here blah blah blah will add details here blah blah blah","image_url":"https://www.mockupworld.co/wp-content/uploads/edd/2015/09/Free-Macbook-Pro-PSD-Mockup.jpg","add_date":"2016-06-14 11:16:16"},{"id":"3","tab_text":"Design","title":"Design","subtitle":"Services ","description":"will add details here blah blah blah will add details here blah blah blah will add details here blah blah blah","image_url":"http://www.webdesigndev.com/wp-content/uploads/2015/01/Cutout-Logo-MockUp-e1421779051582.jpg","add_date":"2016-06-14 11:16:05"},{"id":"2","tab_text":"IAG","title":"It's A Grind","subtitle":"Mobile App","description":"will add details here blah blah blah will add details here blah blah blah will add details here blah blah blah","image_url":"https://d13yacurqjgara.cloudfront.net/users/599747/screenshots/2361951/dribbble.jpg","add_date":"2016-06-14 11:12:29"}]}}
,
getphonepopupdata = //data for phone popup
{"code":200,"status":"ok","results":{name : "Name", email : "E-MAIL", phone : "phone"}}
,

getAllPortfolioData = //data for MacBook portfolio
{"code":200,"status":"ok","results":{"itemCount":3,"items":
[
{"id":"1","title":"title1","description":"Description 1","backColor1":"f15927","backColor2":"529cef","backColor3":"bce9cf"
	,"showImageTitle":"1"
	,"image1URL":"https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/iphone6/iphone6-take-a-screenshot-animation-reminder.gif","image1Title":"Phones"
	,"image2URL":"http://cdn.playbuzz.com/cdn/8ba945ba-7822-4280-8677-1392c0aafcda/e756357a-1cbb-492b-a023-e19a44d4481c.png","image2Title":"Things"
	,"image3URL":"http://pad1.whstatic.com/images/thumb/2/2c/Take-a-Screenshot-in-Microsoft-Windows-Step-3-Version-4.jpg/aid3450-728px-Take-a-Screenshot-in-Microsoft-Windows-Step-3-Version-4.jpg","image3Title":"Keyboard"},
{"id":"2","title":"title2","description":"Description 1","backColor1":"bce9cf","backColor2":"529cef","backColor3":"bce9cf"
	,"showImageTitle":"0"
	,"image1URL":"https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/iphone6/iphone6-take-a-screenshot-animation-reminder.gif","image1Title":"Phones"
	,"image2URL":"","image2Title":""
	,"image3URL":"","image3Title":""},
{"id":"3","title":"title3","description":"Description 1","backColor1":"f15927","backColor2":"bce9cf","backColor3":"f15927","showImageTitle":"0"
	,"image1URL":"https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/iphone6/iphone6-take-a-screenshot-animation-reminder.gif","image1Title":"Phones"
	,"image2URL":"","image2Title":""
	,"image3URL":"","image3Title":""
}
]}}

,
getPortfolioTitle = //data for title page of MacBook portfolio
{"title":"Portfolio title", "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "backColor1":"123456", "backColor2":"234567" }
;
//===================================== Get AJAX data ==========================================

var GetAJAXdata = function (URL, whatFor, successcallback, failurecallback) {
	console.clear();
	console.log('Try to get Ajax : ',whatFor);   
					$.ajax({
					  url: URL+whatFor,
					  timeout: 10*1000, //10 sec,
					  dataType: 'json',
					  success: successcallback,
					  error: failurecallback || function(response){ console.log(response.statusText) },


					complete: function(jqXHR, textStatus) {
					        if (textStatus == 'success') {
					            console.log('AJAX success.');
					        }
					        if (textStatus == 'error') {
					            console.log('AJAX error');
					        }
					    },
					});

} //end GetAJAXdata function
 
