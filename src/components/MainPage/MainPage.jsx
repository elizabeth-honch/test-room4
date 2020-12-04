import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import getTracks from '../../api/getTracks';

import './MainPage.scss';

export const MainPage = () => {
  const tracks = useSelector(state => state.tracks);
  const dispatch = useDispatch();

  useEffect(() => {
    getTracks()
      .then((data) => {
        dispatch({
          type: 'SHOW_TRACK',
          payload: { tracks: data },
        });
      });
  }, []);

  return (
    <div className="ui link cards">
      {
        tracks.map(track => (
          <div key={track.playcount} className="card">
            <div className="content">
              <div className="header">{track.name}</div>
              <div className="meta artist">
                {
                  (track.artist.name !== undefined) && (
                    <Link to={`artist/:${track.artist.name}`}>
                      {track.artist.name}
                    </Link>
                  )
                }
                <a
                  href={track.artist.url}
                  className="artist__link"
                >
                  {`${track.artist.name} на сервисе Last.fm`}
                </a>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
};
