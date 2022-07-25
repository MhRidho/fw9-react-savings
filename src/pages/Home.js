import { React, useState, useEffect } from 'react'
import { Container, Navbar, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Robert52 from '../assets/img/Robert52.png';
import Graphic from '../assets/img/graphic.png';
import Satu from '../assets/img/sam1.png';
import Dua from '../assets/img/chris56.png';
import Netflix from '../assets/img/netflix.png';
import Adobe from '../assets/img/adobe.png';
import { FiBell, FiArrowUp, FiPlus, FiGrid, FiUser, FiLogOut, FiArrowDown } from 'react-icons/fi';
import { Helmet } from 'react-helmet';
import '../assets/css/stylesStartHome.css';

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = () => {
        const response = {
            success: true,
            message: 'List Users',
            "results": [
                {
                    "id": 1,
                    "img": Satu,
                    "name": "Samuel Suhi",
                    "transtype": 'Transfer',
                    "amount": '50.000'
                },
                {
                    "id": 2,
                    "img": Netflix,
                    "name": "Netflix",
                    "transtype": 'Subscription',
                    "amount": '149.000'
                },
                {
                    "id": 3,
                    "img": Dua,
                    "name": "Christine Mar...",
                    "transtype": 'Transfer',
                    "amount": '150.000'
                },
                {
                    "id": 4,
                    "img": Adobe,
                    "name": "Adobe Inc.",
                    "transtype": 'Subscription',
                    "amount": '249.000'
                }
            ]
        }
        setUsers(response.results);
    }

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
                                        <h1 className="fs-18px fw-bold mt-1">Robert Chandler</h1>
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
                                            <li className="nav-item martop-277px">
                                                <Link className="ank-menu" to={'/landing'}><FiLogOut className='mx-4 fs-24px' />Logout</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </Row>
                            </Col>
                            <Col className="ms-md-2 mt-1">
                                <Row className="d-flex justify-content-between rounded-4 py-4 ps-4 main-section">
                                    <div className="col">
                                        <span className="fs-18px">Balance</span>
                                        <h1 className="fs-40px">Rp120.000</h1>
                                        <p className="fs-14px">+62 813-9387-7946</p>
                                    </div>
                                    <div className="col-md-3 d-flex flex-column justify-content-evenly ps-md-4">
                                        <Link className="btn btn-primary btn-lg btn-main-section" to={'/searchreceiver'}><FiArrowUp className="mx-2" />Transfer</Link>
                                        <Link className="btn btn-primary btn-lg btn-main-section mt-2" to={'/topup'}><FiPlus className="mx-2" />Top Up</Link>
                                    </div>
                                </Row>
                                <Row className="mt-md-3">
                                    <Col md={7} className="bg-white rounded-4 p-4 mt-1">
                                        <Row className="d-flex justify-content-between">
                                            <Col md={8} className='m-2'>
                                                <span className="input-group color-green-web pb-2"><FiArrowDown /></span>
                                                <span className="fs-14px">Income</span>
                                                <h1 className="mt-2 fw-bold fs-18px">Rp2.120.000</h1>
                                            </Col>
                                            <Col className='m-2'>
                                                <span className="input-group color-red pb-2"><FiArrowUp /></span>
                                                <span className="fs-14px">Expense</span>
                                                <h1 className="mt-2 fw-bold fs-18px">Rp1.560.000</h1>
                                            </Col>
                                        </Row>
                                        <Row className="d-flex justify-content-center mt-5">
                                            <Col md={10}>
                                                <img fluid src={Graphic} alt="graphic.png" />
                                            </Col>
                                        </Row>
                                    </Col>

                                    <Col className="bg-white rounded-4 ms-md-3 p-4 mt-1">
                                        <Row>
                                            <Col className="d-flex justify-content-between mt-1">
                                                <h1 className="fs-18px fw-bold mt-1">Transaction History</h1>
                                                <Link className="a-menu" to={'/history'}><span className="fs-14px color-web">See
                                                    all</span></Link>
                                            </Col>
                                        </Row>

                                        <div>
                                            {users.map((user) => (
                                                <div class="nav justify-content-between d-flex align-items-center mt-4">
                                                    <Row>
                                                        <img src={user.img} alt="3.png" className="me-3" />
                                                    </Row>
                                                    <div class="col">
                                                        <h1 class="mt-3 fs-16px fw-bold ms-4">{user.name}</h1>
                                                        <p class="fs-14px ms-4">{user.transtype}</p>
                                                    </div>
                                                    <span class="fs-16px fw-bold color-green-web">+Rp{user.amount}</span>
                                                </div>
                                            ))}

                                            {/* <div class="nav justify-content-between d-flex align-items-center mt-4">
                                                <Row>
                                                    <img src={Netflix} alt="3.png" class="me-3" />
                                                </Row>
                                                <div class="col">
                                                    <h1 class="mt-3 fs-16px fw-bold ms-4">Netflix</h1>
                                                    <p class="fs-14px ms-4">Subscription</p>
                                                </div>
                                                <span class="fs-16px fw-bold color-red">-Rp149.000</span>
                                            </div>
                                            <div class="nav justify-content-between d-flex align-items-center mt-4">
                                                <Row>
                                                    <img src={Dua} alt="3.png" class="me-3" />
                                                </Row>
                                                <div class="col">
                                                    <h1 class="mt-3 fs-16px fw-bold ms-4">Christine Mar...</h1>
                                                    <p class="fs-14px ms-4">Transfer</p>
                                                </div>
                                                <span class="fs-16px fw-bold color-green-web">+Rp150.000</span>
                                            </div>
                                            <div class="nav justify-content-between d-flex align-items-center mt-4">
                                                <Row>
                                                    <img src={Adobe} alt="3.png" class="me-3" />
                                                </Row>
                                                <div class="col">
                                                    <h1 class="mt-3 fs-16px fw-bold ms-4">Adobe Inc.</h1>
                                                    <p class="fs-14px ms-4">Subscription</p>
                                                </div>
                                                <span class="fs-16px fw-bold color-red">-Rp249.000</span>
                                            </div> */}
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