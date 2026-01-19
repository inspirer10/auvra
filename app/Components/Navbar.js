import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'motion/react';
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
                <li>Our Services</li>
                <li>How It Works</li>
                <li>Contact</li>
            </ul>

            <div className='right_section'>
                <AnimatePresence mode='wait'>
                    {!scrolled ? (
                        <motion.button
                            key='demo-button'
                            className='demo_button'
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0, ease: 'easeInOut' }}
                        >
                            See Demo
                        </motion.button>
                    ) : (
                        <motion.div
                            key='hamburger'
                            className='hamburger_wrapper'
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0, ease: 'easeInOut' }}
                        >
                            <CgMenuRightAlt className='hamburger_menu' />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
}

export default Navbar;
