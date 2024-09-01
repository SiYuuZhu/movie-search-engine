var key_1 = document.querySelector("#key1");
var key_2 = document.querySelector("#key2");
var key_3 = document.querySelector("#key3");
var key_4 = document.querySelector("#key4");
var key_5 = document.querySelector("#key5");

var recom_photo_1 = document.querySelector("#recom_cover_1");
var recom_title_1 = document.querySelector("#recom_title_1");
var recom_score_1 = document.querySelector("#recom_score_1");

var recom_photo_2 = document.querySelector("#recom_cover_2");
var recom_title_2 = document.querySelector("#recom_title_2");
var recom_score_2 = document.querySelector("#recom_score_2");

var class_01_title = document.querySelector("#title01");
var class_01_poster = document.querySelector("#cover01");
var class_01_score = document.querySelector("#votescore01");

var class_02_title = document.querySelector("#title02");
var class_02_poster = document.querySelector("#cover02");
var class_02_score = document.querySelector("#votescore02");

var class_03_title = document.querySelector("#title03");
var class_03_poster = document.querySelector("#cover03");
var class_03_score = document.querySelector("#votescore03");

var class_11_title = document.querySelector("#title11");
var class_11_poster = document.querySelector("#cover11");
var class_11_score = document.querySelector("#votescore11");

var class_12_title = document.querySelector("#title12");
var class_12_poster = document.querySelector("#cover12");
var class_12_score = document.querySelector("#votescore12");

var class_13_title = document.querySelector("#title13");
var class_13_poster = document.querySelector("#over13");
var class_13_score = document.querySelector("#votescore13");

var class_21_title = document.querySelector("#title21");
var class_21_poster = document.querySelector("#cover21");
var class_21_score = document.querySelector("#votescore21");

var class_22_title = document.querySelector("#title22");
var class_22_poster = document.querySelector("#cover22");
var class_22_score = document.querySelector("#votescore22");

var class_23_title = document.querySelector("#title23");
var class_23_poster = document.querySelector("#cover23");
var class_23_score = document.querySelector("#votescore23");

var class_31_title = document.querySelector("#title31");
var class_31_poster = document.querySelector("#cover31");
var class_31_score = document.querySelector("#votescore31");

var class_32_title = document.querySelector("#title32");
var class_32_poster = document.querySelector("#cover32");
var class_32_score = document.querySelector("#votescore32");

var class_33_title = document.querySelector("#title33");
var class_33_poster = document.querySelector("#cover33");
var class_33_score = document.querySelector("#votescore33");

var class_41_title = document.querySelector("#title41");
var class_41_poster = document.querySelector("#cover41");
var class_41_score = document.querySelector("#votescore41");

var class_42_title = document.querySelector("#title42");
var class_42_poster = document.querySelector("#cover42");
var class_42_score = document.querySelector("#votescore42");

var class_43_title = document.querySelector("#title43");
var class_43_poster = document.querySelector("#cover43");
var class_43_score = document.querySelector("#votescore43");

var class_51_title = document.querySelector("#title51");
var class_51_poster = document.querySelector("#cover51");
var class_51_score = document.querySelector("#votescore51");

var class_52_title = document.querySelector("#title52");
var class_52_poster = document.querySelector("#cover52");
var class_52_score = document.querySelector("#votescore52");

var class_53_title = document.querySelector("#title53");
var class_53_poster = document.querySelector("#cover53");
var class_53_score = document.querySelector("#votescore53");

var searchType = document.querySelector("#dropdown-menu");
var button = document.querySelector("#btn");
var input = document.querySelector("#search_word")

button.addEventListener("click", function(event) {
    toSearchPage("input=" + input.value + "&type=" + searchType.value);
})
var typeAll = document.querySelector(".search_all");
var typeAction = document.querySelector(".search_action");
var typeAnimaiton = document.querySelector(".search_animation");
var typeComedy = document.querySelector(".search_comedy");
var typeRomance = document.querySelector(".search_romance");
var typeSF = document.querySelector(".search_sf");

