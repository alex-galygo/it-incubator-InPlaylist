export function renderPlaylistHeaderImage(PlaylistForRendering) {
    let playlistImageElement = document.createElement('img');
    playlistImageElement.src = PlaylistForRendering.playlist_crc;
    document.body.append(playlistImageElement);
}