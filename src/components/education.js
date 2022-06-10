import React from 'react';
import Section from '../widgets/section';

const Education = () => {
    return (
        <Section header="Education" id="education" className="education">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
                    <div className="services__content">
                    <div className="icon d-block fas fa-paper-plane"></div>
                    <h3 className="display-3--title mt-1">Marketing</h3>
                    <p className="lh-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, impedit rem,
                        doloremque autem quibusdam blanditiis harum alias hic accusantium 
                        maxime atque ratione magni repellat?
                    </p>
                    <button type="button" className="rounded-pill btn-rounded border-primary">Learn more
                        <span><i className="fas fa-arrow-right"></i></span>
                    </button>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-end">
                    <div className="services__pic">
                    <img src="images/services/service-1.png" alt="marketing illustration" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Education;