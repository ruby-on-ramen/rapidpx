# frozen_string_literal: true

class MedicationsController < ApplicationController
  def index
    medications = Medication.all
    render json: medications
  end
  def show
    medication = Medication.find(params[:id])
    render json: medication
  end
  def create
    patient = Patient.find(params[:patient_id])
    medication = patient.medications.create(medication_params)
    if medication.valid?
      render json: medication
    else
      render json: medication.errors, status: 422
    end
  end

  def update
    medication = Medication.find(params[:id])
    medication.update(medication_params)
    if medication.valid?
      render json: medication
    else
      render json: medication.errors, status: 422
    end
  end

  def destroy
    medication = Medication.find(params[:id])
    medication.destroy
    render json: medication
  end

  private

  def medication_params
    params
      .require(:medication)
      .permit(
        :patient_id,
        :medication_name,
        :dose,
        :frequency,
        :time,
        :prescribed_by,
        :tx,
        :route,
      )
  end
end
