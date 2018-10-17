json.bookshelves do
  @bookshelves.each do |bookshelf|
    json.set! bookshelf.id do
      json.partial! 'api/bookshelves/bookshelf', bookshelf: bookshelf
    end
  end
end

json.books do
  @bookshelves.each do |bookshelf|
    bookshelf.books.each do |book|
      json.set! book.id do
        json.partial! 'api/books/book', book: book
      end
    end
  end
end
