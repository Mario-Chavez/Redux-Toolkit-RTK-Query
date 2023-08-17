import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Customers = () => {
    return (
        <div
            style={{
                backgroundColor: "#212529",
            }}
            className="text-bg-dark p-4"
        >
            <Container className="text-center py-5">
                <Row>
                    <Col
                        xs={12}
                        md={4}
                        className="border border-2 border-top-0 border-bottom-0"
                    >
                        <span className="border border-2 border-end-0 border-start-0 py-5">
                            xs=12 md=8
                        </span>
                    </Col>
                    <Col
                        xs={12}
                        md={4}
                        className="border border-2 border-top-0 border-bottom-0"
                    >
                        <span className="border border-2 border-end-0 border-start-0 py-5">
                            xs=12 md=8
                        </span>
                    </Col>
                    <Col
                        xs={12}
                        md={4}
                        className="border border-2 border-top-0 border-bottom-0"
                    >
                        <span className="border border-2 border-end-0 border-start-0 py-5">
                            xs=12 md=8
                        </span>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Customers;
