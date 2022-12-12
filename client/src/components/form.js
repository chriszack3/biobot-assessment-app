import React, { useState, useEffect } from "react";

const Form = () => {
    const [data, setData] = useState({});
    const [kit, setKit] = useState({});
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
        {
            kit?.label_id && <div>Label Id: {kit.label_id}, Shipping Tracking Code: {kit.shipping_tracking_code}</div>
        }
        <input onChange={handleOnChange}></input>
        {
            data?.length > 0 && data.map((kit, index) => {
              const handleOnClick = () => {
                console.log(kit)
                setKit(kit)
              }
                return <div onClick={() => handleOnClick(kit)} key={index}>{kit.label_id}</div>
            })
        }
      </div>
    );
  }
  
  export default Form;