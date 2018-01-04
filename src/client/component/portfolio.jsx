import React, {Component} from 'react';

import Nav from "./nav.jsx";
import Header from "./header.jsx";
import AboutMe from "./aboutme.jsx";
import Experience from "./experience.jsx";
import Skills from "./skills.jsx";
import Contact from "./contact.jsx";

class Portfolio extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <Nav data={this.props.data.nav}/>
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
