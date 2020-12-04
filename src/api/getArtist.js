import { BASE_URL, API_KEY, json } from './base';

const getArtist = name => fetch(`
${BASE_URL}2.0/?method=artist.getinfo&artist=${name}&api_key=${API_KEY}${json}`)
  .then(res => res.json())
  .then(data => data.artist)
  .catch(error => error);

export default getArtist;
