# frozen_string_literal: true

class Patient < ApplicationRecord
  has_many :medications, -> { order 'medication_name asc' }
  validates :first_name, :last_name, :dob, :gender, :image, presence: true
  validates :first_name,
            :last_name,
            :gender,
            format: {
              with: /\A[a-zA-Z]+\z/,
              message: 'Only letters allowed',
            }
end
