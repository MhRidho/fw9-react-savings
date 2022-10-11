import React from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import { FiGrid, FiArrowUp, FiPlus, FiUser, FiLogOut } from 'react-icons/fi';
import { logout } from '../redux/reducers/auth';
import { useDispatch } from 'react-redux';

const AsideMenus = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(logout());
    navigate('/login');
  };
  return (
    <>
      {/* <Col md={3} className="mt-md-1">
        <Row>
          <div className="offcanvas-body bg-white rounded-4">
            <ul className="d-md-flex gap-5 navbar-nav justify-content-end ms-4 mt-5 pb-5">
              <li className="nav-item">
                <Link className="ank-menu" to={'/home'}><FiGrid className='mx-4 fs-24px' />Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link className="ank-menu" to={'/search-receiver'}><FiArrowUp className='mx-4 fs-24px' />Transfer</Link>
              </li>
              <li className="nav-item">
                <Link className="ank-menu" to={'/top-up'}><FiPlus className='mx-4 fs-24px' />Top Up</Link>
              </li>
              <li className="nav-item">
                <Link className="ank-menu" to={'/profile'}><FiUser className='mx-4 fs-24px' />Profile</Link>
              </li>
              <li className="nav-item li-menu-logout">
                <Button className="btn-logout ps-0" onClick={onLogout}><FiLogOut className='mx-4 fs-24px' />Logout</Button>
              </li>
            </ul>
          </div>
        </Row>
      </Col> */}


      <Col md={3} className='mt-1 py-4 d-flex flex-sm-column gap-sm-5 justify-content-between bg-white rounded-4 shadow'>
        <Row className='d-flex flex-sm-column gap-sm-5 pt-sm-3'>
          <ul className='nav flex-sm-column gap-sm-5 ps-sm-3'>
            <li className="nav-item">
              <Link className='ank-menu' to={'/home'}><FiGrid className='mx-4 fs-24px' />Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className='ank-menu' to={'/search-receiver'}><FiArrowUp className='mx-4 fs-24px' />Transfer</Link>
            </li>
            <li className="nav-item">
              <Link className='ank-menu' to={'/top-up'}><FiPlus className='mx-4 fs-24px' />Top Up</Link>
            </li>
            <li className="nav-item">
              <Link className='ank-menu' to={'/profile'}><FiUser className='mx-4 fs-24px' />Profile</Link>
            </li>
          </ul>
        </Row>
        <Row className='pb-sm-3'>
          <ul className='nav flex-sm-column gap-sm-5 ps-sm-3'>
            <li className="nav-item">
              <Button className='btn-logout ps-0' onClick={onLogout}><FiLogOut className='mx-4 fs-24px' />Logout</Button>
            </li>
          </ul>
        </Row>
      </Col>
    </>
  )
}

export default AsideMenus;
