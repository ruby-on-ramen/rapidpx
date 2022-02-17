import React, { Component } from "react";

export default class PatientIndex extends Component {
  render() {
    const { meds } = this.props;
    return (
      <div>
        {meds.map((medObj, idx) => {
          return <p key={idx}>{medObj.patient_id}</p>;
        })}
      </div>
    );
  }
}
