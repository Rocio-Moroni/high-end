/* IMPORTS */

// SCSS import:
import './Footer.scss';
import './FooterMediaQuery.scss';
// React import:
import React from 'react';
import { BsInstagram } from "react-icons/bs";
import { Container, Row, Col } from 'react-bootstrap';



/* COMPONENTS */
// Footer component:
const Footer = () => {

    return (
        <Container fluid className='Footer'>
            <Row>
                <Col className='FooterInstagram'>
                    <h6>¡Seguinos en Instagram! <br /> Y enterate de todo</h6>
                    <a href='https://www.instagram.com/highend.sw/' target="_blank"><BsInstagram/> ¡SEGUINOS!</a>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;