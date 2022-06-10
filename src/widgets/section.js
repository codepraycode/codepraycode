import React from 'react';

const Lines = ({type, className}) => {
    return (
        <div className={`heading-line ${!className ? '' :className}`}></div>
    );
};

const Section = ({header, className, id, children}) => {
    return (
        <section id={id || ''} className={className || ''}>
            <div className="container">
                <div className="row text-center">
                    <h4 className="fw-bold lead mb-3">{header}</h4>
                    <Lines/>
                </div>

                {children}
            </div>
        </section>
    );
};

export default Section;