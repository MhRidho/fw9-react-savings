import { React } from 'react'
import { Container, Navbar, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Robert52 from '../assets/img/Robert52.png';
import { FiBell, FiArrowUp, FiPlus, FiGrid, FiUser, FiLogOut, FiPhone } from 'react-icons/fi';
import { Helmet } from 'react-helmet';
import '../assets/css/stylesStartHome.css';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Add Phone Number</title>
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
                                        <div class="d-flex justify-content-between mb-2">
                                            <h1 class="fs-18px fw-bold">Add Phone Number</h1>
                                        </div>
                                        <div>
                                            <div class="d-flex justify-content-between my-4 pb-4">
                                                <span>Add at least one phone number for the transfer<br /> ID so you can start transfering your money to<br /> another user.</span>
                                            </div>
                                            <div class="col-md-7 mx-auto mt-5 pb-4">
                                                <div class="d-flex flex-column">
                                                    <div class="row">
                                                        <div class="input-group mb-3 martop-73px">
                                                            <span class="input-group-text form" id="basic-addon1"><FiPhone />
                                                                <h5 class="ms-2 mt-2">+62</h5>
                                                            </span>
                                                            <input type="password" className="form-control form color-web-gray-3 fs-16px"

                                                                placeholder="Enter your phone number" aria-label="Username"
                                                                aria-describedby="basic-addon1" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-7 m-auto pb-5">
                                                <div class="d-grid gap-2">
                                                    <Link
                                                        className="a-login color-btn-bef btn btn-primary btn-lg bg-btn-bef mt-5" to={'/managephone'}>Add Phone Number</Link>
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