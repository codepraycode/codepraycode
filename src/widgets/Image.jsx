import React from 'react'

const filePath = '/assets/images/techstacks';

const Image = ({src, stack, ...rest}) => {
    const pathname = Boolean(stack) ? `${filePath}/${src}.svg` : `${filePath}/${src}`;
    return (
        <img src={pathname} alt="" {...rest}/>
    )
}

export default Image;