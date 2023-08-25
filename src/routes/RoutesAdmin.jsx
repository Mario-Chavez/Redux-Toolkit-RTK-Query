import React from "react";
import { Route, Routes } from "react-router-dom";
import ShoppingCard from "../pages/ShoppingCard";

const RoutesAdmin = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<ShoppingCard />}></Route>
            </Routes>
        </>
    );
};

export default RoutesAdmin;
