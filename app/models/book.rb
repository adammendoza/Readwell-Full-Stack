# == Schema Information
#
# Table name: books
#
#  id         :bigint(8)        not null, primary key
#  title      :string           not null
#  author     :string           not null
#  isbn       :integer          not null
#  genre      :string
#  year       :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Book < ApplicationRecord
  validates :title, :author, :isbn, :year, presence: true
  validates :isbn, uniqueness: true
end
