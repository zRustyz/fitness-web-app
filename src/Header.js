import React from "react";
import { Container, Navbar } from 'react-bootstrap';

export function Header(props){

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
            <Navbar.Brand>Fitness Style</Navbar.Brand>
        </Container>
        </Navbar>
    );
}