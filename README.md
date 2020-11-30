# Pierian Spring

>A little Learning is a dangerous thing;
>Drink deep, or taste not the Pierian Spring:
--Alexander Pope

[Pierian Spring](https://pierian-spring.herokuapp.com/#/) is a work-in-progress clone of the learning app [Brainscape](https://www.brainscape.com) using Rails backend with React/Redux on the frontend, a PostGreSQL database and hosted on Heroku.  Pierian Spring allows users to register and login to the site where they can build digital decks of flashcards consisting of questions and answers.  Decks can be studied by presenting cards to the user and recording feedback about the user's confidence in their retention of the answer to each question.

### Core features of Pieriann Spring:
   - Front and backend user authentication
   - Create and edit decks and cards
   - Study decks (cards are presented to user as question first, then answer, then rating of retention)
   - Search for other decks based on tag/category of content
  
### Challenges:

The edit deck form provided multiple challneges to overcome, including:
-   Edit fields for all cards in a deck
-   Pre-populate edit fields with existing card information
-   Ability to delete existing cards
-   Ability to add additional cards
-   Reset option to remove all pending changes
-   Save options to commit changes to the database

I built the edit deck form using a connected React component with access to the global redux state which provides the initial values for each pre-populated edit field.  The form itself maintains an internal state tracking user modifications.  These modifications are held within the component's state until the user clicks the save button, at which point the changes are passed to the Redux store and the user is redirected to their Deck Index page.  Code snippet below:

```js
lass EditCardsForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {cards: [],
                  deletedCards: []};
    this.update = this.update.bind(this);
    this.tempDeleteCard = this.tempDeleteCard.bind(this);
    this.addNewCard = this.addNewCard.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.reset = this.reset.bind(this);
  }

  componentDidMount(){
    let cardsArray = Object.keys(this.props.cards).map(key => this.props.cards[key]);
    let cards = cardsArray.filter(card => card.deck_id === this.props.deck.id);
    let cardsCopy = _.cloneDeep(cards);
    this.setState({cards: cardsCopy});
  }

  update(field, cardNum) {
    return e => {
      let newCards = this.state.cards.slice();
      let editCard = newCards[cardNum];
      editCard[field] = e.currentTarget.value;
      this.setState({cards: newCards});
      }
  }

  tempDeleteCard(cardNum) {
    let newCards = this.state.cards.slice();
    let existingDeleted = this.state.deletedCards.slice();
    let deletedCard = newCards[cardNum];
    newCards.splice(cardNum,1);
    existingDeleted.push(deletedCard);
    this.setState({
      cards: newCards,
      deletedCards: existingDeleted,
    })
  }

  addNewCard(){
    let newCards = this.state.cards;
    newCards.push({question: "Question",
                    answer: "Answer",
                    deck_id: this.props.deck.id});
    this.setState({cards: newCards});
  }

  reset(e){
    e.preventDefault();
    let cardsArray = Object.keys(this.props.cards).map(key => this.props.cards[key]);
    let cards = cardsArray.filter(card => card.deck_id === this.props.deck.id);
    let cardsCopy = _.cloneDeep(cards);
    this.setState({ cards: cardsCopy,
                    deletedCards: [] });
  }

  handleSubmit(e) {
    e.preventDefault();
    const storeCards = this.props.cards;
    this.state.cards.forEach(card=>{
      
      if ('id' in card && card.id in storeCards){
        if (storeCards[card.id].question.valueOf() != card.question.valueOf() ||
          storeCards[card.id].answer.valueOf() != card.answer.valueOf()){
          this.props.updateCard(card);
        }
      } else {
        this.props.createCard(card, this.props.deck.id);
      }
    })
    this.state.deletedCards.forEach(card => {
      if ('id' in card && card.id in storeCards) {
        this.props.deleteCard(card.id);
      }
    })
    this.props.history.push('/dashboard');
  }

  // render(){...

```

### Work Remaining
- Finalize the study feature by improving the UI and building the processes necessary to track a user's responses and frequency of exposure to each card
- Search feature to find other available decks
- Edit each card individually
- Create new Decks
- Overall styling and UI

