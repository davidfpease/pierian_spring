import React, { Component } from 'react';
import { connect } from 'react-redux';



class CircleProgressSideBar extends Component {
  constructor(props){
    super(props);
  }



  render() {

    let percents = Object.keys(this.props.scores).map(key =>{
      return ((this.props.scores[key]/this.props.totalCards));
    })
    
    ;
    const mastery = this.props.mastery / 100;
    const size = 500;
    const center = size / 2;
    const strokeWidth = 35.5;
    const radius = size / 2 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;
    const circleBaseStroke = '#1E2633';
    const circleOneStroke = '#AA007f';
    const circleTwoStroke = '#ff8a47';
    const circleThreeStroke = '#fd0';
    const circleFourStroke = '#7fae2e';
    const circleFiveStroke = '#00a8d7';
    const offset0 = 0;
    const offset5 = (1 - mastery) * circumference;
    const offset4 = offset5 + percents[5] * mastery * circumference;
    const offset3 = offset4 + percents[4] * mastery * circumference;
    const offset2 = offset3 + percents[3] * mastery * circumference;
    const offset1 = offset2 + percents[2] * mastery * circumference;

    return (
      <div>
        <div className="sidebar-mastery-circle">
          <div className="sidebar-mastery-value">
            <div className="value-data sidebar">{this.props.mastery}%</div>
            <div className="value-label sidebar">Mastery</div>
          </div>
          <svg className="svg-circles" viewBox="0 0 500 500" width="100%" height="100%">
            <circle
              className="svg-circle-bg"
              stroke={circleBaseStroke}
              cx={center}
              cy={center}
              r={radius}
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={offset0}
            />
            <circle
              className="svg-circle"
              stroke={ circleFiveStroke }
              cx={ center }
              cy={ center }
              r={ radius }
              strokeWidth={ strokeWidth }
              strokeDasharray={ circumference }
              strokeDashoffset={ offset5 }
            />
              <circle
                className="svg-circle"
                stroke={ circleFourStroke }
                cx={ center }
                cy={ center }
                r={ radius }
                strokeWidth={ strokeWidth }
                strokeDasharray={ circumference }
                strokeDashoffset={ offset4 }
              />
              <circle
                className="svg-circle"
                stroke={ circleThreeStroke }
                cx={ center }
                cy={ center }
                r={ radius }
                strokeWidth={ strokeWidth }
                strokeDasharray={ circumference }
                strokeDashoffset={ offset3 }
              />
            <circle
              className="svg-circle"
              stroke={ circleTwoStroke }
              cx={ center }
              cy={ center }
              r={ radius }
              strokeWidth={ strokeWidth }
              strokeDasharray={ circumference }
              strokeDashoffset={ offset2 }
            />
            <circle
              className="svg-circle"
              stroke={ circleOneStroke }
              cx={ center }
              cy={ center }
              r={ radius }
              strokeWidth={ strokeWidth }
              strokeDasharray={ circumference }
              strokeDashoffset={ offset1 }
            />
          </svg>
        </div>
      </div>
              
    )
  }
}

export default CircleProgressSideBar;
