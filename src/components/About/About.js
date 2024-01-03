import './About.css'
import Brandon from '../../images/brandon.jpg'
import NavBar from '../NavBar/Navbar'

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
                    <p>Enthusiastic and highly motivated aspiring software engineer with a strong foundation in computer science 
                        and a passion for solving complex problems through code. Currently pursuing a Bachelor's degree in Computer 
                        Science, I am eager to secure a software engineering internship opportunity to apply and expand my skills 
                        in a real-world setting. My experience in web development, data structures, and algorithms, combined with 
                        my commitment to continuous learning, makes me a valuable addition to any dynamic tech team. I am excited t
                        o contribute to projects and gain hands-on experience while learning from experienced professionals in the field.</p>
                </div>

            </div>

        </div>

    </> );
}
 
export default About;