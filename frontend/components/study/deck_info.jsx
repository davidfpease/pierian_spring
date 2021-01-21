import React from "react";
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import { BsGearFill } from "react-icons/bs";

class DeckInfo extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      showDropdown: false,
    }
    this.handleDropDownClick = this.handleDropDownClick.bind(this);
  }

  handleDropDownClick(e){
    e.stopPropagation();

  }

  render(){
    
    let deck = {
      title: "",
    };
    if(this.props.deck){
      deck = this.props.deck;
    }

    return (
      <div className="first-row-container">
        <div className="first-row-deck-info">
          <div className="branding">
            <Link style={{ textDecoration: 'none' }} to={`/dashboard`} >
              <div className="back-button">
                <div className="back-arrow">
                  <IoIosArrowBack />
                </div>
                <img id="logo-deck-info" src={window.logo} />
              </div>
            </Link>
          </div>
          <div className="study-mix-options-button">
            <div className="options-menu-button">
              <div className="options-button-deck-info">
                <BsGearFill />
              </div>
            </div>
          </div>
        </div>
        <div className="study-mix-info">
            <div className="study-mix-icon">
              <img id="deck-image-small" src="http://localhost:3000/assets/ugs-be871e79593d46b7a66d2f4b99248d6cf90cfbc8be8559b121f1d14e81de926d.png"></img>
              <h3 className="study-mix-name">{deck.title}</h3>
            </div>
          </div>
      </div>
      
    )
  }
}

export default DeckInfo;