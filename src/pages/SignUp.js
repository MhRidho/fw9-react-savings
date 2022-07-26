import React from 'react';
import '../assets/css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Formik } from 'formik';
// import * as Yup from 'yup';
import { Container, Row, Col, InputGroup, Form } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import WallAuth from '../components/WallAuth';

const Login = () => {
    return (
        <>
            <Helmet>
                <title>Sign Up</title>
            </Helmet>

            {/* START HOME LOGIN */}
            <Container fluid>
                <Row>
                    <WallAuth />

                    <Col md={5} >
                        <Row className="mx-4">
                            <Col md={10}>
                                <div>
                                    <h1 className="martop-120px fs-24px fw-700 line-height-32px color-3A3D42">Start Accessing Banking Needs<br />
                                        With All Devices and All Platforms<br />
                                        With 30.000+ Users</h1>
                                </div>
                                <div>
                                    <p className="martop-30px fs-16px color-3A3D4299 line-height-30px">
                                        Transfering money is eassier than ever, you can access<br />
                                        Zwallet wherever you are. Desktop,
                                        laptop, mobile phone?<br />
                                        we cover all of that for you!
                                    </p>
                                </div>

                                <div className="mt-5">
                                    <InputGroup className="mb-5">
                                        <InputGroup.Text id="basic-addon1" className='form inp-log'><FiUser className='color-A9A9A999 fs-22px' /></InputGroup.Text>
                                        <Form.Control
                                            id="form"
                                            placeholder="Enter your username"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                    <InputGroup className="mb-5">
                                        <InputGroup.Text id="basic-addon1" className='form inp-log'><FiMail className='color-A9A9A999 fs-22px' /></InputGroup.Text>
                                        <Form.Control
                                            id="form"
                                            placeholder="Enter your e-mail"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                    <InputGroup className="mb-5">
                                        <InputGroup.Text id="basic-addon1" className='form inp-log'><FiLock className='color-A9A9A999 fs-22px' /></InputGroup.Text>
                                        <Form.Control
                                            id="form"
                                            type="password"
                                            placeholder="Enter your password"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                    <div className="d-grid gap-2 pt-5">
                                        <Link className='btn btn-secondary btn-lg sign-hover' to={"/login-filled"}>
                                            Sign Up
                                        </Link>
                                    </div>
                                    <div className="form-check form-check-reverse position-relative text-center my-5">
                                        <label className="form-check-label" for="reverseCheck1">
                                            Already have an account? <Link className="u-none" to={"/Login"}>Let's Login</Link>
                                        </label>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            {/* END HOME LOGIN */}
        </>
    )
}

export default Login;