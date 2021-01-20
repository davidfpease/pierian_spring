import React from 'react';

class EditDeckForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.deck.title,
      objective: props.deck.objective,
      id: props.deck.id
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // 
    //this.setState({this.props.deck});
  }

  handleSubmit(e) {
    e.preventDefault();
    //  

    //extra attribute of id: is making it to the database under 'deck'
    const newDeck = this.state;
    this.props.updateDeck(newDeck);
    this.props.closeModal();
  }

  update(field) {
    // 
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    // 
    return (
      <div className="edit-deck-form-container">
        <div class="new-modal-title">Edit Deck</div>
        <form onSubmit={this.handleSubmit}>
          <div onClick={()=>this.props.closeModal()} className="close-x">
            <img src={window.close_x} />

          </div> 
          <label className="input-descriptor"><span className="form-label">Title</span>
            <input className="edit-deck-form-input" type="text" 
            value={this.state.title}
            onChange={this.update('title')}
            ></input>
          </label>
          
          <label className="input-descriptor"><span className="form-label">Objective</span>
            <textarea 
              className="edit-deck-form-input"
              value={this.state.objective}
              onChange={this.update('objective')}
            ></textarea>
          </label>
          
          <div className="edit-form-modal-buttons">

            <div className="pill-button-edit-deck-info-modal cancel" onClick={()=>this.props.closeModal()}>Cancel</div>
            <div onClick={this.handleSubmit} className="pill-button-edit-deck-info-modal">Save</div>
          </div>

        </form>



      </div>
    )
  }
}

export default EditDeckForm;