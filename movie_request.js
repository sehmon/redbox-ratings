function findMovie (movieName) {
    var http = require('http');
    var baseUrl = "http://www.omdbapi.com/?t=";
    var params = movieName.split(' ').join('+');
    var end = "&y=&plot=short&r=json";
    var finalUrl = baseUrl + params + end;

    http.get(finalUrl, function (response, body) {
        console.log('Got response: ' + response.statusCode);
        
        response.on('data', function(contents){
            contents = JSON.parse(contents);
            console.log(contents.Title);
        });
    }).on('error', function(err){
        console.log("Error");
    });
}

function batchMovieRequest(movieList){
    var arrayLength = movieList.length;
    for (var i = 0; i < arrayLength; i++){
        findMovie(movieList[i]);
    }
}