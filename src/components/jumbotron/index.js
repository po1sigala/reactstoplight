import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import "./style.css";

const Jumbo = props => {
    return (
        <Jumbotron fluid>
            <Container>
                <h1>{props.title}</h1>
                <p>{props.subheader}</p>
            </Container>
        </Jumbotron>
    );
};

export default Jumbo;
