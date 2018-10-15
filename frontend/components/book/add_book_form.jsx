import React from 'react';


class AddBookForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      author: '',
      isbn: '',
      year: '',
      genre: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(feild) {
    return e => this.setState({
      [feild]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const book = merge({}, this.state);
    this.props.postBook(book);
  }

  render(){
    return (

      <div className="add-book-form">
        <h1>Add a New Book</h1>
        <form onSumbit={this.handleSubmit}>
          <label>title</label>
          <input
            type="text"
            onChange={this.update('title')}
            value={this.state.title}
            />

          <label>author</label>
          <input
            type="text"
            onChange={this.update('author')}
            value={this.state.author}
            />

          <label>isbn</label>
          <input
            type="text"
            onChange={this.update('isbn')}
            value={this.state.isbn}
            />

          <label>published</label>
          <input
            type="text"
            onChange={this.update('year')}
            value={this.state.year}
            />

          <label>genre</label>
          <input
            type="text"
            onChange={this.update('genre')}
            value={this.state.genre}
            />

          <input type="submit" value="Create Book"/>
        </form>
      </div>
    )
  }
}

export default AddBookForm;
