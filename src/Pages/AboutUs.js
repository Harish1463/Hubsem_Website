import React from 'react'
import Header from '../Main_Components/Header'
import Footer from '../Main_Components/Footer'
import WhatsAppIcon from '../Components/Footer/WhatsAppIcon'

// importing AOS
import Aos from "aos";

// importing CountUp and ScrollTrigger
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

// importing useState to use in counter
import { useState, useEffect } from 'react'

// importing css
import './CSS/AboutUs.css'

// importing images for section 4
import aboutImg from '../Images/AboutUs/About-img-1024x1024.jpg'

const AboutUs = () => {

  // Aos funtion
  useEffect(() => {
    Aos.init();
  }, []);

  // useState for counter in section 5
    const [counterOn, setCounterOn] = useState(false)

  return (
    <>
      <Header />
      <main>
        {/* --------------------------------section 1------------------------------------------------ */}
        <div>
          <h1 className='aboutus-s1-parallax-text'>About Us</h1>
          <div className='aboutus-s1-parallax'></div>
        </div>

        {/* --------------------------------company profile------------------------------------------ */}
        <div className='aboutus-s2-container'>
          <h5 className='aboutus-s2-profile'
          data-aos="fade-up"
          data-aos-duration="50"
          data-aos-easing="linear"
          data-aos-once="true">
            Company Profile
          </h5>

          <h2 className='aboutus-s2-welcome'
          data-aos="fade-up"
          data-aos-duration="300"
          data-aos-delay="420"
          data-aos-easing="linear"
          data-aos-once="true">Welcome to Hubsem Software Solutions
          </h2>

          <div 
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="500"
            data-aos-easing="linear"
            data-aos-once="true">
            <p className='aboutus-s2-para'>Hubsem is a web development company, started in the year of 2020 located in chennai. We are a team of experts in the core areas of programming, Web Development, Mobile App Development, Digital Marketing, and Business Applications. Our Expertise supports you from creating powerful and engaging application/ website to reach out to your audience via digital marketing and support you in each of the phases of business.</p>
            <p className='aboutus-s2-para'>We create a simple, corporate, affordable, effective, and manageable website with our dedicated team of experts in the web development sectors. Our team is proficient to deliver quick and quality solutions. We offer creative and innovative solutions to our clients through a process that is the most developed and effective means of conducting business. We provide solutions for our clients to better serve their customers, create new products and services, become a full functioning operation, streamlining operations, and pulling all areas together to create a smooth success.</p>
          </div>

        </div>

        {/* mission, expertise & customer service */}
        <div>
          <div className='aboutus-s3-parallax2'>
            {/* arrow on top */}
            <div className='arrow-down'></div>

            <div className="container-fluid aboutus-s3-container">
              
                <div className="row gap-4 aboutus-s3-card-row">
                  {/* 1st element */}
                  <div className='col-12 col-md-3 aboutus-s3-border'>
                    <div className="aboutus-s3-icon">
                      <i className="fa-solid fa-bullseye"></i>
                    </div>
                    <div className="">
                      <h4 className="aboutus-s3-heading">
                        Our Mission
                      </h4>
                      <p className="aboutus-s3-para">
                        Our mission is to be a trusted partner for our clients, offering comprehensive IT services that align with their goals.
                      </p>
                    </div>
                  </div>
                  
                
                  {/* 2nd element */}
                  <div className='col-12 col-md-3 aboutus-s3-border'>
                    <div className="aboutus-s3-icon">
                      <i className="fa-regular fa-lightbulb"></i>
                    </div>
                    <div className="">
                      <h4 className="aboutus-s3-heading">
                        Our Expertise
                      </h4>
                      <p className="aboutus-s3-para">
                        With years of experience in the IT industry, we possess a deep understanding of the ever-evolving technological landscape.
                      </p>
                    </div>
                  </div>
                  
                
              
                  {/* 3rd element */}
                  <div className='col-12 col-md-3 aboutus-s3-border'>
                    <div className="aboutus-s3-icon">
                      <i className="fa-solid fa-laptop"></i>
                    </div>
                    <div className="">
                      <h4 className="aboutus-s3-heading">
                        Customer Services
                      </h4>
                      <p className="aboutus-s3-para">
                        We believe that successful partnerships are built on trust, transparency, and open communication.
                      </p>
                    </div>
                  </div>
                  

                </div>
            
            </div>
            

          </div>
        </div>
        {/*----------------------- Transforming Tasks, Revolutionizing Results. ----------------------------*/}
        <div className='row aboutus-s4-container'>
          {/* column 1 */}
          <div className='col-12 col-md-6 aboutus-s4-img-container'>
            <img className='aboutus-s4-img' src={aboutImg} alt='About-img-1024x1024.jpg' />
          </div>
          {/* column 2 */}
          <div className='aboutus-s4-col2 col-12 col-md-6'>
            <h5 className='aboutus-s4-heading1'data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="500"
            data-aos-easing="linear"
            data-aos-once="true">Synchronize. Collaborate. Excel.</h5>
            <h2 className='aboutus-s4-heading2'data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="500"
            data-aos-easing="linear"
            data-aos-once="true">Transforming Tasks, Revolutionizing Results.</h2>
            <p className='aboutus-s4-para'data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="500"
            data-aos-easing="linear"
            data-aos-once="true">At Hubsem solution, we are passionate about providing cutting-edge IT solutions and services to empower businesses and individuals alike. With a team of highly skilled professionals and a customer-centric approach, we strive to deliver exceptional technology solutions that drive growth and productivity.</p>
            <p className='aboutus-s4-para'data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="500"
            data-aos-easing="linear"
            data-aos-once="true">We Provide following list of services</p>
            <div className='aboutus-s4-list'data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="500"
            data-aos-easing="linear"
            data-aos-once="true">
              <ul>
                <li>In-depth analysis of your existing IT infrastructure and processes</li>
                <li>Strategic recommendations to align technology with your business objectives</li>
                <li>Roadmap development for IT transformation and digitalization</li>
                <li>Design and development of robust, scalable, and user-friendly software applications</li>
                <li>Custom solutions tailored to meet your unique business requirements</li>
              </ul>
            </div>
          </div>
        </div>
        {/* -------------------------------Organizations's Data--------------------------------------  */}
        <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=>setCounterOn(true)}>
          <div className='row aboutus-counter-container'
            data-aos="zoom-in" 
            data-aos-duration="500"
            data-aos-easing="linear"
            data-aos-once="true">
            {/* projects completed */}
            <div className='col-12 col-md-3 aboutus-counter-box'>
              <div>
                <h1 className='aboutus-counter-box-num'>{counterOn && <CountUp start={0} end={30} duration={2} delay={0.5}/>}+</h1>
              </div>
              <h4 className='aboutus-counter-box-txt'>projects completed</h4>
            </div>

            {/* Experience Developers */}
            <div className='col-12 col-md-3 aboutus-counter-box'>
              <div>
                <h1 className='aboutus-counter-box-num'>{counterOn && <CountUp start={0} end={12} duration={2.5} delay={0.5}/>}+</h1>
              </div>
              <h4 className='aboutus-counter-box-txt'>Experience Developers</h4>
            </div>

            {/* Satisfied Clients*/}
            <div className='col-12 col-md-3 aboutus-counter-box'>
              <div>
                <h1 className='aboutus-counter-box-num'>{counterOn && <CountUp start={0} end={20} duration={2.5} delay={0.5}/>}+</h1>
              </div>
              <h4 className='aboutus-counter-box-txt'>Satisfied Clients</h4>
            </div>
          </div>
        </ScrollTrigger>
      </main>
      <WhatsAppIcon />
      <Footer />
    </>
  )
}

export default AboutUs
