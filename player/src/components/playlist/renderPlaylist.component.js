import {renderPlaylistHeader} from "./header/renderHeader.component.js";
import {renderPlaylistTracks} from "./tracks/renderTracks.component.js";
export function renderPlaylist(playlistForRendering) {
    renderPlaylistHeader(playlistForRendering);
    renderPlaylistTracks(playlistForRendering.tracks);
}





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