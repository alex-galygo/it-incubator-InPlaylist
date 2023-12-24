export function renderPlaylistHeaderImage(PlaylistForRendering, playlistContainer) {
    let playlistImageContainer = document.createElement('div');
    playlistImageContainer.className = 'playlist-image-container';
    playlistContainer.append(playlistImageContainer);
    let playlistImageElement = document.createElement('img');
    playlistImageElement.src = PlaylistForRendering.playlist_crc;
    playlistImageContainer.append(playlistImageElement);
}
