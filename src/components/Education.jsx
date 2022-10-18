import React from 'react';
import Image from '../widgets/Image';
import Section from '../widgets/Section';

const Education = () => {
    return (
        <Section header="Education" id="education" className="education">
            <div className="ercept">
                <div className="logo">
                    <Image src="img_placeholder.png" alt="School"/>
                </div>

                <div>
                    <h3>My school name</h3>
                    <span>2020 - present</span>
                </div>
            </div>
            <div className="ercept">
                <div className="logo">
                    <Image src="img_placeholder.png" alt="School"/>
                </div>

                <div>
                    <h3>My school name</h3>
                    <span>2020 - present</span>
                </div>
            </div>
            <div className="ercept">
                <div className="logo">
                    <Image src="img_placeholder.png" alt="School"/>
                </div>

                <div>
                    <h3>My school name</h3>
                    <span>2020 - present</span>
                </div>
            </div>
        </Section>
    );
};

export default Education;