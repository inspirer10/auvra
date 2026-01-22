import React from 'react';
import '../styles/ourNumbers.scss';
import Image from 'next/image';

function OurNumbers() {
    return (
        <section className='ourNumbers' id='numbers'>
            <div className='header'>
                <div className='info'>
                    <h2>
                        Step inside the <br /> numbers
                    </h2>

                    <p className='underHeading'>
                        Quantified impact from every campaign
                    </p>
                </div>

                <div className='image_wrapper'>
                    <Image
                        src={'/texture1.jpg'}
                        alt='1'
                        height={450}
                        width={450}
                        quality={90}
                    />
                </div>

                <div className='image_wrapper'>
                    <Image
                        //src={'/image3.png'}
                        src={'/texture6.jpg'}
                        alt='2'
                        height={450}
                        width={450}
                        quality={90}
                    />
                </div>
            </div>

            <div className='numbers'>
                <div className='number'>
                    <h3>20K+</h3>
                    <p>Creators Partnered</p>
                </div>

                <div className='number'>
                    <h3>500M+</h3>
                    <p>Video Views Generated</p>
                </div>

                <div className='number'>
                    <h3>350+</h3>
                    <p>High-Converting Campaigns</p>
                </div>

                <div className='number'>
                    <h3>3.8x</h3>
                    <p>Average ROI Delivered</p>
                </div>
            </div>
        </section>
    );
}

export default OurNumbers;
