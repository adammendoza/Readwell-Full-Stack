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

shelf1 = Bookshelf.create(name: "Read", creator_id: chris.id);
shelf2 = Bookshelf.create(name: "Read", creator_id: demo.id);
shelf3 = Bookshelf.create(name: "Want To Read", creator_id: chris.id);
shelf4 = Bookshelf.create(name: "Want To Read", creator_id: demo.id);
shelf5 = Bookshelf.create(name: "Currently Reading", creator_id: chris.id);
shelf6 = Bookshelf.create(name: "Currently Reading", creator_id: demo.id);

Shelving.create(book_id: b7.id, bookshelf_id: shelf1.id);
Shelving.create(book_id: b3.id, bookshelf_id: shelf2.id);
Shelving.create(book_id: b2.id, bookshelf_id: shelf3.id);
Shelving.create(book_id: b6.id, bookshelf_id: shelf1.id);
Shelving.create(book_id: b5.id, bookshelf_id: shelf6.id);
Shelving.create(book_id: b4.id, bookshelf_id: shelf4.id);
Shelving.create(book_id: b7.id, bookshelf_id: shelf4.id);
