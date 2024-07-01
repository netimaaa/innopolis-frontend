// src/components/Projects.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import comicImg from './img/comic.png'
import defImg from './img/project_image.png'

const Projects: React.FC = () => {
  return (
    <>
      <div className="container">
            <header className="header">
                <div className="header__content">
                    <h1 className="header__title">Hi, my name is <span className="header__title-name">Timur</span></h1>
                    <div className="header__subtitle">I’m a student of Innopolis University</div>
                    <button type="button" className="btn" id="scrollToProjects">
                        <span className="btn__text">My projects</span>
                        <span className="btn__icon">
                            <img src="./img/btn.svg" alt="" className="btn-image"/>
                        </span>
                    </button>
                </div>
            </header>
        </div>
        <div className="container" id="projects">
            <div className="projects">
                <h1 className="project__title">Project</h1>
                <div className="project__list-row1">
                    <Link to="/comics" className="project__list-row1__item">
                        <div className="project__list-row1__item__image"><img src={comicImg} alt=""/></div>
                        <div className="project__list-row1__item__text">Lab 2 - XKCD comic</div>
                    </Link>
                    <Link to="#" className="project__list-row1__item">
                        <div className="project__list-row1__item__image"><img src={defImg} alt=""/></div>
                        <div className="project__list-row1__item__text">Some information</div>
                    </Link>
                    <Link to="#" className="project__list-row1__item">
                        <div className="project__list-row1__item__image"><img src={defImg} alt=""/></div>
                        <div className="project__list-row1__item__text">Some information</div>
                    </Link>
                </div>
                <div className="project__list-row2">
                    <Link to="#" className="project__list-row1__item">
                        <div className="project__list-row1__item__image"><img src={defImg} alt=""/></div>
                        <div className="project__list-row1__item__text">Some information</div>
                    </Link>
                    <Link to="#" className="project__list-row1__item">
                        <div className="project__list-row1__item__image"><img src={defImg} alt=""/></div>
                        <div className="project__list-row1__item__text">Some information</div>
                    </Link>
                    <Link to="#" className="project__list-row1__item">
                        <div className="project__list-row1__item__image"><img src={defImg} alt=""/></div>
                        <div className="project__list-row1__item__text">Some information</div>
                    </Link>
                </div>
            </div>
        </div>
    </>
  );
};

export default Projects;
