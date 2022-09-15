import { React } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Success1 from '../assets/img/success.png';
import Sam70 from '../assets/img/sam70.png';
import { FiDownload, FiShare2 } from 'react-icons/fi';
import { Helmet } from 'react-helmet';
import '../assets/css/stylesStartHome.css';
import Nav from '../components/navbar';
import AsideMenu from '../components/AsideMenu';
import Footer from '../components/Footer';
import { useSelector } from 'react-redux';

const Success = () => {
  const amount = useSelector(state => state.transfer.value);
  const fullname = useSelector(state => state.transfer.fullname);
  const phonenumber = useSelector(state => state.transfer.phonenumber);
  const profile = useSelector(state => state.profile.data);
  const date = useSelector((state) => state.transfer.date);
  const currentBalance = profile.balance
  const notes = useSelector((state) => state.transfer.notes);
  const balanceLeft = currentBalance - amount;
  return (
    <>
      <Helmet>
        <title>Success</title>
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
                    <Row>
                      <div className="text-center mt-2">
                        <Col md={1} className='mx-auto'>
                          <img src={Success1} alt="success.png" />
                        </Col>
                        <h1 className="fs-18px fw-bold mt-4">Top Up Success</h1>
                      </div>
                      <div
                        className="nav justify-content-between d-flex align-items-center mt-4 shadow-sm p-2 bg-body rounded">
                        <div className="col mar-right-40px">
                          <p className="fs-16px">Amount
                          </p>
                          <h1 className="fs-18px fw-bold color-web-dark-2">Rp {amount}</h1>
                        </div>
                      </div>
                      <div
                        className="nav justify-content-between d-flex align-items-center mt-4 shadow-sm p-2 bg-body rounded">
                        <div className="col mar-right-40px">
                          <p className="fs-16px">Currently Balance
                          </p>
                          <h1 className="fs-18px fw-bold color-web-dark-2">Rp {balanceLeft}</h1>
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
                      <div className="d-flex justify-content-between mt-5">
                        <h1 className="fs-18px fw-bold">Top Up</h1>
                      </div>
                      <div>
                        <div
                          className="nav justify-content-between d-flex align-items-center mt-1 shadow-sm p-3 mb-1 bg-body rounded">
                          <Row><img src={Sam70} alt="3.png" className="mar-right-40px" /></Row>
                          <div className="col ms-3">
                            <h1 className="mt-3 fs-18px fw-bold">{fullname}</h1>
                            <p className="fs-16px">{phonenumber}
                            </p>
                          </div>
                        </div>

                        <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-5 pb-2">
                          <div className="d-grid d-md-flex justify-content-md-end">
                            <Link
                              className="u-none-back btn btn-primary mt-1 btn-lg text-white border-none" to={'/home'}>Back to
                              Home</Link>
                          </div>
                        </div>
                      </div>
                    </Row>
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

export default Success;