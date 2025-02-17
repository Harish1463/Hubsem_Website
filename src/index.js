import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Importing Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Importing Aos
import 'aos/dist/aos.css'
import 'aos/dist/aos'

// importing bootstrap fonts
import "bootstrap-icons/font/bootstrap-icons.css";

// importing react-slick slick-carousel
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// importing vertical slider elements for Responsive Design page section 2
import 'react-vertical-timeline-component/style.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>  
    <App />
  </React.StrictMode>
);

reportWebVitals();
