import React, { Component } from "react";
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
    };
  }

  componentDidMount() {
    this.readMedications();
  }

  readMedications = () => {
    fetch(`/patients/${this.props.id}`)
      .then((resp) => resp.json())
      .then((patient) => this.setState({ patient: patient }))
      .catch((errors) => console.log("Medications errors:", errors));
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
        <a href={`/patientedit/${this.props.id}`} className="backButton">
          Edit Patient
        </a>
        <a
          href="/"
          className="backButton"
          onClick={() => this.props.deletePatient(this.props.id)}
        >
          Delete Patient
        </a>
        <a href="/" className="backButton">
          Back
        </a>
      </>
    );
  }
}
