import React from "react";
import { useGetFoodsQuery } from "../api/apiSlice";
import { useNavigate } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import LoadingCards from "./LoadingCards";

const ListFoods = () => {
    const { data: food, isLoading, isError } = useGetFoodsQuery();
    const navigate = useNavigate();

    const handleDetail = (id) => {
        navigate(`/detalles/${id}`);
    };

    return (
        <>
            {isLoading ? (
                <LoadingCards />
            ) : (
                <div
                    style={{
                        backgroundColor: "#212529",
                    }}
                    className="py-5"
                >
                    <h2 className="title text-bg-dark text-center py-5">
                        Nuestros Productos
                    </h2>
                    <div
                        className="container scroll-listProduct"
                        style={{
                            overflowY: "scroll",
                            maxHeight: "50rem",
                        }}
                    >
                        <div className="row justify-content-center">
                            {food.map((food) => (
                                <Card
                                    key={food._id}
                                    style={{
                                        width: "18rem",
                                        maxHeight: "40rem",
                                    }}
                                    className="col-md-3 my-3 mx-2 "
                                >
                                    <Card.Img
                                        variant="top"
                                        style={{
                                            height: "15rem",
                                            objectFit: "cover",
                                        }}
                                        src={food.imagen}
                                    />
                                    <Card.Body style={{ overflow: "hidden" }}>
                                        <Card.Title className="fs-3 fw-bolder my-2 ">{`${food.nombre}`}</Card.Title>
                                        <Card.Text className="fs-4  ">{`- ${food.categoria}`}</Card.Text>

                                        <Card.Text>
                                            <span className=" ">
                                                {" "}
                                                {`${food.descripcion}`}
                                            </span>
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer className="">
                                        <div className="d-flex justify-content-center ">
                                            <Button
                                                className=""
                                                variant="primary"
                                                onClick={() => handleDetail(food._id)}
                                            >
                                                Detalles
                                            </Button>
                                        </div>
                                    </Card.Footer>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ListFoods;
