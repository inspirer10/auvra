import React, { useState } from 'react';
import { HiOutlineRocketLaunch } from 'react-icons/hi2';
import { FaArrowUpRightDots } from 'react-icons/fa6';

import '../styles/pricing.scss';

function Pricing() {
    const [activeTab, setActiveTab] = useState('Viral Campaigns');
    const tabs = ['Viral Campaigns', 'Content Production', 'Data & Insights'];

    return (
        <section className='pricing_sections' id='pricing'>
            <p className='overHeading'>Pricing</p>
            <h2>
                Engineered for Virality. <br /> Scaled for ROI.
            </h2>
            <p className='subHeading'>
                High-converting campaigns, creator partnerships, and data
                analytics. Our pricing removes the guesswork from going viral.
            </p>

            <button className='call-btn'>Book a Crucial Call</button>

            <article>
                <ul className='tabs_wrapper'>
                    {tabs.map((tab) => (
                        <li
                            key={tab}
                            className={activeTab === tab ? 'active' : ''}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </li>
                    ))}
                </ul>

                <div className='cards_container'>
                    <div className='cards_wrapper'>
                        <div className='card'>
                            <HiOutlineRocketLaunch className='icon' />
                            <p>Viral Campaign Launch</p>
                            <h5>Starts at $15,000</h5>
                            <button>Launch Campaign</button>
                        </div>
                        <div className='card'>
                            <FaArrowUpRightDots className='icon' />
                            <p>Growth Partner Retainer</p>
                            <h5>Starts at $6,000 / mo</h5>
                            <button>Partner with Us</button>
                        </div>
                    </div>

                    <div className='details_wrapper'>
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                        </ul>
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                        </ul>
                    </div>
                </div>
            </article>
        </section>
    );
}

export default Pricing;
