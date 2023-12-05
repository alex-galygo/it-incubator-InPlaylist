// InPlaylist: lesson-1/playlist.js

// Data
let title = 'My Playlists';

const playlist = {
    id: 1,
    type: 'Playlist',
    name: 'Hip-Hop Hits',
    count_songs: 4,
    duration: 12.13,
    authors: ['Eminem', '50cent', 'Lloyd Banks'],
    songs: [
        {
            id: 1,
            name: 'Eminem',
            author: 'Rap God',
            duration: 3.41,
            src: 'https://tonuz.net/uploads/music/2023/10/Eminem_Rap_God.mp3'
        },
        {
            id: 2,
            name: 'In da Club',
            author: '50 cent',
            duration: 4.31,
            src: 'https://muzfan.net/uploads/files/2020-07/1594719752_50-cent-in-da-club.mp3'
        },
    ]
}

// Render

let pageTitleElement = document.createElement('h1');
pageTitleElement.innerText = title;
document.body.append(pageTitleElement);

function renderPlaylist(playlistForRendering) {
    let playlistElement = document.createElement('div');
    playlistElement.style.border = '1px solid black';
    playlistElement.style.padding = '10px';
    playlistElement.style.margin = '10px';
    document.body.append(playlistElement);

    let playlistImageElement = document.createElement('img');
    playlistImageElement.src = 'Rectangle 101.png';
    playlistElement.append(playlistImageElement);

    let playlistTypeElement = document.createElement('h3');
    playlistTypeElement.innerText = playlistForRendering.type;
    playlistElement.append(playlistTypeElement);

    let playlistNameElement = document.createElement('h2');
    playlistNameElement.innerText = playlistForRendering.name;
    playlistElement.append(playlistNameElement);

    let playlistCountSongsElement = document.createElement('h3');
    playlistCountSongsElement.innerText = playlistForRendering.count_songs + ' tracks'
    playlistElement.append(playlistCountSongsElement);

    let playlistDurationElement = document.createElement('h3');
    playlistDurationElement.innerText = playlistForRendering.duration + ' min';
    playlistElement.append(playlistDurationElement);

    let playlistAuthorsElement = document.createElement('h3');
    playlistDurationElement.innerText = playlistForRendering.authors.join(', ') + ' and others';
    playlistElement.append(playlistAuthorsElement);

    let playlistSongsElement = document.createElement('ul');
    playlistElement.append(playlistSongsElement);

    for (let i = 0; i < playlistForRendering.songs.length; i++) {
        let song = playlistForRendering.songs[i];
        let songElement = document.createElement('li');
        songElement.innerText = song.name + ' - ' + song.author;
        playlistSongsElement.append(songElement);

        let playerElement = document.createElement('audio');
        playerElement.controls = true;
        playerElement.src = song.src;
        songElement.append(playerElement);
    }
}

renderPlaylist(playlist);







