import { React } from 'react'
import { Container, Navbar, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Robert52 from '../assets/img/Robert52.png';
import Failed from '../assets/img/failed.png';
import Sam70 from '../assets/img/sam70.png';
import { FiBell, FiArrowUp, FiPlus, FiGrid, FiUser, FiLogOut } from 'react-icons/fi';
import { Helmet } from 'react-helmet';
import '../assets/css/stylesStartHome.css';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Failed</title>
            </Helmet>

            <div className='background-home'>
                <div className="header-home">
                    <Navbar className="bg-white py-5 rounded-bottom shadow p-3 mb-5 bg-body">
                        <Container className="px-5">
                            <Link className="nav-link fw-bold fs-29px color-web logo-saving" aria-current="page"
                                to={'/landing'}>Savings</Link>
                            <aside className="d-flex">
                                <img src={Robert52} alt="Robert52.png" className="me-4" />
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
                                                <Link className="ank-menu" to={'/'}><FiGrid className='mx-4' />Dashboard</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="ank-menu" to={'/'}><FiArrowUp className='mx-4' />Transfer</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="ank-menu" to={'/'}><FiPlus className='mx-4' />Top Up</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="ank-menu" to={'/'}><FiUser className='mx-4' />Profile</Link>
                                            </li>
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
                                        <Row>
                                            <div className="text-center mt-2">
                                                <Col md={1} className='mx-auto'>
                                                    <img src={Failed} alt="failed.png" />
                                                </Col>
                                                <h1 className="fs-18px fw-bold my-4">Transfer Failed</h1>
                                                <span>We can't transfer your money at the moment, we recommend you to check your<br /> internet connection and try again.</span>
                                            </div>
                                            <div
                                                className="nav justify-content-between d-flex align-items-center mt-4 shadow-sm p-2 bg-body rounded">
                                                <div className="col mar-right-40px">
                                                    <p className="fs-16px">Amount
                                                    </p>
                                                    <h1 className="fs-18px fw-bold color-web-dark-2">Rp100.000</h1>
                                                </div>
                                            </div>
                                            <div
                                                className="nav justify-content-between d-flex align-items-center mt-4 shadow-sm p-2 bg-body rounded">
                                                <div className="col mar-right-40px">
                                                    <p className="fs-16px">Balance Left
                                                    </p>
                                                    <h1 className="fs-18px fw-bold color-web-dark-2">Rp20.000</h1>
                                                </div>
                                            </div>
                                            <div
                                                className="nav justify-content-between d-flex align-items-center mt-4 shadow-sm p-2 bg-body rounded">
                                                <div className="col mar-right-40px">
                                                    <p className="fs-16px">Date & Time
                                                    </p>
                                                    <h1 className="fs-18px fw-bold color-web-dark-2">May 11, 2020 - 12.20</h1>
                                                </div>
                                            </div>
                                            <div
                                                className="nav justify-content-between d-flex align-items-center mt-4 shadow-sm p-2 bg-body rounded">
                                                <div className="col mar-right-40px">
                                                    <p className="fs-16px">Notes
                                                    </p>
                                                    <h1 className="fs-18px fw-bold color-web-dark-2">For buying some socks</h1>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between mt-5">
                                                <h1 className="fs-18px fw-bold">Transfer To</h1>
                                            </div>
                                            <div>
                                                <div
                                                    className="nav justify-content-between d-flex align-items-center mt-1 shadow-sm p-3 mb-1 bg-body rounded">
                                                    <Row><img src={Sam70} alt="3.png" className="mar-right-40px" /></Row>
                                                    <div className="col ms-3">
                                                        <h1 className="mt-3 fs-18px fw-bold">Samuel Suhi</h1>
                                                        <p className="fs-16px">+62 813-8492-9994
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-5 pb-2">
                                                    <div className="d-grid d-md-flex justify-content-md-end">
                                                        <Link
                                                            className="u-none-back btn btn-primary mt-1 btn-lg text-white" to={'/home'}>Try Again</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>

                        </Row>
                    </Container>
                </section>

                <footer>
                    <Container class="px-5 ms-2">
                        <Row>
                            <Col>
                                <span>2020 Zwallet. All right reserved.</span>
                            </Col>
                            <Col>
                                <Row className="d-flex justify-content-end">
                                    <Col md={8} className="d-flex justify-content-end">
                                        <span>+62 5637 8882 9901</span>
                                    </Col>
                                    <Col md={4} className="d-flex justify-content-end">
                                        <span>contact@zwallet.com</span>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </footer>
            </div>
        </>
    )
}

export default Home;