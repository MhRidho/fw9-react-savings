import React from 'react'
import { Container, Navbar } from 'react-bootstrap';

const Footer = () => {
    return (
        <Navbar className="p-3 foot-last">
            <Container className="px-5">
                <span>2020 Zwallet. All right reserved.</span>
                <aside className="d-flex">
                    <div className="d-flex flex-column align-content-center me-4">
                        <span>+62 5637 8882 9901</span>
                    </div>
                    <span>contact@zwallet.com</span>
                </aside>
            </Container>
        </Navbar>
    )
}

export default Footer
