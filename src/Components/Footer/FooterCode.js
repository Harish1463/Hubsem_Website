import React from 'react'
import { Link } from 'react-router-dom'
import footerlogo from "../../Images/logo-white.png"
import backGroundImg from '../../Images/Background image.jpeg.jpg'

import './FooterCode.css'

const Footer = () => {
  return (
    <section>
      <img className="background-img" src={backGroundImg} alt="Background image"/>
      <div className='container-fluid footer-section'>
        <div className='row'>
            <div className='col-12 col-sm-4 col-md-6 about-hubsem ps-5'>
              <Link to='/' className="navbar-brand">
                <img className="footer-logo" height="128px" src={footerlogo} alt="logo-white.png"/>
              </Link>
              <p className="footer-text">Our team of experts specializes in a wide range of IT services, ensuring that we can meet all your technology needs.</p>
            </div>
            <div className='col-12 col-sm-3 col-md-2'>
              <ul>
                <h3 className='footer-heading'>Quick Links</h3>
                <li><Link to='/' className="footer-links">Home</Link></li>
                <li><Link to='/AboutUs' className="footer-links">About Us</Link></li>
                <li><Link to='/Services' className="footer-links">Services</Link></li>
                <li><Link to='/Internship' className="footer-links">Internship</Link></li>
                <li><Link to='/ContactUs' className="footer-links">Contact Us</Link></li>
              </ul>
            </div>
            <div className='col-12 col-sm-5 col-md-4'>
              <ul>
                <h3 className='footer-heading'>Services</h3>
                <li><Link to="/ResponsiveWeb" className="footer-links">Responsive Website Design / Development</Link></li>
                <li><Link to="/Ecommerce" className="footer-links">Ecommerce Solutions</Link></li>
                <li><Link to="/BussinessIntelli" className="footer-links">Business Intelligence Services</Link></li>
                <li><Link to="/SearchEngine" className="footer-links">Search Engine Optimization (SEO)</Link></li>
                <li><Link to="/SocialMediaMarket" className="footer-links">Social Media Marketing (SMM)</Link></li>
                <li><Link to="/DeskWebMobileApp" className="footer-links">Desktop / Web / Mobile Applications</Link></li>
              </ul>
            </div>
        </div>
        <div className='row col-12'>
            <hr className='horizontal-line'/>
            <div className='copyright-info'>
              <p className="footer-text">&copy; Copyright 2024, Hubsem Software Solutions Pvt. Ltd. | All rights reserved.</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Footer