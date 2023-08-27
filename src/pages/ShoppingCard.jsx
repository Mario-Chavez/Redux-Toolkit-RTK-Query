import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setUserOrder } from "../api/userSlice";

const ShoppingCard = () => {
    const userOrder = useSelector((state) => state.user.user.orders);
    const dispatch = useDispatch();

    console.log(userOrder);
    return (
        <div className="mt-5 container-detail text-white ">
            <h1 className="my-5 text-center">Gracias racias por tu compra</h1>
            <Container>
                <Row>
                    <Col>
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
                                <tr>
                                    <td>Producto 1</td>
                                    <td>
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqv6g1MEVc4R_f9SZunOZznHjqWFtesvKs8mv8QWW2Bg&s"
                                            alt="Imagen 1"
                                        />
                                    </td>
                                    <td>$3</td>
                                    <td>$19.99</td>
                                </tr>
                                <tr>
                                    <td>Producto 2</td>
                                    <td>
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9ky369UBMUZbC1i-n7ViKBxOxhOhttiNTWif0S2DO_Q&s"
                                            alt="Imagen 2"
                                        />
                                    </td>
                                    <td>$3</td>
                                    <td>$29.99</td>
                                </tr>
                                {/* Puedes agregar más filas de productos aquí */}
                            </tbody>
                        </table>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ShoppingCard;
