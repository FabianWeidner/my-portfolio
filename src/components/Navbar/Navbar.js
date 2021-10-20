import React from 'react';
import './NavBar.scss';

import { FaBars } from 'react-icons/fa';
import { DiReact } from 'react-icons/di';
import { links, social } from './navdata';

function Navbar() {
  return (
    <nav>
      <div className="nav__center">
        <div className="nav__header">
          <DiReact className="logo" />
          <button className="nav__toggle">
            <FaBars />
          </button>
        </div>
        <div className="links__container">
          <ul className="links">
            {links.map(({ id, url, text }) => {
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social__icons">
          {social.map(({ id, url, icon }) => {
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
