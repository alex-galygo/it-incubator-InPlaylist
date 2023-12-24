export function renderPlaylistHeaderTitle(PlaylistForRendering, playlistContainer) {
    let playlistTitleContainer = document.createElement('div');
    playlistTitleContainer.className = 'playlist-title-container';
    playlistContainer.append(playlistTitleContainer);

    let playlistTypeElement = document.createElement('h3');
    playlistTypeElement.className = 'playlist-type';
    playlistTypeElement.append(PlaylistForRendering.type);
    playlistTitleContainer.append(playlistTypeElement);

    let playlistTitleElement = document.createElement('h2');
    playlistTitleElement.className = 'playlist-title';
    playlistTitleElement.append(PlaylistForRendering.title);
    playlistTitleContainer.append(playlistTitleElement);

    let playlistCountSongsElement = document.createElement('h3');
    playlistCountSongsElement.append(PlaylistForRendering.count_songs + ' tracks, ' + PlaylistForRendering.duration_all);
    playlistCountSongsElement.className = 'playlist-count-songs';
    playlistTitleContainer.append(playlistCountSongsElement);


    let playlistAuthorsElement = document.createElement('h3');
    playlistAuthorsElement.className = 'playlist-authors';
    playlistAuthorsElement.append(PlaylistForRendering.authors.join(', '));
    playlistTitleContainer.append(playlistAuthorsElement);

    let playlistOthersElement = document.createElement('h3');
    playlistOthersElement.className = 'playlist-others';
    playlistOthersElement.append('and others');
    playlistTitleContainer.append(playlistOthersElement);
}