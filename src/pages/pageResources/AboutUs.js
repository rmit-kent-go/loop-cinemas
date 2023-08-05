import React from 'react';

import './AboutUs.css';

function AboutUs() {
    return (
        <section className="about-us-section">
            <div className='about-us-text'>
                <h1>ABOUT US</h1>
                <p>Welcome to Loop Cinemas, where movie magic comes to life.</p>
                <p>Experience immersive cinema with state-of-the-art technology and a curated selection of blockbusters, classics, and indie gems.</p>
                <p>Our commitment to excellence ensures unforgettable moments on the big screen.</p>
                <p>Join us at Loop Cinemas for a reel adventure unlike any other.</p>
            </div>
            <div className='about-us-img'>
                <img src='https://cdn.eventcinemas.com.au/cdn/resources/experience/vmax/about/images/840abc97-1d62-436e-b088-01611daef1cf.jpg'/>
            </div>
        </section>
    );
}

export default AboutUs
