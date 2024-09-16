import React from 'react'
import Header from '../Main_Components/Header'
import Footer from '../Main_Components/Footer'
import WhatsAppIcon from '../Components/Footer/WhatsAppIcon'
import { useEffect } from 'react'

// importing css
import './CSS/ContactUs.css'

// Importing Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn, faYoutube, } from "@fortawesome/free-brands-svg-icons";

// importing reCaptcha
import ReCAPTCHA from "react-google-recaptcha";

// importing imaage for section 2
import contactusimg from '../Images/ContactUs/Email_marketing.gif'

const ContactUs = () => {

  // for form submission and error message
  useEffect(() => {
    const form = document.querySelector('form');
    
    if (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault(); // Prevent form submission if invalid
          event.stopPropagation(); // Stop the event from propagating further
        }

        form.classList.add('was-validated'); // Apply Bootstrap validation styles
      });
    }
  }, []);  // Empty dependency array to ensure this effect runs only once


  // using reCaptcha
  function onChange(value) {
    console.log("Captcha value:", value);
  }

  return (
    <>
      <Header />
      <main>
        {/* -----------------------------contact us--------------------------------------------- */}
        <div>
          <h1 className='contactus-s1-parallax-text'>contact us</h1>
          <div className='contactus-s1-parallax'></div>
        </div>

        {/* ------------------------------contact details----------------------------------------- */}
        <div className='row contactus-sec2-container'>
          {/*column 1  */}
          <div className='col-12 col-md-6'>
            <div className='row contactus-sec2-box'>
              <div className='col-12 col-sm-6 col-md-6 contactus-sec2-pad'>
                <i className="fa-solid fa-phone contactus-sec2-icon"></i>
                <h5 className='contactus-sec2-heading'>phone</h5>
                <h3><a className='contactus-sec2-info' href="tel: +91 9500590134">+91 95005 90134</a></h3>
              </div>
              <div className='col-12 col-sm-6 col-md-5'>
                <i className="fa-solid fa-envelope contactus-sec2-icon"></i>
                <h5 className='contactus-sec2-heading'>Mail us</h5>
                <h3><a className='contactus-sec2-info' href="mailto: info@hubsem.com">info@hubsem.com</a></h3>
              </div>
            </div>
            <div className='row contactus-sec2-box'>
              <div className='col-12 col-md-12'>
                <i className="fa-solid fa-map contactus-sec2-icon"></i>
                <h5 className='contactus-sec2-heading'>Office Address</h5>
                <h3 className='contactus-sec2-info'>#714A, Spencer Plaza,Phase II, 7th Floor, #769, Anna Salai, Thousand Lights, Chennai-600 002, Tamilnadu, India.</h3>
              </div>
            </div>
          </div>

          {/* column 2 */}
          <div className='col-12 col-md-6 mt-3 d-flex justify-content-center'>
            <img  src={contactusimg} height={'80%'} width={'80%'} alt='Email_marketing.gif'/>
            {/* <img  src={contactusimg2} height={'80%'} width={'80%'} alt='contact-gif.gif'/> */}
          </div>

        </div>

        {/* ------------------------------get in touch------------------------------------------- */}

        <div className="overflow-hidden">
          <div className="contactus-sec-5th-container row">
            {/* ---------------------------------Follow us--------------------------------------- */}
            <div className="col-12 col-md-5 contactus-sec-5th-col-1">
              <h4 className="contactus-stay-in-touch">GET IN TOUCH</h4>
              <h2 className="contactus-lets-connect">We'd love to hear from you.</h2>
              <p className='contactus-s3-para'>Let's Connect. Please feel free to reach out to us through any of the provided channels, and we will do our best to respond to your inquiry as soon as possible. 
              <br/><br/>If you have any specific questions or require assistance with a particular issue, please provide us with the necessary details so that we can better understand and address your concerns. We value your feedback and strive to provide excellent customer service.</p>
              {/* social media */}
              <h4 className="contactus-follow-txt">FOLLOW US ON</h4>
              <div className="contactus-5th-social-media">
                <a
                  className="contactus-5th-facebook contactus-5th-icon"
                  href="https://www.facebook.com/hubsemsolutions"
                  target="_blank" rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a
                  className="contactus-5th-instagram contactus-5th-icon"
                  href="https://www.instagram.com/hubsemsolutions/"
                  target="_blank" rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  className="contactus-5th-twitter contactus-5th-icon"
                  href="https://x.com/hubsem"
                  target="_blank" rel="noreferrer"
                >
                  {/* <FontAwesomeIcon icon={faSquareTwitter} />   */}
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a
                  className="contactus-5th-linkedin contactus-5th-icon"
                  href="https://www.linkedin.com/company/hubsem-software-solutions"
                  target="_blank" rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a
                  className="contactus-5th-youtube contactus-5th-icon"
                  href="https://www.youtube.com/channel/UCpdFFI7vVU0_qKGSpQ520nQ"
                  target="_blank" rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </div>
            </div>

            {/* ----------------------------------Connect On----------------------------------------------- */}
            <div className="col-12 col-md-6 contactus-5th-form">
              <form className="row g-0 needs-validation" noValidate>

                {/* Full Name */}
                <div className="col-md-12">
                  <label htmlFor="validationCustom01" className="form-label"></label>
                  <input type="text" className="form-control contactus-sec-5th-input" id="validationCustom01" placeholder="Full name*" required />
                  <div className="invalid-feedback">
                    Please fill out this field.
                  </div>
                </div>

                {/* E MAIL */}
                <div className="col-md-12">
                  <label htmlFor="validationCustom02" className="form-label"></label>
                  <input type="email" className="form-control contactus-sec-5th-input" id="validationCustom01" placeholder="Email*" required />
                  <div className="invalid-feedback">
                    Please fill out this field.
                  </div>
                </div>
                
                {/* PHONE */}
                <div className="col-md-12">
                  <label htmlFor="validationCustom03" className="form-label"></label>
                  <input type="tel" className="form-control contactus-sec-5th-input" id="validationCustom01" placeholder="Phone*" required />
                  <div className="invalid-feedback">
                    Please fill out this field.
                  </div>
                </div>
                
                <h4 className="contactus-interest">Service of Interest:</h4>

                {/* Please choose an option */}
                <div className="col-md-12">
                  <label htmlFor="validationCustom04" className="form-label"></label>
                  <select className="form-select contactus-sec-5th-input contactus-sec-5th-form-option" id="validationCustom04" required>
                    <option className="contactus-sec-5th-form-option">--Please choose an option--</option>
                    <option className="contactus-sec-5th-form-option">Web Application</option>
                    <option className="contactus-sec-5th-form-option">Mobile Application</option>
                    <option className="contactus-sec-5th-form-option">Web Design & Development</option>
                    <option className="contactus-sec-5th-form-option">Graphic Design</option>
                    <option className="contactus-sec-5th-form-option">Digital Marketing</option>
                    <option className="contactus-sec-5th-form-option">Maintenance & Support</option>
                  </select>
                  <div className="invalid-feedback">
                    Please fill out this field.
                  </div>
                </div>

                {/* IT Needs */}
                <div className="col-md-12">
                  <label htmlFor="validationCustom05" className="form-label"></label>
                  <input type="text" className="form-control contactus-sec-5th-input" id="validationCustom01" placeholder="Description of Your IT Needs" />
                </div>

                {/* Additional Comments */}
                <div className="mb-3">
                  <label htmlFor="validationTextarea" className="form-label"></label>
                  <textarea className="form-control contactus-sec-5th-txtarea" id="validationTextarea" placeholder="Additional Comments or Questions"></textarea>
                </div>
                
                <div className="col-12">
                  <ReCAPTCHA sitekey="Your client site key" onChange={onChange} />
                </div>

                <div className="col-12">
                  <button className=" contactus-form-btn" type="submit">SUBMIT</button>
                </div>
              </form>

            </div>

          </div>
        </div>

      </main>
      <WhatsAppIcon />
      <Footer />
    </>
  )
}

export default ContactUs
