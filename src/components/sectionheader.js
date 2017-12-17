import React from "react";
import { Parallax } from "react-materialize";

const SectionHeader = ({name}) =>
<section>
<div className="section white">
  <div className="row container">
    <h2 className="header">Parallax</h2>
    <p className="grey-text text-darken-3 lighten-3">We use modern frameworks to craft unique web experiences for your business. We specialize in using React for client-side development and AWS on the back-end to scale your business and take it to the next level.</p>
  </div>
</div>
<Parallax imageSrc="https://static.pexels.com/photos/7376/startup-photos.jpg"/>
</section>

export default SectionHeader;
