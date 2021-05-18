const URL_YOUTUBE = "https://www.youtube.com/embed/";
const URL_TRAILERS1 = "https://api.themoviedb.org/3/movie/35/videos?api_key=b8e16ff25f44004fe2ab5dedc9e0453e&language=en-US";
const URL_TRAILERS2 = "https://api.themoviedb.org/3/movie/28/videos?api_key=b8e16ff25f44004fe2ab5dedc9e0453e&language=en-US";
const URL_TRAILERS3 = "https://api.themoviedb.org/3/movie/16/videos?api_key=b8e16ff25f44004fe2ab5dedc9e0453e&language=en-US";
const URL_TRAILERS4 = "https://api.themoviedb.org/3/movie/12/videos?api_key=b8e16ff25f44004fe2ab5dedc9e0453e&language=en-US";
const URL_TRAILERS5 = "https://api.themoviedb.org/3/movie/80/videos?api_key=b8e16ff25f44004fe2ab5dedc9e0453e&language=en-US";
const URL_TRAILERS6 = "https://api.themoviedb.org/3/movie/99/videos?api_key=b8e16ff25f44004fe2ab5dedc9e0453e&language=en-US";
const URL_TRAILERS7 = "https://api.themoviedb.org/3/movie/18/videos?api_key=b8e16ff25f44004fe2ab5dedc9e0453e&language=en-US";
const URL_TRAILERS8 = "https://api.themoviedb.org/3/movie/10751/videos?api_key=b8e16ff25f44004fe2ab5dedc9e0453e&language=en-US";
const URL_TRAILERS9 = "https://api.themoviedb.org/3/movie/10749/videos?api_key=b8e16ff25f44004fe2ab5dedc9e0453e&language=en-US";

$(function () {
    $.ajax({
        url: URL_TRAILERS1,
        success: function (data, status, response) {
            console.log("films-trailers", data);
            let filmstrailers = data.results;
            filmstrailers.forEach(element => {
                let addBack = `<a href="#" class="movie-item"><iframe src="${URL_YOUTUBE + element.key} frameborder="1" allowfullscreen></iframe><div><div> ${element.name}  </div> <p> ${element.site}</p> <p> ${element.type}</p> </div ></a>`;
                $(".scrollside-trailers").append(addBack);
            });
        },
    });
    $.ajax({
        url: URL_TRAILERS9,
        success: function (data, status, response) {
            console.log("films-trailers", data);
            let filmstrailers = data.results;
            filmstrailers.forEach(element => {
                let addBack = `<a href="#" class="movie-item"><iframe src="${URL_YOUTUBE + element.key}frameborder="1" allowfullscreen></iframe><div><div> ${element.name}  </div> <p> ${element.site}</p> <p> ${element.type}</p> </div ></a>`;
                $(".scrollside-trailers").append(addBack);
            });
        },
    });
    $.ajax({
        url: URL_TRAILERS8,
        success: function (data, status, response) {
            console.log("films-trailers", data);
            let filmstrailers = data.results;
            filmstrailers.forEach(element => {
                let addBack = `<a href="#" class="movie-item"><iframe src="${URL_YOUTUBE + element.key}"frameborder="1" allowfullscreen></iframe><div><div> ${element.name}  </div> <p> ${element.site}</p> <p> ${element.type}</p> </div ></a>`;
                $(".scrollside-trailers").append(addBack);
            });
        },
    });
    $.ajax({
        url: URL_TRAILERS7,
        success: function (data, status, response) {
            console.log("films-trailers", data);
            let filmstrailers = data.results;
            filmstrailers.forEach(element => {
                let addBack = `<a href="#" class="movie-item"><iframe src="${URL_YOUTUBE + element.key}"frameborder="1" allowfullscreen></iframe><div><div> ${element.name}  </div> <p> ${element.site}</p> <p> ${element.type}</p> </div ></a>`;
                $(".scrollside-trailers").append(addBack);
            });
        },
    });
    $.ajax({
        url: URL_TRAILERS6,
        success: function (data, status, response) {
            console.log("films-trailers", data);
            let filmstrailers = data.results;
            filmstrailers.forEach(element => {
                let addBack = `<a href="#" class="movie-item"><iframe src="${URL_YOUTUBE + element.key}"frameborder="1" allowfullscreen></iframe><div><div> ${element.name}  </div> <p> ${element.site}</p> <p> ${element.type}</p> </div ></a>`;
                $(".scrollside-trailers").append(addBack);
            });
        },
    });
    $.ajax({
        url: URL_TRAILERS5,
        success: function (data, status, response) {
            console.log("films-trailers", data);
            let filmstrailers = data.results;
            filmstrailers.forEach(element => {
                let addBack = `<a href="#" class="movie-item"><iframe src="${URL_YOUTUBE + element.key}"frameborder="1" allowfullscreen></iframe><div><div> ${element.name}  </div> <p> ${element.site}</p> <p> ${element.type}</p> </div ></a>`;
                $(".scrollside-trailers").append(addBack);
            });
        },
    });
    $.ajax({
        url: URL_TRAILERS4,
        success: function (data, status, response) {
            console.log("films-trailers", data);
            let filmstrailers = data.results;
            filmstrailers.forEach(element => {
                let addBack = `<a href="#" class="movie-item"><iframe src="${URL_YOUTUBE + element.key}"frameborder="1" allowfullscreen></iframe><div><div> ${element.name}  </div> <p> ${element.site}</p> <p> ${element.type}</p> </div ></a>`;
                $(".scrollside-trailers").append(addBack);
            });
        },
    });
    $.ajax({
        url: URL_TRAILERS3,
        success: function (data, status, response) {
            console.log("films-trailers", data);
            let filmstrailers = data.results;
            filmstrailers.forEach(element => {
                let addBack = `<a href="#" class="movie-item"><iframe src="${URL_YOUTUBE + element.key}"frameborder="1" allowfullscreen></iframe><div><div> ${element.name}  </div> <p> ${element.site}</p> <p> ${element.type}</p> </div ></a>`;
                $(".scrollside-trailers").append(addBack);
            });
        },
    });
    $.ajax({
        url: URL_TRAILERS2,
        success: function (data, status, response) {
            console.log("films-trailers", data);
            let filmstrailers = data.results;
            filmstrailers.forEach(element => {
                let addBack = `<a href="#" class="movie-item"><iframe src="${URL_YOUTUBE + element.key}"frameborder="1" allowfullscreen></iframe><div><div> ${element.name}  </div> <p> ${element.site}</p> <p> ${element.type}</p> </div ></a>`;
                $(".scrollside-trailers").append(addBack);
            });
        },
    });
    

});