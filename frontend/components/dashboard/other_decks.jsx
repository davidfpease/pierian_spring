import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';

class OtherDecks extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(deck){
    this.props.openModal({modal: "otherDeck",
                          package: {deck: deck}
                        });
    
  }


  render() {

    return (
      <div className="other-decks-container">
        <ul className="other-decks">
          {Object.keys(this.props.decks).map(key => 
            (<li onClick={()=> this.handleClick(this.props.decks[key])} 
              className="other-deck-item" 
              key={this.props.decks[key].id}>{this.props.decks[key].title} 
            </li>)
          )}
        </ul>
      </div>
    )
  }
}


const mapStateToProps = (state) => {

  return {
    modal: state.ui.modal,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    openModal: (modal) => {dispatch(openModal(modal))},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OtherDecks);

