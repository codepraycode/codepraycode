import React from 'react';
import Section from '../../widgets/section';
import PortfolioItem from './portfolio_item';


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