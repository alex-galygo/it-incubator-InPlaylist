import { renderPlaylistTrack } from './renderTrack.component.js';
export function renderPlaylistTracks(playlistForRendering, playlistContainer) {
    for (let i = 0; i < playlistForRendering.length; i++) {
        const track = playlistForRendering[i];
        renderPlaylistTrack(track, playlistContainer);
    }

}


