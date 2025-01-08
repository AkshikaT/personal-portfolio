import React, { useEffect } from 'react';
import './Contact.css';
import './Pages.css';
import Navbar from '../Components/Navbar';

function Contact() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('expanded'); // Add the 'expanded' class when the line is in view
                    observer.unobserve(entry.target); // Stop observing after the line has expanded
                }
            });
        }, { threshold: 0.5 });

        const horizontalLines = document.querySelectorAll('.horizontal-line');
        horizontalLines.forEach(line => {
            observer.observe(line); // Observe each horizontal line
        });

        return () => {
            horizontalLines.forEach(line => observer.unobserve(line));
        };
    }, []);

    return (
        <>
        <Navbar/>
        <div className='header'>
            <h1>Contact me!</h1>
        </div>

        <div className="horizontal-line-container">
            <div className="horizontal-line"></div>
        </div>

        <div className='contacts'>
            <div className='info'>
                <h1>LinkedIn</h1>
                <a
                href="https://www.linkedin.com/in/akshika-thiyagendran-7ab77222b/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    display: 'inline-block',
                    padding: '10px 20px',
                    color: 'white',
                    backgroundColor: '#7393B3',
                    textDecoration: 'none',
                    fontSize: '18px',
                    borderRadius: '5px',
                    fontWeight: 2,
                }}
            >
                Visit My LinkedIn Profile
            </a>
            </div>
            <div className='info'>
                <h1>E-mail</h1>
                <h3>thiyaa3@mcmaster.ca</h3>
            </div>
            <div className='info'>
                <h1>GitHub</h1>
                <h3>Username: AkshikaT</h3>
            </div>
        </div>

        </>
    );
}
export default Contact;