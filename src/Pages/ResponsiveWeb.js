import React from 'react'
import Header from '../Main_Components/Header'
import Footer from '../Main_Components/Footer'
import WhatsAppIcon from '../Components/Footer/WhatsAppIcon'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

// importing JSON for section 5
import elements from '../Wd-key.json'

// importing JSON for section 5
import records from '../Cards.json'

// importing Slider for section 5
import Slider from 'react-slick'

// importing vertical slider elements
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

// importing fonts for vertical slider
import { faLayerGroup, faMobile, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'

// ------------------------------------------------------------------------------------------------------------

// importing css
import './CSS/ResponsiveWeb.css'

// importing AOS
import Aos from "aos";

// importing images for section 1
import responseWebSec1Img from '../Images/ResponsiveWeb/web-devices.png'
// importing images for section 3
import responseWebsec3Img from '../Images/ResponsiveWeb/undraw_responsive_re_e1nn-2.png'
// importing card images for 4th section
import exprience from "../Images/Home/Experience.png";
import client from "../Images/Home/Client-Centric.png";
import innovative from "../Images/Home/Innovation.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Mapping the font awesome icons to variable
const iconMap = {
  faLayerGroup : faLayerGroup,
  faMobile : faMobile,
  faScrewdriverWrench : faScrewdriverWrench
}

// const useScrollPosition = () => {
//   const [scrollPosition, setScrollPosition] = useState(0);

//   useEffect(() => {
//       const handleScroll = () => {
//           setScrollPosition(window.scrollY);
//       };

//       window.addEventListener('scroll', handleScroll);

//       return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return scrollPosition;
// };

// vertical react-scroll
// const scrollPosition = useScrollPosition()

// const isInView = (elementTop) => {
//     return scrollPosition > elementTop - window.innerHeight / 2
// }

const ResponsiveWeb = () => {

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
          slidesToShow: 4
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
        <div className='row resweb-sec1-container'>
          {/* column 1 */}
          <div className='col-12 col-sm-12 col-md-6 resweb-col1-container'>
            <h4 className='resweb-sec1-creating-txt'>Creating Seamless Digital Experiences</h4>
            <h2 className='resweb-sec1-responsive-txt'>Responsive Web Design and Development</h2>
            <h5 className='resweb-sec1-engaging-txt'>Engaging, Adaptive, and User-Centric</h5>
            <p className='resweb-sec1-para'>At Hubsem, we specialize in crafting responsive websites that deliver an exceptional user experience on any device. Our team of experts blends creativity with technical precision to design and develop websites that are not only visually appealing but also highly functional and to navigate. From desktops to smartphones, we ensure your digital presence is consistent
            and engaging.</p>
          </div>
          {/* column 2 */}
          <div className='col-12 col-sm-12 col-md-6 resweb-col2-container' data-aos="slide-left"
            data-aos-delay="500"
            data-aos-duration="2000"
            data-aos-easing="step-end"
            data-aos-once="true">
            <img className='responseWebSec1Img' src={responseWebSec1Img} alt='web-devices.png' />
          </div>
        </div>

        {/* -----------------------------------section 2------------------------------------------- */}
        <div className='wd-sec2-container'> 
          <h2 className='wd-sec2-main-heading'>Our Key Offerings</h2>
          <div className='wd-sec2-custom-timeline'>
            <VerticalTimeline>
              {
                elements.map( element => {
                  return(
                      <VerticalTimelineElement key={element.id} icon={ <FontAwesomeIcon icon={iconMap[element.icon]} /> }  >
                        <h3 className='wd-sec2-heading' >{element.title}</h3>
                        <p className='wd-sec2-para' >{element.description}</p>
                      </VerticalTimelineElement>
                    )
                } )
              }
            </VerticalTimeline>
          </div>

        </div>

        {/* -----------------------------------section 3------------------------------------------- */}
        <div className='row resweb-sec3-container'>
          {/* column 1 */}
          <div className='col-12 col-sm-12 col-md-6 resweb-sec3-col1-container' data-aos="slide-right"
            data-aos-delay="500"
            data-aos-duration="2000"
            data-aos-easing="step-end"
            data-aos-once="true">
            <img className='responseWebSec3Img' src={responseWebsec3Img} alt='undraw_responsive_re_e1nn-2.png' />
          </div>
          {/* column 2 */}
          <div className='col-12 col-sm-12 col-md-6 resweb-sec3-col2-container'>
            <ul className='resweb-sec3-li-container'>
              <h2 className='resweb-sec3-why'>Why Invest in Responsive Design?</h2>
              <li className='response-sec3-li d-flex'>
                <i className="fa-solid fa-globe"></i>
                <div>
                  <b>Boost Mobile Traffic: </b>With over half of all web traffic coming from mobile devices, a responsive design ensures you reach a broader audience.
                </div>
              </li>
          
              <li className='response-sec3-li d-flex'>
                <i className="fa-solid fa-globe"></i>
                <div>
                  <b>Improve SEO: </b>Google prioritizes mobile-friendly websites, enhancing your search engine visibility and ranking.
                </div>
              </li>
          
              <li className='response-sec3-li d-flex'>
                <i className="fa-solid fa-globe"></i>
                <div>
                  <b>Increase Conversions: </b>A seamless user experience across all devices leads to higher engagement and conversion rates.
                </div>
              </li>
          
              <li className='response-sec3-li d-flex border-0'>
                <i className="fa-solid fa-globe"></i>
                <div>
                  <b>Cost-Efficient: </b>One responsive website for all devices reduces development and maintenance costs.
                </div>
              </li>
            </ul>
          </div>
          
        </div>

        {/* -----------------------------------section 4--------------------------------------------- */}
        <div className="container-fluid rw-sec-4th">
          <div className="rw-stand-out">
            <h3 className="rw-stand-out-txt">Why We Stand Out?</h3>
          </div>
          {/* 1st Row */}
          <div className="row">
            {/* 1st Element */}
            <div className="col-12 col-md-4 pb-5">
              <div
                className="card p-4 border-0 rw-sec4th-elemnet"
                width="auto"
                height="auto"
              >
                <div className="rw-sec-4th-img-holder">
                  <img
                    src={exprience}
                    className="rw-icon-4th-sec"
                    alt="Experience.png"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title rw-sec4-heading">
                    EXPERTISE AND EXPERIENCE
                  </h5>
                  <p className="card-text rw-sec4-para">
                    With years of experience in web design and development, our team has the skills and knowledge to deliver high-quality, responsive websites that meet your business goals.
                  </p>
                </div>
              </div>
            </div>

            {/* 2st Element */}
            <div className="col-12 col-md-4 pb-5">
              <div
                className="card p-4 border-0 rw-sec4th-elemnet"
                width="auto"
                height="auto"
              >
                <div className="rw-sec-4th-img-holder">
                  <img src={client} className="rw-icon-4th-sec" alt="client.png" />
                </div>

                <div className="card-body">
                  <h5 className="card-title rw-sec4-heading">
                    CLIENT-CENTRIC APPROACH
                  </h5>
                  <p className="card-text rw-sec4-para">
                    We prioritize understanding your needs and objectives. Our client-centric approach ensures that we deliver solutions that are tailored to your specific requirements.
                  </p>
                </div>
              </div>
            </div>

            {/* 3st Element */}
            <div className="col-12 col-md-4 pb-5">
              <div
                className="card p-4 border-0 rw-sec4th-elemnet"
                width="auto"
                height="auto"
              >
                <div className="rw-sec-4th-img-holder">
                  <img
                    src={innovative}
                    className="rw-icon-4th-sec"
                    alt="innovative.png"
                  />
                </div>

                <div className="card-body">
                  <h5 className="card-title rw-sec4-heading">
                    INNOVATIVE SOLUTIONS
                  </h5>
                  <p className="card-text rw-sec4-para">
                    We stay ahead of industry trends and use innovative technologies to provide cutting-edge solutions. Our designs are not only current but also future proof.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* -----------------------------------section 5--------------------------------------------- */}
        <div className='rw-sec5-container'>
          <h2 className='rw-sec5-heading'>Our Comprehensive Web Tech Stack</h2>
          {/* Marquee slider */}
          <Slider {...settings} >
            {
              records.map( record => {
                return(

                  <div key={record.id} className='rw-sec5-icon-container' >
                    <div className='d-flex justify-content-center'>
                      {/* tech stack logo */}
                      <img className='rw-sec5-img' src={record.image} alt='tech_stack_logo' />
                    </div>
                    {/* tech stack logo txt */}
                    <h3 className='rw-sec5-caption'>{record.caption}</h3>
                  </div>

                )
              })
            }
          </Slider>
        </div>

        {/* ------------------------------------section 6--------------------------------------------- */}
        <div className='rw-s6-container'>
          <div className='rw-s6-parallax-container'>
            <h1 className='rw-s6-parallax-txt'>Ready to Elevate Your Online Presence?</h1>
            <p className='rw-s6-parallax-para'>Invest in a responsive website that engages your audience and drives business growth. Contact Hubsem today for a consultation and quote. Let’s create a digital experience that stands out.</p>
            <div className='rw-s6-btn-container'>
              <button className='rw-s6-btn' ><Link to='/ContactUs' className='rw-s6-btn-link' >Get a Quote</Link></button>
            </div>
          </div>
          <div className='rw-s6-parallax'></div>
        </div>

      </main>

      <WhatsAppIcon />
      <Footer />
    </>
  )
}

export default ResponsiveWeb