import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import "./PatientNew.css";

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
    let { newPatient } = this.state;
    newPatient[e.target.name] = e.target.value;
    this.setState({ newPatient: newPatient });
  };

  handleSubmit = () => {
    this.props.createPatient(this.state.newPatient);
    this.setState({ submitted: true });
  };

  render() {
    console.log(this.state.newPatient);
    return (
      <>
        <h3>Add a New Patient</h3>
        <Form>
          <FormGroup>
            <Label>First Name</Label>
            <Input
              type="text"
              name="first_name"
              onChange={this.handleChange}
              value={this.state.newPatient.first_name}
            />
          </FormGroup>
          <FormGroup>
            <Label>Middle Name</Label>
            <Input
              type="text"
              name="middle_name"
              onChange={this.handleChange}
              value={this.state.newPatient.middle_name}
            />
          </FormGroup>
          <FormGroup>
            <Label>Last Name</Label>
            <Input
              type="text"
              name="last_name"
              onChange={this.handleChange}
              value={this.state.newPatient.last_name}
            />
          </FormGroup>
          <FormGroup>
            <Label>Preferred Name</Label>
            <Input
              type="text"
              name="preferred_name"
              onChange={this.handleChange}
              value={this.state.newPatient.preferred_name}
            />
          </FormGroup>
          <FormGroup>
            <Label>DOB</Label>
            <Input
              type="date"
              name="dob"
              onChange={this.handleChange}
              value={this.state.newPatient.dob}
            />
          </FormGroup>
          <FormGroup>
            <Label>Gender</Label>
            <Input
              type="text"
              name="gender"
              onChange={this.handleChange}
              value={this.state.newPatient.gender}
            />
          </FormGroup>
          <FormGroup>
            <Label>Pronoun</Label>
            <Input
              type="text"
              name="pronoun"
              onChange={this.handleChange}
              value={this.state.newPatient.pronoun}
            />
          </FormGroup>
          <FormGroup>
            <Label>image</Label>
            <Input
              type="text"
              name="image"
              onChange={this.handleChange}
              value={this.state.newPatient.image}
            />
          </FormGroup>
          <FormGroup>
            <Label>Need To Know</Label>
            <Input
              type="text"
              name="need_to_know"
              onChange={this.handleChange}
              value={this.state.newPatient.need_to_know}
            />
          </FormGroup>
          <Button onClick={this.handleSubmit} className="backButton">
            Add Patient
          </Button>
          <a href="/" className="backButton">
            Back
          </a>
        </Form>
        {this.state.submitted && <Redirect to="/" />}
      </>
    );
  }
}
