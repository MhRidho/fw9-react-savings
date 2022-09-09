import { React, useState, useEffect } from 'react';
import { Container, Row, Col, InputGroup, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Satu from '../assets/img/sam70.png';
import Momo from '../assets/img/momo.png';
import Jes70 from '../assets/img/jes70.png';
import Mic70 from '../assets/img/mic70.png';
import { FiSearch } from 'react-icons/fi';
import { Helmet } from 'react-helmet';
import '../assets/css/stylesStartHome.css';
import Nav from '../components/navbar';
import AsideMenu from '../components/AsideMenu';
import Footer from '../components/Footer';

const SearchReceiver = () => {




  const [receivers, setReceivers] = useState([]);

  useEffect(() => {
    getReceivers();
  }, [])

  const getReceivers = () => {
    const response = {
      success: true,
      message: 'List Users',
      "results": [
        {
          "id": 1,
          "img": Satu,
          "name": "Samuel Suhi",
          "phone": '+62 813-8492-9994'
        },
        {
          "id": 2,
          "img": Momo,
          "name": "Momo Taro",
          "phone": '+62 812-4343-6731'
        },
        {
          "id": 3,
          "img": Jes70,
          "name": "Jessica Keen",
          "phone": '+62 811-3452-5252'
        },
        {
          "id": 4,
          "img": Mic70,
          "name": "Michael Le",
          "phone": '+62 810-4224-4613'
        }
      ]
    }
    setReceivers(response.results);
  }

  return (
    <>
      <Helmet>
        <title>Search Receiver</title>
      </Helmet>

      <div className='background-home'>
        <Nav />

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
                      {receivers.map((receiver) => (
                        <div
                          className="nav justify-content-between d-flex align-items-center mt-4 shadow-sm p-3 mb-2 bg-body rounded">
                          <Row><img src={receiver.img} alt="3.png" className='mar-right-20px' /></Row>
                          <Col className="ms-3">
                            <Link className="u-none color-4D4B57" to={'/input-amount-blank'}><h1 class="mt-3 fs-16px fw-bold">{receiver.name}</h1></Link>
                            <p class="fs-14px">{receiver.phone}</p>
                          </Col>
                        </div>
                      ))}
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