import React from 'react';
import PropTypes from 'prop-types';

import './TrackList.scss';

export const TrackList = ({ tracks }) => (
  <ul className="list">
    {
      tracks.map(track => (
        <li className="list__item" key={track.url}>
          <h4>{`Track name - ${track.name}`}</h4>
          <p>{`Artist - ${track.artist}`}</p>
        </li>
      ))
    }
  </ul>
);

TrackList.propTypes = {
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
