import React, { Component } from "react";
import { Link } from "react-router-dom";

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
    };
  }

  componentDidMount() {
    this.readMedications();
  }

  readMedications = async () => {
    try {
      const response = await fetch(`/patients/${this.props.id}`);
      const patient = await response.json();
      this.setState({ patient });
    } catch (error) {
      console.error(error);
    }
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
          <ul>
            <li>Preferred name: {preferred_name}</li>
            <li>DOB: {dob}</li>
            <li>Gender: {gender}</li>
            <li>Pronoun: {pronoun}</li>
            <li>Need To Know: {need_to_know}</li>
          </ul>
          <h3>Medications</h3>
          {medications &&
            medications.map((medication, idx) => {
              return (
                <div key={idx}>
                  <p>{medication.medication_name}</p>
                </div>
              );
            })}
        </div>
        <Link to={`/patientedit/${this.props.id}`}>
          <button className="backButton">Edit Patient</button>
        </Link>
        <Link to="/">
          <button
            className="backButton"
            onClick={() => this.props.deletePatient(this.props.id)}
          >
            Delete
          </button>
        </Link>
        <Link to="/">
          <button className="backButton">Back</button>
        </Link>
      </>
    );
  }
}
