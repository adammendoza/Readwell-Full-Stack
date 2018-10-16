class CreateShelvings < ActiveRecord::Migration[5.2]
  def change
    create_table :shelvings do |t|
      t.integer :book_id, null: false
      t.integer :bookshelf_id, null: false

      t.timestamps
    end
    add_index :shelvings, [:bookshelf_id, :book_id], unique: true
    add_index :shelvings, :book_id
  end
end
