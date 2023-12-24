export function renderPlaylistHeaderTitle(PlaylistForRendering) {
    let playlistTitleElement = document.createElement('h2');
    playlistTitleElement.append(PlaylistForRendering.title);
    document.body.append(playlistTitleElement);
}