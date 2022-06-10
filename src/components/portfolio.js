import React from 'react';
import Section from '../widgets/section';

const Portfolio = () => {
    return (
        <Section header="Portfolio" id="portfolio" className={"portfolio"}>
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="portfolio-box shadow">
                    <img src="images/portfolio/portfolio-1.jpg" alt="portfolio 1" title="portfolio 1 picture" className="img-fluid"/>
                    <div className="portfolio-info">
                        <div className="caption">
                        <h4>project name goes here 1</h4>
                        <p>category project</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="portfolio-box shadow">
                    <img src="images/portfolio/portfolio-2.jpg" alt="portfolio 2" title="portfolio 2 picture" className="img-fluid"/>
                    <div className="portfolio-info">
                        <div className="caption">
                        <h4>project name goes here 2</h4>
                        <p>category project</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="portfolio-box shadow">
                    <img src="images/portfolio/portfolio-3.jpg" alt="portfolio 3" title="portfolio 3 picture" className="img-fluid"/>
                    <div className="portfolio-info">
                        <div className="caption">
                        <h4>project name goes here 3</h4>
                        <p>category project</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Portfolio;