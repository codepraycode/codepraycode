import React from 'react';
import Section from '../widgets/Section';
const About = ({id}) => {
    return (
        <Section header="About Me" id={id} className="splitted">

            <p className="fw-light px-4 text-center">
                Lorem ipsum dolor sit amet consectetur architecto magni,
                <br/>
                dicta maxime laborum temporibus dolorem esse 
                <br/>
                doloremque illo quas nisi enim molestias.
                <br />
                Tempore ducimus molestiae in dolore enim.
            </p>

            
            <p className="fw-light px-4 text-center">
                Lorem ipsum dolor sit amet consectetur architecto magni
                <br />
                - dicta maxime laborum temporibus
                <br />
                - dolorem esse doloremque illo quas nisi enim molestias.
                <br />
                - Tempore ducimus molestiae in dolore enim.
            </p>

        </Section>
    );
};

export default About;