import { React } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Success1 from '../assets/img/success.png';
import Sam70 from '../assets/img/sam70.png';
import Mic80 from '../assets/img/mic80.png';
import { Helmet } from 'react-helmet';
import '../assets/css/stylesStartHome.css';
import Nav from '../components/navbar';
import AsideMenus from '../components/AsideMenus';
import Footer from '../components/Footer';
import { useSelector } from 'react-redux';

const Success = () => {
  const fullname = useSelector(state => state.transfer.fullname);
  const phonenumber = useSelector(state => state.transfer.phonenumber);
  const profile = useSelector(state => state.profile.data);
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  const date = mm + '-' + dd + '-' + yyyy;
  console.log(profile)
  return (
    <>
      <Helmet>
        <title>Success</title>
      </Helmet>
      <div className='background-home'>
        <Nav name={profile?.fullname ? profile.fullname : 'Your Name'} phone={profile?.phonenumber ? profile.phonenumber : 'Your Number'} picture={profile?.picture ? profile.picture : Mic80} />
        <section>
          <Container>
            <Row className="mx-5">
              <AsideMenus />
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
                          <p className="fs-16px">Currently Balance
                          </p>
                          <h1 className="fs-18px fw-bold color-web-dark-2">Rp {profile?.balance ? profile.balance : 'Currently Balance'}</h1>
                        </div>
                      </div>
                      <div
                        className="nav justify-content-between d-flex align-items-center mt-4 shadow-sm p-2 bg-body rounded">
                        <div className="col mar-right-40px">
                          <p className="fs-16px">Date & Time
                          </p>
                          <h1 className="fs-18px fw-bold color-web-dark-2">{date}</h1>
                        </div>
                      </div>
                      <div
                        className="nav justify-content-between d-flex align-items-center mt-4 shadow-sm p-2 bg-body rounded">
                        <div className="col mar-right-40px">
                          <p className="fs-16px">Notes
                          </p>
                          <h1 className="fs-18px fw-bold color-web-dark-2">Top Up</h1>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between mt-5">
                        <h1 className="fs-18px fw-bold">Top Up</h1>
                      </div>
                      <div>
                        <div
                          className="nav justify-content-between d-flex align-items-center mt-1 shadow-sm p-3 mb-1 bg-body rounded">
                          <Row><img src={profile?.picture ? profile.picture : Sam70} alt="3.png" className="mar-right-40px" /></Row>
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