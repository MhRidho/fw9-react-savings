import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import LoginFilled from './pages/LoginFilled';
import SignUp from './pages/SignUp';
import PinBlank from './pages/PinBlank';
import PinSuccess from './pages/PinSuccess';
import ResetPassword from './pages/ResetPassword';
import CreateNewPassword from './pages/CreateNewPassword';
import Home from './pages/Home';
import History from './pages/History';
import SearchReceiver from './pages/SearchReceiver';
import InputAmountBlank from './pages/InputAmountBlank';
import InputAmountFilled from './pages/InputAmountFilled';
import Confirmation from './pages/Confirmation';
import Success from './pages/Success';
import Failed from './pages/Failed';
import TopUp from './pages/TopUp';
import Profile from './pages/Profile';
import PersonalInfo from './pages/PersonalInfo';
import ChangePassword from './pages/ChangePassword';
import ChangePin from './pages/ChangePin';
import NewPin from './pages/NewPin';
import AddPhoneNumber from './pages/AddPhoneNumber';
import ManagePhoneNumber from './pages/ManagePhoneNumber';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='login' element={<Login />} />
        <Route path='login-filled' element={<LoginFilled />} />
        <Route path='sign-up' element={<SignUp />} />
        <Route path='pin-blank' element={<PinBlank />} />
        <Route path='pin-success' element={<PinSuccess />} />
        <Route path='reset-password' element={<ResetPassword />} />
        <Route path='new-password' element={<CreateNewPassword />} />
        <Route path='home' element={<Home />} />
        <Route path='history' element={<History />} />
        <Route path='search-receiver' element={<SearchReceiver />} />
        <Route path='input-amount-blank' element={<InputAmountBlank />} />
        <Route path='input-amount-filled' element={<InputAmountFilled />} />
        <Route path='confirmation' element={<Confirmation />} />
        <Route path='success' element={<Success />} />
        <Route path='failed' element={<Failed />} />
        <Route path='top-up' element={<TopUp />} />
        <Route path='profile' element={<Profile />} />
        <Route path='personal-info' element={<PersonalInfo />} />
        <Route path='change-password' element={<ChangePassword />} />
        <Route path='change-pin' element={<ChangePin />} />
        <Route path='new-pin' element={<NewPin />} />
        <Route path='add-phone' element={<AddPhoneNumber />} />
        <Route path='manage-phone' element={<ManagePhoneNumber />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
