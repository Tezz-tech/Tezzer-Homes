import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import DevesLand from "./Pages/DevesLand";
import DevelopersDesc from "./Pages/DevelopersDesc";
import Navigation from "./Common/Navigation";
import Footer from "./Common/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/DevelopersPage" element={<DevesLand />} />
          <Route path="/DevelopersDescription" element={<DevelopersDesc />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
