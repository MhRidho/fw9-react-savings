import React, { useEffect } from 'react'
import { Container, Row, Button, Col, Form } from 'react-bootstrap';
import Satu from '../assets/img/sam1.png';
import { Helmet } from 'react-helmet';
import '../assets/css/stylesStartHome.css';
import Nav from '../components/navbar';
import AsideMenus from '../components/AsideMenus';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { getHistory } from '../redux/asyncActions/transactions';
import { BeatLoader } from 'react-spinners';

const History = () => {
  const profile = useSelector(state => state.profile.data);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const transactions = useSelector((state) => state.transaction.value);
  const isLoading = useSelector(state => state.transaction.isLoading);

  useEffect(() => {
    dispatch(getHistory(token));
  }, []);
  return (
    <>
      <Helmet>
        <title>History</title>
      </Helmet>
      <div className='background-home'>
        <Nav name={profile.fullname} phone={profile.phonenumber} />
        <section>
          <Container>
            <Row className="mx-5">
              <AsideMenus />
              <div className="col ms-md-3">
                <div className="row d-flex justify-content-between rounded-4 py-5 px-4 bg-white mt-1">
                  <div className="col pb-5 f-color-g">
                    <div className="d-flex justify-content-between mb-3">
                      <h1 className="fs-18px fw-bold">Transaction History</h1>
                    </div>
                    <span>This Week</span>
                    <div>
                      {isLoading ? (<div className='d-flex justify-content-center'><BeatLoader loading /></div>) :
                        (
                          <>
                            {transactions?.results?.map((transaction, i) => (
                              <div className="nav justify-content-between d-flex align-items-center mt-4" key={i}>
                                <Row><img src={Satu} alt="3.png" className="me-3" /></Row>
                                <div className="col ms-3">
                                  <h1 className="mt-3 fs-16px fw-bold">{transaction?.notes}</h1>
                                  <p className="fs-14px">Transfer</p>
                                </div>
                                <span className="fs-16px fw-bold color-green-web">+Rp{transaction.amount}</span>
                              </div>
                            ))}
                          </>
                        )}
                    </div>
                    <div className='mt-5 d-flex gap-3'>
                      <Button className='bg-web' disabled={transactions?.pageInfo?.prevPage === null} onClick={() => transactions.pageInfo.prevPage && dispatch(getHistory({ limit: transactions.pageInfo.limit, page: transactions.pageInfo.prevPage }))}>Prev</Button>
                      <div className='d-flex align-items-center'><b>{transactions?.pageInfo?.currentPage}</b></div>
                      <Button className='bg-web' disabled={transactions?.pageInfo?.nextPage === null} onClick={() => transactions.pageInfo.nextPage && dispatch(getHistory({ limit: transactions.pageInfo.limit, page: transactions.pageInfo.nextPage }))}>Next</Button>
                    </div>
                    <Row>
                      <div className='d-flex justify-content-end'>
                        <Col md={1}>
                          <Form.Select onChange={(e) => dispatch(getHistory({ limit: e.target.value }))} className='my-3 shadow-none'>
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

export default History;