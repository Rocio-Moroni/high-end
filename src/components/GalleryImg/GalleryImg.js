/* IMPORTS */

// SCSS import:
import './GalleryImg.scss'
// React import:
import React from 'react';
import { MdDesignServices, MdPrecisionManufacturing } from "react-icons/md";
import { IoMdRocket } from "react-icons/io";
import { HiRefresh } from "react-icons/hi";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



/* COMPONENTS */
// GalleryImg component:
const GalleryImg = () => {

    return (
        <Container fluid className='GalleryImg'>
            <Row className='ImagesRow'>
                <Col md={4} className='LeftImg'>
                </Col >

                <Col md={4} className='CenterImg'>
                    <div className='ImgTop'></div>
                    <div className='ImgBottom'></div>
                </Col>

                <Col md={4} className='RightImg'>
                </Col>
            </Row>


            <Row className='ProcessRow'>
                <Col md={3}>
                    <div> <MdDesignServices className='Icon' size={90}/> </div>
                    <h3>Diseñamos</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, officiis.</p>
                </Col>
                <Col md={3}>
                    <div> <MdPrecisionManufacturing className='Icon' size={90}/> </div>
                    <h3>Producimos</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, officiis.</p>
                </Col>
                <Col md={3}>
                    <div> <IoMdRocket className='Icon' size={90}/> </div>
                    <h3>Lanzamos</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, officiis.</p>
                </Col>
                <Col md={3}>
                    <div> <HiRefresh className='Icon' size={90}/> </div>
                    <h3>Refresh</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, officiis.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default GalleryImg;