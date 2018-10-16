class CreateBookshelves < ActiveRecord::Migration[5.2]
  def change
    create_table :bookshelves do |t|
      t.string :name, null: false
      t.integer :creator_id, null: false

      t.timestamps
    end
    add_index :bookshelves, [:name, :creator_id], unique: true
    add_index :bookshelves, :creator_id
  end
end
