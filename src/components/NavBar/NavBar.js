/* IMPORTS */

// SCSS import:
import './NavBar.scss';
import './NavBarMediaQuery.scss';
//Components import:
import BurgerMenu from '../BurgerMenu/BurgerMenu';
// React import:
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { BsInstagram } from "react-icons/bs";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



/* COMPONENTS */
// NavBar component:
const NavBar = () => {

    return (
        <Container fluid className='NavBar'>
            <Row>
                <Col xl={7} lg={7} md={6} sm={12} className='LogoArea' href='#home'>
                    <Col md={4} className='LogoImg'>
                        <img src='https://res.cloudinary.com/dfprmjlir/image/upload/v1659648045/HIGH%20END/Blan-iso-Horizontal_2x_hupjcr.png'></img>
                    </Col>
                </Col>
                <Col className='NavArea'>
                    <Col className='Link'> <p>Nosotros</p> </Col>
                    <Col className='Link'> <p>Galería</p> </Col>
                    <Col className='Link'> <p>Contacto</p> </Col>
                    <Col className='InstagramLogo'><BsInstagram className='Logo' size={23}/></Col>
                </Col>
            <label className='BurgerMenu'> <BurgerMenu /> </label>
            </Row>
        </Container>
    )
}

export default NavBar;