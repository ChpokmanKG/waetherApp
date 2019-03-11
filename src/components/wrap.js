import React,{Component} from 'react';
import Buttons from './button';

function Operation(props){
  return (
    <div className="operation">
      {props.inner}
    </div>
  )
}

class Wrap extends Component {

  state = {
    numbers: [1,2,3,4,5,6,7,8,9,0],
    operation: ['+','-','*','/','=','.','(',')'],
    func: ['C','CE'],
    result: ''
  }

  handleChange(e) {
    this.setState({
      result: this.state.result + e
    })

    if(e === '='){
      this.calculate();
    }
  }

  funcBut(e){
    if(e === 'CE'){
      this.backSpace();
    }
    else {
      this.delete();
    }
  }

  backSpace(){
    this.setState({
      result: this.state.result.slice(0,-1)
    })
  }

  delete(){
    this.setState({
      result: ''
    })
  }

  calculate(){
    // eslint-disable-next-line no-eval
    const value = eval(this.state.result)
    this.setState({
      result: value
    })
  }

  render(){

    const numbers = this.state.numbers.map((item,key) => {
      return <Buttons click={(e) => this.handleChange(e)} value={item} key={key}/> 
    })

    const operation = this.state.operation.map((item,key) => {
      return <Buttons click={(e) => this.handleChange(e)} value={item} key={key}/>
    })

    const func = this.state.func.map((item,key) => {
      return <Buttons click={(e) => this.funcBut(e)} value={item} key={key}/>
    })

    return (
      <div className="wrap">
        <h1>Chpokman calc</h1>
          <input placeholder="0" disabled={true} className="result" value={this.state.result}/>
            <div>{numbers}</div>
            <Operation inner={operation}/>
            <Operation inner={func} />
      </div>
    )
  }
}

export default Wrap;