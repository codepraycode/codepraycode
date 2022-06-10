import React from 'react';
import Section from '../widgets/section';
const About = () => {
    return (
        <Section header="About Me" id="about" className="about">
            
            <div className="bg-white p-3 border-right">
                <img src="/assets/images/img_placeholder.png" alt="codepraycode" title="codepraycode"/>
            </div>

            <div className="bg-white p-4 text-center">
                <p className="fw-light">
                    Lorem ipsum dolor sit amet consectetur architecto magni, 
                    dicta maxime laborum temporibus dolorem esse doloremque illo quas nisi enim molestias. 
                    Tempore ducimus molestiae in dolore enim.
                </p>
            </div>
            
        </Section>
    );
};

export default About;