import "./Contact.css"
import emailjs from 'emailjs-com';


export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
          window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div id='contact'>
      <div className='contact-container'>
        <h3 className='contact-header'>Let's Work Together</h3>
        <p>If you'd like to talk about a project you want help with or any opportunities
          you feel I will be a good fit for, message me at</p>
        <p>emanuella.altidor@gmail.com</p>

<a href='mailto:nathan@ojieame.design?subject=Ui%2FUX%20Opportunity'>Write Me An Email</a>
      </div>
    </div>
  )
}
