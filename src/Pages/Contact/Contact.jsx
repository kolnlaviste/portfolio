import { FaLinkedin, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; 
import './Contact.css'

function Contact() {
  return (
    <div className="contact-container" id="contact">
      <h2>Contact Information</h2>
      <div className="socialmedia-container">
        <div className="contact-item">
          <FaLinkedin size={30} color="#0A66C2" />
          <a href="https://www.linkedin.com/in/koln-laviste/" target="_blank" rel="noopener noreferrer">
            <span>LinkedIn</span>
            <p>https://www.linkedin.com/in/koln-laviste/</p>
          </a>
        </div>
        <div className="contact-item">
          <FaPhoneAlt size={30} color="#28A745" />
          <span>Contact No.: </span>
          <p>09159303326</p>
        </div>
        <div className="contact-item">
          <FaEnvelope size={30} color="#D44638" />
          <span>Email: </span>
          <p>roward18@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
