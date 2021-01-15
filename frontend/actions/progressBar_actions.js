export const RECEIVE_SCORE = 'RECEIVE_SCORE';
export const RESET_SCORES = 'RESET_SCORES';

export const receiveScore = score => {

  return {
    type: RECEIVE_SCORE,
    score
  }
};

export const clearScores = () => {

  return {
    type: RESET_SCORES,
  }
};

export const addScore = (score) => {
  
  return dispatch => {
    
    return dispatch(receiveScore(score))
  }
};

export const resetScores = () => {
  
  return dispatch => {
    
    return dispatch(clearScores())
  }
};
