'use client';

import { useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { IoMdClose } from 'react-icons/io';
import '../styles/sideMenu.scss';

export default function SideMenu({
    items = [
        { label: 'About', href: '#about' },
        { label: 'Our Services', href: '#services' },
        { label: 'How It Works', href: '#howItWorks' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'FAQ', href: '#faq' },
    ],

    isOpen,
    onClose,
    onNavigate,
}) {
    const menuRef = useRef(null);

    const handleNavigate = (e, sectionId) => {
        e.preventDefault();

        document
            .getElementById(`${sectionId}`)
            ?.scrollIntoView({ behavior: 'smooth' });

        setTimeout(() => {
            onClose();
        }, 100);
    };

    const containerVariants = {
        hidden: { x: '100%' },
        visible: {
            x: 0,
            transition: {
                duration: 0.65,
                ease: [0.76, 0, 0.24, 1],
            },
        },
        exit: {
            x: '100%',
            transition: {
                duration: 0.34,
                ease: [0.76, 0, 0.24, 1],
            },
        },
    };

    const itemVariants = {
        hidden: { y: 140, rotate: 10, opacity: 0 },
        visible: (i) => ({
            y: 0,
            rotate: 0,
            opacity: 1,
            transition: {
                duration: 1,
                ease: [0.76, 0, 0.24, 1],
                delay: 0.15 + i * 0.1,
            },
        }),
        exit: { y: 140, rotate: 10, opacity: 0 },
    };

    const footerVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.76, 0, 0.24, 1],
                delay: 0.4,
            },
        },
        exit: { opacity: 0, y: 10 },
    };

    return (
        <AnimatePresence mode='wait'>
            {isOpen && (
                <motion.div
                    ref={menuRef}
                    className='side-menu'
                    variants={containerVariants}
                    initial='hidden'
                    animate='visible'
                    exit='exit'
                >
                    <motion.button
                        className='close-btn'
                        onClick={onClose}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.225 }}
                        aria-label='Close menu'
                    >
                        <IoMdClose />
                    </motion.button>

                    <div className='menu-nav'>
                        <ul className='menu-list'>
                            {items.map((item, index) => (
                                <motion.li
                                    key={item.href}
                                    custom={index}
                                    variants={itemVariants}
                                    initial='hidden'
                                    animate='visible'
                                    exit='exit'
                                >
                                    <a
                                        href={item.href}
                                        onClick={(e) =>
                                            handleNavigate(
                                                e,
                                                item.href.replace('#', ''),
                                            )
                                        }
                                        className='menu-link'
                                    >
                                        <span className='menu-number'>
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                        {item.label}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    <motion.h6
                        className='menu-footer'
                        variants={footerVariants}
                        initial='hidden'
                        animate='visible'
                        exit='exit'
                    >
                        AUVRA.
                    </motion.h6>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
