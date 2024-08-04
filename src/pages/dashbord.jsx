import { useEffect } from "react"
import { Link , useNavigate } from "react-router-dom"
import { ToastContainer, toast , Bounce } from 'react-toastify';
import Nav from '../layouts/navbar'


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
    <Nav/>
    <ToastContainer/>
    <div className="main-D">
    <h2>id : {Math.floor(Math.random()*1000000)}</h2>
    <h2> name : {localStorage.getItem("username")}</h2>
    <h2>password : {localStorage.getItem("password")}</h2>
    <br />
    <hr />
    <br />
    <h2>bio : Hi I`m {localStorage.getItem("username")} I like car BMW</h2>
    <button onClick={()=>{
      localStorage.removeItem("username")
      localStorage.removeItem("password")
      navigate("/")
    } } className="LogOut">Log Out</button>
    </div>
    </>
    )
}
export default Dashbord