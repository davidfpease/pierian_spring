import React from 'react';

const Banner = props => {
  return (      
      <div className="banner">
        <h3 className="banner-headline">Rise to
        your challenge.</h3>
        <h1 className="banner-sub-headline">Flashcards for <b> serious learners.</b></h1>
        <div className="main-ctas">
          <button className="cta-button" >
            Find flashcards
          </button>
          <button className="cta-button neutral" onClick={() => props.openModal('signup')}>Make flashcards</button>
          <button className="video-button">Watch video</button>
        </div>
      </div>

  )
}

export default Banner;