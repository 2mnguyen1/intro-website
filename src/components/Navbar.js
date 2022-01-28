import React, { useState } from 'react';
import './Navbar.css';
import CodeIcon from './code-icon.png'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleMenuClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);

        } else {
            setButton(true);
        }
    }

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <a href="#" className="navbar-logo">
                        MINH <img src={CodeIcon} className="fa-typo3 " />
                    </a>

                    <div className='menu-icon' onClick={handleMenuClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <a href='#about' className='nav-links' onClick={closeMobileMenu}>
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href='#projects' className='nav-links' onClick={closeMobileMenu}>
                                Projects
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href='#technologies' className='nav-links' onClick={closeMobileMenu}>
                                Technologies
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
