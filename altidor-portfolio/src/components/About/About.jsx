import './About.css'

export default function About() {
  return (
    <div id='about'>
      <div className='about-container'>
      <img  className='profile-pic' src='https://i.imgur.com/tRaOhsc.jpeg' alt='Emanuella'/>
      <p className='about-description'>
        I’m a software engineer that has a passion for helping people create
        strategic and innovative outcomes using a consultative approach with the
        latest technical solutions. With over 7 years experience as a project manager,
        I’ve gained skills in change management, strategic planning, relationship building,
        and agile methodology. I strive to energize my stakeholders by taking them to the
        next level with my coding ability and project management experience.
      </p>
        
      </div>
      <a className='back-to-top' href='#nav'>Back to Top</a>
    </div>
  )
}
