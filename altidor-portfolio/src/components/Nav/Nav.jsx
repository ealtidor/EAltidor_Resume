import './Nav.css'
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu.jsx'


export default function Nav() {
  return (
    <div id='nav' className='nav-container'>
      <div className='hamburger-menu'>
        <HamburgerMenu />
      </div>
      <div className='name-container'>
        <h3 className='name-text'>Emanuella Altidor // Software Engineer</h3>
     <img  className='name-logo' src="https://i.imgur.com/ZXwdX6F.png" alt='Name Logo'/>
      </div>
      <div className='menu-links'>
      <a className="menu-item" href="#about">About</a>
        <a  className="menu-item" href="#projects">Projects</a>
        <a  className="menu-item"  target="_blank" href="https://drive.google.com/file/d/1EN9GJijaMA2UmBFQ0RNpz6OJnEnjlVi2/view?usp=sharing">Resume</a>
        <a className="menu-item" href="#contact">Contact</a>
        <a className='resume' target="_blank" href="https://drive.google.com/file/d/1EN9GJijaMA2UmBFQ0RNpz6OJnEnjlVi2/view?usp=sharing">Resume</a>
      </div>
    </div>
  )
}
