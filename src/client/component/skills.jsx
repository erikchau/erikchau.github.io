import React, {Component} from 'react';

class Skills extends Component {
  render() {
    return <section id="skills">
      <h2>Skills</h2>
      <div className="skills_container">
        {this.props.data.map(skill => {
          return (
            <section key={skill.name}>
              <h3>{skill.name}</h3>
              <img src={skill.logo}/>
            </section>
          )
        })}
      </div>
    </section>
  }
}

export default Skills
