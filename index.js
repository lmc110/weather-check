var express = require('express');
var app = express();
var server = require('http').createServer(app);
var bodyParser = require('body-parser');

//http://api.openweathermap.org/data/2.5/weather?q=LAREDO&APPID=c5985e7ab6d2d55ca584f77808372be6&units=imperial
var baseUrl = "http://api.openweathermap.org/data/2.5/";
var apiKey = "c5985e7ab6d2d55ca584f77808372be6";

var urlencodedParser = bodyParser.urlencoded({extended: false});

// set listening port for local testing
app.set('port', (process.env.PORT || 5000));

// send html file when user visits url
app.get('/', function(req, res, next) {
  res.sendFile(__dirname + '/public/index.html')
});


// receive data from client
app.post('/request', urlencodedParser, function(req, res) {
  var input = req.body.input;
  console.log(input);
  if(isValidZipcode(input)) {
    // get weather api request using zipcode
  } else {
    // check if city, state and get api request using city and state
  }
  
  //var url_request = baseUrl + "weather?q=" + city + "&APPID=" + apiKey + "&units=imperial";
  if(!req.body) return res.sendStatus(400)
  //res.send({err: 0, url_request: url_request});
});



// set public folder for stylesheets
app.use(express.static(__dirname + '/public'));

server.listen(app.get('port'), '0.0.0.0', function() {
  console.log('Node app is running on port', app.get('port'));
});


function isValidZipcode(zipcode) {
  return /^\d{5}(-\d{4})?(?!-)$/.test(zipcode);
}
