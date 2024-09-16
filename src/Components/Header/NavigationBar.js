import { Link, NavLink } from "react-router-dom"
import HubsemLogo from "../../Images/logo-white.png"
import HubsemLogoBlack from "../../Images/logo-black.png"


import './NavigationBar.css'

const NavigationBar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-md navbar-light sticky-top">
        
            <div className="container-fluid">
                <Link to='/' className="navbar-brand col-md-3 nav-logo"><img className="img-fluid logo-hubsem" src={HubsemLogo} alt="logo-white.png"/></Link>
                
                {/* <!-- Toggler for Offcanvas on small screens --> */}
                <button className=" navbar-toggler d-md-none shadow-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <i className="fa-solid fa-bars menu-button"></i>
                    <div className="box-move summa"></div>
                </button>

                {/* <!-- Standard Navbar for medium and larger screens --> */}
                <div className="collapse navbar-collapse d-none d-md-flex col-md-6" id="navbarNav">
                    <ul className="navbar-nav active gap-4">
                        <li className="nav-item">
                            <NavLink to='/' className={({isActive})=>(isActive ? "nav-link nav-item-element active" : "nav-link nav-item-element text-white")}>HOME</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/AboutUs' className={({isActive})=>(isActive ? "nav-link nav-item-element active" : "nav-link nav-item-element text-white")}>ABOUT US</NavLink>
                        </li>
                        <li className="nav-item d-flex dropdown">
                            <div className="d-flex dropdown">
                            <NavLink to='/Services' className={({isActive})=>(isActive ? "nav-link nav-item-element active" : "nav-link nav-item-element text-white")}>SERVICES</NavLink>

                            <button className="dropdown-toggle dropdown-toggle-split nav-item-element services-dropdown-button text-white" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>                            

                            {/* Dropdown List */}
                            <ul className="dropdown-menu nav-services-menu">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <li className="sevices-item-heading">WEB DESIGN & DEVELOPMENT</li>
                                            <li><Link to="/ResponsiveWeb" className="dropdown-item services-item-content">Responsive Website Design / Development</Link></li>
                                            <li><Link to="/Ecommerce" className="dropdown-item services-item-content">Ecommerce Solutions</Link></li>
                                        </div>
                                        <div className="col-md-6">
                                            <li className="sevices-item-heading">DIGITAL MARKETING</li>
                                            <li><Link to="/SearchEngine" className="dropdown-item services-item-content">Search Engine Optimization (SEO)</Link></li>
                                            <li><Link to="/SocialMediaMarket" className="dropdown-item services-item-content">Social Media Marketing (SMM)</Link></li>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <li className="sevices-item-heading">ADVANCED</li>
                                            <li><Link to="/BussinessIntelli" className="dropdown-item services-item-content">Business Intelligence Services</Link></li>
                                        </div>
                                        <div className="col-md-6">
                                            <li className="sevices-item-heading">CUSTOM SOFTWARE DEVELOPMENT</li>
                                            <li><Link to="/DeskWebMobileApp" className="dropdown-item services-item-content">Desktop / Web / Mobile Applications</Link></li>
                                        </div>
                                    </div>
                                </div>
                            </ul>
                            </div>
                        </li>
                     
              

                        <li className="nav-item">
                            <NavLink to='/Internship' className={({isActive})=>(isActive ? "nav-link nav-item-element active" : "nav-link nav-item-element text-white")}>INTERNSHIP</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to='/ContactUs' className={({isActive})=>(isActive ? "nav-link nav-item-element active" : "nav-link nav-item-element text-white")}>CONTACT US</NavLink>
                        </li>
                    </ul>
                </div>

                {/* Quote Button */}
                <span className="navbar-text col-5 col-md-2 text-center">
                    <button className="quote-button"><Link className="nav-bar-quotebtn" to ='/ContactUs'><h3 className="text-white quote-style">GET A QUOTE</h3></Link></button>
                </span>

                {/* <!-- Offcanvas for small screens --> */}
                {/* data-bs-dismiss="offcanvas" for auto closing */}
                <div className="offcanvas offcanvas-start d-sm-block d-md-none" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <Link to='/' className="nav-logo"><img className="img-fluid mob-logo" src={HubsemLogoBlack} alt="logo-white.png"/></Link>
                        <button className='x-button' type="button" data-bs-dismiss="offcanvas"  aria-label="Close">
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav">
                            <li className="nav-item menu-item" data-bs-dismiss="offcanvas">
                                <NavLink to='/' className={({isActive})=>(isActive ? "nav-link menu-item-element active" : "nav-link menu-item-element text-black")}  aria-current="page">HOME</NavLink>
                            </li>
                            <li className="nav-item menu-item" data-bs-dismiss="offcanvas">
                                <NavLink to='/AboutUs' className={({isActive})=>(isActive ? "nav-link menu-item-element active" : "nav-link menu-item-element text-black")} >ABOUT US</NavLink>
                            </li>

                            <div className="dropdown-click col-sm-6">
                               
                               <span data-bs-dismiss="offcanvas col-6">
                               <NavLink to='/Services' className={({isActive})=>(isActive ? "services-menu-mobile active" : "services-menu-mobile text-black")}>SERVICES</NavLink> 
                               </span>
                               <button className="dropdown-toggle dropdown-toggle-split services-ddbtn" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
                               
                              
                              
                              
                                
                                
                                
                                
                            

                                {/* Dropdown List */}
                                <ul className="dropdown-menu service-mob-border">
                                    <div className="container">
                                      
                                            <div className="col-12">
                                                <li className="services-mob-heading">WEB DESIGN & DEVELOPMENT</li>
                                                <li data-bs-dismiss="offcanvas"><Link to="/ResponsiveWeb" className="dropdown-item services-mob-page" >Responsive Website Design / Development</Link></li>
                                                <li data-bs-dismiss="offcanvas"><Link to="/Ecommerce" className="dropdown-item services-mob-page" >Ecommerce Solutions</Link></li>
                                            </div>
                                            <div className="col-12">
                                                <li className="services-mob-heading">ADVANCED</li>
                                                <li data-bs-dismiss="offcanvas"><Link to="/BussinessIntelli" className="dropdown-item services-mob-page" >Business Intelligence Services</Link></li>
                                            </div>
                                  
                                            <div className="col-12">
                                                <li className="services-mob-heading">DIGITAL MARKETING</li>
                                                <li data-bs-dismiss="offcanvas"><Link to="/SearchEngine" className="dropdown-item services-mob-page" >Search Engine Optimization (SEO)</Link></li>
                                                <li data-bs-dismiss="offcanvas"><Link to="/SocialMediaMarket" className="dropdown-item services-mob-page" >Social Media Marketing (SMM)</Link></li>
                                            </div>
                                            <div className="col-12">
                                                <li className="services-mob-heading">CUSTOM SOFTWARE DEVELOPMENT</li>
                                                <li data-bs-dismiss="offcanvas"><Link to="/DeskWebMobileApp" className="dropdown-item services-mob-page" >Desktop / Web / Mobile Applications</Link></li>
                                            </div>
                                    
                                    </div>
                                </ul>
                                
                            </div>

                            <li className="nav-item menu-item" data-bs-dismiss="offcanvas">
                                <NavLink to='/Internship' className={({isActive})=>(isActive ? "nav-link menu-item-element active space-between" : "nav-link menu-item-element space-between text-black")} >INTERNSHIP</NavLink>
                            </li>
                            <li className="nav-item menu-item" data-bs-dismiss="offcanvas">
                                <NavLink to='/ContactUs' className={({isActive})=>(isActive ? "nav-link menu-item-element active" : "nav-link menu-item-element text-black")} >CONTACT US</NavLink>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </nav>
        
        </>
    
    
  )
}

export default NavigationBar