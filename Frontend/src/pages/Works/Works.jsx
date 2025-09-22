import React from "react";
import './Works.css';
import { Card } from 'react-bootstrap';
import ArtCourseImg1 from '../../utils/images/int3.jpg';
import ArtCourseImg2 from '../../utils/images/int2.jpg';
import ArtCourseImg3 from '../../utils/images/int1.jpg';
import ArtCourseImg4 from '../../utils/images/home-1622401_1920.jpg';
import FaqAccordion from "../../components/FaqAccordion/FaqAccordion";
import { useTranslation } from "react-i18next";

const images = [ArtCourseImg1, ArtCourseImg2, ArtCourseImg3, ArtCourseImg4];

function Works() {
    const { t } = useTranslation();
    const works = t("works.list", { returnObjects: true });

    return (
        <div className='works-page'>
            <header className='height-75'>
                <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                    <h1 className='text-center fw-semibold'>{t("works.title")}</h1>
                    <p className='text-center w-75 mb-5'>{t("works.subtitle")}</p>
                </div>
            </header>

            <div className='container py-5'>
                <div className='row g-4'>
                    {works.map((work, index) => (
                        <div key={work.id} className='col-lg-6'>
                            <Card className='text-white shadow scale-hover-effect'>
                                <Card.Img
                                    src={images[index]}
                                    className='img-fluid'
                                    width='500'
                                    height='400'
                                />
                                <Card.ImgOverlay className='d-flex flex-column align-items-center justify-content-center p-md-5'>
                                    <Card.Title className='text-center fs-1 text-danger'>{work.title}</Card.Title>
                                    <Card.Text className='text-center'>{work.description}</Card.Text>
                                    <button type='button' className='btn btn-outline-light text-capitalize fw-semibold'></button>
                                </Card.ImgOverlay>
                            </Card>
                        </div>
                        ))}
                </div>
            </div>

            <div className='bgdark text-dark py-5'>
                <FaqAccordion />
            </div>

        </div>
    )
}

export default Works;