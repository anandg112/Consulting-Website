import React from "react";
import { Footer } from "react-materialize";

const FooterItem = ({name}) =>
<Footer copyrights="&copy; 2017 All rights reserved"
	// moreLinks={
	// 	<a className="grey-text text-lighten-4 right" href="#!">More Links</a>
	// }
	links={
		<ul>
			<li><a className="grey-text text-lighten-3" href="home.html">Home</a></li>
			<li><a className="grey-text text-lighten-3" href="services.html">Services</a></li>
			<li><a className="grey-text text-lighten-3" href="about.html">About Us</a></li>
			<li><a className="grey-text text-lighten-3" href="contact.html">Contact Us</a></li>
		</ul>
	}
	className='example'
>
		<h5 className="white-text">Innov Technologies</h5>
		<p className="grey-text text-lighten-4">Crafting bespoke digital experiences for SMEs</p>
</Footer>;

export default FooterItem;
