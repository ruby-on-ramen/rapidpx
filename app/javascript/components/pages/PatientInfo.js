import React, { Component } from "react";
import { Link } from "react-router-dom";
import MedicationList from "./MedicationList";
import Modal from "./Modal";
import PatientEdit from "./PatientEdit";

export default class PatientInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patient: {
        first_name: "",
        middle_name: "",
        last_name: "",
        preferred_name: "",
        dob: "",
        gender: "",
        pronoun: "",
        image: "",
        need_to_know: "",
        medications: null,
      },
      modalOpen: false,
    };
  }

  getAge = (dateString) => {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  componentDidMount() {
    this.fetchPatientById(this.props.id);
  }

  fetchPatientById = async (id) => {
    try {
      const response = await fetch(`/patients/${id}`);
      const patient = await response.json();
      this.setState({ patient });
    } catch (error) {
      console.error(error);
    }
  };

  handleModalOpen = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
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
    } = this.state.patient;

    return (
      <>
        <div>
          <img src={image} alt={first_name} />
          <h2>
            {first_name} {middle_name} {last_name}
          </h2>
          {/* <Link to={`/patientedit/${this.props.id}`}> */}
          <button onClick={this.handleModalOpen} className="button-style">
            Edit Patient
          </button>
          {/* </Link> */}
          <Modal handleClose={this.handleModalOpen} open={this.state.modalOpen}>
            <PatientEdit
              id={this.props.id}
              updatePatient={this.props.updatePatient}
              handleModalOpen={this.handleModalOpen}
              fetchPatientById={this.fetchPatientById}
            />
          </Modal>
          <ul>
            <li>Preferred name: {preferred_name}</li>
            <li>DOB: {dob}</li>
            <li>Age: {this.getAge(dob)}</li>
            <li>Gender: {gender}</li>
            <li>Pronoun: {pronoun}</li>
            <li>Need To Know: {need_to_know}</li>
          </ul>
          <MedicationList
            medications={medications}
            modalOpen={this.state.modalOpen}
            id={this.props.id}
            fetchPatientById={this.fetchPatientById}
          />
        </div>
        <Link to="/">
          <button
            className="button-style"
            onClick={() => this.props.deletePatient(this.props.id)}
          >
            Delete Patient
          </button>
        </Link>
        <Link to="/">
          <button className="button-style">Back</button>
        </Link>
      </>
    );
  }
}