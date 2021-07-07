import "./App.css";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Project from "./components/Projects/Project";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="App">
        <Nav />
      </div>
      <div>
        <h2 className='about-header'>About Me.</h2>
        <About />
        <h2 className="projects-header">Projects.</h2>
        <Project />
        <h2 className="contact-header">Contact.</h2>
        <Contact />
        <Footer/>
      </div>
    </>
  );
}

export default App;
