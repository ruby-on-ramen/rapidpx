import React, { Component } from "react";

export default class MedicationShow extends Component {
  render() {
    const { medication_name, dose, frequency, time, route, tx, prescribed_by } =
      this.props.medication;
    return (
      <>
        <ul>
          <li>Time: {time}</li>
          <li>Dose: {dose}</li>
          <li>Frequency: {frequency}</li>
          <li>Route: {route}</li>
          <li>Treatment: {tx}</li>
          <li>Prescribed By: {prescribed_by}</li>
        </ul>
      </>
    );
  }
}
