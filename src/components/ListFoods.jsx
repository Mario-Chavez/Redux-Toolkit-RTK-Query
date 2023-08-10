import React from "react";
import { useGetFoodsQuery } from "../api/apiSlice";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import Placeholder from "react-bootstrap/Placeholder";
import { Button, Card } from "react-bootstrap";

const ListFoods = () => {
    const { data: food, isLoading, isError } = useGetFoodsQuery();
    const navigate = useNavigate();
    const iteraction = new Array(19).fill(null); //array mock

    const handleDetail = (id) => {
        navigate(`/detalles/${id}`);
    };

    return (
        <>
            {/* 
         
        */}
            {isLoading ? (
                <div className="container">
                    <div className="row ">
                        {iteraction.map((i, index) => (
                            <Card
                                key={index}
                                style={{ width: "18rem" }}
                                className="my-2 mx-2"
                            >
                                <div className="mx-auto">
                                    <RotatingLines
                                        strokeColor="grey"
                                        strokeWidth="5"
                                        animationDuration="0.75"
                                        width="96"
                                        visible={true}
                                    />
                                </div>
                                <Card.Body>
                                    <Placeholder as={Card.Title} animation="glow">
                                        <Placeholder xs={6} />
                                    </Placeholder>
                                    <Placeholder as={Card.Text} animation="glow">
                                        <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                                        <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                                        <Placeholder xs={8} />
                                    </Placeholder>
                                </Card.Body>
                                <Card.Footer>
                                    <div className="d-flex justify-content-between">
                                        <Placeholder.Button variant="primary" xs={3} />
                                        <Placeholder.Button variant="danger" xs={3} />
                                    </div>
                                </Card.Footer>
                            </Card>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="container">
                    <div className="row ">
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
                                        <Button variant="primary">Detail</Button>
                                        <Button variant="danger">Delet</Button>
                                    </div>
                                </Card.Footer>
                            </Card>
                            // <div key={food._id} >
                            //     <div className="card p-2">
                            //         <img src={food.imagen} alt="imagen" />

                            //         <div className="card-body">
                            //             <h5 className="card-title">{`${food.nombre}`}</h5>
                            //             <h5 className="card-text">{`${food.categoria}`}</h5>
                            //         </div>
                            //         <button
                            //             className="btn btn-info my-2"
                            //             onClick={() => handleDetail(food._id)}
                            //         >
                            //             detalle
                            //         </button>
                            //         <button
                            //             className="btn btn-danger my-2"
                            //             onClick={() => handleDelet(user.id)}
                            //         >
                            //             eliminar
                            //         </button>
                            //     </div>
                            // </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default ListFoods;
