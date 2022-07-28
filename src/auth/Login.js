import React from 'react';
import '../assets/css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Container, Row, Col, InputGroup, Form, Stack, Button, Alert } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import WallAuth from '../components/WallAuth';
import { useLocation, useNavigate } from 'react-router-dom';

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address format').required(),
  password: Yup.string()
    .required()
    .min(6, 'Should more than 6 characters')
    .matches(/[a-z]/g, 'Should content at least 1 lowercase')
    .matches(/[A-Z]/g, 'Should contain at least 1 uppercase')
    .matches(/[0-9]/g, 'Should contain at least 1 number')
    .matches(/^\S*$/, 'Should not contain spaces')
})

const AuthForm = ({ errors, handleSubmit, handleChange, handleBlur }) => {

  const location = useLocation();
  const navigate = useNavigate();

  const onLogin = () => {
    localStorage.setItem('auth', 'password');
    navigate('/home')
  }
  return (
    <Form noValidate>
      <InputGroup className="mb-5" controlId='formBasicEmail'>
        <InputGroup.Text id="basic-addon1" className='inp-logo'><FiMail className='color-A9A9A999 fs-22px' /></InputGroup.Text>
        <Form.Control
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          id="form"
          placeholder="Enter your e-mail"
          isInvalid={!!errors.email}
        />
        <Form.Control.Feedback type='invalid'>
          {errors.email}
        </Form.Control.Feedback>
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1" className='inp-logo'><FiLock className='color-A9A9A999 fs-22px' /></InputGroup.Text>
        <Form.Control
          name="password"
          onChange={handleChange}
          id="form"
          type="password"
          placeholder="Enter your password"
          isInvalid={!!errors.password}
        />
        <Form.Control.Feedback type='invalid'>
          {errors.password}
        </Form.Control.Feedback>
      </InputGroup>
      <Stack direction="horizontal" gap={3}>
        <div className="ms-auto mt-3 pb-5"><Link className="a-menu fs-14px fw-600" to={'/reset-password'}>Forgot password?</Link></div>
      </Stack>
      <div className="d-grid gap-2 pt-5">

        {location.state?.errorMsg && (
          <Alert variant='danger'>{location.state.errorMsg}</Alert>
        )}
        <Button onClick={onLogin} className='btn btn-secondary btn-lg ent-email' type='submit'>
          Login
        </Button>
      </div>

    </Form>
  )
}


const Login = () => {
  const navigate = useNavigate();
  const onLoginRequest = (val) => {
    if (val.email === 'ridho@gmail.com' && val.password === 'Ridho12345') {
      window.alert('Login Success')
      navigate('/home');
    } else {
      window.alert('Login Failed')
    }
  }

  return (
    <>
      <Helmet>
        <title>Login</title>
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

                  <Formik validationSchema={loginSchema} onSubmit={onLoginRequest} initialValues={{ email: '', password: '' }} >
                    {(props) => <AuthForm {...props} />}
                  </Formik>

                  <div className="form-check form-check-reverse position-relative text-center my-5">
                    <label className="form-check-label" for="reverseCheck1">
                      Don't have an account? Let's <Link className='have-signup' to={"/sign-up"}>Sign Up</Link>
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