import './About.css'
import Brandon from '../../images/brandon.jpg'
import NavBar from '../NavBar/Navbar'
import pythonLogo from '../../images/python.svg'
import jsLogo from '../../images/javascript.svg'
import javaLogo from '../../images/java.svg'

const About = () => {

    const title = 'About'

    return ( 
    <>
        <NavBar title={title}></NavBar>

        <div className="about-container">
            <div className="pic-container">
                <img src={Brandon} alt="Picture of Brandon" className="brandon-pic" />
            </div>

            <div className="bigText-container">
                <h1>Hello!</h1>
                <h1 className="name-title">I'm Brandon Lingo.</h1>

                <div className="text-container">
                    <p>
                        I'm Brandon Lingo, I'm a very enthusiastic and highly motivated aspiring software engineer with 
                        a strong foundation in computer science and a passion for solving complex problems 
                        through code. Currently pursuing a Bachelor's degree in Computer Science, I am eager 
                        to secure a software engineering internship opportunity to apply and expand my skills 
                        in a real-world setting. My experience in web development, data structures, and algorithms, 
                        combined with my commitment to continuous learning, makes me a valuable addition to any 
                        dynamic tech team. I am excited t o contribute to projects and gain hands-on experience 
                        while learning from experienced professionals in the field.</p>
                </div>

            </div>

        </div>

        <div className="tech-main-container">

            <div className="tech-title-container">
                <h1>Technologies</h1>
            </div>

            <div className="tech-logo-containers">
                <div className="py-logo">
                    <img src={pythonLogo}></img>
                </div>
                <div className="js-logo">
                    <img src={jsLogo}></img>
                </div>
                <div className="js-logo">
                    <img src={jsLogo}></img>
                </div>
                <div className="java-logo">
                    <img src={javaLogo}></img>
                </div>
            </div>
        </div>

    </> );
}
 
export default About;