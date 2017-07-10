import convertToHumanTime from './helper.js';

// methods to create and render the album info
function createMarkupAlbum(data) {
  return (`
    <img class="album-image" src="${data.images}" alt="${data.name}">
    <p class="album-title">${data.name}</p>
    <p class="album-artist">${data.artists}</p>
    <p class="album-counter">${data.tracks.length} Músicas</p>
  `);
}

function renderAlbumInfo(data, element) {
  const markup = createMarkupAlbum(data);
  element.innerHTML = markup;
};

export default renderAlbumInfo