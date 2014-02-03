/***
 * 1. Understanding jQuery's Shorthand Methods - $.getScript()
 */

$(function() {
	/***
	 *  Load a JavaScript file from the server using a GET HTTP request, then execute it.
	 */
	$.getScript("../../../files/index.js")
		.done(function() {
			console.log('--Success--');
			var data = prepareData();
			console.log('Total number of employees are: ' + data.students.length);

			/***
			 * Used for-in loop over object.
			 */
			console.log("Using FOR-IN loop: ");
			for (var student in data.students) {
				console.log(data.students[student].id);
				// console.log(data.students[student].firstname);
				// console.log(data.students[student].lastname);
			}
		})
		.fail(function() {
			console.log('--Error--');
		})
		.always(function() {
			console.log('--Finished--');
		});
});