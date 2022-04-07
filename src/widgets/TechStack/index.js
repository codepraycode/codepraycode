import React from 'react';
// import fs from 'fs';
/* 
    Component to Display Tech Stacks
*/
const TeachStack = ({stacks}) => {
    // console.log(stacks)
    const checkIconExist = (filepath, name)=>{
        // if (!fs.existsSync(filepath)){
        //     console.error(`Icon for ${name} not found, you should update your tech stacks`);
        //     return false;
        // };

        return true;
    }
    const renderStacks = ()=>{
        const template = stacks.map((each,i)=>{
            let pathname = `/assets/images/techstacks/${each}.svg`;
            if(!checkIconExist(pathname, each)){
                return null;
            };

            return (
                <div key={i} className="stack__logo-box">
                    <img 
                        src={pathname} 
                        alt={each} 
                        title={each} 
                        className="img-fluid"
                    />
                </div>
            );
        })

        return template;
    }
    return (
        <div className='container stack_listing'>
            {renderStacks()}
        </div>
    );
};

export default TeachStack;