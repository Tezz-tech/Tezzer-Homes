import AgentDesc from './Pages/AgentDesc';
import LocalityDesc from './Pages/LocalityDesc';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
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
                <Route path='/' element={<Home/>}/>
                <Route path='/DevelopersPage' element={<DevesLand/>}/>
                <Route path='/DevelopersDescription' element={<DevelopersDesc/>}/>
                <Route path='/LocalityDescription' element={<LocalityDesc/>}/>
                <Route path= '/AgentDescription' element= {<AgentDesc />} />
                <Route path= '/Projects' element= {<Projects />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/DevelopersDescription" element={<DevelopersDesc />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
