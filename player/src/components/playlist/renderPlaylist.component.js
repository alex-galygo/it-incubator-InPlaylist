import {renderPlaylistHeader} from "./header/renderHeader.component.js";
import {renderPlaylistTracks} from "./tracks/renderTracks.component.js";

export function renderPlaylist(playlistForRendering, playlistSection) {
    let playlistContainer = document.createElement('div');
    playlistContainer.className = 'playlist-container';
    playlistSection.append(playlistContainer);
    renderPlaylistHeader(playlistForRendering, playlistContainer);
    renderPlaylistTracks(playlistForRendering.tracks, playlistContainer);
}