typeAction.addEventListener("click", function(event) {
    toSearchPage("genres=28");
})
typeAnimaiton.addEventListener("click", function(event) {
    toSearchPage("genres=16");
})
typeComedy.addEventListener("click", function(event) {
    toSearchPage("genres=35");
})
typeRomance.addEventListener("click", function(event) {
    toSearchPage("genres=10749");
})
typeSF.addEventListener("click", function(event) {
    toSearchPage("genres=848");
})
var N1 = 0;
var N2 = 0;
var N3 = 0;
var N4 = 0;
var N5 = 0;

var R = 0;

function getRandom(x) {
    return Math.floor(Math.random() * x) + 2;
}

function toSearchPage(input) {
    var url = "searchResult.html?" + input;
    window.open(url);
}

function toDetailPage(id) {
    var url = "detailInfo.html?id=" + id;
    window.open(url);
}

function classResult(source, id, poster, name, year, overview, vote, n, Genre) {


    if (Genre == 28 && N1 < 3) {

        if (N1 == 0) {
            class_11_title.innerHTML = name;
            class_11_score.innerHTML = "★" + vote;
            class_11_poster.src = poster;
            class_11_title.addEventListener("click", function(event) {
                toDetailPage(id);
            })
            class_11_poster.addEventListener("click", function(event) {
                toDetailPage(id);
            })
            N1++;
        } else if (N1 == 1) {
            class_12_title.innerHTML = name;
            class_12_score.innerHTML = "★" + vote;
            class_12_poster.src = poster;
            class_12_title.addEventListener("click", function(event) {
                toDetailPage(id);
            })
            class_12_poster.addEventListener("click", function(event) {
                toDetailPage(id);
            })
            N1++;
        } else if (N1 == 2) {
            class_13_title.innerHTML = name;
            class_13_score.innerHTML = "★" + vote;
            class_13_poster.src = poster;
            class_13_title.addEventListener("click", function(event) {
                toDetailPage(id);
            })
            class_13_poster.addEventListener("click", function(event) {
                toDetailPage(id);
            })
            N1 = 10;
        }
    } else if (Genre == 16 && N2 < 3) {
        if (N2 == 0) {

            class_21_title.innerHTML = name;
            class_21_score.innerHTML = "★" + vote;
            class_21_poster.src = poster;
            class_21_title.addEventListener("click", function(event) {
                toDetailPage(id);
            })
            class_21_poster.addEventListener("click", function(event) {
                toDetailPage(id);
            })
            N2++;
        } else if (N2 == 1) {
            class_22_title.innerHTML = name;
            class_22_score.innerHTML = "★" + vote;
            class_22_poster.src = poster;
            class_22_title.addEventListener("click", function(event) {
                toDetailPage(id);
            })
            class_22_poster.addEventListener("click", function(event) {
                toDetailPage(id);
            })
            N2++;
        } else if (N2 == 2) {
            class_23_title.innerHTML = name;
            class_23_score.innerHTML = "★" + vote;
            class_23_poster.src = poster;
            class_23_title.addEventListener("click", function(event) {
                toDetailPage(id);
            })
            class_23_poster.addEventListener("click", function(event) {
                toDetailPage(id);
            })
            N2 = 10;
        }
    } else if (Genre == 35 && N3 < 3) {
        if (N3 == 0) {
            class_31_title.innerHTML = name;
            class_31_score.innerHTML = "★" + vote;
            class_31_poster.src = poster;
            class_31_title.addEventListener("click", function(event) {
                toDetailPage(id);
            })
            class_31_poster.addEventListener("click", function(event) {
                toDetailPage(id);
            })
            N3++;
        } else if (N3 == 1) {
            class_01_title.innerHTML = name;
            class_01_score.innerHTML = "★" + vote;
            class_01_poster.src = poster;
            class_01_title.addEventListener("click", function(event) {
                toDetailPage(id);
            })
            class_01_poster.addEventListener("click", function(event) {
                toDetailPage(id);
            })

            class_32_title.innerHTML = name;
            class_32_score.innerHTML = "★" + vote;
            class_32_poster.src = poster;
            class_32_title.addEventListener("click", function(event) {
                toDetailPage(id);
            })
            class_32_poster.addEventListener("click", function(event) {
                toDetailPage(id);
            })
            N3++;
        } else if (N3 == 2) {
            class_33_title.innerHTML = name;
            class_33_score.innerHTML = "★" + vote;
            class_33_poster.src = poster;
            class_33_title.addEventListener("click", function(event) {
                toDetailPage(id);
            })
            class_33_poster.addEventListener("click", function(event) {
                toDetailPage(id);
            })
            N3 = 10;
        }
    } else if (Genre == 10749 && N4 < 3) {
        if (N4 == 0) {
            class_02_title.innerHTML = name;
            class_02_score.innerHTML = "★" + vote;
            class_02_poster.src = poster;
            class_02_title.addEventListener("click", function(event) {
                toDetailPage(id);
            })
            class_02_poster.addEventListener("click", function(event) {
                toDetailPage(id);
            })

            class_41_title.innerHTML = name;
            class_41_score.innerHTML = "★" + vote;
            class_41_poster.src = poster;
            class_41_title.addEventListener("click", function(event) {
                toDetailPage(id);
            })
            class_41_poster.addEventListener("click", function(event) {
                toDetailPage(id);
            })
            N4++;
        } else if (N4 == 1) {
            class_03_title.innerHTML = name;
            class_03_score.innerHTML = "★" + vote;
            class_03_poster.src = poster;
            class_03_title.addEventListener("click", function(event) {
                toDetailPage(id);
            })
            class_03_poster.addEventListener("click", function(event) {
                toDetailPage(id);
            })
            class_42_title.innerHTML = name;
            class_42_score.innerHTML = "★" + vote;
            class_42_poster.src = poster;
            class_42_title.addEventListener("click", function(event) {
                toDetailPage(id);
            })
            class_42_poster.addEventListener("click", function(event) {
                toDetailPage(id);
            })
            N4++;
        } else if (N4 == 2) {
            class_43_title.innerHTML = name;
            class_43_score.innerHTML = "★" + vote;
            class_43_poster.src = poster;
            class_43_title.addEventListener("click", function(event) {
                toDetailPage(id);
            })
            class_43_poster.addEventListener("click", function(event) {
                toDetailPage(id);
            })
            N4 = 10;
        }
    } else if (Genre == 878 && N5 < 3) {
        if (N5 == 0) {


            class_51_title.innerHTML = name;
            class_51_score.innerHTML = "★" + vote;
            class_51_poster.src = poster;
            class_51_title.addEventListener("click", function(event) {
                toDetailPage(id);
            })
            class_51_poster.addEventListener("click", function(event) {
                toDetailPage(id);
            })
            N5++;
        } else if (N5 == 1) {
            class_52_title.innerHTML = name;
            class_52_score.innerHTML = "★" + vote;
            class_52_poster.src = poster;
            class_52_title.addEventListener("click", function(event) {
                toDetailPage(id);
            })
            class_52_poster.addEventListener("click", function(event) {
                toDetailPage(id);
            })
            N5++;
        } else if (N5 == 2) {
            class_53_title.innerHTML = name;
            class_53_score.innerHTML = "★" + vote;
            class_53_poster.src = poster;
            class_53_title.addEventListener("click", function(event) {
                toDetailPage(id);
            })
            class_53_poster.addEventListener("click", function(event) {
                toDetailPage(id);
            })
            N5 = 10;
        }
    }

}

