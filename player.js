// InPlaylist: lesson-1/playlist.js

// Data
let title = 'My Playlists';

const playlist1 = {
    type: 'Playlist',
    playlist_crc: 'assets/images/playlist-1-logo.png',
    name: 'Hip-Hop Hits',
    count_songs: 4,
    duration_all: 12.13,
    authors: ['Eminem', '50cent', 'Lloyd Banks'],
    songs: [
        {
            cover_image: 'assets/images/eminem.png',
            name: 'Eminem',
            author: 'Rap God',
            src: 'https://tonuz.net/uploads/music/2023/10/Eminem_Rap_God.mp3'
        },
        {
            cover_image: 'assets/images/50-cent.png',
            name: 'In da Club',
            author: '50 cent',
            src: 'https://muzfan.net/uploads/files/2020-07/1594719752_50-cent-in-da-club.mp3'
        },
        {
            cover_image: 'assets/images/dmx.png',
            name: 'X Gon\' Give It To Ya',
            author: 'DMX',
            src: 'https://cdn.muzonchek.ru/files/music/3026/DMX-feat-The-xx_-_XX-Gon-Give-It-To-Ya.mp3'
        },
        {
            cover_image: 'assets/images/lyud.png',
            name: 'You Don\'t Know',
            author: 'Eminem feat 50 Cent, Cashis, Lloyd Banks',
            src: 'https://cdn.muzonchek.ru/files/music/67784/Eminem-50-Cent-Cashis-Lloyd-Banks_-_You-Dont-Know.mp3'
        },
    ]
}

const playlist2 = {
    type: 'Playlist',
    playlist_crc: 'assets/images/playlist-2-logo.png',
    name: 'Rap Hits 1990s',
    count_songs: 4,
    duration_all: 12.13,
    authors: ['Public Enemy', 'Vanila Ice', 'MC Hammer'],
    songs: [
        {
            cover_image: 'assets/images/public-enemy.png',
            name: 'Fight the Power',
            author: 'Public Enemy',
            src: 'https://tonuz.net/uploads/music/2023/10/Eminem_Rap_God.mp3'
        },
        {
            cover_image: 'assets/images/vanila-ice.png',
            name: 'Ice Ice Baby',
            author: 'Vanila Ice',
            src: 'https://muzfan.net/uploads/files/2020-07/1594719752_50-cent-in-da-club.mp3'
        },
        {
            cover_image: 'assets/images/Hammer.png',
            name: 'You Can’t Touch This',
            author: 'MC Hammer',
            src: 'https://cdn.muzonchek.ru/files/music/3026/DMX-feat-The-xx_-_XX-Gon-Give-It-To-Ya.mp3'
        },
        {
            cover_image: 'assets/images/brand-nubian.png',
            name: 'Brand Nubian',
            author: 'Brand Nubian',
            src: 'https://cdn.muzonchek.ru/files/music/67784/Eminem-50-Cent-Cashis-Lloyd-Banks_-_You-Dont-Know.mp3'
        },
    ]
}


// Render

let pageTitleElement = document.createElement('h1');
pageTitleElement.innerText = title;
document.body.append(pageTitleElement);

let playlistElement = document.createElement('div');
playlistElement.style.border = '1px solid black';
playlistElement.style.padding = '10px';
playlistElement.style.margin = '10px';
document.body.append(playlistElement);

function renderPlaylistHeader(inputPlaylistForRendering) {

    let playlistImageElement = document.createElement('img');
    playlistImageElement.src = inputPlaylistForRendering.playlist_crc;
    playlistElement.append(playlistImageElement);

    let playlistTypeElement = document.createElement('h3');
    playlistTypeElement.innerText = inputPlaylistForRendering.type;
    playlistElement.append(playlistTypeElement);

    let playlistNameElement = document.createElement('h2');
    playlistNameElement.innerText = inputPlaylistForRendering.name;
    playlistElement.append(playlistNameElement);

    let playlistCountSongsElement = document.createElement('h3');
    playlistCountSongsElement.innerText = inputPlaylistForRendering.count_songs + ' tracks'
    playlistElement.append(playlistCountSongsElement);

    let playlistDurationElement = document.createElement('h3');
    playlistDurationElement.innerText = inputPlaylistForRendering.duration_all + ' min';
    playlistElement.append(playlistDurationElement);

    let playlistAuthorsElement = document.createElement('h3');
    playlistAuthorsElement.innerText = inputPlaylistForRendering.authors.join(', ') + ' and others';
    playlistElement.append(playlistAuthorsElement);

}

function renderTrack(inputTrackForRendering) {
    let playlistSongsElement = document.createElement('ul');
    playlistElement.append(playlistSongsElement);

    for (let i = 0; i < inputTrackForRendering.songs.length; i++) {
        let song = inputTrackForRendering.songs[i];

        let songImageElement = document.createElement('img');
        songImageElement.src = song.cover_image;
        songImageElement.style.width = '50px';
        songImageElement.style.height = '50px';
        playlistSongsElement.append(songImageElement);

        let songElement = document.createElement('li');
        songElement.innerText = song.name + ' - ' + song.author;
        playlistSongsElement.append(songElement);

        let playerElement = document.createElement('audio');
        playerElement.controls = true;
        playerElement.src = song.src;
        songElement.append(playerElement);
    }
}

function renderPlaylist(playlistForRendering) {
    renderPlaylistHeader(playlistForRendering);
    renderTrack(playlistForRendering);
}

renderPlaylist(playlist1);
renderPlaylist(playlist2);







