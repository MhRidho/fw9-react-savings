import { React } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../assets/css/stylesStartHome.css';
import Nav from '../components/navbar';
import Footer from '../components/Footer';
import AsideMenus from '../components/AsideMenus';

const ChangePin = () => {
  return (
    <>
      <Helmet>
        <title>Change Pin</title>
      </Helmet>

      <div className='background-home'>
        <Nav />

        <section>
          <Container>
            <Row className="mx-5">
              <AsideMenus />

              <Col className="ms-md-3">
                <Row className="d-flex justify-content-between rounded-4 pt-5 px-4 bg-white mt-1 pad-bot-253px">
                  <Col className="pb-2 f-color-g">
                    <div className="d-flex justify-content-between mb-2">
                      <h1 className="fs-18px fw-bold">Change PIN</h1>
                    </div>
                    <div>
                      <div class="d-flex justify-content-between my-4 pb-4">
                        <span>Enter your current 6 digits Zwallet PIN below to<br /> continue to the next
                          steps.</span>
                      </div>
                      <Col md={7} className="mx-auto mt-5 pb-4">
                        <div className="d-flex flex-column">
                          <Row>
                            <Col>
                              <input type="text"
                                className="form-control form-control-lg pin-centered text-center fw-bold" />
                            </Col>
                            <Col>
                              <input type="text"
                                className="form-control form-control-lg pin-centered text-center fw-bold" />
                            </Col>
                            <Col>
                              <input type="text"
                                className="form-control form-control-lg pin-centered text-center fw-bold" />
                            </Col>
                            <Col>
                              <input type="text"
                                className="form-control form-control-lg pin-centered text-center fw-bold" />
                            </Col>
                            <Col>
                              <input type="text"
                                className="form-control form-control-lg pin-centered text-center fw-bold" />
                            </Col>
                            <Col>
                              <input type="text"
                                className="form-control form-control-lg pin-centered text-center fw-bold" />
                            </Col>
                          </Row>
                        </div>
                      </Col>
                      <Col md={7} className="m-auto pb-5">
                        <div className="d-grid gap-2">
                          <button className="btn btn-primary btn-lg bg-btn-bef mt-5" type="button"><Link
                            className="a-login color-btn-bef" to={'/new-pin'}>Continue</Link></button>
                        </div>
                      </Col>
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

export default ChangePin;