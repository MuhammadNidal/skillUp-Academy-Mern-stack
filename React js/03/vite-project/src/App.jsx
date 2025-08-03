
import './App.css'
import Home from './pages/home'
import AboutUs from './pages/about'
import Contact from './pages/contact';
import NotFound from './pages/404';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>

<Routes>
    <Route path="/" element={<Home/>}/>
      
    <Route path='/about'element= {<AboutUs/>}/>
    <Route path='/contactUs'element= {<Contact/>}/>
    
    <Route path='*'element= {<NotFound/>}/>
    </Routes>
    </BrowserRouter>

    
   </>
  )
}

export default App
