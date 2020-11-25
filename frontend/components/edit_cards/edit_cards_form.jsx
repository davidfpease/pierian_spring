import React from 'react';


class EditCardsForm extends React.Component {
  constructor(props){
    super(props);
    //this.state = {cards: props.cards};
  }

  componentDidMount(){
    this.props.fetchAllCardsInDeck(this.props.match.params.deck_id);

  }
  

  render(){
    const cards = Object.keys(this.props.cards).map(key => this.props.cards[key]);
    const deck = this.props.deck;
    debugger;


    return(
      <div>
        <form>
          <table>
            {
              cards.map((card, index) =>(
                <tr key={card.id}>
                  <td>
                    <div>
                      {index + 1}
                    </div>
                  </td>
                  <td>

                    {card.question}
                  </td>
                  <td>
                    {card.answer}
                  </td>
                  <td>
                    Delete this card.
                  </td>
                  
                </tr>

              ) )
            }
          </table>
        </form>
      </div>
    );
  };

}

export default EditCardsForm;