import "./Contact.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


export default function Contact() {


  return (
    <div id='contact'>
      <div className='contact-container'>
        <h3 className='contact-subheader'>Let's Work Together!</h3>
        <p className='contact-text'>If you'd like to talk about a project you want help with or any opportunities
          you feel I will be a good fit for, message me at</p>
        <p className='contact-email'>emanuella.altidor@gmail.com</p>
<a className='write-me' href='mailto:emanuella.altidor@gmail.com?subject=Coding%20Opportunity'>Write Me An Email <FontAwesomeIcon icon={faEnvelope} /></a>
      </div>
    </div>
  )
}
