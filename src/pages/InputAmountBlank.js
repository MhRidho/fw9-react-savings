import React, { useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Satu from '../assets/img/sam70.png';
import { FiEdit2 } from 'react-icons/fi';
import { Helmet } from 'react-helmet';
import '../assets/css/stylesStartHome.css';
import Nav from '../components/navbar';
import Footer from '../components/Footer';
import AsideMenus from '../components/AsideMenus';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileLogin } from '../redux/asyncActions/profiles';
import { editTimeTransfer, notes, editAmount } from '../redux/reducers/transfer';

const transferSchema = Yup.object().shape({
  amount: Yup.number()
    .required()
  // .min(10000, 'Should tranfer at least 10000')
  // .max(5000000, 'Please transfer under 5000000')
})

const TransferForm = (props) => {
  const profile = useSelector(state => state.profile.data);
  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfileLogin(token))
  }, [])

  return (
    <Form noValidate onSubmit={props.handleSubmit}>
      <Row className="mt-4 d-flex justify-content-center">
        <Col md={4}>
          <div className="input-group mb-sm-3 mt-sm-2 martop-40px">
            <input
              name="amount"
              onChange={props.handleChange}
              type="number"
              className="form-control form color-7858A6 fs-42px text-center fw-bold bor-bot-none"
              placeholder='0.00'
              isInvalid={!!props.errors.amount}
            />
          </div>
          <div type="invalid" className='text-center text-danger'>
            {props.errors.amount}
          </div>
        </Col>
      </Row>
      <div className="row text-center mt-2">
        <h2 className="fs-16px fw-bold">Rp {profile?.balance} Available</h2>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-md-6">
          <div className="input-group mb-sm-5 mt-sm-5 martop-40px">
            <span className="input-group-text form color-web-gray-3" id="basic-addon1"><FiEdit2 /></span>
            <input type="text" className="form-control form"
              placeholder="Add some notes" aria-label="Username"
              aria-describedby="basic-addon1" onChange={(e) => dispatch(notes(e.target.value))} />
          </div>
        </div>
      </div>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-3">
        <Button className="btn btn-primary btn-lg bg-web" type="submit">Continue</Button>
      </div>
    </Form>
  )
}

const InputAmountBlank = () => {
  const fullname = useSelector(state => state.transfer.fullname);
  const phonenumber = useSelector(state => state.transfer.phonenumber);
  // const picture = useSelector(state => state.transfer.picture);
  const date = new Date().toISOString();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const profile = useSelector(state => state.profile.data);

  const transferReq = (value) => {
    console.log('masuk')
    if (value.amount === '') {
      window.alert('Please Input Amount');
    } else {
      dispatch(editAmount(value.amount));
      dispatch(editTimeTransfer(date));
      navigate('/confirmation');
    }
  }

  return (
    <>
      <Helmet>
        <title>Input Amount Blank</title>
      </Helmet>

      <div className='background-home'>
        <Nav name={profile.fullname} phone={profile.phonenumber} />

        <section>
          <Container>
            <Row className="mx-5">
              <AsideMenus />

              <div className="col ms-md-3">
                <div className="row d-flex justify-content-between rounded-4 py-5 px-4 bg-white mt-1">
                  <div className="col pb-2 f-color-g">
                    <div className="d-flex justify-content-between mb-3">
                      <h1 className="fs-18px fw-bold">Transfer Money</h1>
                    </div>
                    <div>
                      <div
                        className="nav justify-content-between d-flex align-items-center mt-4 shadow-sm p-3 mb-2 bg-body rounded">
                        <Row><img src={profile.picture || Satu} alt="3.png" className='mar-right-20px' style={{ height: '40px' }} /></Row>
                        <Col className="ms-3">
                          <h1 className="mt-3 fs-16px fw-bold ms-3">{fullname}</h1>
                          <p className="fs-14px ms-3">{phonenumber}</p>
                        </Col>
                      </div>
                      <p class="mt-4 fs-16px color-soft-gray-2">Type the amount you want to transfer and
                        then<br />
                        press continue to the next steps.</p>
                      <Formik validationSchema={transferSchema} initialValues={{ amount: '' }} onSubmit={transferReq}>
                        {(props) => <TransferForm {...props} />}
                      </Formik>
                    </div>
                  </div>
                </div>
              </div>

            </Row>
          </Container>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default InputAmountBlank;