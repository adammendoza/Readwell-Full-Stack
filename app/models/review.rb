# == Schema Information
#
# Table name: reviews
#
#  id         :bigint(8)        not null, primary key
#  title      :string           not null
#  body       :text             not null
#  reviewer   :integer          not null
#  rating     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  book_id    :integer          not null
#

class Review < ApplicationRecord
    validates :title, :body, :reviewer, :rating, presence: true

    belongs_to :book,
    foreign_key: :book_id,
    class_name: :Book
end
