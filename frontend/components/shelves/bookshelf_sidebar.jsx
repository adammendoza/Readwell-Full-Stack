import React from 'react';
import { Link } from 'react-router-dom';

class BookshelfSidebar extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    const total = this.props.bookshelves.reduce(((acc, cur) => acc + cur.count), 0);
    const links = this.props.bookshelves.map(bookshelf => (
      <Link
        key={bookshelf.id}
        to={`/shelves/${bookshelf.name.toLowerCase()}`}
        className={this.props.match.params.currShelf === bookshelf.name.toLowerCase() ? "current" : ''}>
        {bookshelf.name} ({bookshelf.count})
      </Link>
      )
    );
    return(
      <div className="shelves-sidebar">
        <Link to="/shelves/all"
          className={this.props.match.params.currShelf === 'all' ? "current" : ''}>
          All ({total})
        </Link>
        {links}
      </div>
    )
  }
}

export default BookshelfSidebar;
