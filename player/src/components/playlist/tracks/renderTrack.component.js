export function renderPlaylistTrack(trackForRendering) {
    let trackElement = document.createElement('div');
    document.body.append(trackElement);

    let playerCoverElement = document.createElement('img');
    playerCoverElement.src = trackForRendering.cover_image;
    trackElement.append(playerCoverElement);

    let trackTitleElement = document.createElement('span');
    if (trackForRendering.inTrand) {
        trackElement.append('🔥');
    }
    trackTitleElement.append(trackForRendering.title + ' - ' + trackForRendering.author);
    trackElement.append(trackTitleElement);

    let playerElement = document.createElement('audio');
    playerElement.controls = true;
    playerElement.src = trackForRendering.src;
    trackElement.append(playerElement);

    document.body.append(trackElement);
}