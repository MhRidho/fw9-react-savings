import { React } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiArrowUp, FiPlus, FiGrid, FiUser, FiLogOut } from 'react-icons/fi';
import { Helmet } from 'react-helmet';
import '../assets/css/stylesStartHome.css';
import Nav from '../components/navbar';
import Footer from '../components/Footer';

const Home = () => {
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
                            <Col md={3} className="mt-md-1">
                                <Row>
                                    <div className="offcanvas-body bg-white rounded-4">
                                        <ul className="d-md-flex gap-5 navbar-nav justify-content-end ms-4 mt-5 pb-5">
                                            <li className="nav-item">
                                                <Link className="ank-menu" to={'/home'}><FiGrid className='mx-4 fs-24px' />Dashboard</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="ank-menu" to={'/searchreceiver'}><FiArrowUp className='mx-4 fs-24px' />Transfer</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="ank-menu" to={'/topup'}><FiPlus className='mx-4 fs-24px' />Top Up</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="ank-menu" to={'/profile'}><FiUser className='mx-4 fs-24px' />Profile</Link>
                                            </li>
                                            <li className="nav-item martop-270px">
                                                <Link className="ank-menu" to={'/landing'}><FiLogOut className='mx-4 fs-24px' />Logout</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </Row>
                            </Col>

                            <Col className="ms-md-3">
                                <Row className="d-flex justify-content-between rounded-4 pt-5 px-4 bg-white mt-1 pad-bot-253px">
                                    <Col className="pb-2 f-color-g">
                                        <div class="d-flex justify-content-between mb-2">
                                            <h1 class="fs-18px fw-bold">Change PIN</h1>
                                        </div>
                                        <div>
                                            <div class="d-flex justify-content-between my-4 pb-4">
                                                <span>Type your new 6 digits security PIN to use in<br /> Zwallet.</span>
                                            </div>
                                            <div class="col-md-7 mx-auto mt-5 pb-4">
                                                <div class="d-flex flex-column">
                                                    <div class="row">
                                                        <div class="col">
                                                            <input type="text"
                                                                class="form-control form-control-lg pin-centered text-center fw-bold" />
                                                        </div>
                                                        <div class="col">
                                                            <input type="text"
                                                                class="form-control form-control-lg pin-centered text-center fw-bold" />
                                                        </div>
                                                        <div class="col">
                                                            <input type="text"
                                                                class="form-control form-control-lg pin-centered text-center fw-bold" />
                                                        </div>
                                                        <div class="col">
                                                            <input type="text"
                                                                class="form-control form-control-lg pin-centered text-center fw-bold" />
                                                        </div>
                                                        <div class="col">
                                                            <input type="text"
                                                                class="form-control form-control-lg pin-centered text-center fw-bold" />
                                                        </div>
                                                        <div class="col">
                                                            <input type="text"
                                                                class="form-control form-control-lg pin-centered text-center fw-bold" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-7 m-auto pb-5">
                                                <div class="d-grid gap-2">
                                                    <button class="btn btn-primary btn-lg bg-btn-bef mt-5" type="button"><Link
                                                        class="a-login color-btn-bef" to={'/profile'}>Change PIN</Link></button>
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