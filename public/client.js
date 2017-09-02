$('#weather-form').submit(function(e) {
  e.preventDefault();
  var input = $('#area').val();
  $('#form-wrapper').fadeOut('slow');
  $('#clouds').fadeOut('slow');

  $.ajax('/request', {
    data: {
      input: input
    },
    method: 'post',
    success: function(response){
      console.log('request successful');
      getWeather(response.url_request);
    },
    error: function(err) {
      alert('post failed');
    }
  });
});

function getWeather(url) {
  $.getJSON(url, function(data) {
    $('#forecast-wrapper').append('<div id="forecast"></div>');
    $('#forecast').append('<div id="current-temp"><i class="fa fa-sun-o" aria-hidden="true"></i>' + data.main.temp + '\xB0</div>');
    $('#forecast').append('<div id="min-temp">Low: ' + data.main.temp_min + '\xB0</div>');
    $('#forecast').append('<div id="max-temp">High: ' + data.main.temp_max + '\xB0</div>');
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
