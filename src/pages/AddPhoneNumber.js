import { React } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiPhone } from 'react-icons/fi';
import { Helmet } from 'react-helmet';
import '../assets/css/stylesStartHome.css';
import Nav from '../components/navbar';
import Aside from '../components/asideMenu';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Add Phone Number</title>
            </Helmet>

            <div className='background-home'>
                <Nav />
                <section>
                    <Container>
                        <Row className="mx-5">
                            <Aside />

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

                <Footer />
            </div>
        </>
    )
}

export default Home;