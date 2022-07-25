import React from 'react'
import { Container, Navbar, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Robert52 from '../assets/img/Robert52.png';
import Satu from '../assets/img/sam70.png';
import { FiBell, FiArrowUp, FiPlus, FiGrid, FiUser, FiLogOut, FiEdit2 } from 'react-icons/fi';
import { Helmet } from 'react-helmet';
import '../assets/css/stylesStartHome.css';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Input Amount Filled</title>
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
                                            <li className="nav-item martop-270px">
                                                <Link className="ank-menu" to={'/landing'}><FiLogOut className='mx-4 fs-24px' />Logout</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </Row>
                            </Col>

                            <Col className="ms-md-3">
                                <Row className="d-flex justify-content-between rounded-4 py-5 px-4 bg-white mt-1">
                                    <Col className="pb-2 f-color-g">
                                        <div className="d-flex justify-content-between mb-3">
                                            <h1 className="fs-18px fw-bold">Transfer Money</h1>
                                        </div>
                                        <div>
                                            <div
                                                className="nav justify-content-between d-flex align-items-center mt-4 shadow-sm p-3 mb-2 bg-body rounded">
                                                <Row><img src={Satu} alt="3.png" classNameName='mar-right-20px' /></Row>
                                                <Col classNameName="ms-3">
                                                    <h1 className="mt-3 fs-16px fw-bold ms-3">Samuel Suhi</h1>
                                                    <p className="fs-14px ms-3">+62 813-8492-9994</p>
                                                </Col>
                                            </div>
                                            <p className="mt-4 fs-16px color-soft-gray-2">Type the amount you want to transfer and
                                                then<br />
                                                press continue to the next steps.</p>
                                            <Row className="text-center mt-5">
                                                <h1 className="fs-42px fw-bold color-web">Rp100.000</h1>
                                            </Row>
                                            <Row className="text-center mt-4">
                                                <h2 className="fs-16px fw-bold">Rp120.000 Available</h2>
                                            </Row>
                                            <Row className="d-flex justify-content-center">
                                                <Col md={6}>
                                                    <div className="input-group mb-sm-5 mt-sm-5 martop-40px">
                                                        <span className="input-group-text form color-web-gray-3" id="basic-addon1"><FiEdit2 /></span>
                                                        <input type="text" className="form-control form color-soft-gray"
                                                            placeholder="Add some notes" aria-label="Username"
                                                            aria-describedby="basic-addon1" />
                                                    </div>
                                                </Col>
                                            </Row>
                                            <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-3">
                                                <Link to={'/confirmation'} class="btn btn-primary btn-lg bg-web" type="button">Continue</Link>
                                            </div>
                                        </div>
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