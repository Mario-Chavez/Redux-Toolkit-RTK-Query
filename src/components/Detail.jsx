import React from "react";
import photo from "../assets/img-foto.jpg";
import { useParams } from "react-router-dom";
import { useGetOneFoodQuery } from "../api/apiSlice";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { TailSpin } from "react-loader-spinner";

const Detail = () => {
    const params = useParams();

    const { data: food, isLoading, isError } = useGetOneFoodQuery(params.id);
    return (
        <>
            {isLoading ? (
                <div className="container-detail " style={{ height: "65vh" }}>
                    <Container className="mt-5 d-flex justify-content-center align-items-center">
                        <div className="my-5">
                            <TailSpin
                                height="80"
                                width="80"
                                color="#ffff"
                                ariaLabel="tail-spin-loading"
                                radius="1"
                                wrapperStyle={{ margin: "100px" }}
                                wrapperClass=""
                                visible={true}
                            />
                        </div>
                    </Container>
                </div>
            ) : (
                <div className="container-detail py-5" style={{ minHeight: "68vh" }}>
                    <Container className="mt-5 d-flex justify-content-center align-items-center">
                        <Card className="m-5" style={{}}>
                            <Row>
                                <Col md={8}>
                                    {" "}
                                    {/* Columna izquierda */}
                                    <Card.Body>
                                        <Card.Title>{food.nombre}</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card
                                            title and make up the bulk of the card's
                                            content.
                                        </Card.Text>
                                    </Card.Body>
                                </Col>
                                <Col
                                    md={4}
                                    className="d-flex justify-content-center align-items-center"
                                >
                                    {" "}
                                    {/* Columna derecha */}
                                    <Card.Img variant="top" src={food.imagen} />
                                </Col>
                            </Row>
                        </Card>
                        {/* <div className="  my-5">
                        <div className="w-50 mx-auto">
                            <Image src={food.imagen} className="img-detail" />
                        </div>

                        <div>{food.nombre}</div>
                        <div>{food.categoria}</div>
                    </div> */}
                    </Container>
                </div>
            )}
        </>
    );
};

export default Detail;
