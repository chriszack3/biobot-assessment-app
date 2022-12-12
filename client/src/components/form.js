import React, { useState, useEffect } from "react";

const Form = () => {
    const [data, setData] = useState(null);
    const handleOnChange = async (e) => {
      
      fetch(`/api/${e?.target?.value}`)
        .then((res) => res.json())
        .then((data) => {
            setData(data);
            console.log(data);
        });

    }
  
    return (
      <div className="App">
     
        <input onChange={handleOnChange}></input>
      </div>
    );
  }
  
  export default Form;