import React,{Component} from 'react';
import State from './state'
class ClassCom extends Component{
    constructor(){
        super()
        // this.state = {
        //     value : "daniyal"
        // }

        this.state = {
            value: '',
            dynamic: 's',
            counter: 0
        }

        this.handledata = this.handledata.bind(this);
        this.submitdata = this.submitdata.bind(this);
        this.count = this.count.bind(this);
// console.log(this.handleChange)
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
    }
    // handleChange(event) {
    //     this.setState({value: event.target.value});
    //   }
    
    //   handleSubmit(event) {
    //     alert('A name was submitted: ' + this.state.value);
    //     event.preventDefault();
    //   }

    handledata(event) {
        this.setState({
            value: event.target.value})
    }
    
      submitdata(event) {
          this.setState({dynamic: this.state.value})
        //   console.log(event)
        event.preventDefault();
      }
       abc = 0;
      count(){
          this.setState({
            counter : ++this.abc 
          })
      }
    render(){
        return (<div>
            <form onSubmit={this.submitdata}>
            <input type="text" value={this.state.value} onChange={this.handledata}/>
            <input type="submit" value="submit" />
            <h1>{this.state.dynamic}</h1>
            </form>
            <button onClick={this.count}>counter</button>
        <h1>{this.state.counter}</h1>
            <State value={this.state.value}/> </div>)
    }
}

export default ClassCom