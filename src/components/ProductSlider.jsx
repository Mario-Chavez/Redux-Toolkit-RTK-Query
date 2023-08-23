import React, { useEffect, useState } from "react";
import { Carousel, Card, Row, Col, Container } from "react-bootstrap";
import { foodApi } from "../api/apiSlice";
import { useSelector } from "react-redux";
import { TailSpin } from "react-loader-spinner";

const ProductSlider = ({ category }) => {
    const chunkSize = 3;
    const { data, isLoading } = useSelector(foodApi.endpoints.getFoods.select());
    const [productGroups, setProductGroups] = useState([]);

    useEffect(() => {
        if (data) {
            const objectFilter = data.filter((product) => product.categoria === category);
            const groups = [];

            for (let i = 0; i < objectFilter.length; i += chunkSize) {
                groups.push(objectFilter.slice(i, i + chunkSize));
            }

            setProductGroups(groups);
        }
    }, [data, category]);

    return (
        <Container>
            {isLoading ? (
                <h1 className="text-dark">Cargando</h1>
            ) : productGroups.length === 0 ? (
                <Container className="mt-5 d-flex justify-content-center align-items-center">
                    <div className="my-5">
                        <TailSpin
                            height="40"
                            width="40"
                            color="#ffff"
                            ariaLabel="tail-spin-loading"
                            radius="1"
                            wrapperStyle={{ margin: "100px" }}
                            wrapperClass=""
                            visible={true}
                        />
                    </div>
                </Container>
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
    );
};

export default ProductSlider;
