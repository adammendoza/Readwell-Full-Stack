json.extract! bookshelf, :id, :name, :creator_id

json.bookIds bookshelf.books.map {|book| book.id}
json.count bookshelf.books.count
