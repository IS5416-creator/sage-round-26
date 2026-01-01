import { Routes, Route } from "react-router-dom";
import Landing from "./Components/Landing";
import Portfolio from "./Components/Portfolio";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  );
}

export default App;
