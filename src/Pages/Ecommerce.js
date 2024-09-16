import React from 'react'
import Header from '../Main_Components/Header'
import Footer from '../Main_Components/Footer'
import WhatsAppIcon from '../Components/Footer/WhatsAppIcon'
import './CSS/Ecommerce.css'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Aos from "aos";

// Data for Eccomerce Solutions Vertical Timeline and Tech Stack
import { EcommerceVertical, EcommerceTechStack } from '../Data'

// importing section 1 img
import ecos1img from '../Images/Eccomerce/Ecommerce-s1-img.png'

// importing section 3 img
import ecos3img from '../Images/Eccomerce/Digital-Ads-in-Retail-Space.png'


// importing card images for 4th section
import exprience from "../Images/Home/Experience.png";
import client from "../Images/Home/Client-Centric.png";
import innovative from "../Images/Home/Innovation.png";

// importing Slider for section 5
import Slider from 'react-slick'

// importing vertical slider elements
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';



const Ecommerce = () => {

  // Aos funtion
  useEffect(() => {
    Aos.init();
  }, []);

  //  icon Slider settings
  const settings = {
    dots: false,          // Hide dots
    infinite: true,       // Infinite scrolling
    speed: 1000,           // Scrolling speed
    slidesToShow: 4,      // Show 6 cards at a time
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
        <div className='row eco-sec1-container'>
          {/* column 1 */}
          <div className='col-12 col-sm-12 col-md-6 eco-col1-container'>
            <h4 className='eco-sec1-creating-txt'>Empowering Your Online Business</h4>
            <h2 className='eco-sec1-responsive-txt'>Ecommerce Solutions</h2>
            <h5 className='eco-sec1-engaging-txt'>Seamless, Scalable, and Secure</h5>
            <p className='eco-sec1-para'>At Hubsem, we specialize in delivering comprehensive Ecommerce solutions that drive your online business growth. Utilizing platforms like WooCommerce, Shopify, WIX, and OpenCart, we create robust online stores with seamless payment integration. Our aim is to provide you with a fully functional, scalable, and secure Ecommerce platform that enhances user experience and maximizes conversions.</p>
          </div>
          {/* column 2 */}
          <div className='col-12 col-sm-12 col-md-6 eco-col2-container' data-aos="slide-left"
            data-aos-delay="500"
            data-aos-duration="2000"
            data-aos-easing="step-end"
            data-aos-once="true">
            <img className='ecoSec1Img' src={ecos1img}  alt='Ecommerce-s1-img.png' />
          </div>
        </div>

        {/* -----------------------------------section 2------------------------------------------- */}
        <div className='eco-sec2-container'> 
          <h2 className='eco-sec2-main-heading'>Our Key Offerings</h2>
          <div className='eco-sec2-custom-timeline'>
            <VerticalTimeline>
              {
                EcommerceVertical.map( element => {
                  return(
                      <VerticalTimelineElement key={element.id} icon={ <img className='eco-sec2-icon-img' src={element.image} alt='Ecommerce Vertical TimeLine' /> }  >
                        <h3 className='eco-sec2-heading' >{element.title}</h3>
                        <p className='eco-sec2-para' >{element.description}</p>
                      </VerticalTimelineElement>
                    )
                } )
              }
            </VerticalTimeline>
          </div>

        </div>

        {/* -----------------------------------section 3------------------------------------------- */}
        <div className='row eco-sec3-container'>
          {/* column 1 */}
          <div className='col-12 col-sm-12 col-md-6 eco-sec3-col1-container' data-aos="slide-right"
            data-aos-delay="500"
            data-aos-duration="2000"
            data-aos-easing="step-end"
            data-aos-once="true">
            <img className='eco-Sec3Img' src={ecos3img} alt='Digital-Ads-in-Retail-Space.png' />
          </div>
          {/* column 2 */}
          <div className='col-12 col-sm-12 col-md-6 eco-sec3-col2-container'>
            <ul className='eco-sec3-li-container'>
              <h2 className='eco-sec3-why'>Why Invest in Ecommerce Solutions?</h2>
              <li className='eco-sec3-li d-flex'>
                <i className="fa-solid fa-globe"></i>
                <div>
                  <b>Enhanced User Experience: </b>Our Ecommerce solutions focus on providing a seamless and engaging user experience. With intuitive navigation and fast loading times, we ensure that your customers have a pleasant shopping experience.
                </div>
              </li>
          
              <li className='eco-sec3-li d-flex'>
                <i className="fa-solid fa-globe"></i>
                <div>
                  <b>Secure Payment Integration: </b>We integrate secure payment gateways to protect your transactions and customer data. Our solutions support various payment options, making it convenient for your customers to complete their purchases.
                </div>
              </li>
          
              <li className='eco-sec3-li d-flex'>
                <i className="fa-solid fa-globe"></i>
                <div>
                  <b>Scalability and Flexibility: </b>Our Ecommerce platforms are designed to grow with your business. Whether you're starting small or expanding your operations, our solutions are scalable and adaptable to your changing needs.
                </div>
              </li>
          
              <li className='eco-sec3-li d-flex border-0'>
                <i className="fa-solid fa-globe"></i>
                <div>
                  <b>Increased Conversions: </b>With optimized checkout processes and user-friendly designs, our Ecommerce solutions are aimed at maximizing conversions and increasing your sales. We use data-driven strategies to enhance your online store’s performance.
                </div>
              </li>
            </ul>
          </div>
          
        </div>

        {/* -----------------------------------section 4--------------------------------------------- */}
        <div className="container-fluid eco-sec-4th">
          <div className="eco-stand-out">
            <h3 className="eco-stand-out-txt">Why We Stand Out?</h3>
          </div>
          {/* 1st Row */}
          <div className="row">
            {/* 1st Element */}
            <div className="col-12 col-md-4 pb-5">
              <div
                className="card p-4 border-0 eco-sec4th-elemnet"
                width="auto"
                height="auto"
              >
                <div className="eco-sec-4th-img-holder">
                  <img
                    src={exprience}
                    className="eco-icon-4th-sec"
                    alt="Experience.png"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title eco-sec4-heading">
                    EXPERTISE AND EXPERIENCE
                  </h5>
                  <p className="card-text eco-sec4-para">
                    Our team has extensive experience in developing Ecommerce solutions across various platforms. We combine technical expertise with a deep understanding of Ecommerce trends to deliver high-quality, effective solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* 2st Element */}
            <div className="col-12 col-md-4 pb-5">
              <div
                className="card p-4 border-0 eco-sec4th-elemnet"
                width="auto"
                height="auto"
              >
                <div className="eco-sec-4th-img-holder">
                  <img src={client} className="eco-icon-4th-sec" alt="client.png" />
                </div>

                <div className="card-body">
                  <h5 className="card-title eco-sec4-heading">
                    CLIENT-CENTRIC APPROACH
                  </h5>
                  <p className="card-text eco-sec4-para">
                    We take the time to understand your business goals and challenges. Our client-centric approach ensures that we deliver tailored Ecommerce solutions that align with your vision and objectives.
                  </p>
                </div>
              </div>
            </div>

            {/* 3st Element */}
            <div className="col-12 col-md-4 pb-5">
              <div
                className="card p-4 border-0 eco-sec4th-elemnet"
                width="auto"
                height="auto"
              >
                <div className="eco-sec-4th-img-holder">
                  <img
                    src={innovative}
                    className="eco-icon-4th-sec"
                    alt="innovative.png"
                  />
                </div>

                <div className="card-body">
                  <h5 className="card-title eco-sec4-heading">
                    INNOVATIVE SOLUTIONS
                  </h5>
                  <p className="card-text eco-sec4-para">
                    We stay ahead of industry trends and use the latest technologies to provide innovative Ecommerce solutions. Our designs are not only current but also future-proof, ensuring your store remains competitive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* -----------------------------------section 5--------------------------------------------- */}
        <div className='eco-sec5-container'>
          <h2 className='eco-sec5-heading'>Our Comprehensive Ecommerce Tech Stack</h2>
          {/* Marquee slider */}
          <Slider {...settings} >
            {
              EcommerceTechStack.map( record => {
                return(

                  <div key={record.id} className='eco-sec5-icon-container' >
                    <div className='d-flex justify-content-center'>
                      {/* tech stack logo */}
                      <img className='eco-sec5-img' src={record.image} alt='tech_stack_logo' />
                    </div>
                    {/* tech stack logo txt */}
                    <h3 className='eco-sec5-caption'>{record.caption}</h3>
                  </div>

                )
              })
            }
          </Slider>
        </div>

        {/* ------------------------------------section 6--------------------------------------------- */}
        <div className='eco-s6-container'>
          <div className='eco-s6-parallax-container'>
            <h1 className='eco-s6-parallax-txt'>Ready to Elevate Your Online Business?</h1>
            <p className='eco-s6-parallax-para'>Transform your Ecommerce platform with our expert solutions and drive your business growth. Contact Hubsem today for a consultation and quote. Let’s create a seamless shopping experience that stands out.</p>
            <div className='eco-s6-btn-container'>
              <button className='eco-s6-btn' ><Link to='/ContactUs' className='eco-s6-btn-link' >Get a Quote</Link></button>
            </div>
          </div>
          <div className='eco-s6-parallax'></div>
        </div>

      </main>

      <WhatsAppIcon />
      <Footer />
    </>
  )
}

export default Ecommerce
