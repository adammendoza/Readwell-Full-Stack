# == Schema Information
#
# Table name: shelvings
#
#  id           :bigint(8)        not null, primary key
#  book_id      :integer          not null
#  bookshelf_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Shelving < ApplicationRecord
  validates_uniqueness_of :bookshelf_id, :scope => [:book_id]

  belongs_to :book,
  foreign_key: :book_id,
  class_name: :Book

  belongs_to :bookshelf,
  foreign_key: :bookshelf_id,
  class_name: :Bookshelf
end
