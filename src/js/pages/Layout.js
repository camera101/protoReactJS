import React from "react";
import { Link } from "react-router";

export default class Layout extends React.Component {
  render() {
    return (
        <div>
          <h1>Layout</h1>
          <Link to=""><button class="btn btn-success">Home</button></Link>
          <Link to="login"><button class="btn btn-success">Login</button></Link>
          <Link to="settings"><button class="btn btn-success">Settings</button></Link>
          {this.props.children}
        </div>
    );
  }
}
