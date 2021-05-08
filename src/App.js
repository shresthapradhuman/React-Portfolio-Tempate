import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import Profile from "./components/Card/Profile";
import "./styles/App.scss";
import "./styles/Box.scss";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Work from "./pages/Work";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
function App() {
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
                    <Route path="/blog" component={Blog} />
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
