/* eslint-disable no-console */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';

import './ArtistPage.scss';

import getArtist from '../../api/getArtist';

export const ArtistPage = (props) => {
  const name = props.location.pathname.split(':')[1];
  const artist = useSelector(state => state.artist);
  const dispatch = useDispatch();

  // console.log('name', name);

  useEffect(() => {
  // console.log('before if');
    if (name === 'Name') {
      return;
    }

    // eslint-disable-next-line no-console
    console.log('name in UseEffect', name);
    getArtist(name)
      .then((data) => {
        // eslint-disable-next-line no-console
        console.log(data);
        dispatch({
          type: 'SHOW_INFO',
          payload: { artist: data },
        });
      });
  }, []);

  // eslint-disable-next-line no-console
  console.log('artist - ', artist);

  // eslint-disable-next-line consistent-return
  return (
    <div>
      <div className="information">
        <h4 className="information__name">{artist.name}</h4>
        <p>{artist.bio.summary}</p>
        <ul className="information__tags">
          {
            artist.tags.tag.map(tag => (
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
