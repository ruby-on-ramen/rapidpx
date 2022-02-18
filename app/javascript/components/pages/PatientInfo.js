import React, { Component } from "react";

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
        pronound: "",
        image: "",
        need_to_know: "",
        medications: [],
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
      <div>
        <img src={patient.image} alt={patient.first_name} />
        <h2>
          {patient.first_name} {patient.last_name}
        </h2>
        {console.log("here", medications)}
        {medications.map((medication, idx) => {
          return (
            <div key={idx}>
              <p>{medication.medication_name}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
