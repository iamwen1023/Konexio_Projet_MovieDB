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
    $.ajax({
        url: link,
        success: function(data) {
            console.log("data", data);
            $("#film_background").css({
                backgroundImage: "url(https://image.tmdb.org/t/p/original" + data.backdrop_path +
                    ")",
                backgroundSize: "cover"
            });
            $("#poster").append('<img src=https://image.tmdb.org/t/p/w500' + data.poster_path + ' alt="Movie poster">');
            $("#film_detail").append('<h2>' + data.original_title + '</h2>' + '<h3> Synopsis</h3>');
            $("#film_detail").append('<h5>' + data.overview + '</h5>');
            link = "https://api.themoviedb.org/3/movie/" + data.id + "/credits?api_key=b8e16ff25f44004fe2ab5dedc9e0453e";
            $.ajax({
                url: link,
                success: function(results) {
                    results.cast.forEach(element => {
                        $(".acter_picture").append('<img src=https://image.tmdb.org/t/p/w500' + element.profile_path + 'alt="photo of this acter/actrise">');
                        $(".acter_content").append('<h6>' + element.name + '</h6>');
                    });
                }

            });

        }
    });


    console.log("filmId", filmId);


});