const shuffleCards = (cards) =>{
  //shuffle the deck
  shuffle(cards);

  if (cards  && cards.length <= 10) {

    //fill in the array up to 10 cards
    let i = 0;
    while (cards.length < 10){
      cards.push(cards[i]);
      i++; 
    }
    // 
    return cards;
  } else if (cards && cards.length > 10){
    return cards.slice(0,9);
  }
  return [];
}

function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

export default shuffleCards;
