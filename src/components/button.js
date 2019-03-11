import React,{Component} from 'react';

class Buttons extends Component {

  render(){
    return(
      <input onClick={(e) => this.props.click(e.target.value)} value={this.props.value} type="button" className="button"/>
    )
  }
}

export default Buttons;