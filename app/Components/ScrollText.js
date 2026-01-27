'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import '../styles/scrollText.scss';

export default function ScrollTextReveal({
    text = `YOU HAVE A PRODUCT. MAYBE IT'S BRILLIANT. MAYBE NO ONE KNOWS.

THE INTERNET MOVES FAST. ATTENTION SPANS COLLAPSE. ALGORITHMS SHIFT. THE BRANDS THAT WIN AREN'T THE ONES WITH THE BIGGEST BUDGETS. THEY'RE THE ONES WITH THE RIGHT STORY, TOLD BY THE RIGHT PEOPLE, AT THE RIGHT MOMENT.

THAT'S WHAT WE BUILD. NOT CAMPAIGNS. CULTURAL MOMENTS.

NOT REACH. RESONANCE.

NOT FOLLOWERS. BELIEVERS.`,
}) {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start 0.7', 'end 0.7'],
    });

    const sentences = text
        .split(/(?<=[.!?])\s+/)
        .filter((sentence) => sentence.trim().length > 0);

    const totalWords = sentences.reduce(
        (acc, sentence) => acc + sentence.split(' ').length,
        0,
    );

    let wordIndex = 0;

    return (
        <>
            <section className='text-reveal-container' ref={containerRef}>
                <article>
                    <div>
                        {sentences.map((sentence, sentenceIndex) => {
                            const sentenceWords = sentence.split(' ');
                            const startWordIndex = wordIndex;
                            wordIndex += sentenceWords.length;

                            return (
                                <p key={sentenceIndex}>
                                    {sentenceWords.map((word, wordIdx) => {
                                        const absoluteWordIndex =
                                            startWordIndex + wordIdx;
                                        const start =
                                            absoluteWordIndex / totalWords;
                                        const end =
                                            (absoluteWordIndex + 1) /
                                            totalWords;

                                        return (
                                            <Word
                                                key={wordIdx}
                                                word={word}
                                                start={start}
                                                end={end}
                                                progress={scrollYProgress}
                                            />
                                        );
                                    })}
                                </p>
                            );
                        })}
                    </div>
                </article>
            </section>
        </>
    );
}

function Word({ word, start, end, progress }) {
    const opacity = useTransform(progress, [start, end], [0.075, 1]);

    return (
        <motion.span className='word' style={{ opacity }}>
            {word}
            <motion.span className='word-shadow' style={{ opacity }}>
                {word}
            </motion.span>{' '}
        </motion.span>
    );
}
