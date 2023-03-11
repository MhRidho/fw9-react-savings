import React from "react";
import { Button, Container, FormControl } from "react-bootstrap";
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, customValue } from "../redux/reducers/counter";

const Counter = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <Helmet>Counter</Helmet>
      <Container className='d-flex min-vh-100 flex-column gap-3 justify-content-center align-items-center'>
        <div className="d-flex flex-row gap-3">
          <Button onClick={() => dispatch(decrement())}>-</Button>
          <h1>{count}</h1>
          <Button onClick={() => dispatch(increment())}>+</Button>
          <FormControl type='text' onChange={(e) => dispatch(customValue(e.target.value))} />
          <Link to='/'>Landing</Link>
        </div>
      </Container>
    </>
  )
}

export default Counter;