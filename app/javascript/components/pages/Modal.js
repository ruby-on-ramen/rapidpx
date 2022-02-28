import React, { Component } from "react";
import {
  Button,
  Modal as ReactStrapModal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

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
