import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Projects from "./Projects";
import {useEffect} from 'react'

const Home = () => {

    useEffect(() => console.log('hi'))
    const history = useHistory()

    const handleSearch = () => {

        const searchBarValue = document.getElementById("search-input").value.toLowerCase()
        console.log(searchBarValue)

        history.push(`/${searchBarValue}`)
    }

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

      <div className="nav-container">
        <div className="search-container">
          <input
            placeholder="ex. About, Projects, Contact"
            className="search-input"
            id="search-input"
          ></input>
        </div>
        <button id="search-button" type="submit" onClick={handleSearch}>
          <i class="fa-solid fa-magnifying-glass fa-2x"></i>
        </button>
      </div>
    </>
  );
};

export default Home;
