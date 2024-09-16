import './Contact.css'



function Contact(){
    return(
        <>
        <div className='contact d-none d-sm-none d-md-block'>

            <div className="container">
                <div className="row">

                    {/* phone Number */}
                    <div className="col-md-3 d-flex">
                        <a href="tel: +91 9500590134"><i className="fa-solid fa-phone contact-icon"></i></a>
                        <div>
                            <h3>
                                <a href="tel: +91 9500590134" className="reach-us">Reach Us</a>
                            </h3>
                            <p><a href="tel: +91 9500590134" className='contact-hover phone-no'>+91 9500590134</a></p>
                        </div>
                    </div>

                    {/* Address */}
                    <div className="col-md-6 d-flex address">
                        <i className="fa-regular fa-address-card contact-icon"></i>
                        <div>
                            <h3 className="reach-us">Office Address</h3>
                            <p className="phone-no">#714A,Spencer Plaza, Phase II, 7th Floor, #769, Anna Salai, Thousand Lights, Chennai-600002</p>
                        </div>
                    </div>

                    {/* E-Mail */}
                    <div className="col-md-3 d-flex">
                        <a href="mailto: info@hubsem.com"><i className="fa-solid fa-envelope contact-icon"></i></a>
                        <div>
                            <h3>
                                <a href="mailto: info@hubsem.com" className="reach-us">Send us an email</a>
                            </h3>
                            <p>
                            <a href="mailto: info@hubsem.com" className='contact-hover phone-no'>info@hubsem.com</a>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            
        </div>
        </>
    )
}
export default Contact