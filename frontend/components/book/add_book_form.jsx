import React from 'react';


class AddBookForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      author: '',
      isbn: '',
      year: '',
      genre: '',
      cover_img: null,
      photo_url: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  renderErrors() {
    const errors = this.props.errors
    const word = errors.length > 1 ? 'errors' : 'error';
    if(errors.length > 0){
      return(
        <div className="error-display">
          <h2>{errors.length} {word} prohibited this book from being saved:</h2>
          <ul className='errors-list'>
            {errors.map((error, i) =>(
              <li key={`error-${i}`}>
                {error}
              </li>
            ))}
          </ul>
        </div>
      );
    }
    return '';
  }

  update(feild) {
    return e => this.setState({
      [feild]: e.currentTarget.value
    });
  }

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

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ cover_img: file, photo_url: fileReader.result });
    }
    if(file){
      fileReader.readAsDataURL(file);
    }
  }

  render(){
    // help from: https://webdesign.tutsplus.com/tutorials/building-responsive-forms-with-flexbox--cms-26767
    const preview = this.state.photo_url ? <img className="book-image-preview" src={this.state.photo_url} /> : null;
    return (
      <div className="add-book-form">
        <form onSubmit={this.handleSubmit}>
          <ul className="flex-outer">
            <h1>Add a New Book</h1>
            {this.renderErrors()}
            <li>
              <label>title <span>*</span></label>
              <input
                type="text"
                onChange={this.update('title')}
                value={this.state.title}
                />
            </li>

            <li>
              <label>author <span>*</span></label>
              <input
                className="author-input"
                type="text"
                onChange={this.update('author')}
                value={this.state.author}
                />
            </li>

            <li>
              <label>isbn</label>
              <input
                className="isbn-input"
                type="text"
                onChange={this.update('isbn')}
                value={this.state.isbn}
                />
            </li>

            <li>
              <label className="pub-label">published</label>
              <span className="pub-year">year:</span>
              <input
                className="year-input"
                type="text"
                onChange={this.update('year')}
                value={this.state.year}
                />
            </li>

            <li>
              <label>genre</label>
              <input
                className="genre-input"
                type="text"
                onChange={this.update('genre')}
                value={this.state.genre}
                />
            </li>

            <li>
              <input type="submit" value="Create Book"/>
            </li>
          </ul>
          <div className="upload-cover">
            <p>Add a cover image for this book</p>
            <input
              type="file"
              onChange={this.handleFile}
              />
            {preview}
          </div>
        </form>
      </div>
    )
  }
}

export default AddBookForm;
