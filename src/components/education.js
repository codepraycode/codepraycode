import React from 'react';
import Section from '../widgets/section';

const Education = () => {
    return (
        <Section header="Education" id="education" className="education">
            <div className="row">
                <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                    <div className="content">
                        <a href="/" className="display-4--intro mt-1">
                            federal university of technology akure(FUTA)
                        </a>
                        <p className="duration text-muted">
                            <i>2020 - present</i> | <a href="/">www.futa.edu.ng</a>
                        </p>
                        <p className="lh-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, impedit rem,
                            doloremque autem quibusdam blanditiis harum alias hic accusantium 
                            maxime atque ratione magni repellat?
                        </p>
                        {/* <a 
                            href="/" 
                            className="rounded-pill btn-rounded border-primary"
                        >
                            More
                            <span>
                                <i className="fas fa-arrow-right"></i>
                            </span>
                        </a> */}
                    </div>
                </div>


                <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                    <div className="pic">
                    <img src="/assets/images/img_placeholder.png" alt="School 1" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Education;