# == Schema Information
#
# Table name: bookshelves
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  creator_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Bookshelf < ApplicationRecord
  validates :name, presence: true
  validates_uniqueness_of :name, :scope => [:creator_id]

  belongs_to :creator,
  foreign_key: :creator_id,
  class_name: :User

  has_many :shelvings,
  foreign_key: :bookshelf_id,
  class_name: :Shelving

  has_many :books,
  through: :shelvings,
  source: :book
end
