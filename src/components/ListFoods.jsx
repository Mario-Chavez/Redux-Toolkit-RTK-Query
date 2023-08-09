import React from "react";
import { useGetFoodsQuery } from "../api/apiSlice";
const ListFoods = () => {
    const { data: food, isLoading, isError } = useGetFoodsQuery();
    console.log(food);
    if (isLoading) return <div>loading...</div>;
    else if (isError) return <div>Hay error</div>;

    return (
        <>
            <h1>soy lista</h1>
        </>
    );
};

export default ListFoods;
