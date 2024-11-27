import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';

function About() {
    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: true,
        });
    }, []);

    return (
        <div className="about-section">
            <div className="about-content" data-aos="fade-up">
                <img src="src/components/about.jpg" alt="Arshdeep Singh" className="about-photo" />
                <h2>About Me</h2>
                <p>
                    Hi there! I'm <strong>Arshdeep Singh</strong>, a passionate web developer specializing in building interactive and dynamic web applications.
                    I have experience working with modern web technologies such as <strong>React, JavaScript, HTML, CSS, Java, Spring Boot, and more.</strong>
                </p>
                <p>
                    I enjoy solving complex problems, creating efficient solutions, and learning new things every day.
                    Whether it's a technical challenge or a creative endeavor, I love putting my skills to the test and continuously growing.
                </p>
                <p>
                    Outside of coding, I love <strong>exploring new places, listening to music, and reading tech blogs.</strong>
                    I believe that life is a journey of learning, and I'm always excited to take on new adventures, both personally and professionally.
                </p>
                <button onClick={() => window.location.href = '/contact'}>Get in Touch</button>
            </div>
        </div>
    );
}

export default About;
