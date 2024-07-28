import { useState , createContext } from "react";
import "./home.scss";

    export const CounterContext = createContext();

const CounterProvider = ({children}) => {
   const [counter , setCounter] = useState();
  return (
    <CounterContext.Provider value={{counter , setCounter}}>
      {children}
    </CounterContext.Provider>
  );
}

export default CounterProvider;
