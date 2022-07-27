import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Satu from '../assets/img/sam1.png';
import Dua from '../assets/img/chris56.png';
import Netflix from '../assets/img/netflix.png';
import Adobe from '../assets/img/adobe.png';
import { FiLogOut } from 'react-icons/fi';
import { Helmet } from 'react-helmet';
import '../assets/css/stylesStartHome.css';
import Nav from '../components/navbar';
import AsideMenu from '../components/AsideMenu';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>History</title>
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
                        <Link className="ank-menu" to={'/'}><FiLogOut className='mx-4' />Logout</Link>
                      </li>
                    </ul>
                  </div>
                </Row>
              </Col>

              <div class="col ms-md-3">
                <div class="row d-flex justify-content-between rounded-4 py-5 px-4 bg-white mt-1">
                  <div class="col pb-5 f-color-g">
                    <div class="d-flex justify-content-between mb-3">
                      <h1 class="fs-18px fw-bold">Transaction History</h1>
                    </div>
                    <span>This Week</span>
                    <div>
                      <div class="nav justify-content-between d-flex align-items-center mt-4">
                        <Row><img src={Satu} alt="3.png" class="me-3" /></Row>
                        <div class="col ms-3">
                          <h1 class="mt-3 fs-16px fw-bold">Samuel Suhi</h1>
                          <p class="fs-14px">Transfer</p>
                        </div>
                        <span class="fs-16px fw-bold color-green-web">+Rp50.000</span>
                      </div>
                      <div class="nav justify-content-between d-flex align-items-center my-4">
                        <Row><img src={Netflix} alt="3.png" class="me-3" /></Row>
                        <div class="col ms-3">
                          <h1 class="mt-3 fs-16px fw-bold">Netflix</h1>
                          <p className='fs-14px'>Subscription</p>
                        </div>
                        <span class="fs-16px fw-bold color-red">-Rp149.000</span>
                      </div>
                      <span class="mt-5">This Month</span>
                      <div class="nav justify-content-between d-flex align-items-center mt-5">
                        <Row><img src={Dua} alt="3.png" class="me-3" /></Row>
                        <div class="col ms-3">
                          <h1 class="mt-3 fs-16px fw-bold">Christine Mar...</h1>
                          <p class="fs-14px">Transfer</p>
                        </div>
                        <span class="fs-16px fw-bold color-green-web">+Rp150.000</span>
                      </div>
                      <div class="nav justify-content-between d-flex align-items-center mt-3">
                        <Row>
                          <img src={Adobe} alt="3.png" class="me-3" />
                        </Row>
                        <div class="col ms-3">
                          <h1 class="mt-3 fs-16px fw-bold">Adobe Inc.</h1>
                          <p class="fs-14px">Subscription</p>
                        </div>
                        <span class="fs-16px fw-bold color-red">-Rp249.000</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </Row>
          </Container>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default Home;