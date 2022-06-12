import React from 'react';
import Section from '../widgets/section';
import TeachStack from '../widgets/techstack';
import { Myinfo } from '../myinfo';

const MyStacks = () => {
    return (
        <Section header="My skill set" id="skills" className="techtools">
            <TeachStack stacks={Myinfo.techStacks}/>
        </Section>
    );
};

export default MyStacks;