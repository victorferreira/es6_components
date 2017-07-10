import renderAlbumInfo from './album.js';
import renderAlbumTracks from './tracks.js';
import data from './data.js'

// working with the DOM and calling the methods
const list = document.getElementById('list');
const album = document.getElementById('album');

renderAlbumTracks(data.tracks, list);
renderAlbumInfo(data, album);