import React from 'react';
import Hero from './Hero';
import NavBar from './Navbar';

const Header = ({id}) => {
    return (
        <header id={id}>
            
            <NavBar/>

            <Hero/>
           

        </header>
    );
};

export default Header;