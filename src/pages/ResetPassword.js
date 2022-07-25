import React from 'react';
import '../assets/css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Formik } from 'formik';
// import * as Yup from 'yup';
import { Container, Row, Col, InputGroup, Form } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { FiMail } from 'react-icons/fi';
import Group57 from '../assets/img/Group-57.png';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <Helmet>
                <title>Reset Password</title>
            </Helmet>

            {/* START HOME LOGIN */}
            <Container fluid>
                <Row>
                    <Col md={7} className="pb-md-5 ps-md-5 cover pt-5">
                        <h1 className="ms-md-5"><Link className="home-wallet marleft-40px" to={'/landing'}>Savings</Link>
                        </h1>
                        <img src={Group57} alt="Group-57" className="ms-md-5" />
                        <div className="ms-md-5">
                            <div className="marleft-40px">
                                <h1 className="text-light fw-700 fs-24px">App that Covering Banking Needs.</h1>
                                <p className="mt-4 text-white fw-400 fs-16px">Zwallet is an application that focussing in banking
                                    needs
                                    for all users<br />
                                    in the world. Always updated and always following world trends.<br />
                                    5000+ users registered in Zwallet everyday with worldwide<br />
                                    users coverage.</p>
                            </div>
                        </div>
                    </Col>

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
                                        To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.
                                    </p>
                                </div>

                                <div className="mt-5">
                                    <InputGroup className="mb-5">
                                        <InputGroup.Text id="basic-addon1" className='form'><FiMail className='color-A9A9A999 fs-22px' /></InputGroup.Text>
                                        <Form.Control
                                            id="form"
                                            placeholder="Enter your e-mail"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                    <div className="d-grid gap-2 py-5">
                                        <Link className='btn btn-secondary btn-lg color-88888F ent-email' to={"/newpassword"}>
                                            Confirm
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