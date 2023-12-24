import {renderPlaylistHeaderTitle} from "./renderHeaderTitle.component.js";
import {renderPlaylistHeaderImage} from "./renderHeaderImage.component.js";
export function renderPlaylistHeader(PlaylistForRendering) {
    renderPlaylistHeaderTitle(PlaylistForRendering);
    renderPlaylistHeaderImage(PlaylistForRendering);
}
