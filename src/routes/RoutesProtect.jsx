import React from "react";
import { useSelector } from "react-redux";
import Error404 from "../pages/Error404";

const RoutesProtect = ({ children }) => {
    const user = useSelector((state) => state.user.user);

    if (!user) {
        console.log("no hay user");
        return <Error404 />;
    }
    return children;
};

export default RoutesProtect;
