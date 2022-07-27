import React from 'react'
import { Link } from 'react-router-dom';
import { FiGrid, FiArrowUp, FiPlus, FiUser } from 'react-icons/fi';

const AsideMenu = () => {
  return (
    <>
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

    </>
  )
}

export default AsideMenu;
