import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { Form, FormGroup, Input, Label, Button, ModalFooter } from "reactstrap";

export default class MedicationEdit extends Component {
  constructor(props) {
    super(props);
    const { medication_name, dose, frequency, time, route, tx, prescribed_by } =
      this.props.medication;

    this.state = {
      updateMedication: {
        medication_name: medication_name ?? "",
        dose: dose ?? "",
        frequency: frequency ?? "",
        time: time ?? "",
        tx: tx ?? "",
        route: route ?? "",
        prescribed_by: prescribed_by ?? "",
      },
    };
  }

  handleChange = (e) => {
    const { updateMedication } = this.state;
    updateMedication[e.target.name] = e.target.value;
    this.setState({ updateMedication });
  };

  handleSubmit = () => {
    this.props.updateMedication(
      this.state.updateMedication,
      this.props.medication.id
    );
    this.props.handleClose();
  };

  render() {
    const { medication_name, dose, frequency, time, route, tx, prescribed_by } =
      this.state.updateMedication;
    return (
      <>
        <div>
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
        </div>
        <ModalFooter>
          <Button color="primary" onClick={this.handleSubmit}>
            Submit
          </Button>

          <Button
            color="danger"
            onClick={() =>
              this.props.deleteMedication(this.props.medication.id)
            }
          >
            Delete Medication
          </Button>
        </ModalFooter>
      </>
    );
  }
}
