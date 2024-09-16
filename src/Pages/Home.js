import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import Header from "../Main_Components/Header";
import Footer from "../Main_Components/Footer";

import WhatsAppIcon from "../Components/Footer/WhatsAppIcon";

import "./CSS/Home.css";

// importing required assets for HOME
import HomeMainImg from "../Images/Home/Home Image.jpg";
import Home2ndImng from "../Images/Home/Home-img-2.jpg";
// importing images for cards in 3rd section
import responsive from "../Images/Home/Responsive web-image.png";
import ecommerce from "../Images/Home/Ecommerce-img.png";
import BIS from "../Images/Home/Business Intelli-img.png";
import SEO from "../Images/Home/search engine-img.png";
import SMM from "../Images/Home/social media-img.png";
import APP from "../Images/Home/desktop app-img.png";
// importing card images for 4th section
import exprience from "../Images/Home/Experience.png";
import client from "../Images/Home/Client-Centric.png";
import innovative from "../Images/Home/Innovation.png";

// importing AOS
import Aos from "aos";

// Importing Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn, faYoutube, } from "@fortawesome/free-brands-svg-icons";

// importing reCaptcha
import ReCAPTCHA from "react-google-recaptcha";


const Home = () => {


  // Aos funtion
  useEffect(() => {
    Aos.init();
  }, []);


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
      {/* Home Page */}
      <main>
        {/* Main Home img */}
        <div className="home-main-hold">
          <img
            data-aos="fade"
            data-aos-duration="1000"
            data-aos-easing="linear"
            className="home-main-img"
            src={HomeMainImg}
            alt="Main Home Img"
          />
          {/* Main Home img's text */}
          <div
            className="main-home-img-content"
            data-aos="slide-right"
            data-aos-delay="1000"
            data-aos-duration="500"
            data-aos-easing="linear"
            data-aos-once="true"
          >
            <p
              className="main-home-img-text"
              data-aos="fade-zoom-in"
              data-aos-delay="1500"
              data-aos-duration="500"
              data-aos-easing="linear"
              data-aos-once="true"
            >
              Elevating Bussiness through Technology-
              <br />
              Your Gateway to IT Exellence
            </p>
          </div>
        </div>

        {/* Home 2nd section */}
        <div className="row me-0 home-2nd-row">
          <div className="Home-2nd-col1 col-12 col-md-6 ">
            <img
              className="Home-2nd-img"
              src={Home2ndImng}
              alt="Home-2nd-img"
            />
          </div>
          <div className="col-12 col-md-6 order-first order-md-1">
            <div>
              <h6 className="welcome-hubsem">WELCOME TO HUBSEM SOLUTIONS</h6>
              <h2 className="home-2nd-heading">
                Innovative IT Services for Seamless Business Operations
              </h2>
              <p className="home-2nd-para">
                We are dedicated to providing comprehensive and reliable IT
                solutions to help businesses thrive in the digital age. Our team
                of experts specializes in a wide range of IT services, ensuring
                that we can meet all your technology needs. We believe that
                technology should be a powerful tool that enhances your business
                operations. With our IT services, we aim to empower
                organizations by leveraging cutting-edge technology to drive
                growth, increase efficiency, and improve overall productivity.
              </p>
              <div className="container-fluid">
                <div className="row home-2d-box mb-4">
                  <div className="home-2nd-icon col-12 col-md-2">
                    <i className="fa-solid fa-desktop"></i>
                  </div>
                  <div className="col-10">
                    <h4 className="home-2nd-sm-heading">
                      Customized Solutions
                    </h4>
                    <p className="home-2nd-sm-para">
                      Our team works closely with you to design and implement
                      customized solutions that address your immediate needs and
                      align with your long-term vision.
                    </p>
                  </div>
                </div>
                <div className="row home-2d-box mb-5">
                  <div className="home-2nd-icon col-12 col-md-2">
                    <i className="fa-regular fa-lightbulb"></i>
                  </div>
                  <div className="col-10">
                    <h4 className="home-2nd-sm-heading">
                      Cutting-Edge Technology
                    </h4>
                    <p className="home-2nd-sm-para">
                      From implementing robust network infrastructure to
                      developing cutting-edge software applications, we ensure
                      that your business remains technologically competitive and
                      equipped to meet evolving market demands.
                    </p>
                  </div>
                </div>
              </div>
              <button className="history-btn">
                <Link to="/AboutUs" className="history-link">
                  KNOW OUR HISTORY
                </Link>
              </button>
            </div>
          </div>
        </div>

        {/* Services Section [3rd] */}
        <div className="container-fluid home-3rd-row">
          <div className="row d-flex">
            <div className="col-md-9">
              <h6 className="look-at">HAVE A LOOK AT</h6>
              <h2 className="home-3rd-heading">Our Services</h2>
            </div>
            <div className="col-md-3 Home-service-3rd-btn-div mb-5">
              <Link to="/Services" className="history-link">
                <button className="Home-service-3rd-btn">
                  VIEW OUR SERVICES
                </button>
              </Link>
            </div>
          </div>

          {/* Home Section [3rd] CARDS */}

          {/* 1st Row */}
          <div className="row">
            {/* 1st Element */}
            <div className="col-12 col-md-4 pb-5">
              <div
                className="card p-4 remove-3rd-border"
                width="auto"
                height="auto"
              >
                <Link className="sec-3rd-link" to="/ResponsiveWeb">
                  <img
                    src={responsive}
                    className="card-img-top"
                    alt=" responsive web design"
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title sec-3rd-heading">
                    <Link className="sec-3rd-link" to="/ResponsiveWeb">
                      RESPONSIVE WEBSITE DESIGN / DEVELOPMENT
                    </Link>
                  </h5>
                  <p className="card-text sec-3rd-para">
                    Crafting visually stunning and user-friendly websites that
                    adapt seamlessly across all devices
                  </p>
                </div>
              </div>
            </div>

            {/* 2st Element */}
            <div className="col-12 col-md-4 pb-5">
              <div
                className="card p-4 remove-3rd-border"
                width="auto"
                height="auto"
              >
                <Link className="sec-3rd-link" to="/Ecommerce">
                  <img
                    src={ecommerce}
                    className="card-img-top"
                    alt="Ecommerce img"
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title sec-3rd-heading">
                    <Link className="sec-3rd-link" to="/Ecommerce">
                      ECOMMERCE SOLUTIONS
                    </Link>
                  </h5>
                  <p className="card-text sec-3rd-para">
                    Empowering your online business with customized, robust, and
                    scalable eCommerce solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* 3st Element */}
            <div className="col-12 col-md-4 pb-5">
              <div
                className="card p-4 remove-3rd-border"
                width="auto"
                height="auto"
              >
                <Link className="sec-3rd-link" to="/BussinessIntelli">
                  <img src={BIS} className="card-img-top" alt="BIS" />
                </Link>
                <div className="card-body">
                  <h5 className="card-title sec-3rd-heading">
                    <Link className="sec-3rd-link" to="/BussinessIntelli">
                      BUSSINESS INTELLIGENCE SERVICES
                    </Link>
                  </h5>
                  <p className="card-text sec-3rd-para">
                    Transforming data into actionable insights with cutting-edge
                    Business Intelligence services.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 2st Row */}
          <div className="row">
            {/* 4st Element */}
            <div className="col-12 col-md-4 pb-5">
              <div
                className="card p-4 remove-3rd-border"
                width="auto"
                height="auto"
              >
                <Link className="sec-3rd-link" to="/SearchEngine">
                  <img src={SEO} className="card-img-top" alt="SEO" />
                </Link>
                <div className="card-body">
                  <h5 className="card-title sec-3rd-heading">
                    <Link className="sec-3rd-link" to="/SearchEngine">
                      SEARCH ENGINE OPTIMIZATION (SEO)
                    </Link>
                  </h5>
                  <p className="card-text sec-3rd-para">
                    Boosting your online visibility and driving organic traffic
                    with expert Search Engine Optimization (SEO) services.
                  </p>
                </div>
              </div>
            </div>

            {/* 5st Element */}
            <div className="col-12 col-md-4 pb-5">
              <div
                className="card p-4 remove-3rd-border"
                width="auto"
                height="auto"
              >
                <Link className="sec-3rd-link" to="/SocialMediaMarket">
                  <img src={SMM} className="card-img-top" alt="SMM img" />
                </Link>
                <div className="card-body">
                  <h5 className="card-title sec-3rd-heading">
                    <Link className="sec-3rd-link" to="/SocialMediaMarket">
                      SOCIAL MEDIA MARKETING (SMM)
                    </Link>
                  </h5>
                  <p className="card-text sec-3rd-para">
                    Elevating your brand's presence and engagement through
                    strategic Social Media Marketing (SMM) campaigns.
                  </p>
                </div>
              </div>
            </div>

            {/* 6st Element */}
            <div className="col-12 col-md-4 pb-5">
              <div
                className="card p-4 remove-3rd-border"
                width="auto"
                height="auto"
              >
                <Link className="sec-3rd-link" to="/DeskWebMobileApp">
                  <img src={APP} className="card-img-top" alt="APP img" />
                </Link>
                <div className="card-body">
                  <h5 className="card-title sec-3rd-heading">
                    <Link className="sec-3rd-link" to="/DeskWebMobileApp">
                      DESKTOP / WEB / MOBILE APPLICATIONS
                    </Link>
                  </h5>
                  <p className="card-text sec-3rd-para">
                    Tailor-made applications for desktop, web, and mobile,
                    designed to fit your unique business needs perfectly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why we stand Out */}

        <div className="container-fluid sec-4th">
          <div className="stand-out">
            <h3 className="stand-out-txt">Why We Stand Out?</h3>
          </div>
          {/* 1st Row */}
          <div className="row">
            {/* 1st Element */}
            <div className="col-12 col-md-4 pb-5">
              <div
                className="card p-4 remove-3rd-border sec4th-elemnet"
                width="auto"
                height="auto"
              >
                <div className="sec-4th-img-holder">
                  <img
                    src={exprience}
                    className="icon-4th-sec"
                    alt="Experience.png"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title sec-3rd-heading">
                    EXPERTISE AND EXPERIENCE
                  </h5>
                  <p className="card-text sec-3rd-para">
                    Leveraging deep industry knowledge and a wealth of
                    experience, we deliver expertly crafted solutions that drive
                    success and exceed expectations.
                  </p>
                </div>
              </div>
            </div>

            {/* 2st Element */}
            <div className="col-12 col-md-4 pb-5">
              <div
                className="card p-4 remove-3rd-border sec4th-elemnet"
                width="auto"
                height="auto"
              >
                <div className="sec-4th-img-holder">
                  <img src={client} className="icon-4th-sec" alt="client.png" />
                </div>

                <div className="card-body">
                  <h5 className="card-title sec-3rd-heading">
                    CLIENT-CENTRIC APPROACH
                  </h5>
                  <p className="card-text sec-3rd-para">
                    Focused on understanding and meeting your unique needs, our
                    client-centric approach ensures personalized solutions and
                    exceptional service tailored to your goals.
                  </p>
                </div>
              </div>
            </div>

            {/* 3st Element */}
            <div className="col-12 col-md-4 pb-5">
              <div
                className="card p-4 remove-3rd-border sec4th-elemnet"
                width="auto"
                height="auto"
              >
                <div className="sec-4th-img-holder">
                  <img
                    src={innovative}
                    className="icon-4th-sec"
                    alt="innovative.png"
                  />
                </div>

                <div className="card-body">
                  <h5 className="card-title sec-3rd-heading">
                    INNOVATIVE SOLUTIONS
                  </h5>
                  <p className="card-text sec-3rd-para">
                    Bringing creativity and cutting-edge technology together to
                    provide innovative solutions that drive success and set new
                    standards in your industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------Section 5---------------------------------------------- */}
        <div className="overflow-hidden">
          <div className="sec-5th-container row">
            {/* ---------------------------------Follow us--------------------------------------- */}
            <div className="col-12 col-md-5 sec-5th-col-1">
              {/* social media */}
              <h4 className="follow-txt">FOLLOW US ON</h4>
              <div className="home-5th-social-media">
                <a
                  className="home-5th-facebook home-5th-icon"
                  href="https://www.facebook.com/hubsemsolutions"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a
                  className="home-5th-instagram home-5th-icon"
                  href="https://www.instagram.com/hubsemsolutions/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  className="home-5th-twitter home-5th-icon"
                  href="https://x.com/hubsem"
                  target="_blank"
                >
                  {/* <FontAwesomeIcon icon={faSquareTwitter} />   */}
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a
                  className="home-5th-linkedin home-5th-icon"
                  href="https://www.linkedin.com/company/hubsem-software-solutions"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a
                  className="home-5th-youtube home-5th-icon"
                  href="https://www.youtube.com/channel/UCpdFFI7vVU0_qKGSpQ520nQ"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </div>
              <p className="follow-para">
                We look forward to hearing from you and assisting you with any
                inquiries or concerns you may have.
              </p>

              {/* Call us today */}
              <div className="col-12 call-us-container">
                <a href="tel: +91 9500590134">
                  <i className="fa-solid fa-phone call-us-icon"></i>
                </a>
                <div className="col-12">
                  <h3>
                    <a href="tel: +91 9500590134" className="call-us-txt">
                      CALL US TODAY
                    </a>
                  </h3>
                  <p className="call-us-num">
                    <a className="call-5th-info" href="tel: +91 9500590134">
                      +91 9500590134
                    </a>
                  </p>
                </div>
              </div>

              {/* SEND US AN E-Mail */}
              <div className="d-flex call-us-container">
                <a href="mailto: info@hubsem.com">
                  <i className="fa-solid fa-envelope call-us-icon"></i>
                </a>
                <div>
                  <h3>
                    <a href="mailto: info@hubsem.com" className="call-us-txt">
                      SEND US AN EMAIL
                    </a>
                  </h3>
                  <p className="call-us-num">
                    <a className="call-5th-info" href="mailto: info@hubsem.com">
                      info@hubsem.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Office Address */}
              <div className="d-flex call-us-container">
                <i className="fa-regular fa-address-card call-us-icon"></i>
                <div>
                  <h3 className="call-us-txt">OFFICE ADDRESS</h3>
                  <p className="call-us-num">
                    #714A,Spencer Plaza, Phase II, 7th Floor, #769, Anna Salai,
                    Thousand Lights, Chennai-600002
                  </p>
                </div>
              </div>
            </div>

            {/* ----------------------------------Connect On----------------------------------------------- */}
            <div className="col-12 col-md-6 home-5th-form">
              <form className="row g-0 needs-validation" noValidate>
                
                <h4 className="stay-in-touch">STAY IN TOUCH</h4>
                <h2 className="lets-connect">Let's Connect!</h2>

                {/* Full Name */}
                <div className="col-md-12">
                  <label htmlFor="validationCustom01" className="form-label"></label>
                  <input type="text" className="form-control sec-5th-input" id="validationCustom01" placeholder="Full name*" required />
                  <div className="invalid-feedback">
                    Please fill out this field.
                  </div>
                </div>

                {/* E MAIL */}
                <div className="col-md-12">
                  <label htmlFor="validationCustom02" className="form-label"></label>
                  <input type="email" className="form-control sec-5th-input" id="validationCustom01" placeholder="Email*" required />
                  <div className="invalid-feedback">
                    Please fill out this field.
                  </div>
                </div>
                
                {/* PHONE */}
                <div className="col-md-12">
                  <label htmlFor="validationCustom03" className="form-label"></label>
                  <input type="tel" className="form-control sec-5th-input" id="validationCustom01" placeholder="Phone*" required />
                  <div className="invalid-feedback">
                    Please fill out this field.
                  </div>
                </div>
                
                <h4 className="home-interest">Service of Interest:</h4>

                {/* Please choose an option */}
                <div className="col-md-12">
                  <label htmlFor="validationCustom04" className="form-label"></label>
                  <select className="form-select sec-5th-input sec-5th-form-option" id="validationCustom04" required>
                    <option className="sec-5th-form-option">--Please choose an option--</option>
                    <option className="sec-5th-form-option">Web Application</option>
                    <option className="sec-5th-form-option">Mobile Application</option>
                    <option className="sec-5th-form-option">Web Design & Development</option>
                    <option className="sec-5th-form-option">Graphic Design</option>
                    <option className="sec-5th-form-option">Digital Marketing</option>
                    <option className="sec-5th-form-option">Maintenance & Support</option>
                  </select>
                  <div className="invalid-feedback">
                    Please fill out this field.
                  </div>
                </div>

                {/* IT Needs */}
                <div className="col-md-12">
                  <label htmlFor="validationCustom05" className="form-label"></label>
                  <input type="text" className="form-control sec-5th-input" id="validationCustom01" placeholder="Description of Your IT Needs" />
                </div>

                {/* Additional Comments */}
                <div className="mb-3">
                  <label htmlFor="validationTextarea" className="form-label"></label>
                  <textarea className="form-control sec-5th-txtarea" id="validationTextarea" placeholder="Additional Comments or Questions"></textarea>
                </div>
                
                <div className="col-12">
                  <ReCAPTCHA sitekey="Your client site key" onChange={onChange} />
                </div>

                <div className="col-12">
                  <button className=" home-form-btn" type="submit">SUBMIT</button>
                </div>
              </form>

            </div>

          </div>
        </div>
      </main>
      <WhatsAppIcon />
      <Footer />
    </>
  );
};

export default Home;
