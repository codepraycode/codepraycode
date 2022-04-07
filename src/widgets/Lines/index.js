import React from 'react';

const Lines = ({type, className}) => {
    return (
        <div className={`heading-line ${!className ? '' :className}`}></div>
    );
};

export default Lines;