import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';

import './ArtistPage.scss';

import getArtist from '../../api/getArtist';

export const ArtistPage = (props) => {
  const name = props.location.pathname.split(':')[1];
  const artist = useSelector(state => state.artist);

  if (name !== 'Name') {
    const dispatch = useDispatch();

    useEffect(() => {
      getArtist(name)
        .then((data) => {
          artist.push(data);
          dispatch({
            type: 'SHOW_ARTIST',
            payload: { artist: data },
          });
        });
    }, [artist]);
  }

  return (
    <div>
      {
        artist.map(info => (
          <div className="information" key={info.mbid}>
            <h4 className="information__name">{info.name}</h4>
            <p>{info.bio.summary}</p>
            <ul className="information__tags">
              {
                info.tags.tag.map(tag => (
                  <li key={tag.name} className="information__item">
                    <p className="information__tag-name">
                      {`Tag - ${tag.name}`}
                    </p>
                    <a href={tag.url} className="information__tag-url">
                      {tag.url}
                    </a>
                  </li>
                ))
              }
            </ul>
          </div>
        ))
      }
    </div>
  );
};

ArtistPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  props: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
