import { React, useEffect, useState } from 'react'
import { Container, Row, Col, Button, Modal, Form, FormControl } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Mic80 from '../assets/img/mic80.png';
import { FiEdit2, FiArrowRight } from 'react-icons/fi';
import { Helmet } from 'react-helmet';
import '../assets/css/stylesStartHome.css';
import Nav from '../components/navbar';
import AsideMenu from '../components/AsideMenu';
import Footer from '../components/Footer';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileLogin, editProfile, editProfilePhone } from '../redux/asyncActions/profiles';

const FormEditName = ({ handleSubmit, handleChange }) => {
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <div className="d-flex flex-column my-5">
            <Row>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control className='shadow-none' type="text" placeholder="Fullname" name='fullname' onChange={handleChange} />
              </Form.Group>
              <Form.Group>
                <FormControl className='shadow-none' type='file' name='picture' onChange={handleChange} />
              </Form.Group>
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

const FormEditPhone = ({ handleSubmit, handleChange }) => {
  return (
    <>

      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <div className="d-flex flex-column my-5">
            <Row>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control className='shadow-none' type="text" placeholder="Phone Number" name='phonenumber' onChange={handleChange} />
              </Form.Group>
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

const ModalCenterName = (props) => {
  const navigate = useNavigate();
  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();
  const profile = useSelector(state => state.profile.data);
  const success = useSelector(state => state.profile.successMsg);

  const onEditProfile = (value) => {
    console.log(value);
    const fullname = value.fullname;
    const picture = value.picture

    if (fullname === '') {
      window.alert('Input Fullname');
    } else {
      console.log('masuk dispatch')
      dispatch(editProfile({ token, fullname, picture }))
      navigate('/profile');
    }
  }

  useEffect(() => {
    if (success) {
      navigate('/profile')
    }
  }, [navigate, success])

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
        <Formik onSubmit={onEditProfile} initialValues={{ fullname: '', phonenumber: '', picture: '' }} >
          {(props) => <FormEditName {...props} />}
        </Formik>
      </Modal.Body>
    </Modal>
  )
}

const ModalCenterPhone = (props) => {
  const navigate = useNavigate();
  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();
  const profile = useSelector(state => state.profile.data);
  const success = useSelector(state => state.profile.successMsg);

  const onEditProfilePhone = (value) => {
    const phonenumber = value.phonenumber;

    if (phonenumber === '') {
      window.alert('Input Phonenumber');
    } else {
      console.log('masuk dispatch')
      dispatch(editProfilePhone({ token, phonenumber }))
      navigate('/profile');
    }
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
        <Formik onSubmit={onEditProfilePhone} initialValues={{ phonenumber: '' }} >
          {(props) => <FormEditPhone {...props} />}
        </Formik>
      </Modal.Body>
    </Modal>
  )
}

const Profile = () => {
  const profile = useSelector(state => state.profile.data);
  const token = useSelector(state => state.auth.token);
  const successMsg = useSelector(state => state.profile.successMsg);
  const defaultPhone = '+62822 8734 7634';
  const dispatch = useDispatch();
  const [showname, setShowName] = useState(false);
  const [showphone, setShowPhone] = useState(false);

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
                            <div className='align-items-center d-flex justify-content-center'>
                              <h1 className="fs-18px fw-bold mt-4">{profile.fullname}</h1><Button onClick={() => setShowName(true)} className='btn btn-light mt-3'><span className="mt-3"><FiEdit2 className="me-2" /></span></Button></div>
                          </Col>
                          <ModalCenterName
                            show={showname}
                            onHide={() => setShowName(false)}
                          />
                        </Row>

                        <Row className="mt-3">
                          <div className='align-items-center d-flex justify-content-center'>
                            <span>{profile.phonenumber || defaultPhone}</span><Button onClick={() => setShowPhone(true)} className='btn btn-light'><FiEdit2 className="me-2" /></Button>
                          </div>
                          <ModalCenterPhone
                            show={showphone}
                            onHide={() => setShowPhone(false)}
                          />
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