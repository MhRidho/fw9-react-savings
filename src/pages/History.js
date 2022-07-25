import React from 'react'
import { Container, Navbar, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Robert52 from '../assets/img/Robert52.png';
import Satu from '../assets/img/sam1.png';
import Dua from '../assets/img/chris56.png';
import Netflix from '../assets/img/netflix.png';
import Adobe from '../assets/img/adobe.png';
import { FiBell, FiArrowUp, FiPlus, FiGrid, FiUser, FiLogOut } from 'react-icons/fi';
import { Helmet } from 'react-helmet';
import '../assets/css/stylesStartHome.css';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home</title>
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
                                                <Link className="ank-menu" to={'/home'}><FiGrid className='mx-4' />Dashboard</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="ank-menu" to={'/searchreceiver'}><FiArrowUp className='mx-4' />Transfer</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="ank-menu" to={'/topup'}><FiPlus className='mx-4' />Top Up</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="ank-menu" to={'/profile'}><FiUser className='mx-4' />Profile</Link>
                                            </li>
                                            <li className="nav-item martop-270px">
                                                <Link className="ank-menu" to={'/landing'}><FiLogOut className='mx-4' />Logout</Link>
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