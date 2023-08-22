import React from "react";
import { Carousel, Card, Row, Col, Container } from "react-bootstrap";
import { useGetFoodsQuery } from "../api/apiSlice";

const ProductSlider = ({ product }) => {
    // console.log(product);
    const chunkSize = 3;
    const productGroups = [];

    if (product) {
        for (let i = 0; i < product[0].length; i += chunkSize) {
            productGroups.push(product[0].slice(i, i + chunkSize));
        }
    }
    return (
        <>
            <Container>
                {productGroups.length < 0 ? (
                    <h1 className="text-dark">cargando</h1>
                ) : (
                    <Carousel className="my-5">
                        {productGroups.map((group, index) => (
                            <Carousel.Item key={index}>
                                <Row>
                                    {group.map((newProduct, innerIndex) => (
                                        <Col key={innerIndex}>
                                            <Card className="card-body bg-black">
                                                <Card.Body className="text-bg-dark mt">
                                                    <Card.Img
                                                        className="img-tarjeta-producto"
                                                        variant="top"
                                                        src={newProduct.imagen}
                                                    />
                                                    <div className="card-body-text">
                                                        <Card.Title>
                                                            {newProduct.nombre}
                                                        </Card.Title>
                                                        <Card.Text>
                                                            {newProduct.categoria}
                                                        </Card.Text>
                                                        <Card.Text>
                                                            ${newProduct.precio}
                                                        </Card.Text>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                )}
            </Container>
        </>
    );
};

export default ProductSlider;
