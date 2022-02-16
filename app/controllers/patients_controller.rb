# frozen_string_literal: true

class PatientsController < ApplicationController
  def index
    patients = Patient.all
    render json: patients
  end

  def show
    patient = Patient.find(params[:id])
    render json: patient
  end

  def create
    patient = Patient.create(patient_params)

    if patient.valid?
      render json: patient
    else
      render json: patient.errors, status: 422
    end
  end

  def update
    patient = Patient.find(params[:id])
    patient.update(patient_params)

    if patient.valid?
      render json: patient
    else
      render json: patient.errors, status: 422
    end
  end

  def destroy
    patient = Patient.find(params[:id])
    patient.destroy
    render json: patient
  end

  private

  def patient_params
    params
      .require(:patient)
      .permit(
        :first_name,
        :last_name,
        :middle_name,
        :preferred_name,
        :dob,
        :gender,
        :pronoun,
        :image,
        :need_to_know
      )
  end
end
