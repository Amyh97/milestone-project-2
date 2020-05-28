var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://manthankool-makcorps-hotel-price-comparison-v1.p.rapidapi.com/king/v2/%7Bjakarta%7D/%7B2018-05-25%7D/%7B2018-05-28%7D",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "manthankool-makcorps-hotel-price-comparison-v1.p.rapidapi.com",
		"x-rapidapi-key": "8e454c9b0dmshf8a12541aa166abp100ea0jsnb6ef553fc5b2",
		"authorization": "JWT {{jwt_token}}"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});

function(getData) {
    return `
        <div>
            
        </div>
    `
}