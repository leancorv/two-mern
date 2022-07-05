import "./app.scss"
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
// import Watch from "./pages/watch/Watch";
import Play from "./pages/play/Play";
import { BrowserRouter as Router, Switch, Route , Redirect } from "react-router-dom";
// import Login from "./pages/login/Login";

const App = () => {
  const user = true;
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          { user ? <Home /> : <Redirect to="/register"/>}
        </Route>
        <Route path="/register">
          { !user ? <Register /> : <Redirect to="/" /> }
        </Route>
        {/* <Route path="/login">
          { !user ? <Login /> : <Redirect to="/" /> }
        </Route> */}
        { user && (
          <>
            <Route path="/movies">
              <Home type="peliculas" />
            </Route>
            <Route path="/series">
              <Home type="series"/>
            </Route>
            <Route path="/play">
              <Play />
            </Route>
          </>
        )
        }
      </Switch>
    </Router>
  );
};

export default App;
