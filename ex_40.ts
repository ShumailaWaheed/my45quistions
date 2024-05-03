function makeAlbum(artist: string, title: string, tracks?: number) {
    let album: { artist: string, title: string, tracks?: number } = { artist, title };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}

console.log(makeAlbum("Atif Aslam", "Jal Pari"));
console.log(makeAlbum("Noori", "Sunno"));
console.log(makeAlbum("Strings", "Dhaani", 10));
