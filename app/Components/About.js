import React from 'react';
import Image from 'next/image';
import '../styles/about.scss';

function About() {
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
                <Image
                    src='/image3.png'
                    alt='About Image'
                    height={700}
                    width={700}
                    quality={90}
                />

                <div className='image_data'>
                    <div className='coordinates_wrapper'>
                        <p>Alt: 123m</p>
                        <p>Lon: 56.712</p>
                        <p>Lat: 09.565</p>
                    </div>

                    <div className='scroll_wrapper'>
                        <div></div>
                        <div className='active'></div>
                        <div></div>
                    </div>
                </div>
            </aside>
        </section>
    );
}

export default About;
