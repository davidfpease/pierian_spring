import React, { Component } from 'react';
import CircleProgress from './circle_progress';

export default class ConfidenceChart extends Component {

  constructor(props){
    super(props);

  }

  render() {

    //calculate percents for widths on each bar
    return (
      <div>
        <CircleProgress mastery={this.props.mastery} originalCards={this.props.cards}/>
        <div className="confidence-ratings">
          <h4 class="confidence-ratings-heading">Confidence Ratings</h4>
          <ul class="confidence-ratings-bars">
            <li class="confidence-ratings-bar level-0">
              <div class="level-label">New</div>
              <div class="base-bar">
                <div class="count-bar" title="0 unrated cards" style="width: 0%;"></div>
              </div>
              <div class="level-count">0</div>
            </li>
            <li class="confidence-ratings-bar level-1">
              <div class="level-label">1</div>
              <div class="base-bar">
                <div class="count-bar" title="4 cards rated as 1" style="width: 33.3333%;"></div>
              </div>
              <div class="level-count">4</div>
            </li>
            <li class="confidence-ratings-bar level-2">
              <div class="level-label">2</div>
              <div class="base-bar">
                <div class="count-bar" title="0 cards rated as 2" style="width: 0%;"></div>
              </div>
              <div class="level-count">0</div>
            </li>
            <li class="confidence-ratings-bar level-3">
              <div class="level-label">3</div>
              <div class="base-bar">
                <div class="count-bar" title="0 cards rated as 3" style="width: 0%;"></div>
              </div>
              <div class="level-count">0</div>
            </li>
            <li class="confidence-ratings-bar level-4">
              <div class="level-label">4</div>
              <div class="base-bar">
                <div class="count-bar" title="0 cards rated as 4" style="width: 0%;"></div>
              </div>
              <div class="level-count">0</div>
            </li>
            <li class="confidence-ratings-bar level-5">
              <div class="level-label">5</div>
              <div class="base-bar">
                <div class="count-bar" title="8 cards rated as 5" style="width: 66.6667%;"></div>
              </div>
              <div class="level-count">8</div>
            </li>
          </ul>

        </div>
      </div>

    )
  }
}
