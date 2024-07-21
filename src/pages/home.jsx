import { useState } from "react";
import "./home.scss";
import { ToastContainer, toast , Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

function Home() {
  const playing = () =>{
    toast.info( <h1>Loading ...</h1>, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
  }
  return (
    <section className="home">
      <div className="welcome-message">
        <h1> Welcome To Authenticate </h1>
        <p>
          This project exist to achive the simple task of Registering a "user" &
          Loging in the "user".
        </p>
        <Link to={'/dashboard'} > Dashboard <div className="line"> </div> </Link>
        <ToastContainer/>
        <Link to={'/regaster'}> Regaster <div className="line"> </div> </Link>
        
      </div>
    </section>
  );
}

export default Home;
