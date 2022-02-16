class CreatePatients < ActiveRecord::Migration[6.1]
  def change
    create_table :patients do |t|
      t.string :first_name
      t.string :last_name
      t.string :middle_name
      t.string :preferred_name
      t.date :dob
      t.string :gender
      t.string :pronoun
      t.text :image
      t.text :need_to_know

      t.timestamps
    end
  end
end
