import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'

// importing main pages
import Home from "./Pages/Home"
import AboutUs from "./Pages/AboutUs"
import Services from "./Pages/Services"
import Internship from "./Pages/Internship"
import ContactUs from "./Pages/ContactUs"

// importing services content pages
import ResponsiveWeb from "./Pages/ResponsiveWeb"
import Ecommerce from "./Pages/Ecommerce"
import BussinessIntelli from "./Pages/BussinessIntelli"
import SearchEngine from "./Pages/SearchEngine"
import SocialMediaMarket from "./Pages/SocialMediaMarket"
import DeskWebMobileApp from "./Pages/DeskWebMobileApp"



function Header () {


  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Path for Main Pages */}
          <Route exact path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Internship" element={<Internship />} />
          <Route path="/ContactUs" element={<ContactUs />} />

          {/* Path for Service Content pages */}
          <Route path="/ResponsiveWeb" element={<ResponsiveWeb />}/>
          <Route path="/Ecommerce" element={<Ecommerce />}/>
          <Route path="/BussinessIntelli" element={<BussinessIntelli />}/>
          <Route path="/SearchEngine" element={<SearchEngine />}/>
          <Route path="/SocialMediaMarket" element={<SocialMediaMarket />}/>
          <Route path="/ResponsiveWeb" element={<DeskWebMobileApp />}/>
          <Route path="/DeskWebMobileApp" element={<DeskWebMobileApp />}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Header