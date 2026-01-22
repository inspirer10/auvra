import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import '../styles/about.scss';

const slidesData = [
    {
        id: 1,
        src: '/place1.jpg',
        alt: '245M',
        lon: '98.830',
        lat: '08.021',
    },
    {
        id: 2,
        src: '/place2.jpg',
        alt: '11M',
        lon: '-0.122',
        lat: '51.530',
    },
    {
        id: 3,
        src: '/place3.jpg',
        alt: '15M',
        lon: '113.264',
        lat: '23.129',
    },
];

function About() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slidesData.length);
        }, 2750);

        return () => clearInterval(interval);
    }, [currentSlide]);

    const handleDotClick = (index) => {
        setCurrentSlide(index);
    };

    const currentData = slidesData[currentSlide];

    return (
        <section className='about_section' id='about'>
            <article>
                <h6 className='logo'>AUVRA.</h6>
                <p>
                    <span className='company'>AUVRA</span> transforms creator
                    content into cultural momentum. Every campaign is built on
                    real-time data insights, algorithmic understanding, and a
                    proven framework that turns views into measurable ROI across
                    TikTok, Instagram, YouTube, and emerging platforms.
                    <span>
                        We work with brands who understand that virality
                        isn&apos;t luck — it&apos;s strategic execution. Through
                        partnerships with vetted creators, performance-based
                        contracts, and transparent analytics dashboards, we
                        ensure every dollar spent on creator content drives
                        documented returns in reach, engagement, and conversion.
                        —
                    </span>
                </p>
            </article>

            <aside>
                <div className='slider_container'>
                    {slidesData.map(({ id, src, alt }, index) => (
                        <Image
                            key={id}
                            src={src}
                            alt={alt}
                            height={700}
                            width={700}
                            quality={100}
                            className={`slider_image ${
                                index === currentSlide ? 'active' : ''
                            }`}
                        />
                    ))}
                </div>

                <div className='image_data'>
                    <div className='coordinates_wrapper'>
                        <p>Alt: {currentData.alt}</p>
                        <p>Lon: {currentData.lon}</p>
                        <p>Lat: {currentData.lat}</p>
                    </div>

                    <div className='scroll_wrapper'>
                        {slidesData.map((_, index) => (
                            <div
                                key={index}
                                className={`dot ${index === currentSlide ? 'active' : ''}`}
                                onClick={() => handleDotClick(index)}
                            />
                        ))}
                    </div>
                </div>
            </aside>
        </section>
    );
}

export default About;
