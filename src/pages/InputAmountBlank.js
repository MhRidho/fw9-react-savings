import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Satu from '../assets/img/sam70.png';
import { FiEdit2 } from 'react-icons/fi';
import { Helmet } from 'react-helmet';
import '../assets/css/stylesStartHome.css';
import Nav from '../components/navbar';
import Footer from '../components/Footer';
import AsideMenu from '../components/AsideMenu';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

const transferSchema = Yup.object().shape({
  nominal: Yup.number()
    .required()
    .min(10000, 'Should tranfer at least 10000')
    .max(5000000, 'Please transfer under 5000000')
})


const TransferForm = ({ errors, handleSubmit, handleChange }) => {
  const navigate = useNavigate();

  const onNext = () => {
    navigate('/confirmation')
  }
  return (
    <Form noValidate>
      <Row className="mt-4 d-flex justify-content-center">
        <Col md={4}>
          <div className="input-group mb-sm-3 mt-sm-2 martop-40px">
            <input
              name="nominal"
              onChange={handleChange}
              type="number"
              className="form-control form color-7858A6 fs-42px text-center fw-bold bor-bot-none"
              placeholder='0.00'
              isInvalid={!!errors.nominal}
            />
          </div>
          <div type="invalid">
            {errors.nominal}
          </div>
        </Col>
      </Row>
      <div className="row text-center mt-2">
        <h2 className="fs-16px fw-bold">Rp120.000 Available</h2>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-md-6">
          <div className="input-group mb-sm-5 mt-sm-5 martop-40px">
            <span className="input-group-text form color-web-gray-3" id="basic-addon1"><FiEdit2 /></span>
            <input type="text" className="form-control form"
              placeholder="Add some notes" aria-label="Username"
              aria-describedby="basic-addon1" />
          </div>
        </div>
      </div>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-3">
        <Button onClick={onNext} className="btn btn-primary btn-lg bg-web" type="submit">Continue</Button>
      </div>
    </Form>
  )
}


const InputAmountBlank = () => {
  return (
    <>
      <Helmet>
        <title>Input Amount Blank</title>
      </Helmet>

      <div className='background-home'>
        <Nav />

        <section>
          <Container>
            <Row className="mx-5">
              <AsideMenu />

              <div className="col ms-md-3">
                <div className="row d-flex justify-content-between rounded-4 py-5 px-4 bg-white mt-1">
                  <div className="col pb-2 f-color-g">
                    <div className="d-flex justify-content-between mb-3">
                      <h1 className="fs-18px fw-bold">Transfer Money</h1>
                    </div>
                    <div>
                      <div
                        className="nav justify-content-between d-flex align-items-center mt-4 shadow-sm p-3 mb-2 bg-body rounded">
                        <Row><img src={Satu} alt="3.png" classNameName='mar-right-20px' /></Row>
                        <Col classNameName="ms-3">
                          <h1 className="mt-3 fs-16px fw-bold ms-3">Samuel Suhi</h1>
                          <p className="fs-14px ms-3">+62 813-8492-9994</p>
                        </Col>
                      </div>
                      <p class="mt-4 fs-16px color-soft-gray-2">Type the amount you want to transfer and
                        then<br />
                        press continue to the next steps.</p>
                      <Formik validationSchema={transferSchema} initialValues={{ nominal: '' }}>
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