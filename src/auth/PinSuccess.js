import React from 'react';
import '../assets/css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import Success from '../assets/img/success.png';
import { Link } from 'react-router-dom';
import Wallauth from '../components/WallAuth';

const PinSuccess = () => {
  return (
    <>
      <Helmet>
        <title>Pin Success</title>
      </Helmet>

      {/* START HOME LOGIN */}
      <Container fluid>
        <Row>
          <Wallauth />

          <Col md={5} >
            <Row className="mx-4">
              <Col md={10}>
                <div>
                  <img className="martop-120px" src={Success} alt="success.png" />
                  <h1 className="mt-5 fs-24px fw-700 line-height-32px color-3A3D42">
                    Your PIN Was Successfully Created</h1>
                </div>
                <div>
                  <p className="martop-30px fs-16px color-3A3D4299 line-height-30px">
                    Your PIN was successfully created and you can now access all the features in Zwallet. Login to your new account and start exploring!
                  </p>
                </div>

                <div className="mt-5">
                  <div className="d-grid gap-2 py-5">
                    <Link className='btn btn-secondary btn-lg sign-hover fs-18px' to={"/Login"}>
                      Login Now
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

export default PinSuccess;