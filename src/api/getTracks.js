import { BASE_URL, API_KEY, json } from './base';

// async function getTrack() {
//   const res = await fetch(`
//   ${BASE_URL}2.0/?method=chart.gettoptracks&api_key=${API_KEY}${json}`);
//   const data = await res.json();

//   return data.tracks.track;
// }
// /2.0/?method=artist.getinfo&artist=Cher&api_key=YOUR_API_KEY&format=json
const getTracks = () => fetch(`
${BASE_URL}2.0/?method=chart.gettoptracks&api_key=${API_KEY}${json}`)
  .then(res => res.json())
  .then(data => data.tracks.track)
  .catch(error => error);

export default getTracks;
