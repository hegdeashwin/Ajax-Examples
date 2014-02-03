/***
 * 1. Understanding jQuery's Low Level Interface - $.ajax()
 */

$(function() {
	/***
	 * Perform an asynchronous HTTP (Ajax) request.
	 */

	/***
	 * dataType: json | xml | html | script, default: Intelligent Guess
	 * type: GET | POST | PUT | DELETE, default: 'GET'
	 * async: true | false, default: true
	 * data: GET => Query String, POST | PUT | DELETE => Form Data
	 *		 *NOTE: PUT | DELETE service is not implemented then return 405 Method Not Allowed.
	 */
	var settings = {
		dataType: "json",
		beforeSend: function() {
			console.log('This will get trigger send begins');
		},
		async: true,
		// type: 'POST',
		// data: {
		// 	'name': 'Ashwin Hegde'
		// }
	};

	$.ajax("../../../files/index.json", settings).done(function() {
		console.log('--Success--');
	}).fail(function() {
		console.log('--Error--');
	}).always(function() {
		console.log('--Finished--');
	});

	console.log("Hello World");
});