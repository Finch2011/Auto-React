import { useState , useRef } from "react";
import "./components.scss";

import { Link } from "react-router-dom";

function Login() {
    const UserName = useRef();
    const Password = useRef();
    const Age = useRef();
    const Grid = useRef();
    const [Data , setData]  = useState()
    function handel(){

        fetch (`https://668b3e9e0b61b8d23b08d551.mockapi.io/api/users?username=${UserName.current.value}&password=${Password.current.value}` , {
        }).then(res => res.json())
        .then((output)=> console.log(output))
    }
  return (
    <div className="home">
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
    </div>
  );
}

export default Login;
