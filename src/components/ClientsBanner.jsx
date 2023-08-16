import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CountUp from "react-countup";

const ClientsBanner = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [animationCompleted, setAnimationCompleted] = useState(false);

    const handleScroll = () => {
        const element = document.getElementById("counter"); // ID de tu elemento contador
        if (element && !animationCompleted) {
            const rect = element.getBoundingClientRect();
            const offset = window.innerHeight - 50; // valor de acercamiento borde final de la pantalla
            if (rect.top <= offset) {
                setIsVisible(true);
                setAnimationCompleted(true);
            }
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [animationCompleted]);
    return (
        <div className="text-center py-5">
            <Container className="py-5">
                <Row>
                    <Col className="border-end border-2">
                        <div id="counter">
                            {isVisible ? (
                                <div className="text-primary fs-4 fw-normal">
                                    +<CountUp start={0} end={1500} duration={4.54} />
                                </div>
                            ) : (
                                <div className="text-primary fs-4 fw-bold">0</div>
                            )}
                        </div>
                        <div className="fs-4 fw-normal">Clientes</div>
                    </Col>
                    <Col className="border-end border-2">
                        <div id="counter">
                            {isVisible ? (
                                <div className="text-primary fs-4 fw-normal">
                                    +<CountUp start={0} end={350} duration={4.54} />
                                </div>
                            ) : (
                                <div className="text-primary fs-4 fw-bold">0</div>
                            )}
                        </div>
                        <div className="fs-4 fw-normal">Platos</div>
                    </Col>
                    <Col>
                        <div id="counter">
                            {isVisible ? (
                                <div className="text-primary fs-4 fw-normal">
                                    +<CountUp start={0} end={650} duration={4.54} />
                                </div>
                            ) : (
                                <div className="text-primary fs-4 fw-bold">0</div>
                            )}
                        </div>
                        <div className="fs-4 fw-normal">Pedidos</div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ClientsBanner;
