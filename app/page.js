'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import OurNumbers from './Components/OurNumbers';
import Footer from './Components/Footer';
import About from './Components/About';
import OurServices from './Components/OurServices';
import Pricing from './Components/Pricing';
import FAQ from './Components/FAQ';

export default function Home() {
    useEffect(() => {
        const lenis = new Lenis();

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

    return (
        <>
            <Navbar />

            <Header />

            <OurNumbers />

            <About />

            <OurServices />

            <Pricing />

            <FAQ />

            <Footer />
            {/*   <section className='landing__hero'>
                    <motion.div
                        className='landing__image-wrapper'
                        animate={scrolled ? 'full' : 'default'}
                        variants={{
                            default: { width: '90%' },
                            full: { width: '100%' },
                        }}
                        transition={{ duration: 0.15, ease: 'easeInOut' }}
                    >
                        <Image
                            src='/THIS. png'
                            alt='Fractal image'
                            fill
                            sizes='100vw'
                            className='image'
                            quality={90}
                        />
                    </motion.div>
                </section> */}
        </>
    );
}
