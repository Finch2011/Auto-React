import { useState , useRef, useEffect } from "react";
import "./components.scss";

import { Link , useNavigate } from "react-router-dom";
import { ToastContainer, toast , Bounce } from 'react-toastify';
import Nav from '../layouts/navbar'

function Login() {
    const UserName = useRef();
    const Password = useRef();
    const Age = useRef();
    const Grid = useRef();
    const [Data , setData]  = useState()
    function handel(){
      if(UserName.current.value !== "" && Password.current.value !== ""){
        try{
          fetch (`https://66ab8e13636a4840d7cb29a3.mockapi.io/users?username=${UserName.current.value}&password=${Password.current.value}` , {
            method : "POST"
          }).then(res => res)
          .then((output)=>{
            if(output.statusText === "Created"){
              toast.success( <p>ورود ...</p>, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                onClose : () => navigate("/dashboard")
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
    <>
    <Nav/>
    <div className="main-Login">
    <div className="home2">
      <ToastContainer/>
    <label htmlFor="">UserName</label>
    <input ref={UserName} type="text" />
    
    <label htmlFor="">Password</label>
    <input ref={Password} type="text" />
    
    <br />
    <button onClick={handel}>Login</button>
    <p>آیا حساب کاربری ندارید ؟ <Link to={"/regaster"}><span>ساخت حساب</span> </Link></p>
    </div>
    <img src="https://img.freepik.com/premium-vector/survey-research-illustration_90558-16.jpg" alt="w" />
</div>
    </>
  );
}

export default Login;
