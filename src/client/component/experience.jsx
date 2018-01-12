import React, {Component} from 'react';

import "./css/experience.scss"

class Experience extends Component {
  render() {
    return <section id="experience">
      <div className="container">
        <h2>Experience</h2>
        {this.props.data.map(exp => {
          return (
            <section key={exp.company}>
              <h3 className="underline">{exp.company}</h3>
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
      </div>
    </section>
  }
}

export default Experience
