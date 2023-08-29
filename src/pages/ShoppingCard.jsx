import React, { useState } from "react";
import { Col, Container, Row, Image, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setUserOrder } from "../api/userSlice";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const ShoppingCard = () => {
    const userOrder = useSelector((state) => state.user.user.orders);
    const [finalPrece, setfinalPrece] = useState(0);
    const dispatch = useDispatch();

    // console.log(userOrder);
    const sumaItem = () => {
        let precio = 0;
        const price = userOrder.map((item) => precio + item.precio);
        const sum = price.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0
        );
        setfinalPrece(sum);
    };
    useEffect(() => {
        sumaItem();
    }, []);

    return (
        <div className="mt-5 container-detail text-white ">
            <h1 className="my-5 text-center">Gracias racias por tu compra</h1>
            <Container className="d-flex justify-content-center">
                <Row className="col-12">
                    <Col md={12} sm={12} lg={8} className="mb-3">
                        <div
                            className="scroll-shoppingCard"
                            style={{
                                overflowY: "scroll",
                                maxHeight: "30rem",
                            }}
                        >
                            <table>
                                <thead>
                                    <tr>
                                        <th>Nombre de Producto</th>
                                        <th>Imágenes</th>
                                        <th>Cantidad</th>
                                        <th>Precio</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {userOrder.map((product, index) => (
                                        <tr key={index}>
                                            <td className=" d-flex justify-content-center align-content-center">
                                                <img
                                                    className="card-style-shadow"
                                                    style={{
                                                        objectFit: "cover",
                                                        width: "5rem",
                                                        height: "5rem",
                                                        borderRadius: "50%",
                                                    }}
                                                    src={product.imagen}
                                                    alt={product.nombre}
                                                />
                                            </td>
                                            <td>{product.nombre}</td>
                                            <td>$3</td>
                                            <td>$ {product.precio}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Col>

                    <Col>
                        <Image src={userOrder[0].imagen} className="w-100" />
                    </Col>
                    <div className="d-flex justify-content-between my-5">
                        <Link to={"/"} className="text-decoration-none fs-5">
                            <span>
                                <BiArrowBack />
                            </span>{" "}
                            Seguir Comprando
                        </Link>
                        <div>Total: {finalPrece}</div>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default ShoppingCard;
