// var App = require('./client/app.js')
var express = require('express');
var path = require('path');

var app = express();

app.use(function(req, res, next) {
	console.log(req.method, req.path);
	next();
})

// request ---> '/js/jquery.min.js'

app.use(
	// check my client folder for any recources that are requested first
	// if true send back to browers and stop req.
	// else go to next()
	express.static(path.join(__dirname, './client/'))
);

const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.get('/csv_report', function (req, res, next) {
	if (err) {
		return res.status(500).send(err)
	} else {console.log('succeeded')}
})


app.post('/csv_report', function(req, res) {
	console.log('you hit my end point of /csv_report');
	res.send('hello');

})

app.use(function(req,res,next){
	res.status(404).send('not found');
})


// exports.app = app;

app.listen(3000, () => console.log('web server listening on local host: 3000'));