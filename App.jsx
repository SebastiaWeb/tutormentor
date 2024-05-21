import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboards from './src/Dashboard';
import Profesor from './src/Profesor';
import Encuesta from './src/Encuesta';
import SingUp from './src/forms/singup/SingUp';
import Login from './src/forms/login/Login';

function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<SingUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboards />} />
        <Route path="/profesor" element={<Profesor />} />
        <Route path="/encuesta" element={<Encuesta />} />
      </Routes>
    </div>
  );
}

export default App;
