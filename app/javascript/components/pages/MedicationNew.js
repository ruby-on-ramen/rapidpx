import React, { Component } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { Redirect, Link } from "react-router-dom";

export default class MedicationNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newMedication: {
        medication_name: "",
        dose: "",
        frequency: "",
        time: "",
        prescribed_by: "",
        tx: "",
        route: "",
      },
      submitted: false,
    };
  }

  handleChange = (e) => {
    const { newMedication } = this.state;
    newMedication[e.target.name] = e.target.value;
    this.setState({ newMedication });
  };

  handleSubmit = () => {
    this.props.createMedication(this.state.newMedication);
    this.setState({ submitted: true });
  };

  render() {
    const { medication_name, dose, frequency, time, prescribed_by, tx, route } =
      this.state.newMedication;
    return (
      <>
        <h3>Add A Medication</h3>
        <Form>
          <FormGroup>
            <Label>Medication Name</Label>
            <Input
              type="text"
              name="medication_name"
              onChange={this.handleChange}
              value={medication_name}
            />
          </FormGroup>
          <FormGroup>
            <Label>Dose</Label>
            <Input
              type="text"
              name="dose"
              onChange={this.handleChange}
              value={dose}
            />
          </FormGroup>
          <FormGroup>
            <Label>Frequency</Label>
            <Input
              type="text"
              name="frequency"
              onChange={this.handleChange}
              value={frequency}
            />
          </FormGroup>
          <FormGroup>
            <Label>Time</Label>
            <Input
              type="text"
              name="time"
              onChange={this.handleChange}
              value={time}
            />
          </FormGroup>
          <FormGroup>
            <Label>Prescribed By</Label>
            <Input
              type="text"
              name="prescribed_by"
              onChange={this.handleChange}
              value={prescribed_by}
            />
          </FormGroup>
          <FormGroup>
            <Label>Treatment</Label>
            <Input
              type="text"
              name="tx"
              onChange={this.handleChange}
              value={tx}
            />
          </FormGroup>
          <FormGroup>
            <Label>Route</Label>
            <Input
              type="text"
              name="route"
              onChange={this.handleChange}
              value={route}
            />
          </FormGroup>
          <Button onClick={this.handleSubmit} className="button-style">
            Add Medication
          </Button>
        </Form>
        {this.state.submitted && (
          <Redirect to={`/patientinfo/${this.props.id}`} />
        )}
        <Link to={`/patientinfo/${this.props.id}`}>
          <button className="button-style">Back</button>
        </Link>
      </>
    );
  }
}
