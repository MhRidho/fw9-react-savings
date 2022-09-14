import { React, useEffect, useState } from 'react'
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Satu from '../assets/img/sam70.png';
import { Helmet } from 'react-helmet';
import '../assets/css/stylesStartHome.css';
import Nav from '../components/navbar';
import AsideMenu from '../components/AsideMenu';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from "react-redux";
import { transfer } from '../redux/asyncActions/transfer';
import { Formik } from 'formik';

const EnterPin = ({ handleSubmit, handleChange }) => {
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <p>Enter your 6 digits PIN for confirmation to continue transferring
            money. </p>
          <div className="d-flex flex-column my-5">

            <Row>
              <Col>
                <input type="text" name="pin1" maxLength={1} onChange={handleChange}
                  className="form-control form-control-lg pin-centered text-center fw-bold" />
              </Col>
              <Col>
                <input type="text" name="pin2" maxLength={1} onChange={handleChange}
                  className="form-control form-control-lg pin-centered text-center fw-bold" />
              </Col>
              <Col>
                <input type="text" name="pin3" maxLength={1} onChange={handleChange}
                  className="form-control form-control-lg pin-centered text-center fw-bold" />
              </Col>
              <Col>
                <input type="text" name="pin4" maxLength={1} onChange={handleChange}
                  className="form-control form-control-lg pin-centered text-center fw-bold" />
              </Col>
              <Col>
                <input type="text" name="pin5" maxLength={1} onChange={handleChange}
                  className="form-control form-control-lg pin-centered text-center fw-bold" />
              </Col>
              <Col>
                <input type="text" name="pin6" maxLength={1} onChange={handleChange}
                  className="form-control form-control-lg pin-centered text-center fw-bold" />
              </Col>
            </Row>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button type='submit'
            className="btn btn-primary btn-lg bg-web text-white u-none">Continue</Button>
        </Modal.Footer>
      </Form>
    </>
  )
}


const ModalCenter = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const recipient_id = useSelector(state => state.transfer.user_id);
  const amount = useSelector(state => state.transfer.value);
  const notes = useSelector(state => state.transfer.notes);
  const time = useSelector(state => state.transfer.time);
  const type_id = useSelector(state => state.transfer.type_id);
  const success = useSelector(state => state.transfer.successMsg);
  const error = useSelector(state => state.transfer.errorMsg);


  const onPin = (value) => {
    const pin = value.pin1 + value.pin2 + value.pin3 + value.pin4 + value.pin5 + value.pin6;
    if (pin.length !== 6) {
      window.alert('Pin Not Available');
    } else {
      console.log('masuk dispatch')
      dispatch(transfer({ token, amount, recipient_id, notes, time, type_id, pin }))
    }
  }

  useEffect(() => {
    if (success) {
      navigate('/success')
    }
  }, [navigate, success, error])

  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Body>
        <Modal.Header closeButton>
          <h5 className="modal-title fs-16px fw-700 text-dark" id="contained-modal-title-vcenter"
          >Enter
            PIN
            to Transfer</h5>
        </Modal.Header>

        <Formik initialValues={{ pin1: '', pin2: '', pin3: '', pin4: '', pin5: '', pin6: '' }} onSubmit={onPin}>
          {(props) => <EnterPin {...props} />}
        </Formik>

      </Modal.Body>
    </Modal>
  )
}

const Confirmation = () => {
  const [modalShow, setModalShow] = useState(false);
  const fullname = useSelector(state => state.transfer.fullname);
  const phonenumber = useSelector(state => state.transfer.phonenumber);
  const profile = useSelector(state => state.profile.data);
  const amount = useSelector((state) => state.transfer.value);
  const date = useSelector((state) => state.transfer.date);
  const currentBalance = profile.balance
  const notes = useSelector((state) => state.transfer.notes);
  const balanceLeft = currentBalance - amount;
  return (
    <>
      <Helmet>
        <title>Confirmation</title>
      </Helmet>

      <div className='background-home'>
        <Nav />

        <section>
          <Container>
            <Row className="mx-5">
              <AsideMenu />

              <Col className="ms-md-3">
                <Row className="d-flex justify-content-between rounded-4 pt-5 pb-4 px-4 bg-white mt-1">
                  <Col className="pb-2 f-color-g">
                    <div className="d-flex justify-content-between mb-3">
                      <h1 className="fs-18px fw-bold">Transfer Money</h1>
                    </div>
                    <div>
                      <div
                        className="nav justify-content-between d-flex align-items-center mt-4 shadow-sm p-3 mb-2 bg-body rounded">
                        <Row><img src={Satu} alt="3.png" className='mar-right-20px' /></Row>
                        <Col classNameName="ms-3">
                          <h1 className="mt-3 fs-16px fw-bold ms-3">{fullname}</h1>
                          <p className="fs-14px ms-3">{phonenumber}</p>
                        </Col>
                      </div>
                      <div className="d-flex justify-content-between my-4">
                        <h1 className="fs-18px fw-bold">Details</h1>
                      </div>
                      <div
                        className="nav justify-content-between d-flex align-items-center mt-2 shadow-sm p-2 bg-body rounded">
                        <div className="col mar-right-40px">
                          <p className="fs-16px">Amount
                          </p>
                          <h1 className="fs-18px fw-bold color-web-dark-2">{amount}</h1>
                        </div>
                      </div>
                      <div
                        className="nav justify-content-between d-flex align-items-center mt-4 shadow-sm p-2 bg-body rounded">
                        <div className="col mar-right-40px">
                          <p className="fs-16px">Balance Left
                          </p>
                          <h1 className="fs-18px fw-bold color-web-dark-2">Rp{balanceLeft}</h1>
                        </div>
                      </div>
                      <div
                        className="nav justify-content-between d-flex align-items-center mt-4 shadow-sm p-2 bg-body rounded">
                        <div className="col mar-right-40px">
                          <p className="fs-16px">Date & Time
                          </p>
                          <h1 className="fs-18px fw-bold color-web-dark-2">{date}May 11, 2020 - 12.20</h1>
                        </div>
                      </div>
                      <div
                        className="nav justify-content-between d-flex align-items-center mt-4 shadow-sm p-2 bg-body rounded">
                        <div className="col mar-right-40px">
                          <p className="fs-16px">Notes
                          </p>
                          <h1 className="fs-18px fw-bold color-web-dark-2">{notes}</h1>
                        </div>
                      </div>
                      <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-4">
                        <Button className="btn btn-primary btn-lg bg-web" type="button" onClick={() => setModalShow(true)}>Continue</Button>

                        <ModalCenter
                          show={modalShow}
                          onHide={() => setModalShow(false)}
                        />
                      </div>
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

export default Confirmation;