//用來呈現推薦的電影
function recommendResult(source, id, poster, name, vote) {

    //設定電影的相關資訊

    if (R == 0) {
        recom_title_1.innerHTML = name;
        recom_photo_1.src = poster;
        recom_score_1.innerHTML = vote;
        var score1 = document.createElement("br");
        recom_score_1.appendChild(score1);
        var i;

        for (i = 2; i <= vote; i = i + 2) {
            var score = document.createElement("img");
            score.src = "star.png";
            score.title = vote;
            recom_score_1.appendChild(score);
        }
        recom_title_1.addEventListener("click", function(event) {
            toDetailPage(id);
        })
        recom_photo_1.addEventListener("click", function(event) {
            toDetailPage(id);
        })

        R = 1;
    } else {
        recom_title_2.innerHTML = name;
        recom_photo_2.src = poster;
        recom_score_2.innerHTML = vote;
        var score2 = document.createElement("br");
        recom_score_2.appendChild(score2);
        var i;

        for (i = 2; i <= vote; i = i + 2) {
            var score = document.createElement("img");
            score.src = "star.png";
            score.title = vote;
            recom_score_2.appendChild(score);
        }
        recom_title_2.addEventListener("click", function(event) {
            toDetailPage(id);
        })
        recom_photo_2.addEventListener("click", function(event) {
            toDetailPage(id);
        })
    }

}

