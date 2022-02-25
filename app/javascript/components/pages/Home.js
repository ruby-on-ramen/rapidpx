import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";
import PatientNew from "./PatientNew";
import Modal from "./Modal";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    };
  }

  handleModalOpen = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  };

  render() {
    const { patientsArray } = this.props;
    return (
      <div>
        <h1>Patients</h1>
        <div className="flex">
          {patientsArray &&
            patientsArray.map((patient, idx) => {
              return (
                <div className="patient-card" key={idx}>
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
        <Button color="primary" onClick={this.handleModalOpen}>
          Add New Patient
        </Button>
        <Modal
          isOpen={this.state.modalOpen}
          toggle={this.handleModalOpen}
          title="Add New Patient"
        >
          <PatientNew
            createPatient={this.props.createPatient}
            handleModalOpen={this.handleModalOpen}
          />
        </Modal>
      </div>
    );
  }
}
