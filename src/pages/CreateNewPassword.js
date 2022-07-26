import React from 'react';
import '../assets/css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Formik } from 'formik';
// import * as Yup from 'yup';
import { Container, Row, Col, InputGroup, Form } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import WallAuth from '../components/WallAuth';

const Login = () => {
    return (
        <>
            <Helmet>
                <title>Create New Password</title>
            </Helmet>

            {/* START HOME LOGIN */}
            <Container fluid>
                <Row>
                    <WallAuth />

                    <Col md={5} >
                        <Row className="mx-4">
                            <Col md={10}>
                                <div>
                                    <h1 className="martop-120px fs-24px fw-700 line-height-32px color-3A3D42">Did You Forgot Your Password?
                                        Don't Worry, You Can Reset Your
                                        Password In a Minutes.</h1>
                                </div>
                                <div>
                                    <p className="martop-30px fs-16px color-3A3D4299 line-height-30px">
                                        Now you can create a new password for your Zwallet account. Type your password twice so we can confirm your new passsword.
                                    </p>
                                </div>

                                <div className="mt-5">
                                    <InputGroup className="mb-5">
                                        <InputGroup.Text id="basic-addon1" className='form'><FiLock className='color-A9A9A999 fs-22px' /></InputGroup.Text>
                                        <Form.Control
                                            id="form"
                                            type="password"
                                            placeholder="Create new password"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                    <InputGroup className="mb-5">
                                        <InputGroup.Text id="basic-addon1" className='form'><FiLock className='color-A9A9A999 fs-22px' /></InputGroup.Text>
                                        <Form.Control
                                            id="form"
                                            placeholder="Create new password"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                    <div className="d-grid gap-2 py-5">
                                        <Link className='btn btn-secondary btn-lg color-88888F ent-email' to={"/login-filled"}>
                                            Reset Password
                                        </Link>
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