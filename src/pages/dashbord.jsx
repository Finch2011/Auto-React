import { useEffect } from "react"
import { Link , useNavigate } from "react-router-dom"
import { ToastContainer, toast , Bounce } from 'react-toastify';

function Dashbord() {
    const navigate = useNavigate()
    useEffect(()=>{
        if(localStorage.getItem("username") === null && localStorage.getItem("password") === null){
            toast.error( 
              <>
            <p>ابتدا وارد شوید!</p>
            <Link to={"/Login"}><button className="Login-D-btn">Login</button></Link>
              </>
            , {
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
    return (
    <>
    <ToastContainer/>
    <h1> name : {localStorage.getItem("username")}</h1>
    <h1>password : {localStorage.getItem("password")}</h1>
    </>
    )
}
export default Dashbord