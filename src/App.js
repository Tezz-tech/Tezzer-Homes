import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import DevesLand from './Pages/DevesLand';
import DevelopersDesc from './Pages/DevelopersDesc'
import AgentDesc from './Pages/AgentDesc';
import LocalityDesc from './Pages/LocalityDesc';
import About from "./Pages/About";
// import Navigation from "./Common/Navigation";
// import Footer from "./Common/Footer";
import AdminDashboard from './Pages/Admin';
import CreateProperty from './Pages/CreateProperty';
import Propertypage from './Pages/PropertyPage';
import AdminLogin from './Pages/AdminLogin';
import Agents from './Pages/AgentDashboard';
import AdminLanding from './Pages/adminlandpage';
import AdminUsers from './Pages/AdminUsers';

import Projects from "./Pages/Projects";
import CreatorProperty from './Pages/CreatorProperty';
import AgentLogin from './Pages/AgentLogin';
import AgentAdmin from './Pages/AgentAdmin';
import AgentUsers from './Pages/AgentUsers';
import AgentProperty from './Pages/AgentProperty';
import AgentCreateProperty from './Pages/AgentCreateProperty';
import CreateAgent from './Pages/Create-Agent';
import CreateUser from './Pages/createUser';
import CreateAgentUser from './Pages/CreateAgentUsers';
// import Navigation from "./Common/Navigation";
// import Footer from "./Common/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Navigation /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/DevelopersPage' element={<DevesLand />} />
          <Route path='/DevelopersDescription' element={<DevelopersDesc />} />
          {/* <Navigation /> */}
          <Route path='/' element={<Home />} />
          <Route path='/DevelopersPage' element={<DevesLand />} />
          <Route path='/DevelopersDescription' element={<DevelopersDesc />} />
          <Route path='/LocalityDescription' element={<LocalityDesc />} />
          <Route path='/AgentDescription' element={<AgentDesc />} />
          <Route path="/about-us" element={<About />} />\
          <Route path="/AdminDashboard" element={<AdminDashboard />}></Route>
          <Route path="/CreateProperty" element={<CreateProperty />}></Route>
          <Route path="/Propertypage" element={<Propertypage />}></Route>
          <Route path="/AdminLogin" element={<AdminLogin />}></Route>
          <Route path="/Agents" element={<Agents />} />
          <Route path='/create-agent' element= {<CreateAgent />}></Route>
          <Route path="/AdminLandingpage" element={<AdminLanding />} />
          <Route path="/users" element={<AdminUsers />} />
          <Route path='/CreateUser' element={<CreateUser />}></Route>
          {/* <Footer /> */}
          <Route path='/Projects' element={<Projects />} />
          <Route path='/CreatorProperty' element={<CreatorProperty />}></Route>
          <Route path='/AgentLogin' element={<AgentLogin />}></Route>
          <Route path='/AgentAdmin' element={<AgentAdmin />}></Route>
          <Route path='/AgentUsers' element={<AgentUsers />}></Route>
          <Route path='/create-Agent-users' element={<CreateAgentUser />}></Route>
          <Route path='/AgentProperty' element={<AgentProperty />}></Route>
          <Route path='/AgentCreateProperty' element={<AgentCreateProperty />}></Route>
          {/* <Route path='/AgentCreateUser' element={<AgentCreateUser />}></Route> */}
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div >
  );
}

export default App;
