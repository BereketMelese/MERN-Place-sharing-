import React, { useState } from "react";

import MainHeader from "./MainHeader";
import "./MainNavigation.css";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import BackDrop from "../UIElement/Backdrop";

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closedDrawerHandler = () => {
    setDrawerIsOpen(false);
  };
  return (
    <React.Fragment>
      {drawerIsOpen && <BackDrop onClick={closedDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closedDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>
      <MainHeader>
        <button
          className="main-navigation__menu-btn"
          onClick={openDrawerHandler}
        >
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">Your Places</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
