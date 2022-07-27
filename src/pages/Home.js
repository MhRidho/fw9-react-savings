import { React, useState, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Graphic from '../assets/img/graphic.png';
import Satu from '../assets/img/sam1.png';
import Dua from '../assets/img/chris56.png';
import Netflix from '../assets/img/netflix.png';
import Adobe from '../assets/img/adobe.png';
import { FiArrowUp, FiPlus, FiLogOut, FiArrowDown } from 'react-icons/fi';
import { Helmet } from 'react-helmet';
import '../assets/css/stylesStartHome.css';
import Nav from '../components/navbar';
import AsideMenu from '../components/AsideMenu';
import Footer from '../components/Footer';

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, [])

  const getUsers = () => {
    const response = {
      success: true,
      message: 'List Users',
      "results": [
        {
          "id": 1,
          "img": Satu,
          "name": "Samuel Suhi",
          "transtype": 'Transfer',
          "amount": '50.000'
        },
        {
          "id": 2,
          "img": Netflix,
          "name": "Netflix",
          "transtype": 'Subscription',
          "amount": '149.000'
        },
        {
          "id": 3,
          "img": Dua,
          "name": "Christine Mar...",
          "transtype": 'Transfer',
          "amount": '150.000'
        },
        {
          "id": 4,
          "img": Adobe,
          "name": "Adobe Inc.",
          "transtype": 'Subscription',
          "amount": '249.000'
        }
      ]
    }
    setUsers(response.results);
  }


  const navigate = useNavigate();
  const onLogout = () => {
    localStorage.removeItem('auth');
    navigate('/');
  }


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
              <Col md={3} className="mt-md-1">
                <Row>
                  <div className="offcanvas-body bg-white rounded-4">
                    <ul className="d-md-flex gap-5 navbar-nav justify-content-end ms-4 mt-5 pb-5">
                      <AsideMenu />
                      <li className="nav-item li-menu-logout">
                        <Button className="btn-logout ps-0" onClick={onLogout}><FiLogOut className='mx-4 fs-24px' />Logout</Button>
                      </li>
                    </ul>
                  </div>
                </Row>
              </Col>
              <Col className="ms-md-2 mt-1">
                <Row className="d-flex justify-content-between rounded-4 py-4 ps-4 main-section">
                  <div className="col">
                    <span className="fs-18px">Balance</span>
                    <h1 className="fs-40px">Rp120.000</h1>
                    <p className="fs-14px">+62 813-9387-7946</p>
                  </div>
                  <div className="col-md-3 d-flex flex-column justify-content-evenly ps-md-4">
                    <Link className="btn btn-primary btn-lg btn-main-section" to={'/search-receiver'}><FiArrowUp className="mx-2" />Transfer</Link>
                    <Link className="btn btn-primary btn-lg btn-main-section mt-2" to={'/top-up'}><FiPlus className="mx-2" />Top Up</Link>
                  </div>
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
                      {users.map((user) => (
                        <div class="nav justify-content-between d-flex align-items-center mt-4">
                          <Row>
                            <img src={user.img} alt="3.png" className="me-3" />
                          </Row>
                          <div class="col">
                            <h1 class="mt-3 fs-16px fw-bold ms-4">{user.name}</h1>
                            <p class="fs-14px ms-4">{user.transtype}</p>
                          </div>
                          <span class="fs-16px fw-bold color-green-web">+Rp{user.amount}</span>
                        </div>
                      ))}
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