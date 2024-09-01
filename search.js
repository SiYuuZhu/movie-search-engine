var key_1 = document.querySelector("#key1");
var key_2 = document.querySelector("#key2");
var key_3 = document.querySelector("#key3");
var key_4 = document.querySelector("#key4");
var key_5 = document.querySelector("#key5");

document.addEventListener("DOMContentLoaded", function(event) {
    var url = window.location.href;
    var temp = url.split("?");
    temp = temp[1].split("=");
    if (temp[0] == "key") {
        maketagRequest(temp[1]);
    } else {
        makeTRequest("Score_Des");
    }
})
var searchtype = document.querySelector("#dropdown-menu");
var button = document.querySelector("#btn");
var input = document.querySelector("#search_word")

button.addEventListener("click", function(event) {
    toSearchPage("input=" + input.value + "&type=" + searchtype.value);
})
var sortBy = document.getElementById("sortby");
sortBy.addEventListener("change", function(event) {
    makeTRequest(event.target.value);
})
button.addEventListener("click", function(event) {
    toSearchPage(input.value);
})

function toSearchPage(input) {
    var url = "searchResult.html?" + input;
    window.open(url);
}

function tagResult(source, name1, name2, name3, name4, name5, id1, id2, id3, id4, id5) { //傳入五個關鍵字後
    key_1.innerHTML = "#" + name1;
    key_1.addEventListener("click", function(event) {
        toSearchPage("key=" + id1);
    })
    key_2.innerHTML = "#" + name2;
    key_2.addEventListener("click", function(event) {
        toSearchPage("key=" + id2);
    })
    key_3.innerHTML = "#" + name3;
    key_3.addEventListener("click", function(event) {
        toSearchPage("key=" + id3);
    })
    key_4.innerHTML = "#" + name4;
    key_4.addEventListener("click", function(event) {
        toSearchPage("key=" + id4);
    })
    key_5.innerHTML = "#" + name5;
    key_5.addEventListener("click", function(event) {
        toSearchPage("key=" + id5);
    })
}
var mcontainer = document.querySelector("#mcontainer");

function SearchResult(id, poster, name, overview, vote, date) {
    mcontainer.style = "background-color: #454545;color: aliceblue;";

    var br = document.createElement("br");
    var hr = document.createElement("hr");
    var divRootRaw = document.createElement("div");
    divRootRaw.classList.add("row");
    divRootRaw.classList.add("text-center");
    divRootRaw.classList.add("col-lg-offset-1");

    var div = document.createElement("div");
    div.classList.add("row");
    div.classList.add("col-lg-11");

    var text_justify = document.createElement("div");
    text_justify.classList.add("text-justify");
    text_justify.classList.add("col-lg-2");

    var cover = document.createElement("img");


    var col_offset = document.createElement("div");
    col_offset.classList.add("col-lg-9");
    col_offset.classList.add("col-lg-offset-1");
    col_offset.appendChild(br);
    var strong = document.createElement("strong");
    var h2 = document.createElement("h2");
    h2.style.textAlign = "left";
    var movieTitle = document.createElement("p");
    movieTitle.style = "text-align:left";
    var releasedate = document.createElement("p");
    var h4_1 = document.createElement("h4");
    var label = document.createElement("span");
    label.classList.add("label");
    label.classList.add("label-warning");
    label.innerHTML = "綜合評價";

    var votescore = document.createElement("font");
    votescore.color = "F4B04E";
    votescore.align = "right";
    var h4_2 = document.createElement("h4");


    //海報部分
    cover.src = poster;
    cover.width = "220";
    cover.height = "360";
    cover.addEventListener("click", function(event) {
        toDetailPage(id);
    })
    text_justify.appendChild(br);
    text_justify.appendChild(cover);
    text_justify.appendChild(br);

    //電影名稱部分
    movieTitle.innerHTML = name;
    h2.appendChild(movieTitle);
    strong.appendChild(h2);
    movieTitle.addEventListener("click", function(event) {
        toDetailPage(id);
    })
    releasedate.innerHTML = date;
    releasedate.style = "text-align:left";
    var h4 = document.createElement("h4");
    h4.appendChild(releasedate);
    //分數部分
    votescore.innerHTML = vote;
    h4_1.appendChild(label);
    h4_1.appendChild(votescore);
    h4_1.align = "right";
    col_offset.appendChild(strong);
    col_offset.appendChild(h4);
    col_offset.appendChild(h4_1);
    col_offset.appendChild(hr);
    //簡介部分
    var intro = document.createElement("p");
    intro.innerHTML = overview;
    intro.style = "text-align:justify";
    h4_2.appendChild(intro);
    col_offset.appendChild(h4_2);
    col_offset.appendChild(br);
    col_offset.appendChild(br);

    var brdiv = document.createElement("br");

    div.appendChild(text_justify);
    div.appendChild(col_offset);
    divRootRaw.appendChild(brdiv);
    divRootRaw.appendChild(div);
    mcontainer.appendChild(divRootRaw);
    mcontainer.appendChild(br);
    mcontainer.appendChild(br);
}


