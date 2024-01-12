import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import DevesLand from './Pages/DevesLand';
import DevelopersDesc from './Pages/DevelopersDesc'
import { LocalityDesc } from './Pages/LocalityDesc';

function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/DevelopersPage' element={<DevesLand/>}/>
                <Route path='/DevelopersDescription' element={<DevelopersDesc/>}/>
                <Route path='/LocalityDescription' element={<LocalityDesc/>}/>
            </Routes >
        </BrowserRouter>
    </div>
  );
}

export default App;
