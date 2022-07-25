import { React } from 'react'
import { Container, Navbar, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Robert52 from '../assets/img/Robert52.png';
import { FiBell, FiArrowUp, FiPlus, FiGrid, FiUser, FiLogOut, FiLock } from 'react-icons/fi';
import { Helmet } from 'react-helmet';
import '../assets/css/stylesStartHome.css';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Change Password</title>
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
                                <Row className="d-flex justify-content-between rounded-4 pt-5 px-4 bg-white mt-1 pad-bot-115px">
                                    <Col className="pb-2 f-color-g">
                                        <div class="d-flex justify-content-between mb-2">
                                            <h1 class="fs-18px fw-bold">Change Password</h1>
                                        </div>
                                        <div>
                                            <div class="d-flex justify-content-between my-4">
                                                <span>You must enter your current password and then<br /> type your new password
                                                    twice.</span>
                                            </div>
                                            <div
                                                class="col-md-7 nav justify-content-between d-flex align-items-center mt-5  bg-body rounded m-auto bg-profile">
                                                <div class="input-group my-4">
                                                    <span class="input-group-text form color-web-gray-3 pb-3" id="basic-addon1"><FiLock /></span>
                                                    <input type="password" class="form-control form fs-16px pb-3"
                                                        placeholder="Current password" aria-label="Username"
                                                        aria-describedby="basic-addon1" />
                                                </div>
                                            </div>
                                            <div
                                                class="col-md-7 nav justify-content-between d-flex align-items-center bg-body rounded m-auto bg-profile">
                                                <div class="input-group my-4">
                                                    <span class="input-group-text form color-web-gray-3 pb-3" id="basic-addon1"><FiLock /></span>
                                                    <input type="password" class="form-control form fs-16px pb-3"
                                                        placeholder="New password" aria-label="Username"
                                                        aria-describedby="basic-addon1" />
                                                </div>
                                            </div>
                                            <div
                                                class="col-md-7 nav justify-content-between d-flex align-items-center bg-body rounded m-auto bg-profile">
                                                <div class="input-group my-4">
                                                    <span class="input-group-text form color-web-gray-3 pb-3" id="basic-addon1"><FiLock /></span>
                                                    <input type="password" class="form-control form fs-16px pb-3"
                                                        placeholder="Repeat new password" aria-label="Username"
                                                        aria-describedby="basic-addon1" />
                                                </div>
                                            </div>
                                            <div class="col-md-7 m-auto">
                                                <div class="d-grid gap-2">
                                                    <Link
                                                        class="a-login color-btn-bef btn btn-primary btn-lg bg-btn-bef mt-5" to={'/profile'}>Change
                                                        Password</Link>
                                                </div>
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