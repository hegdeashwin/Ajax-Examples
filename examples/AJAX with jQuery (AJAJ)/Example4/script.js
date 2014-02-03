/***
 * 1. Understanding jQuery's Shorthand Methods - .load()
 */

$(function() {
	/***
	 * Load data from the server and place the returned HTML into the matched element.
	 */
	$('body').load("../../../files/index.json", function(data) {
		console.log('Loaded');

		console.log(data);
		console.log(typeof data);
		console.log($.parseJSON(data));
	});
});