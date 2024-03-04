function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    const album: { artist: string, title: string, tracks?: number } = {
        artist: artist,
        title: title
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}

// Creating album objects
const album1 = make_album("Nusrat Fateh Ali Khan", "The Legend", 10);
const album2 = make_album("Junoon", "Azadi");
const album3 = make_album("Atif Aslam", "Doorie", 12);

// Printing album information
console.log(album1);
console.log(album2);
console.log(album3);