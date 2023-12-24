import {renderPlaylistHeaderTitle} from "./renderHeaderTitle.component.js";
import {renderPlaylistHeaderImage} from "./renderHeaderImage.component.js";
export function renderPlaylistHeader(PlaylistForRendering, playlistContainer) {
    let playlistHeaderContainer = document.createElement('div');
    playlistHeaderContainer.className = 'playlist-header-container';
    playlistContainer.append(playlistHeaderContainer);
    renderPlaylistHeaderImage(PlaylistForRendering, playlistHeaderContainer);
    renderPlaylistHeaderTitle(PlaylistForRendering, playlistHeaderContainer);
}


