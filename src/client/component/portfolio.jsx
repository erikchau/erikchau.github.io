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
        <Nav data={this.props.data.nav}/>
        <main>
          <Header data={this.props.data.header}/>
          <AboutMe data={this.props.data.aboutme}/>
          <Experience data={this.props.data.experience}/>
          <Skills data={this.props.data.skills}/>
          <Contact data={this.props.data.contact}/>
        </main>
      </div>
    )
  }
}


export default Portfolio
