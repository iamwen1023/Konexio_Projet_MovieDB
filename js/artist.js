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
    const artistId = queryparmas["artistId"];
    if (!artistId) {
        $(".film").html("<h2>error!<h2>");
        return;
    }
    let link = "https://api.themoviedb.org/3/person/" + artistId + "?api_key=b8e16ff25f44004fe2ab5dedc9e0453e";
    let sex;
    $.ajax({
        url: link,
        success: function(data) {
            console.log(data);
            if (!data.profile_path) {
                linkProfil = "../photo_profile.png";
            } else {
                linkProfil = "https://image.tmdb.org/t/p/w500" + data.profile_path;
            }
            if (data.gender == 1) {
                sex = "Female";
            } else if (data.gender == 2) {
                sex = "Male";
            } else {
                sex = "Unknown";
            }
            data.also_known_as.forEach(element => {
                console.log(element);
            });

            $(".left_column").append('<div><img src="' + linkProfil + '" alt="Actor photo"></div>');
            $(".left_column").append('<h5>Informations personnelles<h5>');
            $(".left_column").append('<p class="title">Famous for</p><p>' + data.known_for_department + '</p>');
            $(".left_column").append('<p class="title">Gender</p><p>' + sex + '</p>');
            $(".left_column").append('<p class="title">Birthday</p><p>' + data.birthday + '</p>');
            $(".left_column").append('<p class="title">Place of birth</p><p>' + data.place_of_birth + '</p>');
            $(".left_column").append('<p class="title">Also known as</p>');
            data.also_known_as.forEach(element => {
                $(".left_column").append('<p>' + element + '</p>');
            });
            $(".right_column").append('<h3>' + data.name + '</h3><h5>Biographie</h5>');
            $(".right_column").append('<p>' + data.biography + '</p>');
            $(".right_column").append('<h5>Famous for</h5>');

        }


    });

});