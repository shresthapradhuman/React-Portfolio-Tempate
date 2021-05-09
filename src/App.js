import React from "react";
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
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard"

function App() {
  let url = window.location.pathname;
  let arr = url.split('/');
  return (
    <>
      {arr[1] !== "admin" ? (
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
                      <Route path="/blog" exact component={Blog} />
                      <Route path={`/blog/:slug`} component={Detail} />
                      <Route path="/contact" component={Contact} />
                    </Switch>
                  </div>
                </div>
              </section>
            </Router>
          </div>
        </div>
      ) : (
        <Router>
          <Switch>
            <Route path="/admin" exact component={Login} />
            <Route path="/admin/dashboard" component={Dashboard} />
          </Switch>
        </Router>
      )}
    </>
  );
}

export default App;
