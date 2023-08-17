import React from "react";
import { Col, Container, Row, Image, Button } from "react-bootstrap";
import chef from "../assets/img-home.jpg";
import {
    AiOutlineFacebook,
    AiOutlineInstagram,
    AiOutlineTwitter,
    AiOutlineYoutube,
} from "react-icons/ai";

const AbautMe = () => {
    return (
        <div
            style={{
                backgroundColor: "#212529",
            }}
        >
            <Container className="pt-lg-5 pb-5">
                <Row className="justify-content-center text-center">
                    <Col sm={12} lg={6} md={12} className="mt-2">
                        <div className="text-bg-dark">
                            <h1 className="title mb-5">Sobre Nosotros</h1>
                            <p>
                                Bienvenidos a nuestro restaurante. Somos un equipo
                                apasionado por la comida deliciosa y la buena atención al
                                cliente. Nuestro objetivo es brindarte una experiencia
                                culinaria única que satisfaga tus sentidos y te haga
                                regresar por más.
                            </p>
                            <p>
                                Nuestro menú está cuidadosamente diseñado para incluir una
                                variedad de platos que se adapten a todos los gustos y
                                preferencias. Trabajamos con ingredientes frescos y de
                                alta calidad para garantizar que cada bocado sea
                                memorable.
                            </p>
                            <p>
                                Ven a visitarnos y disfruta de nuestra hospitalidad y
                                nuestra pasión por la comida. ¡Esperamos verte pronto!
                            </p>
                        </div>
                        <Button
                            className="my-5"
                            style={{ backgroundColor: "#164475", width: "12rem" }}
                        >
                            Ver Mas
                        </Button>
                    </Col>
                    <Col sm={12} lg={6} md={12}>
                        <Image src={chef} className="w-100 photo-home" />
                        <div className="text-bg-dark my-3 p d-flex justify-content-around">
                            <AiOutlineFacebook size={35} />
                            <AiOutlineTwitter size={35} />
                            <AiOutlineInstagram size={35} />
                            <AiOutlineYoutube size={35} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AbautMe;
