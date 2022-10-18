import { React, useEffect, useState } from 'react';
import { Container, Row, Col, InputGroup, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Satu from '../assets/img/sam70.png';
import { FiSearch } from 'react-icons/fi';
import { Helmet } from 'react-helmet';
import '../assets/css/stylesStartHome.css';
import Nav from '../components/navbar';
import AsideMenus from '../components/AsideMenus';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProfiles } from '../redux/asyncActions/allprofiles';
import { editNameTransfer, editPhoneTransfer, editUserIdTransfer } from '../redux/reducers/transfer';
import { BeatLoader } from 'react-spinners';

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
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const allprofile = useSelector((state) => state.allprofile.value);
  const profile = useSelector(state => state.profile.data);
  const isLoading = useSelector(state => state.transaction.isLoading);

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
              <AsideMenus />

              <div className="col ms-md-3">
                <div className="row d-flex justify-content-between rounded-4 pt-5 px-4 bg-white mt-1">
                  <div className="col pb-2 f-color-g">
                    <div className="d-flex justify-content-between mb-3">
                      <h1 className="fs-18px fw-bold">Search Receiver</h1>
                    </div>
                    <form>
                      <InputGroup size="lg" className="mb-3">
                        <InputGroup.Text id="basic-addon1" className='s-receiver'>
                          <Button variant='light' type='submit'><FiSearch className='color-A9A9A9' /></Button>
                        </InputGroup.Text>
                        <Form.Control
                          type='text'
                          value={term}
                          onChange={e => setTerm(e.target.value)}
                          className='s-receiver'
                          placeholder="Search receiver here"
                        />
                      </InputGroup>
                    </form>
                    {isLoading ? (<div className='d-flex justify-content-center'><BeatLoader loading /></div>) : (
                      <div>
                        {allprofile?.results?.filter(val => {
                          if (term === '') {
                            return val;
                          } else if (
                            val.fullname.toLowerCase().includes(term.toLowerCase())
                          ) {
                            return val;
                          }
                        }).map((profile, id) => (
                          <DataProfile key={id} id={profile.id} user_id={profile.user_id} fullname={profile.fullname} phonenumber={profile.phonenumber} />
                        ))}
                      </div>
                    )}
                    <div className='mt-4 d-flex gap-3'>
                      <Button className='bg-web' disabled={allprofile?.pageInfo?.prevPage === null} onClick={() => allprofile.pageInfo.prevPage && dispatch(getAllProfiles({ limit: allprofile.pageInfo.limit, page: allprofile.pageInfo.prevPage }))}>Prev</Button>
                      <div className='d-flex align-items-center'><b>{allprofile?.pageInfo?.currentPage}</b></div>
                      <Button className='bg-web' disabled={allprofile?.pageInfo?.nextPage === null} onClick={() => allprofile.pageInfo.nextPage && dispatch(getAllProfiles({ limit: allprofile.pageInfo.limit, page: allprofile.pageInfo.nextPage }))}>Next</Button>
                    </div>
                    <Row>
                      <div className='d-flex justify-content-end'>
                        <Col md={1}>
                          <Form.Select onChange={(e) => dispatch(getAllProfiles({ limit: e.target.value }))} className='my-3 shadow-none'>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>All Data</option>
                          </Form.Select>
                        </Col>
                      </div>
                    </Row>
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