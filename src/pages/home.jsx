import { useState } from "react";
import "./home.scss";
import { ToastContainer, toast , Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

function Home() {
  const [counter , setCounter] = useState(0);
  
  return (
    <section className="home">
      <h1>{counter}</h1>
      <button onClick={()=> setCounter(prevState => prevState + 1 )}>+</button>
    </section>
  );
}

export default Home;
