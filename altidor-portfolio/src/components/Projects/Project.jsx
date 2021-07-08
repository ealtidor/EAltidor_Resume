import "./Project.css";

export default function Project() {
  return (
    <div id="projects">
      <div className="projects-container">
      <div className="project-card">
          <img
            className="project-img"
            src="https://i.imgur.com/TZmIbwk.png"
            alt="Project 4"
          />
          <div className="card-body">
            <h5 className="card-title">TOGGLE</h5>
            <p className="card-text">
              Full-stack website built with React, Ruby on Rails, with a unique RESTful API created by me.
            </p>
            <a
              className="app-button"
              href="https://yielding-zoo.surge.sh/"
            >
              See The App
            </a>
            <a
              className="code-button"
              href="https://github.com/ealtidor/Toggle"
            >
              See The Code
            </a>
          </div>
        </div>
        <div className="project-card">
          <img
            className="project-img"
            src="https://i.imgur.com/dlmWygi.png"
            alt="Project 3"
          />
          <div className="card-body">
            <h5 className="card-title">RE-CYCLE</h5>
            <p className="card-text">Full-stack web application with React front-end, CSS, and backend with full-CRUD using Express, Mongoose and MongoDB. I developed the project delivery board and used Agile methodology to ensure we completed the project within 1 week. 
            </p>
            <a
              className="app-button"
              href="https://ealtidor.github.io/Makeup_Finder/"
            >
              See The App
            </a>
            <a
              className="code-button"
              href="https://github.com/ealtidor/Makeup_Finder"
            >
              See The Code
            </a>
          </div>
        </div>
        <div className="project-card">
          <img
            className="project-img"
            src="https://i.imgur.com/8fORzVa.png"
            alt="Project 1"
          />
          <div className="card-body">
            <h5 className="card-title">MAKEUP FINDER</h5>
            <p className="card-text">
              Frontend website built with HTML, Javascript, CSS, and third-party
              data from a Makeup API
            </p>
            <a
              className="app-button"
              href="https://ealtidor.github.io/Makeup_Finder/"
            >
              See The App
            </a>
            <a
              className="code-button"
              href="https://github.com/ealtidor/Makeup_Finder"
            >
              See The Code
            </a>
          </div>
        </div>
        <div className="project-card">
          <img
            className="project-img"
            src="https://i.imgur.com/TEzbsKA.png"
            alt="Project 2"
          />
          <div className="card-body">
            <h5 className="card-title">PRODUCT JUNKIES</h5>
            <p className="card-text">
            Frontend website built with React, React Router, Axios to consume data from Airtable, and CSS.  
            </p>
            <a
              className="app-button"
              href="https://admiring-haibt-ba63a0.netlify.app"
            >
              See The App
            </a>
            <a
              className="code-button"
              href="https://github.com/ealtidor/Product-Junkies"
            >
              See The Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
