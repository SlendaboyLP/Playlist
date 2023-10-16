document.addEventListener("DOMContentLoaded", function () {
    const playlist = document.getElementById("playlist");
    const addSongForm = document.getElementById("addSongForm");



    var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            
            const playlistData = JSON.parse(xhttp.responseText);
            playlistData.forEach(song => {
                const listItem = document.createElement("li");
                listItem.innerHTML = `<strong>${song.songTitle}</strong> von ${song.artist}, Album: ${song.album}`;
                playlist.appendChild(listItem);
            })
            }
        };
        xhttp.open("GET", "playlist.json", true);
        xhttp.send();


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