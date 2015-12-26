function getMovieData(movie){

    var baseUrl = "http://www.omdbapi.com/?t=";
    var params = movie.split(' ').join('+');
    var end = "&y=&plot=short&r=json";

    var fullUrl = baseUrl + params + end;


    var request = require('request');

    request(fullUrl, function (error, response, body) {
        if (!error && response.statusCode == 200) {
        console.log(body) // Show the HTML for the Google homepage. 
    }
})}


getMovieData("cloud atlas")
getMovieData("force awakens")
