import React, {Component} from 'react';

class Skills extends Component {
  render() {
    return <section>
      <h2>Skills</h2>
      {this.props.data.map(skill => {
        return (
          <section key={skill.name}>
            <h3>{skill.name}</h3>
            <img src={skill.logo}/>
          </section>
        )
      })}
    </section>
  }
}

export default Skills
