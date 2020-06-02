var location = $("#location").val();

function getData(location, cb) {
  var xhr = new XMLHttpRequest();

  xhr.open("GET", `https://tripadvisor1.p.rapidapi.com/locations/search?location_id=1&limit=30&sort=relevance&offset=0&lang=en_US&currency=GBP&units=km&query=${location}`);
  xhr.setRequestHeader("x-rapidapi-host", "tripadvisor1.p.rapidapi.com");
  xhr.setRequestHeader("x-rapidapi-key", "8e454c9b0dmshf8a12541aa166abp100ea0jsnb6ef553fc5b2");

  xhr.send();

  xhr.onreadystatechange = function() { 
  if(this.readystate == 4 && this.status == 200) {
    cb(JSON.parse(this.responseText));
    }
  };
}

function writeToDocument(type) {
    getData(type, function(data) {
        data = data[0].result_object.location_id;
        document.getElementById("api-section").innerHTML= data;
    })
}