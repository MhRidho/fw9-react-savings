import React from 'react';
import '../assets/css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Container, Row, Col, InputGroup, Form, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import WallAuth from '../components/WallAuth';

const signupSchema = Yup.object().shape({
  username: Yup.string()
    .required(),
  email: Yup.string()
    .required()
    .email('Invalid email format'),
  password: Yup.string()
    .required()
    .min(6, 'Should more than 6 characters')
    .matches(/[a-z]/g, 'Should contain at least 1 lowercase')
    .matches(/[A-Z]/g, 'Should contain at least 1 uppercase')
    .matches(/[0-9]/g, 'Should contain at least 1 number')
    .matches(/^\S*$/g, 'Should not contain spaces')
});

const AuthForm = ({ errors, handleSubmit, handleChange }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const onSignup = () => {
    localStorage.setItem('username', 'email');
    navigate('/login')
  }
  return (
    <Form noValidate>
      <InputGroup className="mb-5">
        <InputGroup.Text id="basic-addon1" className='form inp-log'><FiUser className='color-A9A9A999 fs-22px' /></InputGroup.Text>
        <Form.Control
          name="username"
          onChange={handleChange}
          id="form"
          placeholder="Enter your username"
          isInvalid={!!errors.username}
        />
        <Form.Control.Feedback type='invalid'>
          {errors.username}
        </Form.Control.Feedback>
      </InputGroup>
      <InputGroup className="mb-5">
        <InputGroup.Text id="basic-addon1" className='form inp-log'><FiMail className='color-A9A9A999 fs-22px' /></InputGroup.Text>
        <Form.Control
          name="email"
          onChange={handleChange}
          id="form"
          placeholder="Enter your e-mail"
          isInvalid={!!errors.email}
        />
        <Form.Control.Feedback type='invalid'>
          {errors.email}
        </Form.Control.Feedback>
      </InputGroup>
      <InputGroup className="mb-5">
        <InputGroup.Text id="basic-addon1" className='form inp-log'><FiLock className='color-A9A9A999 fs-22px' /></InputGroup.Text>
        <Form.Control
          name="password"
          onChange={handleChange}
          id="form"
          type="password"
          placeholder="Enter your password"
          isInvalid={!!errors.password}
        />
      </InputGroup>
      <div className="d-grid gap-2 pt-5">
        <Button className='btn btn-secondary btn-lg sign-hover' type='submit'>
          Sign Up
        </Button>
      </div>
      <div className="form-check form-check-reverse position-relative text-center my-5">
        <label className="form-check-label" for="reverseCheck1">
          Already have an account? <Link className="u-none" to={"/Login"}>Let's Login</Link>
        </label>
      </div>
    </Form>
  )
}



const Signup = () => {
  const navigate = useNavigate();
  const onSignupRequest = (val) => {
    if (val.username === 'ridho' && val.email === 'ridho@gmail.com' && val.password === 'ridho12345') {
      window.alert('Login Success')
      navigate('/home');
    } else {
      window.alert('Login Failed')
    }
  }
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
                  <Formik validationSchema={signupSchema} initialValues={{ username: '', email: '', password: '' }} onSubmit={onSignupRequest}>
                    {(props) => <AuthForm {...props} />}
                  </Formik>
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

export default Signup;