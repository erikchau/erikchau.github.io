import React, {Component} from 'react';

class Header extends Component {
  render() {
    return <div>
      <h1>{this.props.data.name}</h1>
      <p>{this.props.data.blurb}</p>
    </div>
  }
}

export default Header
