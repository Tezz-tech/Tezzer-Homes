import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import DevesLand from "./Pages/DevesLand";
import DevelopersDesc from "./Pages/DevelopersDesc";
import Navigation from "./Common/Navigation";
import Footer from "./Common/Footer";
import AdminDashboard from "./Pages/Admin";
import CreateProperty from "./Pages/CreateProperty";
import Propertypage from "./Pages/PropertyPage";
import AdminLogin from "./Pages/AdminLogin";
import Agents from "./Pages/AgentDashboard";
import AdminLanding from "./Pages/adminlandpage";
import AdminUsers from "./Pages/AdminUsers";
import LocalityDesc from "./Pages/LocalityDesc";
import AgentDesc from "./Pages/AgentDesc";
import Projects from "./Pages/Projects";
import Locality from "./Pages/Locality";
import Whishlist from "./Pages/Wishlist";

// Layout component with navigation and footer
const Layout = ({ children }) => (
  <div>
    <Navigation />
    {children}
    <Footer />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Layout><Home /></Layout>}
        />
        <Route
          path="/DevelopersPage"
          element={<Layout><DevesLand /></Layout>}
        />
        <Route
          path="/DevelopersDescription"
          element={<Layout><DevelopersDesc /></Layout>}
        />
        <Route
          path="/LocalityDescription"
          element={<Layout><LocalityDesc /></Layout>}
        />
        <Route
          path="/AgentDescription"
          element={<Layout><AgentDesc /></Layout>}
        />
        <Route path="/about-us" element={<About />} />
        <Route
          path="/AdminDashboard"
          element={<AdminDashboard />}
        />
        <Route
          path="/CreateProperty"
          element={<CreateProperty />}
        />
        <Route
          path="/Propertypage"
          element={<Propertypage />}
        />
        <Route
          path="/AdminLogin"
          element={<AdminLogin />}
        />
        <Route
          path="/Agents"
          element={<Agents />}
        />
        <Route
          path="/AdminLandingpage"
          element={<AdminLanding />}
        />
        <Route
          path="/users"
          element={<AdminUsers />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
