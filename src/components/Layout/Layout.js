import React from 'react';
import { Row, Container } from "react-bootstrap"
import Navigation from '../Navigation/Navigation';

export default function Layout(props){
    return (
        <Container>
            <Row>
                <Navigation/>
            </Row>
            <main>
                {props.children}
            </main>
        </Container>
    )
}
