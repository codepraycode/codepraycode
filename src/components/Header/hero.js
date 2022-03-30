import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="intro-section">
            
            <div className="container">
                <div className="row align-items-center hero_content text-white">
                    {/* Start Intro Content */}
                    <div className="col-md-6 intros text-start">
                        <h1 className="display-2">
                            <span className="display-2--intro">
                                Hey!, I'm Precious
                            </span>

                            <span className="display-2--description lh-base">
                                An evolving <q>Software Engineer</q>.
                                Apart from that I love getting involved in Competitive Programming, Problem Solving and Innovations.
                            </span>
                        </h1>

                        <button type="button" className="rounded-pill btn-rounded">
                            Download My Resume
                            <span>
                                <i className="fas fa-download    "></i>
                            </span>
                        </button>
                    </div>



                    {/* My Picture */}
                    <div className="col-md-6 intros text-md-end">
                        <div className="dp-box">
                            {/* <img 
                                src="/assets/images/illustrations/intro-section-illustration.png" 
                                alt="video illutration" 
                                className="img-fluid"
                            /> */}

                            {/* position-absolute top-50 start-50 translate-middle */}
                            <div className="dp__container">
                                <p className='with_img'>
                                    <img src="/assets/images/img_placeholder.png" alt="codepraycode"/>
                                </p>

                                <span className="border-animation border-animation--border-1"></span>
                                <span className="border-animation border-animation--border-2"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 1440 320"
            >
                <path fill="#ffffff" fillOpacity="1" d="M0,160L48,176C96,192,192,224,288,208C384,192,480,128,576,133.3C672,139,768,213,864,202.7C960,192,1056,96,1152,74.7C1248,53,1344,107,1392,133.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
        </section>
    );
};

export default Hero;