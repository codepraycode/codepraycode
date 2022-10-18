import React from 'react'

const filePath = '/assets/images';

const Image = ({src, stack, ...rest}) => {
    const pathname = Boolean(stack) ? `${filePath}/techstacks/${src}.svg` : `${filePath}/${src}`;
    return (
        <img src={pathname} alt="" {...rest}/>
    )
}

export default Image;