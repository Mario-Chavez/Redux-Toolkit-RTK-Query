import React, { useEffect } from "react";
import { Carousel, Card, Row, Col, Container } from "react-bootstrap";
import { foodApi } from "../api/apiSlice";
import { useSelector } from "react-redux";

const ProductSlider = ({ category }) => {
    const chunkSize = 3;
    const productGroups = [];
    const { data } = useSelector(foodApi.endpoints.getFoods.select());

    //seguir aqui para filtrar
    // const objectFilter = data.filter(
    //     (product) => product.categoria == food.categoria
    // );
    useEffect(() => {
        if (data) {
            for (let i = 0; i < data.length; i += chunkSize) {
                productGroups.push(data.slice(i, i + chunkSize));
            }
        }
        console.log(typeof productGroups);
    }, []);

    return (
        <>
            <Container>
                {productGroups.length < 0 ? (
                    <h1 className="text-dark">cargando</h1>
                ) : (
                    <Carousel className="my-5 ">
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
