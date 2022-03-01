import React, { Component } from "react";
import { Modal as ReactStrapModal, ModalHeader, ModalBody } from "reactstrap";

export default class Modal extends Component {
  render() {
    return (
      <ReactStrapModal isOpen={this.props.isOpen} toggle={this.props.toggle}>
        <ModalHeader toggle={this.props.toggle}>
          <div className="modal-title">{this.props.title}</div>
        </ModalHeader>

        <ModalBody>{this.props.children}</ModalBody>
      </ReactStrapModal>
    );
  }
}
