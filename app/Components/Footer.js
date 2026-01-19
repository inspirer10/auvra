import React from 'react';
import '../styles/footer.scss';
import { IoLogoCapacitor } from 'react-icons/io5';

function Footer() {
    return (
        <footer>
            <h3>
                <IoLogoCapacitor />
                AUVRA.
            </h3>
            <article>
                <div className='position'>
                    <h6>COMPANY</h6>
                    <h6>SUPPORT</h6>
                    <h6>CONTACT</h6>
                </div>

                <div className='position'>
                    <p>Campaigns</p>
                    <p>HELP CENTER</p>
                    <p>Tik Tok</p>
                </div>

                <div className='position'>
                    <p>Viral Videos</p>
                    <p>FAQS</p>
                    <p>YouTube</p>
                </div>
                <div className='position'>
                    <p>Content Strategy</p>
                    <p>Community Forum</p>
                    <p>INSTAGRAM</p>
                </div>

                <div className='position'>
                    <p>Data Analytics</p>
                    <p className='empty'></p>
                    <p>TWITTER</p>
                </div>
            </article>
        </footer>
    );
}

export default Footer;
