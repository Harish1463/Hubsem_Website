import React from 'react'
import Header from '../Main_Components/Header'
import Footer from '../Main_Components/Footer'
import WhatsAppIcon from '../Components/Footer/WhatsAppIcon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop, faLink, faMagnifyingGlass, faMap, faChartLine } from '@fortawesome/free-solid-svg-icons'



// importing css
import './CSS/SEO.css'

import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Aos from "aos";

// Data for SEO Vertical Timeline
import { seoVertical } from '../Data'

// importing section 1 img
import seos3img from '../Images/SEO/undraw_search_app_oso2.png'

// importing section 3 img
import seowhy from '../Images/SEO/efficient-query.png'



// importing card images for 4th section
import exprience from "../Images/Home/Experience.png";
import client from "../Images/Home/Client-Centric.png";
import innovative from "../Images/Home/Innovation.png";

// importing vertical slider elements
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';


// Mapping the font awesome icons to variable
const iconMapseo = {
  faDesktop:faDesktop,
  faLink:faLink,
  faMagnifyingGlass:faMagnifyingGlass,
  faMap:faMap,
  faChartLine:faChartLine
}

const SearchEngine = () => {

  // Aos funtion
  useEffect(() => {
    Aos.init();
  }, []);



  return (
    <>
      <Header />
      
      <main>

        {/* -----------------------------------section 1-------------------------------------------- */}
        <div className='row seo-sec1-container'>
          {/* column 1 */}
          <div className='col-12 col-sm-12 col-md-6 seo-col1-container'>
            <h4 className='seo-sec1-creating-txt'>Boosting Your Online Visibility</h4>
            <h2 className='seo-sec1-responsive-txt'>Search Engine Optimization Services</h2>
            <h5 className='seo-sec1-engaging-txt'>Strategic, Effective, and Results-Driven</h5>
            <p className='seo-sec1-para'>At Hubsem, we specialize in delivering comprehensive Search Engine Optimization (SEO) services that enhance your online visibility and drive organic traffic to your website. Our team of SEO experts uses proven strategies and the latest tools to improve your search engine rankings, ensuring that your business stands out in the competitive digital landscape.</p>
          </div>
          {/* column 2 */}
          <div className='col-12 col-sm-12 col-md-6 seo-col2-container' data-aos="slide-left"
            data-aos-delay="500"
            data-aos-duration="2000"
            data-aos-easing="step-end"
            data-aos-once="true">
            <img className='seoSec1Img' src={seos3img}  alt='undraw_search_app_oso2.png' />
          </div>
        </div>

        {/* -----------------------------------section 2------------------------------------------- */}
        <div className='seo-sec2-container'> 
          <h2 className='seo-sec2-main-heading'>Our Key Offerings</h2>
          <div className='seo-sec2-custom-timeline'>
            <VerticalTimeline>
              {
                seoVertical.map( element => {
                  return(
                      <VerticalTimelineElement key={element.id} icon={ <FontAwesomeIcon icon={iconMapseo[element.icon]} /> }  >
                        <h3 className='seo-sec2-heading' >{element.title}</h3>
                        <p className='seo-sec2-para' >{element.description}</p>
                      </VerticalTimelineElement>
                    )
                } )
              }
            </VerticalTimeline>
          </div>

        </div>

        {/* -----------------------------------section 3------------------------------------------- */}
        <div className='row seo-sec3-container'>
          {/* column 1 */}
          <div className='col-12 col-sm-12 col-md-6 seo-sec3-col1-container' data-aos="slide-right"
            data-aos-delay="500"
            data-aos-duration="2000"
            data-aos-easing="step-end"
            data-aos-once="true">
            <img className='seo-Sec3Img' src={seowhy} alt='efficient-query.png' />
          </div>
          {/* column 2 */}
          <div className='col-12 col-sm-12 col-md-6 seo-sec3-col2-container'>
            <ul className='seo-sec3-li-container'>
              <h2 className='seo-sec3-why'>Why Invest in SEO Services?</h2>
              <li className='seo-sec3-li d-flex'>
                <i className="fa-solid fa-globe"></i>
                <div>
                  <b>Increased Organic Traffic: </b>Effective SEO strategies improve your website’s visibility in search engine results, driving more organic traffic to your site. This increased traffic leads to higher engagement and more potential customers.
                </div>
              </li>
          
              <li className='seo-sec3-li d-flex'>
                <i className="fa-solid fa-globe"></i>
                <div>
                  <b>Higher Search Engine Rankings: </b>Our SEO services help your website rank higher for relevant keywords, making it easier for potential customers to find you. Higher rankings increase your credibility and trustworthiness in the eyes of your audience.
                </div>
              </li>
          
              <li className='seo-sec3-li d-flex'>
                <i className="fa-solid fa-globe"></i>
                <div>
                  <b>Improved User Experience: </b>SEO involves optimizing your website’s content and structure, which enhances the overall user experience. A well-optimized site is easier to navigate, loads faster, and provides valuable information to users, leading to higher satisfaction and retention rates.
                </div>
              </li>
          
              <li className='seo-sec3-li d-flex border-0'>
                <i className="fa-solid fa-globe"></i>
                <div>
                  <b>Long-Term Results: </b>SEO provides long-term benefits by continuously improving your website’s performance and visibility. Unlike paid advertising, which stops when you stop paying, SEO continues to drive traffic and generate leads over time.
                </div>
              </li>
            </ul>
          </div>
          
        </div>

        {/* -----------------------------------section 4--------------------------------------------- */}
        <div className="container-fluid seo-sec-4th">
          <div className="seo-stand-out">
            <h3 className="seo-stand-out-txt">Why We Stand Out?</h3>
          </div>
          {/* 1st Row */}
          <div className="row">
            {/* 1st Element */}
            <div className="col-12 col-md-4 pb-5">
              <div
                className="card p-4 border-0 seo-sec4th-elemnet"
                width="auto"
                height="auto"
              >
                <div className="seo-sec-4th-img-holder">
                  <img
                    src={exprience}
                    className="seo-icon-4th-sec"
                    alt="Experience.png"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title seo-sec4-heading">
                    EXPERTISE AND EXPERIENCE
                  </h5>
                  <p className="card-text seo-sec4-para">
                    Our team has extensive experience in implementing successful SEO campaigns for various industries. We combine technical expertise with a deep understanding of SEO best practices to deliver high-quality results.
                  </p>
                </div>
              </div>
            </div>

            {/* 2st Element */}
            <div className="col-12 col-md-4 pb-5">
              <div
                className="card p-4 border-0 seo-sec4th-elemnet"
                width="auto"
                height="auto"
              >
                <div className="seo-sec-4th-img-holder">
                  <img src={client} className="seo-icon-4th-sec" alt="client.png" />
                </div>

                <div className="card-body">
                  <h5 className="card-title seo-sec4-heading">
                    CLIENT-CENTRIC APPROACH
                  </h5>
                  <p className="card-text seo-sec4-para">
                    We prioritize understanding your business goals and challenges. Our client-centric approach ensures that we deliver tailored SEO solutions that align with your objectives and drive tangible results.
                  </p>
                </div>
              </div>
            </div>

            {/* 3st Element */}
            <div className="col-12 col-md-4 pb-5">
              <div
                className="card p-4 border-0 seo-sec4th-elemnet"
                width="auto"
                height="auto"
              >
                <div className="seo-sec-4th-img-holder">
                  <img
                    src={innovative}
                    className="seo-icon-4th-sec"
                    alt="innovative.png"
                  />
                </div>

                <div className="card-body">
                  <h5 className="card-title seo-sec4-heading">
                    INNOVATIVE SOLUTIONS
                  </h5>
                  <p className="card-text seo-sec4-para">
                    We stay ahead of SEO trends and use the latest tools and techniques to provide innovative solutions. Our strategies are designed to be scalable and adaptable, ensuring they continue to deliver results as search engine algorithms evolve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* -----------------------------------section 5 [NO TECH STACK NEEDED HERE] --------------------------------------------- */}
        {/* ------------------------------------section 6--------------------------------------------- */}
        <div className='seo-s6-container'>
          <div className='seo-s6-parallax-container'>
            <h1 className='seo-s6-parallax-txt'>Ready to Boost Your Online Visibility?</h1>
            <p className='seo-s6-parallax-para'>Enhance your search engine rankings and drive more organic traffic with our expert SEO services. Contact Hubsem today for a consultation and quote. Let's make your business stand out in the digital landscape.</p>
            <div className='seo-s6-btn-container'>
              <button className='seo-s6-btn' ><Link to='/ContactUs' className='seo-s6-btn-link' >Get a Quote</Link></button>
            </div>
          </div>
          <div className='seo-s6-parallax'></div>
        </div>

      </main>

      <WhatsAppIcon />
      <Footer />
    </>
  )
}

export default SearchEngine
