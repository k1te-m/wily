import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreatePost from "./pages/CreatePost";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

// Auth Context States
import AuthState from "./context/auth/AuthState";
import setAuthToken from "./utils/setAuthToken";

// Put login token in local storage
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <div className="App">
      <AuthState>
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/post" component={CreatePost} />
          </Switch>
        </Router>
      </AuthState>
    </div>
  );
}

export default App;