//用來呈現常見搜尋標籤的關鍵字的部分
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


function search(e) {
    e.preventDefault();

    //tag的部分
    makeTagRequest(false, false, false, false, false);

    //	類別的部分
    //	makeCRequest(false,878);
    //	makeCRequest(false,28);
    //	makeCRequest(false,16);
    makeCRequest(false, 35);
    makeCRequest(false, 10749);
    //	
    //推薦的部分
    makeRRequest(false);
    makeRRequest(false);

}
//function search2(e){
//	window.location.href="detail.html?value="+132;
//}
//

var apiKeyT = "5b1d1862f3117ce9288a7827c833aaa8";
//以下是
var movieurl = "https://api.themoviedb.org/3/movie/";
var movieurl2 = "?api_key=" + apiKeyT;
var movieId = 0;

//處理推薦
function makeRRequest(success) {
    var ID = getRandom(3500);

    if (success == false) {
        var xhra = new XMLHttpRequest();
        xhra.onload = function() {
            var response = JSON.parse(this.responseText);
            if (response.status_code == 34) {
                makeRRequest(false);

            } else {
                movieId = ID;
                makeRRequest(true);
            }

        }
        xhra.open("GET", movieurl + ID + movieurl2, true);
        xhra.send();
    } else {
        var xhrb = new XMLHttpRequest();
        xhrb.onload = function() {
            var response = JSON.parse(this.responseText);

            recommendResult(
                "tmdb",
                response.id,
                "https://image.tmdb.org/t/p/w300/" + response.poster_path,
                response.title,
                response.vote_average
            );
        };

        xhrb.open("GET", movieurl + movieId + movieurl2, true);
        xhrb.send();
    }


}

var movieId_class = 132;

function makeCRequest(success, Genre) {
    if (N1 < 3 || N2 < 3 || N3 < 3 || N4 < 3 || N5 < 3) {
        var ID = getRandom(3500);
        if (success == false) {

            var xhrm = new XMLHttpRequest();
            xhrm.onload = function() {
                var response = JSON.parse(this.responseText);

                if (response.status_code == 34) {

                    makeCRequest(false, Genre);

                } else {
                    movieId_class = ID;
                    makeCRequest(true, Genre);
                }

            }
            xhrm.open("GET", movieurl + ID + movieurl2, true);
            xhrm.send();
        } else {
            var xhra = new XMLHttpRequest();
            xhra.onload = function() {
                var response = JSON.parse(this.responseText);
                var responst = JSON.parse(this.responseText).genres;
                responst.map(function(item) {
                    var n = 0;
                    if (item.id == Genre) {
                        if (Genre == 28 && N1 < 3) {
                            n = N1;
                        } else if (Genre == 878 && N5 < 3) {
                            n = N5;
                        } else if (Genre == 16 && N2 < 3) {
                            n = N2;
                        } else if (Genre == 35 && N3 < 3) {
                            n = N3;
                        } else if (Genre == 10749 && N4 < 3) {
                            n = N4;
                        }

                        classResult(
                            "tmdb",
                            response.id,
                            "https://image.tmdb.org/t/p/w300/" + response.poster_path,
                            response.title,
                            response.release_date,
                            response.overview,
                            response.vote_average,
                            n,
                            Genre
                        );




                    } else {
                        makeCRequest(false, Genre);
                    }

                });
            }
            xhra.open("GET", movieurl + movieId_class + movieurl2, true);
            xhra.send();
        }
    }
}

//tag抓資料的部分
var urlT = "https://api.themoviedb.org/3/search/movie?api_key=" + apiKeyT + "&query=";
var url = "https://api.themoviedb.org/3/keyword/";
var url2 = "?api_key=";
//https://api.themoviedb.org/3/keyword/{keyword_id}?api_key=5b1d1862f3117ce9288a7827c833aaa8
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

window.addEventListener("DOMContentLoaded", search);
//form.addEventListener("submit", search1);