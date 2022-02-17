# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Medications', type: :request do
  medication_1 = {
    medication_name: 'Pepto-Bismol',
    dose: '20ml',
    frequency: 'Every 2 hours',
    time: 'As needed',
    prescribed_by: 'Dr. Julio',
    for: 'Constipation',
    route: 'By mouth',
  }
  bad_medication_1 = {
    medication_name: '',
    dose: '',
    frequency: '',
    time: '',
    prescribed_by: '',
    for: '',
    route: '',
  }
  updated_medication = { dose: '40ml', frequency: 'EVERY DAY!' }

  patient_1 = {
    first_name: 'Hanah',
    last_name: 'Sus',
    middle_name: 'Rosey',
    preferred_name: 'H-dawg',
    dob: '1959-08-05',
    gender: 'Female',
    pronoun: 'She/her',
    image:
      'https://i2-prod.mirror.co.uk/incoming/article11979857.ece/ALTERNATES/s1200d/Hannah-Hauxwell.jpg',
    need_to_know: 'Hard to wake up',
  }

  describe 'GET /index' do
    it 'gets a list of medications' do
      Patient.create(patient_1)
      patient = Patient.last
      patient.medications.create(medication_1)
      get "/patients/#{patient.id}/medications"
      medications = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(medications.length).to eq 1
    end
  end

  describe 'Get /show' do
    it 'gets one medication' do
      Patient.create(patient_1)
      patient = Patient.last
      pepto = patient.medications.create(medication_1)
      get "/patients/#{patient.id}/medications"
      pepto = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(pepto.first['medication_name']).to eq 'Pepto-Bismol'
    end
  end
  describe 'POST /create' do
    it 'creates a medication' do
      patient = Patient.create(patient_1)
      post "/patients/#{patient.id}/medications",
           params: {
             medication: medication_1,
           }
      patient = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(patient['medication_name']).to eq 'Pepto-Bismol'
    end
    it 'cannot create a medication without medication_name, dose, frequency, time, prescribed_by, for, route' do
      patient = Patient.create(patient_1)
      post "/patients/#{patient.id}/medications",
           params: {
             medication: bad_medication_1,
           }
      bad_medication = JSON.parse(response.body)
      expect(response).to have_http_status(422)
      expect(bad_medication['medication_name']).to include "can't be blank"
      expect(bad_medication['dose']).to include "can't be blank"
      expect(bad_medication['frequency']).to include "can't be blank"
      expect(bad_medication['time']).to include "can't be blank"
      expect(bad_medication['prescribed_by']).to include "can't be blank"
      expect(bad_medication['for']).to include "can't be blank"
      expect(bad_medication['route']).to include "can't be blank"
    end
  end
  describe 'UPDATE /patients/:patient_id/medications/:id' do
    it 'updates a medication record' do
      patient = Patient.create(patient_1)
      medication = patient.medications.create(medication_1)
      patch "/patients/#{patient.id}/medications/#{medication.id}",
            params: {
              medication: updated_medication,
            }
      medication_1 = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(medication_1['dose']).to eq '40ml'
      expect(medication_1['frequency']).to eq 'EVERY DAY!'
    end
    it 'cannot update a medication record without medication_name, dose, frequency, prescribed_by, route, time, for' do
      patient = Patient.create(patient_1)
      medication = patient.medications.create(medication_1)
      patch "/patients/#{patient.id}/medications/#{medication.id}",
            params: {
              medication: bad_medication_1,
            }
      medication_1 = JSON.parse(response.body)
      expect(response).to have_http_status(422)
    end
  end
  describe 'DELETE /patients/:patient_id/medications/:id' do
    it 'deletes a medication' do
      patient = Patient.create(patient_1)
      medication = patient.medications.create(medication_1)
      expect(Medication.all.length).to eq 1
      delete "/patients/#{patient.id}/medications/#{medication.id}"
      patient = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(Medication.all.length).to eq 0
    end
  end
end
