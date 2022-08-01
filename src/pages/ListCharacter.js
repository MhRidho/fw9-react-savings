import React, { useEffect } from 'react'
import { Col, Row, Image, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAll } from '../redux/asyncActions/character';
// import { decrement, increment } from './redux/reducers/counter';

const ListCharacter = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.character.results);

    useEffect(() => {
        dispatch(getAll());
    }, []);

    return (
        <div>
            <Row>
                {data.results &&
                    data.results.map((char) => {
                        return (
                            <Col md={4}>
                                <Image src={char.image} fluid />
                            </Col>
                        );
                    })}
            </Row>
            <Button disabled={data?.info?.prev === null} onClick={() => data.info.prev && dispatch(getAll(data.info.prev))}>Prev Page</Button>
            <Button disabled={data?.info?.next === null} onClick={() => data.info.next && dispatch(getAll(data.info.next))}>Next Page</Button>
        </div>
    );
};

export default ListCharacter;