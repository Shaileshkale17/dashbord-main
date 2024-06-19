import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TopNavber from "./components/TopNavber/TopNavber";
import Navber from "./components/Navber/Navber";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-row ">
      <div className="w-[15%]">
        <Navber />
      </div>
      <div className="w-[85%]">
        <TopNavber />
      </div>
    </div>
  );
}

export default App;
