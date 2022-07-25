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
                <title>New Pin</title>
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