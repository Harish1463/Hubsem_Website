import React from 'react'
import Header from '../Main_Components/Header'
import Footer from '../Main_Components/Footer'
import WhatsAppIcon from '../Components/Footer/WhatsAppIcon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop, faVolumeHigh, faPeopleGroup, faChartLine, faPerson } from '@fortawesome/free-solid-svg-icons'



// importing css
import './CSS/SMM.css'

import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Aos from "aos";

// Data for SMM Vertical Timeline
import { smmVertical } from '../Data'

// importing section 1 img
import smms1 from '../Images/SMM/smm-image1.webp'

// importing section 3 img
import smms3 from '../Images/SMM/undraw_buffer_wq43.png'



// importing card images for 4th section
import exprience from "../Images/Home/Experience.png";
import client from "../Images/Home/Client-Centric.png";
import innovative from "../Images/Home/Innovation.png";

// importing vertical slider elements
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';


// Mapping the font awesome icons to variable
const iconMapsmm = {
  faLaptop:faLaptop,
  faVolumeHigh:faVolumeHigh,
  faPeopleGroup:faPeopleGroup,
  faChartLine:faChartLine,
  faPerson:faPerson
}

const SocialMediaMarket = () => {

  // Aos funtion
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Header />
      
      <main>

        {/* -----------------------------------section 1-------------------------------------------- */}
        <div className='row smm-sec1-container'>
          {/* column 1 */}
          <div className='col-12 col-sm-12 col-md-6 smm-col1-container'>
            <h4 className='smm-sec1-creating-txt'>Amplifying Your Brand's Digital Presence</h4>
            <h2 className='smm-sec1-responsive-txt'>Social Media Marketing</h2>
            <h5 className='smm-sec1-engaging-txt'>Engaging, Strategic, and Measurable</h5>
            <p className='smm-sec1-para'>At Hubsem, we specialize in delivering comprehensive Social Media Marketing (SMM) services that amplify your brand’s digital presence and engage your target audience. Our team of social media experts uses data-driven strategies and creative content to enhance your online visibility, build brand loyalty, and drive conversions.</p>
          </div>
          {/* column 2 */}
          <div className='col-12 col-sm-12 col-md-6 smm-col2-container' data-aos="slide-left"
            data-aos-delay="500"
            data-aos-duration="2000"
            data-aos-easing="step-end"
            data-aos-once="true">
            <img className='smmSec1Img' src={smms1}  alt='smm-image1.webp' />
          </div>
        </div>

        {/* -----------------------------------section 2------------------------------------------- */}
        <div className='smm-sec2-container'> 
          <h2 className='smm-sec2-main-heading'>Our Key Offerings</h2>
          <div className='smm-sec2-custom-timeline'>
            <VerticalTimeline>
              {
                smmVertical.map( element => {
                  return(
                      <VerticalTimelineElement key={element.id} icon={ <FontAwesomeIcon icon={iconMapsmm[element.icon]} /> }  >
                        <h3 className='smm-sec2-heading' >{element.title}</h3>
                        <p className='smm-sec2-para' >{element.description}</p>
                      </VerticalTimelineElement>
                    )
                } )
              }
            </VerticalTimeline>
          </div>

        </div>

        {/* -----------------------------------section 3------------------------------------------- */}
        <div className='row smm-sec3-container'>
          {/* column 1 */}
          <div className='col-12 col-sm-12 col-md-6 smm-sec3-col1-container' data-aos="slide-right"
            data-aos-delay="500"
            data-aos-duration="2000"
            data-aos-easing="step-end"
            data-aos-once="true">
            <img className='smm-Sec3Img' src={smms3} alt='undraw_buffer_wq43.png' />
          </div>
          {/* column 2 */}
          <div className='col-12 col-sm-12 col-md-6 smm-sec3-col2-container'>
            <ul className='smm-sec3-li-container'>
              <h2 className='smm-sec3-why'>Why Invest in Social Media Marketing?</h2>
              <li className='smm-sec3-li d-flex'>
                <i className="fa-solid fa-globe"></i>
                <div>
                  <b>Enhanced Brand Awareness: </b>Effective SMM strategies increase your brand's visibility across various social media platforms, reaching a broader audience and boosting brand recognition.
                </div>
              </li>
          
              <li className='smm-sec3-li d-flex'>
                <i className="fa-solid fa-globe"></i>
                <div>
                  <b>Improved Customer Engagement: </b>Social media provides a direct line of communication with your customers, allowing you to engage with them in real-time, build relationships, and foster brand loyalty.
                </div>
              </li>
          
              <li className='smm-sec3-li d-flex'>
                <i className="fa-solid fa-globe"></i>
                <div>
                  <b>Higher Conversion Rates: </b>Targeted social media campaigns drive traffic to your website, increasing the likelihood of conversions and sales. By reaching the right audience, we help you achieve your business goals more efficiently.
                </div>
              </li>
          
              <li className='smm-sec3-li d-flex border-0'>
                <i className="fa-solid fa-globe"></i>
                <div>
                  <b>Cost-Effective Marketing: </b>SMM offers a cost-effective way to reach your target audience compared to traditional advertising methods. With precise targeting and measurable results, you can optimize your marketing budget for maximum impact.
                </div>
              </li>
            </ul>
          </div>
          
        </div>

        {/* -----------------------------------section 4--------------------------------------------- */}
        <div className="container-fluid smm-sec-4th">
          <div className="smm-stand-out">
            <h3 className="smm-stand-out-txt">Why We Stand Out?</h3>
          </div>
          {/* 1st Row */}
          <div className="row">
            {/* 1st Element */}
            <div className="col-12 col-md-4 pb-5">
              <div
                className="card p-4 border-0 smm-sec4th-elemnet"
                width="auto"
                height="auto"
              >
                <div className="smm-sec-4th-img-holder">
                  <img
                    src={exprience}
                    className="smm-icon-4th-sec"
                    alt="Experience.png"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title smm-sec4-heading">
                    EXPERTISE AND EXPERIENCE
                  </h5>
                  <p className="card-text smm-sec4-para">
                    Our team has extensive experience in managing successful social media campaigns for various industries. We combine creative skills with analytical expertise to deliver high-impact SMM strategies.
                  </p>
                </div>
              </div>
            </div>

            {/* 2st Element */}
            <div className="col-12 col-md-4 pb-5">
              <div
                className="card p-4 border-0 smm-sec4th-elemnet"
                width="auto"
                height="auto"
              >
                <div className="smm-sec-4th-img-holder">
                  <img src={client} className="smm-icon-4th-sec" alt="client.png" />
                </div>

                <div className="card-body">
                  <h5 className="card-title smm-sec4-heading">
                    CLIENT-CENTRIC APPROACH
                  </h5>
                  <p className="card-text smm-sec4-para">
                    We prioritize understanding your brand and business objectives. Our client-centric approach ensures that we deliver customized SMM solutions that align with your goals and resonate with your audience.
                  </p>
                </div>
              </div>
            </div>

            {/* 3st Element */}
            <div className="col-12 col-md-4 pb-5">
              <div
                className="card p-4 border-0 smm-sec4th-elemnet"
                width="auto"
                height="auto"
              >
                <div className="smm-sec-4th-img-holder">
                  <img
                    src={innovative}
                    className="smm-icon-4th-sec"
                    alt="innovative.png"
                  />
                </div>

                <div className="card-body">
                  <h5 className="card-title smm-sec4-heading">
                    INNOVATIVE SOLUTIONS
                  </h5>
                  <p className="card-text smm-sec4-para">
                    We stay ahead of social media trends and use the latest tools and techniques to provide innovative marketing solutions. Our strategies are designed to be adaptive and scalable, ensuring they continue to deliver results as the social media landscape evolves.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* -----------------------------------section 5 [NO TECH STACK NEEDED HERE] --------------------------------------------- */}
        {/* ------------------------------------section 6--------------------------------------------- */}
        <div className='smm-s6-container'>
          <div className='smm-s6-parallax-container'>
            <h1 className='smm-s6-parallax-txt'>Ready to Amplify Your Brand’s Digital Presence?</h1>
            <p className='smm-s6-parallax-para'>Maximize your brand’s reach and engagement with our expert Social Media Marketing services. Contact Hubsem today for a consultation and quote. Let’s take your social media presence to the next level.</p>
            <div className='smm-s6-btn-container'>
              <button className='smm-s6-btn' ><Link to='/ContactUs' className='smm-s6-btn-link' >Get a Quote</Link></button>
            </div>
          </div>
          <div className='smm-s6-parallax'></div>
        </div>

      </main>

      <WhatsAppIcon />
      <Footer />
    </>
  )
}

export default SocialMediaMarket
