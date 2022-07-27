import { React } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiLogOut, FiTrash } from 'react-icons/fi';
import { Helmet } from 'react-helmet';
import '../assets/css/stylesStartHome.css';
import Nav from '../components/navbar';
import AsideMenu from '../components/AsideMenu';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Manage Phone Number</title>
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
                      <AsideMenu />
                      <li className="nav-item martop-270px">
                        <Link className="ank-menu" to={'/'}><FiLogOut className='mx-4 fs-24px' />Logout</Link>
                      </li>
                    </ul>
                  </div>
                </Row>
              </Col>

              <Col className="ms-md-3">
                <Row className="d-flex justify-content-between rounded-4 pt-5 px-4 bg-white mt-1 pad-bot-304px">
                  <Col className="pb-2 f-color-g">
                    <div>
                      <h1 className="fs-18px fw-700">Manage Phone Number</h1>
                      <p class="mt-3">You can only delete the phone number and then<br /> you must add another phone
                        number.
                      </p>
                    </div>
                    <div class="row d-flex justify-content-center mt-5 mb-5">
                      <div
                        class="col-lg-11 nav justify-content-between d-flex align-items-center shadow-sm p-2 mb-5 bg-body rounded">
                        <div className="col mt-3 ms-3 mar-right-40px" >
                          <p className="fs-16px">Primary</p>
                          <h1 className="fs-22px fw-700">+62 813-9387-7946</h1>
                        </div>
                        <div>
                          <Link to={'/home'}><FiTrash className='fs-22px color-BBBBBE' /></Link>
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

export default Home;