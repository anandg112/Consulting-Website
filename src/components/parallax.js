import React from "react";
import { Parallax, Icon, Row, Col} from "react-materialize";

const ParallaxItem = ({name}) =>
<div>
	<Parallax imageSrc="https://static.pexels.com/photos/7376/startup-photos.jpg"/>
	<div className="section white">
		<div className="row container">
			<h2 className="header">Our Ethos</h2>
			<p className="grey-text text-darken-3 lighten-3">We use modern frameworks to craft unique web experiences for your business. We specialize in using React for client-side development and Node.js with AWS on the back-end to scale your business and take it to the next level.</p>
			<Row>
				<Col s={4} className='grid-example'>
					<Icon medium>flash_on</Icon>
					<p>Testing 123</p>
				</Col>
				<Col s={4} className='grid-example'>
					<Icon medium>code</Icon>
					<p>Testing 123</p>
				</Col>
				<Col s={4} className='grid-example'>
					<Icon medium>settings</Icon>
					<p>Testing 123</p>
				</Col>
			</Row>
		</div>
	</div>
	<Parallax imageSrc="http://materializecss.com/images/parallax2.jpg"/>
</div>


export default ParallaxItem;
