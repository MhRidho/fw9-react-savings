import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Satu from '../assets/img/sam70.png';
import { FiArrowUp, FiPlus, FiGrid, FiUser, FiLogOut, FiEdit2 } from 'react-icons/fi';
import { Helmet } from 'react-helmet';
import '../assets/css/stylesStartHome.css';
import Nav from '../components/navbar';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Input Amount Blank</title>
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
                                            <li className="nav-item martop-270px">
                                                <Link className="ank-menu" to={'/landing'}><FiLogOut className='mx-4 fs-24px' />Logout</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </Row>
                            </Col>

                            <div className="col ms-md-3">
                                <div className="row d-flex justify-content-between rounded-4 py-5 px-4 bg-white mt-1">
                                    <div className="col pb-2 f-color-g">
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
                                            <p class="mt-4 fs-16px color-soft-gray-2">Type the amount you want to transfer and
                                                then<br />
                                                press continue to the next steps.</p>
                                            <div class="row text-center mt-5">
                                                <h1 class="fs-42px fw-bold color-soft-gray">0.00</h1>
                                            </div>
                                            <div class="row text-center mt-4">
                                                <h2 class="fs-16px fw-bold">Rp120.000 Available</h2>
                                            </div>
                                            <div class="row d-flex justify-content-center">
                                                <div class="col-md-6">
                                                    <div class="input-group mb-sm-5 mt-sm-5 martop-40px">
                                                        <span class="input-group-text form color-web-gray-3" id="basic-addon1"><FiEdit2 /></span>
                                                        <input type="password" class="form-control form color-soft-gray"
                                                            placeholder="Add some notes" aria-label="Username"
                                                            aria-describedby="basic-addon1" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-3">
                                                <Link to={'/input-amount-filled'} class="btn btn-primary btn-lg bg-web" type="button">Continue</Link>
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