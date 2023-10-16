document.addEventListener("DOMContentLoaded", function () {
    const playlist = document.getElementById("playlist");
    const addSongForm = document.getElementById("addSongForm");

    // Funktion zum Laden der Playlist-Daten
    function loadPlaylist() {
        fetch("playlist.json")
            .then((response) => response.json())
            .then((data) => {
                data.forEach((song) => {
                    const listItem = document.createElement("li");
                    listItem.innerHTML = `<strong>${song.songTitle}</strong> von ${song.artist}, Album: ${song.album}`;
                    playlist.appendChild(listItem);
                });
            })
            .catch((error) => {
                console.error("Fehler beim Laden der Playlist: " + error);
            });
    }

    loadPlaylist();

    // Funktion zum Hinzufügen eines neuen Songs zur Playlist
    addSongForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const songTitleInput = document.getElementById("songTitle");
        const artistInput = document.getElementById("artist");
        const albumInput = document.getElementById("album");

        const newSong = {
            songTitle: songTitleInput.value,
            artist: artistInput.value,
            album: albumInput.value
        };

        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${newSong.songTitle}</strong> von ${newSong.artist}, Album: ${newSong.album}`;
        playlist.appendChild(listItem);

        // Hier könntest du den neuen Song auch zur JSON-Datei hinzufügen und speichern.

        songTitleInput.value = "";
        artistInput.value = "";
        albumInput.value = "";
    });
});