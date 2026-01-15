import React from 'react';
import '../styles/ourNumbers.scss';
import Image from 'next/image';

function OurNumbers() {
    return (
        <section className='ourNumbers' id='#number'>
            <div className='header'>
                <div className='info'>
                    <h2>
                        Step inside the <br /> numbers
                    </h2>

                    <p className='underHeading'>
                        Quantified impact from every showing
                    </p>
                </div>

                <div className='image_wrapper'>
                    <Image
                        src={'/stars.png'}
                        alt='1'
                        height={400}
                        width={400}
                        quality={90}
                    />
                </div>

                <div className='image_wrapper'>
                    <Image
                        src={'/logo.jpg'}
                        alt='2'
                        height={400}
                        width={400}
                        quality={90}
                    />
                </div>
            </div>

            <div className='numbers'>
                <div className='number'>
                    <h3>250K+</h3>
                    <p>Users Engaged</p>
                </div>

                <div className='number'>
                    <h3>1M+</h3>
                    <p>Data Points Collected</p>
                </div>

                <div className='number'>
                    <h3>500+</h3>
                    <p>Successful Deployments</p>
                </div>

                <div className='number'>
                    <h3>99.9%</h3>
                    <p>Uptime Reliability</p>
                </div>
            </div>
        </section>
    );
}

export default OurNumbers;
