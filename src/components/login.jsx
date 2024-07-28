import { useState , useRef, useEffect } from "react";
import "./components.scss";

import { Link , useNavigate } from "react-router-dom";
import { ToastContainer, toast , Bounce } from 'react-toastify';

function Login() {
    const UserName = useRef();
    const Password = useRef();
    const Age = useRef();
    const Grid = useRef();
    const [Data , setData]  = useState()
    function handel(){
      if(UserName.current.value !== "" && Password.current.value !== ""){
        try{
          fetch (`https://668b3e9e0b61b8d23b08d551.mockapi.io/api/users?username=${UserName.current.value}&password=${Password.current.value}` , {
            method : "POST"
          }).then(res => res)
          .then((output)=>{
            if(output.statusText === "Created"){
              toast.success( <h1>ورود ...</h1>, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                onClose : () => navigate("/")
                });
                
            }
          })
          localStorage.setItem("username" , UserName.current.value)
          localStorage.setItem("password" , Password.current.value)
        }catch(error){
          console.log(error);
        }
      }
    }
    const navigate = useNavigate()
  return (
    <div className="home2">
      <ToastContainer/>
    <label htmlFor="">UserName</label>
    <input ref={UserName} type="text" />
    
    <label htmlFor="">Password</label>
    <input ref={Password} type="text" />
    
    <br />
    <button onClick={handel}>Login</button>
    </div>
  );
}

export default Login;
