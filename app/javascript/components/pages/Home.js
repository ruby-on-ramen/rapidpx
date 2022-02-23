import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../../../assets/stylesheets/Home.css";

export default class Home extends Component {
  render() {
    const { patientsArray } = this.props;
    return (
      <div>
        <h1>Patients</h1>
        <div className="flex">
          {patientsArray &&
            patientsArray.map((patient) => {
              return (
                <div className="patient-card">
                  <NavLink to={`/patientinfo/${patient.id}`} key={patient.id}>
                    <div className="patient-image">
                      <img
                        src={patient.image}
                        alt={patient.first_name}
                        style={{ width: "200px" }}
                      />
                    </div>
                    <p>
                      {patient.first_name} {patient.last_name}
                    </p>
                  </NavLink>
                </div>
              );
            })}
        </div>
        <a href="/patientnew" className="button-style">
          Add A Patient
        </a>
      </div>
    );
  }
}
