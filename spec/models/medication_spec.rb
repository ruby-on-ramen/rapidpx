# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Medication, type: :model do
  bad_medication_1 = {
    medication_name: '',
    dose: '',
    frequency: '',
    time: '',
    prescribed_by: '',
    tx: '',
    route: '',
  }

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

  it 'should validate medications_name, dose, frequency, time, prescribed_by, for, route' do
    Patient.create(patient_1)
    patient = Patient.last
    med = patient.medications.create(bad_medication_1)
    expect(med.errors[:medication_name]).to_not be_empty
    expect(med.errors[:dose]).to_not be_empty
    expect(med.errors[:frequency]).to_not be_empty
    expect(med.errors[:time]).to_not be_empty
    expect(med.errors[:prescribed_by]).to_not be_empty
    expect(med.errors[:tx]).to_not be_empty
    expect(med.errors[:route]).to_not be_empty
  end
end
