import React, {Component} from 'react';

import Nav from "./nav.jsx";
import Header from "./header.jsx";
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
        <Nav data={this.props.data.nav} key="nav"/>,
        <main key="main">
          <Header data={this.props.data.header}/>
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
