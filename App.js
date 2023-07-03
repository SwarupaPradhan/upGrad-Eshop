
import './App.css';
import { Navbar } from './component/Navbar/Navbar.js';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Signup } from "./component/Signup/Signup.js";
import { Login } from "./component/Login/Login.js";
import { Home } from "./component/Home/Home.js";
import { Product } from "./component/Product/Product.js";


function App() {
  const location = useLocation();
  return (
    <>
        {location.pathname === '/Product' ? null : <Navbar />}
        
          <Routes>
               <Route path="#" element={<Home />} />
               <Route path="/Login" element={<Login />} />
               <Route path="/Signup" element={<Signup />} />
               <Route className='hideNavbar' path="/Product" element={<Product />} />
          </Routes>
    
    </>
      );
}

export default App;
