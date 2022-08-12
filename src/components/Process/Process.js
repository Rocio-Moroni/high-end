/* IMPORTS */

// SCSS import:
import './Process.scss';
import './ProcessMediaQuery.scss';
// React import:
import React from 'react';
import { MdDesignServices, MdPrecisionManufacturing } from "react-icons/md";
import { IoMdRocket } from "react-icons/io";
import { HiRefresh } from "react-icons/hi";
import { Container, Row, Col } from 'react-bootstrap';



/* COMPONENTS */
// Process component:
const Process = () => {

    return (
        <Container fluid className='ProcessContainer'>
            <Row className='ProcessRow'>
                <Col xl={6} lg={6} md={12} sm={12}>
                    <div> <MdDesignServices className='Icon' size={90}/> </div>
                    <h3>Diseñamos</h3>
                    <p>Nosotros dedicamos gran parte de nuestro tiempo a la creación y diseño de los drops, buscando siempre dar un enfoque único y diferente.</p>
                </Col>
                <Col xl={6} lg={6} md={12} sm={12}>
                    <div> <MdPrecisionManufacturing className='Icon' size={90}/> </div>
                    <h3>Producimos</h3>
                    <p>Contamos con los mejores talleres del país para producir y dar vida a nuestras ideas, con el foco siempre en la calidad de nuestras prendas.</p>
                </Col>
                <Col xl={6} lg={6} md={12} sm={12}>
                    <div> <IoMdRocket className='Icon' size={90}/> </div>
                    <h3>Lanzamos</h3>
                    <p>Planeamos una estrategia y un plan de acción para cada drop teniendo siempre en la mira a nuestros clientes y como brindarles la mejor experiencia.</p>
                </Col>
                <Col xl={6} lg={6} md={12} sm={12}>
                    <div> <HiRefresh className='Icon' size={90}/> </div>
                    <h3>Refresh</h3>
                    <p>Finalizado el drop eliminamos del catalogo las prendas anteriores “SOLD OUT” y repetimos el proceso considerando el feedback de las personas que tengan una prenda HIGH-END.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Process;