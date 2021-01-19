import React from 'react';
import DeckInfo from './deck_info.jsx';
import ProgressMeter from './progress_meter.jsx';
import ConfidenceChart from './confidence_chart';

class StudySideBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      display: "this round",
    }

    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick(e){
    e.stopPropagation();
    if (e.target.innerText === "This Round"){
      this.setState({
        display: "this round",
      })
    } else {
      this.setState({
        display: "overall",
      })
    }
    debugger;

  }

  render() {
    
    return (
      <div className="study-sidebar">
        <DeckInfo deck={this.props.deck}/>
        <div class="second-row">
          { this.state.display === "this round" ?(
            <ul class="tab-switcher" onClick={this.handleTabClick}>
              <li class="tab-item-thisRound is-selected">
                <div class="tab-label">This Round</div>
              </li>
              <li class="tab-item-overall">
                <div class="tab-label">Overall</div>
              </li>
            </ul>
          ) : (
            <ul class="tab-switcher">
              <li class="tab-item-thisRound">
                <div class="tab-label">This Round</div>
              </li>
              <li class="tab-item-overall is-selected">
                <div class="tab-label">Overall</div>
              </li>
            </ul>
          )}
        </div>





        {this.state.display === "this round" ? (   
          <div className="sidebar-sections">
            <ProgressMeter progressBar={this.props.progressBar}/>
          </div>
        ) : (
          <div className="sidebar-sections">
            <h1>{this.props.mastery}% Mastery</h1>
            <ConfidenceChart progressBar={this.props.progressBar} />
          </div>
        )}
      </div>
    )
  }
}

export default StudySideBar;
