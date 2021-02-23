import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./profile.css";
import Bio from "./bio";
import Skills from "./skills";
import Social from "./social";
export default class Profile extends Component {
  render() {
    return (
      <div className="profile col-md-6 m-auto">
        <Bio />
        <Skills />
        <Social />
      </div>
    );
  }
}
