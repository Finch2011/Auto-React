import { useState } from "react";
import "./home.scss";
import { ToastContainer, toast , Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import Nav from '../layouts/navbar'

function Home() {
  
  return (
    <>
    <Nav/>
    <section className="home">
      <div className="welcome-message">
        <h1> Welcome To Authenticate </h1>
        <p>
          This project exist to achive the simple task of Registering a "user" &
          Loging in the "user".
        </p>
        
        
      </div>
    </section>
    </>
  );
}

export default Home;
