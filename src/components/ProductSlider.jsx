import React from "react";
import { Carousel, Card, Row, Col } from "react-bootstrap";
import { useGetFoodsQuery } from "../api/apiSlice";

const ProductSlider = () => {
    const { data: products, isLoading, isError } = useGetFoodsQuery();
    const chunkSize = 4;
    const productGroups = [];

    if (products) {
        for (let i = 0; i < products.length; i += chunkSize) {
            productGroups.push(products.slice(i, i + chunkSize));
        }
    }
    return (
        <>
            {isLoading ? (
                <h1>cargando</h1>
            ) : (
                <Carousel className="my-5">
                    {productGroups.map((group, index) => (
                        <Carousel.Item key={index}>
                            <Row>
                                {group.map((product, innerIndex) => (
                                    <Col key={innerIndex}>
                                        <Card className="card-body bg-black">
                                            <Card.Img
                                                className="img-tarjeta-producto"
                                                variant="top"
                                                src={product.imagen}
                                            />
                                            <Card.Body>
                                                <Card.Title>{product.nombre}</Card.Title>
                                                <Card.Text>{product.categoria}</Card.Text>
                                                <Card.Text>${product.precio}</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </Carousel.Item>
                    ))}
                </Carousel>
            )}
        </>
    );
};

export default ProductSlider;
