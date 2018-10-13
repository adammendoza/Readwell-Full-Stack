json.extract! book, :id, :title, :author, :isbn, :genre, :year

if book.cover_img.attached?
  json.cover_img url_for(book.cover_img)
end
