import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreatePost from "./pages/CreatePost";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
// import { Provider } from "react-redux";
// import store from "./store";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/post" component={CreatePost} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
