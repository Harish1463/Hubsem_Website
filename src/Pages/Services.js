import React from 'react'
import { Link } from "react-router-dom";

import Header from '../Main_Components/Header'
import Footer from '../Main_Components/Footer'

import WhatsAppIcon from '../Components/Footer/WhatsAppIcon'

// importing css
import './CSS/Services.css'

// importing images for cards in 3rd section
import responsive from "../Images/Home/Responsive web-image.png";
import ecommerce from "../Images/Home/Ecommerce-img.png";
import BIS from "../Images/Home/Business Intelli-img.png";
import SEO from "../Images/Home/search engine-img.png";
import SMM from "../Images/Home/social media-img.png";
import APP from "../Images/Home/desktop app-img.png";

const Services = () => {
  return (
    <>
      <Header />
      <main>

        {/* -----------------------------------services-------------------------------------------------- */}
        <div>
          <h1 className='services-s1-parallax-text'>Services</h1>
          <div className='services-s1-parallax'></div>
        </div>

        {/* ------------------------------------Have a Look At our services------------------------------ */}
        <div className="container-fluid services-3rd-row">

          {/* Home Section [3rd] CARDS */}

          {/* 1st Row */}
          <div className="row">
            {/* 1st Element */}
            <div className="col-12 col-md-4 pb-5">
              <div
                className="card p-4 services-remove-3rd-border"
                width="auto"
                height="auto"
              >
                <Link className="services-sec-3rd-link" to="/ResponsiveWeb">
                  <img
                    src={responsive}
                    className="services-card-img-top"
                    alt=" responsive web design"
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title services-sec-3rd-heading">
                    <Link className="services-sec-3rd-link" to="/ResponsiveWeb">
                      RESPONSIVE WEBSITE DESIGN / DEVELOPMENT
                    </Link>
                  </h5>
                  <p className="card-text services-sec-3rd-para">
                    Crafting visually stunning and user-friendly websites that
                    adapt seamlessly across all devices
                  </p>
                </div>
              </div>
            </div>

            {/* 2st Element */}
            <div className="col-12 col-md-4 pb-5">
              <div
                className="card p-4 services-remove-3rd-border"
                width="auto"
                height="auto"
              >
                <Link className="services-sec-3rd-link" to="/Ecommerce">
                  <img
                    src={ecommerce}
                    className="services-card-img-top"
                    alt="Ecommerce img"
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title services-sec-3rd-heading">
                    <Link className="services-sec-3rd-link" to="/Ecommerce">
                      ECOMMERCE SOLUTIONS
                    </Link>
                  </h5>
                  <p className="card-text services-sec-3rd-para">
                    Empowering your online business with customized, robust, and
                    scalable eCommerce solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* 3st Element */}
            <div className="col-12 col-md-4 pb-5">
              <div
                className="card p-4 services-remove-3rd-border"
                width="auto"
                height="auto"
              >
                <Link className="services-sec-3rd-link" to="/BussinessIntelli">
                  <img src={BIS} className="services-card-img-top" alt="BIS" />
                </Link>
                <div className="card-body">
                  <h5 className="card-title services-sec-3rd-heading">
                    <Link className="services-sec-3rd-link" to="/BussinessIntelli">
                      BUSSINESS INTELLIGENCE SERVICES
                    </Link>
                  </h5>
                  <p className="card-text services-sec-3rd-para">
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
                className="card p-4 services-remove-3rd-border"
                width="auto"
                height="auto"
              >
                <Link className="services-sec-3rd-link" to="/SearchEngine">
                  <img src={SEO} className="services-card-img-top" alt="SEO" />
                </Link>
                <div className="card-body">
                  <h5 className="card-title services-sec-3rd-heading">
                    <Link className="services-sec-3rd-link" to="/SearchEngine">
                      SEARCH ENGINE OPTIMIZATION (SEO)
                    </Link>
                  </h5>
                  <p className="card-text services-sec-3rd-para">
                    Boosting your online visibility and driving organic traffic
                    with expert Search Engine Optimization (SEO) services.
                  </p>
                </div>
              </div>
            </div>

            {/* 5st Element */}
            <div className="col-12 col-md-4 pb-5">
              <div
                className="card p-4 services-remove-3rd-border"
                width="auto"
                height="auto"
              >
                <Link className="services-sec-3rd-link" to="/SocialMediaMarket">
                  <img src={SMM} className="services-card-img-top" alt="SMM img" />
                </Link>
                <div className="card-body">
                  <h5 className="card-title services-sec-3rd-heading">
                    <Link className="services-sec-3rd-link" to="/SocialMediaMarket">
                      SOCIAL MEDIA MARKETING (SMM)
                    </Link>
                  </h5>
                  <p className="card-text services-sec-3rd-para">
                    Elevating your brand's presence and engagement through
                    strategic Social Media Marketing (SMM) campaigns.
                  </p>
                </div>
              </div>
            </div>

            {/* 6st Element */}
            <div className="col-12 col-md-4 pb-5">
              <div
                className="card p-4 services-remove-3rd-border"
                width="auto"
                height="auto"
              >
                <Link className="services-sec-3rd-link" to="/DeskWebMobileApp">
                  <img src={APP} className="services-card-img-top" alt="APP img" />
                </Link>
                <div className="card-body">
                  <h5 className="card-title services-sec-3rd-heading">
                    <Link className="sec-3rd-link" to="/DeskWebMobileApp">
                      DESKTOP / WEB / MOBILE APPLICATIONS
                    </Link>
                  </h5>
                  <p className="card-text services-sec-3rd-para">
                    Tailor-made applications for desktop, web, and mobile,
                    designed to fit your unique business needs perfectly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <WhatsAppIcon />
      <Footer />
    </>
  )
}

export default Services
