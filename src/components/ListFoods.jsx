import React from "react";
import { useGetFoodsQuery } from "../api/apiSlice";
import { useNavigate } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import LoadingCards from "./LoadingCards";

const ListFoods = () => {
    const { data: food, isLoading, isError } = useGetFoodsQuery();
    const navigate = useNavigate();
    console.log(food);
    const handleDetail = (id) => {
        navigate(`/detalles/${id}`);
    };

    return (
        <>
            {isLoading ? (
                <LoadingCards />
            ) : (
                <div className="container ">
                    <div className="row justify-content-center">
                        {food.map((food) => (
                            <Card
                                key={food._id}
                                style={{ width: "18rem" }}
                                className="col-md-3 my-2 mx-2"
                            >
                                <Card.Img variant="top" src={food.imagen} />
                                <Card.Body>
                                    <Card.Title>{`${food.nombre}`}</Card.Title>
                                    <Card.Text>{`${food.categoria}`}</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <div className="d-flex justify-content-between">
                                        <Button
                                            variant="primary"
                                            onClick={() => handleDetail(food._id)}
                                        >
                                            Detail
                                        </Button>
                                        <Button
                                            variant="danger"
                                            // onClick={() => handleDelet(user.id)}
                                        >
                                            Delet
                                        </Button>
                                    </div>
                                </Card.Footer>
                            </Card>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default ListFoods;
