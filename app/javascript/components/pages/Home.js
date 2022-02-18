import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Home extends Component {
  render() {
    const { patientsArray } = this.props;
    return (
      <>
        <h1>Patients</h1>
        {patientsArray && patientsArray.map((patient) => {
          return (
            <NavLink to={`/patientinfo/${patient.id}`} key={patient.id}>
              <img
                src={patient.image}
                alt={patient.first_name}
                style={{ width: "200px" }}
              />
              <p>{patient.first_name}</p>
              <p>{patient.last_name}</p>
            </NavLink>
          );
        })}
      </>
    );
  }
}
