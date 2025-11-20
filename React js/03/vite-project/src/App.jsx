import './App.css';
import Home from './pages/home';
import AboutUs from './pages/about';
import Contact from './pages/contact';
import NotFound from './pages/404';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, createContext } from "react";

// ✅ Create context and export it
export const UserContext = createContext();

function App() {
  const [user, setUser] = useState("Hello Nidal");

  return (
    <UserContext.Provider value={user}>
      <BrowserRouter>
        <h1>{`Hello from ${user}`}</h1>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contactUs" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
