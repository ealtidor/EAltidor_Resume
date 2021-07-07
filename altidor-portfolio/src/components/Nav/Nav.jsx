import './Nav.css'
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu.jsx'


export default function Nav() {
  return (
    <div id='nav' className='nav-container'>
      <div className='hamburger-menu'>
        <HamburgerMenu />
      </div>
      <div className='name-container'>
     <img  className='name-logo' src="https://i.imgur.com/ZXwdX6F.png" alt='Name Logo'/>
      </div>
        <a className='resume' href="https://drive.google.com/file/d/1n0h17wUNuKfeenhfvLwVLmOMf_-7I0Lk/view?usp=sharing">Resume</a>
    </div>
  )
}
