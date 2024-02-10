import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import DevesLand from './Pages/DevesLand';
import DevelopersDesc from './Pages/DevelopersDesc';
import Navigation from './Common/Navigation';
import Footer from './Common/Footer';
import AdminDashboard from './Pages/Admin';
import CreateProperty from './Pages/CreateProperty';
import Propertypage from './Pages/PropertyPage';
import AdminLogin from './Pages/AdminLogin';
import Agents from './Pages/AgentDashboard';
import AdminLanding from './Pages/adminlandpage';
import AdminUsers from './Pages/AdminUsers';
import LocalityDesc from './Pages/LocalityDesc';
import AgentDesc from './Pages/AgentDesc';
import Projects from './Pages/Projects';
import CreatorProperty from './Pages/CreatorProperty';
import AgentLogin from './Pages/AgentLogin';
import AgentAdmin from './Pages/AgentAdmin';
import AgentUsers from './Pages/AgentUsers';
import AgentProperty from './Pages/AgentProperty';
import AgentCreateProperty from './Pages/AgentCreateProperty';
import CreateAgent from './Pages/Create-Agent';
import CreateUser from './Pages/createUser';
import CreateAgentUser from './Pages/CreateAgentUsers';

// Layout component with navigation and footer
const Layout = ({ children }) => (
  <div>
    <Navigation />
    {children}
    <Footer />
  </div>
);

function App() {
  const btnColor= {
    color: "white",
    border: "none",
    backgroundColor: "red"
  }
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
          <Route path='/CreateUser' element={<CreateUser Color={btnColor} />}></Route>
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/DevelopersPage" element={<Layout><DevesLand /></Layout>} />
        <Route path="/DevelopersDescription" element={<Layout><DevelopersDesc /></Layout>} />
        <Route path="/LocalityDescription" element={<Layout><LocalityDesc /></Layout>} />
        <Route path="/AgentDescription" element={<Layout><AgentDesc /></Layout>} />
        <Route path="/about-us" element={<About />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/CreateProperty" element={<CreateProperty />} />
        <Route path="/Propertypage" element={<Propertypage />} />
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/Agents" element={<Agents />} />
        <Route path="/AdminLandingpage" element={<AdminLanding />} />
        <Route path="/users" element={<AdminUsers />} />
        <Route path="/CreateUser" element={<CreateUser />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/CreatorProperty" element={<CreatorProperty />} />
        <Route path="/AgentLogin" element={<AgentLogin />} />
        <Route path="/AgentAdmin" element={<AgentAdmin />} />
        <Route path="/AgentUsers" element={<AgentUsers />} />
        <Route path="/create-agent" element={<CreateAgent />} />
        <Route path="/AgentProperty" element={<AgentProperty />} />
        <Route path="/AgentCreateProperty" element={<AgentCreateProperty />} />
        <Route path="/create-Agent-users" element={<CreateAgentUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
