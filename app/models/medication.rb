# frozen_string_literal: true

class Medication < ApplicationRecord
  belongs_to :patient
  validates :medication_name,
            :dose,
            :frequency,
            :time,
            :prescribed_by,
            :tx,
            :route,
            presence: true
end
