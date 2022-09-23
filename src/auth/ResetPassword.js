import React from 'react';
import '../assets/css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, InputGroup, Form } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import WallAuth from '../components/WallAuth';

const ResetPassword = () => {
  return (
    <>
      <Helmet>
        <title>Reset Password</title>
      </Helmet>

      {/* START HOME LOGIN */}
      <Container fluid>
        <Row>
          <WallAuth />

          <Col md={5} >
            <Row className="mx-4">
              <Col md={10}>
                <div>
                  <h1 className="martop-120px fs-24px fw-700 line-height-32px color-3A3D42">Did You Forgot Your Password?
                    Don't Worry, You Can Reset Your
                    Password In a Minutes.</h1>
                </div>
                <div>
                  <p className="martop-30px fs-16px color-3A3D4299 line-height-30px">
                    To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.
                  </p>
                </div>

                <div className="mt-5">
                  <InputGroup className="mb-5">
                    <InputGroup.Text id="basic-addon1" className='form'><FiMail className='color-A9A9A999 fs-22px' /></InputGroup.Text>
                    <Form.Control
                      id="form"
                      placeholder="Enter your e-mail"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                  <div className="d-grid gap-2 py-5">
                    <Link className='btn btn-secondary btn-lg color-88888F ent-email' to={"/new-password"}>
                      Confirm
                    </Link>
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

export default ResetPassword;