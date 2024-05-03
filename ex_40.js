function makeAlbum(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
console.log(makeAlbum("Atif Aslam", "Jal Pari"));
console.log(makeAlbum("Noori", "Sunno"));
console.log(makeAlbum("Strings", "Dhaani", 10));
