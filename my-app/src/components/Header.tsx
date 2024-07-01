// src/components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__content">
        <h1 className="header__title">
          Hi, my name is <span className="header__title-name">Timur</span>
        </h1>
        <div className="header__subtitle">
          I’m a student of Innopolis University
        </div>
        <button type="button" className="btn" id="scrollToProjects">
          <span className="btn__text">My projects</span>
          <span className="btn__icon">
            <img src="./img/btn.svg" alt="" className="btn-image" />
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
