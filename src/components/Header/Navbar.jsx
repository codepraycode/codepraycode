import React from 'react';
import SocialHandles from '../../widgets/social_handles';

const NavBar = () => {

    const appNavigation = [
        {
            name:"Home",
            link:"#home",
            icon: <i className="fas fa-home"></i>
        },
        {
            name:"About me",
            link:"#about",
            icon: <i className="fa fa-info" aria-hidden="true"></i>
        },
        {
            name:"My Skills",
            link:"#skills",
            icon: <i className="fas fa-code"></i>
        },
        {
            name:"Education",
            link:"#education",
            icon: <i className="fa fa-graduation-cap" aria-hidden="true"></i>
        },
        {
            name:"Projects",
            link:"#projects",
            icon: <i className="fas fa-project-diagram    "></i>
        },
        {
            name:"Contact me",
            link:"#contact",
            icon: <i className="fas fa-phone rotate-90"></i>
        },
    ]

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

                            {
                                appNavigation.map((nav) => (
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href={nav.link} data-name={nav.name}>
                                            {nav.name}
                                        </a>
                                    </li>
                                ))
                            }
                            
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
                    {
                        appNavigation.map((nav)=>(
                            <li>
                                <a href={nav.link} data-name={nav.name}>
                                    {nav.icon}
                                </a>
                            </li>
                        ))
                    }
                    
                </ul>
            </nav>

            {/* Back to top */}
            <a href="#home" className="shadow btn-primary rounded-circle back-to-top">
                <i className="fas fa-chevron-up"></i>
            </a>
        </>
    );
};

export default NavBar;