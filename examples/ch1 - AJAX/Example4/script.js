/***
 * Example 1: Understanding XML Parsing.
 * Warning: For Google Chrome, It might give some error like
 * "Uncaught InvalidStateError: An attempt was made to use an object that is not, or is no longer, usable."
 *
 */

/***
 * When the document gets loaded `window.onload` event is called 
 * to call the makeRequest function.
 */
window.onload = makeRequest;

/***
 * `xhr` is a global variable.
 */
var xhr = false;

function makeRequest() {
	/***
	 * If window.XMLHttpRequest exists; means does the browser knows about XMLHttpRequest.
	 */
	if(window.XMLHttpRequest) {
		
		/***
		 * Yes! Then create a new object of XMLHttpRequest.
		 * Firefox, Chrome, Opera, Safari, IE 7 onwards understands XMLHttpRequest.
		 */
		xhr = new XMLHttpRequest();
	} else {

		/***
		 * No! Then check, does the browser knows about ActiveXObject; means the browser is Microsoft IE 6.
		 */
		if(window.ActiveXObject) {
			try {
				/***
				 * Yes! Its IE 6, create new object of ActiveXObject.
				 */
				xhr = new ActiveXObject("Microsoft.XMLHTTP");
			} catch(error) {
				console.log("Error: " + error.message); 
			}
		}
	}

	/***
	 * If xhr object is set correctly.
	 */
	if(xhr) {
		
		/***
		 * Step 1: onreadystatechange event is set to be showContents function; means anytime the state changes 
		 * `showState` function gets called.
		 */
		xhr.onreadystatechange = showContents;

		/***
		 * Step 2: We open up the request with 
		 * @params: Method - [GET/POST/PUT/DELETE],
		 *          URL - WebService/File, 
		 *			Async flag - true/false
		 */
		xhr.open("GET", "index.xml", true);

		/***
		 * Send the request to server.
		 */
		xhr.send(null);
	} else {
		
		/***
		 * xhr object is NOT set correctly. Render updateArea DOM with message.
		 */
		document.getElementById("updateArea").innerHTML = "Sorry, But browser couldn't create an XMLHttpRequest";
	}
}

/***
 * This function gets called whenever the readyState is changed.
 */
function showContents() {
	/***
	 * Well, readyState can be 0 to 4; but we care when it is 4.
	 * i.e. when the request is finished.
	 */
	if(xhr.readyState === 4) {
		/***
		 * Check to see if status is 200; means we want to know 
		 * if the value come from server is `OK`. Here it means we were able to find
		 * `index.xml` file & able to read it.
		 */
		if(xhr.status === 200) {
			/***
			 * responseText is a text that web server sends back in response
			 * to our request from the server.
			 */
			var outMsg = xhr.responseText;
			var xmlDoc = null;
			
			/***
			 * If window.DOMParser exists; means does the browser knows about DOMParser.
			 */
			if (window.DOMParser) {
				/***
				 * For Firefox, Chrome, Opera, Safari, IE 9 onwards understands DOMParser.
				 */
				parser = new DOMParser();
				/***
				 * Once you have created a parser object, you can parse XML from a string using the parseFromString method
				 * NOTE: if the parsing process failed, DOMParser currently does not throw an exception, 
				 * but instead returns an error document.
				 */
				xmlDoc = parser.parseFromString(outMsg, "application/xml");
			} else {
				/***
				 * For IE 8, 7, 6
				 */
				xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
				/***
				 * IE uses the loadXML() method to parse an XML string, while other browsers use the DOMParser object.
				 */ 
				xmlDoc.loadXML(outMsg); 
			}
			
			/***
			 * To read XML document we can use getElementsByTagName method; As show below.
			 */
			console.log("Name: " + xmlDoc.getElementsByTagName("name")[0].childNodes[0].nodeValue);
			console.log("Value: " + xmlDoc.getElementsByTagName("value")[0].childNodes[0].nodeValue);
		} else {
			var outMsg = "There was a problem with the request " + xhr.status;
		}
		document.getElementById("updateArea").innerHTML = outMsg;
	}
}