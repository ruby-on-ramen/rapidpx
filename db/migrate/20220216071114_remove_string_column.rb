# frozen_string_literal: true

class RemoveStringColumn < ActiveRecord::Migration[6.1]
  def change
    remove_column :medications, :string
  end
end
