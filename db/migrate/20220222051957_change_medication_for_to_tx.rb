class ChangeMedicationForToTx < ActiveRecord::Migration[6.1]
  def change
    rename_column :medications, :for, :tx
  end
end
