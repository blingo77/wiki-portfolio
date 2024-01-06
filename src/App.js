import Home from "./components/Home/Home";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import NotFound from "./components/404/404";

function App() {
  return (
    <Router>
      <div className="App">
 

      <Switch>

        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route path="/projects">
          <Projects></Projects>
        </Route>

        <Route path="/about">
          <About></About>
        </Route>

        <Route path="/contact">
          <Contact></Contact>
        </Route>

        <Route path="/404">
          <NotFound></NotFound>
        </Route>

      </Switch>
      </div>
    </Router>

  );
}

export default App;
