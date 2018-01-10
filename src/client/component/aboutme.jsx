import React, {Component} from 'react';

class AboutMe extends Component {
  render() {
    return <section id="aboutme" className="row hero">
      <h2>About Me</h2>
      <p>{this.props.data.headline}</p>
      <p>{this.props.data.story}</p>
    </section>
  }
}

export default AboutMe
