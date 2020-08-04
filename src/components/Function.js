// import React,{useState} from 'react';
// function Function(){
    //     return <h1>hello world</h1>
    // }
    
    // export const Functions = () => <h1>hello world</h1>
    import React, { useState,useEffect } from 'react';
    // import ClassCom from './Class'

const Example = () => {
  useEffect(() => {
    console.log('0-0-0-0')
  })
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
// console.log(count,setCount)
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
export default Example