class CreateMedications < ActiveRecord::Migration[6.1]
  def change
    create_table :medications do |t|
      t.integer :patient_id
      t.string :medication_name
      t.string :dose
      t.string :frequency
      t.string :time
      t.string :prescribed_by
      t.string :string
      t.string :for

      t.timestamps
    end
  end
end
