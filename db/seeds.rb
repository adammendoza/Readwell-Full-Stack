# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Book.destroy_all
Shelving.destroy_all
Bookshelf.destroy_all
Review.destroy_all

demo = User.create(email:'demo@demosaregreat.com', name: 'Demo McDemoson', password: 'starwars');
chris = User.create(email:'mcdonaldchristopherkevin@gmail.com', name: 'Chris McDonald', password: 'starwars');

b1 = Book.create(title: "1984", author: 'George Orewell', isbn: '0451524934', genre: 'Science Fiction', year: 1949)
f1 = File.open("#{Rails.root}/app/assets/images/1984.jpg")
b1.cover_img.attach(io: f1, filename: '1984.jpg')

b2 = Book.create(title: "The Art of War", author: 'Sun Tzu', isbn: '1590302257', genre: 'Philosophy', year: -771)
f2 = File.open("#{Rails.root}/app/assets/images/the_art_of_war.jpg")
b2.cover_img.attach(io: f2, filename: 'the_art_of_war.jpg')

b3 = Book.create(title: "Gone with the Wind", author: 'Margaret Mitchell', isbn: '978-0-446-36538-3', genre: 'Historical Fiction', year: 1936)
f3 = File.open("#{Rails.root}/app/assets/images/gone_with_the_wind.jpg")
b3.cover_img.attach(io: f3, filename: 'gone_with_the_wind.jpg')

b4 = Book.create(title: "The Catcher in the Rye", author: 'J.D. Salinger', isbn: '0316769177', genre: 'Young Adult', year: 1951)
f4 = File.open("#{Rails.root}/app/assets/images/catcher.jpg")
b4.cover_img.attach(io: f4, filename: 'catcher.jpg')

b5 = Book.create(title: "Notes from Underground", author: 'Fyodor Dostoyevsky', isbn: '067973452X', genre: 'Philosophy', year: 1864)
f5 = File.open("#{Rails.root}/app/assets/images/notes-from-underground.jpg")
b5.cover_img.attach(io: f5, filename: 'notes-from-underground.jpg')

b6 = Book.create(title: "Infinite Jest", author: 'David Foster Wallace', isbn: '0316920045', genre: 'Fiction', year: 1996)
f6 = File.open("#{Rails.root}/app/assets/images/jest.jpg")
b6.cover_img.attach(io: f6, filename: 'jest.jpg')

b7 = Book.create(title: "The Girl with the Dragon Tattoo", author: 'Stieg Larsson', isbn: '0307269752', genre: 'Mystery', year: 2005)
f7 = File.open("#{Rails.root}/app/assets/images/dragon_tattoo.jpg")
b7.cover_img.attach(io: f7, filename: 'dragon_tattoo.jpg')

b8 = Book.create(title: "Harry Potter and the Sorcerer's Stone", author: 'J.K. Rowling', isbn: '0439554934', genre: 'Young Adult', year: 1997)
f8 = File.open("#{Rails.root}/app/assets/images/sorcerers.jpg")
b8.cover_img.attach(io: f8, filename: 'sorcerers.jpg')

b9 = Book.create(title: "Harry Potter and the Chamber of Secrets", author: 'J.K. Rowling', isbn: '0439064864', genre: 'Young Adult', year: 1998)
f9 = File.open("#{Rails.root}/app/assets/images/secrets.jpg")
b9.cover_img.attach(io: f9, filename: 'secrets.jpg')

b10 = Book.create(title: "Harry Potter and the Prisoner of Azkaban", author: 'J.K. Rowling', isbn: '043965548X', genre: 'Young Adult', year: 1999)
f10 = File.open("#{Rails.root}/app/assets/images/azkaban.jpg")
b10.cover_img.attach(io: f10, filename: 'azkaban.jpg')

b11 = Book.create(title: "Harry Potter and the Goblet of Fire", author: 'J.K. Rowling', isbn: '0439139600', genre: 'Young Adult', year: 2000)
f11 = File.open("#{Rails.root}/app/assets/images/goblet.jpg")
b11.cover_img.attach(io: f11, filename: 'goblet.jpg')

b12 = Book.create(title: "Harry Potter and the Half-Blood Prince", author: 'J.K. Rowling', isbn: '0439785960', genre: 'Young Adult', year: 2005)
f12 = File.open("#{Rails.root}/app/assets/images/prince.jpg")
b12.cover_img.attach(io: f12, filename: 'prince.jpg')

