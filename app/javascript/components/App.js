import React, { Component } from "react";
import PatientIndex from "./pages/PatientIndex";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patients: [],
      meds: [],
    };
    fetch("/patients/2")
      .then((resp) => resp.json())
      .then((patient) => this.setState({ meds: patient.medications }));
  }
  render() {
    return (
      <div className="app">
        <PatientIndex meds={this.state.meds} />
      </div>
    );
  }
}
