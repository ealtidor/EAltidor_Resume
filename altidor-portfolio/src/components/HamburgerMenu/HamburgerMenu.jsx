import './HamburgerMenu.css'
import { slide as Menu } from 'react-burger-menu'
import {useState} from 'react'

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false)

  function toggleOpen() {
    setOpen(!open)
  }
  


  return (
    <div>
      <Menu left >
        <a onStateChange={toggleOpen} className="menu-item" href="#about">About</a>
        <a onStateChange={toggleOpen} className="menu-item" href="#projects">Projects</a>
        <a onStateChange={toggleOpen} className="menu-item" href="https://drive.google.com/file/d/1n0h17wUNuKfeenhfvLwVLmOMf_-7I0Lk/view?usp=sharing">Resume</a>
        <a onStateChange={toggleOpen} className="menu-item" href="#contact">Contact</a>
      </Menu>
    </div>
  )
}
