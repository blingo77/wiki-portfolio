import NavBar from "../NavBar/Navbar";
import './contact.css'
import emailLogo from '../../images/mail.svg'
import gitHubLogo from '../../images/github.svg'
import phoneLogo from '../../images/phone.svg'

const Contact = () => {

    const title = 'Contact'

    return ( 
        <>
        <NavBar title={title}></NavBar>

        <div className="contact-container">
            <div className="contact-title-container">
                <h1>Contact Info</h1>
            </div>

            <div className="contact-main-container">
                <div className="phone-container">
                    <img src={phoneLogo}/>
                    <h2>Phone</h2>
                    <h3>702-271-4970</h3>
                </div>
                <div className="email-container">
                    <img src={emailLogo}/>
                    <h2>Email</h2>
                    <a href="mailto:brandonlingo0@gmail.com">
                    <h3>brandonlingo0@gmail.com</h3>
                    </a>
                    <h5>Or</h5>
                    <a href="mailto:brandonlingo2004@gmail.com">
                    <h3>brandonlingo2004@gmail.com</h3>
                    </a>
                </div>
                <div className="gitHub-container">
                    <img src={gitHubLogo}/>
                    <h2>GitHub</h2>
                    <h3>Blingo77</h3>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Contact;