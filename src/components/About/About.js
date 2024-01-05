import './About.css'
import Brandon from '../../images/brandon.jpg'
import NavBar from '../NavBar/Navbar'
import pythonLogo from '../../images/python.svg'
import jsLogo from '../../images/javascript.svg'
import javaLogo from '../../images/java.svg'
import htmlLogo from '../../images/html.svg'
import cssLogo from '../../images/css.svg'
import flaskLogo from '../../images/flask.svg'
import reactLogo from '../../images/react.svg'
import jestLogo from '../../images/jest.svg'
import gitLogo from '../../images/git.svg'
import gitHubLogo from '../../images/github.svg'
import {Link} from 'react-router-dom'

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
                <div className="js-logo2">
                    <img src={jsLogo}></img>
                </div>

                <div className="java-logo2">
                    <img src={javaLogo}></img>
                </div>

                 <div className="html-logo2">
                    <img src={htmlLogo}></img>
                </div>
                <div className="css-logo2">
                    <img src={cssLogo}></img>
                </div>
                <div className="flask-logo">
                    <img src={flaskLogo}></img>
                </div>
                <div className="react-logo2">
                    <img src={reactLogo}></img>
                </div>
                <div className="jest-logo">
                    <img src={jestLogo}></img>
                </div>
                <div className="git-logo">
                    <img src={gitLogo}></img>
                </div>
                <a href='https://github.com/blingo77'>
                <div className="gitHub-logo">
                    <img src={gitHubLogo}></img>
                </div>
                </a>
            </div>
        </div>

    </> );
}
 
export default About;