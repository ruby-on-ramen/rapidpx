import React, { Component } from "react";

export default class MedicationList extends Component {
  render() {
    return (
      <div>
        <h3>Medications</h3>
        {medications &&
          medications.map((medication, idx) => {
            return (
              <div key={idx}>
                <a
                  href={`https://pubchem.ncbi.nlm.nih.gov/compound/${medication.medication_name}`}
                  target="_blank"
                >
                  {medication.medication_name}
                </a>
                <button onClick={this.props.handleModalOpen}>Edit</button>

                <MedicationShow id={medication.id} medication={medication} />

                <Modal
                  handleClose={this.props.handleModalOpen}
                  open={this.props.modalOpen}
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
          })}
      </div>
    );
  }
}