var apiKeyT = "5b1d1862f3117ce9288a7827c833aaa8";
var movieurl = "https://api.themoviedb.org/3/search/movie?api_key=" + apiKeyT + "&query=";
var moviegenreurl = "https://api.themoviedb.org/3/discover/movie?api_key=" + apiKeyT + "&with_genres=";
var actorurl = "https://api.themoviedb.org/3/discover/movie?api_key=" + apiKeyT + "&with_cast=";
var searchTitle = "";
var searchType = "";
var searchMethod = "";


var urlT = "https://api.themoviedb.org/3/search/movie?api_key=" + apiKeyT + "&query=";
var url = "https://api.themoviedb.org/3/keyword/";
var url2 = "?api_key=";
var name1 = "";
var name2 = "";
var name3 = "";
var name4 = "";
var name5 = "";

var id1 = "";
var id2 = "";
var id3 = "";
var id4 = "";
var id5 = "";

function makeTRequest(sortString) {
    makeTagRequest(false, false, false, false, false);
    mcontainer.innerHTML = "";
    var xhrm = new XMLHttpRequest();
    var url = window.location.href;
    var temp = url.split("?");
    var temp1 = temp[1].split("&");
    var temp2 = temp1[0].split("=");
    if (temp2[0] == "genres") {
        searchType = temp2[0];
        searchTitle = temp2[1];
    } else {
        var temp3 = temp1[1].split("=");
        searchType = temp2[0];
        searchTitle = temp2[1];
        searchMethod = temp3[1];
    }
    xhrm.onload = function() {
        var response = JSON.parse(this.responseText).results;
        if (sortString == "Score_Des") {
            response.sort(function(a, b) {
                return b.vote_average - a.vote_average;
            })

        } else if (sortString == "Time_Des") {
            response.sort(function(a, b) {
                var adate = Date.parse(a.release_date);
                var bdate = Date.parse(b.release_date);
                return bdate - adate;
            })
        } else if (sortString == "Score_Asc") {
            response.sort(function(a, b) {
                return a.vote_average - b.vote_average;
            })

        } else if (sortString == "Time_Asc") {
            response.sort(function(a, b) {
                var adate = Date.parse(a.release_date);
                var bdate = Date.parse(b.release_date);
                return adate - bdate;
            })
        }
        response.map(function(item) {
            document.title = "Search Result";
            SearchResult(
                item.id,
                "https://image.tmdb.org/t/p/w300/" + item.poster_path,
                item.title,
                item.overview,
                item.vote_average,
                item.release_date
            );
        });
    };
    if (searchType == "input") {
        if (searchMethod == "Title") {
            xhrm.open("GET", movieurl + searchTitle, true);
            xhrm.send();
        } else if (searchMethod == "Actor") {
            var url1 = "https://api.themoviedb.org/3/search/person?api_key=" + apiKeyT + "&query=" + searchTitle;
            var actorID = "";
            var xhra = new XMLHttpRequest();
            xhra.onload = function() {
                var response = JSON.parse(this.responseText).results;
                response.map(function(item) {
                    if (item.known_for_department == "Acting") {
                        actorID = item.id;
                    }
                })
                xhrm.open("GET", actorurl + actorID, true);
                xhrm.send();
            }
            xhra.open("GET", url1, true);
            xhra.send();

        }


    } else if (searchType == "genres") {
        xhrm.open("GET", moviegenreurl + searchTitle, true);
        xhrm.send();
    }
}

