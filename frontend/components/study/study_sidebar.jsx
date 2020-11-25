import React from 'react';
import DeckInfo from './deck_info.jsx';
import ProgressMeter from './progress_meter.jsx';

const StudySideBar = (props) => {

  return (
    <div className="study-sidebar">
      <DeckInfo />
      <ProgressMeter />

    </div>
  )
}

export default StudySideBar;
