import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { Form, FormGroup, Input, Label, Button, ModalFooter } from "reactstrap";

export default class PatientEdit extends Component {
  constructor(props) {
    super(props);
    const {
      first_name,
      last_name,
      middle_name,
      preferred_name,
      dob,
      gender,
      pronoun,
      image,
      need_to_know,
    } = this.props.id;

    this.state = {
      updatePatient: {
        first_name: first_name ?? "",
        last_name: last_name ?? "",
        middle_name: middle_name ?? "",
        preferred_name: preferred_name ?? "",
        dob: dob ?? "",
        gender: gender ?? "",
        pronoun: pronoun ?? "",
        image: image ?? "",
        need_to_know: need_to_know ?? "",
      },
    };
  }

  componentDidMount() {
    this.readPatient();
  }

  handleChange = (e) => {
    const { updatePatient } = this.state;
    updatePatient[e.target.name] = e.target.value;
    this.setState({ updatePatient });
  };

  handleSubmit = async () => {
    await this.props.updatePatient(this.state.updatePatient, this.props.id);
    this.props.fetchPatientById(this.props.id);
    this.props.handleModalOpen();
  };

  readPatient = async () => {
    try {
      const response = await fetch(`/patients/${this.props.id}`);
      const updatePatient = await response.json();
      this.setState({ updatePatient });
    } catch (error) {
      console.error(error);
    }
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
    } = this.state.updatePatient;
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
          <br />
          <FormGroup>
            <Label>Middle Name</Label>
            <Input
              type="text"
              name="middle_name"
              onChange={this.handleChange}
              value={middle_name}
            />
          </FormGroup>
          <br />
          <FormGroup>
            <Label>Last Name</Label>
            <Input
              type="text"
              name="last_name"
              onChange={this.handleChange}
              value={last_name}
            />
          </FormGroup>
          <br />
          <FormGroup>
            <Label>Preferred Name</Label>
            <Input
              type="text"
              name="preferred_name"
              onChange={this.handleChange}
              value={preferred_name}
            />
          </FormGroup>
          <br />
          <FormGroup>
            <Label>DOB</Label>
            <Input
              type="date"
              name="dob"
              onChange={this.handleChange}
              value={dob}
            />
          </FormGroup>
          <br />
          <FormGroup>
            <Label>Gender</Label>
            <Input
              type="text"
              name="gender"
              onChange={this.handleChange}
              value={gender}
            />
          </FormGroup>
          <br />
          <FormGroup>
            <Label>Pronoun</Label>
            <Input
              type="text"
              name="pronoun"
              onChange={this.handleChange}
              value={pronoun}
            />
          </FormGroup>
          <br />
          <FormGroup>
            <Label>image</Label>
            <Input
              type="text"
              name="image"
              onChange={this.handleChange}
              value={image}
            />
          </FormGroup>
          <br />
          <FormGroup>
            <Label>Need To Know</Label>
            <Input
              type="text"
              name="need_to_know"
              onChange={this.handleChange}
              value={need_to_know}
            />
          </FormGroup>
          <br />
          <ModalFooter>
            <Link
              to={`/patientinfo/${this.props.id}`}
              onClick={this.handleSubmit}
            >
              <Button color="primary">Save</Button>
            </Link>
            <Link to="/">
              <Button
                color="danger"
                onClick={() => this.props.deletePatient(this.props.id)}
              >
                Delete
              </Button>
            </Link>
          </ModalFooter>
        </Form>
        {this.state.submitted && (
          <Redirect to={`/patientinfo/${this.props.id}`} />
        )}
      </>
    );
  }
}
