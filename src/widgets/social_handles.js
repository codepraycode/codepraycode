import React from 'react';

const SocialHandles = ({className}) => {
    const openMedia = () =>{
        return null;
    }
    return (
        <div className={`handles ${className}`}>
            <span onClick={()=>openMedia()}>
                <i className="fab fa-facebook"></i>
            </span>

            <span onClick={()=>openMedia()}>
                <i className="fab fa-instagram"></i>
            </span>

            <span onClick={()=>openMedia()}>
                <i className="fab fa-twitter"></i>
            </span>
            <span onClick={()=>openMedia()}>
                <i className="fab fa-linkedin-in"></i>
            </span>

            <span onClick={()=>openMedia()}>
                <i className="fab fa-github"></i>
            </span>
        </div>
    );
};

export default SocialHandles;