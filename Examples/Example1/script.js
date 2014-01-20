/***
 * Example 1: Understanding XHR State.
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
		 * Step 1: onreadystatechange event is set to be showState function; means anytime the state changes 
		 * `showState` function gets called.
		 */
		xhr.onreadystatechange = showState;

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
function showState() {
	/***
	 * Grab what currently there in updateArea div in DOM; 
	 * We are not going to override the content of updateArea.
	 */
	var currentMsg = document.getElementById("updateArea").innerHTML;

	document.getElementById("updateArea").innerHTML = currentMsg + "<p>The current state is " + xhr.readyState + " and the status is " + xhr.status + "</p>";
}