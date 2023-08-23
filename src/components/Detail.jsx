import { useParams } from "react-router-dom";
import { useGetOneFoodQuery } from "../api/apiSlice";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { TailSpin } from "react-loader-spinner";
import ProductSlider from "./ProductSlider";

const Detail = () => {
    const params = useParams();
    const { data: food, isLoading, isError } = useGetOneFoodQuery(params.id);

    return (
        <>
            {/* <h1 className="text-white">Caracteristicas de su comida</h1> */}

            {isLoading ? (
                <div className="container-detail ">
                    <Container className="mt-5 d-flex  justify-content-center align-items-center">
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
                <div className="container-detail py-5 " style={{ minHeight: "68vh" }}>
                    <Container className="mt-5 d-flex justify-content-center align-items-center">
                        <Card
                            className="m-3  card-style-shadow text-bg-dark"
                            style={{ backgroundColor: "rgba(18,18,22,1) " }}
                        >
                            <Row>
                                <Col
                                    md={7}
                                    className="overflow-y-auto scroll-listProduct mb-4"
                                >
                                    <Card.Body
                                        className="text-center mx-auto mb-5"
                                        style={{ width: "100%" }}
                                    >
                                        <Card.Title className="fs-1 fw-bold">
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
