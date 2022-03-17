///////////////////////////////////////////////////
//  src/components/Navbar.js
///////////////////////////////////////////////////

import React, { useState, useEffect } from 'react';
import { debounce } from './Debounce';
import NavBarComp from './NavBarComp';

const Navbar = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(false);

    // **** Styling for Navbar ********
    const navbarStyles = {
        position: 'fixed',
        height: '60px',
        width: '100%',
        backgroundColor: 'rgb(8,5,75)',
        background: 'linear-gradient(120deg, rgba(8,5,75,1) 0%, rgba(76,76,205,1) 40%, rgba(8,5,75,1) 100%)',
        transition: 'top 0.6s'
    }

    // **** Handle Scroll Methode ********
    const handleScroll = debounce(() => {
        // find current scroll position
        const currentScrollPos = window.pageYOffset;

        // set state based on location info
        setVisible((currentScrollPos > 300));

        // set state to new scroll position
        setPrevScrollPos(currentScrollPos);
    }, 100);

    // **** Use Effect *********
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);

    }, [prevScrollPos, visible, handleScroll]);

    return (
        <div style={{ ...navbarStyles, top: visible ? '0' : '-80px' }}>
            <NavBarComp />
        </div>
    );
};

export default Navbar;