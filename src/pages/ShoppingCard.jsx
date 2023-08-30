import React, { useState } from "react";
import { Col, Container, Row, Image, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setUserOrder } from "../api/userSlice";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { RiDeleteBinLine } from "react-icons/ri";

const ShoppingCard = () => {
    const userOrder = useSelector((state) => state.user.user.orders);
    const [finalPrece, setfinalPrece] = useState(0);
    const [image, setImage] = useState("");
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

    const handleImage = (image) => {
        setImage(image);
    };

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
                                        <th>Precio x unidad</th>
                                        <th>Cantidad</th>
                                        <th></th>
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
                                                    onClick={() =>
                                                        handleImage(product.imagen)
                                                    }
                                                    src={product.imagen}
                                                    alt={product.nombre}
                                                />
                                            </td>
                                            <td>{product.nombre}</td>
                                            <td>$ {product.precio}</td>
                                            <td> 1</td>
                                            <td className="swing">
                                                <Button
                                                    className="swing"
                                                    style={{
                                                        backgroundColor: "transparent",
                                                        color: "inherit",
                                                        border: "none",
                                                        cursor: "pointer",
                                                        borderRadius: "50%",
                                                        width: "50px",
                                                        height: "50px",
                                                    }}
                                                >
                                                    <RiDeleteBinLine size={20} />
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Col>

                    <Col>
                        <Image
                            src={image ? image : userOrder[0].imagen}
                            className="w-100"
                        />
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
