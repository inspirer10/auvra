import React from 'react';
import '../styles/ourServices.scss';
import Image from 'next/image';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { FiEye } from 'react-icons/fi';

function OurServices() {
    return (
        <section className='ourServices_section' id='services'>
            <div className='overHeading'>
                <p>Create</p>
                <p>Bond</p>
            </div>

            <h2>
                We don&apos;t build noise. <br /> We build{' '}
                <span>momentum.</span>
            </h2>
            <p className='subHeading'>
                In short we create high-converting campaings for top creators,
                make viral videos and gather data you can act on.
            </p>
            <button>Cooperate with Us</button>

            <article>
                <div className='image_wrapper'>
                    <Image
                        src={'/place1.jpg'}
                        alt='Service 1'
                        height={500}
                        width={600}
                        quality={90}
                    />

                    <div className='icon'>
                        <FiEye />
                    </div>
                </div>

                <div className='image_wrapper'>
                    <Image
                        src={'/place2.jpg'}
                        alt='Service 1'
                        height={500}
                        width={600}
                        quality={90}
                    />

                    <div className='icon'>
                        <FiEye />
                    </div>
                </div>

                <div className='image_wrapper'>
                    <Image
                        src={'/place3.jpg'}
                        alt='Service 1'
                        height={500}
                        width={600}
                        quality={90}
                    />

                    <div className='icon'>
                        <FiEye />
                    </div>
                </div>
            </article>
        </section>
    );
}

export default OurServices;
