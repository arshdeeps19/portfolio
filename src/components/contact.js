import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Contact.css';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

function Contact() {
    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: true,
        });
    }, []);

    return (
        <div className="contact-section">
            <div className="contact-content" data-aos="fade-up">
                <h2>Contact Me</h2>
                <p>If you’d like to work together or just have a chat, feel free to drop me a message below.</p>
                
                <form className="contact-form">
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea placeholder="Your Message" rows="5" required></textarea>
                    <button type="submit">Send Message</button>
                </form>

                <div className="contact-info">
                    <p>Email: <a href="mailto:singhdeeparsh19@gmail.com">singhdeeparsh19@gmail.com</a></p>
                    <div className="social-links">
                        <a href="https://linkedin.com/in/arshdeepsingh" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/arshdeeps19" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                            <FaTwitter />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
