
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faSquareTwitter, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons'
import './WorkTime.css'

function SocialMedia(){
    return(
        <>
        <div className='socialmedia'>
            <a className='appIcon' href='https://www.facebook.com/hubsemsolutions' target='_blank'>
                <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a className='appIcon' href='https://www.instagram.com/hubsemsolutions/' target='_blank'>
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a className='appIcon' href='https://x.com/hubsem' target='_blank'>
                <FontAwesomeIcon icon={faSquareTwitter} />
            </a>
            <a className='appIcon' href='https://www.linkedin.com/company/hubsem-software-solutions' target='_blank'>
                <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a className='appIcon' href='https://www.youtube.com/channel/UCpdFFI7vVU0_qKGSpQ520nQ' target='_blank'>
                <FontAwesomeIcon icon={faYoutube} />
            </a>
        </div>
        </>
    )
}
export default SocialMedia