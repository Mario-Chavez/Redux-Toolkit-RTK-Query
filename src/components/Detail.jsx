import { useNavigate, useParams } from "react-router-dom";
import { useGetOneFoodQuery } from "../api/apiSlice";
import { Card, Col, Container, Image, Row, Button } from "react-bootstrap";
import { TailSpin } from "react-loader-spinner";
import ProductSlider from "./ProductSlider";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserOrder } from "../api/userSlice";
import { MdAddShoppingCart } from "react-icons/md";
import Swal from "sweetalert2";

const Detail = () => {
    const params = useParams();
    const { data: food, isLoading, isError } = useGetOneFoodQuery(params.id);
    const user = useSelector((state) => state.user.user);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleAddShoop = () => {
        const newProduct = {
            nombre: food.nombre,
            imagen: food.imagen,
            precio: food.precio,
        };
        user
            ? (console.log(user), dispatch(setUserOrder(newProduct)))
            : Swal.fire({
                  title: "Debes Registrarte para poder agregar a carrito?",
                  showDenyButton: true,
                  confirmButtonText: "Registrarme",
                  confirmButtonColor: "#1261BA",
                  denyButtonText: `Cancelar`,
              }).then((result) => {
                  /* Read more about isConfirmed, isDenied below */
                  if (result.isConfirmed) {
                      //   dispatch(setUser({ ...data, orders: [] }));
                      //   Swal.fire("Registrado!", "", "success");
                      //   reset();
                      navigate("/register");
                  }
              });
    };
    return (
        <>
            {isLoading ? (
                <div className="container-detail ">
                    <Container className="mt-5 d-flex flex-column  justify-content-center align-items-center">
                        <h1 className="text-center text-white my-5">
                            Caracteristicas de su comida
                        </h1>
                        <div className="my-5">
                            <TailSpin
                                height="80"
                                width="80"
                                color="#ffff"
                                ariaLabel="tail-spin-loading"
                                radius="1"
                                wrapperStyle={{ margin: "250px" }}
                                wrapperClass=""
                                visible={true}
                            />
                        </div>
                    </Container>
                </div>
            ) : (
                <div className="container-detail py-5 ">
                    <Container className="mt-5 d-flex flex-column justify-content-center align-items-center">
                        <h1 className="text-center text-white mb-5">Caracteristicas</h1>

                        <Card
                            className="m-3  card-style-shadow text-bg-dark position-relative"
                            style={{ backgroundColor: "rgba(18,18,22,1) " }}
                        >
                            <div className="position-absolute top-0 end-0 m-1 ">
                                <Button
                                    className="swing"
                                    style={{
                                        backgroundColor: "black",
                                        color: "inherit",
                                        border: "none",
                                        cursor: "pointer",
                                        borderRadius: "50%",
                                        width: "50px",
                                        height: "50px",
                                    }}
                                >
                                    <MdAddShoppingCart
                                        size={"1.5rem"}
                                        color="white"
                                        onClick={() => handleAddShoop()}
                                    />
                                </Button>
                            </div>
                            <Row>
                                <Col
                                    md={7}
                                    className="overflow-y-auto scroll-listProduct mb-4"
                                >
                                    <Card.Body
                                        className="text-center mx-auto mb-5 "
                                        style={{ width: "100%" }}
                                    >
                                        <Card.Title className="fs-1 fw-bold mt-5">
                                            {food.nombre}
                                        </Card.Title>
                                        <Card.Subtitle className="my-3 mb-5 text-primary fw-bold">
                                            {food.categoria}
                                        </Card.Subtitle>
                                        <Card.Text
                                            className=""
                                            style={{
                                                maxHeight: "auto",
                                            }}
                                        >
                                            {food.descripcion}
                                        </Card.Text>
                                    </Card.Body>
                                </Col>
                                <Col md={5} className="d-flex justify-content-center ">
                                    <Card.Img
                                        variant="top"
                                        src={food.imagen}
                                        style={{ width: "100%", objectFit: "cover" }}
                                    />
                                </Col>
                            </Row>
                        </Card>
                    </Container>
                    <div>
                        <h2 className=" text-center text-white my-5 ">
                            Otros productos de la misma categoria
                        </h2>
                        <ProductSlider category={food.categoria} />
                    </div>
                </div>
            )}
        </>
    );
};

export default Detail;
