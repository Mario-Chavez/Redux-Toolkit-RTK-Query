import React from "react";
import { Modal, Button } from "react-bootstrap";
import { clearUser } from "../api/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ModalBuy = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handlerBuy = () => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Gracias por su compra",
            showConfirmButton: false,
            timer: 1500,
        });
        dispatch(clearUser());
        navigate("/");
    };
    return (
        <Modal
            show={props.show}
            onHide={props.onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="modal-buy"
        >
            <div className="bg-dark text-bg-primary">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Modal heading
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                            {props.userOrder.map((product, index) => (
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
                                    <td>$ {product.precio}</td>
                                    <td> 1</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="text-center fw-bold fs-4 text-primary">
                        $ {props.finalPrece}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="d-flex justify-content-between">
                        <Button variant="success" onClick={handlerBuy}>
                            Comprar
                        </Button>
                    </div>
                </Modal.Footer>
            </div>
        </Modal>
    );
};

export default ModalBuy;
