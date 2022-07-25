import { React } from 'react'
import { Container, Navbar, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Robert52 from '../assets/img/Robert52.png';
import { FiBell, FiArrowUp, FiPlus, FiGrid, FiUser, FiLogOut } from 'react-icons/fi';
import { Helmet } from 'react-helmet';
import '../assets/css/stylesStartHome.css';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Personal Info</title>
            </Helmet>

            <div className='background-home'>
                <div className="header-home">
                    <Navbar className="bg-white py-5 rounded-bottom shadow p-3 mb-5 bg-body">
                        <Container className="px-5">
                            <Link className="nav-link fw-bold fs-29px color-web logo-saving" aria-current="page"
                                to={'/landing'}>Savings</Link>
                            <aside className="d-flex">
                                <Col md={3}>
                                    <img src={Robert52} alt="Robert52.png" className="me-4" />
                                </Col>
                                <div className="d-flex flex-column align-content-center me-4">
                                    <div className="name">
                                        <h1 className="fs-18px fw-bold">Robert Chandler</h1>
                                        <p className="fs-13px">+62 8139 3877 7946</p>
                                    </div>
                                </div>
                                <Link className="a-menu d-flex justify-content-center align-items-center"
                                    to={"/landing"}><FiBell /></Link>
                            </aside>
                        </Container>
                    </Navbar>
                </div>

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
                                                <Link className="u-none-back-manage me-2" to={'/managephone'}>Manage</Link>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>

                        </Row>
                    </Container>
                </section>

                <Navbar className="p-3 foot-last">
                    <Container className="px-5">
                        <span>2020 Zwallet. All right reserved.</span>
                        <aside className="d-flex">
                            <div className="d-flex flex-column align-content-center me-4">
                                <span>+62 5637 8882 9901</span>
                            </div>
                            <span>contact@zwallet.com</span>
                        </aside>
                    </Container>
                </Navbar>
            </div>
        </>
    )
}

export default Home;