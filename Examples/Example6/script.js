/***
 * 1. Understanding jQuery's Shorthand Methods - $.get()
 */

$(function() {
	/***
	 * Load data from the server using a HTTP GET request.
	 * @params:
	 *	url - A string containing the URL to which the request is sent,
	 *  done - A callback function that is executed if the request succeeds.,
	 */

	/***
	 * NOTE: `success`, `error`, `complete` methods are callback methods introduced
	 * in jQuery 1.5 are deprecated as of jQuery 1.8.
	 */
	$.get("index.json")
		.done(function(data) {
			console.log('Getting `JSON` file');
			console.log('--Success--');
			/***
			 * console what was returned
			 */
			console.log('Data: ');
			console.log(data);
			console.log('Type of data is: ' + typeof data);

			console.log('Total number of employees are: ' + data.employees.length);

			/***
			 * 1st Way: used for loop over object.
			 */
			console.log("Using FOR loop: ");
			for (var employee = 0; employee < data.employees.length; employee++) {
				console.log(data.employees[employee].id);
				// console.log(data.employees[employee].firstname);
				// console.log(data.employees[employee].lastname);
			}

			/***
			 * 2nd Way: used for-in loop over object.
			 */
			console.log("Using FOR-IN loop: ");
			for (var employee in data.employees) {
				console.log(data.employees[employee].id);
				// console.log(data.employees[employee].firstname);
				// console.log(data.employees[employee].lastname);
			}
		})
		.fail(function() {
			console.log('--Error--');
		})
		.always(function() {
			console.log('--Finished--');
		});

	/***
	 * Getting `SCRIPT` file
	 */
	// $.get("index.js")
	// 	.done(function(data) {
	// 		console.log('Getting `Script` file');

	// 		console.log('Data: ');
	// 		console.log(data);

	// 		console.log('Type of data is: ' + typeof data);
	// 	});

	/***
	 * Getting `TEXT` file
	 */
	// $.get("index.txt")
	// 	.done(function(data) {
	// 		console.log('Getting `Text` file');

	// 		console.log('Data: ');
	// 		console.log(data);

	// 		console.log('Type of data is: ' + typeof data);
	// 	});
});