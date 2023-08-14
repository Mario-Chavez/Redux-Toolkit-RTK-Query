import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import plato from "../assets/plato.png";

const BannerHome = () => {
    return (
        <div className=" background-main mt-5 p-5">
            <Row className="justify-content-center text-center">
                <Col sm={12} lg={6} md={12} className="container-plate w-auto">
                    <Image className="plate-food" src={plato} />
                </Col>
                <Col sm={12} lg={6} md={12}>
                    <h1 className="text-light fs-1 mb-5 mt-2">Looking for food</h1>
                    <p className="text-light">
                        "Descubre una experiencia culinaria única con nuestra innovadora
                        aplicación de comidas. Explora una amplia variedad de deliciosas
                        opciones gastronómicas, desde platos casuales hasta exquisiteces
                        gourmet. Nuestra aplicación te permite navegar a través de menús
                        curados cuidadosamente, realizar pedidos con facilidad y disfrutar
                        de entregas rápidas y confiables. Ya sea que estés buscando un
                        bocado rápido para llevar o quieras deleitarte con una cena
                        especial en casa, nuestra aplicación está diseñada para satisfacer
                        todos tus antojos y necesidades culinarias. ¡Descarga la
                        aplicación hoy mismo y descubre un mundo de sabores a tu alcance!"
                    </p>
                </Col>
            </Row>
            <Container></Container>
        </div>
    );
};

export default BannerHome;
