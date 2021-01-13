export const RECEIVE_SCORE = 'RECEIVE_SCORE';

export const receiveScore = score => {

  return {
    type: RECEIVE_SCORE,
    score
  }
};

export const addScore = (score) => {
  
  return dispatch => {
    
    return dispatch(receiveScore(score))
  }
};
