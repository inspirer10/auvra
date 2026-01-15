import Image from 'next/image';
import React from 'react';

import '../styles/header.scss';

function Header() {
    return (
        <header>
            <Image
                className='image'
                src='/image.png'
                height={700}
                width={1200}
                quality={90}
                alt='Fractal image'
            />
            <h1>
                The Interface Between <br /> Energy and Consciousness
            </h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button>Request Early Access</button>
        </header>
    );
}

export default Header;
