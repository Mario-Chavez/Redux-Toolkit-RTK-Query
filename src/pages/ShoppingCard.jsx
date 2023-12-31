import { Col, Container, Row, Image, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deletOneOrder, setUserOrder } from "../api/userSlice";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import ModalBuy from "../components/ModalBuy";

const ShoppingCard = () => {
    const userOrder = useSelector((state) => state.user.user.orders);
    const [finalPrece, setfinalPrece] = useState(0);
    const [image, setImage] = useState("");
    const dispatch = useDispatch();
    const [modalShow, setModalShow] = useState(false);

    /* 
       const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();
    const [buy, setBuy] = useState([]);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        if (user) {
            if (user.orders?.length > 0) {
                const newProduct = user.orders;
                setBuy([...buy, ...newProduct]);
                console.log(buy);
                const mensaje = encodeURIComponent(`¡Hola! Mi pedido es: ${buy}`);
                setUrl(`https://wa.me/+543815723588?text=${mensaje}`);
            }
        }
    }, [user]);

    
    */

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
    }, [userOrder]);

    const handleImage = (image) => {
        setImage(image);
    };

    const handleDelet = (name) => {
        dispatch(deletOneOrder(name));
    };
    const handleBuy = () => {
        // const newProduct = {
        //     nombre: food.nombre,
        //     precio: food.precio,
        // };
        // <a href="https://wa.me/+543815723588" target="_blank">
        // </a>;
    };

    return (
        <>
            <div className="mt-5 container-detail text-white ">
                {userOrder.length > 0 ? (
                    <Container className="d-flex flex-column justify-content-center">
                        <h1 className="my-5 text-center">¡ Gracias por tu compra !</h1>
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
                                                                handleImage(
                                                                    product.imagen
                                                                )
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
                                                                backgroundColor:
                                                                    "transparent",
                                                                color: "inherit",
                                                                border: "none",
                                                                cursor: "pointer",
                                                                borderRadius: "50%",
                                                                width: "50px",
                                                                height: "50px",
                                                            }}
                                                            onClick={() =>
                                                                handleDelet(
                                                                    product.nombre
                                                                )
                                                            }
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

                            <Col
                                style={{
                                    height: "31rem",
                                    overflowY: "hidden",
                                }}
                            >
                                <Image
                                    src={image ? image : userOrder[0].imagen}
                                    className="w-100 "
                                />
                            </Col>
                            <div className="d-flex justify-content-between my-5">
                                <Link to={"/"} className="text-decoration-none fs-5">
                                    <span>
                                        <BiArrowBack />
                                    </span>{" "}
                                    Seguir Comprando
                                </Link>
                                <div className="fw-bold text-danger fs-4">
                                    Total: $ {finalPrece}
                                </div>
                            </div>
                        </Row>
                        <Row className="col-lg- col-md-4 col-12  mx-auto my-5">
                            <Button
                                variant="outline-success"
                                size="lg"
                                onClick={() => setModalShow(true)}
                            >
                                Comprar
                            </Button>
                        </Row>
                        <ModalBuy
                            userOrder={userOrder}
                            finalPrece={finalPrece}
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </Container>
                ) : (
                    <>
                        <Container className=" d-flex pt-5  flex-column  my-5 text-center">
                            <h1 className="my-5 text-center">
                                ¡ Tu carrito esta vacio !
                            </h1>
                            <div className="my-5">
                                <Link to={"/"} className=" text-decoration-none fs-2">
                                    <span>
                                        <BiArrowBack />
                                    </span>{" "}
                                    Seguir Comprando
                                </Link>
                            </div>
                        </Container>
                    </>
                )}
            </div>
        </>
    );
};

export default ShoppingCard;
