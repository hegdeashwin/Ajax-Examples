/***
 * 1. Understanding jQuery's Shorthand Methods - $.getJSON()
 */

$(function() {
	/***
	 * Load JSON-encoded data from the server using a GET HTTP request.
	 */
	$.getJSON("../../../files/index.json")
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
});