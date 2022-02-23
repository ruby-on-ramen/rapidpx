import React, { Component } from "react";
import { Link } from "react-router-dom";
import MedicationEdit from "./MedicationEdit";
import MedicationList from "./MedicationList";
import MedicationNew from "./MedicationNew";
import MedicationShow from "./MedicationShow";
import Modal from "./Modal";

const getAge = (dateString) => {
  const today = new Date();
  const birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};
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

  componentDidMount() {
    this.readMedications();
  }

  handleModalOpen = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  };

  readMedications = async () => {
    try {
      const response = await fetch(`/patients/${this.props.id}`);
      const patient = await response.json();
      this.setState({ patient });
    } catch (error) {
      console.error(error);
    }
  };

  createMedication = async (newMedication) => {
    try {
      const response = await fetch(`/patients/${this.props.id}/medications`, {
        body: JSON.stringify(newMedication),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      if (response.status !== 200 && response.status !== 304) {
        alert("There is something wrong with your patient submssion.");
        return;
      }
      this.readMedications();
    } catch (error) {
      console.error(error);
    }
  };

  updateMedication = async (updateMedication, id) => {
    try {
      const response = await fetch(
        `/patients/${this.props.id}/medications/${id}`,
        {
          body: JSON.stringify(updateMedication),
          headers: {
            "Content-Type": "application/json",
          },
          method: "PATCH",
        }
      );
      if (response.status !== 200 && response.status !== 304) {
        alert("Something went wrong with your medication update.");
        return;
      }
      this.readMedications();
    } catch (error) {
      console.error(error);
    }
  };

  deleteMedication = async (id) => {
    try {
      const response = await fetch(
        `/patients/${this.props.id}/medications/${id}`,
        {
          method: "DELETE",
        }
      );
      if (response.status !== 200 && response.status !== 304) {
        alert("Something went wrong with your medication delete.");
        return;
      }
      this.readMedications();
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
            <li>Age: {getAge(dob)}</li>
            <li>Gender: {gender}</li>
            <li>Pronoun: {pronoun}</li>
            <li>Need To Know: {need_to_know}</li>
          </ul>
          <MedicationList
            medications={medications}
            handleModalOpen={this.handleModalOpen}
            modalOpen={this.state.modalOpen}
          />
          {/* {medications &&
            medications.map((medication, idx) => {
              return (
                <div key={idx}>
                  <a
                    href={`https://pubchem.ncbi.nlm.nih.gov/compound/${medication.medication_name}`}
                    target="_blank"
                  >
                    {medication.medication_name}
                  </a>
                  <button onClick={this.handleModalOpen}>Edit</button>

                  <MedicationShow id={medication.id} medication={medication} />

                  <Modal
                    handleClose={this.handleModalOpen}
                    open={this.state.modalOpen}
                  >
                    <MedicationEdit
                      id={medication.id}
                      medication={medication}
                      updateMedication={this.updateMedication}
                      deleteMedication={this.deleteMedication}
                    />
                  </Modal>
                </div>
              );
            })} */}
        </div>
        {/* <Link to={`/patientedit/${this.props.id}`}>
          <button className="button-style">Edit Patient</button>
        </Link>
        <Link to="/">
          <button
            className="button-style"
            onClick={() => this.props.deletePatient(this.props.id)}
          >
            Delete
          </button>
        </Link>
        <Link to="/">
          <button className="button-style">Back</button>
        </Link>
        <MedicationNew
          createMedication={this.createMedication}
          id={this.props.id}
        /> */}
      </>
    );
  }
}
