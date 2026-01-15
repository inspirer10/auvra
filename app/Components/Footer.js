import React from 'react';
import '../styles/footer.scss';

function Footer() {
    return (
        <footer>
            <h3>A.</h3>
            <article>
                <div className='position'>
                    <h6>COMPANY</h6>
                    <h6>SUPPORT</h6>
                    <h6>CONTACT</h6>
                </div>

                <div className='position'>
                    <p>NETWORKING</p>
                    <p>HELP CENTER</p>
                    <p>LINKEDIN</p>
                </div>

                <div className='position'>
                    <p>SECURITY</p>
                    <p>FAQS</p>
                    <p>FACEBOOK</p>
                </div>
                <div className='position'>
                    <p>CONSULTING</p>
                    <p>POLICIES</p>
                    <p>INSTAGRAM</p>
                </div>

                <div className='position'>
                    <p>TELECOMMUNICATION</p>
                    <p></p>
                    <p>TWITTER</p>
                </div>
            </article>
        </footer>
    );
}

export default Footer;
