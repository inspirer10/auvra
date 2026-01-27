import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { CgMenuRightAlt } from 'react-icons/cg';
import { IoMdClose } from 'react-icons/io';

import '../styles/navbar.scss';
import SideMenu from './SideMenu';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 225);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleOpenSideMenu = () => setOpenMenu(true);
    const handleCloseSideMenu = () => setOpenMenu(false);

    const handleSectionRouting = (e, section) => {
        e.preventDefault();

        document
            .getElementById(`${section}`)
            ?.scrollIntoView({ behavior: 'smooth' });

        handleCloseSideMenu();
    };

    return (
        <>
            <motion.nav
                animate={scrolled ? 'compact' : 'wide'}
                variants={{
                    wide: { width: '82.5%' },
                    compact: { width: '55%' },
                }}
                transition={{ duration: 0.65, ease: 'easeInOut' }}
            >
                <p
                    href='/'
                    className='logo'
                    onClick={() =>
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                    }
                >
                    AUVRA.
                </p>

                <motion.ul
                    animate={scrolled ? 'hidden' : 'visible'}
                    variants={{
                        visible: { opacity: '1' },
                        hidden: { opacity: '0', pointerEvents: 'none' },
                    }}
                    transition={{ duration: 0.1, ease: 'easeInOut' }}
                >
                    <a
                        href='#about'
                        onClick={(e) => handleSectionRouting(e, 'about')}
                    >
                        About
                    </a>
                    <a
                        href='#services'
                        onClick={(e) => handleSectionRouting(e, 'services')}
                    >
                        Our Services
                    </a>
                    <a
                        href='#howItWorks'
                        onClick={(e) => handleSectionRouting(e, 'howItWorks')}
                    >
                        How It Works
                    </a>
                    <a
                        href='#pricing'
                        onClick={(e) => handleSectionRouting(e, 'pricing')}
                    >
                        Pricing
                    </a>
                    <a
                        href='#faq'
                        onClick={(e) => handleSectionRouting(e, 'faq')}
                    >
                        FAQ
                    </a>
                </motion.ul>

                {!openMenu && (
                    <div className='right_section'>
                        <AnimatePresence mode='wait'>
                            {!scrolled ? (
                                <motion.button
                                    key='demo-button'
                                    className='demo_button'
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{
                                        duration: 0.05,
                                        ease: 'easeInOut',
                                    }}
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
                                    transition={{
                                        duration: 0.05,
                                        ease: 'easeInOut',
                                    }}
                                    onClick={handleOpenSideMenu}
                                >
                                    <CgMenuRightAlt className='hamburger_menu' />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                )}
            </motion.nav>

            <SideMenu
                isOpen={openMenu}
                onClose={handleCloseSideMenu}
                onNavigate={(sectionId) => handleSectionRouting(sectionId)}
            />
        </>
    );
}

export default Navbar;
