import React, { Component } from "react";
import NavBarItem from './navbar';
import ParallaxItem from './parallax';
import DropdownItem from './dropdown';
import SectionHeader from './sectionheader';
import FooterItem from './footer';
import AboutUs from "./aboutus";
import Services from "./services";

export default class App extends React.Component {
  render() {
  return (
    <div>
      <NavBarItem />
      <ParallaxItem />
      <Services />
      <AboutUs />
      <SectionHeader />
      <FooterItem />
    </div>
  );
}
}
