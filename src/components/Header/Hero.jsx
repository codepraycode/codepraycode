import React from 'react';
import SocialHandles from '../../widgets/social_handles';


const Hero = () => {
    return (
        <div className="hero">

            <div className="container">

                <div className="row intro--info">
                        {/* Start Intro Content */}
                        <div className="col-md-6 short">
                            
                            <h3>
                                Lo!, Good to have you here
                            </h3>

                            <p className="display-2--description lh-base">
                                I'm Precious, a fullstack software engineer.
                                Apart from that I love getting involved in Competitive Programming,
                                Problem Solving and Innovations.
                            </p>

                            <SocialHandles />

                            <button type="button" className="rounded-pill btn-rounded">
                                My Resume
                                <span>
                                    <i className="fas fa-download"></i>
                                </span>
                            </button>
                            
                        </div>


                        {/* My Picture */}
                        <div className="col-md-6 dp__container">
                            
                            {/* <img src="/assets/images/img_placeholder.png" alt="codepraycode"/> */}

                            {/* <span className="border-animation border-animation--border-1"></span>
                            <span className="border-animation border-animation--border-2"></span> */}
                            
                        </div>
                </div>

            </div>

            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 1440 320"
            >
                <path fill="#ffffff" fillOpacity="1" d="M0,160L48,176C96,192,192,224,288,208C384,192,480,128,576,133.3C672,139,768,213,864,202.7C960,192,1056,96,1152,74.7C1248,53,1344,107,1392,133.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
        </div>
    );
};

export default Hero;