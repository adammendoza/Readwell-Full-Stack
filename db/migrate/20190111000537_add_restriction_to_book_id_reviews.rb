class AddRestrictionToBookIdReviews < ActiveRecord::Migration[5.2]
  def change
    change_column :reviews, :book_id, :integer, null: false
  end
end
