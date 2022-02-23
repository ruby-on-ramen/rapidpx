import React, { Component } from "react";
import { getConstructor } from "react_ujs";
import "../../../assets/stylesheets/Modal.css";

export default class Modal extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      this.props.open && (
        <div className="modal">
          <div className="modal-content">
            <button onClick={this.props.handleClose}>Close</button>
            {this.props.children}
          </div>
        </div>
      )
    );
  }
}
