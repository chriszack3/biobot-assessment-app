import React, { useState, useEffect } from "react";

const Form = () => {
    const [data, setData] = useState({});
    const handleOnChange = async (e) => {
      
      fetch(`/api/${e?.target?.value}`)
        .then((res) => {
            console.log(res)
            return res.json()
        })
        .then((data) => {
            console.log(data)
            setData(data)
        })
        .catch((err) => console.log(err));
    }
  
    return (
      <div className="App">
     
        <input onChange={handleOnChange}></input>
        {
            data?.length > 0 && data.map(({label_id}, index) => {
                return <div key={index}>{label_id}</div>
            })
        }
      </div>
    );
  }
  
  export default Form;