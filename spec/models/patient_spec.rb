# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Patient, type: :model do
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

  bad_patient_params = {
    first_name: '',
    last_name: '',
    middle_name: 'Rosey',
    preferred_name: 'H-dawg',
    dob: '1959-08-05',
    gender: '',
    pronoun: 'She/her',
    image: '',
    need_to_know: 'Hard to wake up',
  }

  bad_patient_params_2 = {
    first_name: '9000',
    last_name: '9000',
    middle_name: '',
    preferred_name: '',
    dob: '',
    gender: '9000',
    pronoun: '',
    image: '9000',
    need_to_know: '',
  }

  it 'should validate first_name, last_name, dob, gender, image to be populated' do
    patient = Patient.create
    expect(patient.errors[:first_name]).to_not be_empty
    expect(patient.errors[:last_name]).to_not be_empty
    expect(patient.errors[:dob]).to_not be_empty
    expect(patient.errors[:gender]).to_not be_empty
    expect(patient.errors[:image]).to_not be_empty
  end
  it 'should not validate middle_name, preferred_name, pronoun, need_to_know' do
    patient = Patient.create(bad_patient_params)
    expect(patient.errors[:middle_name]).to be_empty
    expect(patient.errors[:preferred_name]).to be_empty
    expect(patient.errors[:pronoun]).to be_empty
    expect(patient.errors[:need_to_know]).to be_empty
  end
  it 'should have strings for first_name, last_name, gender' do
    patient = Patient.create(bad_patient_params_2)
    expect(patient.errors[:first_name]).to_not be_empty
    expect(patient.errors[:last_name]).to_not be_empty
    expect(patient.errors[:gender]).to_not be_empty
  end
end
