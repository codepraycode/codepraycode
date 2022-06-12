import React from 'react';
import SocialHandles from '../../widgets/social_handles';

const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark menu shadow fixed-top">
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
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </span>
                    {/* <span className="navbar-toggler-icon open">
                        <i class="far fa-bars"></i>
                        
                    </span> */}
                    {/* <span className="navbar-toggler-icon close"></span> */}
                    {/* <span className="close">
                        <i class="far fa-times"></i>
                    </span> */}
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
    );
};

export default NavBar;