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
		data: convert(/*data*/),
		success: success,
    // success: console.log,
		dataType: null
	});	
})


function convert (inputData) {
  // var obj = JSON.parse(inputData);
  // var string = obj["firstName"] + ',' + obj["lastName"] + ',' + obj["county"] + ',' + obj["city"] + obj["role"]
  return JSON.stringify({});
}

function success(outputData) {
  console.log(outputData);
	$('body').append('<div>' + outputData + '</div>');
}



