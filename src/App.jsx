import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Search } from "lucide";
import Recipe from "./Components/recipe";
import SearchBar from "./Components/SearchBar";

function App() {
  const [count, setCount] = useState(0);



  return (
    <>

    <SearchBar/>
    
  
    </>
  );
}

export default App;
