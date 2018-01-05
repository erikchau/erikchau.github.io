import React, {Component} from 'react';

class Nav extends Component {
  render() {
    return (
      <header>
        <nav>
          <h2>Main Navigation</h2>
          {this.props.data.map((section) => {
            return (
              <a href={section.link} key={section.title}>{section.title}</a>
            )
          })}
        </nav>
      </header>
    )
  }
}

export default Nav
