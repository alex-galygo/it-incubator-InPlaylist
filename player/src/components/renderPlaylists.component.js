import {renderPlaylist} from "./playlist/renderPlaylist.component.js";

export function renderPlaylistsComponent(inputPlaylists) {
    let playlistSection = document.createElement('section');
    playlistSection.className = 'playlist-section';
    document.body.append(playlistSection);
    for (let i = 0; i < inputPlaylists.length; i++) {
        const playlist = inputPlaylists[i];
        renderPlaylist(playlist, playlistSection);
    }
}

