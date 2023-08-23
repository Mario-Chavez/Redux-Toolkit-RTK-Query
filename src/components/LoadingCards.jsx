import { RotatingLines } from "react-loader-spinner";
import Placeholder from "react-bootstrap/Placeholder";
import { Card } from "react-bootstrap";

const LoadingCards = () => {
    const iteraction = new Array(19).fill(null); //array mock

    return (
        <div style={{ backgroundColor: "#212529" }} className="pt-5">
            <div className="container">
                <div className="row justify-content-center">
                    {iteraction.map((i, index) => (
                        <Card
                            key={index}
                            style={{ width: "18rem" }}
                            className="my-2 mx-2"
                        >
                            <div className="mx-auto">
                                <RotatingLines
                                    strokeColor="grey"
                                    strokeWidth="5"
                                    animationDuration="0.75"
                                    width="96"
                                    visible={true}
                                />
                            </div>
                            <Card.Body>
                                <Placeholder as={Card.Title} animation="glow">
                                    <Placeholder xs={6} />
                                </Placeholder>
                                <Placeholder as={Card.Text} animation="glow">
                                    <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                                    <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                                    <Placeholder xs={8} />
                                </Placeholder>
                            </Card.Body>
                            <Card.Footer>
                                <div className="d-flex justify-content-center">
                                    <Placeholder.Button variant="primary" xs={4} />
                                </div>
                            </Card.Footer>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LoadingCards;
