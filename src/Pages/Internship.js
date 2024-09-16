import React from 'react'
import Header from '../Main_Components/Header'
import Footer from '../Main_Components/Footer'
import WhatsAppIcon from '../Components/Footer/WhatsAppIcon'

import { useEffect } from 'react'

// importing CSS
import './CSS/Internship.css'

// importing reCaptcha
import ReCAPTCHA from "react-google-recaptcha";

const Internship = () => {

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
        {/* -----------------------------------Internship-------------------------------------------------- */}
        <div>
          <h1 className='Internship-s1-parallax-text'>Internship program</h1>
          <div className='Internship-s1-parallax'></div>
        </div>

        {/* -------------------------------welcome-------------------------------------------------------- */}
        <div className='internship-sec2-container'>
          <p className='internship-sec2-para'>Welcome to our Internship Program! We are excited to offer valuable opportunities for aspiring professionals to gain real-world experience and enhance their skills in IT Services. Our internship program is designed to provide hands-on learning, mentorship, and exposure to the inner workings of our company. To apply for our internship program, please fill the form below:</p>
        </div>

        {/* ------------------------------------Form----------------------------------------------------- */}
        <div className="col-12 col-md-12 internship-form">
              <form className="row g-0 needs-validation" noValidate>

                {/* Full Name */}
                <div className="col-md-12">
                  <label htmlFor="validationCustom01" className="form-label"></label>
                  <input type="text" className="form-control internship-sec-5th-input" id="validationCustom01" placeholder="Full name*" required />
                  <div className="invalid-feedback internship-sec3-error-msg">
                    Please fill out this field.
                  </div>
                </div>

                {/* E MAIL */}
                <div className="col-md-12">
                  <label htmlFor="validationCustom02" className="form-label"></label>
                  <input type="email" className="form-control internship-sec-5th-input" id="validationCustom01" placeholder="Email*" required />
                  <div className="invalid-feedback internship-sec3-error-msg">
                    Please fill out this field.
                  </div>
                </div>
                
                {/* PHONE */}
                <div className="col-md-12">
                  <label htmlFor="validationCustom03" className="form-label"></label>
                  <input type="tel" className="form-control internship-sec-5th-input" id="validationCustom01" placeholder="Phone*" required />
                  <div className="invalid-feedback internship-sec3-error-msg">
                    Please fill out this field.
                  </div>
                </div>
                
                {/* ADDRESS */}
                <div className="col-md-12">
                  <label htmlFor="validationCustom04" className="form-label"></label>
                  <input type="text" className="form-control internship-sec-5th-input" id="validationCustom01" placeholder="Address*" required />
                  <div className="invalid-feedback internship-sec3-error-msg">
                    Please fill out this field.
                  </div>
                </div>
                
                {/* CITY */}
                <div className="col-md-12">
                  <label htmlFor="validationCustom05" className="form-label"></label>
                  <input type="text" className="form-control internship-sec-5th-input" id="validationCustom01" placeholder="City*" required />
                  <div className="invalid-feedback internship-sec3-error-msg">
                    Please fill out this field.
                  </div>
                </div>
                
                {/* STATE/PROVINCE */}
                <div className="col-md-12">
                  <label htmlFor="validationCustom06" className="form-label"></label>
                  <input type="text" className="form-control internship-sec-5th-input" id="validationCustom01" placeholder="State/Province*" required />
                  <div className="invalid-feedback internship-sec3-error-msg">
                    Please fill out this field.
                  </div>
                </div>
                
                
                {/* COUNTRY */}
                <div className="col-md-12">
                  <label htmlFor="validationCustom07" className="form-label"></label>
                  <input type="text" className="form-control internship-sec-5th-input" id="validationCustom01" placeholder="Country*" required />
                  <div className="invalid-feedback internship-sec3-error-msg">
                    Please fill out this field.
                  </div>
                </div>
                
                {/* ZIP/POSTAL CODE */}
                <div className="col-md-12">
                  <label htmlFor="validationCustom08" className="form-label"></label>
                  <input type="number" className="form-control internship-sec-5th-input" id="validationCustom01" placeholder="ZIP/Postal Code*" required />
                  <div className="invalid-feedback internship-sec3-error-msg">
                    Please fill out this field.
                  </div>
                </div>
                
                <h4 className="internship-interest">Internship Position of Interest</h4>
                {/* Please choose an option */}
                <div className="col-md-12">
                  <label htmlFor="validationCustom09" className="form-label"></label>
                  <select className="form-select internship-sec-5th-input internship-sec-5th-form-option" id="validationCustom04" required>
                    <option className="internship-form-option">--Please choose an option--</option>
                    <option className="internship-form-option">Front End Developer</option>
                    <option className="internship-form-option">Back End Developer</option>
                    <option className="internship-form-option">Full Stack Developer</option>
                    <option className="internship-form-option">Digital Marketing</option>
                    <option className="internship-form-option">Mobile App Development</option>
                    <option className="internship-form-option">Web App Development</option>
                  </select>
                  <div className="invalid-feedback internship-sec3-error-msg">
                    Please fill out this field.
                  </div>
                </div>

                {/* ReCaptcha */}
                <div className="col-12 internship-sec3-captcha">
                  <ReCAPTCHA sitekey="Your client site key" onChange={onChange} />
                  <div className="invalid-feedback internship-sec3-error-msg">
                    Please fill out this field.
                  </div>
                </div>

                {/* SUBMIT */}
                <div className="col-12">
                  <button className=" internship-form-btn" type="submit">SUBMIT</button>
                </div>

                <div className="invalid-feedback internship-sec3-final-error-msg">
                  One or more fields have an error. Please check and try again.
                </div>

              </form>

            </div>



      </main>

      <WhatsAppIcon />
      <Footer />
    </>
  )
}

export default Internship
