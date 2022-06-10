import React from 'react';
import Section from '../widgets/section';

const Education = () => {
    return (
        <Section header="Education" id="education" className="education">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
                    <div className="content">
                        <div className="icon d-block fas fa-paper-plane"></div>

                        <h3 className="display-4--intro mt-1">
                            federal university of technology akure
                        </h3>

                    <p className="lh-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, impedit rem,
                        doloremque autem quibusdam blanditiis harum alias hic accusantium 
                        maxime atque ratione magni repellat?
                    </p>
                    <button type="button" className="rounded-pill btn-rounded border-primary">More
                        <span>
                            <i className="fas fa-arrow-right"></i>
                        </span>
                    </button>
                    </div>
                </div>


                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-end">
                    <div className="pic">
                    <img src="/assets/images/img_placeholder.png" alt="School 1" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Education;