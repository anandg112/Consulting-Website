import React, { Component } from "react";
import NavBarItem from './navbar';
import ParallaxItem from './parallax';
import DropdownItem from './dropdown';
import SectionHeader from './SectionHeader';
import FooterItem from './footer';

export default class App extends React.Component {
  render() {
  return (
    <div>
      <NavBarItem />
      <ParallaxItem />
      <SectionHeader />
      <FooterItem />
    </div>
  );
}
}
