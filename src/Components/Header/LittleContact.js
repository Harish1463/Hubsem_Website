import './LittleContact.css'

function LittleContact (){
    return(
        <>
        <div className="d-block d-xs-block d-sm-block d-md-none little-contact-size">
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-4 col-6'>
                        <a href="mailto: info@hubsem.com"><i className="fa-solid fa-envelope little-contact-icon"></i></a>
                        <a href="mailto: info@hubsem.com" className='little-contact-hover'>info@hubsem.com</a>
                    </div>
                    <div className='col-sm-4 col-6'>
                        <a href="tel: +91 9500590134"><i className="fa-solid fa-phone little-contact-icon"></i></a>
                        <a href="tel: +91 9500590134" className='little-contact-hover'>+91 9500590134</a>
                    </div>
                    <div className='col-sm-4 col-12'>
                        <div className='Little-social-media'>
                            <a className='little-app-Icon' href='https://www.facebook.com/hubsemsolutions' target='_blank'>
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                            <a className='little-app-Icon' href='https://www.instagram.com/hubsemsolutions/' target='_blank'>
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                            <a className='little-app-Icon' href='https://x.com/hubsem' target='_blank'>
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                            <a className='little-app-Icon' href='https://www.linkedin.com/company/hubsem-software-solutions' target='_blank'>
                                <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                            <a className='little-app-Icon' href='https://www.youtube.com/channel/UCpdFFI7vVU0_qKGSpQ520nQ' target='_blank'>
                                <i className="fa-brands fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}
export default LittleContact