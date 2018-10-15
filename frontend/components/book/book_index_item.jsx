import React from 'react';
import { Link } from 'react-router-dom';
import BookPopUp from './book_pop_up';


class BookIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.state = { hover: false };
    this.hoverToggleOn = this.hoverToggleOn.bind(this);
    this.hoverToggleOff = this.hoverToggleOff.bind(this);
  }

  hoverToggleOn(){
    this.setState({ hover: true });
  }

  hoverToggleOff(){
    this.setState({ hover: false });
  }

  render(){
    return (
      <div className="book-image-link">
        <Link
          to={`/books/${this.props.book.id}`}
          onMouseEnter={this.hoverToggleOn}
          onMouseLeave={this.hoverToggleOff}
          ><img src={this.props.book.cover_img}/></Link>
        {this.state.hover && <BookPopUp book={this.props.book} hover={this.state.hover}/>}
      </div>
    );
  }
}

export default BookIndexItem;
