require('./movie_request.js');
getMovieData('cloud atlas');
var movies = ['force awakens', 'interstellar', 'premium rush', 'super 8'];
batchMovieRequest(movies);

function getMovieData(movie){

    var baseUrl = "http://www.omdbapi.com/?t=";
    var params = movie.split(' ').join('+');
    var end = "&y=&plot=short&r=json";

    var fullUrl = baseUrl + params + end;


    var request = require('request');

    request(fullUrl, function (error, response, body) {
        if (!error && response.statusCode == 200) {
        console.log(body)
    }
})}

function batchMovieRequest(movieList){

    var arrayLength = movieList.length;
    for (var i = 0; i < arrayLength; i++){
        getMovieData(movieList[i]);
    }

}
