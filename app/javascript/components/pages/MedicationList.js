import React, { Component } from "react";
import MedicationEdit from "./MedicationEdit";
import MedicationNew from "./MedicationNew";
import MedicationShow from "./MedicationShow";
import Modal from "./Modal";

export default class MedicationList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    };
  }

  handleModalOpen = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  };

  createMedication = async (newMedication) => {
    try {
      const response = await fetch(
        `/patients/${this.props.patientId}/medications`,
        {
          body: JSON.stringify(newMedication),
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
        }
      );
      if (response.status !== 200 && response.status !== 304) {
        alert("There is something wrong with your patient submssion.");
        return;
      }
      this.props.fetchPatientById(this.props.patientId);
    } catch (error) {
      console.error(error);
    }
  };

  updateMedication = async (updateMedication, id) => {
    try {
      const response = await fetch(
        `/patients/${this.props.patientId}/medications/${id}`,
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
      this.props.fetchPatientById(this.props.patientId);
    } catch (error) {
      console.error(error);
    }
  };

  deleteMedication = async (id) => {
    try {
      const response = await fetch(
        `/patients/${this.props.patientId}/medications/${id}`,
        {
          method: "DELETE",
        }
      );
      if (response.status !== 200 && response.status !== 304) {
        alert("Something went wrong with your medication delete.");
        return;
      }
      this.props.fetchPatientById(this.props.patientId);
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <div>
        <h3>Medications</h3>
        {this.props.medications &&
          this.props.medications.map((medication, idx) => {
            return (
              <div key={idx}>
                <a
                  href={`https://pubchem.ncbi.nlm.nih.gov/compound/${medication.medication_name}`}
                  target="_blank"
                >
                  {medication.medication_name}
                </a>
                <button onClick={this.handleModalOpen} className="button-style">
                  Edit
                </button>

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
                {/* <MedicationEdit
                  id={medication.id}
                  medication={medication}
                  updateMedication={this.updateMedication}
                  deleteMedication={this.deleteMedication}
                /> */}
              </div>
            );
          })}
      </div>
    );
  }
}
