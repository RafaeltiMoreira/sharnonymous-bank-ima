import { Home } from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { Recovery } from './pages/Recovery';
import { UserPage } from './pages/User';

export function Router() {
    return (
      <>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/user/:userId' element={<UserPage />} />
          <Route path='/recovery' element={<Recovery />} />
        </Routes>
      </>
    );
  }