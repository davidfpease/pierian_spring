import React, { Component } from 'react';
import CircleProgressSideBar from './circle_progress_sidebar';
import _ from 'lodash';


export default class ConfidenceChart extends Component {

  constructor(props){
    super(props);
    // this.state ={
    //   scores: {
    //     0: 0,
    //     1: 0,
    //     2: 0,
    //     3: 0,
    //     4: 0,
    //     5: 0,
    //   }
    // }

    this.total_cards = props.cards.length;
  }


  render() {
    //calculate percents for widths on each bar
    let percents = [];
    [0,1,2,3,4,5].forEach(key =>{
      percents.push((this.props.scores[key]/this.total_cards)*100)
    });
    debugger;


    return (
      <div>
        <CircleProgressSideBar mastery={this.props.mastery} scores={this.props.scores}
          totalCards={this.total_cards}/>
        <div className="confidence-ratings">
          <h4 className="confidence-ratings-heading">Confidence Ratings</h4>
          <ul className="confidence-ratings-bars">
            <li className="confidence-ratings-bar level-0">
              <div className="level-label">New</div>
              <div className="base-bar">
                <div className="count-bar level0" style={{width: `${percents[0]}%`}}></div>
              </div>
              <div className="level-count">{this.props.scores[0]}</div>
            </li>
            <li className="confidence-ratings-bar level-1">
              <div className="level-label">1</div>
              <div className="base-bar">
                <div className="count-bar level1" style={{ width: `${percents[1]}%` }}></div>
              </div>
              <div className="level-count">{this.props.scores[1]}</div>
            </li>
            <li className="confidence-ratings-bar level-2">
              <div className="level-label">2</div>
              <div className="base-bar">
                <div className="count-bar level2" style={{ width: `${percents[2]}%` }}></div>
              </div>
              <div className="level-count">{this.props.scores[2]}</div>
            </li>
            <li className="confidence-ratings-bar level-3">
              <div className="level-label">3</div>
              <div className="base-bar">
                <div className="count-bar level3" style={{ width: `${percents[3]}%` }}></div>
              </div>
              <div className="level-count">{this.props.scores[3]}</div>
            </li>
            <li className="confidence-ratings-bar level-4">
              <div className="level-label">4</div>
              <div className="base-bar">
                <div className="count-bar level4" style={{ width: `${percents[4]}%` }}></div>
              </div>
              <div className="level-count">{this.props.scores[4]}</div>
            </li>
            <li className="confidence-ratings-bar level-5">
              <div className="level-label">5</div>
              <div className="base-bar">
                <div className="count-bar level5" style={{ width: `${percents[5]}%` }}></div>
              </div>
              <div className="level-count">{this.props.scores[5]}</div>
            </li>
          </ul>

        </div>
      </div>

    )
  }
}
