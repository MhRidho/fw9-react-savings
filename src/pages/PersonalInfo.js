import { React, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../assets/css/stylesStartHome.css';
import Nav from '../components/navbar';
import AsideMenus from '../components/AsideMenus';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileLogin, getUserLogin } from '../redux/asyncActions/profiles';

const PersonalInfo = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const profile = useSelector((state) => state.profile.data);

  useEffect(() => {
    dispatch(getProfileLogin(token));
    dispatch(getUserLogin(token));
  }, []);
  console.log(profile.fullname);
  console.log(profile.phonenumber);
  console.log(profile.email);

  return (
    <>
      <Helmet>
        <title>Personal Info</title>
      </Helmet>

      <div className='background-home'>
        <Nav />

        <section>
          <Container>
            <Row className="mx-5">
              <AsideMenus />

              <Col className="ms-md-3">
                <Row className="d-flex justify-content-between rounded-4 pt-5 pb-4 px-4 bg-white mt-1">
                  <Col className="pb-2 f-color-g">
                    <div className="d-flex justify-content-between mb-2">
                      <h1 className="fs-18px fw-bold">Personal Information</h1>
                    </div>
                    <div>
                      <div className="d-flex justify-content-between my-4">
                        <span>We got your personal information from the sign<br /> up proccess. If you want
                          to
                          make changes on<br /> your information, contact our support.</span>
                      </div>
                      <div
                        className="nav justify-content-between d-flex align-items-center mt-2 shadow-sm p-2 bg-body rounded">
                        <div className="col mar-right-40px">
                          <p className="fs-16px">First Name
                          </p>
                          <h1 className="fs-18px fw-bold color-web-dark-2">Robert</h1>
                        </div>
                      </div>
                      <div
                        className="nav justify-content-between d-flex align-items-center mt-4 shadow-sm p-2 bg-body rounded">
                        <div className="col mar-right-40px">
                          <p className="fs-16px">Last Name
                          </p>
                          <h1 className="fs-18px fw-bold color-web-dark-2">Chandler</h1>
                        </div>
                      </div>
                      <div
                        className="nav justify-content-between d-flex align-items-center mt-4 shadow-sm p-2 bg-body rounded">
                        <div className="col mar-right-40px">
                          <p className="fs-16px">Verified E-mail
                          </p>
                          <h1 className="fs-18px fw-bold color-web-dark-2">{profile.email}</h1>
                        </div>
                      </div>
                      <div
                        className="nav justify-content-between d-flex align-items-center mt-4 shadow-sm p-2 bg-body rounded">
                        <div className="col mar-right-40px">
                          <p className="fs-16px">Phone Number
                          </p>
                          <h1 className="fs-18px fw-bold color-web-dark-2">+62 813-9387-7946</h1>
                        </div>
                        <Link className="u-none-back-manage me-2" to={'/manage-phone'}>Manage</Link>
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

export default PersonalInfo;