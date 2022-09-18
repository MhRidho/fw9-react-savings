import { React, useEffect } from 'react';
import { Container, Row, Col, InputGroup, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Satu from '../assets/img/sam70.png';
import { FiSearch } from 'react-icons/fi';
import { Helmet } from 'react-helmet';
import '../assets/css/stylesStartHome.css';
import Nav from '../components/navbar';
import AsideMenu from '../components/AsideMenu';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProfiles } from '../redux/asyncActions/allprofiles';
import { editNameTransfer, editPhoneTransfer, editUserIdTransfer } from '../redux/reducers/transfer';

const DataProfile = ({ id, user_id, fullname, phonenumber }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const nextData = () => {
    dispatch(editNameTransfer(fullname));
    dispatch(editPhoneTransfer(phonenumber));
    dispatch(editUserIdTransfer(user_id));
    navigate('/input-amount-blank');
  }
  return (
    <>
      <div onClick={nextData}
        className="nav justify-content-between d-flex align-items-center mt-4 shadow-sm p-3 mb-2 bg-body rounded pointer" key={id}>
        <Row><img src={Satu} alt="3.png" className='mar-right-20px' /></Row>
        <Col className="ms-3">
          <h1 className="mt-3 fs-16px fw-bold">{fullname}</h1>
          <p className="fs-14px">{phonenumber}</p>
        </Col>
      </div>
    </>
  )
}

const SearchReceiver = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const allprofile = useSelector((state) => state.allprofile.value);
  const profile = useSelector(state => state.profile.data);

  useEffect(() => {
    dispatch(getAllProfiles(token));
  }, []);

  return (
    <>
      <Helmet>
        <title>Search Receiver</title>
      </Helmet>

      <div className='background-home'>
        <Nav name={profile.fullname} phone={profile.phonenumber} />

        <section>
          <Container>
            <Row className="mx-5">
              <AsideMenu />

              <div className="col ms-md-3">
                <div className="row d-flex justify-content-between rounded-4 pt-5 px-4 bg-white mt-1">
                  <div className="col pb-2 f-color-g">
                    <div className="d-flex justify-content-between mb-3">
                      <h1 className="fs-18px fw-bold">Search Receiver</h1>
                    </div>
                    <InputGroup size="lg" className="mb-3">
                      <InputGroup.Text id="basic-addon1" className='s-receiver'><FiSearch className='color-A9A9A9' /></InputGroup.Text>
                      <Form.Control
                        className='s-receiver'
                        placeholder="Search receiver here"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </InputGroup>
                    <div>
                      {allprofile?.results?.map((profile, id) => (
                        <DataProfile key={id} id={profile.id} user_id={profile.user_id} fullname={profile.fullname} phonenumber={profile.phonenumber} />
                      ))}
                    </div>
                    <div className='mt-4 d-flex gap-3'>
                      <Button className='bg-web' disabled={allprofile?.pageInfo?.prevPage === null} onClick={() => allprofile.pageInfo.prevPage && dispatch(getAllProfiles(allprofile.pageInfo.prevPage))}>Prev Page</Button>
                      <Button className='bg-web' disabled={allprofile?.pageInfo?.nextPage === null} onClick={() => allprofile.pageInfo.nextPage && dispatch(getAllProfiles(allprofile.pageInfo.nextPage))}>Next Page</Button>
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

export default SearchReceiver;