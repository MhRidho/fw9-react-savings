import React from 'react';
import { Container, Navbar, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiBell } from 'react-icons/fi';
import Robert52 from '../assets/img/Robert52.png';

const navbar = ({ name, phone }) => {
  return (
    <div className="header-home">
      <Navbar className="bg-white py-5 rounded-bottom shadow p-3 mb-5 bg-body">
        <Container className="px-5">
          <Link className="nav-link fw-bold fs-29px color-web logo-saving" aria-current="page"
            to={'/'}>Savings</Link>
          <aside className="d-flex">
            <Col md={3}>
              <img src={Robert52} alt="Robert52.png" className="me-4" />
            </Col>
            <div className="d-flex flex-column align-content-center me-4">
              <div className="name ps-2">
                <h1 className="fs-18px fw-bold mt-1">{name}</h1>
                <p className="fs-13px">{phone}</p>
              </div>
            </div>
            <Link className="a-menu d-flex justify-content-center align-items-center"
              to={"/"}><FiBell /></Link>
          </aside>
        </Container>
      </Navbar>
    </div>
  )
}

export default navbar;
