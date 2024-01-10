// import '../stylesheets/index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Navbar from "./components/Navbar"
import AddNote from './components/AddNote';
import SeeNote from './components/SeeNote';

function App() {
  
  return (
    <>

      <BrowserRouter>

        <Navbar/>
        <Routes>

          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>

          <Route path="/notes/:id" element={<SeeNote/>}/>
          
          <Route path="/addnote" element={<AddNote/>}/>
        
        </Routes>
      </BrowserRouter>  
        
    </>
  )
}

export default App
