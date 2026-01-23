import React from 'react';
import FaqItem from './FaqItem';
import '../styles/faq.scss';

const faqsData = [
    {
        id: 1,
        question:
            'What is your process for creating high-converting campaigns?',
        answer: 'Our process is data-first. We start by analyzing audience signals and platform trends to identify opportunities. Then, we pair you with vetted creators who align with your brand ethos. From scripting to post-production, every piece of content is engineered for retention and algorithmic reach, not just aesthetics.',
    },
    {
        id: 2,
        question: 'How do you measure success and ROI?',
        answer: 'We move beyond vanity metrics like views. Our dashboard tracks deeper KPIs: engagement rates, click-throughs (CTR), audience retention graphs, and direct conversion attribution. You get a transparent monthly report showing exactly how your budget translates into cultural momentum and sales.',
    },
    {
        id: 3,
        question: 'Which platforms do you specialize in?',
        answer: 'We focus where the attention is: TikTok, Instagram Reels, and YouTube Shorts. Our vertical-first approach ensures content feels native to these platforms, maximizing organic reach while being ready for paid amplification (Spark Ads, Whitelisting).',
    },
    {
        id: 4,
        question: 'Do you handle creator negotiations and contracts?',
        answer: 'Yes, end-to-end. We manage the entire creator relationship—from outreach and rate negotiation to usage rights and deliverables. You sign one contract with AUVRA, and we handle the complexity of managing 15-20 individual creators for your campaign.',
    },
    {
        id: 5,
        question: 'What is the typical turnaround time for a campaign?',
        answer: 'Speed is key in the creator economy. For a standard campaign, we aim for a 3-4 week turnaround from strategy approval to first post. Our "Rapid Response" team can also hijack trending topics within 48-72 hours for timely brand relevance.',
    },
];

function FAQ() {
    return (
        <section className='faq_section' id='faq'>
            <h2>FAQs</h2>
            <p className='subHeading'>
                Discover clear answers to the questions we’re asked most often
                about our branding and web development solutions
            </p>

            <main className='faqs-container'>
                {faqsData.map(({ id, question, answer }) => (
                    <FaqItem key={id} question={question} answer={answer} />
                ))}
            </main>
        </section>
    );
}

export default FAQ;
