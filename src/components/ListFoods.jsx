import React from "react";
import { useGetFoodsQuery } from "../api/apiSlice";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import Placeholder from "react-bootstrap/Placeholder";
import { Button, Card } from "react-bootstrap";

const ListFoods = () => {
    const { data: food, isLoading, isError } = useGetFoodsQuery();
    const navigate = useNavigate();

    const handleDetail = (id) => {
        navigate(`/detalles/${id}`);
    };

    return (
        <>
            {/* 
         <RotatingLines
                            strokeColor="grey"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="96"
                            visible={true}
                        />
        */}
            {isLoading ? (
                <h1>cargando</h1>
            ) : (
                // <div className="container">
                //     <div className="row">
                //         {food.map((food) => (
                //             <div key={food._id} className="col-md-3 my-2 ">
                //                 <div className="card p-2">
                //                     <img src={food.imagen} alt="imagen" />

                //                     <div className="card-body">
                //                         <h5 className="card-title">{`${food.nombre}`}</h5>
                //                         <h5 className="card-text">{`${food.categoria}`}</h5>
                //                     </div>
                //                     <button
                //                         className="btn btn-info my-2"
                //                         onClick={() => handleDetail(food._id)}
                //                     >
                //                         detalle
                //                     </button>
                //                     <button
                //                         className="btn btn-danger my-2"
                //                         onClick={() => handleDelet(user.id)}
                //                     >
                //                         eliminar
                //                     </button>
                //                 </div>
                //             </div>
                //         ))}
                //     </div>
                // </div>
                <div className="container">
                    <div className="row ">
                        {food.map((food) => (
                            <Card
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
