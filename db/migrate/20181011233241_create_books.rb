class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.string :title, null: false
      t.string :author, null: false
      t.integer :isbn, null: false
      t.string :genre
      t.integer :year, null: false

      t.timestamps
    end
    add_index :books, :title
    add_index :books, :author
    add_index :books, :genre
    add_index :books, :year
    add_index :books, :isbn, unique: true
  end
end
