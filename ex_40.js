function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
// Creating album objects
var album1 = make_album("Nusrat Fateh Ali Khan", "The Legend", 10);
var album2 = make_album("Junoon", "Azadi");
var album3 = make_album("Atif Aslam", "Doorie", 12);
// Printing album information
console.log(album1);
console.log(album2);
console.log(album3);
