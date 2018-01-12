import React, {Component} from 'react';

import "./css/skills.scss"

class Skills extends Component {
  render() {
    return <section id="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="row skill_container">
          {this.props.data.map(skill => {
            return (
              <section key={skill.name} className="skill center">
                <h4>{skill.name}</h4>
                <img src={skill.logo}/>
              </section>
            )
          })}
        </div>
      </div>
    </section>
  }
}

export default Skills
