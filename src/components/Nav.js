import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Home from "./Home";

const NavBar = styled.nav`
  background: #081275;
  color: #fcb150;
  height: 50px;
  display: flex;
  justify-content: space-between:
  width: 100%;
`;

const NavLogo = styled.a`
  font-weight: 700;
  margin: auto;
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  flex-grow: 4;
  justify-content: flex-end;
  margin: auto;
`;

const NavLink = styled.a`
  color: #fcb150;
  font-size: 25px;
  margin: 10px;
  text-decoration: none;
`;

const Nav = () => {
  return (
    <>
      <Router>
        <NavBar>
          <NavLogo>
            <Link to="/">
              <NavLink>Nele</NavLink>
            </Link>
          </NavLogo>
          <NavLinks>
            <Link to="/about">
              <NavLink>About</NavLink>
            </Link>
            <Link to="/portfolio">
              <NavLink>Portfolio</NavLink>
            </Link>
            <Link to="/contact">
              <NavLink>Contact</NavLink>
            </Link>
          </NavLinks>
        </NavBar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Nav;
