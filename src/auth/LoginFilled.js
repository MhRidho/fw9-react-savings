import React from 'react';
import '../assets/css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Formik } from 'formik';
// import * as Yup from 'yup';
import { Container, Row, Col, InputGroup, Form, Stack } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import WallAuth from '../components/WallAuth';

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Login Filled</title>
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
                    <InputGroup.Text id="basic-addon1" className='form inp-logo'><FiMail className='color-A9A9A999 fs-22px' /></InputGroup.Text>
                    <Form.Control
                      id="form"
                      placeholder="Enter your e-mail"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1" className='form inp-logo'><FiLock className='color-A9A9A999 fs-22px' /></InputGroup.Text>
                    <Form.Control
                      id="form"
                      type="password"
                      placeholder="Enter your password"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                  <Stack direction="horizontal" gap={3}>
                    <div className="ms-auto mt-3 pb-5"><Link className="a-menu fs-14px fw-600" to={'/reset-password'}>Forgot password?</Link></div>
                  </Stack>
                  <div className="d-grid gap-2 pt-5">
                    <Link className='btn btn-secondary btn-lg ent-email' to={"/home"}>
                      Login
                    </Link>
                  </div>
                  <div className="form-check form-check-reverse position-relative text-center mt-5">
                    <label className="form-check-label" for="reverseCheck1">
                      Don't have an account? Let's <Link className='u-none' to={"/sign-up"}>Sign Up</Link>
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