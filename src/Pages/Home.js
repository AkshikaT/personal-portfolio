import React, { useEffect } from 'react';
import './Pages.css';
import Navbar from '../Components/Navbar';
import Typewriter from 'typewriter-effect';
import profile from '../facepic.jpeg';

function Home() {
    useEffect(() => {
        // Observer setup moved inside useEffect to ensure it runs after the component mounts
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('expanded'); // Add the 'expanded' class when the line is in view
                    observer.unobserve(entry.target); // Stop observing after the line has expanded
                }
            });
        }, { threshold: 0.5 }); // Trigger when 50% of the element is in view

        // Get all horizontal lines
        const horizontalLines = document.querySelectorAll('.horizontal-line');
        horizontalLines.forEach(line => {
            observer.observe(line); // Observe each horizontal line
        });

        // Cleanup observer when component unmounts
        return () => {
            horizontalLines.forEach(line => observer.unobserve(line));
        };
    }, []); // Empty dependency array ensures this runs once on mount

    return (
        <>
        <Navbar/>
        <div className='container'>
            <div className='header'>
                <Typewriter
                    onInit={(typewriter) => { 
                        typewriter
                            .typeString("Hello world! My name is Akshika.")
                            .start();
                    }}
                />
            </div>

            <div className="horizontal-line-container">
                <div className="horizontal-line"></div>
            </div>

            <div className='about'>
                <img src={profile} alt="Akshika pic" style={{ width: '350px', height: 'auto' }} className='about-item1'/>
                <div className='about-item2'>
                    <h1>Who am I?</h1>
                    <p>Hi! I am Akshika Thiyagendran, and I am a Software Engineering student at McMaster University! I enjoy creating innovative solutions and exploring new technologies. In my free time, I love working on personal projects, learning new skills, and sharing knowledge.</p>
                </div>
            </div>

            <div className="horizontal-line-container">
                <div className="horizontal-line"></div>
            </div>

            <div className='knowledge'>
                <ul className='languages'>
                    <h1>Languages: </h1>
                    <li>Java</li>
                    <li>Python</li>
                    <li>C</li>
                    <li>Matlab</li>
                    <li>Verilog</li>
                    <li>HTML</li>
                    <li>JavaScript</li>
                    <li>CSS</li>
                </ul>
                <ul className='tools'>
                    <h1>Tools & Technologies:</h1>
                    <li>Maven</li>
                    <li>Bash (shell scripting)</li>
                    <li>Git</li>
                    <li>Linux</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>AutoDesk Inventor</li>
                </ul>
            </div>

            <div className="horizontal-line-container">
                <div className="horizontal-line"></div>
            </div>

            {/* <div className='resume'>
                <h1>My Resume</h1>
                <iframe title="resume" src="https://drive.google.com/file/d/1gNTkMx8Qm-8r79N8xT9DigIiv8_K0yW5/preview" width="640" height="480" allow="autoplay"></iframe>
            </div> */}
        </div>
        </>
    );
}

export default Home;
