import { React, useEffect, useState } from 'react'
import { Container, Row, Col, Button, Modal, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Mic80 from '../assets/img/mic80.png';
import { FiEdit2, FiArrowRight } from 'react-icons/fi';
import { Helmet } from 'react-helmet';
import '../assets/css/stylesStartHome.css';
import Nav from '../components/navbar';
import AsideMenu from '../components/AsideMenu';
import Footer from '../components/Footer';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileLogin, editProfile } from '../redux/asyncActions/profiles';

const FormEdit = ({ error, handleSubmit, handleChange, handleFileSelect }) => {
  const profile = useSelector(state => state.profile.data);
  return (
    <>
      <div className="d-flex flex-column my-5">
        <Row>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control className='shadow-none' type="text" placeholder="Fullname" />
          </Form.Group>
          <Form.Group>
            <FormControl className='shadow-none' type='file' />
          </Form.Group>
        </Row>
      </div>
    </>
  )
}

const ModalCenter = (props) => {
  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();
  const setProfile = (results) => {
    const fullname = results.fullname;
    const picture = results.picture;
    dispatch(editProfile({ token, fullname, picture }));
  }
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Body>
        <Modal.Header closeButton>
          <h5 className="modal-title fs-16px fw-700 text-dark" id="contained-modal-title-vcenter"
          >Edit Your Data</h5>
        </Modal.Header>
        <Modal.Body>
          <Formik onSubmit={setProfile} initialValues={{ fullname: '', picture: '' }} >
            {(props) => <FormEdit {...props} />}
          </Formik>
        </Modal.Body>
        <Modal.Footer>
          <Link to={'/success'}
            className="btn btn-primary btn-lg bg-web text-white u-none">Continue</Link>
        </Modal.Footer>
      </Modal.Body>
    </Modal>
  )
}

const Profile = () => {
  const profile = useSelector(state => state.profile.data);
  const token = useSelector(state => state.auth.token);
  const successMsg = useSelector(state => state.profile.successMsg);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  useEffect(() => {
    dispatch(getProfileLogin(token))
  }, [successMsg])
  return (
    <>
      <Helmet>
        <title>Profile</title>
      </Helmet>

      <div className='background-home'>
        <Nav name={profile.fullname} phone={profile.phonenumber} />

        <section>
          <Container>
            <Row className="mx-5">
              <AsideMenu />
              <Col className="ms-md-3">
                <Row className="d-flex justify-content-between rounded-4 py-5 px-4 bg-white mt-1">
                  <Col className="pb-2 f-color-g">
                    <div>
                      <div className="text-center mt-2">
                        <Col md={1} className='mx-auto'>
                          <img src={Mic80} alt="mic80.png" /><br />
                        </Col>
                        <Row className='d-flex justify-content-center'>
                          <Col md={4}>
                            <Button onClick={() => setShow(true)} className='btn btn-light mt-3'><span className="mt-3"><FiEdit2 className="me-2" />Edit</span></Button>
                          </Col>
                          <ModalCenter
                            show={show}
                            onHide={() => setShow(false)}
                          />
                        </Row>
                        <h1 className="fs-18px fw-bold mt-4">{profile.fullname}</h1>
                        <Row className="mt-3">
                          <span>{profile.phonenumber}</span>
                        </Row>
                      </div>
                      <div
                        className="col-md-6 nav justify-content-between d-flex align-items-center mt-4 shadow-sm p-4 bg-body rounded m-auto bg-profile">
                        <Link className="u-none color-4D4B57" to={'/personal-info'}><h1 className="fs-16px fw-bold color-web-dark-2">Personal Information</h1></Link>
                        <FiArrowRight />
                      </div>
                      <div
                        className="col-md-6 nav justify-content-between d-flex align-items-center mt-2 shadow-sm p-4 bg-body rounded m-auto bg-profile">
                        <Link className="u-none color-4D4B57" to={'/change-password'}><h1 className="fs-16px fw-bold color-web-dark-2">Change Password</h1></Link>
                        <FiArrowRight />
                      </div>
                      <div
                        className="col-md-6 nav justify-content-between d-flex align-items-center mt-2 shadow-sm p-4 bg-body rounded m-auto bg-profile">
                        <Link className="u-none color-4D4B57" to={'/add-pin'}><h1 className="fs-16px fw-bold color-web-dark-2">Add PIN</h1></Link>
                        <FiArrowRight />
                      </div>
                      <div
                        className="col-md-6 nav justify-content-between d-flex align-items-center mt-2 shadow-sm p-4 bg-body rounded m-auto bg-profile">
                        <Link className="u-none color-4D4B57" to={'/change-pin'}><h1 className="fs-16px fw-bold color-web-dark-2">Change PIN</h1></Link>
                        <FiArrowRight />
                      </div>
                      <div
                        className="col-md-6 nav justify-content-between d-flex align-items-center mt-2 shadow-sm p-4 bg-body rounded m-auto bg-profile">
                        <Link className="u-none color-4D4B57" to={'/'}><h1 className="fs-16px fw-bold color-web-dark-2">Logout</h1></Link>
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

export default Profile;