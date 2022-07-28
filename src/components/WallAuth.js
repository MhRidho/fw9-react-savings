import React from 'react'
import Group57 from '../assets/img/Group-57-purple.png';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const WallAuth = () => {
  return (
    <Col md={7} className="pb-md-5 ps-md-5 cover pt-5">
      <h1 className="ms-md-5"><Link className="home-wallet marleft-40px" to={'/'}>Savings</Link>
      </h1>
      <img src={Group57} alt="Group-57" className="ms-md-5" />
      <div className="ms-md-5">
        <div className="marleft-40px">
          <h1 className="text-light fw-700 fs-24px">App that Covering Banking Needs.</h1>
          <p className="mt-4 text-white fw-400 fs-16px">Zwallet is an application that focussing in banking
            needs
            for all users<br />
            in the world. Always updated and always following world trends.<br />
            5000+ users registered in Zwallet everyday with worldwide<br />
            users coverage.</p>
        </div>
      </div>
    </Col>
  )
}

export default WallAuth
