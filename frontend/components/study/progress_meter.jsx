import React from 'react';

class ProgressMeter extends React.Component {

  constructor(props){
    super(props);
    // this.state = {
    //   chevArray: Array.from({ length: 10 }, 
    //     (item, index) => (<li key={`chev${index}`} className="chevron"></li>))
    // }
  }

  // componentDidUpdate(prevProps){
  //   
  //   if(this.props.progressBar !== prevProps.progressBar ){
  //     
  //   }
  // }

  render(){
    
    
    let pbar = this.props.progressBar;

    let chevArray = Array.from({ length: 10 },
        (item, index) => (<li key={`chev${index}`} 
        className={`chevron score-${pbar[index].score}`}></li>))

    return (
      <div className="chevron-container">
        <ul className="chevron-ul">
          {chevArray}
        </ul>

      </div>
    )
  }
}

export default ProgressMeter;