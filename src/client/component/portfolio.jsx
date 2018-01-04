import React, {Component} from 'react';

import Nav from "./nav.jsx";
import Header from "./header.jsx";
import AboutMe from "./aboutme.jsx";
import Experience from "./experience.jsx";
import Skills from "./skills.jsx";
import Contact from "./contact.jsx";

class Portfolio extends Component {

  render() {
    return (
      <div>
        <Nav/>
        <Header/>
        <AboutMe/>
        <Experience/>
        <Skills/>
        <Contact/>
      </div>
    )
  }
}


export default Portfolio
