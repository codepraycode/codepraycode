import React from 'react';
import Section from '../widgets/section';
import TeachStack from '../widgets/techstack';
import { Myinfo } from '../myinfo';

const MyStacks = () => {
    return (
        <Section header="My Tools and Stacks" id="techtools" className="techtools">
            <TeachStack stacks={Myinfo.techStacks}/>
        </Section>
    );
};

export default MyStacks;