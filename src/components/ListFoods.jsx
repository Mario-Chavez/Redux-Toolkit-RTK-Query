import React from "react";
import { useGetFoodsQuery } from "../api/apiSlice";
import photo from "../assets/img-foto.jpg";
const ListFoods = () => {
    const { data: food, isLoading, isError } = useGetFoodsQuery();
    console.log(food);

    // else if (isError) return <div>Hay error</div>;

    return (
        <>
            {isLoading ? (
                <div>loading...</div>
            ) : (
                <div className="container">
                    <div className="row">
                        {food.map((food) => (
                            <div key={food._id} className="col-md-3 my-2 ">
                                <div className="card p-2">
                                    <img src={food.imagen} alt="imagen" />

                                    <div className="card-body">
                                        <h5 className="card-title">{`${food.nombre}`}</h5>
                                        <h5 className="card-text">{`${food.categoria}`}</h5>
                                    </div>
                                    <button
                                        className="btn btn-danger my-2"
                                        onClick={() => handleDelet(user.id)}
                                    >
                                        eliminar
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default ListFoods;
