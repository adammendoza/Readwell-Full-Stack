class ChangeIsbnToText < ActiveRecord::Migration[5.2]
  def change
    change_column :books, :isbn, :text
  end
end
