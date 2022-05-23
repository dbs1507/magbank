import React from "react";
import { Link } from 'react-router-dom'
import { Navbar, Nav, ButtonGroup, Button, NavDropdown, Container } from "react-bootstrap";
import "./Navbar.scss"
import logo from "../assets/logo.svg";

//biblioteca importada do react de bootstrap faz menu de navegação drop down prontinho
const Navigation = ({ onClick }) => (
    <Navbar variant="dark" expand="lg">
        <Container>
            <Navbar.Brand>
                <Link to='/'>
                    <img //logo pagina
                        src={logo}
                        height="30"
                        className="d-inline-block align-top"
                        alt="Magbank logo"
                    />
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#cartao">Cartão</Nav.Link>
                    <Nav.Link href="#quemsomos">Quem somos</Nav.Link>
                    <Nav.Link href="#faq">FAQ</Nav.Link>
                </Nav>
                <ButtonGroup aria-label="Basic example">
                    <Button variant="outline-light">
                        <NavDropdown title="Acessar minha conta" id="basic-nav-dropdown">
                            <NavDropdown.Item>
                                <Link to="/login">
                                    Pessoa física
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to="/login">
                                    Pessoa jurídica
                                </Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Button>
                    <Button variant="outline-light" onClick={onClick}>Abra sua conta</Button>
                </ButtonGroup>
            </Navbar.Collapse>
        </Container>
    </Navbar>
)

export default Navigation;