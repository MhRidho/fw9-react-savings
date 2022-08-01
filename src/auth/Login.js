import { React, useEffect } from 'react';
import '../assets/css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Container, Row, Col, InputGroup, Form, Stack, Button, Alert } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { FiMail, FiLock } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import WallAuth from '../components/WallAuth';
import { login } from '../redux/asyncActions/auth';
import { useDispatch, useSelector } from 'react-redux';

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

const LoginForm = (props) => {
  const successMsg = useSelector((state) => state.auth.successMsg);
  const errorMsg = useSelector((state) => state.auth.errorMsg);
  return (
    <Form noValidate onSubmit={props.handleSubmit}>
      {successMsg && <Alert variant='success'>{successMsg}</Alert>}
      {errorMsg && <Alert variant='danger'>{errorMsg}</Alert>}
      <InputGroup className="mb-5" controlId='formBasicEmail'>
        <InputGroup.Text id="basic-addon1" className='inp-logo'><FiMail className='color-A9A9A999 fs-22px' /></InputGroup.Text>
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
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1" className='inp-logo'><FiLock className='color-A9A9A999 fs-22px' /></InputGroup.Text>
        <Form.Control
          type="password"
          name="password"
          value={props.values.password}
          onChange={props.handleChange}
          id="form"
          placeholder="Enter your password"
          isInvalid={!!props.errors.password}
        />
        <Form.Control.Feedback type='invalid'></Form.Control.Feedback>
      </InputGroup>
      <Stack direction="horizontal" gap={3}>
        <div className="ms-auto mt-3 pb-5"><Link className="a-menu fs-14px fw-600" to={'/reset-password'}>Forgot password?</Link></div>
      </Stack>
      <div className="d-grid gap-2 pt-5">
        <Button className='btn btn-secondary btn-lg ent-email' type='submit'>
          Login
        </Button>
      </div>

    </Form>
  );

};




const Login = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();

  const onLogin = (value) => {
    const data = { email: value.email, password: value.password };
    dispatch(login(data));
  };
  useEffect(() => {
    if (token) {
      navigate('/home');
    }
  }, [navigate, token]);

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

                  <Formik validationSchema={loginSchema} onSubmit={onLogin} initialValues={{ email: '', password: '' }} >
                    {(props) => <LoginForm {...props} />}
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