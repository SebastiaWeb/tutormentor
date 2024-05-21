import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SingUp from '../forms/singup/SingUp';
import Login from '../forms/login/Login';
import Dashboards from '../Dashboard';
import Profesor from '../Profesor';
import Encuesta from '../Encuesta';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SingUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboards />} />
        <Route path="/profesor" element={<Profesor />} />
        <Route path="/encuesta" element={<Encuesta />} />
        {/* ...otras rutas */}
      </Routes>
    </BrowserRouter>
  );
};
