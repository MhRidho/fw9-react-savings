import { React, useEffect, useState } from 'react'
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import '../assets/css/stylesStartHome.css';
import Nav from '../components/navbar';
import AsideMenus from '../components/AsideMenus';
import Footer from '../components/Footer';
import { FiPlus } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { topup } from '../redux/asyncActions/topup';

const topupSchema = Yup.object().shape({
  amount: Yup.number()
    .required()
    .min(5000, 'Min Topup 5000')
})

const EnterTopup = (props) => {
  return (
    <>
      <Form noValidate onSubmit={props.handleSubmit}>
        <Modal.Header closeButton>
          <h5 className="modal-title fs-16px fw-700 text-dark" id="contained-modal-title-vcenter"
          >Input Amount</h5>
        </Modal.Header>
        <Modal.Body>
          <Row className="mt-4 d-flex justify-content-center">
            <Col md={8}>
              <div className="input-group mb-sm-3 mt-sm-2 martop-40px">
                <input
                  name="amount"
                  value={props.values.amount}
                  onChange={props.handleChange}
                  type="number"
                  className="form-control form color-7858A6 fs-42px text-center fw-bold bor-bot-none"
                  placeholder='0.00'
                  isInvalid={!!props.errors.amount}
                />
              </div>
              <div type="invalid" className='text-center text-danger fs-14px mb-3'>
                {props.errors.amount}
              </div>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button type='submit'
            className="btn btn-primary btn-lg bg-web text-white u-none">Continue</Button>
        </Modal.Footer>
      </Form>
    </>
  )
}

const CardTopup = ({ no, way }) => {
  return (
    <div
      className="nav justify-content-between d-flex align-items-center mt-2 shadow-sm p-2 bg-body rounded">
      <div className="col mar-right-40px py-3">
        <h4 className="fs-16px color-web-dark"><span
          className="color-web fw-18px fw-bold mx-3">{no}
        </span>{way}
        </h4>
      </div>
    </div>
  )
}

const ModalCenter = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(state => state.auth.token);
  const success = useSelector(state => state.topup.successMsg);
  const error = useSelector(state => state.topup.errorMsg);

  const onTopup = (value) => {
    if (value.amount === '') {
      window.alert('Please Input amount');
    } else {
      dispatch(topup({ token, request: value }))
    }
  }

  useEffect(() => {
    if (success) {
      navigate('/success-topup')
    }
  }, [navigate, success, error])
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Body>

        <Formik validationSchema={topupSchema} initialValues={{ amount: '' }} onSubmit={onTopup}>
          {(props) => <EnterTopup {...props} />}
        </Formik>

      </Modal.Body>
    </Modal>
  )
}

const TopUp = () => {
  const profile = useSelector(state => state.profile.data);
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Helmet>
        <title>Top Up</title>
      </Helmet>

      <div className='background-home'>
        <Nav name={profile.fullname || 'Fullname'} phone={profile.phonenumber || 'Phone Number'} picture={profile.picture} />

        <section>
          <Container>
            <Row className="mx-5">
              <AsideMenus />

              <Col className="ms-md-3">
                <div className="row d-flex justify-content-between rounded-4 pt-5 pb-4 px-4 bg-white mt-1 ">
                  <div className="col pb-2 f-color-g">
                    <div
                      className="nav justify-content-between d-flex align-items-center shadow-sm p-2 bg-body rounded">
                      <div className="col mar-right-40px py-3 ps-3">
                        <h4 className="fs-16px color-web-dark">
                          <Button className='btn btn-light' onClick={() => setModalShow(true)}><span className="color-web fw-18px fw-bold ms-3"><FiPlus className='fs-24px' /></span>
                            <span className="color-web fw-18px fw-bold mx-3">Top Up</span></Button>
                          <ModalCenter
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                          />
                        </h4>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between my-3">
                      <h1 className="fs-18px fw-bold">How To Top Up</h1>
                    </div>
                    <div>
                      <CardTopup no='1' way='Go the nearest ATM or you can use E-Banking.' />
                      <CardTopup no='2' way='Type your security number on the ATM or E-Banking.' />
                      <CardTopup no='3' way='Select “Transfer” in the menu.' />
                      <CardTopup no='4' way='Type the virtual account number that we provide you at the top.' />
                      <CardTopup no='5' way='Type the amount of the money you want to top up.' />
                      <CardTopup no='6' way='Read the summary details.' />
                      <CardTopup no='7' way='Press transfer / top up.' />
                      <CardTopup no='8' way='You can see your money in Zwallet within 3 hours.' />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </div>
    </>
  )
}

export default TopUp;