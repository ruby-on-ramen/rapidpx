import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, FormGroup, Input, Label } from "reactstrap";

export default class MedicationEdit extends Component {
  constructor(props) {
    super(props);
    const { medication_name, dose, frequency, time, route, tx, prescribed_by } =
      this.props.medication;

    this.state = {
      updateMedication: {
        medication_name: medication_name ? medication_name : "",
        dose: dose ? dose : "",
        frequency: frequency ? frequency : "",
        time: time ? time : "",
        tx: tx ? tx : "",
        route: route ? route : "",
        prescribed_by: prescribed_by ? prescribed_by : "",
      },
    };
  }

  handleChange = (e) => {
    const { updateMedication } = this.state;
    updateMedication[e.target.name] = e.target.value;
    this.setState({ updateMedication });
  };

  handleSubmit = () => {
    this.props.updateMedication(this.state.updateMedication, this.props.id);
  };

  render() {
    const { medication_name, dose, frequency, time, route, tx, prescribed_by } =
      this.state.updateMedication;
    return (
      <>
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
          <br />
          <FormGroup>
            <Label>Dose</Label>
            <Input
              type="text"
              name="dose"
              onChange={this.handleChange}
              value={dose}
            />
          </FormGroup>
          <br />
          <FormGroup>
            <Label>Frequency</Label>
            <Input
              type="text"
              name="frequency"
              onChange={this.handleChange}
              value={frequency}
            />
          </FormGroup>
          <br />
          <FormGroup>
            <Label>Time</Label>
            <Input
              type="text"
              name="time"
              onChange={this.handleChange}
              value={time}
            />
          </FormGroup>
          <br />
          <FormGroup>
            <Label>Route</Label>
            <Input
              type="text"
              name="route"
              onChange={this.handleChange}
              value={route}
            />
          </FormGroup>
          <br />
          <FormGroup>
            <Label>Treatment</Label>
            <Input
              type="text"
              name="tx"
              onChange={this.handleChange}
              value={tx}
            />
          </FormGroup>
          <br />
          <FormGroup>
            <Label>Prescribed By</Label>
            <Input
              type="text"
              name="prescribed_by"
              onChange={this.handleChange}
              value={prescribed_by}
            />
          </FormGroup>
          <br />
        </Form>
        <button className="backButton" onClick={this.handleSubmit}>
          Submit
        </button>
        <button
          className="backButton"
          onClick={() => this.props.deleteMedication(this.props.id)}
        >
          Delete Medication
        </button>
      </>
    );
  }
}
