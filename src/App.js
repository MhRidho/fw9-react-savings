import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './auth/Landing';
// Routes auth public
import Login from './auth/Login';
import LoginFilled from './auth/LoginFilled';
import SignUp from './auth/SignUp';
import PinBlank from './auth/PinBlank';
import PinSuccess from './auth/PinSuccess';
import ResetPassword from './auth/ResetPassword';
import CreateNewPassword from './auth/CreateNewPassword';
// Routes pages private
import Home from './pages/Home';
import History from './pages/History';
import SearchReceiver from './pages/SearchReceiver';
import InputAmountBlank from './pages/InputAmountBlank';
import Confirmation from './pages/Confirmation';
import Success from './pages/Success';
import Failed from './pages/Failed';
import TopUp from './pages/TopUp';
import Profile from './pages/Profile';
import PersonalInfo from './pages/PersonalInfo';
import ChangePassword from './pages/ChangePassword';
import AddPin from './pages/AddPin';
import ChangePin from './pages/ChangePin';
import NewPin from './pages/NewPin';
import AddPhoneNumber from './pages/AddPhoneNumber';
import ManagePhoneNumber from './pages/ManagePhoneNumber';
import Counter from './pages/Counter';
import ListCharacter from './pages/ListCharacter';
import SuccessTopup from './pages/SuccessTopup';

import PrivateRoute from './components/PrivateRoute';

// import ListCharacter from './pages/ListCharacter';

const App = () => {
  useEffect(() => { }, []);
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes Public */}
        <Route path='/' element={<Landing />} />
        <Route path='login' element={<Login />} />
        <Route path='login-filled' element={<LoginFilled />} />
        <Route path='sign-up' element={<SignUp />} />
        <Route path='pin-blank' element={<PinBlank />} />
        <Route path='pin-success' element={<PinSuccess />} />
        <Route path='reset-password' element={<ResetPassword />} />
        <Route path='new-password' element={<CreateNewPassword />} />
        <Route path='counter' element={<Counter />} />
        <Route path='list-character' element={<ListCharacter />} />

        {/* Routes Private */}
        <Route path='home' element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path='history' element={<History />} />
        <Route path='search-receiver' element={<SearchReceiver />} />
        <Route path='input-amount-blank' element={<InputAmountBlank />} />
        <Route path='confirmation' element={<Confirmation />} />
        <Route path='success' element={<Success />} />
        <Route path='success-topup' element={<SuccessTopup />} />
        <Route path='failed' element={<Failed />} />
        <Route path='top-up' element={<TopUp />} />
        <Route path='profile' element={<Profile />} />
        <Route path='personal-info' element={<PersonalInfo />} />
        <Route path='change-password' element={<ChangePassword />} />
        <Route path='add-pin' element={<AddPin />} />
        <Route path='change-pin' element={<ChangePin />} />
        <Route path='new-pin' element={<NewPin />} />
        <Route path='add-phone' element={<AddPhoneNumber />} />
        <Route path='manage-phone' element={<ManagePhoneNumber />} />
        {/* <Route path='list-character' element={<ListCharacter />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
