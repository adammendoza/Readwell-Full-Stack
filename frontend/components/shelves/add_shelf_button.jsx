import React from 'react';

class AddShelfButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      inputToggle: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(){
    this.setState({ inputToggle: true });
  }

  update(e) {
    this.setState({
      name: e.currentTarget.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.postBookshelf({name: this.state.name, creator_id: this.props.currentUser.id});
    this.setState({ name: '' });
  }

  render(){
    return (
      <div className="add-shelf-form">
        {this.state.inputToggle &&
        <form onSubmit={this.handleSubmit}>
          <h3>Add Shelf</h3>
          <input type="text" onChange={this.update} value={this.state.name} />
          <input type="submit" value="add"/>
        </form>}

        {this.state.inputToggle === false && <button onClick={this.handleClick}>Add Shelf</button>}
      </div>
    )
  }
}

export default AddShelfButton;
