import React from 'react';
import { Link } from 'react-router-dom';
import AddShelfButton from './add_shelf_button';

class BookshelfSidebar extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    const total = this.props.bookshelves.reduce(((acc, cur) => acc + cur.count), 0);
    const links = this.props.bookshelves.map((bookshelf, index) => {
      if(index === 2){
        return(
          <Link
            key={bookshelf.id}
            to={`/shelves/${bookshelf.name.toLowerCase()}`}
            className={this.props.match.params.currShelf === bookshelf.name.toLowerCase() ? "current third" : 'third'}>
            {bookshelf.name} ({bookshelf.count})
          </Link>
        )
      }
        return(
          <Link
            key={bookshelf.id}
            to={`/shelves/${bookshelf.name.toLowerCase()}`}
            className={this.props.match.params.currShelf === bookshelf.name.toLowerCase() ? "current" : ''}>
            {bookshelf.name} ({bookshelf.count})
          </Link>
        )
      }
    );
    return(
      <div className="shelves-sidebar">
        <Link to="/shelves/all"
          className={this.props.match.params.currShelf === 'all' ? "current" : ''}>
          All ({total})
        </Link>
        {links}
        <AddShelfButton postBookshelf={this.props.postBookshelf} currentUser={this.props.currentUser}/>
      </div>
    )
  }
}

export default BookshelfSidebar;
