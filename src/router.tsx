import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Login } from './pages/Signin/Login';
import { SignUp } from './pages/Signup/SignUp';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { AddPersona } from './pages/CreatePerson/CreatePersona';
import { PrivateRoute } from './components/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'nprogress/nprogress.css';
import { PersonasProvider } from './context/PersonasContext';
import { Address } from './pages/Address/Address';
import { Contact } from './pages/Contact/Contact';

export const Router = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <AuthProvider>
        <PersonasProvider>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route element={<PrivateRoute />}>
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/persona/create' element={<AddPersona />} />
              <Route path='/address' element={<Address />} />
               <Route path='/contact' element={<Contact />} />
            </Route>
          </Routes>
        </PersonasProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}
