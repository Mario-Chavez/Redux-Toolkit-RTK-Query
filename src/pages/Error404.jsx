import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Error404 = () => {
    const navigate = useNavigate();
    return (
        <div className="error-container pt-5 ">
            <h1 className="error-code">404</h1>
            <p className="error-message">Oops! Parece que esta página no existe.</p>
            <Button className="my-2" onClick={() => navigate("/")}>
                {" "}
                Volver
            </Button>
        </div>
    );
};

export default Error404;
