import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiGrid, FiArrowUp, FiPlus, FiUser, FiLogOut } from 'react-icons/fi';

const asideMenu = () => {
    return (
        <Col md={3} className="mt-md-1">
            <Row>
                <div className="offcanvas-body bg-white rounded-4">
                    <ul className="d-md-flex gap-5 navbar-nav justify-content-end ms-4 mt-5 pb-5">
                        <li className="nav-item">
                            <Link className="ank-menu" to={'/home'}><FiGrid className='mx-4' />Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="ank-menu" to={'/search-receiver'}><FiArrowUp className='mx-4' />Transfer</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="ank-menu" to={'/top-up'}><FiPlus className='mx-4' />Top Up</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="ank-menu" to={'/profile'}><FiUser className='mx-4' />Profile</Link>
                        </li>
                        <li className="nav-item martop-270px">
                            <Link className="ank-menu" to={'/'}><FiLogOut className='mx-4' />Logout</Link>
                        </li>
                    </ul>
                </div>
            </Row>
        </Col>
    )
}

export default asideMenu;
