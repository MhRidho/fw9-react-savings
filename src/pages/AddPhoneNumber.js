import { React } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiPhone, FiLogOut } from 'react-icons/fi';
import { Helmet } from 'react-helmet';
import '../assets/css/stylesStartHome.css';
import Nav from '../components/navbar';
import AsideMenus from '../components/AsideMenus';
import Footer from '../components/Footer';

const AddPhoneNumber = () => {
  return (
    <>
      <Helmet>
        <title>Add Phone Number</title>
      </Helmet>

      <div className='background-home'>
        <Nav />
        <section>
          <Container>
            <Row className="mx-5">
              <Col md={3} className="mt-md-1">
                <Row>
                  <div className="offcanvas-body bg-white rounded-4">
                    <ul className="d-md-flex gap-5 navbar-nav justify-content-end ms-4 mt-5 pb-5">
                      <AsideMenus />
                      <li className="nav-item martop-270px">
                        <Link className="ank-menu" to={'/'}><FiLogOut className='mx-4' />Logout</Link>
                      </li>
                    </ul>
                  </div>
                </Row>
              </Col>

              <Col className="ms-md-3">
                <Row className="d-flex justify-content-between rounded-4 py-5 px-4 bg-white mt-1">
                  <Col className="pb-2 f-color-g">
                    <div className="d-flex justify-content-between mb-2">
                      <h1 className="fs-18px fw-bold">Add Phone Number</h1>
                    </div>
                    <div>
                      <div className="d-flex justify-content-between my-4 pb-4">
                        <span>Add at least one phone number for the transfer<br /> ID so you can start transfering your money to<br /> another user.</span>
                      </div>
                      <div className="col-md-7 mx-auto mt-5 pb-4">
                        <div className="d-flex flex-column">
                          <div className="row">
                            <div className="input-group mb-3 martop-73px">
                              <span className="input-group-text form" id="basic-addon1"><FiPhone />
                                <h5 className="ms-2 mt-2">+62</h5>
                              </span>
                              <input type="password" className="form-control form color-web-gray-3 fs-16px"

                                placeholder="Enter your phone number" aria-label="Username"
                                aria-describedby="basic-addon1" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-7 m-auto pb-5">
                        <div className="d-grid gap-2">
                          <Link
                            className="a-login color-btn-bef btn btn-primary btn-lg bg-btn-bef mt-5" to={'/managephone'}>Add Phone Number</Link>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>

            </Row>
          </Container>
        </section>
        <Footer />
      </div>
    </>
  )
}

export default AddPhoneNumber;