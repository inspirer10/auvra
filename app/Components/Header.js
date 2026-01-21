import Image from 'next/image';
import React, { useRef } from 'react';

import '../styles/header.scss';

import { motion, useScroll, useTransform } from 'motion/react';

function Header() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end start'],
    });

    const scrollY = useTransform(scrollYProgress, [0, 1], [0, -300]);
    const scrollWidth = useTransform(
        scrollYProgress,
        [0, 1],
        ['92.5%', '120%'],
    );

    return (
        <header ref={container} id='#top'>
            <motion.div
                className='image-wrapper'
                style={{
                    y: scrollY,
                    width: scrollWidth,
                }}
            >
                <Image
                    className='image'
                    src='/image.png'
                    height={800}
                    width={1500}
                    quality={100}
                    alt='Fractal image'
                    priority
                />
            </motion.div>

            <div className='content'>
                <h1>
                    Campaigns That Break <br /> Through the Noise
                </h1>
                <p>
                    Data-driven strategies that turn creators into cultural
                    moments. <br /> Every campaign, every metric, engineered for
                    virality.
                </p>
                <button>START YOUR CAMPAIGN</button>
            </div>
        </header>
    );
}

export default Header;
