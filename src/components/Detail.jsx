import React from "react";
import photo from "../assets/img-foto.jpg";
import { useParams } from "react-router-dom";
import { useGetOneFoodQuery } from "../api/apiSlice";
import { Card, Col, Container, Image } from "react-bootstrap";
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
                <Container className="my-5">
                    <div className="  my-5">
                        <div className="w-50 mx-auto">
                            <Image src={food.imagen} className="img-detail" />
                        </div>

                        <div>{food.nombre}</div>
                        <div>{food.categoria}</div>
                    </div>
                </Container>

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
