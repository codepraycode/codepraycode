import React from 'react';

const PortfolioItem = (props) => {
    return (
        <div className="portfolio__content">
            <div className="image">
                <img src="/assets/images/img_placeholder.png" alt="portfolio 1" title="portfolio 1 picture" className="img-fluid"/>
            </div>
            

            <div className="portfolio__content--info">
                <h4 className='caption'>project name</h4>
                
                <div className="category--platform">
                    <span className='category'>Category: --</span>
                    <span className='platform'>
                        <i>mobile</i>
                        <i>web</i>
                        <i>desktop</i>
                    </span>
                </div>

                <p className="info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis odit aperiam placeat laborum mollitia et sunt doloribus est.
                </p>

                <div className="cta">
                    <a href="/" >Visit</a>
                    <a href="/" >github</a>
                </div>

            </div>
        </div>
    );
};

export default PortfolioItem;