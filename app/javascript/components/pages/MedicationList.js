import React, { Component } from "react";
import MedicationEdit from "./MedicationEdit";
import MedicationNew from "./MedicationNew";
import MedicationShow from "./MedicationShow";
import Modal from "./Modal";

export default class MedicationList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editingMedication: null,
      handleEditOpen: false,
      handleAddOpen: false,
    };
  }

  handleEditOpen = (medication) => {
    this.setState({
      handleEditOpen: !this.state.handleEditOpen,
      editingMedication: medication ?? null,
    });
  };

  handleAddOpen = () => {
    this.setState({ handleAddOpen: !this.state.handleAddOpen });
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
      this.props.fetchPatientById(this.props.id);
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
      this.props.fetchPatientById(this.props.id);
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
      this.props.fetchPatientById(this.props.id);
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <div>
        <h3>Medications</h3>
        <button onClick={this.handleAddOpen} className="button-style">
          Add Medication
        </button>
        <br />
        <br />
        <br />
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
                <button
                  className="button-style"
                  onClick={() => this.handleEditOpen(medication)}
                >
                  Edit
                </button>
                <button
                  onClick={() => this.deleteMedication(medication.id)}
                  className="button-style"
                >
                  Delete
                </button>

                <MedicationShow id={medication.id} medication={medication} />
              </div>
            );
          })}

        <Modal
          handleClose={this.handleEditOpen}
          open={this.state.handleEditOpen}
        >
          <MedicationEdit
            medication={this.state.editingMedication}
            updateMedication={this.updateMedication}
            deleteMedication={this.deleteMedication}
            handleClose={this.handleEditOpen}
          />
        </Modal>

        <Modal handleClose={this.handleAddOpen} open={this.state.handleAddOpen}>
          <MedicationNew
            createMedication={this.createMedication}
            handleClose={this.handleAddOpen}
            id={this.props.id}
          />
        </Modal>
      </div>
    );
  }
}
