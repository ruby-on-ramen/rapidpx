import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Form, FormGroup, Input, Label, Button, ModalFooter } from "reactstrap";
export default class PatientNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPatient: {
        first_name: "",
        last_name: "",
        middle_name: "",
        preferred_name: "",
        dob: "",
        gender: "",
        pronoun: "",
        image: "",
        need_to_know: "",
      },
      submitted: false,
    };
  }

  handleChange = (e) => {
    const { newPatient } = this.state;
    newPatient[e.target.name] = e.target.value;
    this.setState({ newPatient: newPatient });
  };

  handleSubmit = () => {
    this.props.createPatient(this.state.newPatient);
    this.setState({ submitted: true });
    this.props.handleModalOpen();
  };

  render() {
    const {
      first_name,
      middle_name,
      last_name,
      preferred_name,
      dob,
      gender,
      pronoun,
      image,
      need_to_know,
      medications,
    } = this.state.newPatient;
    return (
      <>
        <Form>
          <FormGroup>
            <Label>First Name</Label>
            <Input
              type="text"
              name="first_name"
              onChange={this.handleChange}
              value={first_name}
            />
          </FormGroup>
          <FormGroup>
            <Label>Middle Name</Label>
            <Input
              type="text"
              name="middle_name"
              onChange={this.handleChange}
              value={middle_name}
            />
          </FormGroup>
          <FormGroup>
            <Label>Last Name</Label>
            <Input
              type="text"
              name="last_name"
              onChange={this.handleChange}
              value={last_name}
            />
          </FormGroup>
          <FormGroup>
            <Label>Preferred Name</Label>
            <Input
              type="text"
              name="preferred_name"
              onChange={this.handleChange}
              value={preferred_name}
            />
          </FormGroup>
          <FormGroup>
            <Label>DOB</Label>
            <Input
              type="date"
              name="dob"
              onChange={this.handleChange}
              value={dob}
            />
          </FormGroup>
          <FormGroup>
            <Label>Gender</Label>
            <Input
              type="text"
              name="gender"
              onChange={this.handleChange}
              value={gender}
            />
          </FormGroup>
          <FormGroup>
            <Label>Pronoun</Label>
            <Input
              type="text"
              name="pronoun"
              onChange={this.handleChange}
              value={pronoun}
            />
          </FormGroup>
          <FormGroup>
            <Label>Image</Label>
            <Input
              type="text"
              name="image"
              onChange={this.handleChange}
              value={image}
            />
          </FormGroup>
          <FormGroup>
            <Label>Need To Know</Label>
            <Input
              type="text"
              name="need_to_know"
              onChange={this.handleChange}
              value={need_to_know}
            />
          </FormGroup>
          <ModalFooter>
            <Button color="primary" onClick={this.handleSubmit}>
              Add Patient
            </Button>
          </ModalFooter>
        </Form>
        {this.state.submitted && <Redirect to="/" />}
      </>
    );
  }
}
