import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import WhatsAppBotton from "./WhatsAppBotton";

const Header = () => {
    return (
        <Navbar expand="lg" className="navbar navbar-dark bg-dark fixed-top main-header ">
            <Container fluid className=" text-bg-dark">
                <Navbar.Brand href="#">Food delivery</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Link</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
