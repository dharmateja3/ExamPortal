import React, { useState } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Courses from './components/Courses';
import Assessments from './components/Assessments';
import Questions from './components/Questions';
import About from './components/About';
import Contact from './components/Contact';
import LoginStudent from './components/LoginStudent';
import LoginInstitute from './components/LoginInstitute';
import RegisterStudent from './components/RegisterStudent';
import RegisterInstitute from './components/RegisterInstitute';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (username) => {
    setUsername(username);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setUsername('');
    setIsLoggedIn(false);
    alert('Logged out Successfully')
    window.location.href="/";
  };
 

  return (
    <BrowserRouter>
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} username={username} />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/assessments" element={<Assessments />} />
          <Route path="/questions/:courseName" element={<Questions/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login/student" element={<LoginStudent onLogin={handleLogin} />} />
          <Route path="/login/institute" element={<LoginInstitute onLogin={handleLogin} />} />
          <Route path="/register/student" element={<RegisterStudent />} />
          <Route path="/register/institute" element={<RegisterInstitute />} />
          {isLoggedIn && <Route path="/dashboard" element={<Dashboard username={username}/>} />}
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
