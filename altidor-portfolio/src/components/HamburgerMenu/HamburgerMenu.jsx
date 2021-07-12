import "./HamburgerMenu.css";
import { slide as Menu } from "react-burger-menu";
import { useState } from "react";

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  function closeMenu () {
    setOpen(false)
  }
  function handleStateChange (state) {
    setOpen(state.isOpen)  
  }

  return (
    <div>
      <Menu left width={"40%"} isOpen={open} onStateChange={ (state) => handleStateChange(state) }>
        <a onClick={closeMenu} className="menu-item" href="#about">
          About
        </a>
        <a onClick={closeMenu} className="menu-item" href="#projects">
          Projects
        </a>
        <a
          className="menu-item"
          target="_blank"
          href="https://drive.google.com/file/d/1EN9GJijaMA2UmBFQ0RNpz6OJnEnjlVi2/view?usp=sharing"
        >
          Resume
        </a>
        <a onClick={closeMenu} className="menu-item" href="#contact">
          Contact
        </a>
      </Menu>
    </div>
  );
}
