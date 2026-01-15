import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CgMenuRightAlt } from 'react-icons/cg';

import '../styles/navbar.scss';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 225);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <motion.nav
            animate={scrolled ? 'compact' : 'wide'}
            variants={{
                wide: { width: '82.5%' },
                compact: { width: '55%' },
            }}
            transition={{ duration: 0.65, ease: 'easeInOut' }}
        >
            <Link href='/' className='logo'>
                AUVRA.
            </Link>
            <ul>
                <li>About</li>
                <li>Services</li>
                <li>Technology</li>
                <li>Contact</li>
            </ul>
            <motion.button
                className='demo_button'
                animate={scrolled ? 'hide' : 'show'}
                variants={{
                    show: { display: 'flex' },
                    hide: { display: 'none' },
                }}
                transition={{ duration: 0.1, ease: 'easeInOut' }}
            >
                See Demo
            </motion.button>

            <motion.div
                animate={scrolled ? 'show' : 'hide'}
                variants={{
                    show: { display: 'flex' },
                    hide: { display: 'none' },
                }}
                transition={{ duration: 0.1, ease: 'easeInOut' }}
            >
                <CgMenuRightAlt className='hamburger_menu' />
            </motion.div>
        </motion.nav>
    );
}

export default Navbar;
