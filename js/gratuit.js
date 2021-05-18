const URL_GRATUIT="https://api.themoviedb.org/3/discover/movie?api_key=b8e16ff25f44004fe2ab5dedc9e0453e&language=en-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=free";
const URL_GRATUIT_TV="https://api.themoviedb.org/3/trending/all/day?api_key=b8e16ff25f44004fe2ab5dedc9e0453e&language=en-US&page=4";
$(function () {
    $.ajax({
        method: "GET",
        url: URL_GRATUIT,
        success: function (data, statuts, response) {
            console.log("movies-gratuits", data.results);
            let moviesGratuits = data.results;
            moviesGratuits.forEach(function (element) {
                let moviesToAdd = `<a href="film.html?filmId=${element.id}" class="movie-item"> <img src="${URL_IMAGE_PREFIX + element.poster_path}"> <div id="flexbox"><div class="change"> ${element.original_title}  </div> <p> ${element.release_date}</p> </div> </a>`;
                $(".scrollside-free-movies").append(moviesToAdd);
            });
        },
    });
    $(".tv").click(function () {
        $(".scrollside-free-movies").empty();
        $.ajax({
            url:  URL_GRATUIT_TV,
            success: function (data, statuts, response) {
                console.log("movies-gratuits", data.results);
                let moviesGratuits = data.results;
                moviesGratuits.forEach(function (element) {
                    let moviesToAdd = `<a href="#" class="movie-item"><img src="${URL_IMAGE_PREFIX + element.poster_path}"> <div><div> "${element.original_title}"  </div> <p> "${element.release_date}"</> </div ></a>`;
                    $(".scrollside-free-tv").append(moviesToAdd);
                });
            },
        });
    });
    $(".movies").click(function () {
        //$(".scrollmenu-tendance-week").hide();
        $(".scrollside-free-tv").empty();
        $.ajax({
            url:  URL_GRATUIT,
            success: function (data, statuts, response) {
                console.log("movies-gratuits", data.results);
                let moviesGratuits = data.results;
                moviesGratuits.forEach(function (element) {
                    let moviesToAdd = `<a href="#" class="movie-item"><img img src="${URL_IMAGE_PREFIX + element.poster_path}"> <div><div> ${element.original_title}  </div> <p> ${element.release_date}</> </div ></a>`;
                    $(".scrollside-free-movies").append(moviesToAdd);
                });
            },
        });
        //$(".scrollmenu-tendance-day").show();
    });
});