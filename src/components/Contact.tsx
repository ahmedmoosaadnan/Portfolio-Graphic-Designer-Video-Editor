import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:moosaalvi963@gmail.com" data-cursor="disable">
                moosaalvi963@gmail.com
              </a>
            </p>
            <h4>Phone & Location</h4>
            <p>
              <a href="tel:+923144827963" data-cursor="disable">
                +92 314 4827963
              </a>
            </p>
            <p style={{ marginTop: "4px", fontSize: "14px", opacity: 0.8 }}>
              Lahore, Pakistan
            </p>
          </div>
          <div className="contact-box">
            <h4>Direct Connect</h4>
            <a
              href="https://wa.me/923144827963"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
              rel="noreferrer"
            >
              WhatsApp <MdArrowOutward />
            </a>
            <a
              href="https://drive.google.com/drive/folders/17wvK8kzfE2FWYccVCtRgbHOoet48exsR?usp=sharing"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
              rel="noreferrer"
            >
              View Resume <MdArrowOutward />
            </a>
            <a
              href="mailto:moosaalvi963@gmail.com"
              data-cursor="disable"
              className="contact-social"
            >
              Get in Touch <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Ahmed Moosa Adnan</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
