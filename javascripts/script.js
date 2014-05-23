var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
	var crd = pos.coords;

	$('.js-lat').text(crd.latitude);
	$('.js-long').text(crd.longitude);
	$('.js-acc').text(crd.accuracy + ' m');

	$.ajax({
		url: 'https://api.forecast.io/forecast/a955df0e9afe8c822ebb3adf30265fb6/' + crd.latitude + ',' + crd.longitude,
		data: {
			units : 'si'
		},
		dataType: 'jsonp',
		success: function(data) {
			console.log(data);
			$('.js-temp').text(data.currently.apparentTemperature + ' °C');
			$('.js-windspeed').text(data.currently.windSpeed + ' °m/s');
		}
	});
}

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
}

navigator.geolocation.getCurrentPosition(success, error, options);
