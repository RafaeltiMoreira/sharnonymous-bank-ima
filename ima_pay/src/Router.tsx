<<<<<<< HEAD
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
=======
import { Routes, Route } from "react-router-dom";
import { Transfers } from "./pages/Transfers";
import { SearchTransfers } from "./pages/SearchTransfers";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { UserPage } from "./pages/User";
import { Recovery } from "./pages/Recovery";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            {/*<Route path="/transfers/:userId" element={<Transfers />} />*/}
            <Route path="/recovery" element={<Recovery />} />

            <Route path="/" element={<DefaultLayout />}>
                <Route path="/transfers/:userId" element={<Transfers />} />
                <Route path="/search" element={<SearchTransfers />} />
            </Route>
        </Routes>
    );
}
>>>>>>> 80470215f25d557f58a33486ab1f7393c720a440
