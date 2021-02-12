import React from 'react'

export default function about(props) {
  return (
    <div className="about-container"> 
      <h3>About Pierian Spring</h3>
      <div onClick={() => props.closeModal()} className="close-x about">
        <img src={window.close_x} />
      </div> 
      <div className="about-description">
        <a target="_blank" className="link" href="https://en.wikipedia.org/wiki/Pierian_Spring">Pierian Spring</a> is a clone of the digital flashcard site&nbsp;
        <a target="_blank" className="link" href="https://www.brainscape.com/">Brainscape</a>. Technology used includes Rails backend with PostGres database and React-Redux 
         frontend. 
      </div>
      <div className="created-by">
        <h3>Created by: &nbsp;</h3><a target="_blank" className="link" href="http://davidpease.me" target="_blank">David Pease</a>
      </div>
      
    </div>
  )
}
