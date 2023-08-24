import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsFillBagFill } from "react-icons/bs";
import { BiSolidUser } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { setUser, clearUser } from "../api/userSlice";

const Header = () => {
    /* continiar aqui */
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();
    console.log(user);

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
                            <Nav.Link as={Link} to="/carrito">
                                <BsFillBagFill size={18} />
                            </Nav.Link>
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
