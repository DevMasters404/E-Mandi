import React from 'react';
import './App.css';
import Authpage from './components/Authpage';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/NavBar';
//import reactdom
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <>
      {/* <Router> */}

      {/* <Header/> */}
      <Navbar/>
      {/* <div className="container"> */}
      {/* <Routes> */}
        {/* <Route path="/login" element={<Authpage/>}/> */}
      {/* </Routes> */}
      {/* </div> */}

      <Footer/>
      {/* </Router> */}
      </>
    </div>
  );
}

export default App;
