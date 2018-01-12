import React, {Component} from 'react';

class AboutMe extends Component {
  render() {
    return <section id="aboutme">
      <div className="container">
        <h2>About Me</h2>
        <p className="center">{this.props.data.headline}</p>
        <p>{this.props.data.story}</p>
      </div>
    </section>
  }
}

export default AboutMe
