import React from 'react';
import Image from '../widgets/Image';
import Section from '../widgets/Section';

const PortfolioItem = (props) => {
    return (
        <div className="portfolio__content">
            <div className="image">
                <Image src={"img_placeholder.png"} alt="portfolio 1" title="portfolio 1 picture" className="img-fluid" />
            </div>


            <div className="portfolio__content--info">
                <h4 className='caption'>Project name</h4>

                <div className="category--platform">
                    <span className='category'>Category</span>
                    <span className='platform'>
                        <span className="ifon" title="Available for mobile devices">
                            <i className="fas fa-mobile"></i>
                        </span>
                        
                        <span className="ifon" title="Available for web browers">
                            <i className="fas fa-globe"></i>
                        </span>

                        <span className="ifon" title="Available for desktop devices">
                            <i className="fas fa-desktop"></i>
                        </span>
                    </span>
                </div>

                <p className="info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis odit aperiam placeat laborum mollitia et sunt doloribus est.
                </p>

                <div className="cta">

                    <a
                        href="/"
                    >
                        Github
                        <i className="fab fa-github"></i>
                    </a>


                    <a
                        href="/"
                    >
                        Website
                        <i className="fas fa-globe"></i>
                    </a>

                    <a
                        href="/"
                    >
                        Play store
                        <i className="fas fa-google-play    "></i>
                    </a>
                    <a
                        href="/"
                    >
                        App store
                        <i className="fas fa-app-store-ios    "></i>
                    </a>
                    <a
                        href="/"
                    >
                        Expo
                        <i className="fas fa-apper    "></i>
                    </a>
                </div>

            </div>
        </div>
    );
};

const Portfolio = () => {
    return (
        <Section header="Portfolio" id="portfolio" className={"portfolio"}>

            {
                [1,2,3,4,5,6].map((each)=>{
                    return <PortfolioItem key={each}/>
                })
            }
        </Section>
    );
};

export default Portfolio;