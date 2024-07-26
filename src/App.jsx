import { BrowserRouter, Route,    Routes } from "react-router-dom";
import CustomNavbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Services from "./pages/Services";
import NotFound from "./pages/404";
import ElectronProduct from "./pages/Services/ElectronProduct";
import Login from "./components/login/Login";
import Profile from "./components/login/Profile";



function App() {
  return (
 
    <BrowserRouter>
      <CustomNavbar />
      <Routes>
        <Route path="/login" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/services/:id" element={<ElectronProduct />} />
        <Route path="/" element={<Login />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>


      
    </BrowserRouter>
  
    
  );
}

export default App;
