import React from 'react';

const SocialHandles = ({className}) => {
    return (
        <div className={`handles ${className}`}>
            <span>
                <i class="fab fa-facebook"></i>
            </span>

            <span>
                <i class="fab fa-instagram"></i>
            </span>

            <span>
                <i class="fab fa-twitter"></i>
            </span>
            <span>
                <i class="fab fa-linkedin-in"></i>
            </span>

            <span>
                <i class="fab fa-github"></i>
            </span>
        </div>
    );
};

export default SocialHandles;