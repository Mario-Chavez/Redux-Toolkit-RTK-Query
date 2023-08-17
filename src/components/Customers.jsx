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
                <h2 className="title mb-5">Nuestros Clientes</h2>
                <Row>
                    <Col
                        xs={12}
                        md={4}
                        className=" border border-1 border-top-0 border-bottom-0 my-5 border-primary"
                    >
                        <span className=" py-5  w-auto">
                            <Image src={pizza} className="clients-img" />
                        </span>
                    </Col>
                    <Col
                        xs={12}
                        md={4}
                        className=" border border-1 border-top-0 border-bottom-0 my-5 border-primary  "
                    >
                        <span className="d-flex align-items-center justify-content-center py-5  w-auto">
                            <Image src={subways} className="clients-img" />
                        </span>
                    </Col>

                    <Col
                        xs={12}
                        md={4}
                        className="border border-1 border-top-0 border-bottom-0 my-5 border-primary"
                    >
                        <span className="  py-5 w-100">
                            <Image src={mack} className="clients-img" />
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col
                        xs={12}
                        md={4}
                        className=" border border-1 border-top-0 border-bottom-0 my-5 border-primary "
                    >
                        <span className=" d-flex align-items-center justify-content-center py-5  w-auto">
                            <Image src={nodles} className="clients-img" />
                        </span>
                    </Col>
                    <Col
                        xs={12}
                        md={4}
                        className=" border border-1 border-top-0 border-bottom-0 my-5 border-primary  "
                    >
                        <span className=" py-5  w-auto">
                            <Image src={burguer} className="clients-img" />
                        </span>
                    </Col>

                    <Col
                        xs={12}
                        md={4}
                        className="border border-1 border-top-0 border-bottom-0 my-5 border-primary"
                    >
                        <span className=" py-5 w-100">
                            <Image src={arbyns} className="clients-img" />
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col
                        xs={12}
                        md={4}
                        className=" border border-1 border-top-0 border-bottom-0 my-5 border-primary "
                    >
                        <span className="d-flex  align-items-center justify-content-center py-5  w-auto">
                            <Image src={chikFel} className="clients-img" />
                        </span>
                    </Col>
                    <Col
                        xs={12}
                        md={4}
                        className=" border border-1 border-top-0 border-bottom-0 my-5 border-primary  "
                    >
                        <span className=" py-5  w-auto">
                            <Image src={chipotle} className="clients-img" />
                        </span>
                    </Col>

                    <Col
                        xs={12}
                        md={4}
                        className="border border-1 border-top-0 border-bottom-0 border-primary my-5"
                    >
                        <span className=" py-5 w-100">
                            <Image src={tacostime} className="clients-img" />
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col
                        xs={12}
                        md={4}
                        className=" border border-1 border-top-0 border-bottom-0 my-5 border-primary "
                    >
                        <span className=" py-5  w-auto">
                            <Image src={kfc} className="clients-img" />
                        </span>
                    </Col>
                    <Col
                        xs={12}
                        md={4}
                        className=" border border-1 border-top-0 border-bottom-0 my-5 border-primary  "
                    >
                        <span className=" py-5  w-auto">
                            <Image src={domino} className="clients-img" />
                        </span>
                    </Col>

                    <Col
                        xs={12}
                        md={4}
                        className="border border-1 border-top-0 border-bottom-0 my-5 border-primary"
                    >
                        <span className="d-flex  align-items-center justify-content-center py-5 w-100">
                            <Image src={wendy} className="clients-img" />
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col
                        xs={12}
                        md={4}
                        className=" border border-1 border-top-0 border-bottom-0 my-5 border-primary "
                    >
                        <span className="  d-flex  align-items-center justify-content-center py-5  w-auto">
                            <Image src={sbarro} className="clients-img" />
                        </span>
                    </Col>
                    <Col
                        xs={12}
                        md={4}
                        className=" border border-1 border-top-0 border-bottom-0 my-5 border-primary  "
                    >
                        <span className=" d-flex  align-items-center justify-content-center py-5  w-auto">
                            <Image src={carls} className="clients-img" />
                        </span>
                    </Col>

                    <Col
                        xs={12}
                        md={4}
                        className="border border-1 border-top-0 border-bottom-0 my-5 border-primary"
                    >
                        <span className="d-flex  align-items-center justify-content-center py-5 w-100">
                            <Image src={nandos} className="clients-img" />
                        </span>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Customers;
