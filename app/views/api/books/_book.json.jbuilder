json.extract! book, :id, :title, :author, :isbn, :genre, :year

json.reviews book.reviews do |review|
  json.(review, :id, :title, :body, :reviewer, :rating, :book_id)
end

if book.cover_img.attached?
  json.cover_img url_for(book.cover_img)
end
