import React, { useState } from 'react';
import { HiDocumentText, HiOutlineRocketLaunch } from 'react-icons/hi2';
import {
    FaArrowUpRightDots,
    FaBolt,
    FaBrain,
    FaBullhorn,
    FaChartLine,
    FaHandshake,
    FaStar,
    FaUsers,
} from 'react-icons/fa6';
import { MdLegendToggle, MdLoop, MdMovie } from 'react-icons/md';
import { BiChart } from 'react-icons/bi';

import '../styles/pricing.scss';

function Pricing() {
    const [activeTab, setActiveTab] = useState('Viral Campaigns');
    const tabs = ['Viral Campaigns', 'Content Production', 'Data & Insights'];

    const launchFeatures = [
        { icon: MdLegendToggle, text: 'End-to-end campaign strategy' },
        { icon: FaUsers, text: 'Curated list of top-tier creators' },
        { icon: BiChart, text: 'Real-time performance dashboard' },
        { icon: MdMovie, text: '10+ High-converting video assets' },
        { icon: FaBolt, text: 'Trend hijacking & script optimization' },
        { icon: FaChartLine, text: 'Guaranteed reach KPI targets' },
    ];

    const retainerFeatures = [
        { icon: FaHandshake, text: 'Dedicated Creator Success Manager' },
        { icon: MdLoop, text: '4-8 Viral videos delivered monthly' },
        { icon: FaBrain, text: 'Monthly trend & competitor analysis' },
        { icon: FaBullhorn, text: 'Community management & engagement' },
        { icon: HiDocumentText, text: 'Monthly deep-dive data reports' },
        { icon: FaStar, text: 'Priority production turnaround' },
    ];

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
                            <div>
                                <p>Viral Campaign Launch</p>
                                <h5>Starts at $15,000</h5>
                            </div>
                            <button>Launch Campaign</button>
                        </div>
                        <div className='card'>
                            <FaArrowUpRightDots className='icon' />
                            <div>
                                <p>Growth Partner Retainer</p>
                                <h5>Starts at $6,000 / mo</h5>
                            </div>
                            <button>Partner with Us</button>
                        </div>
                    </div>

                    <div className='details_wrapper'>
                        <ul>
                            {launchFeatures.map((feature, index) => {
                                const Icon = feature.icon;
                                return (
                                    <li key={index}>
                                        <Icon className='icon' /> {feature.text}
                                    </li>
                                );
                            })}
                        </ul>

                        <ul>
                            {retainerFeatures.map((feature, index) => {
                                const Icon = feature.icon;
                                return (
                                    <li key={index}>
                                        <Icon className='icon' /> {feature.text}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </article>
        </section>
    );
}

export default Pricing;
