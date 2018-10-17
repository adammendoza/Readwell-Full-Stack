json.bookshelves do
  json.set! @bookshelf.id do
    json.partial! 'api/bookshelves/bookshelf', bookshelf: @bookshelf
  end
end

json.books do
  @bookshelf.books.each do |book|
    json.set! book.id do
      json.partial! 'api/books/book', book: book
    end
  end
end
