import { React, useEffect } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../assets/css/stylesStartHome.css';
import Nav from '../components/navbar';
import Footer from '../components/Footer';
import AsideMenu from '../components/AsideMenu';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { pinregis } from '../redux/asyncActions/auth';

const EnterPin = ({ handleSubmit, handleChange }) => {
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Col md={7} className="mx-auto mt-5 pb-4">

          <div className="d-flex flex-column">
            <Row>
              <Col>
                <input type="text"
                  name='pin1' minLength={1} onChange={handleChange}
                  className="form-control form-control-lg pin-centered text-center fw-bold" />
              </Col>
              <Col>
                <input type="text"
                  name='pin2' minLength={1} onChange={handleChange}
                  className="form-control form-control-lg pin-centered text-center fw-bold" />
              </Col>
              <Col>
                <input type="text"
                  name='pin3' minLength={1} onChange={handleChange}
                  className="form-control form-control-lg pin-centered text-center fw-bold" />
              </Col>
              <Col>
                <input type="text"
                  name='pin4' minLength={1} onChange={handleChange}
                  className="form-control form-control-lg pin-centered text-center fw-bold" />
              </Col>
              <Col>
                <input type="text"
                  name='pin5' minLength={1} onChange={handleChange}
                  className="form-control form-control-lg pin-centered text-center fw-bold" />
              </Col>
              <Col>
                <input type="text"
                  name='pin6' minLength={1} onChange={handleChange}
                  className="form-control form-control-lg pin-centered text-center fw-bold" />
              </Col>
            </Row>
          </div>
        </Col>
        <Col md={7} className="m-auto pb-5">
          <div className="d-grid gap-2">
            <Button
              className="btn btn-primary btn-lg bg-btn-bef mt-5" type='submit'>Continue</Button>
          </div>
        </Col>
      </Form>
    </>
  )
}

const AddPin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const profile = useSelector(state => state.profile.data);
  const email = useSelector(state => state.auth.email);
  const success = useSelector(state => state.auth.successMsg);

  const onCreatePin = (value) => {
    const pin = value.pin1 + value.pin2 + value.pin3 + value.pin4 + value.pin5 + value.pin6;
    if (pin.length !== 6) {
      window.alert('Pin Not Available');
    } else {
      console.log('masuk dispatch')
      dispatch(pinregis({ email, pin }))
    }
  }

  useEffect(() => {
    if (success) {
      navigate('/home')
    }
  }, [navigate, success])

  return (
    <>
      <Helmet>
        <title>Add Pin</title>
      </Helmet>

      <div className='background-home'>
        <Nav name={profile.fullname} phone={profile.phonenumber} />

        <section>
          <Container>
            <Row className="mx-5">
              <AsideMenu />

              <Col className="ms-md-3">
                <Row className="d-flex justify-content-between rounded-4 pt-5 px-4 bg-white mt-1 pad-bot-253px">
                  <Col className="pb-2 f-color-g">
                    <div className="d-flex justify-content-between mb-2">
                      <h1 className="fs-18px fw-bold">Add PIN</h1>
                    </div>
                    <div>
                      <div class="d-flex justify-content-between my-4 pb-4">
                        <span>Enter your 6 digits Savings PIN below to continue to the next
                          steps.</span>
                      </div>
                      <Formik initialValues={{ pin1: '', pin2: '', pin3: '', pin4: '', pin6: '' }} onSubmit={onCreatePin}>
                        {(props) => <EnterPin {...props} />}
                      </Formik>
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

export default AddPin;