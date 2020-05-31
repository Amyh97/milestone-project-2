var location = $("#location").val()
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://tripadvisor1.p.rapidapi.com/locations/auto-complete?lang=en_US&units=mi&query=${location}",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
		"x-rapidapi-key": "8e454c9b0dmshf8a12541aa166abp100ea0jsnb6ef553fc5b2"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response.data[0].result_object.location_id);
});

var id = respo.data[0].result_object.location_id;

var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://tripadvisor1.p.rapidapi.com/hotels/list?offset=0&currency=GBP&limit=30&order=asc&lang=en_US&sort=recommended&location_id=${id}&adults=1&checkin=%3Crequired%3E&rooms=1&nights=2",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
		"x-rapidapi-key": "8e454c9b0dmshf8a12541aa166abp100ea0jsnb6ef553fc5b2"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});