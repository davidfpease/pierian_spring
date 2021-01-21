import React from 'react';

const NoMatch = (props) => {
  
  return (
    <div className="error">
      <div className="f404-container">
        <h1 className="error-404">ERROR</h1>
        <h2 className="error-404-note">The page at "{props.match.url}" does not exist!</h2>
      </div>
    </div>
  )
}

export default NoMatch;
