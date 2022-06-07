import React from "react";

export default function Counter() {
    const [count, setCount] = React.useState(0);
  
    function increment() {
    setCount(count + 1);
    let present_count=count+1
  
    console.log(present_count)
    if(present_count%2===0){
      document.getElementById("para").style.color="green"
    }
    else{
      document.getElementById("para").style.color="red"
    }
     
    }
  
    function decrement() {
      setCount(count - 1);
      let p_c=count-1
      if(p_c%2===0){
       document.getElementById("para").style.color="green"
      }
      else{
        document.getElementById("para").style.color="red"
      }
    }
  
    function double() {
      setCount(count * 2);
      let p_c=count*2
      if(p_c%2===0){
        document.getElementById("para").style.color="green"
      }
      else{
        document.getElementById("para").style.color="red"
      }
    }
  
    return (
      <div className="counter">
        {/* <h1>Counter</h1> */}
        <h1 id="para">counter:{count}</h1>
  
        <button onClick={increment}>Click Here To Increase by 1</button>
        <br></br>
        <br></br>
        <button onClick={decrement}>Click Here To Decrease by 1</button>
        <br></br>
        <br></br>
        <button onClick={double}>Double The Count</button>
      </div>
    );
  }