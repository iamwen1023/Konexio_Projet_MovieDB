const URL_TENDANCE_FILM = "https://api.themoviedb.org/3/trending/all/day?api_key=b8e16ff25f44004fe2ab5dedc9e0453e&language=en-US&page=1";
const URL_TENDANCE_FILM_WEEK = " https://api.themoviedb.org/3/trending/all/week?api_key=b8e16ff25f44004fe2ab5dedc9e0453e&language=en-US&page=1"
$(function () {
    $.ajax({
        method: "GET",
        url: URL_TENDANCE_FILM,
        success: function (data, statuts, response) {
            console.log("movies-tendance", data.results);
            let moviesTendance = data.results;
            moviesTendance.forEach(function (element) {
                let moviesTendanceToAdd = `<a href="film.html?filmId=${element.id}" class="movie-item"> <img src="${URL_IMAGE_PREFIX + element.poster_path}"> <div id="flexbox"><div class="change"> ${element.original_title}  </div> <p> ${element.release_date}</p> </div> </a>`;
                $(".scrollmenu-tendance-day").append(moviesTendanceToAdd);
            });
        },
    });
    $(".week").click(function () {
        $(".scrollmenu-tendance-day").empty();
        $.ajax({
            url: URL_TENDANCE_FILM_WEEK,
            success: function (data, statuts, response) {
                console.log("movies-tendance", data.results);
                let moviesTendance = data.results;
                moviesTendance.forEach(function (element) {
                    let moviesTendanceToAdd = `<a href="#" class="movie-item"><img src="${URL_IMAGE_PREFIX + element.poster_path}"> <div><div> "${element.original_title}"  </div> <p> "${element.release_date}"</> </div ></a>`;
                    $(".scrollmenu-tendance-week").append(moviesTendanceToAdd);
                });
            },
        });
    });
    $(".day").click(function () {
        //$(".scrollmenu-tendance-week").hide();
        $(".scrollmenu-tendance-week").empty();
        $.ajax({
            url: URL_TENDANCE_FILM,
            success: function (data, statuts, response) {
                console.log("movies-tendance", data.results);
                let moviesTendance = data.results;
                moviesTendance.forEach(function (element) {
                    let moviesTendanceToAdd = `<a href="#" class="movie-item"><img img src="${URL_IMAGE_PREFIX + element.poster_path}"> <div><div> ${element.original_title}  </div> <p> ${element.release_date}</> </div ></a>`;
                    $(".scrollmenu-tendance-day").append(moviesTendanceToAdd);
                });
            },
        });
        //$(".scrollmenu-tendance-day").show();
    });
});