var urlTag = "https://api.themoviedb.org/3/keyword/";
var urlTag1 = "/movies?api_key=";

function maketagRequest(key_id) {
    var xhrm = new XMLHttpRequest();

    xhrm.onload = function() {
        var response = JSON.parse(this.responseText).results;
        response.map(function(item) {

            SearchResult(
                item.id,
                "https://image.tmdb.org/t/p/w300/" + item.poster_path,
                item.title,
                item.overview,
                item.vote_average,
                item.release_date
            );
        });
    };
    xhrm.open("GET", urlTag + key_id + urlTag1 + apiKeyT, true);
    xhrm.send();
}

function getRandom(x) {
    return Math.floor(Math.random() * x) + 2;
}

function makeTagRequest(bool1, bool2, bool3, bool4, bool5, id1, id2, id3, id4, id5) {
    var xhrm = new XMLHttpRequest();
    var key_id_1 = getRandom(3500);
    var key_id_2 = getRandom(3500);
    var key_id_3 = getRandom(3500);
    var key_id_4 = getRandom(3500);
    var key_id_5 = getRandom(3500);

    //處理第一個
    if (bool1 == false) {
        xhrm.onload = function() {
            var response = JSON.parse(this.responseText).name;

            if (response == null) {

                makeTagRequest(false, false, false, false, false, id1, id2, id3, id4, id5);
            } else {
                name1 = response;
                makeTagRequest(true, false, false, false, false, key_id_1, id2, id3, id4, id5);
            }
        }
        xhrm.open("GET", url + key_id_1 + url2 + apiKeyT, true);
        xhrm.send();
        //處理第二個
    } else if (bool2 == false) {
        xhrm.onload = function() {
            var response = JSON.parse(this.responseText).name;

            if (response == null) {
                makeTagRequest(true, false, false, false, false, id1, id2, id3, id4, id5);
            } else {
                name2 = response;
                makeTagRequest(true, true, false, false, false, id1, key_id_2, id3, id4, id5);
            }
        }
        xhrm.open("GET", url + key_id_2 + url2 + apiKeyT, true);
        xhrm.send();
        //處理第三個
    } else if (bool3 == false) {
        xhrm.onload = function() {
            var response = JSON.parse(this.responseText).name;

            if (response == null) {
                makeTagRequest(true, true, false, false, false, id1, id2, id3, id4, id5);
            } else {
                name3 = response;
                makeTagRequest(true, true, true, false, false, id1, id2, key_id_3, id4, id5);
            }
        }
        xhrm.open("GET", url + key_id_3 + url2 + apiKeyT, true);
        xhrm.send();
        //處理第四個
    } else if (bool4 == false) {
        xhrm.onload = function() {
            var response = JSON.parse(this.responseText).name;

            if (response == null) {
                makeTagRequest(true, true, true, false, false, id1, id2, id3, id4, id5);
            } else {
                name4 = response;
                makeTagRequest(true, true, true, true, false, id1, id2, id3, key_id_4, id5);
            }
        }
        xhrm.open("GET", url + key_id_4 + url2 + apiKeyT, true);
        xhrm.send();
        //處理第五個
    } else if (bool5 == false) {
        xhrm.onload = function() {
            var response = JSON.parse(this.responseText).name;

            if (response == null) {
                makeTagRequest(true, true, true, true, false, id1, id2, id3, id4, id5);
            } else {
                name5 = response;
                tagResult("tmdb", name1, name2, name3, name4, name5, id1, id2, id3, id4, key_id_5);
            }
        }
        xhrm.open("GET", url + key_id_5 + url2 + apiKeyT, true);
        xhrm.send();
    }
}

function toDetailPage(id) {
    var url = "detailInfo.html?id=" + id;
    window.open(url);
}