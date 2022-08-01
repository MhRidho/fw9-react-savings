import { Formik } from 'formik';
import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../assets/css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Yup from 'yup';
import { Container, Row, Col, InputGroup, Form, Button, Alert } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import WallAuth from '../components/WallAuth';
import { register } from '../redux/asyncActions/auth';

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

const RegisterForm = (props) => {
  const navigate = useNavigate();
  const successMsg = useSelector((state) => state.auth.successMsg);
  const errorMsg = useSelector((state) => state.auth.errorMsg);
  console.log(successMsg);

  useEffect(() => {
    if (successMsg) {
      console.log(successMsg);
      navigate('/login', { state: { successMsg } });
    }
  }, [navigate, successMsg]);

  // const onSignup = () => {
  //   localStorage.setItem('username', 'email');
  //   navigate('/login')
  // }
  return (
    <Form noValidate onSubmit={props.handleSubmit}>
      {errorMsg && <Alert variant='danger'>{errorMsg}</Alert>}
      <InputGroup className="mb-5">
        <InputGroup.Text id="basic-addon1" className='form inp-log'><FiUser className='color-A9A9A999 fs-22px' /></InputGroup.Text>
        <Form.Control
          type="username"
          name="username"
          value={props.values.username}
          onChange={props.handleChange}
          id="form"
          placeholder="Enter your username"
          isInvalid={!!props.errors.username}
        />
        <Form.Control.Feedback type='invalid'></Form.Control.Feedback>
      </InputGroup>
      <InputGroup className="mb-5">
        <InputGroup.Text id="basic-addon1" className='form inp-log'><FiMail className='color-A9A9A999 fs-22px' /></InputGroup.Text>
        <Form.Control
          type="email"
          name="email"
          value={props.values.email}
          onChange={props.handleChange}
          id="form"
          placeholder="Enter your e-mail"
          isInvalid={!!props.errors.email}
        />
        <Form.Control.Feedback type='invalid'></Form.Control.Feedback>
      </InputGroup>
      <InputGroup className="mb-5">
        <InputGroup.Text id="basic-addon1" className='form inp-log'><FiLock className='color-A9A9A999 fs-22px' /></InputGroup.Text>
        <Form.Control
          type="password"
          name="password"
          value={props.values.password}
          onChange={props.handleChange}
          id="form"
          placeholder="Enter your password"
          isInvalid={!!props.errors.password}
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
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();

  const onSignupRequest = (value) => {
    dispatch(register(value));
  };

  useEffect(() => {
    if (token) {
      navigate('/home')
    }
  }, [navigate, token]);

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
                    {(props) => <RegisterForm {...props} />}
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