import React, {Component} from 'react';

class AboutMe extends Component {
  render() {
    return <section>
      <h2>About Me</h2>
      <h3>{this.props.data.headline}</h3>
      <p>{this.props.data.story}</p>
    </section>
  }
}

export default AboutMe
