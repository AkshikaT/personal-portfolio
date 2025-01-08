import React, { useEffect } from 'react';
import './Projects.css'
import './Pages.css'
import design from '../Components/design.png';
import video from '../Components/video.MOV';
import Navbar from '../Components/Navbar';
 
function Projects() {
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
    }, []);


    return (
        <>
        <Navbar/>
        <div className='header'>
            <h1>My Projects</h1>
        </div>

        <div className="horizontal-line-container">
            <div className="horizontal-line"></div>
        </div>

        <div className='allProjects'>
                <ul>
                    <li>
                        <h1>1. New York Times' Spelling Bee Game (2024)</h1>
                        <p>Redesigned the New York Times' Spelling Bee Game using Linux command line tools, written in C and Bash. The project focuses on providing a functional and interactive command-line experience. Explore the repository for details!</p>
                        <a 
                            href="https://github.com/AkshikaT/spelling-bee.git"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                textDecoration: 'none',
                                color: 'white',
                                backgroundColor: '#000000',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                fontWeight: 'bold',
                                marginTop: '10px'
                            }}
                        >
                            View Repository
                        </a>
                    </li>

                    <li>
                        <h1>2. Machine Learning Data Processing System (2024)</h1>
                        <p>Processed and cleaned data from the Wisconsin Breast Cancer Database using a custom-built Linux command line utility in C. This project highlights my ability to handle real-world data challenges effectively. Check out the repository for more insights!</p>
                        <a 
                            href="https://github.com/Sam-Scott-McMaster/the-data-processing-assignment-AkshikaT"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                textDecoration: 'none',
                                color: 'white',
                                backgroundColor: '#000000',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                fontWeight: 'bold',
                                marginTop: '10px'
                            }}
                        >
                            View Repository
                        </a>
                    </li>

                    <li>
                        <h1>3. Splitsmart (In Progress, 2024)</h1>
                        <p>Currently developing Splitsmart, an app created using React for the W3B UofT Hackathon. This app simplifies tipping calculations and was inspired by the Annex Hotel, the Hackathon sponsor. Stay tuned for updates!</p>
                        <a 
                            href="https://github.com/AkshikaT/SplitSmart.git"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                textDecoration: 'none',
                                color: 'white',
                                backgroundColor: '#000000',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                fontWeight: 'bold',
                                marginTop: '10px'
                            }}
                        >
                            View Repository
                        </a>
                    </li>

                    <li>
                        <h1>4. Redesigning the Recycling System with Q-bots (2023)</h1>
                        <p>Collaborated with a team to design a recycling mechanism that efficiently deploys materials from a hopper into a bin using a rotary actuator. This project combined mechanical innovation with environmental goals.</p>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img 
                                src={design} 
                                alt="design" 
                                style={{ width: '350px', height: 'auto', marginRight: '20px' }} 
                                className='project'
                            />
                            
                            <div className="video-container">
                                <video 
                                    className="project" 
                                    src={video} 
                                    style={{ width: '400px', height: 'auto' }}
                                    autoPlay 
                                    loop 
                                    muted 
                                    playsInline
                                />
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

        </>
    );
}

export default Projects;