document.addEventListener("DOMContentLoaded", function(event) {
    makeTRequest();
})
var Title = document.querySelector(".movieTitle");
var Stars = document.querySelector(".well_voteScores");
var Director = document.querySelector(".movieDirector");
var Actor = document.querySelector(".movieActor");
var Date = document.querySelector(".movieDate");
var Intro = document.querySelector(".movieIntro");
var Trailer = document.querySelector(".movieTrailer");
var Cover = document.querySelector(".cover");


function movieResult(poster, name, date, overview, vote, director, cast, trailer) {


    Cover.src = poster;
    Title.innerHTML = name;
    Trailer.src = trailer;
    Date.innerHTML = date;
    Intro.innerHTML = overview;
    Director.innerHTML = director;
    Actor.innerHTML = cast;
    document.title = name;
    var votescore = parseFloat(vote);
    var i;

    for (i = 2; i <= votescore; i = i + 2) {
        var score = document.createElement("img");
        score.src = "star.png";
        score.title = vote;
        Stars.appendChild(score);
    }

}

// for TMDb
var apiKeyT = "5b1d1862f3117ce9288a7827c833aaa8";
var movieurl = "https://api.themoviedb.org/3/movie/";
var movieurl2 = "?api_key=" + apiKeyT;
var casturl = "/credits?api_key=" + apiKeyT;
var trailerurl = "/videos?api_key=" + apiKeyT;
var ID = "";

function makeTRequest() {
    var xhrm = new XMLHttpRequest();
    var url = window.location.href;
    var temp = url.split("?");
    ID = temp[1].split("=");
    ID = ID[1];

    xhrm.onload = function() {
        var response = JSON.parse(this.responseText);

        var castlist = "";
        var director = "";
        var link = "";
        var xhrt = new XMLHttpRequest();
        //預告片
        xhrt.onload = function() {
            var responset = JSON.parse(this.responseText).results;
            responset.map(function(item) {
                if (item.type == "Trailer") {
                    link = "https://www.youtube.com/embed/" + item.key;
                }
            })
            var xhrc = new XMLHttpRequest();
            xhrc.onload = function() {
                var responsec = JSON.parse(this.responseText).cast;
                responsec = responsec.slice(0, 5);
                responsec.map(function(item) {
                    castlist = castlist + item.name + "<br/>";
                });
                //導演
                var responsed = JSON.parse(this.responseText).crew;
                responsed.map(function(item) {
                    if (item.job == "Director") {
                        director = item.name;
                    }
                });

                //詳細資料

                movieResult(
                    "https://image.tmdb.org/t/p/w300/" + response.poster_path,
                    response.title,
                    response.release_date,
                    response.overview,
                    response.vote_average,
                    director,
                    castlist,
                    link
                );
            };

            xhrc.open("GET", movieurl + ID + casturl, true);
            xhrc.send();
        }

        xhrt.open("GET", movieurl + ID + trailerurl, true);
        xhrt.send();
    };

    xhrm.open("GET", movieurl + ID + movieurl2, true);
    xhrm.send();
}