# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Patients', type: :request do
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
    need_to_know: 'Hard to wake up'
  }

  patient_1_edit = { first_name: 'Hannah' }

  bad_patient_params = {
    first_name: '',
    last_name: '',
    middle_name: 'Rosey',
    preferred_name: 'H-dawg',
    dob: '',
    gender: '',
    pronoun: 'She/her',
    image: '',
    need_to_know: 'Hard to wake up'
  }

  describe 'GET /index' do
    it 'gets a list of patients' do
      Patient.create(patient_1)
      get '/patients'
      patients = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(patients.length).to eq 1
    end
  end
  describe 'GET /show' do
    it 'gets one patient' do
      Patient.create(patient_1)
      hanah = Patient.last
      get "/patients/#{hanah.id}"
      hanah = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(hanah['first_name']).to eq 'Hanah'
    end
  end
  describe 'POST /create' do
    it 'creates a patient' do
      post '/patients', params: { patient: patient_1 }
      patient = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(patient['first_name']).to eq 'Hanah'
    end
    it 'cannot create a patient without first_name, last_name, dob, gender, image' do
      post '/patients', params: { patient: bad_patient_params }
      invalid_patient = JSON.parse(response.body)
      expect(response).to have_http_status(422)
      expect(invalid_patient['first_name']).to include "can't be blank"
      expect(invalid_patient['last_name']).to include "can't be blank"
      expect(invalid_patient['dob']).to include "can't be blank"
      expect(invalid_patient['gender']).to include "can't be blank"
      expect(invalid_patient['image']).to include "can't be blank"
    end
  end
  describe 'UPDATE /patients/:id' do
    it 'updates a patient record' do
      Patient.create(patient_1)
      hanah = Patient.last
      patch "/patients/#{hanah.id}", params: { patient: patient_1_edit }
      hannah = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(hannah['first_name']).to eq 'Hannah'
      expect(hannah['last_name']).to eq 'Sus'
    end
    it 'cannot update a patient record without first_name, last_name, dob, gender, image' do
      Patient.create(patient_1)
      hanah = Patient.last
      patch "/patients/#{hanah.id}", params: { patient: bad_patient_params }
      hannah = JSON.parse(response.body)
      expect(response).to have_http_status(422)
    end
  end
  describe 'DELETE /patients/:id' do
    it 'deletes a patient' do
      Patient.create(patient_1)
      patient = Patient.all
      expect(patient.length).to eq 1
      hanah = Patient.last
      delete "/patients/#{hanah.id}"
      expect(response).to have_http_status(200)
      patient = Patient.all
      expect(patient.length).to eq 0
    end
  end
end
