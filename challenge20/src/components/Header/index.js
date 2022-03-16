import React, { Component } from "react";
import { Route, Navigate, HashRouter, Routes } from "react-router-dom";
import Navigation from "./../Navigation";
import About from "./../About";
import Portfolio from "./../Portfolio";
import Contact from './../Contact';
import Resume from './../Resume';


class Header extends Component {
  render() {
    return (
      <HashRouter>
        <header>
          <Navigation />
        </header>

        <div className="content">
        <Routes>    
          <Route exact path="/" render={() => <Navigate to="/about" />} />
          <Route path="/About" component={About} />
          <Route path="/Portfolio" component={Portfolio} />
          <Route path="/Contact" component={Contact}/>
          <Route path="/Resume" component={Resume}/>
          </Routes>
        </div>
      </HashRouter>
    );
  }
}

export default Header;