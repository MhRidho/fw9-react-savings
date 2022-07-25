import { React, useState, useEffect } from 'react';
import { Container, Navbar, Row, Col, InputGroup, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Robert52 from '../assets/img/Robert52.png';
import Satu from '../assets/img/sam70.png';
import Momo from '../assets/img/momo.png';
import Jes70 from '../assets/img/jes70.png';
import Mic70 from '../assets/img/mic70.png';
import { FiBell, FiArrowUp, FiPlus, FiGrid, FiUser, FiLogOut, FiSearch } from 'react-icons/fi';
import { Helmet } from 'react-helmet';
import '../assets/css/stylesStartHome.css';

const Home = () => {
    const [receivers, setReceivers] = useState([]);

    useEffect(() => {
        getReceivers();
    }, [])

    const getReceivers = () => {
        const response = {
            success: true,
            message: 'List Users',
            "results": [
                {
                    "id": 1,
                    "img": Satu,
                    "name": "Samuel Suhi",
                    "phone": '+62 813-8492-9994'
                },
                {
                    "id": 2,
                    "img": Momo,
                    "name": "Momo Taro",
                    "phone": '+62 812-4343-6731'
                },
                {
                    "id": 3,
                    "img": Jes70,
                    "name": "Jessica Keen",
                    "phone": '+62 811-3452-5252'
                },
                {
                    "id": 4,
                    "img": Mic70,
                    "name": "Michael Le",
                    "phone": '+62 810-4224-4613'
                }
            ]
        }
        setReceivers(response.results);
    }

    return (
        <>
            <Helmet>
                <title>Search Receiver</title>
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
                                            <li className="nav-item martop-313px">
                                                <Link className="ank-menu" to={'/landing'}><FiLogOut className='mx-4 fs-24px' />Logout</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </Row>
                            </Col>

                            <div class="col ms-md-3">
                                <div class="row d-flex justify-content-between rounded-4 pt-5 px-4 bg-white mt-1">
                                    <div class="col pb-2 f-color-g">
                                        <div class="d-flex justify-content-between mb-3">
                                            <h1 class="fs-18px fw-bold">Search Receiver</h1>
                                        </div>
                                        <InputGroup size="lg" className="mb-3">
                                            <InputGroup.Text id="basic-addon1" className='s-receiver'><FiSearch className='color-A9A9A9' /></InputGroup.Text>
                                            <Form.Control
                                                className='s-receiver'
                                                placeholder="Search receiver here"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                            />
                                        </InputGroup>

                                        <div>
                                            {receivers.map((receiver) => (
                                                <div
                                                    class="nav justify-content-between d-flex align-items-center mt-4 shadow-sm p-3 mb-2 bg-body rounded">
                                                    <Row><img src={receiver.img} alt="3.png" className='mar-right-20px' /></Row>
                                                    <Col className="ms-3">
                                                        <Link className="u-none color-4D4B57" to={'/inputamountblank'}><h1 class="mt-3 fs-16px fw-bold">{receiver.name}</h1></Link>
                                                        <p class="fs-14px">{receiver.phone}</p>
                                                    </Col>
                                                </div>
                                            ))}
                                            {/* <div
                                                class="nav justify-content-between d-flex align-items-center mt-4 shadow-sm p-3 mb-2 bg-body rounded">
                                                <Row><img src={Satu} alt="3.png" className='mar-right-20px' /></Row>
                                                <Col className="ms-3">
                                                    <Link className="u-none color-4D4B57" to={'/inputamountblank'}><h1 class="mt-3 fs-16px fw-bold">Samuel Suhi</h1></Link>
                                                    <p class="fs-14px">+62 813-8492-9994</p>
                                                </Col>
                                            </div>
                                            <div
                                                class="nav justify-content-between d-flex align-items-center shadow-sm p-3 mb-2 bg-body rounded">
                                                <Row><img src={Momo} alt="3.png" className='mar-right-20px' /></Row>
                                                <Col className="ms-3">
                                                    <h1 className="mt-3 fs-16px fw-bold">Momo Taro</h1>
                                                    <p className='fs-14px'>+62 812-4343-6731</p>
                                                </Col>
                                            </div>
                                            <div
                                                class="nav justify-content-between d-flex align-items-center shadow-sm p-3 mb-2 bg-body rounded">
                                                <Row><img src={Jes70} alt="3.png" className='mar-right-20px' /></Row>
                                                <Col className="ms-3">
                                                    <h1 className="mt-3 fs-16px fw-bold">Jessica Keen</h1>
                                                    <p className="fs-14px">+62 811-3452-5252</p>
                                                </Col>
                                            </div>
                                            <div
                                                class="nav justify-content-between d-flex align-items-center shadow-sm p-3 bg-body rounded">
                                                <Row><img src={Mic70} alt="3.png" className='mar-right-20px' /></Row>
                                                <Col className='ms-3'>
                                                    <h1 class="mt-3 fs-16px fw-bold">Michael Le</h1>
                                                    <p className="fs-14px">+62 810-4224-4613</p>
                                                </Col>
                                            </div> */}
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