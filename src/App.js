import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Projects from "./components/Projects";
import About from "./components/About";

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
      </Switch>
      </div>
    </Router>

  );
}

export default App;
