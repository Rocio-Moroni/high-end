/* IMPORTS */

// SCSS import:
import './Slider.scss';
import './SliderMediaQuery.scss';
//Components import:
// React import:
import React from 'react';
import Container from 'react-bootstrap/Container';


/* COMPONENTS */
// Slider component:

function Slider() {
    return (
    <Container fluid className='GalleryImgSlider'>
        <div className="GalleryWrapper">
            <div className="ImageWrapper ImageWrapper1">
                <a href="#lightbox-image-1">
                    <img className='FirstImg' src="https://res.cloudinary.com/dfprmjlir/image/upload/v1659670748/HIGH%20END/_MG_8537_guj32k.jpg" alt="" />
                </a>
            </div>

            <div className="ImageWrapper ImageWrapper2">
                <a href="#lightbox-image-2">
                    <img className='CenterImgTop' src="https://res.cloudinary.com/dfprmjlir/image/upload/v1659670753/HIGH%20END/_MG_8610_uldfcg.jpg" alt="" />
                </a>
            </div>

            <div className="ImageWrapper ImageWrapper3">
                <a href="#lightbox-image-3">
                    <img className='CenterImgBottom' src="https://res.cloudinary.com/dfprmjlir/image/upload/v1659670746/HIGH%20END/_MG_8805_wfcijc.jpg" alt="" />
                </a>
            </div>

            <div className="ImageWrapper ImageWrapper4">
                <a href="#lightbox-image-4">
                    <img className='FourthtImg' src="https://res.cloudinary.com/dfprmjlir/image/upload/v1659670754/HIGH%20END/_MG_8883_ktxf7f.jpg" alt="" />
                </a>
            </div>
        </div>


        <div className="gallery-lightboxes">
            <div className="image-lightbox" id="lightbox-image-1">
                <div className="image-lightbox-wrapper">
                    <a href="#" className="close"></a>
                    <a href="#lightbox-image-4" className="arrow-left"></a>
                    <a href="#lightbox-image-2" className="arrow-right"></a>
                    <img src="https://res.cloudinary.com/dfprmjlir/image/upload/v1659670748/HIGH%20END/_MG_8537_guj32k.jpg" alt="" />
                </div>
            </div>

            <div className="image-lightbox" id="lightbox-image-2">
                <div className="image-lightbox-wrapper">
                    <a href="#" className="close"></a>
                    <a href="#lightbox-image-1" className="arrow-left"></a>
                    <a href="#lightbox-image-3" className="arrow-right"></a>
                    <img src="https://res.cloudinary.com/dfprmjlir/image/upload/v1659670753/HIGH%20END/_MG_8610_uldfcg.jpg" alt="" />
                </div>
            </div>

            <div className="image-lightbox" id="lightbox-image-3">
                <div className="image-lightbox-wrapper">
                    <a href="#" className="close"></a>
                    <a href="#lightbox-image-2" className="arrow-left"></a>
                    <a href="#lightbox-image-4" className="arrow-right"></a>
                    <img src="https://res.cloudinary.com/dfprmjlir/image/upload/v1659670746/HIGH%20END/_MG_8805_wfcijc.jpg" alt="" />
                </div>
            </div>

            <div className="image-lightbox" id="lightbox-image-4">
                <div className="image-lightbox-wrapper">
                    <a href="#" className="close"></a>
                    <a href="#lightbox-image-3" className="arrow-left"></a>
                    <a href="#lightbox-image-1" className="arrow-right"></a>
                    <img src="https://res.cloudinary.com/dfprmjlir/image/upload/v1659670754/HIGH%20END/_MG_8883_ktxf7f.jpg" alt="" />
                </div>
            </div>
        </div>
    </Container>
    );
}

export default Slider;