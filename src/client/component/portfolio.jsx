import React, {Component} from 'react';

import Header from "./header.jsx";
import Nav from "./nav.jsx";
import AboutMe from "./aboutme.jsx";
import Experience from "./experience.jsx";
import Skills from "./skills.jsx";
import Contact from "./contact.jsx";

import "../../../lib/skeleton/normalize.css";
import "../../../lib/skeleton/skeleton.css";
import "./css/common.scss";

class Portfolio extends Component {

  render() {
    return (
      [
        <main key="main">
          <Header data={this.props.data.header} nav={this.props.data.nav}/>
          <Nav data={this.props.data.nav}/>
          <AboutMe data={this.props.data.aboutme}/>
          <Experience data={this.props.data.experience}/>
          <Skills data={this.props.data.skills}/>
          <Contact data={this.props.data.contact}/>
        </main>
        ]
    )
  }
}


export default Portfolio
