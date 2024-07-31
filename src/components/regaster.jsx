import { useState , useRef , useEffect } from "react";
import "../pages/home.scss";
import { ToastContainer, toast , Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Link , useNavigate } from "react-router-dom";


function Regaster() {
    const UserName = useRef();
    const Password = useRef();
    const Age = useRef();
    const Grid = useRef();
    const navigate = useNavigate()
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
        }).then(res => res)
        .then((output)=>{
          if(output.statusText === "Created"){
            toast.success( <p>درحال ساخت  حساب کاربری ...</p>, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Bounce,
              onClose : () => navigate("/Login")
              });
              
          }
        })
    }
  return (
    <section className="home2">
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
    <ToastContainer/>
    <p>آیا حساب کاربری دارید ؟ <Link to={"/Login"}><span>ورود به حساب</span> </Link></p>
    </section>
  );
}

export default Regaster;
