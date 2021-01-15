import { RECEIVE_SCORE } from '../actions/progressBar_actions';

import _ from 'lodash';

const progressBarReducer = (state = Array(10).fill({score: 0, index: 0, cardId: null}), action) => {
  Object.freeze(state);
  let newState = _.cloneDeep(state);
  
  switch (action.type) {
    case RECEIVE_SCORE:
      newState[action.score.index] = action.score;
      
      return newState;
    
    default:
      
      return state;
  }
}

export default progressBarReducer;