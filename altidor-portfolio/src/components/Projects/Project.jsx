import "./Project.css";

export default function Project() {
  return (
    <div id='projects' >
      <div className="projects-container"> 
      <div className="img-holder">
          <div className="project-imgs-container">
            <div className='project-card'>
          <img
            className="project-img"
            src="https://i.imgur.com/8fORzVa.png"
            alt="Project 1"
              />
              <div className='card-body'>
                <h5 className='card-title'>MAKEUP FINDER</h5>
                <p className='card-text'>Frontend website built with HTML, Javascript, CSS, and third-party data from a Makeup API</p>
                <a className='app-button' href='https://ealtidor.github.io/Makeup_Finder/'>See The App</a>
                <a className='code-button' href='https://github.com/ealtidor/Makeup_Finder'>See The Code</a>
              </div>
            </div>
          <img
            className="project-img"
            src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbXB1dGVyc3xlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            alt="Project 2"
          />
          <img
            className="project-img"
            src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbXB1dGVyc3xlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            alt="Project 3"
          />
          <img
            className="project-img"
            src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbXB1dGVyc3xlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            alt="Project 4"
          />
        </div>
      </div>
      </div>
    </div>
  );
}
