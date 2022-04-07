import React from 'react';
import Lines from '../../widgets/Lines';
import TeachStack from '../../widgets/TechStack';
import { Myinfo } from '../../myinfo';

const TechTools = () => {
    return (
        <section id="techtools" className="techtools">
            <div className="container">
                <div className="row text-center">
                    <h4 className="fw-bold lead mb-3">My Tools and Stacks</h4>
                    {/* <div className="heading-line mb-5"></div> */}
                    <Lines className='mb-5'/>
                </div>


                <TeachStack stacks={Myinfo.techStacks}/>



            </div>
        </section>
    );
};

export default TechTools;