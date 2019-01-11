json.extract! book, :id, :title, :author, :isbn, :genre, :year

# if book.reviews
#   book.reviews.each do |review|
#     json.set! review.id do 
#       json.extract! review, :title, :body, :rating, :reviewer, :book_id
#     end
#   end
# end

json.reviews book.reviews do |review|
  json.(review, :title, :body, :reviewer, :rating, :book_id)
end

if book.cover_img.attached?
  json.cover_img url_for(book.cover_img)
end
