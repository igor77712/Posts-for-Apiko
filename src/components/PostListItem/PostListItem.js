import React, { Component } from "react";
import "./PostListItem.css";

class PostListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  shouldComponentUpdate(nextProps) {
    return (
      this.props.title !== nextProps.title ||
      this.props.body !== nextProps.body ||
      this.props.index !== nextProps.index
    );
  }

  render() {
    return (
      <li className="PostListItem">
        <h3>{this.props.title}</h3>
        <p>{this.props.body}</p>
        <i>post #{this.props.index + 1}</i>
      </li>
    );
  }
}

export default PostListItem;
