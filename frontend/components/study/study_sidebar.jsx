import React from 'react';
import DeckInfo from './deck_info.jsx';
import ProgressMeter from './progress_meter.jsx';

class StudySideBar extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    
    return (
      <div className="study-sidebar">
        <h1>{this.props.mastery}% Mastery</h1>
        <DeckInfo />
        <ProgressMeter progressBar={this.props.progressBar}/>

      </div>
    )
  }
}

export default StudySideBar;
