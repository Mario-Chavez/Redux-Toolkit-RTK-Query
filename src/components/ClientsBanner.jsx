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
        <div className="">
            <Container>
                <Row>
                    <Col>
                        <div id="counter">
                            {isVisible ? (
                                <CountUp start={0} end={100} duration={4.54} />
                            ) : (
                                <h2>0</h2>
                            )}
                        </div>
                        <div>clientes</div>
                    </Col>
                    <Col>
                        <div>numero</div>
                        <div>clientes</div>
                    </Col>
                    <Col>
                        <div>numero</div>
                        <div>clientes</div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ClientsBanner;
