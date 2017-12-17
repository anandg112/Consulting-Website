import React from "react";
import { SideNav, Navbar, NavItem } from "react-materialize";

const NavBarItem = ({name}) =>
<Navbar className='navBar' brand='../public/innov.png' right>
	<NavItem href='home.html'>Home</NavItem>
	<NavItem href='services.html'>Services</NavItem>
  <NavItem href='about.html'>About Us</NavItem>
  <NavItem href='contact.html'>Contact Us</NavItem>
</Navbar>


export default NavBarItem;
