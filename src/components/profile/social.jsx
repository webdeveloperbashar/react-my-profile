import React, { Component } from "react";

export default class Social extends Component {
  render() {
    return (
      <div className="social-link">
        <h3>Social Links:</h3>
        <ul>
          <li>
            <a href="#">Facebook</a>
          </li>
          <li>
            <a href="#">Linkedin</a>
          </li>
          <li>
            <a href="#">Instagram</a>
          </li>
          <li>
            <a href="#">Skype</a>
          </li>
        </ul>
      </div>
    );
  }
}
