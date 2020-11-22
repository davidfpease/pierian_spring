import React from 'react';

class EditDeckForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      objective: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    debugger;
    //this.setState({this.props.deck});
  }

  handleSubmit(e) {
    e.preventDefault();
    const deck = Object.assign({}, this.state);
    this.props.updateDeck(deck);
    this.props.closeModal();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    debugger;
    return (
      <div className="edit-deck-form-container">
        <form onSubmit={this.handleSubmit}>
          <div onClick={this.props.closeModal} className="close-x">
            <img src={window.close_x} />
          </div> 
          <label className="input-descriptor">Title
            <input className="login-input" type="text" 
            value={this.state.title}
            onChange={this.update('title')}
            ></input>
          </label>
          
          <label>Objective
            <textarea className="input-descriptor"
              className="login-input"
              value={this.state.objective}
              onChange={this.update('objective')}
            ></textarea>
          </label>
          
          <div>
            <button onClick={this.props.closeModal}>Cancel</button>
            <button type="submit">Save</button>
          </div>

        </form>



      </div>
    )
  }
}

export default EditDeckForm;