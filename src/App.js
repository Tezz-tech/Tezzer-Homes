import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import DevesLand from './Pages/DevesLand';
import DevelopersDesc from './Pages/DevelopersDesc';
import LocalLand from './Pages/LocalLand';
import AgentArchive from './Pages/ArgentArchive';

function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/DevelopersPage' element={<DevesLand/>}/>
                <Route path='/DevelopersDescription' element={<DevelopersDesc/>}/>
                <Route path='/LocalityPage' element={<LocalLand/>}/>
                <Route path='/AgentArchivePage' element={<AgentArchive/>}/>
                
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
