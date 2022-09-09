import { React, useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Graphic from '../assets/img/graphicPurple.png';
import Satu from '../assets/img/sam1.png';
import { FiArrowUp, FiPlus, FiArrowDown } from 'react-icons/fi';
import { Helmet } from 'react-helmet';
import '../assets/css/stylesStartHome.css';
import Nav from '../components/navbar';
import AsideMenu from '../components/AsideMenu';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileLogin } from '../redux/asyncActions/profiles';
import axios from 'axios';

const Home = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const profile = useSelector((state) => state.profile.data);

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getTransactions();
  }, []);

  const getTransactions = async () => {
    const response = await axios.get('http://localhost:3332/auth/historyTransactions');
    setTransactions(response.data);
  }

  console.log(transactions);

  useEffect(() => {
    dispatch(getProfileLogin(token));
  }, []);

  console.log(transactions);

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <div className='background-home'>
        <Nav />

        <section>
          <Container>
            <Row className="mx-5">
              <AsideMenu />
              <Col className="ms-md-2 mt-1">
                <Row className="d-flex justify-content-between rounded-4 py-4 ps-4 main-section">
                  <Col>
                    <span className="fs-18px">Balance</span>
                    <h1 className="fs-40px">Rp. {profile.balance}</h1>
                    <p className="fs-14px">{profile.phonenumber}</p>
                  </Col>
                  <Col md={3} className="d-flex flex-column justify-content-evenly ps-md-4">
                    <Link className="btn btn-primary btn-lg btn-main-section" to={'/search-receiver'}><FiArrowUp className="mx-2" />Transfer</Link>
                    <Link className="btn btn-primary btn-lg btn-main-section mt-2" to={'/top-up'}><FiPlus className="mx-2" />Top Up</Link>
                  </Col>
                </Row>
                <Row className="mt-md-3">
                  <Col md={7} className="bg-white rounded-4 p-4 mt-1">
                    <Row className="d-flex justify-content-between">
                      <Col md={8} className='m-2'>
                        <span className="input-group color-green-web pb-2"><FiArrowDown /></span>
                        <span className="fs-14px">Income</span>
                        <h1 className="mt-2 fw-bold fs-18px">Rp2.120.000</h1>
                      </Col>
                      <Col className='m-2'>
                        <span className="input-group color-red pb-2"><FiArrowUp /></span>
                        <span className="fs-14px">Expense</span>
                        <h1 className="mt-2 fw-bold fs-18px">Rp1.560.000</h1>
                      </Col>
                    </Row>
                    <Row className="d-flex justify-content-center mt-5">
                      <Col md={10}>
                        <img fluid src={Graphic} alt="graphic.png" />
                      </Col>
                    </Row>
                  </Col>

                  <Col className="bg-white rounded-4 ms-md-3 p-4 mt-1">
                    <Row>
                      <Col className="d-flex justify-content-between mt-1">
                        <h1 className="fs-18px fw-bold mt-1">Transaction History</h1>
                        <Link className="a-menu" to={'/history'}><span className="fs-14px color-web">See
                          all</span></Link>
                      </Col>
                    </Row>

                    <div>
                      {/* {transaction && transaction.map((trans, i) => ( */}
                      <div className="nav justify-content-between d-flex align-items-center mt-4">
                        <Row>
                          <img src={Satu} alt="3.png" className="me-3" />
                        </Row>
                        <Col>
                          <h1 className="mt-3 fs-16px fw-bold ms-4" >Samuel</h1>
                          <p className="fs-14px ms-4">Transfer</p>
                        </Col>
                        <span className="fs-16px fw-bold color-green-web">+Rp50.000</span>
                      </div>
                      {/* ))} */}
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

export default Home;