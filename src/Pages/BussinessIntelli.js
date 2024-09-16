import React from 'react'
import Header from '../Main_Components/Header'
import Footer from '../Main_Components/Footer'
import WhatsAppIcon from '../Components/Footer/WhatsAppIcon'

import './CSS/BIS.css'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Aos from "aos";

// Data forBIS Vertical Timeline and Tech Stack
import { BISVertical, BISTechStack } from '../Data'

// importing section 1 img
import biss1img from '../Images/BIS/hero-illustration-3-926x1024.png'

// importing section 3 img
import biss3img from '../Images/BIS/BIS-sec3.webp'


// importing card images for 4th section
import exprience from "../Images/Home/Experience.png";
import client from "../Images/Home/Client-Centric.png";
import innovative from "../Images/Home/Innovation.png";

// importing Slider for section 5
import Slider from 'react-slick'

// importing vertical slider elements
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';


const BussinessIntelli = () => {

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
        <div className='row bis-sec1-container'>
          {/* column 1 */}
          <div className='col-12 col-sm-12 col-md-6 bis-col1-container'>
            <h4 className='bis-sec1-creating-txt'>Transforming Data into Actionable Insights</h4>
            <h2 className='bis-sec1-responsive-txt'>Business Intelligence Solutions</h2>
            <h5 className='bis-sec1-engaging-txt'>Powerful, Integrated, and Efficient</h5>
            <p className='bis-sec1-para'>At Hubsem, we excel in delivering comprehensive Business Intelligence solutions that empower your organization to make informed decisions. Our expertise in PowerApp, PowerBI, PowerAutomate, and SharePoint enables us to provide tailored solutions that streamline your processes and enhance data-driven decision-making. Our goal is to turn your data into actionable insights that drive business growth and efficiency.</p>
          </div>
          {/* column 2 */}
          <div className='col-12 col-sm-12 col-md-6 bis-col2-container' data-aos="slide-left"
            data-aos-delay="500"
            data-aos-duration="2000"
            data-aos-easing="step-end"
            data-aos-once="true">
            <img className='bisSec1Img' src={biss1img}  alt='hero-illustration-3-926x1024.png' />
          </div>
        </div>

        {/* -----------------------------------section 2------------------------------------------- */}
        <div className='bis-sec2-container'> 
          <h2 className='bis-sec2-main-heading'>Our Key Offerings</h2>
          <div className='bis-sec2-custom-timeline'>
            <VerticalTimeline>
              {
                BISVertical.map( element => {
                  return(
                      <VerticalTimelineElement key={element.id} icon={ <img className='bis-sec2-icon-img' src={element.image} alt='BIS Vertical TimeLine' /> }  >
                        <h3 className='bis-sec2-heading' >{element.title}</h3>
                        <p className='bis-sec2-para' >{element.description}</p>
                      </VerticalTimelineElement>
                    )
                } )
              }
            </VerticalTimeline>
          </div>

        </div>

        {/* -----------------------------------section 3------------------------------------------- */}
        <div className='row bis-sec3-container'>
          {/* column 1 */}
          <div className='col-12 col-sm-12 col-md-6 bis-sec3-col1-container' data-aos="slide-right"
            data-aos-delay="500"
            data-aos-duration="2000"
            data-aos-easing="step-end"
            data-aos-once="true">
            <img className='bis-Sec3Img' src={biss3img} alt='BIS-sec3.webp' />
          </div>
          {/* column 2 */}
          <div className='col-12 col-sm-12 col-md-6 bis-sec3-col2-container'>
            <ul className='bis-sec3-li-container'>
              <h2 className='bis-sec3-why'>Why Invest in Business Intelligence Solutions?</h2>
              <li className='bis-sec3-li d-flex'>
                <i className="fa-solid fa-globe"></i>
                <div>
                  <b>Enhanced Decision-Making: </b>By leveraging advanced BI tools, you can gain deeper insights into your business operations, leading to more informed and strategic decisions.
                </div>
              </li>
          
              <li className='bis-sec3-li d-flex'>
                <i className="fa-solid fa-globe"></i>
                <div>
                  <b>Increased Productivity: </b>Automating repetitive tasks with PowerApps and PowerAutomate frees up your team to focus on more critical activities, boosting overall productivity.
                </div>
              </li>
          
              <li className='bis-sec3-li d-flex'>
                <i className="fa-solid fa-globe"></i>
                <div>
                  <b>Better Collaboration: </b>With SharePoint, teams can collaborate more effectively, share information seamlessly, and access the resources they need, whenever they need them.
                </div>
              </li>
          
              <li className='bis-sec3-li d-flex border-0'>
                <i className="fa-solid fa-globe"></i>
                <div>
                  <b>Improved Data Visualization: </b>PowerBI's robust visualization capabilities allow you to see your data in new ways, making it easier to identify trends, patterns, and areas for improvement.
                </div>
              </li>
            </ul>
          </div>
          
        </div>

        {/* -----------------------------------section 4--------------------------------------------- */}
        <div className="container-fluid bis-sec-4th">
          <div className="bis-stand-out">
            <h3 className="bis-stand-out-txt">Why We Stand Out?</h3>
          </div>
          {/* 1st Row */}
          <div className="row">
            {/* 1st Element */}
            <div className="col-12 col-md-4 pb-5">
              <div
                className="card p-4 border-0 bis-sec4th-elemnet"
                width="auto"
                height="auto"
              >
                <div className="bis-sec-4th-img-holder">
                  <img
                    src={exprience}
                    className="bis-icon-4th-sec"
                    alt="Experience.png"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title bis-sec4-heading">
                    EXPERTISE AND EXPERIENCE
                  </h5>
                  <p className="card-text bis-sec4-para">
                    Our team has extensive experience in implementing Business Intelligence solutions across various industries. We combine technical expertise with industry knowledge to deliver solutions that meet your specific needs.
                  </p>
                </div>
              </div>
            </div>

            {/* 2st Element */}
            <div className="col-12 col-md-4 pb-5">
              <div
                className="card p-4 border-0 bis-sec4th-elemnet"
                width="auto"
                height="auto"
              >
                <div className="bis-sec-4th-img-holder">
                  <img src={client} className="bis-icon-4th-sec" alt="client.png" />
                </div>

                <div className="card-body">
                  <h5 className="card-title bis-sec4-heading">
                    CLIENT-CENTRIC APPROACH
                  </h5>
                  <p className="card-text bis-sec4-para">
                    We prioritize understanding your business objectives and challenges. Our client-centric approach ensures that we deliver customized BI solutions that align with your goals and drive tangible results.
                  </p>
                </div>
              </div>
            </div>

            {/* 3st Element */}
            <div className="col-12 col-md-4 pb-5">
              <div
                className="card p-4 border-0 bis-sec4th-elemnet"
                width="auto"
                height="auto"
              >
                <div className="bis-sec-4th-img-holder">
                  <img
                    src={innovative}
                    className="bis-icon-4th-sec"
                    alt="innovative.png"
                  />
                </div>

                <div className="card-body">
                  <h5 className="card-title bis-sec4-heading">
                    INNOVATIVE SOLUTIONS
                  </h5>
                  <p className="card-text bis-sec4-para">
                    We stay at the forefront of BI technology, using the latest tools and techniques to provide innovative solutions that give you a competitive edge. Our solutions are designed to be scalable and adaptable, ensuring they grow with your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* -----------------------------------section 5--------------------------------------------- */}
        <div className='bis-sec5-container'>
          <h2 className='bis-sec5-heading'>Our Comprehensive BI Tech Stack</h2>
          {/* Marquee slider */}
          <Slider {...settings} >
            {
              BISTechStack.map( record => {
                return(

                  <div key={record.id} className='bis-sec5-icon-container' >
                    <div className='d-flex justify-content-center'>
                      {/* tech stack logo */}
                      <img className='bis-sec5-img' src={record.image} alt='tech_stack_logo' />
                    </div>
                    {/* tech stack logo txt */}
                    <h3 className='bis-sec5-caption'>{record.caption}</h3>
                  </div>

                )
              })
            }
          </Slider>
        </div>

        {/* ------------------------------------section 6--------------------------------------------- */}
        <div className='bis-s6-container'>
          <div className='bis-s6-parallax-container'>
            <h1 className='bis-s6-parallax-txt'>Ready to Transform Your Business with BI Solutions?</h1>
            <p className='bis-s6-parallax-para'>Unlock the potential of your data and drive business growth with our Business Intelligence solutions. Contact Hubsem today for a consultation and quote. Let's turn your data into actionable insights and take your business to the next level.</p>
            <div className='bis-s6-btn-container'>
              <button className='bis-s6-btn' ><Link to='/ContactUs' className='bis-s6-btn-link' >Get a Quote</Link></button>
            </div>
          </div>
          <div className='bis-s6-parallax'></div>
        </div>

      </main>

      <WhatsAppIcon />
      <Footer />
    </>
  )
}

export default BussinessIntelli
