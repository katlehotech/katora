import React from 'react';
import './Portfolio.css';
import heroImage from '../../../assets/start-business-guy-on-laptop.jpg';

function Portfolio() {
    return (
        <section id='portfolio' className='portfolio-container'>
            <div className='portfolio'>
                <div className='portfolio-item'>
                    <img src={heroImage} alt='katora project website'></img>
                </div>
                <div className='portfolio-item'>
                    <img src={heroImage} alt='katora project android'></img>
                </div>
                <div className='portfolio-item'>
                    <img src={heroImage} alt='katora project ios'></img>
                </div>
                <div className='portfolio-item'>
                    <img src={heroImage} alt='katora project business'></img>
                </div>
                <div className='portfolio-item'>
                    <img src={heroImage} alt='kataro project design'></img>
                </div>
                <div className='portfolio-item'>
                    <img src={heroImage} alt='kataro project software'></img>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;