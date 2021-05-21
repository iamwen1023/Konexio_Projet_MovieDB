function getUrlVars() {
    var vars = [],
        hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

const URL_API_KEY = "b8e16ff25f44004fe2ab5dedc9e0453e";
const URL_API_MOVIE_SEARCH = "https://api.themoviedb.org/3/search/movie/";
const URL_IMAGE_PREFIX = "https://image.tmdb.org/t/p/w200";
$(function() {
    $searchInput = $("#search-input");
    $searchButton = $("#boutton");
    $resultsList = $(".results-list");
    $errorInputEmpty = $(".input-empty");
    $errorFilmNotFound = $(".film-not-found");
    $pagination = $("#pagination");



    let displayMovies = function(movies) {
        let movieToDisplay = "";
        console.log("movies", movies);
        movies.forEach((movie) => {
            movieToDisplay += '<a href="film.html?filmId=' + movie.id + '"><div class="row"><div class="col-8 class1">';
            movieToDisplay += movie.original_title ? `<h3>${movie.original_title}</h3>` : " ";
            movieToDisplay += movie.release_date ? `<p class="p1"><strong>Date de sortie</strong> : ${movie.release_date} </p>` : "";
            movieToDisplay += movie.overview ? `<p class="synopsis"><strong>Synopsis</strong> : ${movie.overview} </p>` : "";
            movieToDisplay += `</div>`;
            movieToDisplay += `<div class="col-4">`;
            movieToDisplay += movie.poster_path ? `<img src="${URL_IMAGE_PREFIX + movie.poster_path}" alt="image-${movie.id}">` : "";
            movieToDisplay += `</div>`;
            movieToDisplay += `</div></a>`;
        });
        $resultsList.append(movieToDisplay);
        return;
    };

    let ajaxCall = function(urlWithQuery) {
        $.ajax({
            url: urlWithQuery,
            success: function(data) {
                $resultsList.empty();
                let movies = data.results;
                if (movies.length === 0) {

                    $errorInputEmpty.addClass("d-none");

                    $errorFilmNotFound.removeClass("d-none");

                    return;
                }

                displayMovies(movies);
                displayPagination(data.page, data.total_pages);
            },
        });
    }
    let queryParams = getUrlVars();
    let query = queryParams["query"];
    let page = queryParams["page"] || "1";
    if (!query) {
        $errorFilmNotFound.addClass("d-none");

        $errorInputEmpty.removeClass("d-none");
        $errorInputEmpty.addClass("d-block");
        console.log("noQuery")

    } else {
        console.log("page", page)
        ajaxCall(URL_API_MOVIE_SEARCH + `?query=${ queryParams["query"]}&api_key=${URL_API_KEY}&page=${page}`)
    }

    let onClickChangePage = function(event) {

        let page = event.target.id.substr(5);
        let movieSearched = $searchInput.val();
        let urlWithQuery = `${URL_API_MOVIE_SEARCH}?api_key=${URL_API_KEY}&query=${movieSearched}&language=fr-FR&page=${page}`;
        ajaxCall(urlWithQuery);
    };
    let displayPagination = function(currentPage, totalPages) {
        let paginationToDisplay = "";
        if (totalPages <= 1) {
            return;
        }
        if (totalPages > 1) {
            $pagination.empty();
            paginationToDisplay += `<nav aria-label="Page navigation example">
                              <ul class="pagination">`
            paginationToDisplay += currentPage > 1 ? `<li class="page-item"><a class="page-link" href="" id="page-${currentPage - 1}">Previous</a></li>` : '';
            if (totalPages <= 10) {
                for (let i = 1; i <= totalPages; i++) {
                    paginationToDisplay += `<li class="page-item">
                                  <a class="page-link ${i === currentPage ? 'current' : ''}" href="./index2.html?query=${query}&page=${i}" id="page-${i}">${i}</a>
                                  </li>`
                }
            } else {
                let initialI = Math.max(1, currentPage - 5)
                let endI = Math.min(initialI + 9, totalPages);
                for (let i = initialI; i <= endI; i++) {
                    paginationToDisplay += `<li class="page-item">
                                  <a class="page-link ${i === currentPage ? 'current' : ''}" href="./index2.html?query=${query}&page=${i}" id="page-${i}">${i}</a>
                                  </li>`
                }
            }
            console.log(currentPage, totalPages);
            paginationToDisplay += currentPage === totalPages ? '' : `<li class="page-item"><a class="page-link" href="#" id="page-${currentPage + 1}">Next</a></li>`;
            paginationToDisplay += `</ul>
                              </nav>`;
            $pagination.append(paginationToDisplay);
            $(".page-link").click(onClickChangePage);
        }
        return;
    }


    // let onClickFunction = function () {
    //     let movieSearched = $searchInput.val();
    //     let urlWithQuery = `${URL_API_MOVIE_SEARCH}?api_key=${URL_API_KEY}&query=${movieSearched}&language=fr-FR`;

    //     if (!movieSearched) {

    //         $errorFilmNotFound.addClass("d-none");

    //         $errorInputEmpty.removeClass("d-none");

    //         return;
    //     }
    //     ajaxCall(urlWithQuery);
    // };
    // $searchButton.click(onClickFunction);
});