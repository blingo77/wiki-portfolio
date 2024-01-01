import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Projects from "./components/Projects";

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
      </Switch>
      </div>
    </Router>

  );
}

export default App;
