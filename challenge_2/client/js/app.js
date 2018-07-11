// var app = require('server.js')


// var sales_report = {
//     "firstName": "Joshie",
//     "lastName": "Wyattson",
//     "county": "San Mateo",
//     "city": "San Mateo",
//     "role": "Broker",
//     "sales": 1000000
//     "children": [
//     {
//       "firstName": "Beth Jr.",
//       "lastName": "Johnson",
//       "county": "San Mateo",
//       "city": "Pacifica",
//       "role": "Manager",
//       "sales": 2900000,
//       "children": [
//         {
//           "firstName": "Smitty",
//           "lastName": "Won",
//           "county": "San Mateo",
//           "city": "Redwood City",
//           "role": "Sales Person",
//           "sales": 4800000,
//           "children": []
//         },
//         {
//           "firstName": "Allen",
//           "lastName": "Price",
//           "county": "San Mateo",
//           "city": "Burlingame",
//           "role": "Sales Person",
//           "sales": 2500000,
//           "children": []
//         }
//       ]
//     },
//     {
//       "firstName": "Beth",
//       "lastName": "Johnson",
//       "county": "San Francisco",
//       "city": "San Francisco",
//       "role": "Broker/Sales Person",
//       "sales": 7500000,
//       "children": []
//     }
//   ]
// }


// send json to server
$("button").click(function() {
	event.preventDefault();
	$.ajax({
		type: "POST",
		url: 'http://localhost:3000/csv_report',
		data: $("textarea").val(),
		contentType: "application/json",
		success: function(data) {
			$('body').append('<div>' + data + '</div>');
		},
		error: function(err){
			console.log(err);
		}
		// contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
		// dataType: 'text'
	});	
})

