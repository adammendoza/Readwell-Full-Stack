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
  validates :name, :creator_id, presence: true
  validates_uniqueness_of :name, :scope => [:creator_id]
end
