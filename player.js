// InPlaylist: lesson-1/playlist.js

// Data

const playlists = [
    playlist1 = {
        type: 'Playlist',
        playlist_crc: 'assets/images/playlist-1-logo.png',
        title: 'Hip-Hop Hits',
        count_songs: 4,
        duration_all: 12.13,
        authors: ['Eminem', '50cent', 'Lloyd Banks'],
        tracks: [
            {
                cover_image: 'assets/images/eminem.png',
                title: 'Eminem',
                author: 'Rap God',
                src: 'https://tonuz.net/uploads/music/2023/10/Eminem_Rap_God.mp3',
                inTrand: true,
            },
            {
                cover_image: 'assets/images/50-cent.png',
                title: 'In da Club',
                author: '50 cent',
                src: 'https://muzfan.net/uploads/files/2020-07/1594719752_50-cent-in-da-club.mp3',
                inTrand: false,
            },
            {
                cover_image: 'assets/images/dmx.png',
                title: 'X Gon\' Give It To Ya',
                author: 'DMX',
                src: 'https://cdn.muzonchek.ru/files/music/3026/DMX-feat-The-xx_-_XX-Gon-Give-It-To-Ya.mp3',
                inTrand: false,

            },
            {
                cover_image: 'assets/images/lyud.png',
                title: 'You Don\'t Know',
                author: 'Eminem feat 50 Cent, Cashis, Lloyd Banks',
                src: 'https://cdn.muzonchek.ru/files/music/67784/Eminem-50-Cent-Cashis-Lloyd-Banks_-_You-Dont-Know.mp3',
                inTrand: false,
            }
        ]
    },
    playlist2 = {
        type: 'Playlist',
        playlist_crc: 'assets/images/playlist-2-logo.png',
        title: 'Rap Hits 1990s',
        count_songs: 4,
        duration_all: 12.13,
        authors: ['Public Enemy', 'Vanila Ice', 'MC Hammer'],
        tracks: [
            {
                cover_image: 'assets/images/public-enemy.png',
                title: 'Fight the Power',
                author: 'Public Enemy',
                src: 'https://tonuz.net/uploads/music/2023/10/Eminem_Rap_God.mp3',
                inTrand: false,

            },
            {
                cover_image: 'assets/images/vanila-ice.png',
                title: 'Ice Ice Baby',
                author: 'Vanila Ice',
                src: 'https://muzfan.net/uploads/files/2020-07/1594719752_50-cent-in-da-club.mp3',
                inTrand: true

            },
            {
                cover_image: 'assets/images/Hammer.png',
                title: 'You Can’t Touch This',
                author: 'MC Hammer',
                src: 'https://cdn.muzonchek.ru/files/music/3026/DMX-feat-The-xx_-_XX-Gon-Give-It-To-Ya.mp3',
                inTrand: false,

            },
            {
                cover_image: 'assets/images/brand-nubian.png',
                title: 'Brand Nubian',
                author: 'Brand Nubian',
                src: 'https://cdn.muzonchek.ru/files/music/67784/Eminem-50-Cent-Cashis-Lloyd-Banks_-_You-Dont-Know.mp3',
                inTrand: true,

            },
        ]
    },
];


// Render

// function renderPlaylistHeader(inputPlaylistForRendering) {
//
//     let playlistImageElement = document.createElement('img');
//     playlistImageElement.src = inputPlaylistForRendering.playlist_crc;
//     document.body.append(playlistImageElement);
//
//     let playlistTypeElement = document.createElement('h3');
//     playlistTypeElement.innerText = inputPlaylistForRendering.type;
//     document.body.append(playlistTypeElement);
//
//     let playlistNameElement = document.createElement('h2');
//     playlistNameElement.innerText = inputPlaylistForRendering.name;
//     document.body.append(playlistNameElement);
//
//     let playlistCountSongsElement = document.createElement('h3');
//     playlistCountSongsElement.innerText = inputPlaylistForRendering.count_songs + ' tracks'
//     document.body.append(playlistCountSongsElement);
//
//     let playlistDurationElement = document.createElement('h3');
//     playlistDurationElement.innerText = inputPlaylistForRendering.duration_all + ' min';
//     document.body.append(playlistDurationElement);
//
//     let playlistAuthorsElement = document.createElement('h3');
//     playlistAuthorsElement.innerText = inputPlaylistForRendering.authors.join(', ') + ' and others';
//     document.body.append(playlistAuthorsElement);
//
// }

