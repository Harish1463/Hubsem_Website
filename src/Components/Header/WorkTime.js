import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import SocialMedia from './SocialMedia'


function WorkTime ()  {
  return (
    <>
    <div className='d-none d-sm-block d-md-block'>
      <div className='icon'>
        <span><i><FontAwesomeIcon icon={faClock} /></i> Monday - Friday : 10 AM - 6 PM</span>
        <SocialMedia />
      </div>
    </div>
    </>
  )
}

export default WorkTime
