import React from 'react';
import SocialHandles from '../../widgets/social_handles';

const NavBar = () => {

    return (
        <>
            {/* Mobile navigations (normal) */}
            <nav className="navbar navbar-expand-lg navbar-dark menu shadow fixed-top standard">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        {/* <img src="/aimages/logo.png" alt="logo image"> */}
                        <b>
                            CODEPRAYCODE
                        </b>
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon open">
                            <i className="fa fa-bars" aria-hidden="true"></i>
                            <i className="fa fa-times" aria-hidden="true"></i>
                        </span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">Home</a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About me</a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link" href="#skills">My Skills</a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link" href="#education">Education</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#contact">contact Me</a>
                            </li>
                        </ul>

                        <SocialHandles className={"nav__handles"}/>
                        

                        <button type="button" className="rounded-pill btn-rounded">
                            My Resume
                            <span>
                                {/* <i className="fas fa-phone-alt"></i> */}
                                <i className="fas fa-download" aria-hidden="true"></i>
                            </span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Non mobile navigation */}
            <nav>

                <ul>
                    <li>
                        <a href="/" data-name="Home">
                            <i className="fas fa-home"></i>
                        </a>
                    </li>
                    <li>
                        <a href="/" data-name="About me">
                            <i className="fa fa-info" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li>
                        <a href="/" data-name="My Skills">
                            <i className="fas fa-code    "></i>
                        </a>
                    </li>
                    <li>
                        <a href="/" data-name="Education">
                            <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li>
                        <a href="/" data-name="Projects">
                            <i className="fas fa-project-diagram    "></i>
                        </a>
                    </li>
                    <li>
                        <a href="/" data-name="Contacts">
                            <i className="fas fa-phone rotate-90"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default NavBar;