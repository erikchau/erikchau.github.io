import React, {Component} from 'react';

import "./css/nav.scss"

class Nav extends Component {
  render() {
    return (
      <header className="row">
        <nav className="twelve columns">
          <h2>Main Navigation</h2>
          <ul>
            {this.props.data.map((section) => {
              return (
                <li key={section.title}><a href={section.link}>{section.title}</a></li>
              )
            })}
          </ul>
        </nav>
      </header>
    )
  }
}

export default Nav
