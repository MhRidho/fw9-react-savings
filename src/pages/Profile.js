import { React, useEffect, useState } from 'react'
import { Container, Row, Col, Button, Modal, Form, FormControl, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Mic80 from '../assets/img/mic80.png';
import { FiEdit2, FiArrowRight } from 'react-icons/fi';
import { Helmet } from 'react-helmet';
import '../assets/css/stylesStartHome.css';
import Nav from '../components/navbar';
import AsideMenus from '../components/AsideMenus';
import Footer from '../components/Footer';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileLogin, editProfile } from '../redux/asyncActions/profiles';

const FormEditName = ({ handleSubmit, handleChange, handleFile, setPicture }) => {
  const profile = useSelector(state => state.profile.data);
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <div className="d-flex flex-column my-5">
            <Row>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control className='shadow-none' type="text" placeholder={profile?.fullname ? profile.fullname : 'Your Name'} name='fullname' onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control className='shadow-none' type="text" placeholder={profile?.phonenumber ? profile.phonenumber : 'Your Number'} name='phonenumber' onChange={handleChange} />
              </Form.Group>
              <Form.Group>
                <FormControl className='shadow-none' type='file' name='picture' onChange={(event) => { setPicture(event.currentTarget.files[0]) }} />
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

const FormEditPicture = (handleSubmit, handleChange, handleFile, setPicture) => {
  const [previewSource, setPreviewSource] = useState();
  const handleInputFile = (e) => {
    const file = e.target.files[0];
    previewFile(file)
  }

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    }
  }
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <div>
            <Row>
              <Form.Group>
                <FormControl type='file' name='picture' onChange={handleInputFile} />
              </Form.Group>
            </Row>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button type='submit'>Edit</Button>
        </Modal.Footer>
      </Form>
    </>
  )
}

const ModalPicture = (props) => {
  const [picture, setPicture] = useState('');
  const [previewSource, setPreviewSource] = useState();
  const onEditPicture = (e) => {
    if (!previewSource) return;
  }
  return (
    <Modal {...props} centered>
      <Modal.Header>
        <h5>Edit Your Picture</h5>
      </Modal.Header>
      <Modal.Body>
        <Formik onSubmit={onEditPicture} initialValues={{ picture: '' }}>
          {(props) => <FormEditPicture {...props} setPicture={setPicture} />}
        </Formik>
        {previewSource && (
          <Image className='mt-2' src={previewSource} alt='chosen' style={{ height: '200px' }} />
        )}
      </Modal.Body>
    </Modal>
  )
}

const ModalCenterName = (props) => {
  const [showname, setShowName] = useState(false);
  const [picture, setPicture] = useState('');
  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();
  const profile = useSelector(state => state.profile.data);
  const firstName = profile?.fullname ? profile.fullname : 'Your Name';
  const phoneNumber = profile?.phonenumber ? profile.phonenumber : 'Your Number';

  const onEditProfile = (value) => {
    const fullname = value.fullname;
    const phonenumber = value.phonenumber;

    if (fullname === '') {
      window.alert('Input Fullname');
    } else {
      dispatch(editProfile({ token, fullname, phonenumber, picture }))
      setShowName(false);
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
        <Formik onSubmit={onEditProfile} initialValues={{ fullname: { firstName }, phonenumber: { phoneNumber }, picture: '' }} >
          {(props) => <FormEditName {...props} setPicture={setPicture} />}
        </Formik>
      </Modal.Body>
    </Modal>
  )
}

const Profile = () => {
  const profile = useSelector(state => state.profile.data);
  const token = useSelector(state => state.auth.token);
  const success = useSelector(state => state.profile.successMsg);
  const defaultPhone = 'No Number';
  const dispatch = useDispatch();
  const [showname, setShowName] = useState(false);
  const [showphone, setShowPhone] = useState(false);
  const [showPicture, setShowPicture] = useState(false);

  useEffect(() => {
    dispatch(getProfileLogin(token))
  }, [success])

  return (
    <>
      <Helmet>
        <title>Profile</title>
      </Helmet>

      <div className='background-home'>
        <Nav name={profile?.fullname ? profile.fullname : 'Your Name'} phone={profile?.phonenumber ? profile.phonenumber : 'Your Number'} picture={profile?.picture ? profile.picture : Mic80} />

        <section>
          <Container>
            <Row className="mx-5">
              <AsideMenus />
              <Col className="ms-md-3">
                <Row className="d-flex justify-content-between rounded-4 py-5 px-4 bg-white mt-1">
                  <Col className="pb-2 f-color-g">
                    <div>
                      <div className="text-center mt-2">
                        <Col md={1} className='mx-auto' type='file' >
                          <img src={profile?.picture ? profile.picture : Mic80} alt="mic80.png" title='edit picture' className='pointer' onClick={() => setShowPicture(true)} />
                        </Col>
                        <ModalPicture show={showPicture} onHide={() => setShowPicture(false)} />
                        <Button title='edit' onClick={() => setShowName(true)} className='btn btn-light mt-1'><span className="mt-3"><FiEdit2 className="me-2" /></span></Button>
                        <Row className='d-flex justify-content-center'>
                          <Col md={4}>
                            <div className='align-items-center d-flex justify-content-center'>
                              <h1 className="fs-18px fw-bold my-1">{profile?.fullname ? profile.fullname : 'Fullname'}</h1></div>
                          </Col>
                          <ModalCenterName
                            show={showname}
                            onHide={() => setShowName(false)}
                          />
                        </Row>
                        <Row className='mt-2'>
                          <div className='align-items-center d-flex justify-content-center'>
                            <span>{profile?.phonenumber ? profile.phonenumber : defaultPhone}</span>
                          </div>
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