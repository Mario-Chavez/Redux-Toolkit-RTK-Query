import React from "react";
import photo from "../assets/img-foto.jpg";
import { useParams } from "react-router-dom";
import { useGetOneFoodQuery } from "../api/apiSlice";
import { Card, Col, Row } from "react-bootstrap";
import { FallingLines } from "react-loader-spinner";

const Detail = () => {
    const params = useParams();

    const { data: food, isLoading, isError } = useGetOneFoodQuery(params.id);
    console.log(food);
    return (
        <>
            {isLoading ? (
                <FallingLines
                    color="#4fa94d"
                    width="100"
                    visible={true}
                    ariaLabel="falling-lines-loading"
                />
            ) : (
                <Card className="mx-auto my-5">
                    <Card.Body>
                        <Row>
                            <Col md={12}>
                                <Card.Img src={food.imagen} />
                            </Col>
                            <Col md={5}>
                                <Card.Title>{food.nombre}</Card.Title>
                                <Card.Text>{food.categoria}</Card.Text>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>

                // <Card border="primary" style={{ width: "18rem" }}>
                //     <Card.Header>{food.nombre}</Card.Header>
                //     <Card.Img variant="top" src={food.imagen} />
                //     <Card.Body>
                //         <Card.Title>{food.nombre}</Card.Title>
                //         <Card.Text>
                //             Some quick example text to build on the card title and make up
                //             the bulk of the card's content.
                //         </Card.Text>
                //     </Card.Body>
                // </Card>
            )}
        </>
    );
};

export default Detail;
