import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./styles/App.scss";
import "./styles/Box.scss";
import Navbar from "./components/Navbar";
import Profile from "./components/Card/Profile";
import About from "./pages/frontend/About";
import Resume from "./pages/frontend/Resume";
import Work from "./pages/frontend/Work";
import Blog from "./pages/frontend/Blog";
import Detail from "./pages/frontend/Detail";
import Contact from "./pages/frontend/Contact";
import ReactGA from "react-ga";
import { GA } from "./data/Setting";


function App() {
  useEffect(() => {
    ReactGA.initialize(GA.REACT_APP_GA_TRACKING_CODE);
    ReactGA.pageview(window.location.pathname + window.location.search);
  },[]);
  return (
    <>
      <div className="container">
        <div className="row">
          <Router>
            <section className="header">
              <Navbar />
            </section>
            <section className="card">
              <Profile />
            </section>
            <section className="content">
              <div className="main">
                <div className="wrapper">
                  <Switch>
                    <Route path="/" exact component={About}>
                      <Redirect to="/about" />
                    </Route>
                    <Route path="/about" component={About} />
                    <Route path="/resume" component={Resume} />
                    <Route path="/work" component={Work} />
                    <Route path="/vlog" exact component={Blog} />
                    <Route path={`/vlog/:slug`} component={Detail} />
                    <Route path="/contact" component={Contact} />
                  </Switch>
                </div>
              </div>
            </section>
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;
