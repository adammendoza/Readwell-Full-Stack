# Readwell


[Live Demo](https://readwell.herokuapp.com)


Readwell is a book organization web app influenced by Goodreads.  It is built on a Rails and PostgreSQL backend and displayed using a React/Redux frontend.  Readwell also uses S3 to store image resources.

This project was completed in two weeks, but will continue to be updated.


## Features

* User authentication using BCrypt
* Users can add books with cover images
* Bookshelves can be created for organization
* Read status (Read, Currently Reading, Want to Read) can be tracked and edited;

<img width="1088" alt="screen shot 2018-10-19 at 9 37 37 am" src="https://user-images.githubusercontent.com/41452916/47231771-b921a800-d382-11e8-9e0f-78d314662f4c.png">


## Adding books

Users can add books to the website and store information such as title, author, and a cover image.  Users can then add books they've created to bookshelves, that they can create as well.  An issue i had was rerouting to the new book page on submit of the add book form.  I ended up appending a "then" statement to a promise, which allowed the redirect to occur based on new information from my rails backend.

```JS

handleSubmit(e) {
    e.preventDefault();
    if(this.state.cover_img === null){
      this.props.receiveErrors(['You must upload a cover image'])
    } else {
      let book = new FormData();
      book.append('book[title]', this.state.title);
      book.append('book[author]', this.state.author);
      book.append('book[isbn]', this.state.isbn);
      book.append('book[genre]', this.state.genre);
      book.append('book[year]', this.state.year);
      book.append('book[cover_img]', this.state.cover_img);
      this.props.postBook(book).then(res => {
        this.props.history.push(`/books/${res.book.id}`);
      });
    }
  }

```


## Read Status and Bookshelf Organization

Read status and shelf oranization can be done with one button/form.  Using React/Redux, the shelving button is updated on the fly, allowing the user to shelf and update read status all in one small and powerful component.

![readme_readwell](https://user-images.githubusercontent.com/41452916/47233204-d3f61b80-d386-11e8-9327-7e613616b546.gif)

## Project Design

Readwell was designed to be a pixel-for-pixel clone of Goodreads.  Given the timeframe, I don't have all the features of Goodreads. But the features I do have are responsive and smooth.  I wanted to do a few features very well instead of trying to roll out a bunch of features that were not styled correctly or running smoothly.

## Technologies

I used Rails to allow me to actually work on what makes the app unique instead of writing a bunch of boilerplate code.  Heroku is used to host my app because this project is mostly for practice and display of skill, instead of actual client usage.  

I used Redux and React in my frontend to allow for a one-page app and responsive display.

## Additional Resources

* [Database Schema](https://github.com/cmcd146/Readwell-Full-Stack/wiki/schema)
* [Backend Routes](https://github.com/cmcd146/Readwell-Full-Stack/wiki/backend-routes)
* [Frontend Routes and Components](https://github.com/cmcd146/Readwell-Full-Stack/wiki/frontend-routes)
* [Sample State](https://github.com/cmcd146/Readwell-Full-Stack/wiki/state-shape)

## Future Features

* Book Reviews
* Search
* Author pages