b13 = Book.create(title: "Angle of Repose", author: 'Wallace Stegner', isbn: '0140169300', genre: 'Historical Fiction', year: 1971)
f13 = File.open("#{Rails.root}/app/assets/images/repose.jpg")
b13.cover_img.attach(io: f13, filename: 'repose.jpg')

b14 = Book.create(title: "Green Eggs and Ham", author: 'Dr. Seuss', isbn: '0394800168', genre: 'Childrens', year: 1960)
f14 = File.open("#{Rails.root}/app/assets/images/green_eggs.jpg")
b14.cover_img.attach(io: f14, filename: 'green_eggs.jpg')

b15 = Book.create(title: "How the Grinch Stole Christmas", author: 'Dr. Seuss', isbn: '0007173040', genre: 'Childrens', year: 1957)
f15 = File.open("#{Rails.root}/app/assets/images/grinch.jpg")
b15.cover_img.attach(io: f15, filename: 'grinch.jpg')

b16 = Book.create(title: "The Lorax", author: 'Dr. Seuss', isbn: '0679889108', genre: 'Childrens', year: 1971)
f16 = File.open("#{Rails.root}/app/assets/images/lorax.jpg")
b16.cover_img.attach(io: f16, filename: 'lorax.jpg')

b17 = Book.create(title: "A Heartbreaking Work of Staggering Genius", author: 'Dave Eggers', isbn: '0375725784', genre: 'Memoir', year: 2000)
f17 = File.open("#{Rails.root}/app/assets/images/nogenius.jpg")
b17.cover_img.attach(io: f17, filename: 'nogenius.jpg')

b18 = Book.create(title: "Gone Girl", author: 'Gillian Flynn', isbn: '0307588378', genre: 'Mystery', year: 2012)
f18 = File.open("#{Rails.root}/app/assets/images/gonegirl.jpg")
b18.cover_img.attach(io: f18, filename: 'gonegirl.jpg')

b19 = Book.create(title: "Catch-22", author: 'Joseph Heller', isbn: '0684833395', genre: 'Humor', year: 1961)
f19 = File.open("#{Rails.root}/app/assets/images/catch.jpg")
b19.cover_img.attach(io: f19, filename: 'catch.jpg')

r1 = Review.create(title: "Great!", body: "I loved this book. A+", reviewer: chris.id, rating: 5, book_id: b19.id)

shelf1 = Bookshelf.create(name: "Read", creator_id: chris.id);
shelf2 = Bookshelf.create(name: "Read", creator_id: demo.id);
shelf3 = Bookshelf.create(name: "Want to Read", creator_id: chris.id);
shelf4 = Bookshelf.create(name: "Want to Read", creator_id: demo.id);
shelf5 = Bookshelf.create(name: "Currently Reading", creator_id: chris.id);
shelf6 = Bookshelf.create(name: "Currently Reading", creator_id: demo.id);
shelf7 = Bookshelf.create(name: "Books with Brooms", creator_id: demo.id);
shelf8 = Bookshelf.create(name: "Avoid", creator_id: demo.id);
shelf9 = Bookshelf.create(name: "Theo Geisel", creator_id: demo.id);
shelf10 = Bookshelf.create(name: "Best Book Ever", creator_id: demo.id);

Shelving.create(book_id: b7.id, bookshelf_id: shelf1.id);
Shelving.create(book_id: b3.id, bookshelf_id: shelf2.id);
Shelving.create(book_id: b2.id, bookshelf_id: shelf3.id);
Shelving.create(book_id: b6.id, bookshelf_id: shelf1.id);
Shelving.create(book_id: b5.id, bookshelf_id: shelf6.id);
Shelving.create(book_id: b4.id, bookshelf_id: shelf4.id);
Shelving.create(book_id: b7.id, bookshelf_id: shelf4.id);
Shelving.create(book_id: b8.id, bookshelf_id: shelf7.id);
Shelving.create(book_id: b9.id, bookshelf_id: shelf7.id);
Shelving.create(book_id: b10.id, bookshelf_id: shelf7.id);
Shelving.create(book_id: b11.id, bookshelf_id: shelf7.id);
Shelving.create(book_id: b12.id, bookshelf_id: shelf7.id);
Shelving.create(book_id: b13.id, bookshelf_id: shelf2.id);
Shelving.create(book_id: b14.id, bookshelf_id: shelf9.id);
Shelving.create(book_id: b15.id, bookshelf_id: shelf9.id);
Shelving.create(book_id: b16.id, bookshelf_id: shelf9.id);
Shelving.create(book_id: b17.id, bookshelf_id: shelf8.id);
