import React from 'react';
import './App.css';
import './style.css';
import './DashboardStyle.css';
import { Route, Routes } from 'react-router-dom';
import LoginSignup from './LoginSignup.js';
import Dashboard from './Dashboard.js';

function App() {
 
  return (
    <div>
     <React.Fragment>
      <main>
        <Routes>
          
          <Route path="/" element={<LoginSignup/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          
        </Routes>
      </main>
    </React.Fragment>
    </div>
  );
}

export default App;
