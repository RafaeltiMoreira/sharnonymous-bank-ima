import { Home } from './pages/Home';
import './global.module.css';
import { Routes, Route } from 'react-router-dom';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { Recovery } from './pages/Recovery';
import { Balance } from './pages/Balance';

export function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/recovery' element={<Recovery />} />
        <Route path='/balance' element={<Balance />} />
      </Routes>
    </>
  );
}
