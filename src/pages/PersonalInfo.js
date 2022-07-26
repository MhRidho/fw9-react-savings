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
                <title>Personal Info</title>
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
                                                <Link className="ank-menu" to={'/search-receiver'}><FiArrowUp className='mx-4 fs-24px' />Transfer</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="ank-menu" to={'/top-up'}><FiPlus className='mx-4 fs-24px' />Top Up</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="ank-menu" to={'/profile'}><FiUser className='mx-4 fs-24px' />Profile</Link>
                                            </li>
                                            <li className="nav-item martop-219px">
                                                <Link className="ank-menu" to={'/landing'}><FiLogOut className='mx-4 fs-24px' />Logout</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </Row>
                            </Col>

                            <Col className="ms-md-3">
                                <Row className="d-flex justify-content-between rounded-4 pt-5 pb-4 px-4 bg-white mt-1">
                                    <Col className="pb-2 f-color-g">
                                        <div class="d-flex justify-content-between mb-2">
                                            <h1 class="fs-18px fw-bold">Personal Information</h1>
                                        </div>
                                        <div>
                                            <div class="d-flex justify-content-between my-4">
                                                <span>We got your personal information from the sign<br /> up proccess. If you want
                                                    to
                                                    make changes on<br /> your information, contact our support.</span>
                                            </div>
                                            <div
                                                class="nav justify-content-between d-flex align-items-center mt-2 shadow-sm p-2 bg-body rounded">
                                                <div class="col mar-right-40px">
                                                    <p class="fs-16px">First Name
                                                    </p>
                                                    <h1 class="fs-18px fw-bold color-web-dark-2">Robert</h1>
                                                </div>
                                            </div>
                                            <div
                                                class="nav justify-content-between d-flex align-items-center mt-4 shadow-sm p-2 bg-body rounded">
                                                <div class="col mar-right-40px">
                                                    <p class="fs-16px">Last Name
                                                    </p>
                                                    <h1 class="fs-18px fw-bold color-web-dark-2">Chandler</h1>
                                                </div>
                                            </div>
                                            <div
                                                class="nav justify-content-between d-flex align-items-center mt-4 shadow-sm p-2 bg-body rounded">
                                                <div class="col mar-right-40px">
                                                    <p class="fs-16px">Verified E-mail
                                                    </p>
                                                    <h1 class="fs-18px fw-bold color-web-dark-2">pewdiepie1@gmail.com</h1>
                                                </div>
                                            </div>
                                            <div
                                                class="nav justify-content-between d-flex align-items-center mt-4 shadow-sm p-2 bg-body rounded">
                                                <div class="col mar-right-40px">
                                                    <p class="fs-16px">Phone Number
                                                    </p>
                                                    <h1 class="fs-18px fw-bold color-web-dark-2">+62 813-9387-7946</h1>
                                                </div>
                                                <Link className="u-none-back-manage me-2" to={'/manage-phone'}>Manage</Link>
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