import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsFillBagFill } from "react-icons/bs";
import { BiSolidUser } from "react-icons/bi";
import { useSelector } from "react-redux";

const Header = () => {
    // state global
    const user = useSelector((state) => state.user.user);
    const [badge, setBadge] = useState(0);

    useEffect(() => {
        if (user) {
            if (user.orders?.length > 0) {
                setBadge(user.orders.length);
            }
        }
    }, [user]);

    return (
        <Navbar expand="lg" className="navbar navbar-dark bg-dark fixed-top main-header ">
            <Container fluid className=" text-bg-dark">
                <Navbar.Brand as={Link} to="/">
                    Food delivery
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                    >
                        {user ? (
                            user.orders.length > 0 ? (
                                <Nav.Link as={Link} to="/user/">
                                    <button
                                        className="position-relative"
                                        style={{
                                            backgroundColor: "transparent",
                                            color: "inherit",
                                            border: "none",
                                            cursor: "pointer",
                                            borderRadius: "50%",
                                        }}
                                    >
                                        <BsFillBagFill size={18} />
                                        <span className="position-absolute top-0 start-100 translate-middle">
                                            <span className=" text-danger">{badge}</span>
                                        </span>
                                    </button>
                                </Nav.Link>
                            ) : (
                                <Nav.Link as={Link} to="/user/">
                                    <BsFillBagFill size={18} />
                                </Nav.Link>
                            )
                        ) : (
                            <Nav.Link as={Link} to="/register">
                                <BiSolidUser size={18} />
                            </Nav.Link>
                        )}
                        <Nav.Link as={Link} to="/">
                            Home
                        </Nav.Link>
                        <Nav.Link href="#abautMe">Nosotros</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
