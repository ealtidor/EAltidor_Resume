import './Footer.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


library.add(fab, faGithub, faLinkedin)

export default function Footer() {
  return (
    <div id='footer'>
      <div className='footer-container'>
        <p>© Emanuella Altidor || 2021</p>
      </div>
      <div className='social-links'>
      <a className='social' href='https://github.com/ealtidor'>
      <FontAwesomeIcon icon={faGithub} />
      </a>
      <a className='social' href='https://www.linkedin.com/in/emanuellaaltidor-mba/'><FontAwesomeIcon icon={faLinkedin} /></a>
      </div>
    </div>
  )
}
