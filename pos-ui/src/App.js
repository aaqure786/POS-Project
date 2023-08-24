import './App.css';
import Home from './components/Home';
import Pricing from './components/Pricing';
import Registration from './components/Registration';
import RepaiStatus from './components/RepaiStatus';
import Login from './components/login';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Dashboard from './components/dashboard/Home'; 


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/business/Register' element={<Registration />} />
          <Route path='/repair-status' element={<RepaiStatus />} />
          <Route path='/home' element={<Dashboard />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
