import React from 'react'
import Header from '../Main_Components/Header'
import Footer from '../Main_Components/Footer'
import WhatsAppIcon from '../Components/Footer/WhatsAppIcon'

import { useEffect } from 'react'
import { Link } from 'react-router-dom'

// importing assets from data
import { CADVertical, CADTechStack } from '../Data'

// importing Slider for section 5
import Slider from 'react-slick'

// importing vertical slider elements
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

// importing fonts for vertical slider
import { faDesktop, faComputer, faMobile } from '@fortawesome/free-solid-svg-icons'

// ------------------------------------------------------------------------------------------------------------

// importing css
import './CSS/CAD.css'

// importing AOS
import Aos from "aos";

// importing images for section 1
import CADSec1Img from '../Images/CAD/undraw_Browsing_re_eycn.png'
// importing images for section 3
import CADsec3Img from '../Images/CAD/undraw_progressive_app_m9ms-1024x605.webp'
// importing card images for 4th section
import exprience from "../Images/Home/Experience.png";
import client from "../Images/Home/Client-Centric.png";
import innovative from "../Images/Home/Innovation.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Mapping the font awesome icons to variable
const iconMapcad = {
  faDesktop:faDesktop,
  faComputer:faComputer,
  faMobile:faMobile
}

const DeskWebMobileApp = () => {

  // Aos funtion
  useEffect(() => {
    Aos.init();
  }, []);

  //  icon Slider settings
  const settings = {
    dots: false,          // Hide dots
    infinite: true,       // Infinite scrolling
    speed: 1000,           // Scrolling speed
    slidesToShow: 6,      // Show 6 cards at a time
    slidesToScroll: 1,    // Scroll 1 card at a time
    autoplay: true,       // Auto-scroll
    autoplaySpeed: 2000,  // Stop for 2 seconds
    pauseOnHover: false,   // Pause when hovering
    draggable: true,      // Enable dragging
    swipeToSlide: true,   // Allow swipe to slide functionality
    arrows: false,        //Removes the next and previous buttons
    responsive: 
    [
      {
        breakpoint: 763,
        settings: 
        {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 576,
        settings: 
        {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <>
      <Header />

      <main>

        {/* -----------------------------------section 1-------------------------------------------- */}
        <div className='row CAD-sec1-container'>
          {/* column 1 */}
          <div className='col-12 col-sm-12 col-md-6 CAD-col1-container'>
            <h4 className='CAD-sec1-creating-txt'>Tailored Solutions for Every Platform</h4>
            <h2 className='CAD-sec1-responsive-txt'>Custom Desktop / Web / Mobile Application Development</h2>
            <h5 className='CAD-sec1-engaging-txt'>Innovative, Versatile, and Domain-Specific</h5>
            <p className='CAD-sec1-para'>At Hubsem, we specialize in developing custom desktop, web, and mobile applications tailored to meet the unique needs of your business. Our expertise spans across various technologies and platforms, enabling us to deliver robust, scalable, and high-performance applications. Whether you need a Windows-based desktop application, a dynamic web application, or a cross-platform mobile app, our team has the skills and experience to bring your vision to life.</p>
          </div>
          {/* column 2 */}
          <div className='col-12 col-sm-12 col-md-6 CAD-col2-container' data-aos="slide-left"
            data-aos-delay="500"
            data-aos-duration="2000"
            data-aos-easing="step-end"
            data-aos-once="true">
            <img className='CADSec1Img' src={CADSec1Img} alt='undraw_Browsing_re_eycn.png' />
          </div>
        </div>

        {/* -----------------------------------section 2------------------------------------------- */}
        <div className='cad-sec2-container'> 
          <h2 className='cad-sec2-main-heading'>Our Key Offerings</h2>
          <div className='cad-sec2-custom-timeline'>
            <VerticalTimeline>
              {
                CADVertical.map( element => {
                  return(
                      <VerticalTimelineElement key={element.id} icon={ <FontAwesomeIcon icon={iconMapcad[element.icon]} /> }  >
                        <h3 className='cad-sec2-heading' >{element.title}</h3>
                        <p className='cad-sec2-para' >{element.description}</p>
                      </VerticalTimelineElement>
                    )
                } )
              }
            </VerticalTimeline>
          </div>

        </div>

        {/* -----------------------------------section 3------------------------------------------- */}
        <div className='row cad-sec3-container'>
          {/* column 1 */}
          <div className='col-12 col-sm-12 col-md-6 cad-sec3-col1-container' data-aos="slide-right"
            data-aos-delay="500"
            data-aos-duration="2000"
            data-aos-easing="step-end"
            data-aos-once="true">
            <img className='cadSec3Img' src={CADsec3Img} alt='undraw_progressive_app_m9ms-1024x605.webp' />
          </div>
          {/* column 2 */}
          <div className='col-12 col-sm-12 col-md-6 cad-sec3-col2-container'>
            <ul className='cad-sec3-li-container'>
              <h2 className='cad-sec3-why'>Why Invest in Custom Application Development?</h2>
              <li className='cad-sec3-li d-flex'>
                <i className="fa-solid fa-globe"></i>
                <div>
                  <b>Tailored Solutions: </b>Custom applications are designed to address the specific needs and challenges of your business. By opting for tailored solutions, you ensure that your application aligns perfectly with your processes and goals, leading to increased efficiency and productivity.
                </div>
              </li>
          
              <li className='cad-sec3-li d-flex'>
                <i className="fa-solid fa-globe"></i>
                <div>
                  <b>Enhanced User Experience: </b>Our applications are designed with the end-user in mind. By focusing on user experience, we create intuitive interfaces and seamless interactions that enhance user satisfaction and engagement, ultimately leading to higher adoption rates.
                </div>
              </li>
          
              <li className='cad-sec3-li d-flex'>
                <i className="fa-solid fa-globe"></i>
                <div>
                  <b>Scalability and Flexibility: </b>Custom applications are built to scale with your business. As your business grows and evolves, your application can be easily updated and expanded to meet new requirements, ensuring long-term viability and performance.
                </div>
              </li>
          
              <li className='cad-sec3-li d-flex border-0'>
                <i className="fa-solid fa-globe"></i>
                <div>
                  <b>Integration Capabilities: </b>Our custom applications can be integrated with your existing systems and third-party services, providing a unified solution that enhances your overall IT ecosystem. This integration capability ensures that your business operations run smoothly and efficiently.
                </div>
              </li>
            </ul>
          </div>
          
        </div>

        {/* -----------------------------------section 4--------------------------------------------- */}
        <div className="container-fluid cad-sec-4th">
          <div className="cad-stand-out">
            <h3 className="cad-stand-out-txt">Why We Stand Out?</h3>
          </div>
          {/* 1st Row */}
          <div className="row">
            {/* 1st Element */}
            <div className="col-12 col-md-4 pb-5">
              <div
                className="card p-4 border-0 cad-sec4th-elemnet"
                width="auto"
                height="auto"
              >
                <div className="cad-sec-4th-img-holder">
                  <img
                    src={exprience}
                    className="cad-icon-4th-sec"
                    alt="Experience.png"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title cad-sec4-heading">
                    EXPERTISE AND EXPERIENCE
                  </h5>
                  <p className="card-text cad-sec4-para">
                    Our team has extensive experience in developing custom applications across various platforms and technologies. We combine technical expertise with a deep understanding of different industry domains to deliver high-quality, effective solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* 2st Element */}
            <div className="col-12 col-md-4 pb-5">
              <div
                className="card p-4 border-0 cad-sec4th-elemnet"
                width="auto"
                height="auto"
              >
                <div className="cad-sec-4th-img-holder">
                  <img src={client} className="cad-icon-4th-sec" alt="client.png" />
                </div>

                <div className="card-body">
                  <h5 className="card-title cad-sec4-heading">
                    CLIENT-CENTRIC APPROACH
                  </h5>
                  <p className="card-text cad-sec4-para">
                    We prioritize understanding your business goals and challenges. Our client-centric approach ensures that we deliver customized solutions that align with your vision and drive tangible results.
                  </p>
                </div>
              </div>
            </div>

            {/* 3st Element */}
            <div className="col-12 col-md-4 pb-5">
              <div
                className="card p-4 border-0 cad-sec4th-elemnet"
                width="auto"
                height="auto"
              >
                <div className="cad-sec-4th-img-holder">
                  <img
                    src={innovative}
                    className="cad-icon-4th-sec"
                    alt="innovative.png"
                  />
                </div>

                <div className="card-body">
                  <h5 className="card-title cad-sec4-heading">
                    INNOVATIVE SOLUTIONS
                  </h5>
                  <p className="card-text cad-sec4-para">
                    We stay at the forefront of technology trends and use the latest tools and techniques to provide innovative application development solutions. Our designs are not only current but also future proof, ensuring your applications remain competitive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* -----------------------------------section 5--------------------------------------------- */}
        <div className='cad-sec5-container'>
          <h2 className='cad-sec5-heading'>Our Comprehensive Development Tech Stack</h2>
          {/* Marquee slider */}
          <Slider {...settings} >
            {
              CADTechStack.map( record => {
                return(

                  <div key={record.id} className='cad-sec5-icon-container' >
                    <div className='d-flex justify-content-center'>
                      {/* tech stack logo */}
                      <img className='cad-sec5-img' src={record.image} alt='tech_stack_logo' />
                    </div>
                    {/* tech stack logo txt */}
                    <h3 className='cad-sec5-caption'>{record.caption}</h3>
                  </div>

                )
              })
            }
          </Slider>
        </div>

        {/* ------------------------------------section 6--------------------------------------------- */}
        <div className='cad-s6-container'>
          <div className='cad-s6-parallax-container'>
            <h1 className='cad-s6-parallax-txt'>Ready to Transform Your Business with Custom Applications?</h1>
            <p className='cad-s6-parallax-para'>Leverage our expertise in custom desktop, web, and mobile application development to drive your business forward. Contact Hubsem today for a consultation and quote. Let's build a solution that meets your unique needs and sets you apart from the competition.</p>
            <div className='cad-s6-btn-container'>
              <button className='cad-s6-btn' ><Link to='/ContactUs' className='cad-s6-btn-link' >Get a Quote</Link></button>
            </div>
          </div>
          <div className='cad-s6-parallax'></div>
        </div>

      </main>

      <WhatsAppIcon />
      <Footer />
    </>
  )
}

export default DeskWebMobileApp