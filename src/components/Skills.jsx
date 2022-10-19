import React from 'react';
import Section from '../widgets/Section';
import Techstack from '../widgets/Techstack';
import { Myinfo } from '../myinfo';
import Image from '../widgets/Image';

const Skills = ({id}) => {
    return (
        <Section header="My skill set" id={id} className="techstacks">            
            <>
                <span className="control">
                    <i className="fa fa-chevron-left" aria-hidden="true"></i>
                </span>
            <div className="stack_carousel">
                
                <div className="stack_info">
                    <div className='tech_logo'>
                        <Image stack={true} src="python"/>
                    </div>

                    <div>
                        <h3>Programming Language</h3>
                        <span>Over 3years of experience</span>
                        
                        <article>Nostrud ad consequat voluptate duis 
                            aliquip dolor commodo. Duis consequat enim aute
                            sint irure ipsum consequat ipsum cupidatat cupidatat 
                            adipisicing.
                        </article>

                        <h4>Tools and libraies i've used with python</h4>
                        <Techstack stacks={Myinfo.techStacks} />
                    </div>
                </div>
                
                <div className="paginers">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
                <span className="control">
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                </span>
            </>
        </Section>
    );
};

export default Skills;