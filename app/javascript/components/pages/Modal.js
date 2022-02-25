import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    return (
      this.props.open && (
        <div className="modal">
          <div className="modal-content">
            {this.props.children}
            <button onClick={this.props.handleClose} className="button-style">
              Close
            </button>
          </div>
        </div>
      )
    );
  }
}
