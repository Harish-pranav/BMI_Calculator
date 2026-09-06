import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Calculator from "./calculator";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;