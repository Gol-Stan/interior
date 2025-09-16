import React from "react";
import './Works.css';
import { Card } from 'react-bootstrap';
import ArtCourseImg1 from '../../utils/images/int3.jpg';
import ArtCourseImg2 from '../../utils/images/int2.jpg';
import ArtCourseImg3 from '../../utils/images/int1.jpg';
import ArtCourseImg4 from '../../utils/images/home-1622401_1920.jpg';
import FaqAccordion from "../../components/FaqAccordion/FaqAccordion";

const works = [
    {
        id: 1,
        image: [ArtCourseImg1],
        title: 'Art Course One',
        description: 'Lorem Lorem Lorem Lorem'
    },
    {
        id: 2,
        image: [ArtCourseImg2],
        title: 'Art Course Two',
        description: 'Lpus Lupus Lupus'
    },
    {
        id: 3,
        image: [ArtCourseImg3],
        title: 'Art Course Three',
        description: 'Dolce Dolce Dolce Dolce'
    },
    {
        id: 4,
        image: [ArtCourseImg4],
        title: 'Art Course Four',
        description: 'Pie Pie Pie Pie'
    },
]

function Works() {
    return (
        <div className='works-page'>
            <header className='height-75'>
                <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                    <h1 className='text-center fw-semibold'>Our Works</h1>
                    <p className='text-center w-75 mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!</p>
                </div>
            </header>

            <div className='conteiner py-5'>
                <div className='row g-4'>
                    {works.map((work) => (
                        <div key={work.id} className='col-lg-6'>
                            <Card className='text-white shadow scale-hover-effect'>
                                <Card.Img src={work.image} />
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

            <div className='bgdark text-light py-5'>
                <FaqAccordion />
            </div>
        </div>
    )
}

export default Works;