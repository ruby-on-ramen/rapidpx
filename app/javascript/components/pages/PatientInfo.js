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
    const { patient } = this.state;
    return (
      <>
      <div>
        <img src={patient.image} alt={patient.first_name} />
        <h2>
          {patient.first_name} {patient.middle_name} {patient.last_name}
        </h2>
        <ul>
          <li>Preferred name: {patient.preferred_name}</li>
          <li>DOB: {patient.dob}</li>
          <li>Gender: {patient.gender}</li>
          <li>Pronoun: {patient.pronoun}</li>
          <li>Need To Know: {patient.need_to_know}</li>
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
      
      </>
    );
  }
}
