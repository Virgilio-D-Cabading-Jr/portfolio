import React from 'react'
import { Link } from 'react-router-dom';

////////////////////////////////////////////////////
//  NAVIGATION BAR COMPONENT
////////////////////////////////////////////////////

/**
 * NAVIGATION BAR COMPONENT
 * @returns HTML for a Navigation Bar
 */
const NavBarComp = () => {
    // //// OUTPUT /////////////////////////////////
    return (
        <header>
            {/* **** Navigation Bar ******** */}
            <div className='navbar navbar-dark bg-navy-gradient box-shadow'>
                <div className='container d-flex justify-content-between'>
                    {/* **** Site Title ******** */}
                    <Link className='nav-title btn nav-btn-bg-clear' to="/">
                        <h2><strong><span className='text-yellow'>V</span>Cabading</strong></h2>
                    </Link>
                    {/* **** Link to Views ******** */}
                    <div className='row nav-btns align-items-center'>
                        <Link to="/aboutme" className='col btn nav-btn-bg-clear' >
                            <strong>About Me</strong>
                        </Link>
                        <Link to="/projects" className='col btn nav-btn-bg-clear' >
                            <strong>Projects</strong>
                        </Link>
                        <Link to="/contactinfo" className='col btn nav-btn-bg-clear' >
                            <strong>Contact Info</strong>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default NavBarComp