import { React } from 'react'
import { Container, Navbar, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Robert52 from '../assets/img/Robert52.png';
import Mic80 from '../assets/img/mic80.png';
import { FiBell, FiArrowUp, FiPlus, FiGrid, FiUser, FiLogOut, FiEdit2, FiArrowRight } from 'react-icons/fi';
import { Helmet } from 'react-helmet';
import '../assets/css/stylesStartHome.css';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Profile</title>
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
                                            <li className="nav-item martop-227px">
                                                <Link className="ank-menu" to={'/landing'}><FiLogOut className='mx-4 fs-24px' />Logout</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </Row>
                            </Col>

                            <Col className="ms-md-3">
                                <Row className="d-flex justify-content-between rounded-4 py-5 px-4 bg-white mt-1">
                                    <Col className="pb-2 f-color-g">
                                        <div>
                                            <div class="text-center mt-2">
                                                <Col md={1} className='mx-auto'>
                                                    <img src={Mic80} alt="mic80.png" /><br />
                                                </Col>
                                                <Row>
                                                    <span className="mt-3"><FiEdit2 className="me-2" />Edit</span>
                                                </Row>
                                                <h1 class="fs-18px fw-bold mt-4">Robert Chandler</h1>
                                                <div class="row mt-3">
                                                    <span>+62 813-9387-7946</span>
                                                </div>
                                            </div>
                                            <div
                                                class="col-md-6 nav justify-content-between d-flex align-items-center mt-4 shadow-sm p-4 bg-body rounded m-auto bg-profile">
                                                <Link className="u-none color-4D4B57" to={'/personalinfo'}><h1 class="fs-16px fw-bold color-web-dark-2">Personal Information</h1></Link>
                                                <FiArrowRight />
                                            </div>
                                            <div
                                                class="col-md-6 nav justify-content-between d-flex align-items-center mt-2 shadow-sm p-4 bg-body rounded m-auto bg-profile">
                                                <Link className="u-none color-4D4B57" to={'/changepassword'}><h1 class="fs-16px fw-bold color-web-dark-2">Change Password</h1></Link>
                                                <FiArrowRight />
                                            </div>
                                            <div
                                                class="col-md-6 nav justify-content-between d-flex align-items-center mt-2 shadow-sm p-4 bg-body rounded m-auto bg-profile">
                                                <Link className="u-none color-4D4B57" to={'/changepin'}><h1 class="fs-16px fw-bold color-web-dark-2">Change PIN</h1></Link>
                                                <FiArrowRight />
                                            </div>
                                            <div
                                                class="col-md-6 nav justify-content-between d-flex align-items-center mt-2 shadow-sm p-4 bg-body rounded m-auto bg-profile">
                                                <Link className="u-none color-4D4B57" to={'/landing'}><h1 class="fs-16px fw-bold color-web-dark-2">Logout</h1></Link>
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