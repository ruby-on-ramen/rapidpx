# frozen_string_literal: true

class Patient < ApplicationRecord
  has_many :medications
  validates :first_name, :last_name, :dob, :gender, :image, presence: true
  validates :first_name,
            :last_name,
            :gender,
            :image,
            format: {
              with: /\A[a-zA-Z]+\z/,
              message: 'Only letters allowed',
            }
end
