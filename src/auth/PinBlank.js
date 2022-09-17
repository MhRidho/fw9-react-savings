import React, { useEffect } from 'react';
import '../assets/css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Formik } from 'formik';
// import * as Yup from 'yup';
import { Container, Row, Col, InputGroup, Form, Button, Alert } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import Wallauth from '../components/WallAuth';
import { pinregis } from '../redux/asyncActions/auth';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';

const EnterPin = ({ handleSubmit, handleChange }) => {
  const successMsg = useSelector((state) => state.auth.successMsg);
  const errorMsg = useSelector((state) => state.auth.errorMsg);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        {successMsg && <Alert variant='success'>{successMsg}</Alert>}
        {errorMsg && <Alert variant='danger'>{errorMsg}</Alert>}
        <InputGroup className="mb-5 d-flex gap-3">
          <Form.Control className='form-pin'
            name='pin1'
            maxLength={1}
            onChange={handleChange} />
          <Form.Control className='form-pin'
            name='pin2'
            maxLength={1}
            onChange={handleChange} />
          <Form.Control className='form-pin'
            name='pin3'
            maxLength={1}
            onChange={handleChange} />
          <Form.Control className='form-pin'
            name='pin4'
            maxLength={1}
            onChange={handleChange} />
          <Form.Control className='form-pin'
            name='pin5'
            maxLength={1}
            onChange={handleChange} />
          <Form.Control className='form-pin'
            name='pin6'
            maxLength={1}
            onChange={handleChange} />
        </InputGroup>
        <div className="d-grid gap-2 py-5">
          <Button className='d-grid' variant="secondary" size="lg">
            <Button className='btn btn-secondary btn-lg sign-hover' type='submit'>
              Confirm
            </Button>
          </Button>
        </div>
      </Form>
    </>
  )
}

const PinBlank = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useSelector(state => state.auth.email);
  const successMsg = useSelector((state) => state.auth.successMsg);
  const errorMsg = useSelector((state) => state.auth.errorMsg);

  const onPinRegister = (value) => {
    const pin = value.pin1 + value.pin2 + value.pin3 + value.pin4 + value.pin5 + value.pin6;
    const data = { email, pin }
    if (pin.length !== 6) {
      window.alert('Pin Not Available');
    } else {
      dispatch(pinregis(data));
      navigate('/pin-success');
    }
  }

  useEffect(() => {
    if (successMsg) {
      console.log('succes regis')
    }
  }, [navigate, successMsg]);

  return (
    <>
      <Helmet>
        <title>Pin Blank</title>
      </Helmet>

      {/* START HOME LOGIN */}
      <Container fluid>
        <Row>
          <Wallauth />

          <Col md={5} >
            <Row className="mx-4">
              <Col md={10}>
                <div>
                  <h1 className="martop-120px fs-24px fw-700 line-height-32px color-3A3D42">Secure Your Account, Your Wallet,
                    and Your Data With 6 Digits PIN
                    That<br /> You Created Yourself.</h1>
                </div>
                <div>
                  <p className="martop-30px fs-16px color-3A3D4299 line-height-30px">
                    Create 6 digits pin to secure all your money and your data in Zwallet app. Keep it secret and don't tell anyone about your Zwallet account password and the PIN.
                  </p>
                </div>

                <div className="mt-5">
                  <Formik initialValues={{ pin1: '', pin2: '', pin3: '', pin4: '', pin5: '', pin6: '' }} onSubmit={onPinRegister}>
                    {(props) => <EnterPin {...props} />}
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

export default PinBlank;