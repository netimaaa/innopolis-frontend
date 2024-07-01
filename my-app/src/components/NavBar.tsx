// src/components/NavBar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './img/logo.svg'
import tg from './img/tg.svg'
import gt from './img/gh.svg'
import ds from './img/ds.svg'
const NavBar: React.FC = () => {
  return (
    <div className="container" id="header">
            <nav className="nav">
                <div className="nav-logo">
                    <img src={logo} alt="Timur Farizunov"/>
                </div>
                <ul className="nav-list">
                  <li className="nav-list__item">
                   <Link to="/Projects" className="nav-list__link nav-list__link--active">Projects</Link>
                  </li>
                  <li className="nav-list__item">
                    <Link to="/Skills" className="nav-list__link">Skills</Link>
                  </li>
                  <li className="nav-list__item">
                    <Link to="/Contacts" className="nav-list__link">Contacts</Link>
                  </li>
                </ul>
                <ul className="nav-contacts">
                    <li className="nav-contacts__list">
                        <a href="https://t.me/netimaaa" className="nav-contacts__link">
                            <img className="contact" id="tg-link" src={tg} alt="Telegram"/>
                        </a>
                    </li>
                    <li className="nav-contacts__list">
                        <a href="https://github.com/netimaaa" className="nav-contacts__link">
                            <img className="contact" id="gh-link" src={gt} alt="GitHub"/>
                        </a>
                    </li>
                    <li className="nav-contacts__list">
                        <a href="https://discord.gg/GsSMF8rsNk" className="nav-contacts__link">
                            <img className="contact" id="ds-link" src={ds} alt="Discord"/>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
  );
};

export default NavBar;
