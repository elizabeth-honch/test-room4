import { createStore } from 'redux';

const initialState = {
  tracks: [],
  artist: {},
  newTrack: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_TRACK':
      return {
        ...state,
        tracks: action.payload.tracks,
      };

    case 'SHOW_INFO':
      return {
        ...state,
        artist: action.payload.artist,
      };

    case 'NEW_TRACK':
      return {
        ...state,
        newTrack: action.payload.newTrack,
      };

    default:
      return state;
  }
};

export const store = createStore(reducer, initialState);
