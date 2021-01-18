import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./layouts/Landing";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
