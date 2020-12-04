import { BASE_URL, API_KEY, json } from './base';

const searchTrack = name => fetch(`
${BASE_URL}/2.0/?method=track.search&track=${name}&api_key=${API_KEY}${json}`)
  .then(res => res.json())
  .then(data => data.results.trackmatches.track)
  .catch(error => error);

export default searchTrack;
