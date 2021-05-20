function getUrlVars() {
    var vars = [],
        hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    console.log(vars);
    return vars;
}
$(function() {
    const queryparmas = getUrlVars();
    const filmId = queryparmas["filmId"];
    if (!filmId) {
        $(".film").html("<h2>error!<h2>");
        return;
    }
    let link = "https://api.themoviedb.org/3/movie/" + filmId + "?api_key=b8e16ff25f44004fe2ab5dedc9e0453e";
    let genres_film = "";
    let hour, minute;
    $.ajax({
        url: link,
        success: function(data) {
            console.log("data", data);
            $(".container").append('<img src=https://image.tmdb.org/t/p/original' + data.backdrop_path + '>');
            $("#poster").append('<img src=https://image.tmdb.org/t/p/w500' + data.poster_path + ' alt="Movie poster">');
            $("#film_detail").append('<h2>' + data.title + '</h2>');
            data.genres.forEach(element => {
                genres_film += element.name + ", ";
            });
            hour = Math.floor(data.runtime / 60);
            minute = data.runtime % 60;
            $("#film_detail").append('<p>' + data.release_date + ", " + genres_film + " " + hour + "h " + minute + 'm</p>');
            $("#film_detail").append('<h4>Synopsis</h4><h5>' + data.overview + '</h5>');
            $(".right_column").append('<p class="title">Titre d\'origine </p><p class="text">' + data.original_title + '</p><br />');
            $(".right_column").append('<p class="title">Statut</p><p class="text">' + data.status + '</p><br />');
            $(".right_column").append('<p class="title">Langue d\'origine</p><p class="text">' + data.original_language + '</p><br />');
            $(".right_column").append('<p class="title">Budget</p><p class="text">$' + data.budget + '</p><br />');
            $(".right_column").append('<p class="title">Recette</p><p class="text">$' + data.revenue + '</p><br />');


            link = "https://api.themoviedb.org/3/movie/" + data.id + "/credits?api_key=b8e16ff25f44004fe2ab5dedc9e0453e";
            let linkProfil;
            $.ajax({
                url: link,
                success: function(results) {
                    console.log(results);
                    $(".actors").before('<h4>Top Billed Cast</h4>');
                    results.cast.forEach(element => {
                        if (!element.profile_path) {
                            linkProfil = "../photo_profile.png";
                        } else {
                            linkProfil = "https://image.tmdb.org/t/p/w500" + element.profile_path;
                        }
                        $(".actors").append('<a style="display:block" href="artist.html?artistId=' + element.id + '"><div class="box"><div><img src="' + linkProfil + '" alt="Actor photo"></div><div><p class="realname">' + element.name + '</p><p >' + element.character + '</p> </div></div></a>');
                    });
                }
            });
            let linkmedia = "https://api.themoviedb.org/3/movie/" + data.id + "/videos?api_key=b8e16ff25f44004fe2ab5dedc9e0453e";
            $.ajax({
                url: linkmedia,
                success: function(results) {
                    //console.log("media", results);
                    $(".media").append('<div><h4>Media</h4></div>');
                    results.results.forEach(element => {
                        console.log(element.key);
                        $(".media").append('<iframe src="https://www.youtube.com/embed/' + element.key + '" frameborder="1" allowfullscreen></iframe>');
                    });
                }
            });
            let linkRecommandation = "https://api.themoviedb.org/3/movie/" + data.id + "/recommendations?api_key=b8e16ff25f44004fe2ab5dedc9e0453e";
            let linkRecomanded;
            $.ajax({
                url: linkRecommandation,
                success: function(results) {
                    console.log("linkrecommandation", results);
                    $(".media").append('<div><h4>Recommendations</h4></div>');
                    results.results.forEach(element => {
                        if (element.poster_path) {
                            linkRecomanded = "https://image.tmdb.org/t/p/w500" + element.poster_path;
                            $(".movierecomandation").append('<a class="box" href="film.html?filmId=' + element.id + '"><img src="https://image.tmdb.org/t/p/w500' + linkRecomanded + '"></a>');
                        }

                    });

                }
            });

        }
    });



});