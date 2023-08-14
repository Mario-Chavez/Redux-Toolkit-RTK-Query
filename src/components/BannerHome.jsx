import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import plato from "../assets/plato.png";

const BannerHome = () => {
    return (
        <div className=" background-main mt-5 p-5">
            <Container>
                <Row className="justify-content-center" gap={15}>
                    <Col sm={12} lg={6} md={12}>
                        <h1 className="text-light fs-1">Looking for food</h1>
                        <p className="text-light">
                            "Descubre una experiencia culinaria única con nuestra
                            innovadora aplicación de comidas. Explora una amplia variedad
                            de deliciosas opciones gastronómicas, desde platos casuales
                            hasta exquisiteces gourmet. Nuestra aplicación te permite
                            navegar a través de menús curados cuidadosamente, realizar
                            pedidos con facilidad y disfrutar de entregas rápidas y
                            confiables. Ya sea que estés buscando un bocado rápido para
                            llevar o quieras deleitarte con una cena especial en casa,
                            nuestra aplicación está diseñada para satisfacer todos tus
                            antojos y necesidades culinarias. ¡Descarga la aplicación hoy
                            mismo y descubre un mundo de sabores a tu alcance!"
                        </p>
                    </Col>

                    <Col sm={12} lg={6} md={12}>
                        <Image className="" src={plato} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BannerHome;
