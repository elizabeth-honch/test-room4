import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { TrackList } from './TrackList/TrackList';
import searchTrack from '../../api/searchTrack';
import './TrackPage.scss';

export const TrackPage = () => {
  const [nameTrack, setNameTrack] = useState('');
  const newTrack = useSelector(state => state.newTrack);
  const dispatch = useDispatch();

  const createList = ({ target }) => {
    setNameTrack(target.value);
  };

  const addTrack = () => {
    searchTrack(nameTrack)
      .then((data) => {
        dispatch({
          type: 'NEW_TRACK',
          payload: { newTrack: data },
        });
      });
  };

  return (
    <div className="track">
      <div className="ui icon input">
        <i className="search icon" />
        <input
          type="text"
          value={nameTrack}
          onChange={createList}
          placeholder="Название трека"
        />
      </div>

      <button
        type="button"
        className="ui primary button"
        onClick={addTrack}
      >
        Найти
      </button>
      {
        (newTrack.length > 0) && <TrackList tracks={newTrack} />
      }
    </div>
  );
};
