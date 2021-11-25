import { useAuthContext } from 'context';
import React, { useState, useEffect } from 'react'
import { Navbar, NavDropdown } from '../components';
import ScrollUp from '../components/scrollUp';

const CustomLayout = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false);
    const { authorized, handleLogout } = useAuthContext();

    useEffect(() => {

        const hideMenu = () => {
            if (window.innerWidth > 768 && isOpen) {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', hideMenu);

        return () => {
            window.removeEventListener('resize', hideMenu);
        };
    });


    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {authorized ?
                <div className={isOpen ? 'z-50 fixed top-0 w-full' : 'z-0'} >
                    <Navbar
                        toggle={toggle}
                        isOpen={isOpen}
                    />

                    <NavDropdown
                        isOpen={isOpen}
                        toggle={toggle}
                    />
                </div>
                : ''
            }
            {children}
            <ScrollUp />
        </div>
    )
}

export default CustomLayout;
