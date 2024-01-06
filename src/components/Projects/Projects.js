import NavBar from "../NavBar/Navbar";
import './projects.css'
import starWarsIMG from './StarWars-gp-img.png'
import BankSiteIMG from './BankSite-img.png'

const Projects = () => {

    const title = 'Projects'

    return (
        <>

            <NavBar title={title}></NavBar>

            <div className="projects-main-container">
                <div className="project1-container">
                    <div className="project1-img-container">
                        <img src={starWarsIMG} />
                    </div>
                    <div className="project1-description-container">
                        <h1>Star Wars 2D PVP Game</h1>
                        <h3>Description: </h3>
                        <p>A Star Wars 2D PVP shooter game giving you the chance to play as the Empire or the Rebellion.
                            The Empire and Rebllion have their own ship and laser color accuratley according to the movies.
                            This game includes music and sound effects from Star Wars. Many settings can be changed like, movement
                            speed, bullet speed, player health, and resolution, in the file for settings. Each player is created
                            using a sprite and given "Masks" to be able to detect collisions between bullets.
                        </p>
                        <h4><strong>Technolgies Used:  </strong> <u>  Python, Pygame, Audacity </u></h4>
                        <a href="https://github.com/blingo77/2D-Star-Wars-PVP" target="_blank"><h3>View GitHub Repository</h3></a>
                    </div>
                </div>

                <div className="project2-container">

                    <div className="project2-description-container">
                        <h1>Finance Website</h1>
                        <h3>Description: </h3>
                        <p>
                            A mock finance website, which tracks users deposits and withdrawls. Users are able to register for an account
                            and login accoriding to the email used and password which is hashed. Users can also see their own information in the profile page,
                            they are also given the ability to update this information. In this website I utilize SQLAlchemy to create my database to store all
                            user informaiton and data from the website. I implemented basic security measures to stop users from accesing other users accounts
                            or data.
                        </p>
                        <h4><strong>Technolgies Used: </strong> <u>  Python, Flask, HTML, CSS, SQLAlchemy, Bootstrap</u></h4>
                        <a href="https://github.com/blingo77/Finance-Website.git"  target="_blank"><h3>View GitHub Repository</h3></a>
                    </div>
                    <div className="project2-img-container">
                        <img src={BankSiteIMG} />
                    </div>
                </div>

            </div>

        </>
    );
}

export default Projects;