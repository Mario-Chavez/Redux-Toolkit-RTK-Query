import React from "react";
import photo from "../assets/img-foto.jpg";
import { useParams } from "react-router-dom";
import { useGetOneFoodQuery } from "../api/apiSlice";
import { Card } from "react-bootstrap";

const Detail = () => {
    const params = useParams();

    const { data: food, isLoading, isError } = useGetOneFoodQuery(params.id);

    return (
        <>
            <Card border="primary" style={{ width: "18rem" }}>
                <Card.Header>Header</Card.Header>
                <Card.Body>
                    <Card.Title>Primary Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
};

export default Detail;
