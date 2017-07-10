import convertToHumanTime from './helper.js';

// methods to create and render the tracks
function createMarkupTracks(tracks) {
  return tracks.map(track => `
    <div class="music">
      <p class="music-number">${track.track_number}</p>
      <p class="music-title">${track.name}</p>
      <p class="music-duration">${convertToHumanTime(track.duration_ms)}</p>
    </div>`).join('');
}

function renderAlbumTracks(data, element) {
  const markup = createMarkupTracks(data);
  element.innerHTML = markup;
}

export default renderAlbumTracks;