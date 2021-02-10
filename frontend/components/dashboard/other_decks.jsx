import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import { GrFormAdd } from 'react-icons/gr';

class OtherDecks extends Component {
  constructor(props){
    super(props);
    this.state = {
      search: ""
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
  }

  handleClick(deck){
    this.props.openModal({modal: "otherDeck",
                          package: {deck: deck}
                        });
  }

  handleSearchInput(e){
    let value = e.target.value;
    
    if (value.length === 1){
      this.setState({
        search: e.target.value.trim(),
      })
    } else {
      this.setState({
        search: value,
      })
    }
  }


  render() {
    let { decks } = this.props;
    let searchTerm  = this.state.search;
    //filter decks by search term, if any
    if(searchTerm.length > 0 && decks){
      
      let newDecks = [];
      decks.forEach(tup => {
        debugger;
        if (tup[0].title.toLowerCase().includes(searchTerm.toLowerCase())){
          newDecks.push(tup);
        }
      })
      decks = newDecks;
    }


    return (
      <div className="other-decks-container">
        <div className="other-decks-search-container">
          <div className="other-decks-title">
            Find Other Decks  
          </div>
          <div className="other-decks-search">
            <input type="text" value={this.state.search}
              className="other-deck-search-input" 
              placeholder="Search other deck titles"
              onChange={this.handleSearchInput}></input>
          </div>


        </div>
         <table className="other-decks-table">
          <thead>
            <tr className="table-row-add-decks">
              <th className="title">Title</th>
              <th></th>
              <th className="size">Size</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              decks.map((val, index) => (
                <tr key={index} onClick={() => this.handleClick(val[0])} 
                    className="add-deck-table-row">
                  <td className="other-decks-table-title">
                    {val[0].title}
                  </td>
                  <td className="filler-cell"></td>
                  <td className="other-decks-table-size">
                    {val[1]} {val[1] === 1 ? "card" : "cards"}
                  </td>
                  <td className="filler-cell"></td>
                </tr>
              ))
            }
          </tbody>
        </table>




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

