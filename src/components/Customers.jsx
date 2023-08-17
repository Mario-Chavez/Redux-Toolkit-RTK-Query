import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import burguer from "../assets/logos-clients/burger.png";
import arbyns from "../assets/logos-clients/arbyns.png";
import carls from "../assets/logos-clients/carls.png";
import chikFel from "../assets/logos-clients/chikFel.png";
import chipotle from "../assets/logos-clients/chipotle.png";
import domino from "../assets/logos-clients/domino.png";
import kfc from "../assets/logos-clients/kfc.png";
import mack from "../assets/logos-clients/mkd.png";
import nandos from "../assets/logos-clients/nandos.png";
import nodles from "../assets/logos-clients/nodles.png";
import sbarro from "../assets/logos-clients/sbarro.png";
import subways from "../assets/logos-clients/subways.png";
import tacostime from "../assets/logos-clients/tacostime.png";
import wendy from "../assets/logos-clients/wendy.png";
import pizza from "../assets/logos-clients/pizza.png";

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
                        className="border border-2 border-top-0 border-bottom-0 my-5"
                    >
                        <span className="border border-2 border-end-0 border-start-0 py-5">
                            <Image src="" />
                        </span>
                    </Col>
                    <Col
                        xs={12}
                        md={4}
                        className="border border-2 border-top-0 border-bottom-0 my-5"
                    >
                        <span className="border border-2 border-end-0 border-start-0 py-5">
                            xs=12 md=8
                        </span>
                    </Col>
                    <Col
                        xs={12}
                        md={4}
                        className="border border-2 border-top-0 border-bottom-0 my-5"
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
