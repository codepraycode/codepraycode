import React from 'react';

const Lines = ({type, className}) => {
    return (
        <div className={`heading-line ${!className ? '' :className}`}></div>
    );
};

const Section = ({header, className, id, children}) => {
    return (
        <section id={id || ''} className={`${className || ''} container`}>
            <div className='section_title'>
                <div className="row text-center">
                    <h4 className="fw-bold lead mb-3">{header}</h4>
                    <Lines/>
                </div>
            </div>

            <div className="section_content">
                {children}
            </div>
        </section>
    );
};

export default Section;