import React from 'react';
import Section from '../widgets/section';
const About = () => {
    return (
        <Section header="About Me" id="about" className="about">
            <div className="row pt-2 pb-2 mt-0 mb-3">
                <div className="col-md-6 border-right">
                    <div className="bg-white p-3">
                        <img src="/assets/images/img_placeholder.png" alt="codepraycode" title="codepraycode"/>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="bg-white p-4 text-start">
                        <p className="fw-light">
                            Lorem ipsum dolor sit amet consectetur architecto magni, 
                            dicta maxime laborum temporibus dolorem esse doloremque illo quas nisi enim molestias. 
                            Tempore ducimus molestiae in dolore enim.
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default About;