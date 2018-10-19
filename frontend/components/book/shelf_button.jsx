import React from 'react';
import AddShelfButton from '../shelves/add_shelf_button';

class ShelfButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dropToggle: false
    };
    this.toggleDropOff = this.toggleDropOff.bind(this);
    this.toggleDropOn = this.toggleDropOn.bind(this);
    this.handleShelving = this.handleShelving.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  componentDidMount(){
    this.props.fetchAllBookshelves();
  }

  compnentWillReceiveProps(nextProps) {
    
  }

  handleShelving(shelfName){
    let that = this;
    const bookShelf = this.props.bookshelves.filter(shelf => shelf.name === shelfName)[0];
    return e => {
      e.preventDefault();
      that.props.postShelving({book_id: that.props.book.id, bookshelf_id: bookShelf.id});
    }
  }

  handleCheck(shelfId){
    let that = this;
    return e => {
      e.preventDefault();
      let currShelf = that.props.bookshelves.filter(shelf => shelf.id === shelfId)[0];
      if(currShelf.bookIds.includes(that.props.book.id)) {
        that.props.deleteShelving({book_id: that.props.book.id, bookshelf_id: currShelf.id});
      } else {
        that.props.postShelving({book_id: that.props.book.id, bookshelf_id: shelfId});
      }
    }
  }

  toggleDropOn(){
    this.setState({ dropToggle: true });
  }

  toggleDropOff(){
    this.setState({ dropToggle: false });
  }

  checked(bookIds){
    if(bookIds.includes(this.props.book.id)) return "checked";
    return "";
  }

  extraShelvesCheckboxes(){
    let checkboxes = [];
    let bookshelves = this.props.bookshelves;
    for (let i = 3; i < bookshelves.length; i++){
      checkboxes.push(<div key={bookshelves[i].id} className="check-row" onClick={this.handleCheck(bookshelves[i].id)}>
        <input
          type="checkbox"
          onChange={this.handleCheck(bookshelves[i].id)}
          checked={this.checked(bookshelves[i].bookIds)}
          />{bookshelves[i].name}
        </div>)
    }
    return checkboxes;
  }

  render(){
    if(this.props.bookshelves.length === 0){
      return null;
    }
    const shelves = (
      <div className="main-shelves">
        <button onClick={this.handleShelving('Read')}>Read</button>
        <button onClick={this.handleShelving('Currently Reading')}>Currently Reading</button>
        <button onClick={this.handleShelving('Want to Read')}>Want to Read</button>

        {this.extraShelvesCheckboxes()}
        <AddShelfButton postBookshelf={this.props.postBookshelf} currentUser={this.props.currentUser}/>
      </div>
    );
    let mainButton = <button onClick={this.handleShelving('Want to Read')} className="want-to-read-button">Want to Read</button>;
    let mainShelves = this.props.bookshelves.filter(shelf => ['Want to Read', 'Currently Reading', 'Read'].includes(shelf.name));

    mainShelves.forEach(shelf => {
      if (shelf.bookIds.includes(this.props.book.id)) {
        mainButton = <button className={`curr-shelf-button`} >{shelf.name}</button>;
      }
    });

    return(
      <div className="shelf-button">
        {mainButton}

        <div className="drop-button-list" >
          <button onMouseEnter={this.toggleDropOn} className="shelf-select-button"><span className="material-icons">arrow_drop_down</span></button>
          {this.state.dropToggle && <div onMouseLeave={this.toggleDropOff} className="shelf-drop">
            {shelves}
          </div>}
        </div>
      </div>
    )
  }
}
export default ShelfButton;
