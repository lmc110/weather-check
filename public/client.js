$('#weather-form').submit(function(e) {
  e.preventDefault();
  var city = $('#city').val();
  var state = $('#state').val();
  console.log(city + ", " + state);
  //$.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=c5985e7ab6d2d55ca584f77808372be6&units=imperial', function(data) {
  //  console.log(data);
//});


  $.ajax('/request', {
    data: {
      city: city,
      state: state
    },
    method: 'post',
    success: function(response){
      console.log('request successful');
      getWeather(response.url_request);
      //window.location = response.redirectUrl;
    },
    error: function(err) {
      alert('post failed');
    }
  });
});

function getWeather(url) {
  $.getJSON(url, function(data) {
    $('#forecast-wrapper').append('<div id="current-temp">Current: ' + data.main.temp + ' degrees</div>');
    $('#forecast-wrapper').append('<div id="min-temp">Low: ' + data.main.temp_min + ' degrees</div>');
    $('#forecast-wrapper').append('<div id="max-temp">High: ' + data.main.temp_max + ' degrees</div>');
  });
}


/* example of Laredo, TX weather api request
{
  "coord": {
    "lon": -99.51,
    "lat": 27.51
  },
  "weather": [
    {
      "id": 804,
      "main": "Clouds",
      "description": "overcast clouds",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 90.21,
    "pressure": 1009,
    "humidity": 46,
    "temp_min": 89.6,
    "temp_max": 91.4
  },
  "visibility": 16093,
  "wind": {
    "speed": 27.51,
    "deg": 350,
    "gust": 14.9
  },
  "clouds": {
    "all": 90
  },
  "dt": 1503872100,
  "sys": {
    "type": 1,
    "id": 2665,
    "message": 0.0035,
    "country": "US",
    "sunrise": 1503836117,
    "sunset": 1503882156
  },
  "id": 4705349,
  "name": "Laredo",
  "cod": 200
}
*/
