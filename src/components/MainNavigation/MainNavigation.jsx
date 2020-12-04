import React from 'react';
import { Link } from 'react-router-dom';
import './MainNavigation.scss';

export const MainNavigation = () => (
  <div>
    <nav className="navbar ui three item menu">
      <Link className="navbar__item item" to="/">
        Главная
      </Link>
      <Link className="navbar__item item" to="/track">
        Страница поиска трека
      </Link>
      <Link className="navbar__item item" to="/artist/:name">
        Страница об исполнителе
      </Link>
    </nav>
  </div>
);
