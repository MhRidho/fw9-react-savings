import { React } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../assets/css/stylesStartHome.css';
import Nav from '../components/navbar';
import AsideMenu from '../components/AsideMenu';
import Footer from '../components/Footer';

const NewPin = () => {
  return (
    <>
      <Helmet>
        <title>New Pin</title>
      </Helmet>

      <div className='background-home'>
        <Nav />

        <section>
          <Container>
            <Row className="mx-5">
              <AsideMenu />

              <Col className="ms-md-3">
                <Row className="d-flex justify-content-between rounded-4 pt-5 px-4 bg-white mt-1 pad-bot-253px">
                  <Col className="pb-2 f-color-g">
                    <div className="d-flex justify-content-between mb-2">
                      <h1 className="fs-18px fw-bold">Change PIN</h1>
                    </div>
                    <div>
                      <div className="d-flex justify-content-between my-4 pb-4">
                        <span>Type your new 6 digits security PIN to use in<br /> Zwallet.</span>
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
                            className="a-login color-btn-bef" to={'/profile'}>Change PIN</Link></button>
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

export default NewPin;