// function renderTrack(inputTrackForRendering) {
//     let playlistSongsElement = document.createElement('ul');
//     document.body.append(playlistSongsElement);
//
//     for (let i = 0; i < inputTrackForRendering.tracks.length; i++) {
//         let song = inputTrackForRendering.tracks[i];
//
//         let songContainer = document.createElement('li');
//         songContainer.className = 'song-container';
//         playlistSongsElement.append(songContainer);
//
//         let songImageElement = document.createElement('img');
//         songImageElement.src = song.cover_image;
//         songImageElement.style.width = '50px';
//         songImageElement.style.height = '50px';
//         songContainer.append(songImageElement);
//
//         let songDetailsContainer = document.createElement('div');
//         songContainer.append(songDetailsContainer);
//
//         let songElement = document.createElement('p');
//         songElement.innerText = song.name + ' - ' + song.author;
//         songDetailsContainer.append(songElement);
//
//         let playerElement = document.createElement('audio');
//         playerElement.controls = true;
//         playerElement.src = song.src;
//         songDetailsContainer.append(playerElement);
//     }
// }

// function renderPlaylist(playlistForRendering) {
//     let playlistContainer = document.createElement('div');
//     document.body.append(playlistContainer);
//
//     renderPlaylistHeader(playlistForRendering, playlistContainer);
//     renderTrack(playlistForRendering, playlistContainer);
// }

renderPlaylists(playlists);

function renderPlaylists(inputPlaylists) {
    for (let i = 0; i < inputPlaylists.length; i++) {
        const playlist = inputPlaylists[i];
        renderPlaylist(playlist);
    }
}

function renderPlaylist(playlistForRendering) {
    renderPlaylistHeader(playlistForRendering);
    renderPlaylistTracks(playlistForRendering.tracks);
}

function renderPlaylistHeader(PlaylistForRendering) {
    renderPlaylistHeaderTitle(PlaylistForRendering);
    renderPlaylistHeaderImage(PlaylistForRendering);
}

function renderPlaylistHeaderTitle(PlaylistForRendering) {
    let playlistTitleElement = document.createElement('h2');
    playlistTitleElement.append(PlaylistForRendering.title);
    document.body.append(playlistTitleElement);
}

function renderPlaylistHeaderImage(PlaylistForRendering) {
    let playlistImageElement = document.createElement('img');
    playlistImageElement.src = PlaylistForRendering.playlist_crc;
    document.body.append(playlistImageElement);
}


function renderPlaylistTracks(playlistForRendering) {
    for (let i = 0; i < playlistForRendering.length; i++) {
        const track = playlistForRendering[i];
        renderPlaylistTrack(track);
    }

}

function renderPlaylistTrack(trackForRendering) {
    let trackElement = document.createElement('div');
    document.body.append(trackElement);

    let playerCoverElement = document.createElement('img');
    playerCoverElement.src = trackForRendering.cover_image;
    trackElement.append(playerCoverElement);

    let trackTitleElement = document.createElement('span');
    if (trackForRendering.inTrand) {
        trackElement.append('🔥');
    }
    trackTitleElement.append(trackForRendering.title + ' - ' + trackForRendering.author);
    trackElement.append(trackTitleElement);

    let playerElement = document.createElement('audio');
    playerElement.controls = true;
    playerElement.src = trackForRendering.src;
    trackElement.append(playerElement);

    document.body.append(trackElement);
}







