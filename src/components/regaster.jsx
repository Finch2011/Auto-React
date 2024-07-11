import { useState , useRef } from "react";
import "../pages/home.scss";

import { Link } from "react-router-dom";

function Regaster() {
    const UserName = useRef();
    const Password = useRef();
    const Age = useRef();
    const Grid = useRef();
    function handel(){

        fetch ("https://668b3e9e0b61b8d23b08d551.mockapi.io/api/users" , {
            method : 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(
                {
                    "username" : UserName.current.value ,
                    "password" : Password.current.value ,
                    "age" : Age.current.value , 
                    "grid" : Grid.current.value
                }
            )
        }).then(res => res.json())
        .then(console.log())
    }
  return (
    <section className="home">
    <label htmlFor="">UserName</label>
    <input ref={UserName} type="text" />
    
    <label htmlFor="">Password</label>
    <input ref={Password} type="text" />
    
    <label htmlFor="">Age</label>
    <input ref={Age} type="text" />
    
    <label htmlFor="">Graid</label>
    <input ref={Grid} type="text" />
    <br />
    <button onClick={handel}>Regaster</button>
    </section>
  );
}

export default Regaster;