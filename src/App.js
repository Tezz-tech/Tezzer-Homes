
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import DevesLand from './Pages/DevesLand';
import DevelopersDesc from './Pages/DevelopersDesc'
import AgentDesc from './Pages/AgentDesc';
import LocalityDesc from './Pages/LocalityDesc';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import DevesLand from "./Pages/DevesLand";
import DevelopersDesc from "./Pages/DevelopersDesc";
import Navigation from "./Common/Navigation";
// import Footer from "./Common/Footer";
import AdminDashboard from './Pages/Admin';
import CreateProperty from './Pages/CreateProperty';
import Propertypage from './Pages/PropertyPage';
import AdminLogin from './Pages/AdminLogin';
import Agents from './Pages/AgentDashboard';
import AdminLanding from './Pages/adminlandpage';
import AdminUsers from './Pages/AdminUsers';

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
            </Routes>
        </BrowserRouter>
      <BrowserRouter>
        {/* <Navigation /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/DevelopersPage' element={<DevesLand />} />
          <Route path='/DevelopersDescription' element={<DevelopersDesc />} />
          <Route path='/LocalityDescription' element={<LocalityDesc />} />
          <Route path='/AgentDescription' element={<AgentDesc />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/DevelopersDescription" element={<DevelopersDesc />} />
          <Route path="/AdminDashboard" element= {<AdminDashboard />}></Route>
          <Route path="/CreateProperty" element= {<CreateProperty />}></Route>
          <Route path="/Propertypage" element={<Propertypage />}></Route>
          <Route path="/AdminLogin" element={<AdminLogin />}></Route>
          <Route path="/Agents" element={<Agents />} />
          <Route path= "/AdminLandingpage" element={<AdminLanding />} />
          <Route path="/users" element={<AdminUsers />} />
        </Routes>
        {/* <Footer /> */}
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
