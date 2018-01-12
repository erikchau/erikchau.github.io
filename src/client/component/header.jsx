import React, {Component} from 'react';

import "./css/header.scss"

class Header extends Component {
  render() {
    return <div className="herosection ">
      <div className="herotext container">
        <h1 className="center">{this.props.data.name}</h1>
        <p className="center">{this.props.data.blurb}</p>
      </div>
    </div>
  }
}

export default Header
