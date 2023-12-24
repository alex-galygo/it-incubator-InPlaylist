export function renderPlaylistTrack(trackForRendering, playlistContainer) {
    let trackElement = document.createElement('div');
    trackElement.className = 'track-container';
    playlistContainer.append(trackElement);

    let playerCoverElement = document.createElement('img');
    playerCoverElement.src = trackForRendering.cover_image;
    trackElement.append(playerCoverElement);

    let TrackTitleAudioContainer = document.createElement('div');
    TrackTitleAudioContainer.className = 'track-title-audio-container';
    trackElement.append(TrackTitleAudioContainer);

    let trackTitleElement = document.createElement('span');
    trackTitleElement.className = 'track-title';
    if (trackForRendering.inTrand) {
        trackTitleElement.append('🔥' + '   ');
    }

    trackTitleElement.append(trackForRendering.author + ' - ' + trackForRendering.title);
    TrackTitleAudioContainer.append(trackTitleElement);


    let audioContainer = document.createElement('div');
    audioContainer.className = 'audio-container';
    trackElement.append(audioContainer);

    let playerElement = document.createElement('audio');
    playerElement.className = 'track_audio';
    playerElement.controls = true;
    playerElement.src = trackForRendering.src;
    TrackTitleAudioContainer.append(playerElement);

    playlistContainer.append(trackElement);
}