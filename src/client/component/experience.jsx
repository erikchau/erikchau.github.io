import React, {Component} from 'react';

class Experience extends Component {
  render() {
    return <section id="experience">
      <h2>Experience</h2>
      {this.props.data.map(exp => {
        return (
          <section key={exp.company}>
            <h3>{exp.company}</h3>
            <h4>{exp.role}</h4>
            <ul>
              {exp.responsibilities.map((res, i )=> {
                return (
                  <li key={i}>{res}</li>
                )
              })}
            </ul>
          </section>
        )
      })}
    </section>
  }
}

export default Experience
