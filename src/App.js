import React from 'react';
import './App.css';
import { Component } from 'react';
import Abcd  from './components/Function'
import ClassCom from './components/Class'
// import Hello from './components/hello'
class App extends Component {
  constructor(props){  
    super(props);
    console.log(props)  
} 
  render(){
    return  <div className="App">
     {/* <Abcd name="daniyal" abc="bye"/> */}
     {/* <Hello/> */}
     {/* <State /> */}
     <ClassCom />
     <Abcd/>
     {/* <Abcd name="daniyal" abc="bye"><h1>dsadsdsad dsad samd </h1></Abcd> 
     <Abcd name="noman" abc="coming"/> 
     <Abcd name="fasih" abc="tata"/>  */}
  </div>
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
