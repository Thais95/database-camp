import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import { PersonasProvider } from './context/PersonasContext';
import { ContactProvider } from './context/ContactContext';
import { AddressProvider } from './context/AddressContext';
import { Login } from './pages/Signin/Login';
import { SignUp } from './pages/Signup/SignUp';
import { Home } from './pages/Home/Home';
import { Dashboard } from './pages/Person/Dashboard';
import { Contact } from './pages/Contact/Contact';
import { Address } from './pages/Address/Address';
import { AddPersona } from './pages/PersonCreate/CreatePersona';
import { EditContact } from './pages/ContactEdit/EditContact';
import { EditPerson } from './pages/PersonEdit/EditPerson';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'nprogress/nprogress.css';
import { EditAddress } from './pages/AddressEdit/AddressEdit';

export const Router = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <AuthProvider>
        <PersonasProvider>
          <ContactProvider>
            <AddressProvider>
              <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/signup' element={<SignUp />} />
                <Route element={<PrivateRoute />}>
                  <Route path='/home' element={<Home />} />
                  <Route path='/people' element={<Dashboard />} />
                  <Route path='/person/create' element={<AddPersona />} />
                  <Route path='/person/edit' element={<EditPerson />} />
                  <Route path='/address' element={<Address />} />
                  <Route path='/address/edit' element={<EditAddress />} />
                  <Route path='/contact' element={<Contact />} />
                  <Route path='/contact/edit' element={<EditContact />} />
                </Route>
              </Routes>
            </AddressProvider>
          </ContactProvider>
        </PersonasProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}
