# frozen_string_literal: true

class MedicationsController < ApplicationController
  def index
    medications = Medication.all
    render json: medications
  end
end
