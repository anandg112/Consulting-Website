import React from "react";
import { Parallax, Icon, Row, Col } from "react-materialize";

const AboutUs = ({ name }) =>
    <section>
        <div className="section white">
            <div className="row container">
                <h2 className="header">About Us</h2>
                <Row>
                    <Col s={1} className='grid-example'><Icon small>email</Icon></Col>
                </Row>
                <Row>
                    <Col s={1} className='grid-example'><Icon small>contact_phone</Icon></Col>
                </Row>
                <Row>
                    <Col s={1} className='grid-example'><Icon small>chat_bubble</Icon></Col>
                </Row>

            </div>
        </div>
        <Parallax imageSrc="https://static.pexels.com/photos/7376/startup-photos.jpg" />
    </section>

export default AboutUs;