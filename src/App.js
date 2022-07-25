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
        <Route path='landing' element={<Landing />} />
        <Route path='login' element={<Login />} />
        <Route path='loginfilled' element={<LoginFilled />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='pinblank' element={<PinBlank />} />
        <Route path='pinsuccess' element={<PinSuccess />} />
        <Route path='resetpassword' element={<ResetPassword />} />
        <Route path='newpassword' element={<CreateNewPassword />} />
        <Route path='home' element={<Home />} />
        <Route path='history' element={<History />} />
        <Route path='searchreceiver' element={<SearchReceiver />} />
        <Route path='inputamountblank' element={<InputAmountBlank />} />
        <Route path='inputamountfilled' element={<InputAmountFilled />} />
        <Route path='confirmation' element={<Confirmation />} />
        <Route path='success' element={<Success />} />
        <Route path='failed' element={<Failed />} />
        <Route path='topup' element={<TopUp />} />
        <Route path='profile' element={<Profile />} />
        <Route path='personalinfo' element={<PersonalInfo />} />
        <Route path='changepassword' element={<ChangePassword />} />
        <Route path='changepin' element={<ChangePin />} />
        <Route path='newpin' element={<NewPin />} />
        <Route path='addphone' element={<AddPhoneNumber />} />
        <Route path='managephone' element={<ManagePhoneNumber />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
