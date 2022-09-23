import { React } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiLock } from 'react-icons/fi';
import { Helmet } from 'react-helmet';
import '../assets/css/stylesStartHome.css';
import Nav from '../components/navbar';
import Footer from '../components/Footer';
import AsideMenu from '../components/AsideMenu';

const ChangePassword = () => {
  return (
    <>
      <Helmet>
        <title>Change Password</title>
      </Helmet>

      <div className='background-home'>
        <Nav />

        <section>
          <Container>
            <Row className="mx-5">
              <AsideMenu />
              <Col className="ms-md-3">
                <Row className="d-flex justify-content-between rounded-4 pt-5 px-4 bg-white mt-1 pad-bot-115px">
                  <Col className="pb-2 f-color-g">
                    <div className="d-flex justify-content-between mb-2">
                      <h1 className="fs-18px fw-bold">Change Password</h1>
                    </div>
                    <div>
                      <div className="d-flex justify-content-between my-4">
                        <span>You must enter your current password and then<br /> type your new password
                          twice.</span>
                      </div>
                      <div
                        className="col-md-7 nav justify-content-between d-flex align-items-center mt-5  bg-body rounded m-auto bg-profile">
                        <div className="input-group my-4">
                          <span className="input-group-text form color-web-gray-3 pb-3" id="basic-addon1"><FiLock /></span>
                          <input type="password" className="form-control form fs-16px pb-3"
                            placeholder="Current password" aria-label="Username"
                            aria-describedby="basic-addon1" />
                        </div>
                      </div>
                      <div
                        className="col-md-7 nav justify-content-between d-flex align-items-center bg-body rounded m-auto bg-profile">
                        <div className="input-group my-4">
                          <span className="input-group-text form color-web-gray-3 pb-3" id="basic-addon1"><FiLock /></span>
                          <input type="password" className="form-control form fs-16px pb-3"
                            placeholder="New password" aria-label="Username"
                            aria-describedby="basic-addon1" />
                        </div>
                      </div>
                      <div
                        className="col-md-7 nav justify-content-between d-flex align-items-center bg-body rounded m-auto bg-profile">
                        <div className="input-group my-4">
                          <span className="input-group-text form color-web-gray-3 pb-3" id="basic-addon1"><FiLock /></span>
                          <input type="password" className="form-control form fs-16px pb-3"
                            placeholder="Repeat new password" aria-label="Username"
                            aria-describedby="basic-addon1" />
                        </div>
                      </div>
                      <div className="col-md-7 m-auto">
                        <div className="d-grid gap-2">
                          <Link
                            className="a-login color-btn-bef btn btn-primary btn-lg bg-btn-bef mt-5" to={'/profile'}>Change
                            Password</Link>
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

export default ChangePassword;