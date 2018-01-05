import React, {Component} from 'react';

class Contact extends Component {
  render() {
    return <section>
      <h2>Contact Me</h2>
      <ul>
        {Object.keys(this.props.data).map(key => {
          return (
            <li key={key}>
              <div>
                <p>{key.toUpperCase()}</p>
                <p>{this.props.data[key]}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  }
}

export default Contact
