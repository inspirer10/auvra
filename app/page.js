'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import OurNumbers from './Components/OurNumbers';
import Footer from './Components/Footer';
import About from './Components/About';

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

            <article className='landing__text'>
                <h1>Some landing page text</h1>
                <p>
                    Tu wrzuć swój content, żeby wymusić scroll i zobaczyć
                    animacje w akcji.
                </p>

                <h1>Some landing page text</h1>
                <p>
                    Tu wrzuć swój content, żeby wymusić scroll i zobaczyć
                    animacje w akcji.
                </p>

                <h1>Some landing page text</h1>
                <p>
                    Tu wrzuć swój content, żeby wymusić scroll i zobaczyć
                    animacje w akcji.
                </p>

                <h1>Some landing page text</h1>
                <p>
                    Tu wrzuć swój content, żeby wymusić scroll i zobaczyć
                    animacje w akcji.
                </p>
            </article>
        </>
    );
}
