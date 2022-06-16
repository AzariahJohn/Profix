import './App.css'
import Home from './Pages/Home/Home';
import Signup from './Pages/Signup/Signup';
import Login from './Pages/Login/Login';
import Forum from './Pages/Forum/Forum';
import CustomPc from './Pages/CustomPc/CustomPc';
import Chat from './Pages/Chat/Chat'
import Account from './Pages/Account/Account'
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import Readymade from './Pages/Readymade/Readymade'

function App() {
  return (
    
      <Router>
        <div className="App">
          <Navbar />
              <Routes>
                <Route path="/custom-pc" element={<CustomPc />}/>
                <Route path="/account" element={<ProtectedRoute><Account /></ProtectedRoute>}/>
                <Route path="/chat" element={<ProtectedRoute><Chat /></ProtectedRoute>}/>
                <Route path="/forum" element={<ProtectedRoute><Forum /></ProtectedRoute>}/>
                <Route path="/signup" element={<Signup />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/" element={<Home />}/>
                <Route path="/prebuilt" element={<Readymade />}/>
              </Routes>
        </div>
      </Router>
    
  );
}

export default App;
