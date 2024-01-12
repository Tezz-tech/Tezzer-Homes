import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import DevesLand from './Pages/DevesLand';
import DevelopersDesc from './Pages/DevelopersDesc'
import AgentDesc from './Pages/AgentDesc';
import LocalityDesc from './Pages/LocalityDesc';

function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/DevelopersPage' element={<DevesLand/>}/>
                <Route path='/DevelopersDescription' element={<DevelopersDesc/>}/>
                <Route path='/LocalityDescription' element={<LocalityDesc/>}/>
                <Route path= '/AgentDescription' element= {<AgentDesc />} />
            </Routes >
        </BrowserRouter>
    </div>
  );
}

export default App;
