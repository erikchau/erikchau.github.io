import React, {Component} from 'react';

class Nav extends Component {
  render() {
    return (
      <nav>
        {this.props.data.name}
      </nav>
    )
  }
}

export default Nav
