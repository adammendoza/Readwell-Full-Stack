import React from 'react';
import BookshelfSidebar from './bookshelf_sidebar';
import BookList from './book_list';
import { Link } from 'react-router-dom';


class MyShelves extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchAllBookshelves();
  }

  render(){
    if(this.props.bookshelves.length === 0){
      return null;
    }
    let currShelf = this.props.bookshelves.filter(shelf => shelf.name.toLowerCase() === this.props.match.params.currShelf);
    if (this.props.match.params.currShelf === 'all') {
      let bookIds = [];
      Object.values(this.props.bookshelves).forEach(shelf => {
        bookIds = bookIds.concat(shelf.bookIds);
      });

      const unique = (value, index, self) => {
        return self.indexOf(value) === index;
      }
      bookIds = bookIds.filter(unique);
      currShelf = [{ bookIds }];
    }
    return(
      <div className="my-shelves">
        <div className="header-container">
          <Link className="sidebar-header" to="/shelves/all">My Books</Link>
        </div>
        <div className="main-content-shelves">
          <BookshelfSidebar
            match={this.props.match}
            bookshelves={this.props.bookshelves}
            updateBookshelf={this.props.updateBookshelf}
            deleteBookshelf={this.props.deleteBookshelf}
            postBookshelf={this.props.postBookshelf}
            currentUser={this.props.currentUser}/>

          <BookList books={this.props.books} currShelf={currShelf}/>
        </div>
      </div>
    );
  }
}

export default MyShelves;
