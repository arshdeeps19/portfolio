import React, { useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './home.css';

function Home() {
    useEffect(() => {
        AOS.init({
            duration: 2000, // Animation duration in milliseconds
            once: true, // Whether the animation should happen only once
        });
    }, []);

    return (
        <div className="hero-section">
            <div className="content" data-aos="fade-up">
                <img src="programming-background-collage.jpg" alt="Arshdeep Singh" className="profile-pic" />
                <h1>Hi, I'm Arshdeep Singh</h1>
                <h2>
                    <span>I am </span>
                    <span style={{ color: '#f8f5f5' }}>
                        <Typewriter
                            words={['a Web Developer', 'a Creative Thinker', 'a Problem Solver']}
                            loop={true}
                            cursor
                            cursorStyle="|"
                            typeSpeed={100}
                            deleteSpeed={70}
                            delaySpeed={1000}
                        />
                    </span>
                </h2>
                <p>A passionate Web Developer specializing in building interactive and scalable web applications.</p>
                <button onClick={() => window.location.href = '/projects'}>View My Work</button>
                <div className="social-links">
                    <a href="https://linkedin.com/in/arshdeepsingh" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                    <a href="https://github.com/arshdeeps19" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;
