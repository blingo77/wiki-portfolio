import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <>
            <div className="title">
                <h1>Brandon Lingo</h1>
                <p>Software Devolper</p>
            </div>

            <div className="main-container">

                <div className="python-logo">
                    <i class="fa-brands fa-python fa-3x"></i>
                    <p>Python</p>
                </div>

                <div className="js-logo">
                <i class="fa-brands fa-js fa-3x"></i>
                <p>JavaScript</p>
                </div>

                <div className="html-logo">
                    <i class="fa-brands fa-html5 fa-3x"></i>
                    <p>HTML</p>
                </div>

                <div className="css-logo">
                    <i class="fa-brands fa-css3-alt fa-3x"></i>
                    <p>CSS</p>
                </div>

                <div className="react-logo">
                    <i class="fa-brands fa-react fa-3x"></i>
                    <p>React</p>
                </div>
                
                <div className="java-logo">
                    <i class="fa-brands fa-java fa-3x"></i>
                    <p>Java</p>
                </div>

                <Link to="/projects">
                    <div className="center-logo">
                        <i className="fa-solid fa-laptop-code fa-10x"></i>
                    </div>
                </Link>
            </div>

        </>);
}

export default Home;