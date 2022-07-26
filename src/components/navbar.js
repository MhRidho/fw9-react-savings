import React from 'react';
import { Container, Navbar, Col, DropdownButton, ButtonGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiBell } from 'react-icons/fi';
import Robert52 from '../assets/img/Robert52.png';
import Satu from '../assets/img/sam1.png';

const navbar = ({ name, phone, picture }) => {
  return (
    <div className="header-home">
      <Navbar className="bg-white py-5 rounded-bottom shadow p-3 mb-5 bg-body">
        <Container className="px-5">
          <Link className="nav-link fw-bold fs-29px color-web logo-saving" aria-current="page"
            to={'/'}>Savings</Link>
          <aside className="d-flex">
            <Col md={3}>
              <img src={picture || Robert52} style={{ height: '50px' }} alt="Robert52.png" className="img-nav me-4 img-fluid" />
            </Col>
            <div className="d-flex flex-column align-content-center me-4">
              <div className="name ps-2">
                <h1 className="fs-18px fw-bold mt-1">{name}</h1>
                <p className="fs-13px">{phone}</p>
              </div>
            </div>
            <DropdownButton
              className='d-flex justify-content-center align-items-center'
              as={ButtonGroup}
              key='start'
              id='dropdown-button-drop-start'
              drop='start'
              variant="light"
              title={<FiBell />}
            >
              <div className='px-5'>
                <div>
                  <Container>
                    <Row>
                      <div className="nav justify-content-between d-flex align-items-center mt-4 px-5">
                        <Row>
                          <img src={Satu} alt="3.png" className="me-3" />
                          <h1 className="mt-3 fs-16px fw-bold ms-4" >Samuel</h1>
                          <p className="fs-14px ms-4">Transfer</p>
                          <span className="fs-16px fw-bold color-green-web">+Rp 100.000</span>
                        </Row>
                      </div>
                    </Row>
                  </Container>
                </div>
              </div>
            </DropdownButton>
          </aside>
        </Container>
      </Navbar>
    </div>
  )
}

export default navbar;
