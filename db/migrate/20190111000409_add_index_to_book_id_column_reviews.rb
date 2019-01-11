class AddIndexToBookIdColumnReviews < ActiveRecord::Migration[5.2]
  def change
    add_index :reviews, :book_id
  end
end
