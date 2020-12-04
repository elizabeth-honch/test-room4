import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { MainNavigation } from './components/MainNavigation/MainNavigation';
import { MainPage } from './components/MainPage/MainPage';
import { TrackPage } from './components/TrackPage/TrackPage';
import { ArtistPage } from './components/ArtistPage/ArtistPage';
import './App.scss';

export const App = () => (
  <div className="App">
    <MainNavigation />
    <section>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/track" component={TrackPage} />
        <Route path="/artist" component={ArtistPage} />
      </Switch>
    </section>
  </div>
);
