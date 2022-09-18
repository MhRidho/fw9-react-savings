import React, { useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Satu from '../assets/img/sam1.png';
import { Helmet } from 'react-helmet';
import '../assets/css/stylesStartHome.css';
import Nav from '../components/navbar';
import AsideMenu from '../components/AsideMenu';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { getHistory } from '../redux/asyncActions/transactions';

const History = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const transactions = useSelector((state) => state.transaction.value);

  console.log(transactions);

  useEffect(() => {
    dispatch(getHistory(token));
  }, []);
  return (
    <>
      <Helmet>
        <title>History</title>
      </Helmet>
      <div className='background-home'>
        <Nav />
        <section>
          <Container>
            <Row className="mx-5">
              <AsideMenu />
              <div className="col ms-md-3">
                <div className="row d-flex justify-content-between rounded-4 py-5 px-4 bg-white mt-1">
                  <div className="col pb-5 f-color-g">
                    <div className="d-flex justify-content-between mb-3">
                      <h1 className="fs-18px fw-bold">Transaction History</h1>
                    </div>
                    <span>This Week</span>
                    <div>
                      {/* integration */}
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
                      {/* end integration */}
                      <span className="mt-5">This Month</span>
                    </div>
                    <div className='mt-4 d-flex gap-3'>
                      <Button className='bg-web' disabled={transactions?.pageInfo?.prevPage === null} onClick={() => transactions.pageInfo.prevPage && dispatch(getHistory(transactions.pageInfo.prevPage))}>Prev Page</Button>
                      <Button className='bg-web' disabled={transactions?.pageInfo?.nextPage === null} onClick={() => transactions.pageInfo.nextPage && dispatch(getHistory(transactions.pageInfo.nextPage))}>Next Page</Button>
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

export default History;